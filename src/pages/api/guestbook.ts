import { and, db, eq, Guestbook as GuestbookDB, gte } from "astro:db";
import type { APIRoute } from "astro";

export const prerender = false;

const AUTHOR_MAX_LENGTH = 28;
const THEME_MIN = 1;
const THEME_MAX = 37;

// Dumb spam filtering. (Is it dumb if it works?)
const SPAM_FILTER_STRINGS = ["<a href", "href="];

// 2 minutes
const DUPLICATE_WINDOW_MS = 2 * 60 * 1000;

const jsonResponse = (body: object, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const ALL: APIRoute = () =>
  jsonResponse({ error: "Method not allowed" }, 405);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData().catch(() => null);
  if (!formData) {
    return jsonResponse({ error: "Invalid request" }, 400);
  }

  const rawAuthor = formData.get("author");
  const content = formData.get("content");
  const url = formData.get("url");
  const theme = formData.get("theme");
  const honeypot = formData.get("special");

  if (
    honeypot ||
    typeof rawAuthor !== "string" ||
    typeof content !== "string" ||
    content.length > 140 ||
    typeof url !== "string" ||
    typeof theme !== "string"
  ) {
    return jsonResponse({ error: "Invalid request" }, 400);
  }

  const author = rawAuthor.trim();
  if (!author || author.length > AUTHOR_MAX_LENGTH) {
    return jsonResponse({ error: "Invalid request" }, 400);
  }

  const themeNum = Number.parseInt(theme, 10);
  if (Number.isNaN(themeNum) || themeNum < THEME_MIN || themeNum > THEME_MAX) {
    return jsonResponse({ error: "Invalid request" }, 400);
  }

  const cutoff = new Date(Date.now() - DUPLICATE_WINDOW_MS);
  const existing = await db
    .select({ id: GuestbookDB.id })
    .from(GuestbookDB)
    .where(
      and(
        eq(GuestbookDB.author, author),
        eq(GuestbookDB.content, content),
        gte(GuestbookDB.timestamp, cutoff),
      ),
    )
    .limit(1);

  if (existing.length > 0) {
    return jsonResponse({ error: "Duplicate submission" }, 409);
  }

  const isSpam = SPAM_FILTER_STRINGS.some((str) => content.includes(str));

  await db.insert(GuestbookDB).values({
    author,
    content,
    url: url || undefined,
    theme: themeNum,
    isSpam,
  });

  return jsonResponse({ success: true }, 201);
};

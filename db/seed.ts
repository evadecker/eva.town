import { db, Guestbook } from "astro:db";

export default async function seed() {
  await db.insert(Guestbook).values([
    {
      author: "John Doe",
      content: "You are so cool!",
      timestamp: new Date("2021-01-01T12:00:00Z"),
    },
    {
      author: "John Doe, The Second",
      content: "I agree with my dad!",
      timestamp: new Date("2021-01-01T12:01:00Z"),
    },
    {
      author: "boomy",
      content: "  we did this",
      timestamp: new Date("2023-03-15T12:01:00Z"),
    },
    {
      author: "fulllength",
      content:
        "123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890",
      timestamp: new Date("2024-04-12T12:01:00Z"),
    },
    {
      author: "text emotes with space",
      content: "          ʕ•́ᴥ•̀ʔっ♡          ",
    },
    {
      author: "With URL",
      content: "somethingnewtotellyou friend ok let's try this to go",
      url: "https://example.com",
    },
  ]);
}

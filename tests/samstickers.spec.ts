import { test, expect } from "@playwright/test";

test.describe.configure({ retries: 3 });

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("displays Sam sticker on click", async ({ page }) => {
  await page.getByRole("button", { name: "Samwise" }).click();
  const samSticker = await page.getByRole("img", { name: "Samwise" });
  await expect(page.getByAltText("Samwise")).toBeVisible();
});

test("displays Shoo button after 7 Sams have appeared", async ({ page }) => {
  for (let i = 0; i < 7; i++) {
    await page.getByRole("button", { name: "Samwise" }).dispatchEvent("click");
    await expect(page.getByAltText("Samwise")).toHaveCount(i + 1);
  }
  await expect(page.getByRole("button", { name: "shoo!" })).toBeVisible();
});

test("shoos the Sams", async ({ page }) => {
  for (let i = 0; i < 7; i++) {
    await page.getByRole("button", { name: "Samwise" }).dispatchEvent("click");
    await expect(page.getByAltText("Samwise")).toHaveCount(i + 1);
  }

  await page.getByRole("button", { name: "shoo!" }).click();

  const samStickers = page.getByAltText("Samwise");
  const samStickersCount = await samStickers.count();

  for (let i = 0; i < samStickersCount; i++) {
    await expect(samStickers.nth(i)).not.toBeInViewport();
  }
});

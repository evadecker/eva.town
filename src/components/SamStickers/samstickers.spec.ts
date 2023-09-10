import { expect, test } from "@playwright/test";

test.describe.configure({ retries: 3 });

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("displays Sam sticker on click", async ({ page }) => {
  await page.getByRole("button", { name: "Samwise" }).click();
  await expect(page.getByTestId("samSticker")).toBeVisible();
});

test("displays Shoo button after 3 Sams have appeared", async ({ page }) => {
  const samStickers = page.getByTestId("samSticker");

  for (let i = 0; i < 3; i++) {
    await page.getByRole("button", { name: "Samwise" }).dispatchEvent("click");
    await expect(samStickers).toHaveCount(i + 1);
  }
  await expect(page.getByRole("button", { name: "shoo!" })).toBeVisible();
});

test("shoos the Sams", async ({ page }) => {
  const samStickers = page.getByTestId("samSticker");

  for (let i = 0; i < 3; i++) {
    await page.getByRole("button", { name: "Samwise" }).dispatchEvent("click");
    await expect(samStickers).toHaveCount(i + 1);
  }

  await page.getByRole("button", { name: "shoo!" }).click();

  const samStickersCount = await samStickers.count();

  for (let i = 0; i < samStickersCount; i++) {
    await expect(samStickers.nth(i)).not.toBeInViewport();
  }
});

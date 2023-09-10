import { expect,test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle("Eva Decker");
});

test("changes theme", async ({ page }) => {
  const themeToggle = page.locator("[data-theme-toggle]");
  await themeToggle.click();
  await expect(page.locator("body")).toHaveAttribute("data-theme", "dark");
  await themeToggle.click();
  await expect(page.locator("body")).toHaveAttribute("data-theme", "light");
});

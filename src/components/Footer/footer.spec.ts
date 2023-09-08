import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("includes correct social links", async ({ page }) => {
  const githubLink = await page.getByRole("link", { name: "Github" });
  const linkedInLink = await page.getByRole("link", { name: "LinkedIn" });

  await expect(githubLink).toHaveAttribute(
    "href",
    "https://github.com/evadecker"
  );
  await expect(linkedInLink).toHaveAttribute(
    "href",
    "https://linkedin.com/in/evadecker"
  );
});

test("opens social links in new tab", async ({ page }) => {
  const githubLink = await page.getByRole("link", { name: "Github" });
  const linkedInLink = await page.getByRole("link", { name: "LinkedIn" });

  await expect(githubLink).toHaveAttribute("target", "_blank");
  await expect(linkedInLink).toHaveAttribute("target", "_blank");
});

test("downloads resume", async ({ page }) => {
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: "Resume" }).click();
  const download = await downloadPromise;
  await expect(download.suggestedFilename()).toBe("eva-decker-resume.pdf");
});

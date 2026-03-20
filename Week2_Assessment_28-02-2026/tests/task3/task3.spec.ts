import { test } from "../../Playwright/node_modules/@playwright/test";

test("task1", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
  await page.locator("//input[@id='name']").fill("Roshan Kumar");
  await page.locator("//input[@id='email']").fill("roshankrr16@gmail.com");
  await page.locator("//input[@id='password']").fill("@Abv@2405");
  await page.locator("//button[@type='submit']").click();
  await page.locator("//input[@id='email']").fill("roshankrr16@gmail.com");
  await page.locator("//input[@id='password']").fill("@Abv@2305");
  await page.locator("//button[@type='submit']").click();

  await page.screenshot({ path: "./screenshots/userlogin.png" });
});

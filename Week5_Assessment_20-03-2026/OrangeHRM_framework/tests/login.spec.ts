import { test, expect } from "@playwright/test";
import loginData from "../utility/loginData.json";
import Login from "../pageObjectModel/login.page";
test("Login", async ({ page }) => {
  await page.goto(loginData.url);
  let login = new Login(page);
  await login.loginFunction(loginData);
  page.screenshot({ path: "./screenshots/login.png" });
});

import { Locator, Page, Expect, expect } from "@playwright/test";

export default class Login {
  usernameInp: Locator;
  passwordInp: Locator;
  submitBtn: Locator;
  page: Page;

  constructor(page: Page) {
    this.usernameInp = page.locator('//input[@name="username"]');
    this.passwordInp = page.locator('//input[@name="password"]');
    this.submitBtn = page.locator('//button[@type="submit"]');
    this.page = page;
  }

  async loginFunction(credentials: {
    url: string;
    username: string;
    password: string;
  }) {
    await this.usernameInp.fill(credentials.username);
    await this.passwordInp.fill(credentials.password);
    await this.submitBtn.click();
    await expect(this.page).toHaveURL(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
    );
  }
}

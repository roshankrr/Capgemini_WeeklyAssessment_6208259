import { Locator, Page } from "@playwright/test";

export default class Login {
  usernameInp: Locator;
  passwordInp: Locator;
  submitBtn: Locator;

  constructor(page: Page) {
    this.usernameInp = page.locator('//input[@name="username"]');
    this.passwordInp = page.locator('//input[@name="password"]');
    this.submitBtn = page.locator('//button[@type="submit"]');
  }

  async loginFunction(credentials: {
    url: string;
    username: string;
    password: string;
  }) {
    await this.usernameInp.fill(credentials.username);
    await this.passwordInp.fill(credentials.password);
    await this.submitBtn.click();
  }
}

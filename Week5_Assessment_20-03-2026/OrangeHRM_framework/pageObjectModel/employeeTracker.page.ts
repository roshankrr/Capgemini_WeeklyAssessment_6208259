import { Page, Locator } from "@playwright/test";

export default class Tracker {
  sideTabs: Locator;
  page: Page;
  navTabs: Locator;
  viewFirst: Locator;
  addLogBtn: Locator;
  logInp: Locator;
  commentInp: Locator;
  saveBtn: Locator;

  constructor(page: Page) {
    this.sideTabs = page.locator('//aside//ul//span[text()="Buzz"]');
    this.page = page;
    this.navTabs = page.getByText("Employee Trackers");
    this.viewFirst = page
      .locator(
        '//div[@class="orangehrm-container"]//div[@class="oxd-table-body"]//button',
      )
      .first();
    this.addLogBtn = page.getByText(" Add Log ");
    this.logInp = page.getByPlaceholder("Type here");
    this.commentInp = page.getByPlaceholder("Type here");
    this.saveBtn = page.getByRole("button", { name: "Save" });
  }
  async selectTab(tab: string) {
    await this.page.locator(`//aside//ul//span[text()="${tab}"]`).click();
  }
  async selectNavTab(tab: string) {
    await this.page.getByText(`${tab}`).click();
  }
}

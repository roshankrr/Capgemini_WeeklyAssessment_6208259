import { Page, Locator } from "@playwright/test";

export default class EndToEnd1 {
  recrutmentBtn: Locator;
  vacancyTab: Locator;
  addBtn: Locator;
  vacancyNameInp: Locator;
  jobTitleSel: Locator;
  jobOption: Locator;
  discription: Locator;
  hiringManagetSel: Locator;
  numPosInp: Locator;
  saveBtn: Locator;

  constructor(page: Page) {
    this.recrutmentBtn = page.locator(
      '//aside//ul//span[text()="Recruitment"]',
    );
    this.addBtn = page.locator(
      '//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]',
    );
    this.vacancyTab = page.locator(
      '//nav[@class="oxd-topbar-body-nav"]//li//a[text()="Vacancies"]',
    );
    this.vacancyNameInp = page.locator(
      '//div[@class="oxd-grid-item oxd-grid-item--gutters"]//input',
    );
    this.jobTitleSel = page.locator(
      '//div[@class="oxd-select-text oxd-select-text--active"]//div[@class="oxd-select-text-input"]',
    );
    this.jobOption = page.getByRole("option", { name: "Automation Tester" });
    this.discription = page.locator("//textarea");
    this.hiringManagetSel = page.getByPlaceholder("Type for hints...");
    this.numPosInp = page.locator(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div[2]/div/div/div/div[2]/input',
    );
    this.saveBtn = page.locator('//button[@type="submit"]');
  }
}

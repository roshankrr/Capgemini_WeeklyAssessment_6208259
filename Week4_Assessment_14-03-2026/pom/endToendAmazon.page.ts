import { Locator, Page } from "@playwright/test";

export class endToEnd_amazon {
  searchbarTF: Locator;
  ramCheckBox: Locator;
  forthprod: Locator;
  quantityDD: Locator;
  addtoCartBTN: Locator;

  constructor(page: Page) {
    this.searchbarTF = page.locator("input#twotabsearchtextbox");
    this.ramCheckBox = page.locator(
      '//div[@id="p_n_g-1003495121111/44897277031"]//span[text()="10 GB & Above"]',
    );
    this.forthprod = page.locator(
      '//div[@data-cel-widget="search_result_4"]//img',
    );
    this.quantityDD = page.locator('//select[@name="quantity"]');
    this.addtoCartBTN = page.locator('//input[@id="add-to-cart-button"]');
  }

  async selectQuantity(value: string = "3", page2: Page) {
    this.quantityDD = page2.locator('//select[@name="quantity"]');
    await this.quantityDD.selectOption({ value });
  }

  async buyNow(page2: Page) {
    this.addtoCartBTN = page2
      .locator('//input[@title="Add to Shopping Cart"]')
      .last();
    await this.addtoCartBTN.click();
  }
}

export class Careers {
  CarrersBtn: Locator;
  StudentOppRoleBtn: Locator;
  FindOpenUniv: Locator;
  CountryCheckBox: Locator;
  StateCheckBox: Locator;
  CityCheckBox: Locator;
  EmplCheckBox: Locator;
  CategCheckBox: Locator;
  CarrerCheckBox: Locator;
  TeamCheckBox: Locator;
  RoleCheckBox: Locator;
  SecondJob: Locator;
  ApplyNow: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.CarrersBtn = page.locator(
      '//div[@class="navFooterVerticalColumn navAccessibility"]//li//a[text()="Careers"]',
    );
    this.StudentOppRoleBtn = page.locator(
      '//a[@aria-label="Student opportunities"]',
    );
    this.FindOpenUniv = page.locator(
      '//a[@class="button_root__2QT2s button_button__gDKaW button_primary__ChW_l button_dark__NVCDy e4s17lp0 css-1ipr55l"]',
    );
    this.CountryCheckBox = page.locator(
      '//fieldset[@class="filter-module_root__K4jBh"][1]//div[text()="Germany"]',
    );
    this.StateCheckBox = page.locator(
      '//fieldset[@class="filter-module_root__K4jBh"][2]//div[text()="Bavaria"]',
    );
    this.CityCheckBox = page.locator(
      '//fieldset[@class="filter-module_root__K4jBh"][3]//div[text()="Munich"]',
    );
    this.EmplCheckBox = page.locator(
      '//fieldset[@class="filter-module_root__K4jBh"][4]//div[text()="Full time"]',
    );
    this.CategCheckBox = page.locator(
      '//fieldset[@class="filter-module_root__K4jBh"][5]//div[text()="Software Development"]',
    );
    this.CarrerCheckBox = page.locator(
      '//fieldset[@class="filter-module_root__K4jBh"][6]//div[text()="Corporate"]',
    );
    this.TeamCheckBox = page.locator(
      '//fieldset[@class="filter-module_root__K4jBh"][7]//div[text()="Internships for Student"]',
    );
    this.RoleCheckBox = page.locator(
      '//fieldset[@class="filter-module_root__K4jBh"][8]//div[text()="Individual Contributor"]',
    );
    this.SecondJob = page.locator('//div[@role="button"]//h3');
    this.ApplyNow = page.locator("a#apply-button");
  }

  async selectCountry(country: string) {
    this.CountryCheckBox = this.page.locator(
      `//fieldset[@class="filter-module_root__K4jBh"][1]//div[text()="${country}"]`,
    );
    await this.CountryCheckBox.click();
  }

  async selectState(state: string) {
    this.StateCheckBox = this.page.locator(
      `//fieldset[@class="filter-module_root__K4jBh"][2]//div[text()="${state}"]`,
    );
    await this.StateCheckBox.click();
  }

  async selectCity(city: string) {
    this.CityCheckBox = this.page.locator(
      `//fieldset[@class="filter-module_root__K4jBh"][3]//div[text()="${city}"]`,
    );
    await this.CityCheckBox.click();
  }

  async selectEmpl(empl: string) {
    this.EmplCheckBox = this.page.locator(
      `//fieldset[@class="filter-module_root__K4jBh"][4]//div[text()="${empl}"]`,
    );
    await this.EmplCheckBox.click();
  }

  async selectCateg(categ: string) {
    this.CategCheckBox = this.page.locator(
      `//fieldset[@class="filter-module_root__K4jBh"][5]//div[text()="${categ}"]`,
    );
    await this.CategCheckBox.click();
  }

  async selectCarrer(carrer: string) {
    this.CarrerCheckBox = this.page.locator(
      `//fieldset[@class="filter-module_root__K4jBh"][6]//div[text()="${carrer}"]`,
    );
    await this.CarrerCheckBox.click();
  }

  async selectTeam(team: string) {
    this.TeamCheckBox = this.page.locator(
      `//fieldset[@class="filter-module_root__K4jBh"][7]//div[text()="${team}"]`,
    );
    await this.TeamCheckBox.click();
  }

  async selectRole(role: string) {
    this.RoleCheckBox = this.page.locator(
      `//fieldset[@class="filter-module_root__K4jBh"][8]//div[text()="${role}"]`,
    );
    await this.RoleCheckBox.click();
  }

  async applyButton(page2: Page) {
    this.ApplyNow = page2.locator("a#apply-button");
    await this.ApplyNow.click();
  }
}

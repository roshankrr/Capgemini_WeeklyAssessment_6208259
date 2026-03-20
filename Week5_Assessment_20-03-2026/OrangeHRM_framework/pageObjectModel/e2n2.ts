import { Page } from "@playwright/test";

export class PersonalDetailsPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );

    await this.page.getByRole("textbox", { name: "Username" }).fill(username);
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }

  async navigateToPersonalDetails() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewJobVacancy",
    );

    await this.page.getByRole("link", { name: "My Info" }).click();

    // await this.page.goto(
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7",
    // );

    // await this.page.getByRole("link", { name: "Personal Details" }).click();
  }

  async fillPersonalDetails(data: any) {
    await this.page
      .getByRole("textbox", { name: "First Name" })
      .fill(data.firstName);
    await this.page
      .getByRole("textbox", { name: "Middle Name" })
      .fill(data.middleName);
    await this.page
      .getByRole("textbox", { name: "Last Name" })
      .fill(data.lastName);

    await this.page.getByRole("textbox").nth(4).fill(data.employeeId);
    await this.page
      .locator('//div[@class="oxd-select-text oxd-select-text--active"]')
      .first()
      .click();
    await this.page.getByText(data.nationality).click();
    // await this.page.getByRole("option", { name: data.nationality }).click();

    await this.page
      .locator('//div[@class="oxd-select-text oxd-select-text--active"]')
      .nth(2)
      .click();
    await this.page.getByText(data.bloodType).click();
  }

  async saveForm() {
    await this.page
      .locator("form")
      .filter({ hasText: "Employee Full NameEmployee" })
      .getByRole("button")
      .click();

    await this.page
      .locator("form")
      .filter({ hasText: "Blood Type" })
      .getByRole("button")
      .click();
  }
}

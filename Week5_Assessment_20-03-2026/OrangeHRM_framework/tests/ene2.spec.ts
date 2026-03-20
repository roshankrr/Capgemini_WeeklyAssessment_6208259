import { test } from "@playwright/test";
import { PersonalDetailsPage } from "../pageObjectModel/e2n2";
import userData from "../utility/userData.json";

test("Fill Personal Details Form", async ({ page }) => {
  const personalPage = new PersonalDetailsPage(page);

  await personalPage.login(userData.username, userData.password);

  await personalPage.navigateToPersonalDetails();

  await personalPage.fillPersonalDetails(userData);

  await personalPage.saveForm();
  await page.screenshot({ path: "./screenshot/profile_edit.png" });
});

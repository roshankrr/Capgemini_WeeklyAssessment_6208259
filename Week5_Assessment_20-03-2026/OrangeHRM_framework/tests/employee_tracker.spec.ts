import { test } from "@playwright/test";
import Login from "../pageObjectModel/login.page";
import loginData from "../utility/loginData.json";
import Tracker from "../pageObjectModel/employeeTracker.page";

test("employee performance tracker", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  let login = new Login(page);
  await login.loginFunction(loginData);
  let tracker = new Tracker(page);
  //   await page.locator('//aside//ul//span[text()="Performance"]').click();
  await tracker.selectTab("Performance");
  await tracker.selectNavTab("Employee Trackers");
  await tracker.viewFirst.click();
  await tracker.addLogBtn.click();
  await tracker.logInp.first().fill("This is the employee tracker");
  await tracker.commentInp.nth(1).fill("Niceee");
  await tracker.saveBtn.click();
  await page.screenshot({ path: "./screenshots/employeeTracker.png" });
});

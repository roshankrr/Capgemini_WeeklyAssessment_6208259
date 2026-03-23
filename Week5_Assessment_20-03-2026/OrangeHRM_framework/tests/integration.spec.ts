import { test } from "@playwright/test";
import loginData from "../utility/loginData.json";
import Login from "../pageObjectModel/login.page";
import AddPost from "../pageObjectModel/addBlogPost.page";
import postData from "../utility/postData.json";
import path from "node:path";
import EndToEnd1 from "../pageObjectModel/e2e1.page";
import vacencyData from "../utility/vacencyData.json";
test("add Post on buzz", async ({ page }) => {
  await page.goto(loginData.url);
  let login = new Login(page);
  await login.loginFunction(loginData);
  let post = new AddPost(page);
  await post.bussBtn.click();
  await post.textArea.fill(postData.textData);
  await post.ImageBtn.click();
  await post.ImageUploadArea.setInputFiles(
    path.join(__dirname, postData.imagePath),
  );
  await post.ShareBtn.click();
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.goto(loginData.url);
  login = new Login(page);
  await login.loginFunction(loginData);
  let endtoend = new EndToEnd1(page);
  await endtoend.recrutmentBtn.click();
  await endtoend.vacancyTab.click();
  await endtoend.addBtn.click();
  await endtoend.vacancyNameInp.first().fill(vacencyData.name);
  await endtoend.jobTitleSel.click();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await endtoend.discription.fill(vacencyData.discription);
  await endtoend.hiringManagetSel.fill(vacencyData.hiringManager);
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await endtoend.numPosInp.fill("10");
  await endtoend.saveBtn.click();
  await page.goBack();
  await page.goBack();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "./screenshots/ene1.png" });
});

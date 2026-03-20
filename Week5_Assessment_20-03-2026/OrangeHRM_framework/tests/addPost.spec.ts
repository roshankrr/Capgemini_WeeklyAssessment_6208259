import { test } from "@playwright/test";
import loginData from "../utility/loginData.json";
import Login from "../pageObjectModel/login.page";
import AddPost from "../pageObjectModel/addBlogPost.page";
import postData from "../utility/postData.json";
import path from "node:path";
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
  page.screenshot({ path: "./screenshots/addpost.png" });
});

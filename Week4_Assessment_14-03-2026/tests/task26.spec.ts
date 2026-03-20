import { test, expect } from "@playwright/test";
// import path from "node:path";
import jsondata from "../public/task25data.json";

// let mypath = (pat: string) => {
//   return path.join(__dirname, pat);
// };

test("amazon task 25", async ({ page }) => {
  await page.goto("https://demoqa.com/login");
  let newUserButton = await page.locator("#newUser").click();
  let firstName = page.getByPlaceholder("First Name");
  let lastName = page.getByPlaceholder("Last Name");
  let username = page.getByPlaceholder("UserName");
  let password = page.getByPlaceholder("Password");
  let goback = page.locator("#gotologin");
  await firstName.fill(jsondata.First_Name);
  await lastName.fill(jsondata.Last_Name);
  await username.fill(jsondata.UserName);
  await password.fill(jsondata.Password);
  let createAccountButton = await page.locator("#register").click();
  let login = await page.getByRole("button", { name: "Back to Login" }).click();
  await username.fill(jsondata.UserName);
  await password.fill(jsondata.Password);
  let loginButton = await page.locator("#login").click();
  let gotobookstore = await page
    .getByRole("button", { name: "Go To Book Store" })
    .click();
  let search = await page.locator("#searchBox").fill(jsondata.bookname);
  let books = await page.locator("//tbody/tr//a").first().click();

  await page.on("dialog", async (e) => {
    await page.waitForTimeout(2000);
    await e.accept();
  });
  let addTocollection = await page
    .getByRole("button", { name: "Add To Your Collection" })
    .click();
  await page.goto("https://demoqa.com/profile");
  await expect(await page.locator("//tbody/tr").first()).toContainText(
    jsondata.bookname,
  );
  let logout = await page.getByRole("button", { name: "Logout" }).click();
  await page.screenshot({ path: "./screenshot/bookstore.png" });
});

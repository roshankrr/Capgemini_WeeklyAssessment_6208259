import { test } from "../../Playwright/node_modules/@playwright/test";

test("amazon2", async ({ page }) => {
  await page.goto("https://www.amazon.in");
  let search = await page.locator(`input[id=twotabsearchtextbox]`);
  await search.fill("Shoes");
  let searchbtn = await page.locator(`input[id=nav-search-submit-button]`);
  await searchbtn.click();
  let getbyTommorow = await page.locator(`//li[@id="p_90/6741118031"]`);
  await getbyTommorow.click();
  let getpriceof4thitem = await page.locator(
    `//div[@role="listitem"][4]//span[@class="a-price-whole"]`,
  );
  let getnameof4thprod = await page.locator(
    `//div[@role="listitem"][4]//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]`,
  );

  console.log("Product name of 4th is:", await getnameof4thprod.textContent());

  console.log("Price of 4th item is :");
  console.log(await getpriceof4thitem.textContent());
  await page.screenshot({ path: "./screenshot/amazon.png" });
});

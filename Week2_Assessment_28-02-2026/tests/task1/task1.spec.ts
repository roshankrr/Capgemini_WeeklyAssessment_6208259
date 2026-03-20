import { test } from "../../Playwright/node_modules/@playwright/test";

test("amazon", async ({ page }) => {
  await page.goto("https://www.amazon.in");
  let search = await page.locator(`input[id=twotabsearchtextbox]`);
  await search.fill("Shoes");
  let searchbtn = await page.locator(`input[id=nav-search-submit-button]`);
  await searchbtn.click();
  let productname = await page.locator(
    `//div[@role="listitem"][1]//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]`,
  );
  let productprice = await page.locator(
    `//div[@role="listitem"][1]//span[@class="a-price-whole"]`,
  );
  console.log("Product Name is:");
  console.log(await productname.textContent());
  console.log("Product Price is:");
  console.log(await productprice.textContent());
  await page.screenshot({ path: "./screenshot/amazon.png" });
});

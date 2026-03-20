import { test } from "@playwright/test";

test("flipcart", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");

  let cross = page.locator(`//span[@role='button']`);
  cross.click();
  let search = await page.locator(
    `//div[@class="olwU0Z BseBiK"]//input[@class="nw1UBF v1zwn25"]`,
  );
  await search.fill("Phones");
  let searchbtn = await page.locator(
    `//div[@class="olwU0Z BseBiK"]//button[@class="XFwMiH"]`,
  );
  await searchbtn.click();
  let apple = page.locator(
    `//div[@class="i5kg2N zu805X"]//div[text()="Apple"]`,
  );
  await apple.click();

  let pricelocator = page.locator(
    `//div[@class="QSCKDh dLgFEE"]//div[@class="lvJbLV col-12-12"][2]//div[@class="hZ3P6w DeU9vF"]`,
  );
  console.log(await pricelocator.textContent());
  page.screenshot({ path: "./screenshot/flipcart" });
});

import { Locator, Page } from "@playwright/test";

export default class AddPost {
  bussBtn: Locator;
  textArea: Locator;
  ImageBtn: Locator;
  ImageUploadArea: Locator;
  ShareBtn: Locator;
  constructor(page: Page) {
    this.bussBtn = page.locator('//aside//ul//span[text()="Buzz"]');
    this.textArea = page.locator("//textarea");
    this.ImageBtn = page.locator('//button[contains(text()," Share Photos")]');
    this.ImageUploadArea = page.locator(
      '//div[@class="oxd-file-div oxd-file-div--active"]/../input',
    );
    this.ShareBtn = page.locator(
      '//div[@class="oxd-form-actions orangehrm-buzz-post-modal-actions"]//button',
    );
  }
}

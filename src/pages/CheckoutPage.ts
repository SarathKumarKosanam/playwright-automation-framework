import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly zipInput: Locator;
  private readonly continueButton: Locator;
  private readonly finishButton: Locator;
  private readonly successHeader: Locator;
  private readonly errorMessage: Locator;

  constructor(private page: Page) {
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput  = page.locator('[data-test="lastName"]');
    this.zipInput       = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton   = page.locator('[data-test="finish"]');
    this.successHeader  = page.locator('.complete-header');
    this.errorMessage   = page.locator('[data-test="error"]');
  }

  async fillUserInfo(firstName: string, lastName: string, zip: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipInput.fill(zip);
    await this.continueButton.click();
  }

  async placeOrder() {
    await this.finishButton.click();
  }

  async assertOrderSuccess() {
    await expect(this.successHeader).toContainText('Thank you for your order');
  }

  async assertValidationError(message: string) {
    await expect(this.errorMessage).toContainText(message);
  }
}
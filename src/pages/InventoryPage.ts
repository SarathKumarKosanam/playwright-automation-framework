import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  private readonly productItems: Locator;
  private readonly cartBadge: Locator;
  private readonly cartLink: Locator;
  private readonly sortDropdown: Locator;

  constructor(private page: Page) {
    this.productItems  = page.locator('.inventory_item');
    this.cartBadge     = page.locator('.shopping_cart_badge');
    this.cartLink      = page.locator('.shopping_cart_link');
    this.sortDropdown  = page.locator('[data-test="product_sort_container"]');
  }

  async addItemToCart(itemName: string) {
    const item = this.page.locator('.inventory_item').filter({ hasText: itemName });
    await item.locator('button').click();
  }

  async removeItemFromCart(itemName: string) {
    const item = this.page.locator('.inventory_item').filter({ hasText: itemName });
    await item.locator('button').click();
  }

  async sortProducts(option: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.sortDropdown.selectOption(option);
  }

  async getProductNames(): Promise<string[]> {
    return this.page.locator('.inventory_item_name').allInnerTexts();
  }

  async assertCartCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async assertProductsLoaded() {
    await expect(this.productItems.first()).toBeVisible();
  }
}
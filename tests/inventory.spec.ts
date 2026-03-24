import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { InventoryPage } from '../src/pages/InventoryPage';

test.describe('Inventory', () => {
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    inventoryPage = new InventoryPage(page);
    await inventoryPage.assertProductsLoaded();
  });

  test('should display 6 products', async ({ page }) => {
    const names = await inventoryPage.getProductNames();
    expect(names).toHaveLength(6);
  });

  test('should add item to cart and show badge', async () => {
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.assertCartCount(1);
  });

  test('should add multiple items and reflect cart count', async () => {
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.addItemToCart('Sauce Labs Bike Light');
    await inventoryPage.assertCartCount(2);
  });

  test('should remove item from cart', async () => {
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.removeItemFromCart('Sauce Labs Backpack');
    const cartBadge = inventoryPage['cartBadge'];
  });

  test('should sort products A to Z', async ({ page }) => {
    await inventoryPage.sortProducts('az');
    const names = await inventoryPage.getProductNames();
    expect(names).toEqual([...names].sort());
  });

  test('should sort products Z to A', async ({ page }) => {
    await inventoryPage.sortProducts('za');
    const names = await inventoryPage.getProductNames();
    expect(names).toEqual([...names].sort().reverse());
  });
});
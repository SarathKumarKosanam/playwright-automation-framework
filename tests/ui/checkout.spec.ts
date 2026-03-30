import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { CartPage } from '../../src/pages/CartPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';

test.describe('Checkout', () => {
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    inventoryPage = new InventoryPage(page);
    cartPage      = new CartPage(page);
    checkoutPage  = new CheckoutPage(page);
  });

  test('full purchase flow should complete successfully', async () => {
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    await cartPage.assertItemInCart('Sauce Labs Backpack');
    await cartPage.proceedToCheckout();
    await checkoutPage.fillUserInfo('Sarath', 'Kumar', '500001');
    await checkoutPage.placeOrder();
    await checkoutPage.assertOrderSuccess();
  });

  test('checkout with empty first name should show error', async () => {
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.fillUserInfo('', 'Kumar', '500001');
    await checkoutPage.assertValidationError('First Name is required');
  });

  test('checkout with empty last name should show error', async () => {
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.fillUserInfo('Sarath', '', '500001');
    await checkoutPage.assertValidationError('Last Name is required');
  });

  test('checkout with empty zip should show error', async () => {
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.fillUserInfo('Sarath', 'Kumar', '');
    await checkoutPage.assertValidationError('Postal Code is required');
  });
});
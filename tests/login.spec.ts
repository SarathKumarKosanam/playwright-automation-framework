import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

test.describe('Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('valid credentials should land on inventory', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.assertLoginSuccess();
  });

  test('locked out user should see error', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.assertErrorMessage('locked out');
  });

  test('wrong password should show error', async () => {
    await loginPage.login('standard_user', 'wrong_pass');
    await loginPage.assertErrorMessage('Username and password do not match');
  });

  test('empty username should show error', async () => {
    await loginPage.login('', 'secret_sauce');
    await loginPage.assertErrorMessage('Username is required');
  });

  test('empty password should show error', async () => {
    await loginPage.login('standard_user', '');
    await loginPage.assertErrorMessage('Password is required');
  });
});
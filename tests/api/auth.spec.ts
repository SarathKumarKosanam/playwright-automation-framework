import { test, expect } from '../../src/fixtures/fixtures';
import testData from '../../test-data/users.json';

test.describe('Auth API', () => {

  test('POST /login - valid credentials should return token', async ({ authApiClient }) => {
    const response = await authApiClient.login(testData.validUser);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.token).toBeDefined();
    expect(typeof body.token).toBe('string');
  });

  test('POST /login - missing password should return 400', async ({ authApiClient }) => {
    const response = await authApiClient.login({
      email: testData.validUser.email,
      password: '',
    });
    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body.error).toBeDefined();
  });

  test('POST /login - invalid credentials should return 400', async ({ authApiClient }) => {
    const response = await authApiClient.login(testData.invalidUser);
    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body.error).toBeDefined();
  });

  test('POST /register - valid payload should return token', async ({ authApiClient }) => {
    const response = await authApiClient.register(testData.validUser);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.token).toBeDefined();
  });
});
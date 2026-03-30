import { test, expect } from '../../src/fixtures/fixtures';
import { DataGenerator } from '../../src/utils/DataGenerator';

test.describe('Users API', () => {

  test('GET /users - should return paginated list', async ({ userApiClient }) => {
    const response = await userApiClient.getUsers(1);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data).toBeDefined();
    expect(body.data.length).toBeGreaterThan(0);
    expect(body.page).toBe(1);
    expect(body.data[0]).toHaveProperty('email');
  });

  test('GET /users/{id} - should return single user', async ({ userApiClient }) => {
    const response = await userApiClient.getUserById(2);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.id).toBe(2);
    expect(body.data.email).toBeDefined();
  });

  test('GET /users/{id} - invalid id should return 404', async ({ userApiClient }) => {
    const response = await userApiClient.getUserById(9999);
    expect(response.status()).toBe(404);
  });

  test('POST /users - should create user and return 201', async ({ userApiClient }) => {
    const payload = DataGenerator.createUserPayload();
    const response = await userApiClient.createUser(payload);
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe(payload.name);
    expect(body.job).toBe(payload.job);
    expect(body.id).toBeDefined();
    expect(body.createdAt).toBeDefined();
  });

  test('PUT /users/{id} - should fully update user', async ({ userApiClient }) => {
    const response = await userApiClient.updateUser(2, {
      name: 'Sarath Kumar',
      job: 'Senior SDET',
    });
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.name).toBe('Sarath Kumar');
    expect(body.job).toBe('Senior SDET');
    expect(body.updatedAt).toBeDefined();
  });

  test('PATCH /users/{id} - should partially update user', async ({ userApiClient }) => {
    const response = await userApiClient.patchUser(2, { job: 'Lead SDET' });
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.job).toBe('Lead SDET');
    expect(body.updatedAt).toBeDefined();
  });

  test('DELETE /users/{id} - should return 204', async ({ userApiClient }) => {
    const response = await userApiClient.deleteUser(2);
    expect(response.status()).toBe(204);
  });
});
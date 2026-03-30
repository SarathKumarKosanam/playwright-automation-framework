import { test as base } from '@playwright/test';
import { UserApiClient } from '../api/client/UserApiClient';
import { AuthApiClient } from '../api/client/AuthApiClient';

type ApiFixtures = {
  userApiClient: UserApiClient;
  authApiClient: AuthApiClient;
};

export const test = base.extend<ApiFixtures>({
  userApiClient: async ({ request }, use) => {
    await use(new UserApiClient(request));
  },
  authApiClient: async ({ request }, use) => {
    await use(new AuthApiClient(request));
  },
});

export { expect } from '@playwright/test';
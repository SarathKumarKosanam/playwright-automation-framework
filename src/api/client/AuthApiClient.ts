import { APIRequestContext, APIResponse } from '@playwright/test';
import { ApiClient } from './ApiClient';
import { LoginRequest } from '../../types/api.types';

export class AuthApiClient extends ApiClient {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async login(payload: LoginRequest): Promise<APIResponse> {
    return this.post('/login', payload);
  }

  async register(payload: LoginRequest): Promise<APIResponse> {
    return this.post('/register', payload);
  }
}
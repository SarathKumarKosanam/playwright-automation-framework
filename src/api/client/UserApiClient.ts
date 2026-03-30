import { APIRequestContext, APIResponse } from '@playwright/test';
import { ApiClient } from './ApiClient';
import { CreateUserRequest } from '../../types/api.types';

export class UserApiClient extends ApiClient {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async getUsers(page: number = 1): Promise<APIResponse> {
    return this.get('/users', { page: String(page) });
  }

  async getUserById(id: number): Promise<APIResponse> {
    return this.get(`/users/${id}`);
  }

  async createUser(payload: CreateUserRequest): Promise<APIResponse> {
    return this.post('/users', payload);
  }

  async updateUser(
    id: number,
    payload: Partial<CreateUserRequest>
  ): Promise<APIResponse> {
    return this.put(`/users/${id}`, payload);
  }

  async patchUser(
    id: number,
    payload: Partial<CreateUserRequest>
  ): Promise<APIResponse> {
    return this.patch(`/users/${id}`, payload);
  }

  async deleteUser(id: number): Promise<APIResponse> {
    return this.delete(`/users/${id}`);
  }
}
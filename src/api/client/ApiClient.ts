import { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {
  constructor(protected request: APIRequestContext) {}

  protected async get(
    endpoint: string,
    params?: Record<string, string>
  ): Promise<APIResponse> {
    return this.request.get(endpoint, { params });
  }

  protected async post(
    endpoint: string,
    body: unknown
  ): Promise<APIResponse> {
    return this.request.post(endpoint, {
      data: body,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  protected async put(
    endpoint: string,
    body: unknown
  ): Promise<APIResponse> {
    return this.request.put(endpoint, {
      data: body,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  protected async patch(
    endpoint: string,
    body: unknown
  ): Promise<APIResponse> {
    return this.request.patch(endpoint, {
      data: body,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  protected async delete(endpoint: string): Promise<APIResponse> {
    return this.request.delete(endpoint);
  }
}
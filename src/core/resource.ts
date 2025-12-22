// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { MultichainWalletRouterAPI } from '../client';

export abstract class APIResource {
  protected _client: MultichainWalletRouterAPI;

  constructor(client: MultichainWalletRouterAPI) {
    this._client = client;
  }
}

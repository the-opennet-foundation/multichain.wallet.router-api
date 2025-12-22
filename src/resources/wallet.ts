// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Wallet extends APIResource {
  /**
   * Get all EVM chain configs for wallet_addEthereumChain
   */
  listChains(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/wallet/chains', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get single chain config
   */
  retrieveChain(
    chainID:
      | 'ethereum'
      | 'base'
      | 'optimism'
      | 'arbitrum'
      | 'arbitrumNova'
      | 'polygon'
      | 'avalanche'
      | 'bsc'
      | 'opbnb'
      | 'unichain'
      | 'worldchain'
      | 'abstract'
      | 'apechain'
      | 'hyperliquid',
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/wallet/add-chain/${chainID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Chains extends APIResource {
  /**
   * Get chain details
   */
  retrieve(
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
    return this._client.get(path`/evm/chains/${chainID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all supported EVM chains
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/evm/chains', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

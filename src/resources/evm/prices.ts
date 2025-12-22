// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Prices extends APIResource {
  /**
   * Get token prices by address
   */
  getByAddress(
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
    body: PriceGetByAddressParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/evm/${chainID}/prices/by-address`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get token prices by symbol
   */
  getBySymbol(body: PriceGetBySymbolParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/evm/prices/by-symbol', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PriceGetByAddressParams {
  addresses?: Array<string>;
}

export interface PriceGetBySymbolParams {
  symbols?: Array<string>;
}

export declare namespace Prices {
  export {
    type PriceGetByAddressParams as PriceGetByAddressParams,
    type PriceGetBySymbolParams as PriceGetBySymbolParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Gas extends APIResource {
  /**
   * Estimate gas for transaction
   */
  estimate(
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
    body: GasEstimateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/evm/${chainID}/gas/estimate`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get current gas price
   */
  getPrice(
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
    return this._client.get(path`/evm/${chainID}/gas/price`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GasEstimateParams {
  transaction?: unknown;
}

export declare namespace Gas {
  export { type GasEstimateParams as GasEstimateParams };
}

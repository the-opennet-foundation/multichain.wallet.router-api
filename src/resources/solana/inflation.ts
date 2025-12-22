// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Inflation extends APIResource {
  /**
   * Get inflation rate
   *
   * @example
   * ```ts
   * await client.solana.inflation.getRate();
   * ```
   */
  getRate(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/solana/inflation/rate', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get inflation rewards for addresses
   *
   * @example
   * ```ts
   * await client.solana.inflation.getRewards({
   *   addresses: ['string'],
   * });
   * ```
   */
  getRewards(body: InflationGetRewardsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/solana/inflation/rewards', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InflationGetRewardsParams {
  addresses: Array<string>;

  /**
   * Epoch (default current)
   */
  epoch?: number;
}

export declare namespace Inflation {
  export { type InflationGetRewardsParams as InflationGetRewardsParams };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Fees extends APIResource {
  /**
   * Get priority fee estimates (low/med/high/veryHigh)
   *
   * @example
   * ```ts
   * await client.solana.fees.getPriority();
   * ```
   */
  getPriority(
    query: FeeGetPriorityParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/solana/fees/priority', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get recent prioritization fees
   *
   * @example
   * ```ts
   * await client.solana.fees.getRecent();
   * ```
   */
  getRecent(query: FeeGetRecentParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/solana/fees/recent', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FeeGetPriorityParams {
  /**
   * Comma-separated account keys
   */
  accountKeys?: string;
}

export interface FeeGetRecentParams {
  /**
   * Comma-separated addresses
   */
  addresses?: string;
}

export declare namespace Fees {
  export { type FeeGetPriorityParams as FeeGetPriorityParams, type FeeGetRecentParams as FeeGetRecentParams };
}

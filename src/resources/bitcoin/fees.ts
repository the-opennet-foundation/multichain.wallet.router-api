// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Fees extends APIResource {
  /**
   * Estimate fee for confirmation target
   */
  estimate(query: FeeEstimateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/bitcoin/fees/estimate', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns fastestFee, halfHourFee, hourFee, economyFee, minimumFee
   */
  getRecommended(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/bitcoin/fees', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FeeEstimateParams {
  /**
   * Target blocks for confirmation
   */
  confTarget?: number;

  /**
   * Estimate mode
   */
  mode?: 'ECONOMICAL' | 'CONSERVATIVE';
}

export declare namespace Fees {
  export { type FeeEstimateParams as FeeEstimateParams };
}

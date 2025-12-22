// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Stake extends APIResource {
  /**
   * Get stake activation status
   *
   * @example
   * ```ts
   * await client.solana.stake.getActivationStatus('account');
   * ```
   */
  getActivationStatus(account: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/solana/stake/${account}/activation`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

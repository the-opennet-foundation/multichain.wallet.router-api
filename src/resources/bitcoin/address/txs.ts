// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Txs extends APIResource {
  /**
   * Get address transactions
   */
  getAll(address: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/bitcoin/address/${address}/txs`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get address transactions (paginated)
   */
  getPaginated(
    address: string,
    query: TxGetPaginatedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/bitcoin/address/${address}/txs/chain`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TxGetPaginatedParams {
  /**
   * Last seen txid for pagination
   */
  lastSeenTxid?: string;
}

export declare namespace Txs {
  export { type TxGetPaginatedParams as TxGetPaginatedParams };
}

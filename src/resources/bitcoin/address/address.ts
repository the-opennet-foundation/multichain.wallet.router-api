// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TxsAPI from './txs';
import { TxGetPaginatedParams, Txs } from './txs';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Address extends APIResource {
  txs: TxsAPI.Txs = new TxsAPI.Txs(this._client);

  /**
   * Returns balance, tx count, funded/spent sums
   */
  getInfo(address: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/bitcoin/address/${address}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns unspent transaction outputs
   */
  getUtxos(address: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/bitcoin/address/${address}/utxo`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Address.Txs = Txs;

export declare namespace Address {
  export { Txs as Txs, type TxGetPaginatedParams as TxGetPaginatedParams };
}

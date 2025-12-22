// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tx extends APIResource {
  /**
   * Broadcast transaction
   */
  broadcast(body: TxBroadcastParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/bitcoin/tx/send', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Decode raw transaction
   */
  decode(body: TxDecodeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/bitcoin/tx/decode', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get transaction info
   */
  getInfo(txid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/bitcoin/tx/${txid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get raw transaction (verbose)
   */
  getRaw(
    txid: string,
    query: TxGetRawParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/bitcoin/tx/${txid}/raw`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get raw transaction hex
   */
  getRawHex(txid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/bitcoin/tx/${txid}/hex`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get transaction status
   */
  getStatus(txid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/bitcoin/tx/${txid}/status`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Test mempool acceptance
   */
  testMempool(body: TxTestMempoolParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/bitcoin/tx/test', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TxBroadcastParams {
  /**
   * Signed transaction hex
   */
  hex: string;
}

export interface TxDecodeParams {
  /**
   * Raw transaction hex
   */
  hex: string;
}

export interface TxGetRawParams {
  verbose?: boolean;
}

export interface TxTestMempoolParams {
  /**
   * Raw transaction hexes
   */
  rawTxs: Array<string>;
}

export declare namespace Tx {
  export {
    type TxBroadcastParams as TxBroadcastParams,
    type TxDecodeParams as TxDecodeParams,
    type TxGetRawParams as TxGetRawParams,
    type TxTestMempoolParams as TxTestMempoolParams,
  };
}

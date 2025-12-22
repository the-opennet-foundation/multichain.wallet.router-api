// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Block extends APIResource {
  /**
   * Get best block hash
   */
  getBest(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/bitcoin/block/best', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get block by hash
   */
  getByHash(
    hash: string,
    query: BlockGetByHashParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/bitcoin/block/hash/${hash}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get block by height
   */
  getByHeight(height: number, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/bitcoin/block/height/${height}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get block header
   */
  getHeader(
    hash: string,
    query: BlockGetHeaderParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/bitcoin/block/${hash}/header`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get block stats
   */
  getStats(hash: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/bitcoin/block/${hash}/stats`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get current block height
   */
  getTip(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/bitcoin/block/tip', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get block transaction IDs
   */
  getTransactionIDs(hash: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/bitcoin/block/${hash}/txids`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get block transactions
   */
  getTransactions(
    hash: string,
    query: BlockGetTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/bitcoin/block/${hash}/txs`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BlockGetByHashParams {
  /**
   * 0=hex, 1=json, 2=json+txs
   */
  verbosity?: number;
}

export interface BlockGetHeaderParams {
  verbose?: boolean;
}

export interface BlockGetTransactionsParams {
  startIndex?: number;
}

export declare namespace Block {
  export {
    type BlockGetByHashParams as BlockGetByHashParams,
    type BlockGetHeaderParams as BlockGetHeaderParams,
    type BlockGetTransactionsParams as BlockGetTransactionsParams,
  };
}

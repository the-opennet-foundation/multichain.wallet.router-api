// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Block extends APIResource {
  /**
   * Get block by number
   */
  getByNumber(
    blockNumber: string,
    params: BlockGetByNumberParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { chainId, ...query } = params;
    return this._client.get(path`/evm/${chainId}/block/${blockNumber}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get current block number
   */
  getCurrentNumber(
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
    return this._client.get(path`/evm/${chainID}/block/number`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BlockGetByNumberParams {
  /**
   * Path param:
   */
  chainId:
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
    | 'hyperliquid';

  /**
   * Query param:
   */
  fullTxs?: boolean;
}

export declare namespace Block {
  export { type BlockGetByNumberParams as BlockGetByNumberParams };
}

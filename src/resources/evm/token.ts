// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Token extends APIResource {
  /**
   * Get token allowance
   */
  getAllowance(
    tokenAddress: string,
    params: TokenGetAllowanceParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { chainId, ...query } = params;
    return this._client.get(path`/evm/${chainId}/token/${tokenAddress}/allowance`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get token metadata (name, symbol, decimals)
   */
  getMetadata(
    tokenAddress: string,
    params: TokenGetMetadataParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { chainId } = params;
    return this._client.get(path`/evm/${chainId}/token/${tokenAddress}/metadata`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TokenGetAllowanceParams {
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
  owner: string;

  /**
   * Query param:
   */
  spender: string;
}

export interface TokenGetMetadataParams {
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
}

export declare namespace Token {
  export {
    type TokenGetAllowanceParams as TokenGetAllowanceParams,
    type TokenGetMetadataParams as TokenGetMetadataParams,
  };
}

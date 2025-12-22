// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tx extends APIResource {
  /**
   * Get transaction by hash
   */
  getByHash(txHash: string, params: TxGetByHashParams, options?: RequestOptions): APIPromise<void> {
    const { chainId } = params;
    return this._client.get(path`/evm/${chainId}/tx/${txHash}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Broadcast signed transaction
   */
  send(
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
    body: TxSendParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/evm/${chainID}/tx/send`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TxGetByHashParams {
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

export interface TxSendParams {
  signedTransaction?: string;
}

export declare namespace Tx {
  export { type TxGetByHashParams as TxGetByHashParams, type TxSendParams as TxSendParams };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Contract extends APIResource {
  /**
   * Get verified contract ABI
   */
  getAbi(address: string, params: ContractGetAbiParams, options?: RequestOptions): APIPromise<void> {
    const { chainId } = params;
    return this._client.get(path`/evm/${chainId}/explorer/contract/${address}/abi`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get verified contract source
   */
  getSource(address: string, params: ContractGetSourceParams, options?: RequestOptions): APIPromise<void> {
    const { chainId } = params;
    return this._client.get(path`/evm/${chainId}/explorer/contract/${address}/source`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ContractGetAbiParams {
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

export interface ContractGetSourceParams {
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

export declare namespace Contract {
  export {
    type ContractGetAbiParams as ContractGetAbiParams,
    type ContractGetSourceParams as ContractGetSourceParams,
  };
}

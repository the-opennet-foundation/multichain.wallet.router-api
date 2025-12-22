// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Contract extends APIResource {
  /**
   * Get NFT collection metadata
   */
  getMetadata(
    contractAddress: string,
    params: ContractGetMetadataParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { chainId } = params;
    return this._client.get(path`/evm/${chainId}/contract/${contractAddress}/metadata`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ContractGetMetadataParams {
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
  export { type ContractGetMetadataParams as ContractGetMetadataParams };
}

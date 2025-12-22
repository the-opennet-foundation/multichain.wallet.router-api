// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ContractAPI from './contract';
import { Contract, ContractGetAbiParams, ContractGetSourceParams } from './contract';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Explorer extends APIResource {
  contract: ContractAPI.Contract = new ContractAPI.Contract(this._client);

  /**
   * Get gas oracle from Blockscout
   */
  getGasOracle(
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
    return this._client.get(path`/evm/${chainID}/explorer/gas`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get token info from Blockscout
   */
  getTokenInfo(
    address: string,
    params: ExplorerGetTokenInfoParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { chainId } = params;
    return this._client.get(path`/evm/${chainId}/explorer/token/${address}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get token transfers from Blockscout
   */
  getTokentx(address: string, params: ExplorerGetTokentxParams, options?: RequestOptions): APIPromise<void> {
    const { chainId, ...query } = params;
    return this._client.get(path`/evm/${chainId}/explorer/tokentx/${address}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get transaction list from Blockscout
   */
  getTxlist(address: string, params: ExplorerGetTxlistParams, options?: RequestOptions): APIPromise<void> {
    const { chainId, ...query } = params;
    return this._client.get(path`/evm/${chainId}/explorer/txlist/${address}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ExplorerGetTokenInfoParams {
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

export interface ExplorerGetTokentxParams {
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
  contractAddress?: string;

  /**
   * Query param:
   */
  offset?: number;

  /**
   * Query param:
   */
  page?: number;
}

export interface ExplorerGetTxlistParams {
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
  offset?: number;

  /**
   * Query param:
   */
  page?: number;

  /**
   * Query param:
   */
  sort?: 'asc' | 'desc';
}

Explorer.Contract = Contract;

export declare namespace Explorer {
  export {
    type ExplorerGetTokenInfoParams as ExplorerGetTokenInfoParams,
    type ExplorerGetTokentxParams as ExplorerGetTokentxParams,
    type ExplorerGetTxlistParams as ExplorerGetTxlistParams,
  };

  export {
    Contract as Contract,
    type ContractGetAbiParams as ContractGetAbiParams,
    type ContractGetSourceParams as ContractGetSourceParams,
  };
}

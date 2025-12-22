// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BlockAPI from './block';
import { Block, BlockGetByNumberParams } from './block';
import * as ChainsAPI from './chains';
import { Chains } from './chains';
import * as ContractAPI from './contract';
import { Contract, ContractGetMetadataParams } from './contract';
import * as GasAPI from './gas';
import { Gas, GasEstimateParams } from './gas';
import * as PricesAPI from './prices';
import { PriceGetByAddressParams, PriceGetBySymbolParams, Prices } from './prices';
import * as TokenAPI from './token';
import { Token, TokenGetAllowanceParams, TokenGetMetadataParams } from './token';
import * as TxAPI from './tx';
import { Tx, TxGetByHashParams, TxSendParams } from './tx';
import * as ExplorerAPI from './explorer/explorer';
import {
  Explorer,
  ExplorerGetTokenInfoParams,
  ExplorerGetTokentxParams,
  ExplorerGetTxlistParams,
} from './explorer/explorer';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Evm extends APIResource {
  chains: ChainsAPI.Chains = new ChainsAPI.Chains(this._client);
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  contract: ContractAPI.Contract = new ContractAPI.Contract(this._client);
  tx: TxAPI.Tx = new TxAPI.Tx(this._client);
  gas: GasAPI.Gas = new GasAPI.Gas(this._client);
  block: BlockAPI.Block = new BlockAPI.Block(this._client);
  prices: PricesAPI.Prices = new PricesAPI.Prices(this._client);
  explorer: ExplorerAPI.Explorer = new ExplorerAPI.Explorer(this._client);

  /**
   * Call contract method (read-only)
   */
  callContract(
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
    body: EvmCallContractParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/evm/${chainID}/call`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get native token balance (wei)
   */
  getBalance(address: string, params: EvmGetBalanceParams, options?: RequestOptions): APIPromise<void> {
    const { chainId } = params;
    return this._client.get(path`/evm/${chainId}/balance/${address}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get contract bytecode
   */
  getContractCode(
    address: string,
    params: EvmGetContractCodeParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { chainId } = params;
    return this._client.get(path`/evm/${chainId}/code/${address}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get NFT metadata
   */
  getNFTMetadata(
    tokenID: string,
    params: EvmGetNFTMetadataParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { chainId, contractAddress } = params;
    return this._client.get(path`/evm/${chainId}/nft/${contractAddress}/${tokenID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all NFTs owned by address
   */
  getNFTs(address: string, params: EvmGetNFTsParams, options?: RequestOptions): APIPromise<void> {
    const { chainId, ...query } = params;
    return this._client.get(path`/evm/${chainId}/nfts/${address}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get transaction count (nonce)
   */
  getNonce(address: string, params: EvmGetNonceParams, options?: RequestOptions): APIPromise<void> {
    const { chainId } = params;
    return this._client.get(path`/evm/${chainId}/nonce/${address}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all ERC-20 token balances
   */
  getTokens(address: string, params: EvmGetTokensParams, options?: RequestOptions): APIPromise<void> {
    const { chainId } = params;
    return this._client.get(path`/evm/${chainId}/tokens/${address}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get asset transfer history
   */
  getTransactionHistory(
    address: string,
    params: EvmGetTransactionHistoryParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { chainId, ...query } = params;
    return this._client.get(path`/evm/${chainId}/transactions/${address}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Simulate transaction and preview asset changes
   */
  simulateTransaction(
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
    body: EvmSimulateTransactionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/evm/${chainID}/simulate`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EvmCallContractParams {
  blockTag?: string;

  transaction?: EvmCallContractParams.Transaction;
}

export namespace EvmCallContractParams {
  export interface Transaction {
    data?: string;

    to?: string;
  }
}

export interface EvmGetBalanceParams {
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

export interface EvmGetContractCodeParams {
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

export interface EvmGetNFTMetadataParams {
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

  contractAddress: string;
}

export interface EvmGetNFTsParams {
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
  pageKey?: string;

  /**
   * Query param:
   */
  pageSize?: number;
}

export interface EvmGetNonceParams {
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

export interface EvmGetTokensParams {
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

export interface EvmGetTransactionHistoryParams {
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
  category?: string;

  /**
   * Query param:
   */
  fromBlock?: string;

  /**
   * Query param:
   */
  maxCount?: number;

  /**
   * Query param:
   */
  pageKey?: string;

  /**
   * Query param:
   */
  toBlock?: string;
}

export interface EvmSimulateTransactionParams {
  transaction?: unknown;
}

Evm.Chains = Chains;
Evm.Token = Token;
Evm.Contract = Contract;
Evm.Tx = Tx;
Evm.Gas = Gas;
Evm.Block = Block;
Evm.Prices = Prices;
Evm.Explorer = Explorer;

export declare namespace Evm {
  export {
    type EvmCallContractParams as EvmCallContractParams,
    type EvmGetBalanceParams as EvmGetBalanceParams,
    type EvmGetContractCodeParams as EvmGetContractCodeParams,
    type EvmGetNFTMetadataParams as EvmGetNFTMetadataParams,
    type EvmGetNFTsParams as EvmGetNFTsParams,
    type EvmGetNonceParams as EvmGetNonceParams,
    type EvmGetTokensParams as EvmGetTokensParams,
    type EvmGetTransactionHistoryParams as EvmGetTransactionHistoryParams,
    type EvmSimulateTransactionParams as EvmSimulateTransactionParams,
  };

  export { Chains as Chains };

  export {
    Token as Token,
    type TokenGetAllowanceParams as TokenGetAllowanceParams,
    type TokenGetMetadataParams as TokenGetMetadataParams,
  };

  export { Contract as Contract, type ContractGetMetadataParams as ContractGetMetadataParams };

  export { Tx as Tx, type TxGetByHashParams as TxGetByHashParams, type TxSendParams as TxSendParams };

  export { Gas as Gas, type GasEstimateParams as GasEstimateParams };

  export { Block as Block, type BlockGetByNumberParams as BlockGetByNumberParams };

  export {
    Prices as Prices,
    type PriceGetByAddressParams as PriceGetByAddressParams,
    type PriceGetBySymbolParams as PriceGetBySymbolParams,
  };

  export {
    Explorer as Explorer,
    type ExplorerGetTokenInfoParams as ExplorerGetTokenInfoParams,
    type ExplorerGetTokentxParams as ExplorerGetTokentxParams,
    type ExplorerGetTxlistParams as ExplorerGetTxlistParams,
  };
}

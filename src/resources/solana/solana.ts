// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssetsAPI from './assets';
import {
  AssetCreateMultipleAssetsParams,
  AssetGetSignaturesParams,
  AssetListAssetsByAuthorityParams,
  AssetListAssetsByCreatorParams,
  AssetListAssetsByGroupParams,
  AssetListOwnedAssetsParams,
  AssetSearchAssetsParams,
  Assets,
} from './assets';
import * as FeesAPI from './fees';
import { FeeGetPriorityParams, FeeGetRecentParams, Fees } from './fees';
import * as InflationAPI from './inflation';
import { Inflation, InflationGetRewardsParams } from './inflation';
import * as JupiterAPI from './jupiter';
import { Jupiter, JupiterGetPriceParams, JupiterGetQuoteParams, JupiterSwapParams } from './jupiter';
import * as NFTAPI from './nft';
import { NFT, NFTGetEditionsParams } from './nft';
import * as StakeAPI from './stake';
import { Stake } from './stake';
import * as TerminalAPI from './terminal';
import {
  Terminal,
  TerminalGetChartParams,
  TerminalGetPoolsParams,
  TerminalGetRecentTradesParams,
  TerminalGetTokensParams,
} from './terminal';
import * as TokenAPI from './token';
import { Token } from './token';
import * as TxAPI from './tx';
import { Tx, TxSendParams, TxSimulateParams } from './tx';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Solana extends APIResource {
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  nft: NFTAPI.NFT = new NFTAPI.NFT(this._client);
  tx: TxAPI.Tx = new TxAPI.Tx(this._client);
  fees: FeesAPI.Fees = new FeesAPI.Fees(this._client);
  stake: StakeAPI.Stake = new StakeAPI.Stake(this._client);
  inflation: InflationAPI.Inflation = new InflationAPI.Inflation(this._client);
  jupiter: JupiterAPI.Jupiter = new JupiterAPI.Jupiter(this._client);
  terminal: TerminalAPI.Terminal = new TerminalAPI.Terminal(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);

  /**
   * Get multiple accounts in one call
   *
   * @example
   * ```ts
   * await client.solana.createMultipleAccounts();
   * ```
   */
  createMultipleAccounts(
    body: SolanaCreateMultipleAccountsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/solana/accounts', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get transaction signatures for address
   *
   * @example
   * ```ts
   * await client.solana.listSignatures('address');
   * ```
   */
  listSignatures(
    address: string,
    query: SolanaListSignaturesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/solana/signatures/${address}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all SPL token accounts for owner
   *
   * @example
   * ```ts
   * await client.solana.listTokens('owner');
   * ```
   */
  listTokens(
    owner: string,
    query: SolanaListTokensParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/solana/tokens/${owner}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get vote accounts (validators)
   *
   * @example
   * ```ts
   * await client.solana.listValidators();
   * ```
   */
  listValidators(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/solana/validators', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get account info with parsed data
   *
   * @example
   * ```ts
   * await client.solana.retrieveAccountInfo('address');
   * ```
   */
  retrieveAccountInfo(address: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/solana/account/${address}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get SOL balance (lamports and SOL)
   *
   * @example
   * ```ts
   * await client.solana.retrieveBalance('address');
   * ```
   */
  retrieveBalance(address: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/solana/balance/${address}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get block by slot
   *
   * @example
   * ```ts
   * await client.solana.retrieveBlockBySlot(0);
   * ```
   */
  retrieveBlockBySlot(slot: number, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/solana/block/${slot}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get current slot number
   *
   * @example
   * ```ts
   * await client.solana.retrieveCurrentSlot();
   * ```
   */
  retrieveCurrentSlot(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/solana/slot', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get network info (version, health, epoch)
   *
   * @example
   * ```ts
   * await client.solana.retrieveInfo();
   * ```
   */
  retrieveInfo(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/solana/info', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get latest blockhash
   *
   * @example
   * ```ts
   * await client.solana.retrieveLatestBlockhash();
   * ```
   */
  retrieveLatestBlockhash(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/solana/blockhash', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SolanaCreateMultipleAccountsParams {
  addresses?: Array<string>;
}

export interface SolanaListSignaturesParams {
  /**
   * Get signatures before this one
   */
  before?: string;

  limit?: number;

  /**
   * Get signatures until this one
   */
  until?: string;
}

export interface SolanaListTokensParams {
  /**
   * Filter by specific token mint
   */
  mint?: string;

  /**
   * Token program (default SPL Token)
   */
  programId?: string;
}

Solana.Token = Token;
Solana.NFT = NFT;
Solana.Tx = Tx;
Solana.Fees = Fees;
Solana.Stake = Stake;
Solana.Inflation = Inflation;
Solana.Jupiter = Jupiter;
Solana.Terminal = Terminal;
Solana.Assets = Assets;

export declare namespace Solana {
  export {
    type SolanaCreateMultipleAccountsParams as SolanaCreateMultipleAccountsParams,
    type SolanaListSignaturesParams as SolanaListSignaturesParams,
    type SolanaListTokensParams as SolanaListTokensParams,
  };

  export { Token as Token };

  export { NFT as NFT, type NFTGetEditionsParams as NFTGetEditionsParams };

  export { Tx as Tx, type TxSendParams as TxSendParams, type TxSimulateParams as TxSimulateParams };

  export {
    Fees as Fees,
    type FeeGetPriorityParams as FeeGetPriorityParams,
    type FeeGetRecentParams as FeeGetRecentParams,
  };

  export { Stake as Stake };

  export { Inflation as Inflation, type InflationGetRewardsParams as InflationGetRewardsParams };

  export {
    Jupiter as Jupiter,
    type JupiterGetPriceParams as JupiterGetPriceParams,
    type JupiterGetQuoteParams as JupiterGetQuoteParams,
    type JupiterSwapParams as JupiterSwapParams,
  };

  export {
    Terminal as Terminal,
    type TerminalGetChartParams as TerminalGetChartParams,
    type TerminalGetPoolsParams as TerminalGetPoolsParams,
    type TerminalGetRecentTradesParams as TerminalGetRecentTradesParams,
    type TerminalGetTokensParams as TerminalGetTokensParams,
  };

  export {
    Assets as Assets,
    type AssetCreateMultipleAssetsParams as AssetCreateMultipleAssetsParams,
    type AssetGetSignaturesParams as AssetGetSignaturesParams,
    type AssetListAssetsByAuthorityParams as AssetListAssetsByAuthorityParams,
    type AssetListAssetsByCreatorParams as AssetListAssetsByCreatorParams,
    type AssetListAssetsByGroupParams as AssetListAssetsByGroupParams,
    type AssetListOwnedAssetsParams as AssetListOwnedAssetsParams,
    type AssetSearchAssetsParams as AssetSearchAssetsParams,
  };
}

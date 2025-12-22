// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BlockAPI from './block';
import { Block, BlockGetByHashParams, BlockGetHeaderParams, BlockGetTransactionsParams } from './block';
import * as FeesAPI from './fees';
import { FeeEstimateParams, Fees } from './fees';
import * as MempoolAPI from './mempool';
import { Mempool, MempoolGetRawParams } from './mempool';
import * as TxAPI from './tx';
import { Tx, TxBroadcastParams, TxDecodeParams, TxGetRawParams, TxTestMempoolParams } from './tx';
import * as AddressAPI from './address/address';
import { Address } from './address/address';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bitcoin extends APIResource {
  address: AddressAPI.Address = new AddressAPI.Address(this._client);
  tx: TxAPI.Tx = new TxAPI.Tx(this._client);
  block: BlockAPI.Block = new BlockAPI.Block(this._client);
  mempool: MempoolAPI.Mempool = new MempoolAPI.Mempool(this._client);
  fees: FeesAPI.Fees = new FeesAPI.Fees(this._client);

  /**
   * Get current mining difficulty
   */
  getDifficulty(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/bitcoin/difficulty', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get network hashrate
   */
  getHashrate(
    query: BitcoinGetHashrateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/bitcoin/hashrate', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns chain, blocks, headers, difficulty, etc.
   */
  getInfo(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/bitcoin/info', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get BTC price (USD, EUR, GBP)
   */
  getPrice(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/bitcoin/price', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get specific UTXO
   */
  getUtxo(vout: number, params: BitcoinGetUtxoParams, options?: RequestOptions): APIPromise<void> {
    const { txid, ...query } = params;
    return this._client.get(path`/bitcoin/utxo/${txid}/${vout}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Validate Bitcoin address
   */
  validateAddress(address: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/bitcoin/validate/${address}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BitcoinGetHashrateParams {
  /**
   * Block height (-1 for latest)
   */
  height?: number;

  /**
   * Number of blocks to average
   */
  nblocks?: number;
}

export interface BitcoinGetUtxoParams {
  /**
   * Path param:
   */
  txid: string;

  /**
   * Query param:
   */
  includeMempool?: boolean;
}

Bitcoin.Address = Address;
Bitcoin.Tx = Tx;
Bitcoin.Block = Block;
Bitcoin.Mempool = Mempool;
Bitcoin.Fees = Fees;

export declare namespace Bitcoin {
  export {
    type BitcoinGetHashrateParams as BitcoinGetHashrateParams,
    type BitcoinGetUtxoParams as BitcoinGetUtxoParams,
  };

  export { Address as Address };

  export {
    Tx as Tx,
    type TxBroadcastParams as TxBroadcastParams,
    type TxDecodeParams as TxDecodeParams,
    type TxGetRawParams as TxGetRawParams,
    type TxTestMempoolParams as TxTestMempoolParams,
  };

  export {
    Block as Block,
    type BlockGetByHashParams as BlockGetByHashParams,
    type BlockGetHeaderParams as BlockGetHeaderParams,
    type BlockGetTransactionsParams as BlockGetTransactionsParams,
  };

  export { Mempool as Mempool, type MempoolGetRawParams as MempoolGetRawParams };

  export { Fees as Fees, type FeeEstimateParams as FeeEstimateParams };
}

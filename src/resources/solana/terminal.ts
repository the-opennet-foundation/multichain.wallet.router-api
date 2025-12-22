// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Terminal extends APIResource {
  /**
   * Get OHLCV price chart
   *
   * @example
   * ```ts
   * await client.solana.terminal.getChart('assetId', {
   *   time_from: 0,
   *   time_to: 0,
   *   type: '1m',
   * });
   * ```
   */
  getChart(assetID: string, query: TerminalGetChartParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/solana/terminal/chart/${assetID}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get token description/info
   *
   * @example
   * ```ts
   * await client.solana.terminal.getDescription('assetId');
   * ```
   */
  getDescription(assetID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/solana/terminal/description/${assetID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get top token holders
   *
   * @example
   * ```ts
   * await client.solana.terminal.getHolders('assetId');
   * ```
   */
  getHolders(assetID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/solana/terminal/holders/${assetID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get liquidity pool info
   *
   * @example
   * ```ts
   * await client.solana.terminal.getPools({
   *   assetIds: 'assetIds',
   * });
   * ```
   */
  getPools(query: TerminalGetPoolsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/solana/terminal/pools', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get recent token trades
   *
   * @example
   * ```ts
   * await client.solana.terminal.getRecentTrades('assetId');
   * ```
   */
  getRecentTrades(
    assetID: string,
    query: TerminalGetRecentTradesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/solana/terminal/txs/${assetID}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get trending/new/top volume tokens
   *
   * @example
   * ```ts
   * await client.solana.terminal.getTokens();
   * ```
   */
  getTokens(
    query: TerminalGetTokensParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/solana/terminal/tokens', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TerminalGetChartParams {
  /**
   * Start timestamp (Unix)
   */
  time_from: number;

  /**
   * End timestamp (Unix)
   */
  time_to: number;

  /**
   * Chart resolution
   */
  type: '1m' | '5m' | '15m' | '1h' | '4h' | '1d';
}

export interface TerminalGetPoolsParams {
  /**
   * Comma-separated mint addresses
   */
  assetIds: string;
}

export interface TerminalGetRecentTradesParams {
  limit?: number;

  offset?: number;
}

export interface TerminalGetTokensParams {
  /**
   * Time interval for metrics
   */
  interval?: '5m' | '1h' | '6h' | '24h';
}

export declare namespace Terminal {
  export {
    type TerminalGetChartParams as TerminalGetChartParams,
    type TerminalGetPoolsParams as TerminalGetPoolsParams,
    type TerminalGetRecentTradesParams as TerminalGetRecentTradesParams,
    type TerminalGetTokensParams as TerminalGetTokensParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Jupiter extends APIResource {
  /**
   * Get token prices (USD)
   *
   * @example
   * ```ts
   * await client.solana.jupiter.getPrice({ ids: 'ids' });
   * ```
   */
  getPrice(query: JupiterGetPriceParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/solana/jupiter/price', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns best route, output amount, price impact
   *
   * @example
   * ```ts
   * await client.solana.jupiter.getQuote({
   *   amount: 0,
   *   inputMint: 'inputMint',
   *   outputMint: 'outputMint',
   * });
   * ```
   */
  getQuote(query: JupiterGetQuoteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/solana/jupiter/quote', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all tradeable tokens
   *
   * @example
   * ```ts
   * await client.solana.jupiter.getTokens();
   * ```
   */
  getTokens(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/solana/jupiter/tokens', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Build swap transaction from quote
   *
   * @example
   * ```ts
   * await client.solana.jupiter.swap({
   *   quoteResponse: {},
   *   userPublicKey: 'userPublicKey',
   * });
   * ```
   */
  swap(body: JupiterSwapParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/solana/jupiter/swap', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface JupiterGetPriceParams {
  /**
   * Comma-separated mint addresses
   */
  ids: string;
}

export interface JupiterGetQuoteParams {
  /**
   * Input amount in base units
   */
  amount: number;

  /**
   * Input token mint
   */
  inputMint: string;

  /**
   * Output token mint
   */
  outputMint: string;

  /**
   * Slippage in basis points (100 = 1%)
   */
  slippageBps?: number;
}

export interface JupiterSwapParams {
  /**
   * Quote response from /jupiter/quote
   */
  quoteResponse: unknown;

  /**
   * User wallet public key
   */
  userPublicKey: string;
}

export declare namespace Jupiter {
  export {
    type JupiterGetPriceParams as JupiterGetPriceParams,
    type JupiterGetQuoteParams as JupiterGetQuoteParams,
    type JupiterSwapParams as JupiterSwapParams,
  };
}

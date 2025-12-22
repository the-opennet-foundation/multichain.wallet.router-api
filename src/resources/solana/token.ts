// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Token extends APIResource {
  /**
   * Get largest token accounts (top holders)
   *
   * @example
   * ```ts
   * await client.solana.token.listLargestAccounts('mint');
   * ```
   */
  listLargestAccounts(mint: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/solana/token/${mint}/largest`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get balance for specific token account
   *
   * @example
   * ```ts
   * await client.solana.token.retrieveBalance('tokenAccount');
   * ```
   */
  retrieveBalance(tokenAccount: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/solana/token/${tokenAccount}/balance`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get total supply for token mint
   *
   * @example
   * ```ts
   * await client.solana.token.retrieveTotalSupply('mint');
   * ```
   */
  retrieveTotalSupply(mint: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/solana/token/${mint}/supply`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

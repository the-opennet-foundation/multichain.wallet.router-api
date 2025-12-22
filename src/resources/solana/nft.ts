// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class NFT extends APIResource {
  /**
   * Get NFT edition info
   *
   * @example
   * ```ts
   * await client.solana.nft.getEditions('mint');
   * ```
   */
  getEditions(
    mint: string,
    query: NFTGetEditionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/solana/nft/${mint}/editions`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface NFTGetEditionsParams {
  limit?: number;

  page?: number;
}

export declare namespace NFT {
  export { type NFTGetEditionsParams as NFTGetEditionsParams };
}

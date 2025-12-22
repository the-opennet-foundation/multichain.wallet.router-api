// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Assets extends APIResource {
  /**
   * Get single asset details
   *
   * @example
   * ```ts
   * await client.solana.assets.retrieve('assetId');
   * ```
   */
  retrieve(assetID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/solana/asset/${assetID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get multiple assets by IDs
   *
   * @example
   * ```ts
   * await client.solana.assets.createMultipleAssets();
   * ```
   */
  createMultipleAssets(body: AssetCreateMultipleAssetsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/solana/assets', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get Merkle proof for compressed NFT
   *
   * @example
   * ```ts
   * await client.solana.assets.getProof('assetId');
   * ```
   */
  getProof(assetID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/solana/asset/${assetID}/proof`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get transaction signatures for asset
   *
   * @example
   * ```ts
   * await client.solana.assets.getSignatures('assetId');
   * ```
   */
  getSignatures(
    assetID: string,
    query: AssetGetSignaturesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/solana/asset/${assetID}/signatures`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get assets by update authority
   *
   * @example
   * ```ts
   * await client.solana.assets.listAssetsByAuthority(
   *   'authority',
   * );
   * ```
   */
  listAssetsByAuthority(
    authority: string,
    query: AssetListAssetsByAuthorityParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/solana/assets/authority/${authority}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get assets by creator address
   *
   * @example
   * ```ts
   * await client.solana.assets.listAssetsByCreator('creator');
   * ```
   */
  listAssetsByCreator(
    creator: string,
    query: AssetListAssetsByCreatorParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/solana/assets/creator/${creator}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * groupKey is typically "collection", groupValue is collection address
   *
   * @example
   * ```ts
   * await client.solana.assets.listAssetsByGroup('groupValue', {
   *   groupKey: 'collection',
   * });
   * ```
   */
  listAssetsByGroup(
    groupValue: string,
    params: AssetListAssetsByGroupParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { groupKey, ...query } = params;
    return this._client.get(path`/solana/assets/group/${groupKey}/${groupValue}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Uses Alchemy DAS API - includes compressed NFTs
   *
   * @example
   * ```ts
   * await client.solana.assets.listOwnedAssets('owner');
   * ```
   */
  listOwnedAssets(
    owner: string,
    query: AssetListOwnedAssetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/solana/assets/${owner}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Advanced asset search with filters
   *
   * @example
   * ```ts
   * await client.solana.assets.searchAssets();
   * ```
   */
  searchAssets(body: AssetSearchAssetsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/solana/assets/search', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AssetCreateMultipleAssetsParams {
  assetIds?: Array<string>;
}

export interface AssetGetSignaturesParams {
  limit?: number;

  page?: number;
}

export interface AssetListAssetsByAuthorityParams {
  limit?: number;

  page?: number;
}

export interface AssetListAssetsByCreatorParams {
  limit?: number;

  page?: number;
}

export interface AssetListAssetsByGroupParams {
  /**
   * Path param:
   */
  groupKey: string;

  /**
   * Query param:
   */
  limit?: number;

  /**
   * Query param:
   */
  page?: number;
}

export interface AssetListOwnedAssetsParams {
  limit?: number;

  page?: number;
}

export interface AssetSearchAssetsParams {
  burnt?: boolean;

  creatorAddress?: string;

  frozen?: boolean;

  grouping?: Array<AssetSearchAssetsParams.Grouping>;

  limit?: number;

  ownerAddress?: string;

  page?: number;
}

export namespace AssetSearchAssetsParams {
  export interface Grouping {
    group_key?: string;

    group_value?: string;
  }
}

export declare namespace Assets {
  export {
    type AssetCreateMultipleAssetsParams as AssetCreateMultipleAssetsParams,
    type AssetGetSignaturesParams as AssetGetSignaturesParams,
    type AssetListAssetsByAuthorityParams as AssetListAssetsByAuthorityParams,
    type AssetListAssetsByCreatorParams as AssetListAssetsByCreatorParams,
    type AssetListAssetsByGroupParams as AssetListAssetsByGroupParams,
    type AssetListOwnedAssetsParams as AssetListOwnedAssetsParams,
    type AssetSearchAssetsParams as AssetSearchAssetsParams,
  };
}

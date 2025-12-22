// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Mempool extends APIResource {
  /**
   * Returns size, bytes, usage, etc.
   */
  getInfo(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/bitcoin/mempool', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Shows estimated next blocks from mempool
   */
  getProjectedBlocks(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/bitcoin/mempool/blocks', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get raw mempool
   */
  getRaw(query: MempoolGetRawParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/bitcoin/mempool/raw', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MempoolGetRawParams {
  verbose?: boolean;
}

export declare namespace Mempool {
  export { type MempoolGetRawParams as MempoolGetRawParams };
}

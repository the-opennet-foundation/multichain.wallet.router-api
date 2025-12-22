// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tx extends APIResource {
  /**
   * Get transaction by signature
   *
   * @example
   * ```ts
   * await client.solana.tx.retrieve('signature');
   * ```
   */
  retrieve(signature: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/solana/tx/${signature}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Send signed transaction
   *
   * @example
   * ```ts
   * await client.solana.tx.send({
   *   signedTransaction: 'signedTransaction',
   * });
   * ```
   */
  send(body: TxSendParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/solana/tx/send', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Simulate transaction
   *
   * @example
   * ```ts
   * await client.solana.tx.simulate({
   *   transaction: 'transaction',
   * });
   * ```
   */
  simulate(body: TxSimulateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/solana/tx/simulate', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TxSendParams {
  /**
   * Base64-encoded signed transaction
   */
  signedTransaction: string;
}

export interface TxSimulateParams {
  /**
   * Base64-encoded transaction
   */
  transaction: string;
}

export declare namespace Tx {
  export { type TxSendParams as TxSendParams, type TxSimulateParams as TxSimulateParams };
}

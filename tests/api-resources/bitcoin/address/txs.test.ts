// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MultichainWalletRouterAPI from '@paxeer-network/multichain-wallet-router-api';

const client = new MultichainWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource txs', () => {
  // Prism tests are disabled
  test.skip('getAll', async () => {
    const responsePromise = client.bitcoin.address.txs.getAll('address');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPaginated', async () => {
    const responsePromise = client.bitcoin.address.txs.getPaginated('address');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPaginated: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bitcoin.address.txs.getPaginated(
        'address',
        { lastSeenTxid: 'lastSeenTxid' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(MultichainWalletRouterAPI.NotFoundError);
  });
});

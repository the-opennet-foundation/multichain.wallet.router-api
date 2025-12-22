// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MultichainWalletRouterAPI from 'multichain.wallet.router-api';

const client = new MultichainWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fees', () => {
  // Prism tests are disabled
  test.skip('getPriority', async () => {
    const responsePromise = client.solana.fees.getPriority();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPriority: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.solana.fees.getPriority({ accountKeys: 'accountKeys' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MultichainWalletRouterAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getRecent', async () => {
    const responsePromise = client.solana.fees.getRecent();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getRecent: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.solana.fees.getRecent({ addresses: 'addresses' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MultichainWalletRouterAPI.NotFoundError);
  });
});

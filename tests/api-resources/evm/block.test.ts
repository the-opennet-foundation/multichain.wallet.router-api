// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MultichainWalletRouterAPI from 'multichain.wallet.router-api';

const client = new MultichainWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource block', () => {
  // Prism tests are disabled
  test.skip('getByNumber: only required params', async () => {
    const responsePromise = client.evm.block.getByNumber('blockNumber', { chainId: 'ethereum' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getByNumber: required and optional params', async () => {
    const response = await client.evm.block.getByNumber('blockNumber', {
      chainId: 'ethereum',
      fullTxs: true,
    });
  });

  // Prism tests are disabled
  test.skip('getCurrentNumber', async () => {
    const responsePromise = client.evm.block.getCurrentNumber('ethereum');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});

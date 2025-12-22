// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MultichainWalletRouterAPI from '@paxeer-network/multichain.wallet.router-api';

const client = new MultichainWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource explorer', () => {
  // Prism tests are disabled
  test.skip('getGasOracle', async () => {
    const responsePromise = client.evm.explorer.getGasOracle('ethereum');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTokenInfo: only required params', async () => {
    const responsePromise = client.evm.explorer.getTokenInfo('address', { chainId: 'ethereum' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTokenInfo: required and optional params', async () => {
    const response = await client.evm.explorer.getTokenInfo('address', { chainId: 'ethereum' });
  });

  // Prism tests are disabled
  test.skip('getTokentx: only required params', async () => {
    const responsePromise = client.evm.explorer.getTokentx('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
      chainId: 'ethereum',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTokentx: required and optional params', async () => {
    const response = await client.evm.explorer.getTokentx('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
      chainId: 'ethereum',
      contractAddress: 'contractAddress',
      offset: 0,
      page: 0,
    });
  });

  // Prism tests are disabled
  test.skip('getTxlist: only required params', async () => {
    const responsePromise = client.evm.explorer.getTxlist('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
      chainId: 'ethereum',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTxlist: required and optional params', async () => {
    const response = await client.evm.explorer.getTxlist('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
      chainId: 'ethereum',
      offset: 0,
      page: 0,
      sort: 'asc',
    });
  });
});

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MultichainWalletRouterAPI from 'multichain.wallet.router-api';

const client = new MultichainWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contract', () => {
  // Prism tests are disabled
  test.skip('getAbi: only required params', async () => {
    const responsePromise = client.evm.explorer.contract.getAbi(
      '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      { chainId: 'ethereum' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getAbi: required and optional params', async () => {
    const response = await client.evm.explorer.contract.getAbi('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
      chainId: 'ethereum',
    });
  });

  // Prism tests are disabled
  test.skip('getSource: only required params', async () => {
    const responsePromise = client.evm.explorer.contract.getSource(
      '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      { chainId: 'ethereum' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getSource: required and optional params', async () => {
    const response = await client.evm.explorer.contract.getSource(
      '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      { chainId: 'ethereum' },
    );
  });
});

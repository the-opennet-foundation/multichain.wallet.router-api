// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MultichainWalletRouterAPI from '@paxeer-network/multichain-wallet-router-api';

const client = new MultichainWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evm', () => {
  // Prism tests are disabled
  test.skip('callContract', async () => {
    const responsePromise = client.evm.callContract('ethereum', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getBalance: only required params', async () => {
    const responsePromise = client.evm.getBalance('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
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
  test.skip('getBalance: required and optional params', async () => {
    const response = await client.evm.getBalance('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
      chainId: 'ethereum',
    });
  });

  // Prism tests are disabled
  test.skip('getContractCode: only required params', async () => {
    const responsePromise = client.evm.getContractCode('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
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
  test.skip('getContractCode: required and optional params', async () => {
    const response = await client.evm.getContractCode('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
      chainId: 'ethereum',
    });
  });

  // Prism tests are disabled
  test.skip('getNFTMetadata: only required params', async () => {
    const responsePromise = client.evm.getNFTMetadata('tokenId', {
      chainId: 'ethereum',
      contractAddress: 'contractAddress',
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
  test.skip('getNFTMetadata: required and optional params', async () => {
    const response = await client.evm.getNFTMetadata('tokenId', {
      chainId: 'ethereum',
      contractAddress: 'contractAddress',
    });
  });

  // Prism tests are disabled
  test.skip('getNFTs: only required params', async () => {
    const responsePromise = client.evm.getNFTs('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
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
  test.skip('getNFTs: required and optional params', async () => {
    const response = await client.evm.getNFTs('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
      chainId: 'ethereum',
      pageKey: 'pageKey',
      pageSize: 0,
    });
  });

  // Prism tests are disabled
  test.skip('getNonce: only required params', async () => {
    const responsePromise = client.evm.getNonce('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
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
  test.skip('getNonce: required and optional params', async () => {
    const response = await client.evm.getNonce('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
      chainId: 'ethereum',
    });
  });

  // Prism tests are disabled
  test.skip('getTokens: only required params', async () => {
    const responsePromise = client.evm.getTokens('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
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
  test.skip('getTokens: required and optional params', async () => {
    const response = await client.evm.getTokens('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
      chainId: 'ethereum',
    });
  });

  // Prism tests are disabled
  test.skip('getTransactionHistory: only required params', async () => {
    const responsePromise = client.evm.getTransactionHistory('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
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
  test.skip('getTransactionHistory: required and optional params', async () => {
    const response = await client.evm.getTransactionHistory('0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A', {
      chainId: 'ethereum',
      category: 'category',
      fromBlock: 'fromBlock',
      maxCount: 0,
      pageKey: 'pageKey',
      toBlock: 'toBlock',
    });
  });

  // Prism tests are disabled
  test.skip('simulateTransaction', async () => {
    const responsePromise = client.evm.simulateTransaction('ethereum', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MultichainWalletRouterAPI from 'multichain.wallet.router-api';

const client = new MultichainWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jupiter', () => {
  // Prism tests are disabled
  test.skip('getPrice: only required params', async () => {
    const responsePromise = client.solana.jupiter.getPrice({ ids: 'ids' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPrice: required and optional params', async () => {
    const response = await client.solana.jupiter.getPrice({ ids: 'ids' });
  });

  // Prism tests are disabled
  test.skip('getQuote: only required params', async () => {
    const responsePromise = client.solana.jupiter.getQuote({
      amount: 0,
      inputMint: 'inputMint',
      outputMint: 'outputMint',
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
  test.skip('getQuote: required and optional params', async () => {
    const response = await client.solana.jupiter.getQuote({
      amount: 0,
      inputMint: 'inputMint',
      outputMint: 'outputMint',
      slippageBps: 0,
    });
  });

  // Prism tests are disabled
  test.skip('getTokens', async () => {
    const responsePromise = client.solana.jupiter.getTokens();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('swap: only required params', async () => {
    const responsePromise = client.solana.jupiter.swap({ quoteResponse: {}, userPublicKey: 'userPublicKey' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('swap: required and optional params', async () => {
    const response = await client.solana.jupiter.swap({ quoteResponse: {}, userPublicKey: 'userPublicKey' });
  });
});

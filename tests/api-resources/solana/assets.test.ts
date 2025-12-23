// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MultichainWalletRouterAPI from '@paxeer-network/multichain-wallet-router-api';

const client = new MultichainWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assets', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.solana.assets.retrieve('assetId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createMultipleAssets', async () => {
    const responsePromise = client.solana.assets.createMultipleAssets({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getProof', async () => {
    const responsePromise = client.solana.assets.getProof('assetId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getSignatures', async () => {
    const responsePromise = client.solana.assets.getSignatures('assetId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getSignatures: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.solana.assets.getSignatures(
        'assetId',
        { limit: 0, page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(MultichainWalletRouterAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listAssetsByAuthority', async () => {
    const responsePromise = client.solana.assets.listAssetsByAuthority('authority');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAssetsByAuthority: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.solana.assets.listAssetsByAuthority(
        'authority',
        { limit: 0, page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(MultichainWalletRouterAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listAssetsByCreator', async () => {
    const responsePromise = client.solana.assets.listAssetsByCreator('creator');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAssetsByCreator: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.solana.assets.listAssetsByCreator(
        'creator',
        { limit: 0, page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(MultichainWalletRouterAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listAssetsByGroup: only required params', async () => {
    const responsePromise = client.solana.assets.listAssetsByGroup('groupValue', { groupKey: 'collection' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAssetsByGroup: required and optional params', async () => {
    const response = await client.solana.assets.listAssetsByGroup('groupValue', {
      groupKey: 'collection',
      limit: 0,
      page: 0,
    });
  });

  // Prism tests are disabled
  test.skip('listOwnedAssets', async () => {
    const responsePromise = client.solana.assets.listOwnedAssets('owner');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listOwnedAssets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.solana.assets.listOwnedAssets(
        'owner',
        { limit: 1000, page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(MultichainWalletRouterAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('searchAssets', async () => {
    const responsePromise = client.solana.assets.searchAssets({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});

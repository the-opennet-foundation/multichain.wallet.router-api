// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MultichainWalletRouterAPI from 'multichain.wallet.router-api';

const client = new MultichainWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tx', () => {
  // Prism tests are disabled
  test.skip('broadcast: only required params', async () => {
    const responsePromise = client.bitcoin.tx.broadcast({ hex: 'hex' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('broadcast: required and optional params', async () => {
    const response = await client.bitcoin.tx.broadcast({ hex: 'hex' });
  });

  // Prism tests are disabled
  test.skip('decode: only required params', async () => {
    const responsePromise = client.bitcoin.tx.decode({ hex: 'hex' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('decode: required and optional params', async () => {
    const response = await client.bitcoin.tx.decode({ hex: 'hex' });
  });

  // Prism tests are disabled
  test.skip('getInfo', async () => {
    const responsePromise = client.bitcoin.tx.getInfo('txid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getRaw', async () => {
    const responsePromise = client.bitcoin.tx.getRaw('txid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getRaw: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bitcoin.tx.getRaw('txid', { verbose: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MultichainWalletRouterAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getRawHex', async () => {
    const responsePromise = client.bitcoin.tx.getRawHex('txid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getStatus', async () => {
    const responsePromise = client.bitcoin.tx.getStatus('txid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('testMempool: only required params', async () => {
    const responsePromise = client.bitcoin.tx.testMempool({ rawTxs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('testMempool: required and optional params', async () => {
    const response = await client.bitcoin.tx.testMempool({ rawTxs: ['string'] });
  });
});

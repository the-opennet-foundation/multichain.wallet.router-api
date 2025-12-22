# MultichainWalletRouterAPI

Methods:

- <code title="get /">client.<a href="./src/index.ts">getInfo</a>() -> void</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Wallet

Methods:

- <code title="get /wallet/chains">client.wallet.<a href="./src/resources/wallet.ts">listChains</a>() -> void</code>
- <code title="get /wallet/add-chain/{chainId}">client.wallet.<a href="./src/resources/wallet.ts">retrieveChain</a>(chainID) -> void</code>

# Evm

Methods:

- <code title="post /evm/{chainId}/call">client.evm.<a href="./src/resources/evm/evm.ts">callContract</a>(chainID, { ...params }) -> void</code>
- <code title="get /evm/{chainId}/balance/{address}">client.evm.<a href="./src/resources/evm/evm.ts">getBalance</a>(address, { ...params }) -> void</code>
- <code title="get /evm/{chainId}/code/{address}">client.evm.<a href="./src/resources/evm/evm.ts">getContractCode</a>(address, { ...params }) -> void</code>
- <code title="get /evm/{chainId}/nft/{contractAddress}/{tokenId}">client.evm.<a href="./src/resources/evm/evm.ts">getNFTMetadata</a>(tokenID, { ...params }) -> void</code>
- <code title="get /evm/{chainId}/nfts/{address}">client.evm.<a href="./src/resources/evm/evm.ts">getNFTs</a>(address, { ...params }) -> void</code>
- <code title="get /evm/{chainId}/nonce/{address}">client.evm.<a href="./src/resources/evm/evm.ts">getNonce</a>(address, { ...params }) -> void</code>
- <code title="get /evm/{chainId}/tokens/{address}">client.evm.<a href="./src/resources/evm/evm.ts">getTokens</a>(address, { ...params }) -> void</code>
- <code title="get /evm/{chainId}/transactions/{address}">client.evm.<a href="./src/resources/evm/evm.ts">getTransactionHistory</a>(address, { ...params }) -> void</code>
- <code title="post /evm/{chainId}/simulate">client.evm.<a href="./src/resources/evm/evm.ts">simulateTransaction</a>(chainID, { ...params }) -> void</code>

## Chains

Methods:

- <code title="get /evm/chains/{chainId}">client.evm.chains.<a href="./src/resources/evm/chains.ts">retrieve</a>(chainID) -> void</code>
- <code title="get /evm/chains">client.evm.chains.<a href="./src/resources/evm/chains.ts">list</a>() -> void</code>

## Token

Methods:

- <code title="get /evm/{chainId}/token/{tokenAddress}/allowance">client.evm.token.<a href="./src/resources/evm/token.ts">getAllowance</a>(tokenAddress, { ...params }) -> void</code>
- <code title="get /evm/{chainId}/token/{tokenAddress}/metadata">client.evm.token.<a href="./src/resources/evm/token.ts">getMetadata</a>(tokenAddress, { ...params }) -> void</code>

## Contract

Methods:

- <code title="get /evm/{chainId}/contract/{contractAddress}/metadata">client.evm.contract.<a href="./src/resources/evm/contract.ts">getMetadata</a>(contractAddress, { ...params }) -> void</code>

## Tx

Methods:

- <code title="get /evm/{chainId}/tx/{txHash}">client.evm.tx.<a href="./src/resources/evm/tx.ts">getByHash</a>(txHash, { ...params }) -> void</code>
- <code title="post /evm/{chainId}/tx/send">client.evm.tx.<a href="./src/resources/evm/tx.ts">send</a>(chainID, { ...params }) -> void</code>

## Gas

Methods:

- <code title="post /evm/{chainId}/gas/estimate">client.evm.gas.<a href="./src/resources/evm/gas.ts">estimate</a>(chainID, { ...params }) -> void</code>
- <code title="get /evm/{chainId}/gas/price">client.evm.gas.<a href="./src/resources/evm/gas.ts">getPrice</a>(chainID) -> void</code>

## Block

Methods:

- <code title="get /evm/{chainId}/block/{blockNumber}">client.evm.block.<a href="./src/resources/evm/block.ts">getByNumber</a>(blockNumber, { ...params }) -> void</code>
- <code title="get /evm/{chainId}/block/number">client.evm.block.<a href="./src/resources/evm/block.ts">getCurrentNumber</a>(chainID) -> void</code>

## Prices

Methods:

- <code title="post /evm/{chainId}/prices/by-address">client.evm.prices.<a href="./src/resources/evm/prices.ts">getByAddress</a>(chainID, { ...params }) -> void</code>
- <code title="post /evm/prices/by-symbol">client.evm.prices.<a href="./src/resources/evm/prices.ts">getBySymbol</a>({ ...params }) -> void</code>

## Explorer

Methods:

- <code title="get /evm/{chainId}/explorer/gas">client.evm.explorer.<a href="./src/resources/evm/explorer/explorer.ts">getGasOracle</a>(chainID) -> void</code>
- <code title="get /evm/{chainId}/explorer/token/{address}">client.evm.explorer.<a href="./src/resources/evm/explorer/explorer.ts">getTokenInfo</a>(address, { ...params }) -> void</code>
- <code title="get /evm/{chainId}/explorer/tokentx/{address}">client.evm.explorer.<a href="./src/resources/evm/explorer/explorer.ts">getTokentx</a>(address, { ...params }) -> void</code>
- <code title="get /evm/{chainId}/explorer/txlist/{address}">client.evm.explorer.<a href="./src/resources/evm/explorer/explorer.ts">getTxlist</a>(address, { ...params }) -> void</code>

### Contract

Methods:

- <code title="get /evm/{chainId}/explorer/contract/{address}/abi">client.evm.explorer.contract.<a href="./src/resources/evm/explorer/contract.ts">getAbi</a>(address, { ...params }) -> void</code>
- <code title="get /evm/{chainId}/explorer/contract/{address}/source">client.evm.explorer.contract.<a href="./src/resources/evm/explorer/contract.ts">getSource</a>(address, { ...params }) -> void</code>

# Solana

Methods:

- <code title="post /solana/accounts">client.solana.<a href="./src/resources/solana/solana.ts">createMultipleAccounts</a>({ ...params }) -> void</code>
- <code title="get /solana/signatures/{address}">client.solana.<a href="./src/resources/solana/solana.ts">listSignatures</a>(address, { ...params }) -> void</code>
- <code title="get /solana/tokens/{owner}">client.solana.<a href="./src/resources/solana/solana.ts">listTokens</a>(owner, { ...params }) -> void</code>
- <code title="get /solana/validators">client.solana.<a href="./src/resources/solana/solana.ts">listValidators</a>() -> void</code>
- <code title="get /solana/account/{address}">client.solana.<a href="./src/resources/solana/solana.ts">retrieveAccountInfo</a>(address) -> void</code>
- <code title="get /solana/balance/{address}">client.solana.<a href="./src/resources/solana/solana.ts">retrieveBalance</a>(address) -> void</code>
- <code title="get /solana/block/{slot}">client.solana.<a href="./src/resources/solana/solana.ts">retrieveBlockBySlot</a>(slot) -> void</code>
- <code title="get /solana/slot">client.solana.<a href="./src/resources/solana/solana.ts">retrieveCurrentSlot</a>() -> void</code>
- <code title="get /solana/info">client.solana.<a href="./src/resources/solana/solana.ts">retrieveInfo</a>() -> void</code>
- <code title="get /solana/blockhash">client.solana.<a href="./src/resources/solana/solana.ts">retrieveLatestBlockhash</a>() -> void</code>

## Token

Methods:

- <code title="get /solana/token/{mint}/largest">client.solana.token.<a href="./src/resources/solana/token.ts">listLargestAccounts</a>(mint) -> void</code>
- <code title="get /solana/token/{tokenAccount}/balance">client.solana.token.<a href="./src/resources/solana/token.ts">retrieveBalance</a>(tokenAccount) -> void</code>
- <code title="get /solana/token/{mint}/supply">client.solana.token.<a href="./src/resources/solana/token.ts">retrieveTotalSupply</a>(mint) -> void</code>

## NFT

Methods:

- <code title="get /solana/nft/{mint}/editions">client.solana.nft.<a href="./src/resources/solana/nft.ts">getEditions</a>(mint, { ...params }) -> void</code>

## Tx

Methods:

- <code title="get /solana/tx/{signature}">client.solana.tx.<a href="./src/resources/solana/tx.ts">retrieve</a>(signature) -> void</code>
- <code title="post /solana/tx/send">client.solana.tx.<a href="./src/resources/solana/tx.ts">send</a>({ ...params }) -> void</code>
- <code title="post /solana/tx/simulate">client.solana.tx.<a href="./src/resources/solana/tx.ts">simulate</a>({ ...params }) -> void</code>

## Fees

Methods:

- <code title="get /solana/fees/priority">client.solana.fees.<a href="./src/resources/solana/fees.ts">getPriority</a>({ ...params }) -> void</code>
- <code title="get /solana/fees/recent">client.solana.fees.<a href="./src/resources/solana/fees.ts">getRecent</a>({ ...params }) -> void</code>

## Stake

Methods:

- <code title="get /solana/stake/{account}/activation">client.solana.stake.<a href="./src/resources/solana/stake.ts">getActivationStatus</a>(account) -> void</code>

## Inflation

Methods:

- <code title="get /solana/inflation/rate">client.solana.inflation.<a href="./src/resources/solana/inflation.ts">getRate</a>() -> void</code>
- <code title="post /solana/inflation/rewards">client.solana.inflation.<a href="./src/resources/solana/inflation.ts">getRewards</a>({ ...params }) -> void</code>

## Jupiter

Methods:

- <code title="get /solana/jupiter/price">client.solana.jupiter.<a href="./src/resources/solana/jupiter.ts">getPrice</a>({ ...params }) -> void</code>
- <code title="get /solana/jupiter/quote">client.solana.jupiter.<a href="./src/resources/solana/jupiter.ts">getQuote</a>({ ...params }) -> void</code>
- <code title="get /solana/jupiter/tokens">client.solana.jupiter.<a href="./src/resources/solana/jupiter.ts">getTokens</a>() -> void</code>
- <code title="post /solana/jupiter/swap">client.solana.jupiter.<a href="./src/resources/solana/jupiter.ts">swap</a>({ ...params }) -> void</code>

## Terminal

Methods:

- <code title="get /solana/terminal/chart/{assetId}">client.solana.terminal.<a href="./src/resources/solana/terminal.ts">getChart</a>(assetID, { ...params }) -> void</code>
- <code title="get /solana/terminal/description/{assetId}">client.solana.terminal.<a href="./src/resources/solana/terminal.ts">getDescription</a>(assetID) -> void</code>
- <code title="get /solana/terminal/holders/{assetId}">client.solana.terminal.<a href="./src/resources/solana/terminal.ts">getHolders</a>(assetID) -> void</code>
- <code title="get /solana/terminal/pools">client.solana.terminal.<a href="./src/resources/solana/terminal.ts">getPools</a>({ ...params }) -> void</code>
- <code title="get /solana/terminal/txs/{assetId}">client.solana.terminal.<a href="./src/resources/solana/terminal.ts">getRecentTrades</a>(assetID, { ...params }) -> void</code>
- <code title="get /solana/terminal/tokens">client.solana.terminal.<a href="./src/resources/solana/terminal.ts">getTokens</a>({ ...params }) -> void</code>

## Assets

Methods:

- <code title="get /solana/asset/{assetId}">client.solana.assets.<a href="./src/resources/solana/assets.ts">retrieve</a>(assetID) -> void</code>
- <code title="post /solana/assets">client.solana.assets.<a href="./src/resources/solana/assets.ts">createMultipleAssets</a>({ ...params }) -> void</code>
- <code title="get /solana/asset/{assetId}/proof">client.solana.assets.<a href="./src/resources/solana/assets.ts">getProof</a>(assetID) -> void</code>
- <code title="get /solana/asset/{assetId}/signatures">client.solana.assets.<a href="./src/resources/solana/assets.ts">getSignatures</a>(assetID, { ...params }) -> void</code>
- <code title="get /solana/assets/authority/{authority}">client.solana.assets.<a href="./src/resources/solana/assets.ts">listAssetsByAuthority</a>(authority, { ...params }) -> void</code>
- <code title="get /solana/assets/creator/{creator}">client.solana.assets.<a href="./src/resources/solana/assets.ts">listAssetsByCreator</a>(creator, { ...params }) -> void</code>
- <code title="get /solana/assets/group/{groupKey}/{groupValue}">client.solana.assets.<a href="./src/resources/solana/assets.ts">listAssetsByGroup</a>(groupValue, { ...params }) -> void</code>
- <code title="get /solana/assets/{owner}">client.solana.assets.<a href="./src/resources/solana/assets.ts">listOwnedAssets</a>(owner, { ...params }) -> void</code>
- <code title="post /solana/assets/search">client.solana.assets.<a href="./src/resources/solana/assets.ts">searchAssets</a>({ ...params }) -> void</code>

# Bitcoin

Methods:

- <code title="get /bitcoin/difficulty">client.bitcoin.<a href="./src/resources/bitcoin/bitcoin.ts">getDifficulty</a>() -> void</code>
- <code title="get /bitcoin/hashrate">client.bitcoin.<a href="./src/resources/bitcoin/bitcoin.ts">getHashrate</a>({ ...params }) -> void</code>
- <code title="get /bitcoin/info">client.bitcoin.<a href="./src/resources/bitcoin/bitcoin.ts">getInfo</a>() -> void</code>
- <code title="get /bitcoin/price">client.bitcoin.<a href="./src/resources/bitcoin/bitcoin.ts">getPrice</a>() -> void</code>
- <code title="get /bitcoin/utxo/{txid}/{vout}">client.bitcoin.<a href="./src/resources/bitcoin/bitcoin.ts">getUtxo</a>(vout, { ...params }) -> void</code>
- <code title="get /bitcoin/validate/{address}">client.bitcoin.<a href="./src/resources/bitcoin/bitcoin.ts">validateAddress</a>(address) -> void</code>

## Address

Methods:

- <code title="get /bitcoin/address/{address}">client.bitcoin.address.<a href="./src/resources/bitcoin/address/address.ts">getInfo</a>(address) -> void</code>
- <code title="get /bitcoin/address/{address}/utxo">client.bitcoin.address.<a href="./src/resources/bitcoin/address/address.ts">getUtxos</a>(address) -> void</code>

### Txs

Methods:

- <code title="get /bitcoin/address/{address}/txs">client.bitcoin.address.txs.<a href="./src/resources/bitcoin/address/txs.ts">getAll</a>(address) -> void</code>
- <code title="get /bitcoin/address/{address}/txs/chain">client.bitcoin.address.txs.<a href="./src/resources/bitcoin/address/txs.ts">getPaginated</a>(address, { ...params }) -> void</code>

## Tx

Methods:

- <code title="post /bitcoin/tx/send">client.bitcoin.tx.<a href="./src/resources/bitcoin/tx.ts">broadcast</a>({ ...params }) -> void</code>
- <code title="post /bitcoin/tx/decode">client.bitcoin.tx.<a href="./src/resources/bitcoin/tx.ts">decode</a>({ ...params }) -> void</code>
- <code title="get /bitcoin/tx/{txid}">client.bitcoin.tx.<a href="./src/resources/bitcoin/tx.ts">getInfo</a>(txid) -> void</code>
- <code title="get /bitcoin/tx/{txid}/raw">client.bitcoin.tx.<a href="./src/resources/bitcoin/tx.ts">getRaw</a>(txid, { ...params }) -> void</code>
- <code title="get /bitcoin/tx/{txid}/hex">client.bitcoin.tx.<a href="./src/resources/bitcoin/tx.ts">getRawHex</a>(txid) -> void</code>
- <code title="get /bitcoin/tx/{txid}/status">client.bitcoin.tx.<a href="./src/resources/bitcoin/tx.ts">getStatus</a>(txid) -> void</code>
- <code title="post /bitcoin/tx/test">client.bitcoin.tx.<a href="./src/resources/bitcoin/tx.ts">testMempool</a>({ ...params }) -> void</code>

## Block

Methods:

- <code title="get /bitcoin/block/best">client.bitcoin.block.<a href="./src/resources/bitcoin/block.ts">getBest</a>() -> void</code>
- <code title="get /bitcoin/block/hash/{hash}">client.bitcoin.block.<a href="./src/resources/bitcoin/block.ts">getByHash</a>(hash, { ...params }) -> void</code>
- <code title="get /bitcoin/block/height/{height}">client.bitcoin.block.<a href="./src/resources/bitcoin/block.ts">getByHeight</a>(height) -> void</code>
- <code title="get /bitcoin/block/{hash}/header">client.bitcoin.block.<a href="./src/resources/bitcoin/block.ts">getHeader</a>(hash, { ...params }) -> void</code>
- <code title="get /bitcoin/block/{hash}/stats">client.bitcoin.block.<a href="./src/resources/bitcoin/block.ts">getStats</a>(hash) -> void</code>
- <code title="get /bitcoin/block/tip">client.bitcoin.block.<a href="./src/resources/bitcoin/block.ts">getTip</a>() -> void</code>
- <code title="get /bitcoin/block/{hash}/txids">client.bitcoin.block.<a href="./src/resources/bitcoin/block.ts">getTransactionIDs</a>(hash) -> void</code>
- <code title="get /bitcoin/block/{hash}/txs">client.bitcoin.block.<a href="./src/resources/bitcoin/block.ts">getTransactions</a>(hash, { ...params }) -> void</code>

## Mempool

Methods:

- <code title="get /bitcoin/mempool">client.bitcoin.mempool.<a href="./src/resources/bitcoin/mempool.ts">getInfo</a>() -> void</code>
- <code title="get /bitcoin/mempool/blocks">client.bitcoin.mempool.<a href="./src/resources/bitcoin/mempool.ts">getProjectedBlocks</a>() -> void</code>
- <code title="get /bitcoin/mempool/raw">client.bitcoin.mempool.<a href="./src/resources/bitcoin/mempool.ts">getRaw</a>({ ...params }) -> void</code>

## Fees

Methods:

- <code title="get /bitcoin/fees/estimate">client.bitcoin.fees.<a href="./src/resources/bitcoin/fees.ts">estimate</a>({ ...params }) -> void</code>
- <code title="get /bitcoin/fees">client.bitcoin.fees.<a href="./src/resources/bitcoin/fees.ts">getRecommended</a>() -> void</code>

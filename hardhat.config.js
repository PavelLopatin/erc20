/**
* @type import('hardhat/config').HardhatUserConfig
*/
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
require('dotenv').config();

module.exports = {
   solidity: {
      compilers: [
            {
               version: "0.8.4"
            },
            {
               version: "0.5.16"
            }
      ]
   },
  //If you want to use other test network then feel free to use just replace ropsten with your test network name
   defaultNetwork: "ganache_ultron",
   networks: {
      ganache_ultron: {
         url: process.env.RPC,
         accounts: [process.env.KEY]
      },
      ganache_bsc: {
         url: process.env.RPC_BSC,
         accounts: [process.env.TRON_KEY]
      },
   },
   settings: {          // See the solidity docs for advice about optimization and evmVersion
      optimizer: {
        enabled: true,
        runs: 1
      }
   },
   contractSizer: {
      alphaSort: true,
      disambiguatePaths: false,
      runOnCompile: true,
      strict: true,
   }
}


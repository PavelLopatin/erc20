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
    plugins: ["truffle-source-verify"],
  //If you want to use other test network then feel free to use just replace ropsten with your test network name
   defaultNetwork: "bcs",

   networks: {
      bcs: {
         url: "http://ganache_bsc:8545",
         accounts: [process.env.KEY]
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
   },
}


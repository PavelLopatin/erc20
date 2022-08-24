module.exports = {
  networks: {
    development: {
      privateKey: process.env.TRON_KEY,
      feeLimit: 100000000,
      fullHost: process.env.RPC_TRON,
      network_id: "*"
    },
    compilers: {
      solc: {
        version: '0.5.16' // for compiler version
      }
    }
  }
}
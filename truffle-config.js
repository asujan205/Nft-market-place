module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },
  ropsten: {
    provider: new HDWalletProvider(
      mnemonic,
      "https://ropsten.infura.io/" + infura_apikey
    ),
    network_id: 5,
  },

  compilers: {
    solc: {
      version: "^0.8.0",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 1000, // Default: 200
        },
      },
    },
  },
};

require('@nomicfoundation/hardhat-toolbox');
require('@parity/hardhat-polkadot');
require("@nomicfoundation/hardhat-ignition-ethers");
require('dotenv').config();

module.exports = {
	solidity: {
		version: '0.8.30',
		settings: {
			optimizer: {
				enabled: true,   // turn the optimizer on
				runs: 200        // how many times to optimize; tweak based on your use-case
			}
		},
	},
  resolc: {
      compilerSource: 'npm',
  },
  networks: {
      hardhat: {
          polkavm: true,
          nodeConfig: {
            nodeBinaryPath: '/Users/useruser/workingfolder/polkadot-sdk/target/release/substrate-node',
            rpcPort: 8000,
            dev: true,
          },
          adapterConfig: {
            adapterBinaryPath: '/Users/useruser/workingfolder/polkadot-sdk/target/release/eth-rpc',
            dev: true,
          },
      },
      localNode: {
        polkavm: true,
        url: `http://127.0.0.1:8545`,
      },
      westendHub: {
        polkavm: true,
        url: 'https://westend-asset-hub-eth-rpc.polkadot.io',
        accounts: [process.env.PRIVATE_KEY],
      },
  }
};
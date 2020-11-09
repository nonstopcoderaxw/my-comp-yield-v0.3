// const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const INFURA_API_KEY = "68beca4f1871419c946f97d19e429cea";
const DEPLOYMENT_ACCOUNT_KEY = ["e66275e5b2a0d1ab697be9e679488e4e16a2c40646503d6d3a0571394b9a5cf2"];

module.exports = {
	// See <http://truffleframework.com/docs/advanced/configuration> to customize your Truffle configuration!
	// contracts_build_directory: path.join(__dirname, "client/src/contracts"),
	networks: {
	  development: {
	    host: "127.0.0.1",
	    port: 8545,
	    gasPrice: 36000000000,
	    network_id: "*",
	    skipDryRun: true
	  },
	  ropsten: {
	    provider: new HDWalletProvider(DEPLOYMENT_ACCOUNT_KEY, "https://ropsten.infura.io/v3/" + INFURA_API_KEY),
	    network_id: 3,
	    gas: 5000000,
		gasPrice: 5000000000, // 5 Gwei
		skipDryRun: true
	  },
	  kovan: {
	    provider: new HDWalletProvider(DEPLOYMENT_ACCOUNT_KEY, "https://kovan.infura.io/v3/" + INFURA_API_KEY),
	    network_id: 42,
	    gas: 5000000,
		gasPrice: 5000000000, // 5 Gwei
		skipDryRun: true
	  }
	},
	compilers: {
		solc: {
			version: "0.5.16",
			docker: false,
			optimizer: {
	    	enabled: true,
	    	runs: 9999999
  		}
		},
	}
}

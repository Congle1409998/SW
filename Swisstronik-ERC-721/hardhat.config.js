require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      //2nd wallet
      accounts: ["0x8c654936e6b510a646a3cc64476f72c5aad5b4f46948546a0b1db283956f36a1"],
	//Make sure you have enough funds in this wallet to deploy the smart contract
    },
  },
};
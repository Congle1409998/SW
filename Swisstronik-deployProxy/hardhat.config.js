require("@nomicfoundation/hardhat-toolbox");
//require("dotenv").config();

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      // If you're using local testnet, replace `url` with local json-rpc address
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x8c654936e6b510a646a3cc64476f72c5aad5b4f46948546a0b1db283956f36a1"],
    },
  },
};
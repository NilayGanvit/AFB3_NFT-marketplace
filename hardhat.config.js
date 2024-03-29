require("@nomiclabs/hardhat-waffle");
const env = require("dotenv");

const privateKey1 = process.env.privateKey1;
module.exports = {
  defaultNetwork : "Mumbai",
  networks : {
   hardhat : {
    chainId: 1337
   },
   Mumbai: {
    // url:"https://polygon-mumbai.g.alchemy.com/v2/XwH83kPhl2fcLEX8J0yLq2b1aXHryKf5",
    // url :"https://rpc-mumbai.maticvigil.com/",
    url : "https://polygon-mumbai.infura.io/v3/225a2a053f304e48b8be1bc21f1728c2",
    chainId : 80001,
    accounts : [privateKey1]
   },
   mainnet:{
    url : "",
    accounts : []
   }
  },
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

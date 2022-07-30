require("@nomiclabs/hardhat-waffle");

const privateKey1 = "c0b0de7c9160a7509758aa1ac1a618885056f8f82de0443d9685fc07a0711b00"
module.exports = {
  defaultNetwork : "hardhat",
  networks : {
   hardhat : {
    chainId: 1337
   },
   Mumbai: {
    // url:"https://polygon-mumbai.g.alchemy.com/v2/XwH83kPhl2fcLEX8J0yLq2b1aXHryKf5",
    url :"https://rpc-mumbai.maticvigil.com/",
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

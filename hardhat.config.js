require("@nomiclabs/hardhat-waffle");


module.exports = {
  networks : {
   hardhat : {
    chainId : 1337
   },
   ROPSTEN: {
    url:"https://ropsten.infura.io/v3/f8d208d468b84dc5bf29514e72c811a0"
   },
   mainnet:{
    url : "https://mainnet.infura.io/v3/f8d208d468b84dc5bf29514e72c811a0"
   }
  },
  solidity: "0.8.9",
};

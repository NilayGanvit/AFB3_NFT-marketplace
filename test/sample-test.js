const { expect } = require("chai");
const { ethers } = require("hardhat");
const { markAssetError } = require("next/dist/client/route-loader");

describe("NFTMarket", function () {
  it("Should create and execute market sales", async function () {
  const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace")
  const nftMarketplace = await NFTMarketplace.deploy()
  await nftMarketplace.deployed()

  let listingPrice = await nftMarketplace.getListingPrice()
  listingPrice = listingPrice.toString()

  const autionPrice = ethers.utils.parseUnits('1','ether')

  await nftMarketplace.createToken("https://www.mytokenlocation.com",autionPrice,{value:listingPrice})
  await nftMarketplace.createToken("https://www.mytokenlocation2.com",autionPrice,{value:listingPrice})

  const [_,buyerAddress] = await ethers.getSigners()

  await nftMarketplace.connect(buyerAddress).create.resellToken(1,autionPrice,{value:listingPrice})

   items = await nftMarketplace.fetchMarketItems()
   items = await Promise.all(items.map(async i => {
    const tokenUri = await nftMarketplace.tokenURI(i.tokenId)
    let item = {
      price : i.price.toString(),
      tokenId : i.tokenId.toString(),
      seller: i.seller,
      tokenUri
    }
    return item
   }))
   console.log('items',items)
  });
});

// Importing all the necessary packages
import {ethers} from 'ethers'
import { useEffect , useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'

import {
  marketplaceAddress
} from '../config' // To access market place address that will be populated to config.js when we deployed it to network(local host/ polygon)

// Importing smart contract
import NFTMarketplace from '../artifacts/contracts/NFTMarketPlace.sol/NFTMarketPlace.json' 
// const provider = new ethers.providers.JsonRpcProvider('https://rpc-mainnet.maticvigil.com')


export default function Home() {
  const [nfts, setnfts] = useState([])
  const [loadingState, setloadingState] = useState('not-loaded')
  useEffect(()=>{
    loadNFTs()
  },[]) 

    async function loadNFTs(){
    // const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545")
    // const provider = new ethers.providers.JsonRpcProvider()
    // const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.g.alchemy.com/v2/XwH83kPhl2fcLEX8J0yLq2b1aXHryKf5/getNFTs/`)
    const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/225a2a053f304e48b8be1bc21f1728c2") 
    //Providing RPC Node to smart contract
      

    const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi ,provider)
    const data = await contract.fetchMarketItems()
    
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await contract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(),'ether')
      // an object that will contain information about the items
      let item = {
      price,
      tokenId: i.tokenId.toNumber(),
      seller: i.seller,
      owner: i.owner,
      image: meta.data.image,
      name: meta.data.name,
      description: meta.data.description,
     }
     return item
    }))
    setnfts(items)
    setloadingState('loaded') 
    }

    async function buyNft(nft){
      const web3modal = new Web3Modal() 
      const connection = await web3modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(marketplaceAddress,NFTMarketplace.abi,signer)

      const price = ethers.utils.parseUnits(nft.price.toString(),'ether')
      const transaction = await contract.createMarketSale(nft.tokenId,{
      value:price
    })
    await transaction.wait()
    loadNFTs()
    }
  
  if(loadingState === 'loaded' && !nfts.length) return (
    <h1 className = "px-20 py-10 text-3xl">No items in marketplace</h1>
  )
  return (
    <div className="flex justify-center">
    <div className="px-4 bg-gradient-to-r from-orange-600 via-pink-500 to-purple-500" style={{ maxWidth: '1600px' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {
          nfts.map((nft, i) => (
            <div key={i} className="shadow rounded-2xl min-h-full bg-white overflow-hidden">
              <img className="max-h-64  min-w-full" src={nft.image} />
              <div className="p-4">
                <p style={{ height: '64px' }} className="text-2xl font-semibold">{nft.name}</p>
                <div style={{ height: '70px', overflow: 'hidden' }}>
                  <p className="text-gray-400">{nft.description}</p>
                </div>
              </div>
              <div className="p-4 min-h-full bg-black">
                <p className="text-2xl font-bold text-white">{nft.price} MATIC</p>
                <button className="mt-4 w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyNft(nft)}>Buy</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
  )
}

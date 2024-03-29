import {ethers} from 'ethers'
import { useEffect , useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'


import {
    marketplaceAddress
} from '../config'

import NFTMarketplace from '../artifacts/contracts/NFTMarketPlace.sol/NFTMarketPlace.json'

export default function CeatorDashboard() {
    const [nfts, setNfts] = useState([])
    const [loadingState, setLoadingState] = useState(true)
    useEffect(() => {
      loadNFTs()
    }, [])
    async function loadNFTs() {
      const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
      })
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
  
      const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
      const data = await contract.fetchItemsListed()
  
      const items = await Promise.all(data.map(async i => {
        const tokenUri = await contract.tokenURI(i.tokenId)
        const meta = await axios.get(tokenUri)
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
        }
        return item
      }))
  
      setNfts(items)
      setLoadingState(false) 
    }

    if (!loadingState && !nfts.length) 
    return (<h1 className="py-10 px-20 text-3xl">No NFTs listed</h1>)

    return (
      <div>
        <div className="p-4 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500">
          <h2 className="text-3xl font-bold py-2">Items Listed</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {
              nfts.map((nft, i) => (
                <div key={i} className="border shadow rounded-xl overflow-hidden">
                  <img className="max-h-64 min-w-full rounded" src={nft.image} />
                  <div className="p-4 min-h-full bg-black">
                    <p className="text-2xl font-bold text-white">Price - {nft.price} MATIC</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
import {ethers} from 'ethers'
import {useState } from 'react'
import Web3Modal from 'web3modal'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import {
    marketplaceAddress
} from '../config'

import NFTMarketplace from '../artifacts/contracts/NFTMarketPlace.sol/NFTMarketPlace.json'

const projectId = '2DGEwrRDQgRw3kyeW3yZtse6Uxw';   // <---------- your Infura Project ID

const projectSecret = '378ebbb35c1a15af3578e3cef1dc7f80';  // <---------- your Infura Secret
// (for security concerns, consider saving these values in .env files)

const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsHttpClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

// const client = ipfsHttpClient('https://ipfs.infura.io:5001')



export default function CreateItem() {
    const [fileUrl,setFileUrl] = useState(null)
    const [formInput,UpdateFormInput] = useState({price :'',name: '',description : ''})
    const router = useRouter()

    async function onChange(e){
        const file = e.target.files[0]
        try{
            const added  = await client.add(
            file,
            {    
            progress: (prog) => console.log(`received :${prog}`)
        }
        )
        console.log(added);
       const url = `https://soc.infura-ipfs.io/ipfs/${added.path}`
    
        setFileUrl(url)
    } catch (error){
        console.log('Error uploading file ',error)
    }
    }
   async function uploadToIPFS() {
    const{name, description, price} = formInput
    if(!name || !description || !price || !fileUrl) return 
    const data = JSON.stringify({
        name,description,image : fileUrl
    })

try {
    const added = await client.add(data)
    const url = `https://soc.infura-ipfs.io/ipfs/${added.path}`
    /* after metadata is uploaded to IPFS, return the URL to use it in the transaction */
    return url
  } catch (error) {
    console.log('Error uploading file: ', error)
  }  
   }

async function listNFTForSale() {
  const url = await uploadToIPFS()
	const web3Modal = new Web3Modal()
  // const web3Modal = window.Web3Modal.default()
  const connection = await web3Modal.connect()
  console.log(connection);
  const provider = new ethers.providers.Web3Provider(connection)
  // const provider = new ethers.providers.Web3Provider(web3.currentProvider)
  // const provider = new ethers.providers.Web3Provider(connection)

  const signer = provider.getSigner()

    /* create the NFT */
    const price = ethers.utils.parseUnits(formInput.price, 'ether')
    let contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()
    let transaction = await contract.createToken(url, price, { value: listingPrice })
    await transaction.wait()

    router.push('/')
    }

return (
    <div className="flex justify-center" >
     <div className="w-1/2 flex flex-col pb-12">
    
        <input 
        placeholder="Asset Name" 
        className="mt-2 border rounded p-4"
        onChange={e=>UpdateFormInput({...formInput,name: e.target.value})}/>
    
      <textarea
      placeholder="Asset Description"
      className="mt-2 border rounded p-4"
      onChange={e => UpdateFormInput({...formInput ,description : e.target.value})}
      />
    
        <input placeholder="Asset Price in Eth"
        className="mt-2 border rounded p-4"
        onChange={e=>UpdateFormInput({...formInput,price: e.target.value})}/>
        <input
        type = "file"
        name = "Asset"
        className="my-4"
        onChange={onChange}
        />
        {
            fileUrl && (
                <img className="rounded mt-4" width="350" src={fileUrl} />
            )
        }
        <button onClick={listNFTForSale} className="font-bold mt-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white rounded p-4 shadow-lg">
            Create NFT
        </button>
     </div>
    </div>
)
    }
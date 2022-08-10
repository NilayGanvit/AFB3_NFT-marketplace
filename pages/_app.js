import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {

  return (
     <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
    <nav className="border-b p-6">
    <p className="text-4xl text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold">NFT BAZAAR</p>
    <div className="flex mt-4">
    <Link href="/">
      <a className="mr-6 text-xl font-bold text-white">Home
      </a>
    </Link>
    <Link href="/create-nft">
      <a className="mr-6 text-xl font-bold text-white">Sell Assets
      </a>
    </Link>
    <Link href="/my-nft">
      <a className="mr-6 text-xl font-bold text-white">My Assets
      </a>
    </Link>
    <Link href="/dashboard">
      <a className="mr-6 text-xl font-bold text-white">Dashboard
      </a>
    </Link>
    </div>
    </nav>
     <Component {...pageProps} />
  </div>
  )
}

export default MyApp

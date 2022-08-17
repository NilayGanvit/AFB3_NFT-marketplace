import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {

  return (
     <div>
    <nav className="bg-blue-900  border-b p-6">
    <p className="text-4xl text-white font-bold">NFT BAZAAR</p>
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

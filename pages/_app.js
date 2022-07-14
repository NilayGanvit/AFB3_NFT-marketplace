import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
     <div>
    <nav className="border-b p-6">
    <p className="text-4xl font-bold">NFT MARKETPLACE</p>
    <div className="flex mt-4">
    <Link href="/">
      <a className="mr-6 text-pink-500">Home
      </a>
    </Link>
    <Link href="/create item">
      <a className="mr-6 text-pink-500">Sell Assets
      </a>
    </Link>
    <Link href="/create item">
      <a className="mr-6 text-pink-500">My Assets
      </a>
    </Link>
    <Link href="/create dashboard">
      <a className="mr-6 text-pink-500">Dashboard
      </a>
    </Link>
    </div>
    </nav>
     <Component {...pageProps} />
  </div>
  )
}

export default MyApp

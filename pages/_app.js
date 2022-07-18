import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  let background = {
    backgroundColor : "black",
  }
  return (
     <div style={background}>
    <nav className="border-b p-6">
    <p className="text-4xl text-gray-200 font-bold">NFT BAZAAR</p>
    <div className="flex mt-4">
    <Link href="/">
      <a className="mr-6 text-white">Home
      </a>
    </Link>
    <Link href="/create item">
      <a className="mr-6 text-white">Sell Assets
      </a>
    </Link>
    <Link href="/create item">
      <a className="mr-6 text-white">My Assets
      </a>
    </Link>
    <Link href="/create dashboard">
      <a className="mr-6 text-white">Dashboard
      </a>
    </Link>
    </div>
    </nav>
     <Component {...pageProps} />
  </div>
  )
}

export default MyApp

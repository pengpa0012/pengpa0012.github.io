import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <script src="https://cdn.tailwindcss.com"></script>
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
  )
}

export default MyApp

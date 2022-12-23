import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Godfrey Patricio</title>
        <meta name="description" content="My porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        
      </main>
    </div>
  )
}

export default Home

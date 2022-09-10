import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Component } from 'react'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Godfrey Patricio</title>
        <meta name="description" content="My porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container min-h-screen flex justify-center items-center text-black-custom">
        <div className="p-6 text-center">
          <h1 className="text-6xl font-extralight">HI! I'M <br /> GODFREY PATRICIO</h1>
          <p className="text-xl mt-4 mb-6 font-semibold">FRONT END DEVELOPER</p>
          <button className="rounded-md py-4 px-8 font-medium btn-primary" onClick={() => router.push("/works")}>See my works</button>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-2/4 p-6 text-center">
          <p className="text-2xl mb-2">
            Reach me on
          </p>
          <ul className="flex justify-center">
            <li className="mx-2">Logo</li>
            <li className="mx-2">Logo</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Home

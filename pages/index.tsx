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
          <h1 className="text-4xl sm:text-6xl font-extralight">HI! I&apos;M <br /> GODFREY PATRICIO</h1>
          <p className="text-md sm:text-xl mt-2 sm:mt-4 mb-3 sm:mb-6 font-bold text-primary">FRONT END DEVELOPER</p>
          <button className="rounded-md py-2 sm:py-4 px-6 sm:px-8 font-medium btn-primary" onClick={() => router.push("/works")}>See my works</button>
        </div>
        <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-2/4 p-6 text-center">
          <p className="text-md mb-2">
            REACH ME ON
          </p>
          <ul className="flex justify-center">
            <li className="mx-2">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <rect width="40" height="40" rx="20" fill="#8D32E3"/>
                <path d="M28 11H12C9.8 11 8 12.8 8 15V25C8 27.2 9.8 29 12 29H28C30.2 29 32 27.2 32 25V15C32 12.8 30.2 11 28 11ZM29.6 16.8L21.7 22.1C21.2 22.4 20.6 22.6 20 22.6C19.4 22.6 18.8 22.4 18.3 22.1L10.4 16.8C10 16.5 9.9 15.9 10.2 15.4C10.5 15 11.1 14.9 11.6 15.2L19.5 20.5C19.8 20.7 20.3 20.7 20.6 20.5L28.5 15.2C29 14.9 29.6 15 29.9 15.5C30.1 15.9 30 16.5 29.6 16.8Z" fill="white"/>
              </svg>
            </li>
            <li className="mx-2">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <rect width="40" height="40" rx="20" fill="#8D32E3"/>
                <path d="M14.6667 28.3333H10.6667V15H14.6667V28.3333ZM29.3333 28.3333H25.3333V21.2107C25.3333 19.3547 24.672 18.4307 23.3613 18.4307C22.3227 18.4307 21.664 18.948 21.3333 19.984C21.3333 21.6667 21.3333 28.3333 21.3333 28.3333H17.3333C17.3333 28.3333 17.3867 16.3333 17.3333 15H20.4907L20.7347 17.6667H20.8173C21.6373 16.3333 22.948 15.4293 24.7453 15.4293C26.112 15.4293 27.2173 15.8093 28.0613 16.764C28.9107 17.72 29.3333 19.0027 29.3333 20.804V28.3333Z" fill="white"/>
                <path d="M12.6667 13.6667C13.8081 13.6667 14.7333 12.7712 14.7333 11.6667C14.7333 10.5621 13.8081 9.66666 12.6667 9.66666C11.5253 9.66666 10.6 10.5621 10.6 11.6667C10.6 12.7712 11.5253 13.6667 12.6667 13.6667Z" fill="white"/>
              </svg>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Home

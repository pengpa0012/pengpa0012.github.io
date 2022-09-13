import { useRouter } from 'next/router'
import React from 'react'

function Navbar() {
  const router = useRouter()
  return (
    <>
      <div className="nav-bar text-black-custom z-10">
        <div className="container flex justify-between items-center px-4 py-6">
          <h1 className="text-2xl nav-link" onClick={() => router.push("/")}>Logo</h1>
          <ul className="flex">
            <li className="mr-8 nav-link" onClick={() => router.push("/works")}>WORKS</li>
            <li className="nav-link" onClick={() => router.push("/about")}>ABOUT</li>
          </ul>
        </div>
      </div>
      <div className="nav-bar-mobile fixed md:hidden bottom-0 inset-x-0 bg-white py-6 flex justify-center z-50">
        <h1 className="text-2xl" onClick={() => router.push("/works")}>WOKS</h1>
        <h1 className="text-2xl mx-4" onClick={() => router.push("/")}>HOME</h1>
        <h1 className="text-2xl" onClick={() => router.push("/about")}>ABOUT</h1>
      </div>
    </>
  )
}

export default Navbar
import { useRouter } from 'next/router'
import React from 'react'

function Navbar() {
  const router = useRouter()
  return (
    <div className="nav-bar text-black-custom z-10">
      <div className="container flex justify-between items-center px-4 py-6">
        <h1 className="text-2xl nav-link" onClick={() => router.push("/")}>Logo</h1>
        <ul className="flex">
          <li className="mr-8 nav-link" onClick={() => router.push("/works")}>WORKS</li>
          <li className="nav-link" onClick={() => router.push("/about")}>ABOUT</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
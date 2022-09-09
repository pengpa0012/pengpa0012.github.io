import { useRouter } from 'next/router'
import React from 'react'

function Navbar() {
  const router = useRouter()
  return (
    <div className="fixed inset-x-0 container flex justify-between items-center px-4 py-6 nav-bar text-black">
      <h1 className="text-2xl nav-link" onClick={() => router.push("/")}>Logo</h1>
      <ul className="flex">
        <li className="mr-8 nav-link" onClick={() => router.push("/works")}>WORKS</li>
        <li className="nav-link" onClick={() => router.push("/about")}>ABOUT</li>
      </ul>
    </div>
  )
}

export default Navbar
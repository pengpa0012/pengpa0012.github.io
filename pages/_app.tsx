import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Loader from '../src/components/Loader'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
    
    const cursor = document.querySelector<HTMLElement>(".cursor")!
    const navLinks = document.querySelectorAll(".nav-link, .cursor-hover")
    document.addEventListener("mousemove", (e) => {
      let mousex = e.clientX
      let mousey = e.clientY

      cursor.style.top = `${mousey}px`
      cursor.style.left = `${mousex}px`
    })

    navLinks.forEach(link => {
      link.addEventListener("mouseenter", () => {
        cursor.classList.add("hover")
      })

      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover")
      })
    })
  }, [])

  
  return (
    <>
    <Head>
      <script src="https://cdn.tailwindcss.com" defer></script>
    </Head>
    <Navbar />
    { isLoading ? <Loader /> : <Component {...pageProps} /> }
    <Footer />
  </>
  )
}

export default MyApp

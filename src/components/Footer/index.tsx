import React, { useEffect } from 'react'

function Footer() {
  useEffect(() => {
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
      <div className="cursor"></div>
      <svg viewBox="0 0 768 484" className="vec-1">
        <path d="M301.5 66C236.346 -24.6664 49.5 -1.49996 -32 18.5C-49.8333 175.167 -91.3 499.4 -90.5 511C-89.5 525.5 17 534.5 33 542C49 549.5 251.5 542 267 542C282.5 542 734.5 545.5 754 520C773.5 494.5 784.5 468.5 687 378.5C589.5 288.5 569 290 418.5 263C268 236 384.5 181.5 301.5 66Z" fill="#8D32E3"/>
      </svg>
      <svg viewBox="0 0 768 484" className="vec-2">
        <path d="M624.5 63C689.654 -27.6664 852 0.999987 933.5 21C951.333 177.667 904.392 493.173 903.592 504.773C902.592 519.273 796.092 528.273 780.092 535.773C764.092 543.273 561.592 535.773 546.092 535.773C530.592 535.773 24.5 571.5 5 546C-14.5 520.5 28.5928 462.273 126.093 372.273C223.593 282.273 231 323 381.5 296C532 269 541.5 178.5 624.5 63Z" fill="#8D32E3"/>
      </svg>
    </>
  )
}

export default Footer
import React, { ClassicComponentClass, useEffect } from 'react'
import WorkCard from '../src/components/WorkCard'

const Works = () => {

  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".cursor")!
    const workCard = document.querySelectorAll(".work-card")
    hover(workCard, cursor, "card")
  }, [])

  const hover = (arrayClass: NodeListOf<Element>, targetClass: Element, type: string) => {
    arrayClass.forEach(card => {
      card.addEventListener("mouseenter", () => {
        targetClass.classList[type == "card" ? "add" : "remove"]("change-blend")
      })
      card.addEventListener("mouseleave", () => {
        targetClass.classList[type == "card" ? "remove" : "add"]("change-blend")
      })
    })
  }
  
  return (
    <div className="container py-40 text-black-custom">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">LIST OF MY WORKS</h1>
        <div className="flex">
          <p className="mr-6">View by</p>
          <ul className="flex items-center list-icons">
            <li className="mr-4">
              <svg viewBox="0 0 32 32" height="32" width="32" style={{ fill: "none" }}><g data-name="Layer 2" id="Layer_2"><path fill="#8d32e3" d="M26,26H6a3,3,0,0,1-3-3V9A3,3,0,0,1,6,6H26a3,3,0,0,1,3,3V23A3,3,0,0,1,26,26ZM6,8A1,1,0,0,0,5,9V23a1,1,0,0,0,1,1H26a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1Z"/><path fill="#8d32e3" d="M14,22H8a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"/><path fill="#8d32e3" d="M28,13H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"/></g><g id="frame"><rect className="cls-1" height="32" width="32"/></g></svg>
            </li>
            <li>
              <svg height="48" viewBox="0 0 48 48" width="48" fill="#8d32e3"><path d="M6 26h4v-4h-4v4zm0 8h4v-4h-4v4zm0-16h4v-4h-4v4zm8 8h28v-4h-28v4zm0 8h28v-4h-28v4zm0-20v4h28v-4h-28z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap justify-center my-12 gap-4 sm:gap-24 px-4">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  )
}

export default Works
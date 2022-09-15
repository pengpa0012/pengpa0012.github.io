import React, { useState } from 'react'

interface Card {
  card: boolean
  details: {
    image: string
    title: string
    description: string
    tags: string[]
  }
}

function WorkCard({details, card}: Card) {
  const [toggle, setToggle] = useState(false)

  const workContent = (card: boolean) => (
    <div className="p-6 flex flex-col justify-between">
      <div>
        {card ? <h1 className="text-xl">{details.title}</h1> : undefined}
        <div className={`flex ${card ? "flex-col" : "flex-col-reverse"}`}>
          <p className="text-sm sm:text-md leading-snug">{details.description}</p>
          <div className="mt-1 flex">
            <span className="text-sm mr-2">TAGS:</span>
            <ul className="flex text-sm">
              {
                details.tags.map((tag, i) => (
                  <li className="mx-1" key={`tag-${i}`}>{tag}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <button className="py-1 sm:py-2 px-4 sm:px-6 rounded-md mr-2 btn-primary">DEMO</button>
        <button className="py-1 sm:py-2 px-4 sm:px-6 rounded-md btn-primary-secondary">VIEW CODE</button>
      </div>
    </div>
  )

  return (
    <>
      {
        card ? 
        <div className="shadow-md bg-white max-w-2xl text-black-custom rounded-lg work-card flex flex-col sm:flex-row overflow-hidden">
          <img src={details.image} className="max-w-lg select-none" draggable="false" style={{ maxHeight: 368 }} />
          {workContent(true)}
        </div>
      : 
      <div className="shadow-md bg-white w-full text-black-custom rounded-lg work-card overflow-hidden">
        <div className={`flex items-center justify-between p-6 transition duration-200 ${toggle ? "bg-primary text-white" : " text-black-custom"}`}>
          <h1 className="text-xl">{details.title}</h1>
          <svg width="29" height="26" viewBox="0 0 29 26" fill="none" onClick={() => setToggle(!toggle)} className={`transform transition duration-200 ${toggle ? "rotate-180" : "rotate-0"}`}>
            <path d="M22.4637 8.125L23.5625 9.17617L14.5 17.875L5.4375 9.17617L6.53066 8.125L14.5 15.7676L22.4637 8.125Z" fill={toggle ?"#fff" : "#8D32E3"}/>
          </svg>
        </div>
        <div className={`${toggle ? "block" : "hidden"}`}>
          <img src="https://via.placeholder.com/1080x400" className="w-full object-cover select-none" draggable="false" style={{ minHeight: 368 }} />
          {workContent(false)}
        </div>
      </div>
      }
    </>
  )
}

export default WorkCard
import React from 'react'

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
  return (
    <>
      {
        card ? 
        <div className="shadow-md bg-white max-w-2xl text-black-custom rounded-lg work-card flex flex-col sm:flex-row overflow-hidden">
          <img src={details.image} className="max-w-lg" draggable="false" />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-xl">{details.title}</h1>
              <p className="text-md leading-snug">{details.description}</p>
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
            <div className="flex mt-4">
              <button className="py-2 px-6 rounded-md mr-2 btn-primary">DEMO</button>
              <button className="py-2 px-6 rounded-md btn-primary-secondary">CODE</button>
            </div>
          </div>
        </div>
      : 
      <div className="shadow-md bg-white w-full text-black-custom rounded-lg work-card overflow-hidden">
        <div className="flex items-center justify-between p-6">
          <h1 className="text-xl">{details.title}</h1>
          <h1>ICON</h1>
        </div>
      </div>
      }
    </>
  )
}

export default WorkCard
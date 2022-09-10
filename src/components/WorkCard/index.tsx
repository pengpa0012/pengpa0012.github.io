import React from 'react'

function WorkCard() {
  return (
    <div className="shadow-md bg-white max-w-2xl text-black-custom rounded-lg work-card flex flex-col sm:flex-row overflow-hidden">
      <img src="https://via.placeholder.com/268" className="max-w-lg" draggable="false" />
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl">CARD</h1>
          <p className="text-md leading-snug">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis id nobis provident beatae. Officia quidem accusantium amet consequatur praesentium repellat.</p>
          <div className="mt-1 flex">
            <span className="text-sm mr-2">TAGS:</span>
            <ul className="flex text-sm">
              <li className="mx-1">TAG</li>
              <li className="mx-1">TAG</li>
              <li className="mx-1">TAG</li>
            </ul>
          </div>
        </div>
        <div className="flex mt-4">
          <button className="py-2 px-6 rounded-md mr-2 btn-primary">DEMO</button>
          <button className="py-2 px-6 rounded-md btn-primary-secondary">CODE</button>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
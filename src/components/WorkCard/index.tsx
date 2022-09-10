import React from 'react'

function Navbar() {
  return (
    <div className="shadow-md bg-white max-w-xl text-black-custom rounded-lg work-card flex flex-col sm:flex-row overflow-hidden">
      <img src="https://via.placeholder.com/228" className="w-full" draggable="false" />
      <div className="p-6">
        <h1 className="text-3xl">CARD</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis id nobis provident beatae. Officia quidem accusantium amet consequatur praesentium repellat.</p>
        <button>DEMO</button>
      </div>
    </div>
  )
}

export default Navbar
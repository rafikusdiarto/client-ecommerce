import React from 'react'

export default function Header() {
  return (
    <div>
      <section className="text-gray-600 body-font mt-20">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
            </h1>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://www.yangcanggih.com/wp-content/uploads/2022/09/ROG-Swift-OLED-gaming-monitor.jpg"/>
          </div>
        </div>
        <div class="flex flex-col text-center w-full">
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ALL PRODUCT</h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">New Release and Top Category</h1>
        </div>
      </section>
    </div>
  )
}

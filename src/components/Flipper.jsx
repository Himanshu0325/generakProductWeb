import React from 'react'
import { useState } from 'react'
import earringPage from './earringPage'

function Flipper() {
  const [isHovered, setIsHovered] = useState(false)
  return (
      
      <div
        className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer flex 
                   xsm:h-[15rem] xsm:w-[29rem] md:h-[17rem] md:w-[35rem] lg:h-[21rem] lg:w-[49rem] border-2 rounded-lg " 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="img h-full w-[49%]">
          <img src="/earring1.png" alt="" className='h-full w-full'/>
        </div>
        <div className="info h-full w-[49%] text-center flex items-center">
          <p className=''>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas at excepturi quidem enim unde natus earum nam, sequi mollitia. Maxime animi inventore quasi dolorem ullam cumque doloribus voluptates beatae sed.
          </p>
        </div>
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md transition-opacity duration-300 flex items-center justify-center ${
            isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className="text-white text-center text-lg font-semibold px-4">
            Clic me for more collection
          </p>
        </div>
      </div>
  )
}

export default Flipper
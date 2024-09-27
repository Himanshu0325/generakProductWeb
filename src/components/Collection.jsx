import React from 'react'
import Flipper from './Flipper'


function Collection(x="our Collection") {

  const data ={
    url:"'/earring1.png'",
    dis:'discription about the product Lorem ipsum dolor sit amet consectetur adipisicing elit. '
  }

  return (
    <div className="xsm:w-[620px]  sm:w-full  overflow-hidden bg-neutral-800">
        <div className=' w-[80%] m-auto'>
          <nav className='h-[12%] w-[100%] flex items-center justify-center p-1 '>
            <h2 className='text-4xl'>Our Collection</h2>
          </nav>
          <section className=' w-full'>
            <div className="flex flex-col items-center  w-full gap-4 p-2">
              <Flipper />
              <Flipper />
              <Flipper />
            </div>
          </section>
        </div>
    </div>
  )
}

export default Collection
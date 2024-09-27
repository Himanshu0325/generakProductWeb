import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div id='back' className="back xsm:w-[620px] xsm:h-[full] sm:w-full h-screen bg-black  overflow-x-hidden" onClick={function(){
      
     }}>
      <div className="top h-full w-[80%] m-auto ">
        <nav className='w-[100%] h-[10%] m-auto flex justify-between items-center  bg-black'>
          <div className="">
            <h1 className='text-white text-2xl'>SingleStop</h1>
          </div>
          <div className="">
            <h3 className='text-white'>About</h3>
          </div>
        </nav>
        <div className="intro w-full h-[90%] flex  xsm:flex-col xl:flex-row ">
          <div className='bg-hero-m2 bg-no-repeat bg-contain bg-center  bg-black xsm:h-[50%] xsm:w-full md:w-[50%]:h-[50%] xl:h-full'>

          </div>
          <section className='w-[100%] h-[25%] md:w-[50%]:h-[50%]  m-auto bg-black'>
            <div className="h-[100%] flex justify-center flex-col gap-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="text-center"
              >
                <h1 className="text-7xl font-bold text-white mb-4">
                  SingleStop
                </h1>
              </motion.div>
              <br />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeOut",delay:2.5 }}
                className="text-center"
              >
                <p className="text-xl text-white">
                  Your Single destination For shoping
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Hero
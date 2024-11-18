"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const Homepage = () => {
  return (
    <motion.div 
      className="h-full" 
      initial={{y:"-200vh"}} 
      animate={{y:"0%"}} 
      transition={{duration: 1}}
      >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        
        {/* IMG_CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
          <Image src="/hero.png" alt="" fill className="object-contain"/>
        </div>
        {/* TXT_CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences, that Engage and Delight</h1>
          <p className="md:text-xl">
            Welcome to my digital canvas, where inovation and creativity converge.
            I can help you bring your vision to life. Let's work together to create something
              amazing!
          </p>
          <div className="w-full flex gap-4">
            <button className="p-3 rounded-lg ring-1 ring-black bg-black text-white
            hover:bg-transparent hover:text-black">
              View My Work</button>
            <button className="px-5 p-3 rounded-lg ring-1 font-semibold ring-black
            hover:bg-black hover:text-white hover:font-semibold">
           
              Contact Me</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;

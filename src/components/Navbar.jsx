import { motion } from 'framer-motion'
import React from 'react'

const Navbar = () => {
  return (
    <motion.nav 
    initial={{
      y: -10,
      opacity: 0,
    }}
    animate={{
      y: 0,
      opacity: 1,
    }}
    transition={{
      duration: 1,
      ease: "easeInOut",
    }}
    className='navbar flex w-full   fixed  items-center justify-between z-[1000]  px-10 py-4'>
      <div className='logo '>
        <img src="https://rhythm-influence.files.svdcdn.com/staging/nav_logo.svg?dm=1728475195" alt="" />
        <button>Menu</button>
      </div>
      <div className='navlinks flex  items-center gap-10'>
      <div className='flex our-work relative  flex-col items-center justify-center   '>
      <a href="#" className='a1 
      absolute 
      '>Our Work</a>
      <a href="#" className='a2'>Our Work</a>
      </div>
<div className='flex flex-col gap-2  company overflow-hidden relative'  >
      <a href="#" className='a1 absolute '>Company</a>
      <a href="#" className='a2'>Company</a>
</div>
<div className='flex flex-col gap-2 services overflow-hidden relative'>
      <a href="#" className='a1'>Services</a>
      <a href="#" className='a2'>Services</a>
      </div>
      <div className='button flex items-center gap-2 '>
      <div className="circle px-2 py-2 rounded-full bg-pink-500"></div>
        <button className=' btnav'>Get in touch</button>
      </div>
</div>
    </motion.nav>

  )
}

export default Navbar 
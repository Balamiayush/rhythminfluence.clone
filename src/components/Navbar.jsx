import { motion } from 'framer-motion'
import React from 'react'

const Navbar = () => {
  return (

    <nav className='navbar flex justify-between items-center px-10 py-4'>
      <div className='logo'>
        <img src="https://rhythm-influence.files.svdcdn.com/staging/nav_logo.svg?dm=1728475195" alt="" />
      </div>
      <div className='navlinks flex  items-center gap-10'>
      <div className='flex our-work relative  flex-col items-center justify-center   h-5 '>
      <a href="#" className='a1 
      absolute 
      '>Our Work</a>
      <a href="#" className='a2'>Our Work</a>
      </div>
<div className='flex flex-col gap-2 company overflow-hidden relative'  >
      <a href="#" className='a1 absolute'>Company</a>
      <a href="#" className='a2'>Company</a>
</div>
<div className='flex flex-col gap-2 services overflow-hidden relative'>
      <a href="#" className='a1'>Services</a>
      <a href="#" className='a2'>Services</a>
</div>
      </div>
      <div className='button flex items-center gap-2'>
      <div className="circle px-2 py-2 rounded-full bg-pink-500"></div>
        <button>Get in touch</button>
      </div>
    </nav>

  )
}

export default Navbar
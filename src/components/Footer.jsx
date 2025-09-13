import React from 'react'
import logo from '../assets/logo.jpg'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start text-center md:text-left'>
        
        {/* Logo & tagline */}
        <div className='w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-center md:items-start'>
          <img className='h-12' src={logo} alt="logo" />
          <p className='text-gray-400 mt-4'>Compassionate Support Awaits You</p>
        </div>
        
        {/* Links */}
        <div className='w-full md:w-1/4 mb-8 md:mb-0 flex flex-col items-center'>
          <h3 className='text-white text-lg font-bold mb-2'>Serenity Harbor Recovery Center</h3>
          <ul className='flex flex-col gap-2 text-gray-400 items-center'>
            <a href="#Header" className='hover:text-white'>Home</a>
            <a href="#About" className='hover:text-white'>About</a>
            <a href="#Contact" className='hover:text-white'>Contact</a>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        © {new Date().getFullYear()} Serenity Harbor. All rights reserved.
      </div>
    </div>
  )
}

export default Footer

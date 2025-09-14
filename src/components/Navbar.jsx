import React, { useState } from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Reusable link classes with dynamic underline
  const linkClasses =
    "relative cursor-pointer text-purple-600 transition-colors duration-300 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-current " +
    "after:transition-all after:duration-300 hover:after:w-full hover:text-green-600"

  return (
    <div className="fixed top-0 left-0 w-full z-20 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        
        {/* Logo + Company Name */}
        <div className="flex items-center gap-2 md:gap-3">
          <img src={logo} alt="Logo" className="h-10 w-auto md:h-12" />
          <span className="text-lg md:text-xl lg:text-2xl font-bold text-green-600">
            Serenity Harbor Recovery Center
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-4 lg:gap-6 font-medium">
          <li><a href="#Header" className={linkClasses}>Home</a></li>
          <li><a href="#About" className={linkClasses}>About</a></li>
          <li><a href="#Contact" className={linkClasses}>Contact Us</a></li>
        </ul>

        {/* Mobile Menu Button (hamburger) */}
        <div className="md:hidden">
          <button 
            className="text-2xl font-bold text-green-600"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Backdrop (only when open) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 z-30"
          onClick={() => setIsOpen(false)} // close when backdrop clicked
        />
      )}

      {/* Mobile Fullscreen Menu */}
      <div 
        className={`fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white flex flex-col items-center justify-center transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button 
          className="absolute top-5 right-6 text-3xl font-bold text-green-600"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        {/* Nav Links (Mobile) */}
        <ul className="flex flex-col gap-6 font-medium text-2xl">
          <li>
            <a 
              href="#Header" 
              className={linkClasses} 
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#About" 
              className={linkClasses} 
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#Contact" 
              className={linkClasses} 
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

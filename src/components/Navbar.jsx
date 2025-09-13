import React, { useState } from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        
        {/* Logo + Company Name */}
        <div className="flex items-center gap-2 md:gap-3">
          <img src={logo} alt="Logo" className="h-10 w-auto md:h-12" />
          <span className="text-lg md:text-xl lg:text-2xl font-bold text-green-400">
            Serenity Harbor
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-4 lg:gap-6 font-medium">
          <li>
            <a href="#Header" className="cursor-pointer text-purple-600 hover:text-green-400">Home</a>
          </li>
          <li>
            <a href="#About" className="cursor-pointer text-purple-600 hover:text-green-400">About</a>
          </li>
          <li>
            <a href="#Contact" className="cursor-pointer text-purple-600 hover:text-green-400">Contact Us</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="text-2xl font-bold text-green-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3">
          <ul className="flex flex-col gap-3 font-medium">
            <li>
              <a href="#Header" className="cursor-pointer text-purple-600 hover:text-green-400" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#About" className="cursor-pointer text-purple-600 hover:text-green-400" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li>
              <a href="#Contact" className="cursor-pointer text-purple-600 hover:text-green-400" onClick={() => setIsOpen(false)}>Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar

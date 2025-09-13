import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
        {/* Company / Brand */}
        <p className="text-lg font-semibold mb-2 md:mb-0 text-green-700">
          Serenity Harbor Recovery Center
        </p>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Serenity Harbor. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'

const Header = () => {
  return (
    <div
      className="min-h-screen mb-16 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img2.jpg')" }}
      id="Header"
    >
      <div className="text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2
          className="text-5xl sm:6xl md:text-[82px] inline-block
            max-w-3xl font-semibold pt-20"
        >
          Your Journey to a Brighter Tomorrow Starts Here.
        </h2>

        {/* Buttons */}
        <div className="space-x-7 mt-16">
          <a
            href="#Contact"
            className="bg-purple-500 px-8 py-3 rounded transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-purple-600 shadow-md"
          >
            Contact Us
          </a>
          <a
            href="#About"
            className="bg-green-400 px-8 py-3 rounded transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-green-500 shadow-md"
          >
            About
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header

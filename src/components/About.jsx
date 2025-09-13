import React from 'react'
import headerr_img from '../assets/headerr_img.jpg'

const About = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center container 
      mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" 
      id="About"
    >
      {/* Heading */}
      <h1 className="text-4xl sm:text-4xl font-bold mb-2 text-green-600 mt-16 text-center">
        Find Your Path to Healing.
      </h1>

      {/* Subheading */}
      <p className="sm:text-2xl text-amber-500 mt-4 text-center font-bold">
        Compassionate Support Awaits You
      </p>

      {/* Wrapper for image + text */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch md:gap-20 mt-16 w-full">
        
        {/* Image column with reduced height */}
        <div className="flex-1 flex justify-center">
          <img 
            src={headerr_img} 
            alt="Recovery center" 
            className="w-full max-w-lg max-h-80 object-cover rounded-lg"
          />
        </div>
        
        {/* Text column with equal height */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start px-4">
          <div className="flex flex-col gap-4 w-full max-w-3xl">
            
            {/* First line */}
            <p className="underline underline-offset-4 decoration-1 font-semibold text-purple-500 text-2xl text-center md:text-left">
              At Serenity Harbor Recovery Center,
            </p>
            
            {/* Body text */}
            <p className="text-lg sm:text-xl text-center md:text-left leading-relaxed">
              We offer hope and recovery through personalized treatment for drug and alcohol
              addiction. <br /> Our dedicated team focuses on mind and soul healing, guiding you 
              toward a brighter, healthier future.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About

import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container 
    mx-auto pd-14 md:px-20 lg:px32 w-full overflow-hidden' id='About'>
       <h1 className='text-4xl sm:text-4xl font-bold mb-2 text-green-600 mt-18 text-center'>Find Your Path to Healing.</h1>
       
       <p className='underline underline-offset-4 decoration-1 under font-semibold text-purple-500 text-2xl mt-10'>At Serenity Harbor Recovery center,</p>
        <p className='text-2xl max-w-80 text-center mb-8'> we offer hope and recovery through personalized treatment for drug and alcohol
        addiction. <br /> Our dedicated team focuses on mind and soul healing guiding you toward a brighter healthier
        future.
       </p>
       <h3 className='text-2xl sm:text-4xl text-amber-500 mb-20 text-center'>Compassionate Support Awaits You</h3>
    </div>
  )
}

export default About//
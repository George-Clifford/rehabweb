import React from 'react'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
    style={{backgroundImage: "url('/header_img2.jpg')"}} id='Header'>
        <div className=' text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:6xl md:text-[82px] inline-block
            max-w-3xl font-semibold pt-20'>Your Journey to a Brighter Tomorrow Starts Here. </h2>
            <div>
                <a href="">Contact Us</a>
                <a href="">About</a>
            </div>
        </div>

    </div>
  )
}

export default Header
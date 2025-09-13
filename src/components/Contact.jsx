// import React from 'react'

// const Contact = () => {
//   return (
//     <div className='container mx-auto py-4 pt-20 px-6 md:px-20
//     lg:px-32 my-20 w-full overflow-hidden' id='Contact'>
//         <h1 className='text-3xl font-bold text-green-600 sm:text-4xl mb-8 text-center '>Contact   <span className='text-purple-400 underline underline-offset-4 '>Us</span></h1>
//         <p className='text-center mb-8 max-w-80 mx-auto text-2xl'>We are located In <span className='font-bold text-green-600'>Migori Town</span> along <span className='font-bold text-purple-500'>Ombo Junction</span>.</p>
//         <p className='text-center mb-8 max-w-80 mx-auto text-2xl'>You can also reach out to us via:</p>
//         <p className='text-center mb-8 max-w-80 mx-auto text-2xl'>Phone: <span className='text-green-600 font-bold'>+254708354496</span></p>
//         <p className='text-center mb-8 max-w-80 mx-auto text-2xl'>Email: <span className='text-green-600 font-bold'>recoveryatshrc@gmail.com</span></p>
//     </div>

//   )
// }

// export default Contact

import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div 
      className='container mx-auto py-4 pt-20 px-6 md:px-20
      lg:px-32 my-20 w-full overflow-hidden' 
      id='Contact'
    >
      <h1 className='text-3xl font-bold text-green-600 sm:text-4xl mb-8 text-center'>
        Contact <span className='text-purple-400 underline underline-offset-4'>Us</span>
      </h1>

      <p className='text-center mb-8 max-w-80 mx-auto text-2xl'>
        We are located In <span className='font-bold text-green-600'>Migori Town</span> 
        along <span className='font-bold text-purple-500'>Ombo Junction</span>.
      </p>

      <p className='text-center mb-8 max-w-80 mx-auto text-2xl'>
        You can also reach out to us via:
      </p>

      {/* Phone */}
      <p className='flex items-center justify-center gap-3 text-2xl mb-6'>
        <FaPhoneAlt className='text-green-600' />
        <span className='text-green-600 font-bold'>+254708354496</span>
      </p>

      {/* Email */}
      <p className='flex items-center justify-center gap-3 text-2xl'>
        <MdEmail className='text-green-600 text-3xl' />
        <span className='text-green-600 font-bold'>recoveryatshrc@gmail.com</span>
      </p>
    </div>
  )
}

export default Contact

import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { toast } from 'react-toastify';

const Contact = () => {
 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d708a655-96c6-4870-85db-4c12cc2da0ad");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Succesfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult();
    }
  };


  return (
   
    <div className='text-center p-6 py-20 lg;px-32 w-full overflow-hidden ' id='Contact'>
      <h1 className='text-3xl font-bold text-green-600 sm:text-4xl mb-8 text-center mt-6'>
          Contact <span className='text-purple-400 underline underline-offset-4'>Us</span>
     </h1>
     <p className='text-center mb-12  max-w-80 mx-auto'>We are located in <span className='text-green-600 font-bold'>Migori Town</span> next to <span className='text-purple-500 font-bold'>Oruba Primary</span>.</p>
     <p className='mb-2'>You can also contact us via:</p>

     <p className='flex items-center justify-center gap-3'>
         <FaPhoneAlt className='text-green-600' />
         <span className='text-green-600 font-bold'>+254708354496</span>
    </p>

     <p className='flex items-center justify-center gap-3 '>
         <MdEmail className='text-green-600 text-3xl' />
         <span className='text-green-600 font-bold'>recoveryatshrc@gmail.com</span>
       </p>

     <form onSubmit={onSubmit} className='max-w-2xl mx-auto pt-8'>
      <div className='flex flex-wrap'>
      <div className='w-full md:w-1/2 text-left'>
        Name
        <input className='w-full border border-gray-300 rounded py-3 
        px-4 mt-2 ' type="text" name='Name' placeholder='Your Name' required/>
      </div>

      <div className='w-full md:w-1/2 text-left'>
        Email
        <input className='w-full border border-gray-300 rounded py-3 
        px-4 mt-2 ' type="email" name='Email' placeholder='Your Email' required/>
      </div>
      </div>
      <div className='my-6 text-left '>
        Message
        <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Message' required></textarea>
      </div>

      <button className='bg-purple-500 text-white py-2 px-12 mb-10 rounded '> {result ? result: "Send Message"}</button>
     </form>
     
    </div>
  )
}

export default Contact

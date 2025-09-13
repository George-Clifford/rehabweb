import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
 import { ToastContainer } from 'react-toastify';
 //import' react-toastify/dist/ReacttToastify.css'

const App = () => {
  return (
    <div className=''>
      <ToastContainer/>
      <Navbar/> 
      <Header/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
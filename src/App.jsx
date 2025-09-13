import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className=''>
      <Navbar/> 
      <Header/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
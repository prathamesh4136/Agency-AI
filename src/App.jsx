import React, { useEffect, useRef, useState } from 'react'
import Navrbar from './components/Navrbar'
import ThemeToggleBtn from './components/ThemeToggleBtn';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');


   

 
  
  return (
    <div className=' dark:bg-black relative'>
      <Toaster/>
      <Navrbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
      <Footer theme={theme}/>

          
    </div>
  )
}

export default App


      // <div ref={outlineRef} className=' fixed top-0 left-0 h-10 w-10 rounded-full
      //  border border-primary pointer-events-none z-[9999]'> 
      // </div>

     
      // <div ref={dotRef} className=' fixed top-0 left-0 h-3 w-3 rounded-full
      //  bg-primary pointer-events-none z-[9999]'></div>
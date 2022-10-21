import React from 'react'
import "./header.scss" 

import CTA from "./CTA"
import me from "../../assets/Foto2.jpeg"
/* import me from "../../assets/wolf4.png" */
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
   <header>
    <div className="container header__container">
    {/* <div className=""> */}
      <h1 className="stroke"> Hi, I am Joel Perez</h1>
     
      <h3 className='text-light'>FullStack developer</h3>
      <CTA/>
      <HeaderSocials/>  

      <div className="me">
         <div className='meZ'> 
            <img src={me} id="clip0" className="clip"></img>
            <div className='clip' id='clip1'></div>
            <div className='clip' id='clip2'></div>
            <div className='clip' id='clip3'></div>
            <div className='clip' id='clip4'></div>
        </div> 
      </div>
      <a href="#contact" className="scroll__down">scroll__down</a> 
    </div>
   </header>
  )
} 

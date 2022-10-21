import React, { useEffect, useState } from 'react'
import "./nav.scss"

import {AiOutlineHome,AiOutlineUser} from "react-icons/ai"
import {BiBook,BiMessageSquareDetail} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {GiHamburgerMenu} from "react-icons/gi"



export default function Nav() {

  const [a, setA] = useState(true)
  const [b , setB] = useState(0)
  useEffect(()=>{
    window.addEventListener("resize",width  )
  })
  const width = ()=>{
    setB(window.innerWidth)
  }
  const screen = ()=>{
    console.log("screen")
    /* if(window.innerWidth > 600) setA(false)
    else{setA(true)} */
  }
  const close = ()=>{
    console.log("close")
    setA(!a)

  }
  return (<>
    <nav className="nav pcN">
      <a className="icon iconN" href="#"><AiOutlineHome/></a>
      <a className="icon iconN" href="#about"><AiOutlineUser/></a>
      <a className="icon iconN" href="#technologies"><BiBook/></a>
      <a className="icon iconN" href="#contact"><BiMessageSquareDetail/></a>
    </nav>
    <nav className="nav movilN">
      <button className='icon iconBu btnN' onClick={close} ><GiHamburgerMenu/></button>
      <a className="icon iconN" style={{"fontSize": a?0:20 }} href="#"><AiOutlineHome/></a>
      <a className="icon iconN" style={{"fontSize": a?0:20 }} href="#about"><AiOutlineUser/></a>
      <a className="icon iconN" style={{"fontSize": a?0:20 }} href="#technologies"><BiBook/></a>
      <a className="icon iconN" style={{"fontSize": a?0:20 }} href="#contact"><BiMessageSquareDetail/></a>
      {/* <a href="#services" className="icon iconN"><RiServiceLine/></a> */}
    </nav>

  </>)
}


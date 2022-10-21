import React from 'react'
import {BsLinkedin,BsGithub,BsDribbble} from "react-icons/bs"
import "./header.scss"

export default function () {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"className='icon' target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" className='icon' target={"_blank"}><BsGithub/></a>
        <a href="https://dribbble.com" className='icon' target="_blank"><BsDribbble/></a>
    </div>
  )
} 

import React from 'react'
import "./header.scss"

import CV from '../../assets/Joel Perez CV.docx'

export default function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary' >Download</a>
        <a href="#contact" className='btn btn-primary' >Let's Talk</a>
    </div>
  )
}

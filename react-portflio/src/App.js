import React from 'react'

import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Technologies from './components/technologies/Technologies'

export default function App() {
  return (
    <>
        <Header/>
        <Nav/>
        <div className='backGroundfilt'>
          <About/>
          <Technologies/>
          <Portfolio/>
          <Contact/>
        </div> 
        {/* <Experience/> */}
        {/* <Services/> */}
        {/* <Footer/> */}
    </>
  )
}
import React from 'react'
import {data} from "../../assets/data"
import wolf from "../../assets/wolf4.png"
import "./about.scss"


export default function About() {
  const hobbies = data.hobbies.map((hobbi,a) => {
  return <li id={a+"li"} >{hobbi}</li>})
  return (
    <section id="about" className="aboutSection" >
    <div className='container'>
      <h3 className='stroke aboutTitle title1'>About Me</h3>
      <div className='textRow'>
        <img  id='wolfImg' src={wolf} alt='not found' title='The wolf is beutiful'/>
        <div className='containerA '>
          <span><h4 className='title3'>Summary</h4><hr/></span>
          <p className='text '>
          I am a {data.age} year old boy from Uruguay. I have a strong fascination for canine animals as well as martial arts and cooking.
          At this moment I am studying computer engineering at the tertiary level, but since I am somewhat impatient I decided to start getting into the IT world,
          So I ended up as a Full Stack developer.
          I enjoy finding new challenges that allow me to continue learning and improving at all times.
          </p> 
          
        </div>
      </div>
    </div>
    </section>
  )
}

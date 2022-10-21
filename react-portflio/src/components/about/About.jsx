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
          Soy un chico de {data.age} años de uruguay.
          En este momento me encuentro estudiando a nivel terciario ingenieria en computacion, pero como soy algo impaciente decidi ir metiendome en el mundo IT,
          asi termine como Full Stack developer. 
          Disfruto de encontrar nuevos desafíos que me permitan seguir aprendiendo y mejorando en todo momento.
          </p> 
          <ul className='hobbies'>
            <li id='00li'>Hobbies</li>
            {hobbies}
          </ul>
        </div>
      </div>
    </div>
    </section>
  )
}

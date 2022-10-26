import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {data} from "../../assets/data"
import Card from "./TCard"

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./technologies.scss"


function Technologies() {

  /* const [ tech, setTechs ] = useState( [] ) */
  const [ width, setWidth ] = useState( 4 )
  useEffect(()=>{
    widthChange()
    window.addEventListener("resize", widthChange)
    /* console.log("effect") */
  })
  const widthChange= ()=>{
    if(window.innerWidth < 700) setWidth(1)
    else if(window.innerWidth < 1000) setWidth(1)
    else{setWidth(2)}
  }
  const techF = data.techs.map ( data => {
    if (data.type === "frontend") {
    return <SwiperSlide id = { data.id + "F" } >
    <Card 
        id = { data.id } 
        name = { data.name }
        icon = { data.icon }
        description = { data.description }
        experience = { data.experience }
      />
  </SwiperSlide>
    }
    return
  })
  const techG = data.techs.map(data => {
    if(data.type === "general"){
    return  <SwiperSlide id={data.id + "G"}>
              <Card 
                  id = { data.id } 
                  name = { data.name }
                  icon = { data.icon }
                  description = {data.description}
                  experience = {data.experience}
                />
            </SwiperSlide>
    
    }
    return
  })
  const techL = data.techs.map(data => {
    if(data.type === "leng"){
    return  <SwiperSlide id={data.id + "L"}>
              <Card 
                  id = { data.id } 
                  name = { data.name }
                  icon = { data.icon }
                  description = {data.description}
                  experience = {data.experience}
                />
            </SwiperSlide>
    
    }
    return
  })
  const techB = data.techs.map(data => {
    if(data.type === "backend"){
    return  <SwiperSlide id={data.id + "B"} >
    <Card   
        name = {data.name}
        icon = {data.icon}
        description = {data.description}
        experience = {data.experience}
      />
  </SwiperSlide>
    
    }
  })
  return (
    <section id='technologies'>
    <div className='textBox'>
        <h1 className='stroke neon title1'>Technologies</h1>
        <p className='white res'>In this section you can view the lenguage,frameworks and tools whit I working.
        At this moment I am learning many more but until I feel that I have a good handling I will not add them.</p>
        <div className='Grid2'>
        <div>
          <h4 className='title2'>Language</h4>
          <Swiper
            spaceBetween={0}
            slidesPerView={width}
            pagination={{ dynamicBullets : true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {techL}
          </Swiper> 
        </div>
        <div>
          <h4 className='title2'>Generals</h4>
          <Swiper
            spaceBetween={0}
            slidesPerView={width}
            pagination={{ dynamicBullets : true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {techG}
          </Swiper> 
        </div>
        <div>
          <h4 className='title2'>Frontend</h4>
          <Swiper
            spaceBetween={10}
            slidesPerView={width}
            pagination={{ dynamicBullets : true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {techF}
          </Swiper> 
        </div>
        <div>
          <h4 className='title2'>Backend</h4>
          <Swiper
            pagination={{ dynamicBullets : true }}
            modules={[Pagination]}
            className="mySwiper"
            spaceBetween={0}
            slidesPerView={width}
          >
          {techB}
          </Swiper>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Technologies
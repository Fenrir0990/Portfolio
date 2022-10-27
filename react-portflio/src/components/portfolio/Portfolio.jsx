import React from 'react'
import { useEffect, useState } from 'react'
import {data} from "../../assets/data"
import CardP from "./CarcP"
import "./portfolio.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";



export default function Portfolio() {

  const [ width, setWidth ] = useState( 4 )
  useEffect(()=>{
    widthChange()
    window.addEventListener("resize", widthChange)
    /* console.log("effect") */
  })
  const widthChange= ()=>{
    if(window.innerWidth < 700) setWidth(1)
    else if(window.innerWidth < 1000) setWidth(3)
    else{setWidth(4)}
  }
  const cards = data.proyects.map(data => {
    return (
    <SwiperSlide>
      <CardP 
        title = {data.title}
        img = {data.img}
        description = {data.description}
        deploid = {data.deploid}
        url = {data.url}
      />
    </SwiperSlide> 
    )
  })
  return (
    <section className="portfolio" id='portfolio'>
      <div className='container'>
        <h1 id="titlePort" className='title1 stroke'>Portfolio</h1>
        <div className='containerPP'>
        <Swiper
          spaceBetween={1}
          slidesPerView={width}
          pagination={{ dynamicBullets : true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {cards}
        </Swiper>
        </div>
      </div>
    </section>
  )
}

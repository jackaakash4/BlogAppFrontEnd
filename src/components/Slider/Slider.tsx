"use client"

import React from 'react'
import './Slider.css'

import img1 from '@/Assets/Slider.jpg';
import img2 from '@/Assets/Slider1.jpg';
import img3 from '@/Assets/Slider2.jpg';




import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


function Slider() {
  const width = window.innerWidth;
  const height = window.innerHeight

  return (
   
   <>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slide'><Image 
            src={img1}
            alt='Slider1'
            width={width}
            height={height/2}
            style={{
              objectFit: 'cover'
            }}
          /></SwiperSlide>
        <SwiperSlide className='swiper-slide'><Image 
            src={img2}
            alt='Slider1'
            width={width}
            height={height/2}
            style={{
              objectFit: 'cover'
            }}
          /></SwiperSlide>
          <SwiperSlide className='swiper-slide'><Image 
            src={img3}
            alt='Slider1'
            width={width}
            height={height/2}
            style={{
              objectFit: 'cover'
            }}
          /></SwiperSlide>


      </Swiper>
   </>
   
  )
}

export default Slider
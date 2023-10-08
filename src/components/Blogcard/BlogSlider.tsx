"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import blog from './blog';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import React from 'react'
import BlogCard from './BlogCard';

function BlogSlider() {
  return (
    <>
    <h4>Latest Blogs</h4>
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            blog.map((blogs)=>{
                return (
                <SwiperSlide>
                    <BlogCard {...blogs}/>
                </SwiperSlide>)
            })
        }
      </Swiper>
    </>
  )
}

export default BlogSlider
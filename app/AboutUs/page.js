'use client'

import React from 'react'
import Image from 'next/image'
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Cake from '@/public/aboutus/ChocolateCoffeDonut.svg'
import Flower from '@/public/aboutus/Flower.svg'

const page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const bg = 'gradient-to-right bg-gradient-to-r rounded-[12px] flex flex-col p-4'
  const h1 = 'text-white font-bold text-6xl'
  const h2 = 'text-white font-bold text-4xl py-4'
  const h4 = 'text-white text-xl py-1'
  return (
    <main>
      <section className={`my-1 w-[100%] ${bg} overflow-hidden mt-2`} data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
        <div className='flex flex-row justify-start py-4 px-2'>
          <h1 className={`${h1}`}>About Us</h1>
          <h1 className='text-slate-100/50 font-bold text-6xl -translate-x-[17.5rem] -translate-y-[0.25rem]'>About Us</h1>
        </div>
        <p className='text-white'>At Sugar Rush, we believe that every sweet treat should be an unforgettable experience. Our mission is to bring joy and sweetness into your life with our delectable desserts, crafted with love and the finest ingredients.</p>
        <div className='flex justify-end overflow-hidden'>
          <Image 
            src = {Flower}
            width = {175}
            alt = "Flower"
            className='transform translate-x-8 translate-y-6'
          />
        </div>
      </section>
      <div className='flex flex-row my-1 w-[100%]'>
        <section
        className={`my-1 mr-1 ${bg} w-[200%]`} 
        data-aos="fade-right" 
        data-aos-duration="1000" 
        data-aos-easing="ease-in-sine"
        >
          <h2 className={`${h2}`}>Our Story</h2>
          <div className='flex flex-row pt-1'>
            <p className='text-white'>Founded in 2024, Sugar Rush started as a small neighborhood bakery with a big dream – to create the most delightful and irresistible desserts. Over the years, we've grown into a beloved dessert destination, known for our commitment to quality and innovation. From our signature cupcakes to our refreshing ice creams and delightful candies, each creation is a labor of love.</p>
            <Image 
            src = {Cake}
            width = {150}
            alt = "Chocolate Coffee Donut"
            />
          </div>
        </section>
        <section 
        className={`my-1 ml-1 ${bg} w-[100%]`} 
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1000"
        >
          <h4 className={`${h2}`}>Our Values</h4>
          <h4 className={`${h4}`}>Quality Ingredients</h4>
          <h4 className={`${h4}`}>Exceptional Customer Service</h4>
          <h4 className={`${h4}`}>Creativity and Innovation</h4>
          <h4 className={`${h4}`}>Community Engagement</h4>
        </section>
      </div>
    </main>
  )
}

export default page
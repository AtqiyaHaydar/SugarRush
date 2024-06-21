"use client"
import React from 'react'
import { useEffect } from 'react';
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css';


const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='w-full mt-2 grid grid-cols-3 gap-6'>
      <div className='relative bg-gradient-to-r from-pink-primary to-orange-primary overflow-hidden rounded-[50px] p-6 h-[800px]'>
        
        <div data-aos="fade-right">
          <h1 className='text-white text-5xl leading-[60px] font-OpenSauceSans-Bold mb-3 Extramt-2'>
          Decadent Desserts: Exploring Our Latest Creations
          </h1>

          <p className='text-white text-xl font-OpenSauceSans-Regular'>
          Dive into a mouth-watering showcase of Sugar Rush's newest dessert creations. From rich chocolate cakes to delicate pastries, discover the inspiration behind each delectable treat and what makes them must-tries.
          </p>
        </div>

        <button 
          className='bg-white text-3xl bg-opacity-25 text-white py-4 w-[90%] rounded-full my-3 absolute bottom-[1%] font-openSauceSans-Medium'
          data-aos="fade-right"
        >
          Read Blog <Image src='blog/Arrow.svg' width={48} height={48} alt='arrow-right' className=' inline'/>
        </button>
        
        <div className='absolute top-0 right-0 rounded-full size-64 bg-white bg-opacity-25 translate-x-1/2 -translate-y-1/2'></div>
      </div>

      <div className='relative bg-gradient-to-r from-pink-primary to-orange-primary overflow-hidden rounded-[50px] p-6'>
        
        <div data-aos="fade-up">
          <h1 className='text-white text-5xl leading-[60px] mb-3 mt-2 font-OpenSauceSans-Bold'>
          Behind the Scenes: A Day in the Life at Sugar Rush Bakery
          </h1>

          <p className='text-white text-xl font-OpenSauceSans-Regular'>
          Get an exclusive peek behind the scenes at Sugar Rush Bakery. Follow our passionate team as they work their magic in the kitchen, crafting beautiful cakes, cupcakes, and more. Learn about our dedication to quality and the artistry behind each sweet creation.
          </p>
        </div>

        <button 
          className='bg-white text-3xl bg-opacity-25 text-white py-4 w-[90%] rounded-full my-3 absolute bottom-[1%] font-openSauceSans-Medium'
          data-aos="fade-up"
        >
          Read Blog <Image src='blog/Arrow.svg' width={48} height={48} alt='arrow-right' className=' inline'/>
        </button>
        
        <div className='absolute top-0 right-0 rounded-full size-64 bg-white bg-opacity-25 translate-x-1/2 -translate-y-1/2'></div>
      </div>

      <div className='relative bg-gradient-to-r from-pink-primary to-orange-primary overflow-hidden rounded-[50px] p-6'>
        
        <div data-aos="fade-left">
          <h1 className='text-white text-5xl leading-[60px] mb-3 mt-2 font-OpenSauceSans-Bold'>
          Seasonal Sensations: Embrace the Flavors of Summer at Sugar Rush
          </h1>

          <p className='text-white text-xl font-OpenSauceSans-Regular'>
          Celebrate the flavors of summer with Sugar Rush's seasonal treats. From refreshing fruit-filled pastries to tropical-inspired cupcakes, discover how we infuse the essence of summer into every dessert. Explore our menu to find your new favorite seasonal delight.
          </p>
        </div>

        <button 
          className='bg-white text-3xl bg-opacity-25 text-white py-4 w-[90%] rounded-full my-3 absolute bottom-[1%] font-openSauceSans-Medium'
          data-aos="fade-left"
        >
          Read Blog <Image src='blog/Arrow.svg' width={48} height={48} alt='arrow-right' className=' inline'/>
        </button>
        
        <div className='absolute top-0 right-0 rounded-full size-64 bg-white bg-opacity-25 translate-x-1/2 -translate-y-1/2'></div>
      </div>
    </div>
    
  )
}

export default page 
"use client"

import React from 'react'

import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

const page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full grid grid-cols-3 gap-6 justify-items-stretch text-white">
      <div className="gradient-to-right col-span-2 h-[400px] rounded-[50px]">
        <div className="flex justify-between w-full px-4 pt-4">
          <div className=" font-OpenSauceSans-Regular text-2xl pl-6 pt-6">
            Welcome to Sugar Rush!
          </div>
          <button className="flex px-5 w-[169px] h-[56px] rounded-[50px] bg-white bg-opacity-25 justify-between items-center">
            <div className="font-OpenSauceSans-Medium text-white text-lg">
              Order Now
            </div>
            <img src="home/CupcakeIcon.svg" height={28} width={28}></img>
          </button>
        </div>
        <div className="p-4 w-full">
          <div className="font-OpenSauceSans-SemiBold pl-6 text-white text-[54px]">
            Your Destination for
          </div>
          <div className="font-OpenSauceSans-SemiBold pl-6 mt-[-16px] text-white text-[54px]">
            Delectable Desserts
          </div>
        </div>
        <div className="p-4 w-[83%]">
          <div className='font-OpenSauceSans-Light pl-6 '>
            At Sugar Rush, we craft desserts that delight your taste buds and
            warm your heart. From exquisite cupcakes to delightful pastries,
            discover the sweetest treats in town.
          </div>
        </div>
      </div>
      <div className=" gradient-to-right col-span-1 row-span-2">
        Every bite is a burst of joy
      </div>
      <div className=" gradient-to-right col-span-1">Pink donut</div>
      <div className=" gradient-to-right col-span-1">
        Dive into our delicious menu!
      </div>
    </div>
  );
}

export default page
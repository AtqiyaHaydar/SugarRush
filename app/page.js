"use client";

import React from "react";

import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full grid grid-cols-3 gap-4 justify-items-stretch text-white">
      <div
        className="gradient-to-right col-span-2 h-[400px] rounded-[50px]"
        data-aos="fade-right"
      >
        <div className="flex justify-between w-full px-4 pt-4 ">
          <div
            className=" font-OpenSauceSans-Regular text-3xl ml-6 mt-6"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Welcome to Sugar Rush!
          </div>
          <button
            className="flex px-5 w-[169px] h-[56px] rounded-[50px] bg-white bg-opacity-25 justify-between items-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="font-OpenSauceSans-Medium text-white text-lg">
              Order Now
            </div>
            <img src="home/CupcakeIcon.svg" height={28} width={28}></img>
          </button>
        </div>
        <div className="p-4 w-full" data-aos="fade-right" data-aos-delay="400">
          <h2 className="font-OpenSauceSans-SemiBold ml-6 text-white text-[54px]">
            Your Destination for
          </h2>
          <h2 className="font-OpenSauceSans-SemiBold ml-6 mt-[-16px] text-white text-[54px]">
            Delectable Desserts
          </h2>
        </div>
        <div
          className="px-4 py-2 w-[87%]"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <p className="font-OpenSauceSans-Light ml-6 text-[17px]">
            At Sugar Rush, we craft desserts that delight your taste buds and
            warm your heart. From exquisite cupcakes to delightful pastries,
            discover the sweetest treats in town.
          </p>
        </div>
      </div>

      <div
        className=" gradient-to-bottom-right col-span-1 row-span-2 rounded-[50px] overflow-hidden"
        data-aos="fade-left"
      >
        <div className="flex flex-col justify-between">
          <div className="px-4 pt-4">
            <img
              src="home/Quote.svg"
              width="48"
              className="ml-6 mt-10"
              data-aos="fade-right"
              data-aos-delay="400"
            ></img>
            <p
              className="font-OpenSauceSans-Regular text-3xl ml-6 mt-6 mr-4"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Every bite is a burst of joy – a delightful symphony of flavors
              and sweetness in every taste.
            </p>
          </div>
          <div>
            <img
              src="home/Cupcake.svg"
              className="mt-[-145px]"
              data-aos="fade-up"
              data-aos-delay="400"
            ></img>
          </div>
        </div>
      </div>

      <div
        className=" gradient-to-right col-span-1 h-[325px] rounded-[50px] overflow-hidden"
        data-aos="fade-up"
      >
        <div className="px-4 pt-4" data-aos="fade-right" data-aos-delay="400">
          <h3 className="font-OpenSauceSans-Regular text-xl ml-6 mt-4">
            Introducing our new
          </h3>
          <h2 className="font-OpenSauceSans-ExtraBold text-[40px] ml-6 mt-1">
            Pink Donut
          </h2>
          <p className="font-OpenSauceSans-Light text-lg ml-6 mt-4 w-2/3">
            a delightful treat featuring a soft, fluffy donut with a
          </p>
          <p className="font-OpenSauceSans-Light text-lg ml-6 mt-2 w-[45%]">
            luscious pink glaze and sprinkles in every taste.
          </p>
        </div>
        <img
          src="home/Donut.svg"
          width={300}
          className="relative bottom-[168px] right-[-178px]"
          data-aos="fade-up-left"
        ></img>
      </div>

      <div
        className=" gradient-to-right col-span-1 h-[325px] rounded-[50px] overflow-hidden flex flex-col"
        data-aos="fade-up"
      >
        <div className="px-4 pt-4" data-aos="fade-right" data-aos-delay="400">
          <h3 className="font-OpenSauceSans-Regular text-xl ml-6 mt-4">
            Explore Our Sweet Selections
          </h3>
          <h2 className="font-OpenSauceSans-ExtraBold text-[40px] ml-6 mt-1">
            Dive into our
          </h2>
          <h2 className="font-OpenSauceSans-ExtraBold text-[40px] ml-6 mt-[-12px]">
            delicious menu!
          </h2>
        </div>
        <button
          className="flex mx-4 mt-14 h-[75px] rounded-[50px] bg-white bg-opacity-25 justify-center items-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="font-OpenSauceSans-Medium text-white text-[26px] mr-3">
            Check It Out!
          </div>
          <img src="home/Arrow.svg" height={42} width={42}></img>
        </button>
      </div>
    </div>
  );
};

export default page;

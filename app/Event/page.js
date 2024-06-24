"use client";

import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

const page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 mt-4 text-white font-OpenSauceSans-Regular">
      <div
        className="w-full h-[45%] relative gradient-to-right rounded-[50px] overflow-hidden"
        data-aos="fade-down"
      >
        <div className="w-full h-full flex flex-col justify-between p-[4rem]">
          <svg className="w-full" data-aos="fade-right" data-aos-delay="100">
            <text
              font-size="110"
              y="100"
              fill="transparent"
              stroke="white"
              stroke-width="2"
              className="font-OpenSauceSans-ExtraBold opacity-50"
            >
              Event
            </text>
            <text
              font-size="110"
              y="100"
              dx="10"
              dy="10"
              fill="white"
              className="font-OpenSauceSans-ExtraBold"
            >
              Event
            </text>
          </svg>
          <p
            className="leading-snug text-xl w-[85%]"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Welcome to the Events page at Sugar Rush! We love celebrating
            special occasions with our community and sharing our passion for
            sweets. Here's a look at upcoming events and how you can join in on
            the fun:
          </p>
        </div>
        <div className="w-60 h-60 rounded-full bg-white absolute bottom-0 left-0 transform translate-x-[-50%] translate-y-[50%] opacity-25"></div>
        <div className="w-[28rem] h-[28rem] rounded-full bg-white absolute top-0 right-0 transform translate-x-[50%] translate-y-[-50%] opacity-25"></div>
        <Image
          src="/event/Bear.svg"
          width="250"
          height="250"
          className="absolute bottom-0 right-0 transform translate-x-[31%] translate-y-[23%]"
        ></Image>
      </div>
      <div className="w-full h-[55%] flex gap-5">
        <div
          className="w-1/3 h-full relative gradient-to-right rounded-[50px] overflow-hidden"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="w-full h-full p-6 pt-12 flex flex-col items-center justify-between">
            <h1
              className="text-4xl font-OpenSauceSans-Bold"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Upcoming Event
            </h1>
            <p
              className="text-center leading-snug"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Join us for a hands-on cupcake decorating workshop! Learn from our
              talented pastry chefs as they teach you techniques for creating
              beautifully decorated cupcakes. Perfect for beginners and
              enthusiasts alike, this workshop includes all materials and a
              delicious box of cupcakes to take home.
            </p>
            <button
              className="w-full p-7 bg-white bg-opacity-25 rounded-[50px] text-3xl font-OpenSauceSans-SemiBold"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Register for Free!
            </button>
          </div>
          <div className="w-60 h-60 rounded-full bg-white absolute top-0 left-0 transform translate-x-[-50%] translate-y-[-50%] opacity-25"></div>
        </div>
        <div className="w-2/3 h-full flex flex-col gap-5">
          <div
            className="w-full h-1/2 gradient-to-right rounded-[50px] p-10 flex flex-col justify-between"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h1
              className="text-3xl font-OpenSauceSans-Bold"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <i className="font-OpenSauceSans-Italic">Past Event</i> - Spring
              Cupcake Festival
            </h1>
            <p className="text-xl" data-aos="fade-left" data-aos-delay="400">
              Our Spring Cupcake Festival was a sweet success! Guests enjoyed a
              variety of spring-themed cupcakes, live music, and family-friendly
              activities. Stay tuned for more festivals and events throughout
              the year!
            </p>
          </div>
          <div
            className="w-full h-1/2 relative gradient-to-right rounded-[50px] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-full h-full p-10 flex flex-col justify-between">
              <h1
                className="text-3xl font-OpenSauceSans-Bold"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                Stay Updated
              </h1>
              <p
                className="text-xl w-[77%]"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                Follow us on social media and subscribe to our newsletter to
                stay updated on upcoming events, special promotions, and more
                sweet surprises from Sugar Rush!
              </p>
            </div>
            <Image
              src="/event/TikTok.svg"
              width="140"
              height="140"
              className="absolute bottom-[50%] right-0 transform translate-x-[-55%] translate-y-[50%]"
            ></Image>
            <Image
              src="/event/TwitterX.svg"
              width="140"
              height="140"
              className="absolute top-0 right-0 transform translate-x-[18%] translate-y-[-25%]"
            ></Image>
            <Image
              src="/event/Instagram.svg"
              width="160"
              height="160"
              className="absolute bottom-0 right-0 transform translate-x-[29%] translate-y-[25%]"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

// components/MenuCard.js
import React from 'react';
import Image from 'next/image';

const MenuCard = ({ name, mainImage, iconImage }) => {
  return (
    <div data-aos="zoom-in" className="relative h-full bg-gradient-to-r from-[#FE8DC6] to-[#FFBAAB] 
    rounded-[50px] m-2 flex flex-col items-center justify-center text-white">
      {/* Main Image */}
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <Image src={mainImage} alt={name} layout="fill" objectFit="contain" />
        </div>
        <div className="mt-2 text-lg font-bold">{name}</div>
      </div>

      {/* Icon Image */}
      <div className="absolute top-0 left-10 rounded-full w-12 h-12 transform -translate-x-1/2 translate-y-1/2">
        <Image src={iconImage} alt={`${name} Icon`} width={48} height={48} />
      </div>

      {/* Quarter Circle */}
      <div className="absolute opacity-50 top-0 right-0 w-24 h-24 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}

export default MenuCard;

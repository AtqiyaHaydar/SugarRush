import React from 'react';
import image1 from '@/public/gallery/1.jpeg';
import image2 from '@/public/gallery/2.jpeg';
import image3 from '@/public/gallery/3.jpeg';
import image4 from '@/public/gallery/4.jpeg';
import image5 from '@/public/gallery/5.jpeg';
import Image from 'next/image';

const page = () => {
  return (
    <div className='wrapper'>
      <div className='flex m-auto text-white mt-[15px] h-[300px] gap-[15px]' data-aos='fade-right'>
          <div className='flex w-[70%] bg-gradient-to-r from-[#FE8DC6] to-[#FFBAAB] rounded-[15px] items-center overflow-hidden shadow-xl'>
              <div>
                  <Image src={image1} className='rounded-r-full'/>
              </div>
              <div className='w-[50%]'> 
              <h3 className='text-right font-semibold pr-7 text-[32px]'> Our classic Red Velvet Cupcake topped with creamy, tangy frosting and a sprinkle of love.</h3>
              </div>
          </div>
          <div className='flex w-[30%] h-[300px] overflow-hidden items-center rounded-[15px] shadow-xl'>
              <Image src={image2}/>
          </div>
      </div>
      <div className='flex m-auto h-[300px] mt-[15px] gap-[15px]' data-aos='fade-up'>
          <div className='w-[35%] flex items-center rounded-[15px] overflow-hidden shadow-xl'>
              <Image src={image3}/>
          </div>
          <div className='w-[30%] flex items-center rounded-[15px] overflow-hidden shadow-xl'>
              <Image src={image4} className='object-cover h-full'/>
          </div>
          <div className='w-[35%] flex items-center rounded-[15px] overflow-hidden shadow-xl'>
              <Image src={image5}/>
          </div>
      </div>
    </div>
  )
}

export default page
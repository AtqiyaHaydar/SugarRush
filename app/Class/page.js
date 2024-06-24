import React from 'react'
import Image from 'next/image'
import Chef from '@/public/class/ChefBaker.svg'
import Quote from '@/public/class/Quote.svg'
import Arrow from '@/public/class/Arrow.svg'
import Cake from '@/public/class/Cake.svg'
import Cupcake from '@/public/class/CupcakeIcon.svg'
import tailwindConfig from '@/tailwind.config'

const page = () => {
  return (
    <div className='flex w-screen h-[500px]'>
      <div className='flex w-screen h-screen flex-col bg-pink-500 rounded-3xl px-5'>
        <div className='w-full h-screen bg-blue-500 rounded-3xl p-5 text-white'>
          <div className='flex justify-between items-center'>
            <text className='text-2xl'>
              Baking Class
            </text>
            <button className='flex  px-6 py-2.5 rounded-3xl bg-white bg-opacity-30'>
              <div className='flex pr-4 text-white'>
                Join Now
              </div>
              <Image
                src={Cupcake}
                width={25}
              />
            </button>
          </div>
          <div className='text-5xl font-bold my-3'>
            Welcome to our Baking Classes
          </div>
          <div className='flex justify-between'>
            <p>
            Whether you're a beginner looking to learn the basics of baking or an experienced baker wanting to refine your skills, our classes offer something sweet for everyone. Join us and unleash your inner pastry chef!
            </p>
          </div>
          <Image
              src={Cake}
              className='absolute bottom-[350px] right-[390px]'
              width={100}
            />
        </div>
        <div className='flex w-full bg-green-500 rounded-3xl text-white justify-between'>
          <div className='flex flex-col w-full h-[310px] bg-red-500 rounded-3xl m-5 items-center'>
            <h2 className='text-2xl font-semibold m-3'>
            Introducing to Baking
            </h2>
            <p className='mx-3'>
            This beginner-friendly class covers basic baking techniques, including mixing, baking times, and essential equipment.
            </p>
          </div>
          <div className='flex flex-col w-full h-full bg-purple-500 rounded-3xl my-5 items-centerms'>
            <h2 className='text-2xl font-semibold m-3'>
            Advanced Cake Decorating
            </h2>
            <p className='mx-3'>
              Ideal for intermediate bakers, this class focuses on advanced decorating skills.
            </p>
          </div>
          <div className='flex flex-col w-full h-screen bg-orange-500 rounded-3xl m-5'>
            <h2 className='text-2xl font-semibold m-3'>
              Seasonal Specials
            </h2>
            <p className='mx-3'>
              Join us for themed baking sessions throughout the year, where you'll learn to create seasonal treats with professional guidance and tips.
            </p>
          </div>
        </div>
      </div>
      <div className=' w-[500px] h-screen bg-yellow-500 rounded-3xl p-10 mr-5'>
        <Image
          src = {Quote}
        />
        <p className='p-5 text-xl text-white font-bold'>
          Taking baking classes at Sugar Rush was a game-changer for me.
        </p>
        <Image
          src = {Chef}
          width={300}
          className='absolute bottom-0 right-5'
        />
      </div>
    </div>
  )
}

export default page
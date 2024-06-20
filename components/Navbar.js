"use client"

import React from 'react'

import navItems from '@/lib/navItems'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='h-[75px] w-full gradient-to-right rounded-[25px] flex justify-center items-center gap-x-20' data-aos="fade-down">
      {navItems.map((item) => {
        return (
          <Link key={item.name} href={item.route}>
            <p 
              className={
                `${pathname === item.route ? "font-bold" : ""} 
                text-white text-2xl`
              }
            >{item.name}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default Navbar
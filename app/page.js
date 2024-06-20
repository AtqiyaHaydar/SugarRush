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
    <div>
      home page
    </div>
  )
}

export default page
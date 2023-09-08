'use client'

import React from 'react'
import woopcolor from '../public/logo/woopcolor.svg';
import skooltekcolor from '../public/logo/skooltekcolor.svg';
import ed_foliocolor from '../public/logo/ed_foliocolor.svg';
import hoovescolor from '../public/logo/hoovescolor.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Clients = () => {
  return (
    <motion.div className="flex flex-col justify-center items-center text-center py-16" id='clients'
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{duration: 0.9, delay: 0.9}}
    >
      <h1 className='text-neutral-2 font-light text-2xl sml:text-3xl '>
        Some of
        <span className='text-neutral-1 font-semibold'> the clients I have <span className='block md:inline'>designed for</span></span>
      </h1>
      <div className='w-96 slider'>
        <div className='slide-track'>
          <Image 
            src={woopcolor}
            alt='woop'
            className='w-36 sml:w-40 slide'
          />
          <Image
            src={skooltekcolor}
            alt='SkoolTek'
            className='w-36 sml:w-40 slide'
          />
          <Image 
            src={ed_foliocolor}
            alt='Ed Folio'
            className='w-36 sml:w-40 slide'
          />
          <Image 
            src={hoovescolor}
            alt='HOOVES'
            className='w-36 sml:w-40 slide'
          />
          <Image 
            src={woopcolor}
            alt='woop'
            className='w-36 sml:w-40 slide'
          />
          <Image 
            src={skooltekcolor}
            alt='SkoolTek'
            className='w-36 sml:w-40 slide'
          />
          <Image 
            src={ed_foliocolor}
            alt='Ed Folio'
            className='w-36 sml:w-40 slide'
          />
          <Image 
            src={hoovescolor}
            alt='HOOVES'
            className='w-36 sml:w-40 slide'
          />
          <Image 
            src={woopcolor}
            alt='woop'
            className='w-36 sml:w-40 slide'
          />
          <Image 
            src={skooltekcolor}
            alt='SkoolTek'
            className='w-36 sml:w-40 slide'
          />
          <Image 
            src={ed_foliocolor}
            alt='Ed Folio'
            className='w-36 sml:w-40 slide'
          />
          <Image 
            src={hoovescolor}
            alt='HOOVES'
            className='w-36 sml:w-40 slide'
          />
          <Image 
            src={woopcolor}
            alt='woop'
            className='w-36 sml:w-40 slide'
          />
          <Image 
            src={skooltekcolor}
            alt='SkoolTek'
            className='w-36 sml:w-40 slide'
          />
          <Image 
            src={ed_foliocolor}
            alt='Ed Folio'
            className='w-36 sml:w-40 slide'
          />
          <Image 
            src={hoovescolor}
            alt='HOOVES'
            className='w-36 sml:w-40 slide'
          />  
        </div>
      </div>
    </motion.div>
  )
}

export default Clients;

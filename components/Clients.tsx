'use client'

import React from 'react'
import woop from '../public/logo/woop.svg';
import skooltek from '../public/logo/skooltek.svg';
import ed_folio from '../public/logo/ed_folio.svg';
import hooves from '../public/logo/hooves.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';


const Clients = () => {
    return (
        <div className='flex flex-col m-auto max-w-[1216px] gap-24 mb-32 pt-28' id='clients'>
          <h3 className='text-neutral-2 font-light text-[40px]'>Some of
            <span className='text-neutral-1 font-semibold'> the clients I have
              <span className='block'> designed for</span>
            </span>
          </h3>
          <div className='flex flex-row gap-6 justify-between'>
            <Image
              src={woop}
              alt='Woop'
            />
            <Image
              src={skooltek}
              alt='SkoolTek'
            />
            <Image
              src={ed_folio}
              alt='Ed Folio'
            />
            <Image
              src={hooves}
              alt='Hooves'
            />
          </div>
        </div>
    );
  };
  
  export default Clients    ;
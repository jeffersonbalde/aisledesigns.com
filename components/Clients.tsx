'use client'

import React from 'react'
import woopcolor from '../public/logo/woopcolor.svg';
import skooltekcolor from '../public/logo/skooltekcolor.svg';
import ed_foliocolor from '../public/logo/ed_foliocolor.svg';
import hoovescolor from '../public/logo/hoovescolor.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';


// const Clients = () => {
//     return (
//         <div className='flex flex-col m-auto max-w-[1216px] gap-24 mb-32 pt-28' id='clients'>
//           <h3 className='text-neutral-2 font-light text-[40px]'>Some of
//             <span className='text-neutral-1 font-semibold'> the clients I have designed for </span>
//           </h3>
//           <div className='flex flex-row gap-6 justify-between'>
//             <Image
//               src={woop}
//               alt='Woop'
//             />
//             <Image
//               src={skooltek}
//               alt='SkoolTek'
//             />
//             <Image
//               src={ed_folio}
//               alt='Ed Folio'
//             />
//             <Image
//               src={hooves}
//               alt='Hooves'
//             />
//           </div>
//         </div>
//     );
//   };

// import React from 'react';
// import Image from 'next/image';
// import woopcolor from '../public/logo/woopcolor.svg'; 
// import skooltekcolor from '../public/logo/skooltekcolor.svg';
// import ed_foliocolor from '../public/logo/ed_foliocolor.svg';
// import hoovescolor from '../public/logo/hoovescolor.svg';

const Clients = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-16 py-4" id='clients'>
      <h1 className='text-neutral-2 font-light text-[26px]'>
        Some of
        <span className='text-neutral-1 font-semibold'> the clients I have <span className='block'>designed for</span></span>
      </h1>
      <div className='w-96 slider'>
        <div className='slide-track'>
          <Image 
            src={woopcolor}
            alt='woop'
            className='w-36 slide'
          />
          <Image 
            src={skooltekcolor}
            alt='SkoolTek'
            className='w-36 slide'
          />
          <Image 
            src={ed_foliocolor}
            alt='Ed Folio'
            className='w-36 slide'
          />
          <Image 
            src={hoovescolor}
            alt='HOOVES'
            className='w-36 slide'
          />
          <Image 
            src={woopcolor}
            alt='woop'
            className='w-36 slide'
          />
          <Image 
            src={skooltekcolor}
            alt='SkoolTek'
            className='w-36 slide'
          />
          <Image 
            src={ed_foliocolor}
            alt='Ed Folio'
            className='w-36 slide'
          />
          <Image 
            src={hoovescolor}
            alt='HOOVES'
            className='w-36 slide'
          />
                    <Image 
            src={woopcolor}
            alt='woop'
            className='w-36 slide'
          />
          <Image 
            src={skooltekcolor}
            alt='SkoolTek'
            className='w-36 slide'
          />
          <Image 
            src={ed_foliocolor}
            alt='Ed Folio'
            className='w-36 slide'
          />
          <Image 
            src={hoovescolor}
            alt='HOOVES'
            className='w-36 slide'
          />
          <Image 
            src={woopcolor}
            alt='woop'
            className='w-36 slide'
          />
          <Image 
            src={skooltekcolor}
            alt='SkoolTek'
            className='w-36 slide'
          />
          <Image 
            src={ed_foliocolor}
            alt='Ed Folio'
            className='w-36 slide'
          />
          <Image 
            src={hoovescolor}
            alt='HOOVES'
            className='w-36 slide'
          />  
        </div>
      </div>
    </div>
  )
}

export default Clients;

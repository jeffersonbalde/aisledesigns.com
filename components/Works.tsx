'use client'

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, useAnimation } from 'framer-motion';
// import woop from '../public/assets/woop.svg';
// import woop_page_1 from '../public/assets/woop_page-1.svg';
// import woop_page_2 from '../public/assets/woop_page-2.svg';
// import woop_page_3 from '../public/assets/woop_page-3.svg';

// const Works = () => {

    //   const childAnimations = useAnimation();

    //   const handleContainerHover = async () => {
    //     // Animate the child photos when the container is hovered
    //     await childAnimations.start({ rotate: -45, scale: 1.25 });
    //   };

    //   const handleContainerHoverEnd = async () => {
    //     // Reset the child photos' animations when the container hover ends
    //     await childAnimations.start({ rotate: 0, scale: 1 });
    //   };

//   return (
//     <div className='mt-20 flex flex-col max-w-[1220px] m-auto mb-[200px]' id="works">
//         <h3 className='text-neutral-2 font-light text-[40px] mt-20'>
//             Selected
//             <span className='text-neutral-1 font-semibold'> Works
//             </span>
//         </h3>

//         <div className='mt-20 flex flex-row gap-x-8 '>
//             <motion.div 
//                 className='relative overflow-hidden w-[2500px] rounded-r-2xl' 
//                 whileHover={{rotate: -5}} transition={{duration: 0.5}}>
//                 <Image
//                     src={woop}
//                     alt="Woop"
//                     className=''
//                 />
//                 <Image 
//                     src={woop_page_1}
//                     alt='Woop Webpage'
//                     className='absolute top-[115px] left-3'
//                 />
//                 <Image 
//                     src={woop_page_2}
//                     alt='Woop Webpage'
//                     className='absolute bottom-0 left-[285px] top-[-75px]'
//                 />
//                 <Image 
//                     src={woop_page_3}
//                     alt='Woop Webpage'
//                     className='absolute bottom-96 left-40'
//                 />
//             </motion.div>
//             <div className='flex flex-col justify-end items-start'>
//                 <div className='flex flex-col justify-center'>
//                     <p className='uppercase text-neutral-1 text-semibold text-base'>WOOPSCHOLARSHIP</p>
//                     <h3 className='text-[32px] text-neutral-2 font-light mt-4'>
//                         <span className='text-neutral-1 font-semibold'>WOOP stands for Windows of Opportunity</span>. A 
//                         scholarship matchmaker platform that makes finding and applying for a scholarship easier and more accessible for students.
//                     </h3>
//                     <p className='text-lg text-neutral-1 font-light uppercase mt-6'>BRANDING, WEBSITE, APPLICATION, UI UX DESIGN</p>
//                 </div>
//                 <Link
//                     href="sdsd"
//                     className='text-[#FFF] text-base font-semibold'
//                 >
//                     Visi
//                 </Link>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Works


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import woop from '../public/assets/woop.svg';
import woop_page_1 from '../public/assets/woop_page-1.svg';
import woop_page_2 from '../public/assets/woop_page-2.svg';
import woop_page_3 from '../public/assets/woop_page-3.svg';
import arrow_right from '../public/icon/arrow_right.svg';

import WOOP from '../public/assets/WOOP.jpg';
import EDFOLIO from '../public/assets/EDFOLIO.jpg';
import SKOOLTEK from '../public/assets/SKOOLTEK.jpg';
import HOOVES from '../public/assets/HOOVES.jpg';

const Works = () => {
  const child1Animations = useAnimation();
  const child2Animations = useAnimation();
  const child3Animations = useAnimation();

  const handleContainerHover = async () => {
    // Animate the child photos when the container is hovered
    await Promise.all([
      child1Animations.start({ y: -30, rotate: -1, scale: 1, originX: 0, originY: 2, transition: { duration: 0.5 } }),
      child2Animations.start({ y: 30, rotate: 0, scale: 1, originX: 0, originY: 0, transition: { duration: 0.5 } }),
      child3Animations.start({ y: -30, rotate: -4, scale: 1, originX: 0, originY: 0, transition: { duration: 0.5 } }),
    ]);
  };

  const handleContainerHoverEnd = async () => {
    // Reset the child photos' animations when the container hover ends
    await Promise.all([
      child1Animations.start({ y: 0, rotate: 0, scale: 1, transition: { duration: 0.5 } }),
      child2Animations.start({ y: 0, x: 0, rotate: 0, scale: 1, transition: { duration: 0.5 } }),
      child3Animations.start({ y: 0, rotate: 0, scale: 1, transition: { duration: 0.5 } }),
    ]);
  };

  return (
    <div
      className="mdl:mt-48 flex flex-col max-w-[1116px] m-auto px-4 py-5 xl:px-0"
      id="works"
    >
      <h3 className="text-neutral-2 font-light text-2xl sml:text-3xl mdl:text-4xl">
        Selected
        <span className="text-neutral-1 font-semibold"> Works</span>
      </h3>

      {/* WOOPSCHOLARSHIP */}
      <div className="mt-14 mdl:mt-20 flex flex-col mdl:flex-row gap-x-10 justify-between">
        {/* <motion.div
          className="hidden mdl:block relative overflow-hidden w-[330px] mdl:w-[2740px] rounded-3xl mdl:h-[500px]"
          whileHover={{ rotate: -6 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={handleContainerHover}
          onMouseLeave={handleContainerHoverEnd}
        > */}
          {/* Your main project photo that serves as a container */}
          {/* <Image 
            src={woop} 
            alt="Woop" 
            objectFit="cover"
            className=' w-[900px]'
          /> */}

          {/* The three screenshot images */}
          {/* <motion.div
            className="absolute top-[107px] left-3"
            animate={child1Animations}
          >
            <Image
              src={woop_page_1}
              alt="Screenshot 1"    
              layout="responsive"   
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-[285px] top-[-87px] w-[36rem]"
            animate={child2Animations}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={woop_page_2}
              alt="Screenshot 2"
              layout="responsive"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-[400px] left-[158px]"
            animate={child3Animations}
          >
            <Image
              src={woop_page_3}
              alt="Screenshot 3"
              layout="responsive"
            />
          </motion.div> 
        </motion.div> */}
        <Image 
          src={WOOP}
          alt='WOOPSCHOLARHIP'
          className='w-[800px] h-[700x] xl:w-[690px] xl:h-[450px] hidden mdl:block rounded-lg'
        />
        <div className="flex flex-col justify-end items-start gap-10">
          <div className="flex flex-col justify-center">
            <p className="uppercase text-neutral-1 text-semibold text-sm mt-5 mdl:mt-0">WOOPSCHOLARSHIP</p>
            <h3 className="text-lg xl:text-[28px] text-neutral-2 font-normal mt-4 mdl:leading-snug">
              <span className="text-neutral-1 font-semibold">WOOP stands for Windows of Opportunity.</span> A
              scholarship matchmaker platform that makes finding and applying for a scholarship easier and more accessible
              for students.
            </h3>
            <p className="text-sm mdl:text-lg text-neutral-1 font-light uppercase mt-6">BRANDING, WEBSITE, APPLICATION, UI UX DESIGN</p>
          </div>  
          <div className="text-sm uppercase flex flex-row items-center justify-center gap-7">
            <Link href="https://www.woopscholarship.com/" className="text-[#FFF] font-normal flex flex-row items-center justify-center gap-2 border border-neutral-2 py-2 px-4 rounded-full" target="_blank" rel="noreferrer">
              <p>Visit Website</p>
              <Image
                src={arrow_right}
                alt='arrow right'
                className='w-5'
              />
            </Link>
            <p className='text-primary font-semibold'>In Development</p>
          </div>
        </div>
      </div>

      {/* SKOOLTEK */}
      <div className="mt-14 mdl:mt-20 flex flex-col mdl:flex-row-reverse gap-x-10 justify-between">
        {/* <motion.div
          className="hidden mdl:block relative overflow-hidden w-[330px] mdl:w-[2740px] rounded-3xl mdl:h-[500px]"
          whileHover={{ rotate: -6 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={handleContainerHover}
          onMouseLeave={handleContainerHoverEnd}
        > */}
          {/* Your main project photo that serves as a container */}
          {/* <Image 
            src={woop} 
            alt="Woop" 
            objectFit="cover"
            className=' w-[900px]'
          /> */}

          {/* The three screenshot images */}
          {/* <motion.div
            className="absolute top-[107px] left-3"
            animate={child1Animations}
          >
            <Image
              src={woop_page_1}
              alt="Screenshot 1"    
              layout="responsive"   
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-[285px] top-[-87px] w-[36rem]"
            animate={child2Animations}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={woop_page_2}
              alt="Screenshot 2"
              layout="responsive"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-[400px] left-[158px]"
            animate={child3Animations}
          >
            <Image
              src={woop_page_3}
              alt="Screenshot 3"
              layout="responsive"
            />
          </motion.div> 
        </motion.div> */}
        <Image 
          src={SKOOLTEK}
          alt='SKOOLTEK'
          className='w-[690px] h-[450px] hidden mdl:block rounded-lg'
        />
        <div className="flex flex-col justify-end items-start gap-10 ">
          <div className="flex flex-col justify-center">
            <p className="uppercase text-neutral-1 text-semibold text-sm mt-5 mdl:mt-0">SKOOLTEK</p>
            <h3 className="text-lg mdl:text-[28px] text-neutral-2 font-normal mt-4 mdl:leading-relaxed">
              <span className="text-neutral-1 font-semibold">A complete hybrid ready school management solutions.</span> SkoolTek by EdFolio was born with the heart to help small to medium schools fare better in the hybrid learning education.
            </h3>
            <p className="text-sm mdl:text-lg text-neutral-1 font-light uppercase mt-6">REBRANDING, WEBSITE REDESIGN</p>
          </div>  
          <div className="text-sm uppercase flex flex-row items-center justify-center gap-7">
            <Link href="https://www.woopscholarship.com/" className="text-[#FFF] font-normal flex flex-row items-center justify-center gap-2 border border-neutral-2 py-2 px-4 rounded-full" target="_blank" rel="noreferrer">
              <p>Visit Website</p>
              <Image
                src={arrow_right}
                alt='arrow right'
                className='w-5'
              />
            </Link>
            {/* <p className='text-primary font-semibold'>In Development</p> */}
          </div>
        </div>
      </div>

      {/* EDFOLIO */}
      <div className="mt-14 mdl:mt-20 flex flex-col mdl:flex-row gap-x-10 justify-between">
        {/* <motion.div
          className="hidden mdl:block relative overflow-hidden w-[330px] mdl:w-[2740px] rounded-3xl mdl:h-[500px]"
          whileHover={{ rotate: -6 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={handleContainerHover}
          onMouseLeave={handleContainerHoverEnd}
        > */}
          {/* Your main project photo that serves as a container */}
          {/* <Image 
            src={woop} 
            alt="Woop" 
            objectFit="cover"
            className=' w-[900px]'
          /> */}

          {/* The three screenshot images */}
          {/* <motion.div
            className="absolute top-[107px] left-3"
            animate={child1Animations}
          >
            <Image
              src={woop_page_1}
              alt="Screenshot 1"    
              layout="responsive"   
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-[285px] top-[-87px] w-[36rem]"
            animate={child2Animations}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={woop_page_2}
              alt="Screenshot 2"
              layout="responsive"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-[400px] left-[158px]"
            animate={child3Animations}
          >
            <Image
              src={woop_page_3}
              alt="Screenshot 3"
              layout="responsive"
            />
          </motion.div> 
        </motion.div> */}
        <Image 
          src={EDFOLIO}
          alt='EDFOLIO'
          className='w-[690px] h-[450px] hidden mdl:block rounded-lg'
        />
        <div className="flex flex-col justify-end items-start gap-10">
          <div className="flex flex-col justify-center">
            <p className="uppercase text-neutral-1 text-semibold text-sm mt-5 mdl:mt-0">EDFOLIO</p>
            <h3 className="text-lg mdl:text-[28px] text-neutral-2 font-normal mt-4 mdl:leading-relaxed">
            <span className="text-neutral-1 font-semibold">Education Within Your Reach.</span> Ed Folio was born with the heart to help small to medium schools fare better in the remote learning education. They needed a  new make over on their website, that’s where I come in as a UI/UX Designer
            </h3>
            <p className="text-sm mdl:text-lg text-neutral-1 font-light uppercase mt-6">REBRANDING, WEBSITE REDESIGN</p>
          </div>  
          <div className="text-sm uppercase flex flex-row items-center justify-center gap-7">
            <Link href="https://www.woopscholarship.com/" className="text-[#FFF] font-normal flex flex-row items-center justify-center gap-2 border border-neutral-2 py-2 px-4 rounded-full" target="_blank" rel="noreferrer">
              <p>Visit Website</p>
              <Image
                src={arrow_right}
                alt='arrow right'
                className='w-5'
              />
            </Link>
            <p className='text-primary font-semibold'>REBRANDING IN DEVELOPMENT</p>
          </div>
        </div>
      </div>

      {/* HOOVES */}
      <div className="mt-14 mdl:mt-20 flex flex-col mdl:flex-row-reverse gap-x-10 justify-between">
        {/* <motion.div
          className="hidden mdl:block relative overflow-hidden w-[330px] mdl:w-[2740px] rounded-3xl mdl:h-[500px]"
          whileHover={{ rotate: -6 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={handleContainerHover}
          onMouseLeave={handleContainerHoverEnd}
        > */}
          {/* Your main project photo that serves as a container */}
          {/* <Image 
            src={woop} 
            alt="Woop" 
            objectFit="cover"
            className=' w-[900px]'
          /> */}

          {/* The three screenshot images */}
          {/* <motion.div
            className="absolute top-[107px] left-3"
            animate={child1Animations}
          >
            <Image
              src={woop_page_1}
              alt="Screenshot 1"    
              layout="responsive"   
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-[285px] top-[-87px] w-[36rem]"
            animate={child2Animations}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={woop_page_2}
              alt="Screenshot 2"
              layout="responsive"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-[400px] left-[158px]"
            animate={child3Animations}
          >
            <Image
              src={woop_page_3}
              alt="Screenshot 3"
              layout="responsive"
            />
          </motion.div> 
        </motion.div> */}
        <Image 
          src={HOOVES}
          alt='HOOVES'
          className='w-12 h-12 xl:w-[690px] xl:h-[450px] hidden mdl:block rounded-lg'
        />
        <div className="flex flex-col justify-end items-start gap-10 ">
          <div className="flex flex-col justify-center">
            <p className="uppercase text-neutral-1 text-semibold text-sm mt-5 mdl:mt-0">HOOVES</p>
            <h3 className="text-lg mdl:text-[28px] text-neutral-2 font-normal mt-4 mdl:leading-relaxed">
            <span className="text-neutral-1 font-semibold">Hooves is a full-service hybrid digital web development company that specializes in UI/UX design and development.</span> Their Website design services are focused on creating a user-friendly experience that is both visually appealing and functional.
            </h3>
            <p className="text-sm mdl:text-lg text-neutral-1 font-light uppercase mt-6">REBRANDING, WEBSITE REDESIGN</p>
          </div>  
          <div className="text-sm uppercase flex flex-row items-center justify-center gap-7">
            <Link href="https://www.woopscholarship.com/" className="text-[#FFF] font-normal flex flex-row items-center justify-center gap-2 border border-neutral-2 py-2 px-4 rounded-full" target="_blank" rel="noreferrer">
              <p>Visit Website</p>
              <Image
                src={arrow_right}
                alt='arrow right'
                className='w-5'
              />
            </Link>
            <p className='text-[#EB5757] font-regular'>PROJECT STOPPED</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Works;
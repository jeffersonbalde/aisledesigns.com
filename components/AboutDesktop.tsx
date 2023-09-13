import React from 'react'
import profile1 from '../public/assets/profile1.png';
import profile2 from '../public/assets/profile2.png';
import profile3 from '../public/assets/profile3.png';
import Image from 'next/image';

const AboutDesktop = () => {
  return (
    <div className='max-w-[1050px] flex justify-center items-center m-auto' id="about">
        <div className="flex justify-center items-center gap-10">
            <div className="w-96">
                <h1 className='uppercase text-neutral-1 font-semibold text-lg'>A bit about me</h1>
                <h1 className='text-neutral-2 font-light mt-5 text-xl leading-relaxed'>I am a Designer who is passionate about creating 
                    <span className='text-neutral-1 font-semibold'> beautiful and joyful digital experiences. Besides design I Love Arts, Games and Reading Mangas. </span>
                </h1> 
            </div>
            <Image 
                src={profile1}
                alt='Ysl Ron Hepos'
                className=''    
            />
        </div>
        {/* <div className="flex gap-5"> */}
            {/* <div className="flex flex-col justify-between"> */}
        <div className='flex flex-col gap-7 ml-7'>
            <Image 
                src={profile2}
                alt='Ysl Ron Hepos'
                className=''
            />
            <Image 
                src={profile3}
                alt='Ysl Ron Hepos'
            />
        {/* </div> */}
        </div>
    </div>
  )
}

export default AboutDesktop
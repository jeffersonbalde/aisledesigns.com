import React from 'react'
import woop from '../public/assets/woop.svg';
import Image from 'next/image';
import Link from 'next/link';
import woop_page_1 from '../public/assets/woop_page-1.svg';
import woop_page_2 from '../public/assets/woop_page-2.svg';
import woop_page_3 from '../public/assets/woop_page-3.svg';

const Works = () => {
  return (
    <div className='mt-20 flex flex-col max-w-[1220px] m-auto mb-[200px]'>
        <h3 className='text-neutral-2 font-light text-[40px] mt-20'>
            Selected
            <span className='text-neutral-1 font-semibold'> Works
            </span>
        </h3>

        <div className='mt-20 flex flex-row gap-x-8 '>
            <div className='relative overflow-hidden w-[2500px]'>
                <Image
                    src={woop}
                    alt="Woop"
                    className=''
                />
                <Image 
                    src={woop_page_1}
                    alt='Woop Webpage'
                    className='absolute top-[115px] left-3'
                />
                <Image 
                    src={woop_page_2}
                    alt='Woop Webpage'
                    className='absolute bottom-0 left-[285px] top-[-75px]'
                />
                <Image 
                    src={woop_page_3}
                    alt='Woop Webpage'
                    className='absolute bottom-96 left-40'
                />
            </div>
            <div className='flex flex-col justify-end items-start'>
                <div className='flex flex-col justify-center'>
                    <p className='uppercase text-neutral-1 text-semibold text-base'>WOOPSCHOLARSHIP</p>
                    <h3 className='text-[32px] text-neutral-2 font-light mt-4'>
                        <span className='text-neutral-1 font-semibold'>WOOP stands for Windows of Opportunity</span>. A 
                        scholarship matchmaker platform that makes finding and applying for a scholarship easier and more accessible for students.
                    </h3>
                    <p className='text-lg text-neutral-1 font-light uppercase mt-6'>BRANDING, WEBSITE, APPLICATION, UI UX DESIGN</p>
                </div>
                <Link
                    href="sdsd"
                    className='text-[#FFF] text-base font-semibold'
                >
                    Visi
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Works
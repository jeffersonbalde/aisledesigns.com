import React from 'react'
import mail from '../public/icon/mail.svg'
import behance from '../public/icon/behance.svg'
import linkedin from '../public/icon/linkedin.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-col max-w-[1120px] m-auto px-4 pt-16 pb-9 justify-center items-center text-center' id="contact">
        <div className="">
            <h1 className='text-neutral-2 font-light text-4xl'>Get <span className='font-semibold text-neutral-1'>in Touch.</span></h1>
            <p className='font-light text-neutral-1 text-xs mt-3'>So that we can talk more about...</p>
        </div>
        <div className="flex flex-row items-center justify-center py-12 gap-x-8">
            <Link
                href={'mailto:yphepos@gmail.com'}
            >
                <Image 
                    src={mail}
                    alt='Mail'
                    className='w-9'
                />
            </Link>
            <Link
                href="https://www.behance.net/yslron"
                target="_blank" rel="noreferrer"
            >
                <Image 
                    src={behance}
                    alt='Behance'
                    className='w-9'
                />
            </Link>
            <Link
                href="https://www.linkedin.com/in/ysl-ron-521a93244/"
                target="_blank" rel="noreferrer"
            >
                <Image 
                    src={linkedin}
                    alt='LinkedIn'
                    className='w-9'
                />
            </Link>
        </div>
        <p className='font-light text-neutral-2 mt-5 text-xs'>Made with ❤️ by <span className='font-semibold text-neutral-1'>Ysl Ron Design</span></p>
    </div>
  )
}

export default Footer
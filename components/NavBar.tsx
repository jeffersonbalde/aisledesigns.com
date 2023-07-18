'use client'

import Link from 'next/link'
import React, { useRef } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import logo from '../public/icon/logo.svg';

const NavBar = () => {
    const ref = useRef<string | any>("");

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        })

        const links = document.querySelectorAll('.nav-link');
        links.forEach((link) => {
            link.classList.remove('active');
        })
        e.currentTarget.classList.add("active");
    }

  return (
    <div className="max-w-[1320px] flex flex-row items-center justify-around m-auto sticky top-0 py-4 w-full z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-900">
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
        >
            <Image 
                src={logo}
                alt='AisleDesigns'
            />
        </motion.div>
        
        <nav className='flex flex-row list-none uppercase gap-x-9 text-sm items-center font-semibold'>
            <Link
                href="#home"
                className='text-neutral-1 hover:text-neutral-2 nav-link active nav-link'
            >
                <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{duration: 0.1}}
                >
                    Home
                </motion.li>
            </Link>
            <Link
                href="#works"
                className='text-neutral-1 hover:text-neutral-2 nav-link'
                onClick={handleScroll}  
            >
                <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{duration: 0.2, delay: 0.2}}
                >
                    Work
                </motion.li>
            </Link>
            <Link
                href="#about"
                className='text-neutral-1 hover:text-neutral-2 nav-link'
            >
                <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{duration: 0.3, delay: 0.3}}
                >
                    About
                </motion.li>
            </Link>
            <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{duration: 0.4, delay: 0.4}}
                >
                <Link
                    href="#downloadcv"
                    className='text-buttonColor border border-primary rounded-full bg-primary py-2 px-8 text-base hover:text-neutral-2'
                >
                    Download CV
                </Link>
            </motion.li>
        </nav>
    </div>
  )
}

export default NavBar
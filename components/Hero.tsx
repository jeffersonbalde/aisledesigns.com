/* eslint-disable react/jsx-key */
'use client'

import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { AnimatePresence, animate, motion } from "framer-motion"
import Image from 'next/image'
import logo from '../public/icon/logo.svg';
import styles from '../app/style.module.scss';
import Nav from './Nav/index';

import figma from '../public/icon/figma.svg';
import adobe_xd from '../public/icon/adobe_xd.svg';
import photoshop from '../public/icon/photoshop.svg';
import adobe_illustrator from '../public/icon/adobe_illustrator.svg';
import arrow_down from '../public/icon/arrow_down.svg';
import fav from '../public/icon/fav.svg';

const NavBar = () => {

    const [isActive, setIsActive] = useState(false);

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
        <div className='h-screen'>
            <header className='max-w-[1216px] flex flex-row justify-between items-center p-4 mdl:p-5 xl:px-0 m-auto sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30'>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    <Link
                        href='/'
                    >
                        <Image 
                            src={logo}
                            alt='AisleDesigns'
                            className='w-48 sml:w-52'
                        />
                    </Link>
                </motion.div>

                <nav className='hidden mdl:flex flex-row list-none uppercase gap-x-9 text-sm items-center font-semibold'>
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
                        className='text-slate-100 border border-primary rounded-full bg-primary py-2 px-6 text-base'
                    >
                        Download CV
                    </Link>
                </motion.li>
            </nav>

            <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration: 0.2, delay: 0.2}}
                className={`${styles.button} mdl:hidden flex items-center justify-center`}
                onClick={() => {setIsActive(!isActive)}}
            >
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
            </motion.div>
                <AnimatePresence mode='wait'>
                    {isActive && <Nav />}
                </AnimatePresence>
            </header>

            {/* HERO SECTION */}
            <main>
                <div className="flex flex-col items-center justify-center m-auto text-center mt-32 px-4 gap-y-20 mdl:mt-40">

                    {/* NAME */}
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{duration: 0.5, delay: 0.5}}
                    >
                        <h1 className='text-neutral-2 font-light text-[40px] sml:text-5xl xl:text-[50px]'>I&apos;m <span className='uppercase text-primary font-bold'>Ysl Ron</span></h1>
                        <motion.h2 
                            className='text-neutral-2 font-regular text-[33px] leading-[2.7rem] mt-6 sml:text-[38px] md:px-5 mdl:px-7 lg:px-20 xl:text-[42px]'
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{duration: 0.6, delay: 0.6}}
                        >Freelance Designer Specializing in
                            <span className="text-neutral-1 font-semibold"> UI/UX </span> and 
                            <span className='text-neutral-1 font-semibold lgl:block'> Graphic Design</span>
                        </motion.h2>
                    </motion.div>

                    {/* ICONS */}
                    <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{duration: 0.7, delay: 0.7}}
                >
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row gap-7 items-center'>
                            <motion.div
                                whileHover={{
                                    rotate: 30,
                                    scale: 1.4,
                                    originX: 0,
                                    originY: 0,
                                    transition: {
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 10,
                                    },
                                    
                                }}
                                whileTap={{ scale: 0.9 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 10,
                                }}
                            >
                                <div className='relative'>
                                    <Image
                                        src={figma}
                                        alt='Figma'
                                        className='w-[52px] sml:w-14 xl:w-16'
                                    />
                                    <Image
                                        src={fav}
                                        alt='fav'
                                        className='absolute left-[30px] bottom-[30px] w-9 sml:left-[35px] sml:bottom-[37px] xl:w-10 xl:bottom-[47px]'
                                    />
                                </div>
                            </motion.div>

                            {/* Adobe XD */}
                            <motion.div
                                whileHover={{
                                    rotate: 30,
                                    scale: 1.3,
                                    originX: 0,
                                    originY: 1,
                                    transition: {
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 15,
                                    },
                                    
                                }}
                                whileTap={{ scale: 0.9 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 10,
                                    duration: 0.1
                                }}
                                
                            >
                                <Image
                                    src={adobe_xd}
                                    alt='Adobe XD'
                                    className='w-[52px] sml:w-14 xl:w-16'
                                />
                            </motion.div>

                            {/* Photoshop */}
                            <motion.div
                                whileHover={{
                                    rotate: 30,
                                    scale: 1.3,
                                    originX: 0,
                                    originY: 1,
                                    transition: {
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 15,
                                    },
                                    
                                }}
                                whileTap={{ scale: 0.9 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 10,
                                    duration: 0.1
                                }}
                            >    
                                <Image
                                    src={photoshop}
                                    alt='Photoshop'
                                    className='w-[52px] sml:w-14 xl:w-16'
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    rotate: -30,
                                    scale: 1.3,
                                    originX: '100%',
                                    originY: '100%',
                                    transition: {
                                        type: 'spring',
                                        stiffness: 200,
                                        damping: 15,
                                    },
                                    
                                }}
                                whileTap={{ scale: 0.9 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 10,
                                    duration: 0.1
                                }}
                            >
                                <Image
                                    src={adobe_illustrator}
                                    alt='Adobe Illustrator'
                                    className='w-[52px] sml:w-14 xl:w-16'
                                />
                            </motion.div>
                        </div>
                    </div>
                    </motion.div>
                    
                    {/* SCROLL DOWN */}
                    <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{duration: 0.8, delay: 0.8}}
                        >
                        <motion.div
                                    whileHover={{
                                        y: 10,
                                        scale: 1.3,
                                        transition: {
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 10,
                                        },
                                        
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 200,
                                        damping: 10,
                                        duration: 0.4
                                    }}
                            >
                                <Link
                                    href="#clients"
                                    onClick={handleScroll}
                                >
                                    <Image
                                        src={arrow_down}
                                        alt='scroll down'
                                        className='nav-link w-8 mt-10'
                                    />
                                </Link>
                            </motion.div>
                    </motion.div>
                </div>
            </main>
        </div>
    )

}

export default NavBar;
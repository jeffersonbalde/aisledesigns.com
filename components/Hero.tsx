/* eslint-disable react/jsx-key */
'use client'

import Link from 'next/link'
import Image from 'next/image'
import figma from '../public/icon/figma.svg';
import adobe_xd from '../public/icon/adobe_xd.svg';
import photoshop from '../public/icon/photoshop.svg';
import adobe_illustrator from '../public/icon/adobe_illustrator.svg';
import arrow_down from '../public/icon/arrow_down.svg';
import fav from '../public/icon/fav.svg';
import { AnimatePresence, animate, motion } from "framer-motion"

const NavBar = () => {

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
        <main>
            <div className="flex flex-col items-center justify-center m-auto text-center mt-20 sml:px-3 gap-y-16 mdl:mt-40">

                {/* NAME */}
                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{duration: 0.5, delay: 0.5}}
                >
                    <h1 className='text-neutral-2 font-light text-3xl sml:text-4xl mdl:text-5xl'>I&apos;m <span className='uppercase text-primary font-bold'>Ysl Ron</span></h1>
                    <motion.h2 
                        className='h2 text-neutral-2 font-regular xss:text-[19px] smm:text-[21px] smm:leading-9 mt-5 sml:text-3xl sml:leading-[1.2em] md:px-5 mdl:px-7 mdl:text-[40px]'
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{duration: 0.6, delay: 0.6}}
                    >Freelance Designer Specializing in
                        <span className="block md:inline text-neutral-1 font-semibold"> UI/UX and 
                        <span className='text-neutral-1 font-semibold lgl:block'> Graphic Design</span></span>
                    </motion.h2>
                </motion.div>

                {/* ICONS */}
                <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration: 0.7, delay: 0.7}}
            >
                <div className='flex flex-col items-center'>
                    <div className='flex flex-row gap-5 items-center'>
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
                                    className='w-[45px] sml:w-14 xl:w-16'
                                />
                                <Image
                                    src={fav}
                                    alt='fav'
                                    className='absolute left-[30px] bottom-[30px] w-7 sml:left-[35px] sml:bottom-[37px] xl:w-10 xl:bottom-[47px]'
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
                                className='w-[45px] sml:w-14 xl:w-16'
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
                                className='w-[45px] sml:w-14 xl:w-16'
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
                                className='w-[45px] sml:w-14 xl:w-16'
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
                                    className='nav-link w-7 '
                                />
                            </Link>
                        </motion.div>
                </motion.div>
            </div>
        </main>
    )

}

export default NavBar;
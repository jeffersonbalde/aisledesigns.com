'use client'

import Image from 'next/image'
import React from 'react'
import figma from '../public/icon/figma.svg';
import adobe_xd from '../public/icon/adobe_xd.svg';
import photoshop from '../public/icon/photoshop.svg';
import adobe_illustrator from '../public/icon/adobe_illustrator.svg';
import arrow_down from '../public/icon/arrow_down.svg';
import fav from '../public/icon/fav.svg';
import NavBar from './NavBar';

import { motion, useAnimation } from "framer-motion";

const Hero = () => {

  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-auto'> 
        <NavBar />
        <div className='flex flex-col items-center justify-center m-auto text-center mt-36 gap-7'>
            <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration: 0.5, delay: 0.5}}
            >
                <h1 className='text-neutral-2 text-5xl font-light'>I&apos;m <span className='uppercase text-primary font-bold'>Ysl Ron</span></h1>
                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{duration: 0.6, delay: 0.6}}
                >
                    <p className='text-neutral-2 text-[56px] font-light mt-6'>I&apos;m a designer 
                        <span className='font-normal' > specializing</span> in  
                        <span className='text-neutral-1 font-semibold'> UI/UX </span> and 
                        <span className='block text-neutral-1 font-semibold'>Graphic Design</span>
                    </p>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration: 0.7, delay: 0.7}}
            >
                <div className='flex flex-col mt-10 gap-24 items-center'>
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
                                    className='w-16'
                                />
                                <Image
                                    src={fav}
                                    alt='fav'
                                    className='absolute left-[40px] bottom-[40px]'
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
                                className='w-17'
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
                                className='w-17'
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
                                className='w-17'
                            />
                        </motion.div>
                    </div>
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
                            <Image
                                src={arrow_down}
                                alt='scroll down'
                                className=''
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero
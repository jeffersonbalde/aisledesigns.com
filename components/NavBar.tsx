import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

const NavBar = () => {
  return (
    <div className="max-w-[1320px] flex flex-row items-center justify-around m-auto my-7">
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
        >
            <h1 className='text-primary font-semibold text-2xl '>YSL Design</h1>
        </motion.div>
        
        <nav className='flex flex-row list-none uppercase gap-x-9 text-sm items-center font-semibold'>
            <Link
                href="#home"
                className='text-primary '
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
                href="#work"
                className='text-neutral-1 hover:text-neutral-2'
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
                className='text-neutral-1 hover:text-neutral-2'
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
/* eslint-disable react/jsx-key */
'use client'

import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { AnimatePresence, animate, motion } from "framer-motion"
import Image from 'next/image'
import logo from '../public/icon/logo.svg';
import styles from '../app/style.module.scss';

// const NavBar = () => {
//     const ref = useRef<string | any>("");

//     const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//         e.preventDefault();
//         const href = e.currentTarget.href;
//         const targetId = href.replace(/.*\#/, "");
//         const elem = document.getElementById(targetId);
//         elem?.scrollIntoView({
//             behavior: "smooth",
//         })

//         const links = document.querySelectorAll('.nav-link');
//         links.forEach((link) => {
//             link.classList.remove('active');
//         })
//         e.currentTarget.classList.add("active");
//     }

//   return (
//     <div className="max-w-[1320px] flex flex-row items-center justify-around m-auto sticky top-0 py-4 w-full z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-900">
//         <motion.div
//             initial={{opacity: 0}}
//             animate={{opacity: 1}}
//             transition={{duration: 0.5}}
//         >
//             <Image 
//                 src={logo}
//                 alt='AisleDesigns'
//             />
//         </motion.div>
        
//         <nav className='flex flex-row list-none uppercase gap-x-9 text-sm items-center font-semibold'>
//             <Link
//                 href="#home"
//                 className='text-neutral-1 hover:text-neutral-2 nav-link active nav-link'
//             >
//                 <motion.li
//                     initial={{ y: -10, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{duration: 0.1}}
//                 >
//                     Home
//                 </motion.li>
//             </Link>
//             <Link
//                 href="#works"
//                 className='text-neutral-1 hover:text-neutral-2 nav-link'
//                 onClick={handleScroll}  
//             >
//                 <motion.li
//                     initial={{ y: -10, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{duration: 0.2, delay: 0.2}}
//                 >
//                     Work
//                 </motion.li>
//             </Link>
//             <Link
//                 href="#about"
//                 className='text-neutral-1 hover:text-neutral-2 nav-link'
//             >
//                 <motion.li
//                     initial={{ y: -10, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{duration: 0.3, delay: 0.3}}
//                 >
//                     About
//                 </motion.li>
//             </Link>
//             <motion.li
//                     initial={{ y: -10, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{duration: 0.4, delay: 0.4}}
//                 >
//                 <Link
//                     href="#downloadcv"
//                     className='text-buttonColor border border-primary rounded-full bg-primary py-2 px-8 text-base hover:text-neutral-2'
//                 >
//                     Download CV
//                 </Link>
//             </motion.li>
//         </nav>
//     </div>
//   )
// }

// export default NavBar    
const NavLinks = [
    {title: "Home", href: '/'},
    {title: "About", href: '/'},
    {title: 'Works', href: '/'},
    {title: "Download CV", href: '/'}
]

const NavBar = () => {

    // const [open, setOpen] = useState(false);
    // const toggleMenu = () => {
    //     setOpen((prevOpen) => !prevOpen);
    // }

    const [isActive, setIsActive] = useState(false);

    const menuVars = {
        initial: {
            scaleY: 0
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],   
            },
        },
    }

    return (
    <header>
        <motion.nav 
            className="flex justify-between items-center py-7 px-4">
            <Link
                href="/"
            >
                <Image 
                    src={logo}
                    alt='Aisle Designs'
                    className='w-44'
                />
            </Link>
            <div 
                className={styles.button}
                onClick={() => {setIsActive(!isActive)}}
            >
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
            </div>
        </motion.nav>
        {/* <AnimatePresence>
            {open && (
                    <motion.div 
                        className="origin-top fixed left-0 top-0 w-full h-screen bg-slate-900 text-slate-100 py-7 px-4"
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <div className="flex h-full flex-col">
                            <p 
                                className='text-right cursor-pointer'
                                onClick={toggleMenu}    
                            >
                                close
                            </p>
                            <motion.div 
                                className="flex flex-col h-full justify-center items-center gap-4 "
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit='initial'
                            >
                                {NavLinks.map((link, index) => {
                                    return (
                                        <div className="overflow-hidden">
                                            <MobileNavLink key={index} title={link.title} href={link.href} />
                                        </div>
                                    )
                                })}
                            </motion.div>
                        </div>
                    </motion.div>
            )}
        </AnimatePresence> */}
    </header>
    )
}
interface MobileNavLinkProps {
    title: string;
    href: string;
  }
  
  const MobileNavLink: React.FC<MobileNavLinkProps> = ({ title, href }) => {
    return (
      <motion.div 
            className="text-4xl uppercase "
            variants={mobileLinkVars}
        >
        <Link href={href}>{title}</Link>
      </motion.div>
    );
  };

  const mobileLinkVars = {
    initial: {
        y: '30vh',
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1]
        }
    },
    open: {
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0, 0.55, 0.45, 1]
        }
    }
}

const containerVars = {
    initial: {
        transition: {
            staggerChildren: 0.09,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.09,
            staggerDirection: 1
        }
    }
}

export default NavBar;
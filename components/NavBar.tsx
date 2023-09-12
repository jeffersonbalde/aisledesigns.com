'use client'

import React, { useRef, useState } from 'react'
import { AnimatePresence, animate, motion } from "framer-motion"
import logo from '../public/icon/logo.svg';
import styles from '../app/style.module.scss';
import Nav from './Nav/index';
import Image from 'next/image';
import Link from 'next/link';

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
                    className='w-[155px] sml:w-40'
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
                href="#contact"
                className='text-slate-100 border border-primary rounded-full bg-primary py-2 px-6 text-base'
                onClick={handleScroll}
            >
                Contact
            </Link>
        </motion.li>
        </nav>
    
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{duration: 0.2, delay: 0.2}}
            className={`${styles.button} hidden mdl:hidden flex items-center justify-center`}
            onClick={() => {setIsActive(!isActive)}}
        >
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
        </motion.div>
        <AnimatePresence mode='wait'>
            {isActive && <Nav />}
        </AnimatePresence>
        </header>
    )
}

export default NavBar;


// import React, { useRef, useState } from 'react';
// import { AnimatePresence, motion } from "framer-motion";
// import logo from '../public/icon/logo.svg';
// import styles from '../app/style.module.scss';
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { menuSlide } from './animation';

// import Curve from './Nav/Curve/index'
// import Footer from './Nav/Footer/index'

// const NavBar = () => {
//   const [isActive, setIsActive] = useState(false);

//   const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     e.preventDefault();
//     const href = e.currentTarget.href;
//     const targetId = href.replace(/.*\#/, "");
//     const elem = document.getElementById(targetId);
//     elem?.scrollIntoView({
//       behavior: "smooth",
//     });

//     const links = document.querySelectorAll('.nav-link');
//     links.forEach((link) => {
//       link.classList.remove('active');
//     });
//     e.currentTarget.classList.add("active");
//   };

//   const navItems = [
//     {
//       title: "Home",
//       href: "/",
//     },
//     {
//       title: "Work",
//       href: "/work",
//     },
//     {
//       title: "About",
//       href: "/about",
//     },
//     {
//       title: "Contact",
//       href: "/contact",
//     },
//   ];

//   const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`;
//   const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`;

//   const curve = {
//     initial: {
//       d: initialPath,
//     },
//     enter: {
//       d: targetPath,
//       transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
//     },
//     exit: {
//       d: initialPath,
//       transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
//     },
//   };

//   const pathname = usePathname();
//   const [selectedIndicator, setSelectedIndicator] = useState(pathname);

//   return (
//     <header className='max-w-[1216px] flex flex-row justify-between items-center p-4 mdl:p-5 xl:px-0 m-auto sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30'>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Link href='/'>
//           <Image
//             src={logo}
//             alt='AisleDesigns'
//             className='w-48 sml:w-52'
//           />
//         </Link>
//       </motion.div>

//       <nav className='hidden mdl:flex flex-row list-none uppercase gap-x-9 text-sm items-center font-semibold'>
//         <Link
//           href="#home"
//           className='text-neutral-1 hover:text-neutral-2 nav-link active nav-link'
//         >
//           <motion.li
//             initial={{ y: -10, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.1 }}
//           >
//             Home
//           </motion.li>
//         </Link>
//         <Link
//           href="#works"
//           className='text-neutral-1 hover:text-neutral-2 nav-link'
//           onClick={handleScroll}
//         >
//           <motion.li
//             initial={{ y: -10, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.2, delay: 0.2 }}
//           >
//             Work
//           </motion.li>
//         </Link>
//         <Link
//           href="#about"
//           className='text-neutral-1 hover:text-neutral-2 nav-link'
//         >
//           <motion.li
//             initial={{ y: -10, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.3, delay: 0.3 }}
//           >
//             About
//           </motion.li>
//         </Link>
//         <motion.li
//           initial={{ y: -10, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.4, delay: 0.4 }}
//         >
//           <Link
//             href="#downloadcv"
//             className='text-slate-100 border border-primary rounded-full bg-primary py-2 px-6 text-base'
//           >
//             Download CV
//           </Link>
//         </motion.li>
//       </nav>

//       <motion.div
//         initial={{ y: -10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.2, delay: 0.2 }}
//         className={`${styles.button} mdl:hidden flex items-center justify-center`}
//         onClick={() => { setIsActive(!isActive) }}
//       >
//         <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
//       </motion.div>

//       <AnimatePresence mode='wait'>
//         {isActive && (
//           <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={`${styles.menu}`}>
//             <div className={styles.body}>
//               <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
//                 <div className={styles.header}>
//                   <p>Navigation</p>
//                 </div>
//                 {
//           navItems.map((data, index) => (
//             <Link key={index} href={data.href}>
//               <motion.li
//                 initial={{ y: -10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.1 }}
//               >
//                 {data.title}
//               </motion.li>
//             </Link>
//           ))
//         }
//               </div>
//               <motion.div
//                 initial={{ y: -10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.2, delay: 0.2 }}
//               >
//                 <Curve />
//               </motion.div>
//               <motion.div
//                 initial={{ y: -10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.4, delay: 0.4 }}
//               >
//                 <Footer />
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }

// export default NavBar;
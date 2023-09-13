'use client'

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const MobileComponent = dynamic(() => import('./About'));
const DesktopComponent = dynamic(() => import('./AboutDesktop'));

const AboutComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1071); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <MobileComponent /> : <DesktopComponent />}
    </div>
  );
};

export default AboutComponent;

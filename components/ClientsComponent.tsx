'use client'

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const MobileComponent = dynamic(() => import('./Clients'));
const DesktopComponent = dynamic(() => import('./ClientsDesktop'));

const ClientsComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
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

export default ClientsComponent;

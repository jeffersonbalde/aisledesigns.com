import Image from 'next/image';
import React from 'react';

import woop from '../public/logo/woop.svg';
import skooltek from '../public/logo/skooltek.svg';
import ed_folio from '../public/logo/ed_folio.svg';
import hooves from '../public/logo/hooves.svg';
import woopcolor from '../public/logo/woopcolor.svg';
import skooltekcolor from '../public/logo/skooltekcolor.svg';
import ed_foliocolor from '../public/logo/ed_foliocolor.svg';
import hoovescolor from '../public/logo/hoovescolor.svg';

interface ClientLogoProps {
  alt: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ alt }) => {
  let logoSrc = '';
  let logoColorSrc = '';

  switch (alt) {
    case 'Woop':
      logoSrc = woop;
      logoColorSrc = woopcolor;
      break;
    case 'SkoolTek':
      logoSrc = skooltek;
      logoColorSrc = skooltekcolor;
      break;
    case 'Ed Folio':
      logoSrc = ed_folio;
      logoColorSrc = ed_foliocolor;
      break;
    case 'Hooves':
      logoSrc = hooves;
      logoColorSrc = hoovescolor;
      break;
    default:
      break;
  }

  return (
    <div className="logo-wrapper">
      <Image src={logoSrc} alt={alt} className='w-[220px]'/>
      <div className="logo-color">
        <Image src={logoColorSrc} alt={alt} />
      </div>
    </div>
  );
};

const ClientsDesktop: React.FC = () => {
  return (
    <div className='flex flex-col m-auto max-w-[1116px] gap-24 mb-32 px-4 pt-28 xl:px-0 mt-16' id='clients'>
      <h3 className='text-neutral-2 font-light text-4xl'>
        Some of <span className='text-neutral-1 font-semibold'>the clients I have designed for </span>
      </h3>
      <div className='flex flex-row gap-6 justify-between items-center'>
        <ClientLogo alt='Woop'/>
        <ClientLogo alt='SkoolTek' />
        <ClientLogo alt='Ed Folio' />
        <ClientLogo alt='Hooves' />
      </div>
    </div>
  );
};

export default ClientsDesktop;

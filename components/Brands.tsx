import Image from 'next/image'
import React from 'react'
import woop_brand from '../public/logo/woop_brand.svg';
import skooltek_brand from '../public/logo/skooltek_brand.svg';
import ed_folio_brand from '../public/logo/ed_folio_brand.svg';
import hooves_brand from '../public/logo/hooves_brand.svg';
import optical_brand from '../public/logo/optical_brand.svg';
import JMM_brand from '../public/logo/JMM_brand.svg';
import cajeta_brand from '../public/logo/cajeta_brand.svg';
import special_brand from '../public/logo/special_brand.svg';
import sun_brand from '../public/logo/sun_brand.svg';
import convenience_brand from '../public/logo/convenience_brand.svg';
import budbud_brand from '../public/logo/budbud_brand.svg';
import bethany_brand from '../public/logo/bethany_brand.svg';

const Brands = () => {
  return (
    <div className='flex flex-col max-w-[1120px] m-auto px-4 py-16'> 
        <h1 className='text-neutral-2 font-normal text-base'>I have had the opportunity to work on various <span className='text-neutral-1 font-semibold'>Branding, Logo design, Web design</span> projects for both local 
            and international businesses. I have also gained experience in creating visually appealing social media 
            posts and other graphics that effectively communicate brand messages. Through my work as a freelancer 
            and through local marketing, I have honed my abilities to deliver high-quality designs that meet my 
            clients needs and exceed their expectations.
        </h1>
        <div className="flex flex-col items-center justify-center text-center">
            <h1 className='font-light text-neutral-1 text-xl mt-16'>Some Logo <span className='text-primary font-semibold'> Brand Designs</span> that I’ve worked</h1>
            <div className="flex flex-row flex-wrap gap-9 justify-center items-center mt-16 gap-y-12">
                <Image 
                    src={woop_brand}
                    alt='Woop'
                    className='w-36'
                />
                <Image 
                    src={skooltek_brand}
                    alt='SkoolTek'
                    className='w-36'
                />
                <Image 
                    src={ed_folio_brand}
                    alt='Ed Folio'
                    className='w-36'
                />
                <Image 
                    src={hooves_brand}
                    alt='HOOVES'
                    className='w-36'
                />
                <Image 
                    src={optical_brand}
                    alt='RICO OPTICAL'
                    className='w-80'
                />
                <Image 
                    src={JMM_brand}
                    alt='JMM MARKETING BAKERY PRODUCTS'
                    className='w-44'
                />
                <Image 
                    src={cajeta_brand}
                    alt='CAJETA LAW OFFICE'
                    className='w-36'
                />
                <Image 
                    src={special_brand}
                    alt='SPECIAL BUTCHERONZ'
                    className='w-36'
                />
                <Image 
                    src={sun_brand}
                    alt='SUN AGRIVET & MERCHANDISE'
                    className='w-36'
                />
                <Image 
                    src={convenience_brand}
                    alt='CONVENIENCE STORE RESTOBAR'
                    className='w-36'
                />
                <Image 
                    src={budbud_brand}
                    alt='BUDBUD IN 21 STREET'
                    className='w-36'
                />
                <Image 
                    src={bethany_brand}
                    alt='BETHANY BAPTIST ACADEMY ILIGAN'
                    className='w-36'
                />
            </div>
        </div>
    </div>
  )
}

export default Brands
import React from 'react';
import AnimatedBar from './ui/AnimatedBar'; 
import FooterButtons from './ui/FooterButtons';

const Footer = () => {
  return (
    <div className='w-full bg-black mt-[92px]'>
      <div className='mx-[clamp(12px,11.75vw,300px)] font-inter text-white flex justify-between items-center'>
        <span className='text-[8px] xs:text-[10px] md:text-[12px] xl:text-[14px]'>Copyright © 2024 Lucas Lobell</span>
        <FooterButtons />
      </div>
      <AnimatedBar />
    </div>
  );
};

export default Footer;

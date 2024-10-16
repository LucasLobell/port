import React from 'react';
import AnimatedBar from './ui/AnimatedBar'; 

const Footer = () => {
  return (
    <div className='w-full bg-black'>
      <div className='mx-[clamp(12px,11.75vw,300px)] font-inter text-white'>
        <span className='text-[14px]'>Copyright © 2024 Lucas Lobell</span>
      </div>
      <AnimatedBar />
    </div>
  );
};

export default Footer;

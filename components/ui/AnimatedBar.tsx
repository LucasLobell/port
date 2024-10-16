"use client";

import gsap from 'gsap';
import React, { useEffect } from 'react';

const AnimatedBar = () => {
    useEffect(() => {
      gsap.to('.footer-gradient-bar', {
        duration: 12,
        repeat: -1,
        backgroundPosition: '200% 0',
        ease: 'linear',
      });
    }, []);
  
    return (
      <div className="relative w-full h-[8px] sm:h-[10px] lg:h-[12px] 2xl:h-[15px] opacity-[0.5] mt-[35px] overflow-hidden">
        <div className="absolute inset-0 bg-black rounded-t-[6px] sm:rounded-t-[8px] lg:rounded-t-[10px] opacity-25" />
        <div
          className="footer-gradient-bar w-full h-full rounded-t-[6px] sm:rounded-t-[8px] lg:rounded-t-[10px] rounded-b-none"
          style={{
            background: 'linear-gradient(95deg, #9845e8, #33d2ff 40%, #fbf2b1 65%, #f4426c 75%, #dd5789, #9845e8)',
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 0%',
          }}
        />
      </div>
    );
  };
  
  export default AnimatedBar;
  
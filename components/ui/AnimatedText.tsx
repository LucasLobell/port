"use client";

import gsap from 'gsap';
import React, { useEffect } from 'react';

const AnimatedText = () => {
  useEffect(() => {
    gsap.to('.gradient-text', {
      duration: 10,
      repeat: -1, // Infinite loop
      backgroundPosition: '200% 0', // Gradually move the gradient
      ease: 'linear',
    });
  }, []);
  
  return (
    <div 
      className="w-fit text-[96px] font-medium font-poppins text-transparent bg-clip-text gradient-text mt-[31px]" 
      style={{ 
        background: 'linear-gradient(89.81deg, #9845e8, #33d2ff, #dd5789, #9845e8)', // Gradient for text
        backgroundSize: '200% 200%', // Make the background twice the size of the element to create the animation effect
        backgroundPosition: '0% 0%', // Initial position of the gradient
        WebkitBackgroundClip: 'text', // Necessary for background-clip to work in Webkit browsers (like Chrome)
        WebkitTextFillColor: 'transparent' // Ensures text color is transparent to show the background
      }}>
      Lucas Lobell
    </div>
  );
};

export default AnimatedText;

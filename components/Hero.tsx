import gsap from 'gsap';
import React, { useEffect } from 'react'
import AnimatedText from './ui/AnimatedText';
import Image from 'next/image';
import HeroButtons from './ui/HeroButtons';

const Hero = () => {
    
  
  return (
    <div className='bg-gray h-[655px]'>
      <div className='mx-[clamp(12px,11.75vw,300px)] flex flex-col'>
        <div className='text-white font-inter text-[16px] mt-[73px]'>
          {`Hey, I'm`}
        </div>
        <AnimatedText />
        <div className='text-[18px] font-inter text-whitesmoke text-justify mt-[-7px]'>
          {`I'm a Web Developer based in Panambi, Brasil and also an Internet Systems student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have studied Web Development for about 2 years now, but really dove into it around half a year ago. I have also started freelancing recently while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge mainly in Full-Stack/Front-End Web Development using technologies such as Next.js, React.js, Node.js, etc. `}
        </div>
        <HeroButtons />
      </div>
    </div>
  )
}

export default Hero
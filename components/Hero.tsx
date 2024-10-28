import React from 'react'
import AnimatedText from './ui/AnimatedText';
import HeroButtons from './ui/HeroButtons';
import { useTranslations } from 'next-intl';

const Hero = () => {

  const t = useTranslations('Hero');

  return (
    <div className='bg-gray h-[560px] lg:h-[600px] 2xl:h-[655px]'>
      <div className='mx-[clamp(12px,11.75vw,300px)] flex flex-col'>
        <div className='text-white font-inter text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] mt-[35px] md:mt-[60px] lg:mt-[65px] 2xl:mt-[73px]'>
          {`Hey, I'm`}
        </div>
        <AnimatedText />
        <div className='text-[9px] xs:text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] leading-[12px] xs:leading-[16px] md:leading-[20px] lg:leading-[24px] font-inter text-whitesmoke text-justify mt-[8px] 2xs:mt-[26px] xs:mt-[20px] md:mt-[10px] lg:mt-[2px] 2xl:mt-[-7px]'>
          {t('description')}
        </div>
        <HeroButtons />
      </div>
    </div>
  )
}

export default Hero
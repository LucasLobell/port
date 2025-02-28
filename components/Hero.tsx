import React from 'react'
import AnimatedText from './ui/AnimatedText';
import HeroButtons from './ui/HeroButtons';
import { useTranslations } from 'next-intl';

const Hero = () => {

  const t = useTranslations('Hero');

const description = t("description");

  return (
    <div className='bg-gray h-[520px] xs:h-[560px] lg:h-[600px] 2xl:h-[655px]'>
      <div className='mx-[clamp(12px,11.75vw,300px)] flex flex-col'>
        <div className='text-white font-inter text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] mt-[35px] md:mt-[60px] lg:mt-[65px] 2xl:mt-[73px]'>
          {t('greeting')}
        <div className='text-[9px] xs:text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] leading-[12px] xs:leading-[16px] md:leading-[20px] lg:leading-[24px] font-inter text-whitesmoke text-justify mt-[8px] 2xs:mt-[26px] xs:mt-[20px] md:mt-[10px] lg:mt-[2px] 2xl:mt-[-7px]'>
        {description.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        </div>
        <HeroButtons />
      </div>
      </div>
    </div>
  )
}

export default Hero
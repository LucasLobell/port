import React from 'react';
import ExperienceList from './ui/ExperienceList';

const Resume = () => {
  return (
    <div className='mx-[clamp(12px,11.75vw,300px)] font-inter mt-[60px] xs:mt-[64px] sm:mt-[68px] md:mt-[74px] lg:mt-[80px] xl:mt-[86px] 2xl:mt-[92px] flex flex-row justify-between gap-[80px]' id='Resume'>
      <ExperienceList />
    </div>
  );
};

export default Resume;

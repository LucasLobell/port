import React from 'react';
import ExperienceList from './ui/ExperienceList';
import EducationList from './ui/EducationList';

const Resume = () => {
  return (
    <div className='mx-[clamp(12px,11.75vw,300px)] font-inter' id='Resume'>
      <ExperienceList />
      <hr className="mt-[60px] xs:mt-[64px] sm:mt-[68px] md:mt-[74px] lg:mt-[80px] xl:mt-[86px] 2xl:mt-[92px] w-full border-[#c6c6c6] h-[0.6px]" />
      <EducationList />
      <hr className="mt-[60px] xs:mt-[64px] sm:mt-[68px] md:mt-[74px] lg:mt-[80px] xl:mt-[86px] 2xl:mt-[92px] w-full border-[#c6c6c6] h-[0.6px]" />
    </div>
  );
};

export default Resume;

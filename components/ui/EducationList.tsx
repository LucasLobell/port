"use client";

import React, { useState } from 'react';

interface Education {
  title: string;
  company: string;
  dates: string;
  location: string;
  responsibilities: string[];
}

const educations: Record<string, Education> = {
  currently: {
    title: 'Web Developer (Remote)',
    company: 'Currently',
    dates: 'Jun 2023 - Present',
    location: 'BR - Panambi',
    responsibilities: [
      '- Developing screens and UI components for the web application using React and Tailwind.',
      '- Fixing UI issues and integrating backend APIs with Redux Saga.',
    ],
  },
  logica: {
    title: 'Web Developer',
    company: 'University',
    dates: 'Jan 2022 - May 2023',
    location: 'BR - Panambi',
    responsibilities: [
      '- Worked on various projects using React and Tailwind.',
      '- Collaborated with designers and backend developers to improve the user experience.',
    ],
  },
  cipex: {
    title: 'English Teacher',
    company: 'Technician',
    dates: 'Jan 2022 - Feb 2023',
    location: 'BR - Panambi',
    responsibilities: [
      '- Taught English language courses to students of different age groups.',
      '- Developed lesson plans and materials to enhance learning.',
    ],
  },
};

const EducationList = () => {
  const [activeExperience, setActiveExperience] = useState<keyof typeof educations>('currently');

  const handleExperienceClick = (key: keyof typeof educations) => {
    setActiveExperience(key);
  };

  return (
    <div className='flex flex-row justify-between gap-[40px] xs:gap-[50px] md:gap-[60px] lg:gap-[70px] 2xl:gap-[80px] mt-[60px] xs:mt-[64px] sm:mt-[68px] md:mt-[74px] lg:mt-[80px] xl:mt-[86px] 2xl:mt-[92px]'>
      <div className='text-white w-[50px] xs:w-[80px] md:w-[140px] lg:w-[200px]'>
      <div className='font-inter text-[12px] xs:text-[13px] md:text-[14px] lg:text-[16px] 2xl:text-[18px] uppercase'>Education</div>
        <div className='flex flex-col mt-[33px] gap-[30px] xs:gap-[20px] md:gap-[10px] lg:gap-0 border-l-[1px] border-l-gray text-[10px] xs:text-[12px] md:text-[14px] lg:text-[16px] 2xl:text-[18px] font-inter'>
          {Object.keys(educations).map((key) => (
            <div
              key={key}
              className={`py-[16px] pl-[12px] xs:pl-[18px] md:pl-[24px] lg:pl-[36px] pr-[65px] xs:pr-[80px] md:pr-[70px] xl:pr-[80px] cursor-pointer ${activeExperience === key ? 'bg-gray border-l-[1px] border-l-white' : ''}`}
              onClick={() => handleExperienceClick(key as keyof typeof educations)}
            >
              {educations[key].company}
            </div>
          ))}
        </div>
      </div>
      <div className='mt-[55px] flex-1'>
      <div className='flex justify-between w-full mb-[26px] font-inter items-center'>
      <span className='text-white text-[10px] xs:text-[12px] md:text-[16px] lg:text-[20px] 2xl:text-[24px]'>{educations[activeExperience].title}</span>
      <span className='text-[#bababa] text-[9px] xs:text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[10px] xs:leading-[12px] md:leading-[16px] lg:leading-[20px] 2xl:leading-[24px]'>{educations[activeExperience].dates}</span>
        </div>
        <div className='flex flex-col justify-between gap-[26px] font-inter'>
          <span className='text-[#6cace4] text-[8px] xs:text-[9px] md:text-[10px] lg:text-[12px] 2xl:text-[14px] leading-[10px] xs:leading-[12px] md:leading-[16px] lg:leading-[20px] 2xl:leading-[24px]'>{educations[activeExperience].location}</span>
          {educations[activeExperience].responsibilities.map((resp, index) => (
             <span key={index} className='text-[#bababa] text-[10px] xs:text-[11px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[10px] xs:leading-[12px] md:leading-[16px] lg:leading-[20px] 2xl:leading-[24px]'>{resp}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationList;

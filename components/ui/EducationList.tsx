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
    <div className='flex flex-row justify-between gap-[80px] mt-[60px] xs:mt-[64px] sm:mt-[68px] md:mt-[74px] lg:mt-[80px] xl:mt-[86px] 2xl:mt-[92px]'>
      <div className='text-white w-[200px]'>
        <div>Experience</div>
        <div className='flex flex-col mt-[33px] border-l-[1px] border-l-gray'>
          {Object.keys(educations).map((key) => (
            <div
              key={key}
              className={`py-[16px] pl-[36px] pr-[80px] cursor-pointer ${activeExperience === key ? 'bg-gray border-l-[1px] border-l-white' : ''}`}
              onClick={() => handleExperienceClick(key as keyof typeof educations)}
            >
              {educations[key].company}
            </div>
          ))}
        </div>
      </div>
      <div className='mt-[55px]'>
        <div className='flex justify-between w-[800px] mb-[26px]'>
          <span className='text-white'>{educations[activeExperience].title}</span>
          <span className='text-[#bababa]'>{educations[activeExperience].dates}</span>
        </div>
        <div className='flex flex-col justify-between gap-[26px]'>
          <span className='text-[#6cace4]'>{educations[activeExperience].location}</span>
          {educations[activeExperience].responsibilities.map((resp, index) => (
            <span key={index} className='text-[#bababa]'>{resp}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationList;

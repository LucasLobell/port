"use client";

import React, { useState } from 'react';

interface Experience {
  title: string;
  company: string;
  dates: string;
  location: string;
  responsibilities: string[];
}

const experiences: Record<string, Experience> = {
  currently: {
    title: 'Web Developer (Remote)',
    company: 'Lógica',
    dates: 'Jun 2023 - Present',
    location: 'BR - Panambi',
    responsibilities: [
      '- Developing screens and UI components for the web application using React and Tailwind.',
      '- Fixing UI issues and integrating backend APIs with Redux Saga.',
    ],
  },
  logica: {
    title: 'Web Developer',
    company: 'Lógica',
    dates: 'Jan 2022 - May 2023',
    location: 'BR - Panambi',
    responsibilities: [
      '- Worked on various projects using React and Tailwind.',
      '- Collaborated with designers and backend developers to improve the user experience.',
    ],
  },
  cipex: {
    title: 'English Teacher',
    company: 'CIPEX',
    dates: 'Jan 2022 - Feb 2023',
    location: 'BR - Panambi',
    responsibilities: [
      '- Taught English language courses to students of different age groups.',
      '- Developed lesson plans and materials to enhance learning.',
    ],
  },
};

const ExperienceList = () => {
  const [activeExperience, setActiveExperience] = useState<keyof typeof experiences>('currently');

  const handleExperienceClick = (key: keyof typeof experiences) => {
    setActiveExperience(key);
  };

  return (
    <div className='flex flex-row justify-between gap-[80px]'>
      <div className='text-white w-[200px]'>
        <div>Experience</div>
        <div className='flex flex-col mt-[33px] border-l-[1px] border-l-gray'>
          {Object.keys(experiences).map((key) => (
            <div
              key={key}
              className={`py-[16px] pl-[36px] pr-[80px] cursor-pointer ${activeExperience === key ? 'bg-gray border-l-[1px] border-l-white' : ''}`}
              onClick={() => handleExperienceClick(key as keyof typeof experiences)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </div>
          ))}
        </div>
      </div>
      <div className='mt-[55px]'>
        <div className='flex justify-between w-[800px] mb-[26px]'>
          <span className='text-white'>{experiences[activeExperience].title}</span>
          <span className='text-[#bababa]'>{experiences[activeExperience].dates}</span>
        </div>
        <div className='flex flex-col justify-between gap-[26px]'>
          <span className='text-[#6cace4]'>{experiences[activeExperience].location}</span>
          {experiences[activeExperience].responsibilities.map((resp, index) => (
            <span key={index} className='text-[#bababa]'>{resp}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;

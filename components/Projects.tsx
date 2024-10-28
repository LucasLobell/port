import Image from "next/image";
import React from "react";
import FeaturedProjects from "./ui/FeaturedProjects";
import LocalizedLink from "./ui/LocalizedLink"; // Import the LocalizedLink component

const Projects = () => {
  return (
    <div className="mx-[clamp(12px,11.75vw,300px)] font-inter mt-[45px] md:mt-[50px] lg:mt-[60px] xl:mt-[70px] 2xl:mt-[75px]" id="Projects">
      <div className="w-full justify-between flex flex-row">
        <span className="uppercase text-[12px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px] text-white">
          Featured Projects
        </span>
        <LocalizedLink /> {/* Use the LocalizedLink component here */}
      </div>
      <FeaturedProjects />
      <hr className="mt-[60px] xs:mt-[64px] sm:mt-[68px] md:mt-[74px] lg:mt-[80px] xl:mt-[86px] 2xl:mt-[92px] w-full border-[#c6c6c6] h-[0.6px]" />
    </div>
  );
};

export default Projects;

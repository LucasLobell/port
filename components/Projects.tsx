import Image from "next/image";
import Link from "next/link";
import React from "react";
import FeaturedProjects from "./ui/FeaturedProjects";

const Projects = () => {
  return (
    <div className="mx-[clamp(12px,11.75vw,300px)] font-inter mt-[45px] md:mt-[50px] lg:mt-[60px] xl:mt-[70px] 2xl:mt-[75px]" id="Projects">
      <div className="w-full justify-between flex flex-row">
        <span className="uppercase 2xl:text-[18px] text-white">
          Featured Projects
        </span>
        <Link
          href="/projetos"
          className="uppercase 2xl:text-[14px] text-white text-opacity-75 hover:underline"
        >
          More Projects
        </Link>
      </div>
      <FeaturedProjects />
      <hr className="mt-[92px] w-full border-[#c6c6c6] h-[0.6px]" />
    </div>
  );
};

export default Projects;

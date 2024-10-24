import Image from "next/image";
import React from "react";

interface Project {
  image: string;
  title: string;
  description: string;
  stack: string;
  demoLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    image: "/white.png",
    title: "WNL Digital",
    description: "Proxy provider website including authentication, dashboard, and dynamic features",
    stack: "React - Bootstrap - Styled Components",
    demoLink: "/link.svg",
    githubLink: "/github2.svg",
  },
  {
    image: "/red.png",
    title: "School Management",
    description: "Site for a BSC based coin called $AAPElasdlasdasj asdaç",
    stack: "Vue - Nuxt - Netlify",
    demoLink: "/link.svg",
    githubLink: "",
  },
  {
    image: "/blue.png",
    title: "FoodDelivery",
    description: "Sidechain explorer open source project (block explorer) for transactions.",
    stack: "React - TailwindCSS - Context API",
    demoLink: "/link.svg",
    githubLink: "https://www.github.com",
  },
];

const ProjectCard = ({ image, title, description, stack, demoLink, githubLink }: Project) => {
  return (
    <div className="w-full md:w-[190px] lg:w-[250px] xl:w-[315px] 2xl:w-[344px]">
      <Image
        className="flex w-full h-[200px] 2xs:h-[225px] xs:h-[250px] sm:h-[275px] md:h-[131px] lg:h-[172px] xl:h-[217px] 2xl:h-[237px]"
        src={image}
        alt=""
        width={344}
        height={237}
      />
      <div className="mt-[12px] 2xs:mt-[14px] xs:mt-[16px] sm:mt-[18px] md:mt-[20px] lg:mt-[22px] xl:mt-[24px] 2xl:mt-[26px]">
        <div className="flex flex-col justify-between gap-[30px]">
          <span className="text-[16px] xs:text-[18px] lg:text-[22px] 2xl:text-[24px] text-white">{title}</span>
          <span className="text-[10px] xs:text-[12px] xl:text-[14px] text-[#c4c4c4]">{description}</span>
          <span className="text-[10px] xs:text-[12px] xl:text-[14px] text-[#6cace4]">{stack}</span>
        </div>
        <div className="text-white font-inter w-full md:w-[221px] flex flex-row justify-between items-center mt-[20px] sm:mt-[22px] md:mt-[25px] xl:mt-[28px] 2xl:mt-[30px]">
          <button className="relative inline-flex w-[125px] h-[35px] sm:w-[130px] sm:h-[38px] md:w-[145px] md:h-[45px] lg:w-[160px] lg:h-[48px] 2xl:w-[165px] 2xl:h-[55px] overflow-hidden rounded p-[2px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9358F7_0%,#10D7E2_50%,#9358F7_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-black backdrop-blur-3xl">
              <Image className="h-[12px] w-[10px] md:h-[16px] md:w-[14px] 2xl:h-[20px] 2xl:w-[18px]" src={demoLink} alt="" width={20} height={18} />
              <span className="ml-[10px]">Live demo</span>
            </div>
          </button>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Image src="/github2.svg" alt="GitHub" width={36} height={36} />
          </a>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-[30px] md:mt-[36px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[51px] gap-[45px] md::gap-[6px] xl:gap-[20px]">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default FeaturedProjects;

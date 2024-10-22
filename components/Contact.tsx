import React from "react";
import ContactButtons from "./ui/ContactButtons";

const Contact = () => {
  return (
    <div className="mx-[clamp(12px,11.75vw,300px)]" id="Contact">
      <div className=" font-inter flex flex-row justify-between text-white items-center md:items-start gap-[50px] md:gap-[70px] lg:gap-[80px] 2xl:gap-[100px] mt-[60px] xs:mt-[64px] sm:mt-[68px] md:mt-[74px] lg:mt-[80px] xl:mt-[86px] 2xl:mt-[92px] ">
        <div className="flex flex-col justify-between max-w-[350px] gap-[24px]">
          <div className='font-inter text-[12px] xs:text-[13px] md:text-[14px] lg:text-[16px] 2xl:text-[18px] uppercase'>Contact</div>
          <div className="text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] leading-[10px] xs:leading-[12px] md:leading-[16px] lg:leading-[20px] 2xl:leading-[24px]">
            Please feel free to contact me to discuss any opportunities/projects
            that you feel I could be of help and I will gladly respond. Hope we
            can achieve great things together!
          </div>
        </div>
        <div>
          <ContactButtons />
        </div>
      </div>
      <hr className="mt-[60px] xs:mt-[64px] sm:mt-[68px] md:mt-[74px] lg:mt-[80px] xl:mt-[86px] 2xl:mt-[92px] w-full border-[#c6c6c6] h-[0.6px]" />
    </div>
  );
};

export default Contact;

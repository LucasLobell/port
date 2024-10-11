import Image from "next/image";
import React from "react";

const HeroButtons = () => {
  return (
    <div className="flex justify-between items-center mt-[50px] md:mt-[105px] 2xl:mt-[121px]">
      <div className="flex flex-col md:flex-row w-[76.85%] justify-between font-inter text-white text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] gap-[5px]">
        <button className="relative mb-4 inline-flex w-[125px] h-[35px] sm:w-[130px] sm:h-[38px] md:w-[145px] md:h-[45px] lg:w-[160px] lg:h-[48px] 2xl:w-[204px] 2xl:h-[59px] overflow-hidden rounded p-[2px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9358F7_0%,#10D7E2_50%,#9358F7_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-gray backdrop-blur-3xl">
            <Image className="h-[12px] w-[10px] md:h-[16px] md:w-[14px] 2xl:h-[20px] 2xl:w-[18px]" src="/Email.svg" alt="" width={20} height={18} />
            <span className="ml-[10px] ">Send an email</span>
          </div>
        </button>
        <button className="relative mb-4 inline-flex w-[125px] h-[35px] sm:w-[130px] sm:h-[38px] md:w-[145px] md:h-[45px] lg:w-[160px] lg:h-[48px] 2xl:w-[204px] 2xl:h-[59px] overflow-hidden rounded p-[2px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6964DE_0%,#FCA6E9_50%,#6964DE_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-gray backdrop-blur-3xl">
            <Image className="h-[12px] w-[10px] md:h-[16px] md:w-[14px] 2xl:h-[20px] 2xl:w-[18px]" src="/Linkedin.svg" alt="" width={20} height={18} />
            <span className="ml-[10px] ">Linkedin</span>
          </div>
        </button>
        <button className="relative mb-4 inline-flex w-[125px] h-[35px] sm:w-[130px] sm:h-[38px] md:w-[145px] md:h-[45px] lg:w-[160px] lg:h-[48px] 2xl:w-[204px] 2xl:h-[59px] overflow-hidden rounded p-[2px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F4426C_0%,#FBF2B1_50%,#F4426C_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-gray backdrop-blur-3xl">
            <Image className="h-[12px] w-[10px] md:h-[16px] md:w-[14px] 2xl:h-[20px] 2xl:w-[18px]" src="/Whatsapp.svg" alt="" width={20} height={18} />
            <span className="ml-[10px] ">Whatsapp</span>
          </div>
        </button>
        <button className="relative mb-4 inline-flex w-[125px] h-[35px] sm:w-[130px] sm:h-[38px] md:w-[145px] md:h-[45px] lg:w-[160px] lg:h-[48px] 2xl:w-[204px] 2xl:h-[59px] overflow-hidden rounded p-[2px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D24074_0%,#6518B4_50%,#D24074_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-gray backdrop-blur-3xl">
            <Image className="h-[12px] w-[10px] md:h-[16px] md:w-[14px] 2xl:h-[20px] 2xl:w-[18px]" src="/Github.svg" alt="" width={20} height={18} />
            <span className="ml-[10px] ">Github</span>
          </div>
        </button>
      </div>
      <div className="mt-[-10px]">
        <Image
          src="/Line 5.svg"
          alt="Line"
          width={4}
          height={4}
          className="md:w-[5px] xl:w-[6px]"
        />
      </div>
    </div>
  );
};

export default HeroButtons;

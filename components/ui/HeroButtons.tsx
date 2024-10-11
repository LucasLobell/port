import Image from "next/image";
import React from "react";

const HeroButtons = () => {
  return (
    <div className="flex flex-row w-[76.85%] justify-between font-inter text-white mt-[121px] text-[16px]">
      <button className="relative inline-flex w-[204px] h-[59px] overflow-hidden rounded p-[2px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9358F7_0%,#10D7E2_50%,#9358F7_100%)]" />
        <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-gray backdrop-blur-3xl">
          <Image className="h-[20px] w-[18px]" src="/Email.svg" alt="" width={20} height={18} />
          <span className="ml-[10px] ">Send an email</span>
        </div>
      </button>
    </div>
  );
};

export default HeroButtons;

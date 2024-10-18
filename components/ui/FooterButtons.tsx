"use client";

import Image from "next/image";
import React, { useState } from "react";

const FooterButtons = () => {
  const [activeButton, setActiveButton] = useState<null | string>(null);

  const handleButtonClick = (platform: string, url: string) => {
    setActiveButton(platform);
    window.open(url, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setActiveButton(null);
    }, 5000);
  };

  const buttonClass =
    "relative inline-flex w-[24px] h-[24px] xs:h-[26px] xs:w-[26px] sm:w-[30px] sm:h-[30px] md:w-[34px] md:h-[34px] lg:w-[38px] lg:h-[38px] 2xl:w-[42px] 2xl:h-[42px] overflow-hidden rounded p-[2px] focus:outline-none";
    
  const borderClass = "border border-[#b5b5b5]";

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-row justify-between font-inter text-white text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] gap-[16px]">
        <button
          onClick={() => handleButtonClick("instagram", "https://www.instagram.com")}
          className={`${buttonClass} ${activeButton === "instagram" ? borderClass : ""}`}
        >
          <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9358F7_0%,#10D7E2_50%,#9358F7_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-gray backdrop-blur-3xl">
            <Image
              className="h-[15px] w-[13px] xs:h-[17px] xs:w-[15px] md:h-[21px] md:w-[19px] 2xl:h-[25px] 2xl:w-[23px]"
              src="/Instagram.svg"
              alt=""
              width={25}
              height={23}
            />
          </div>
        </button>

        <button
          onClick={() => handleButtonClick("linkedin", "https://www.linkedin.com")}
          className={`${buttonClass} ${activeButton === "linkedin" ? borderClass : ""}`}
        >
          <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6964DE_0%,#FCA6E9_50%,#6964DE_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-gray backdrop-blur-3xl">
            <Image
              className="h-[10px] w-[8px] xs:h-[12px] xs:w-[10px] md:h-[16px] md:w-[14px] 2xl:h-[20px] 2xl:w-[18px]"
              src="/Linkedin.svg"
              alt=""
              width={20}
              height={18}
            />
          </div>
        </button>

        <button
          onClick={() => handleButtonClick("whatsapp", "https://www.whatsapp.com")}
          className={`${buttonClass} ${activeButton === "whatsapp" ? borderClass : ""}`}
        >
          <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F4426C_0%,#FBF2B1_50%,#F4426C_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-gray backdrop-blur-3xl">
            <Image
              className="h-[10px] w-[8px] xs:h-[12px] xs:w-[10px] md:h-[16px] md:w-[14px] 2xl:h-[20px] 2xl:w-[18px]"
              src="/Whatsapp.svg"
              alt=""
              width={20}
              height={18}
            />
          </div>
        </button>

        <button
          onClick={() => handleButtonClick("github", "https://www.github.com")}
          className={`${buttonClass} ${activeButton === "github" ? borderClass : ""}`}
        >
          <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D24074_0%,#6518B4_50%,#D24074_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-gray backdrop-blur-3xl">
            <Image
              className="h-[10px] w-[8px] xs:h-[12px] xs:w-[10px] md:h-[16px] md:w-[14px] 2xl:h-[20px] 2xl:w-[18px]"
              src="/Github.svg"
              alt=""
              width={20}
              height={18}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FooterButtons;

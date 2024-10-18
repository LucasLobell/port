"use client";

import Image from "next/image";
import React, { useState } from "react";

const ContactButtons = () => {
  const [activeButton, setActiveButton] = useState<null | string>(null);

  const buttonClass =
    "relative inline-flex w-[60px] h-[25px] sm:w-[75px] sm:h-[28px] md:w-[100px] md:h-[32px] lg:w-[125px] lg:h-[36px] 2xl:w-[150px] 2xl:h-[42px] overflow-hidden rounded p-[2px] focus:outline-none";
  
  const logoClass = "h-[10px] w-[8px] md:h-[14px] md:w-[12px] 2xl:h-[18px] 2xl:w-[16px]"

  const borderClass = "border border-[#b5b5b5]";

  const handleButtonClick = (platform: string, url: string) => {
    setActiveButton(platform);
    window.open(url, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setActiveButton(null);
    }, 5000);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col md:flex-row justify-between font-inter text-white text-[8px] sm:text-[9px] md:text-[10px] lg:text-[12px] 2xl:text-[14px] gap-[5px]">
        <button
          onClick={() => handleButtonClick("Email", "mailto:youremail@example.com")}
          className={`${buttonClass} ${activeButton === "Email" ? borderClass : ""}`}
        >
          <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9358F7_0%,#10D7E2_50%,#9358F7_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-gray backdrop-blur-3xl">
            <Image
              className={logoClass}
              src="/Email.svg"
              alt="Email"
              width={20}
              height={18}
            />
            <span className="ml-[10px]">Send an email</span>
          </div>
        </button>

        <button
          onClick={() => handleButtonClick("Linkedin", "https://www.linkedin.com")}
          className={`${buttonClass} ${activeButton === "Linkedin" ? borderClass : ""}`}
        >
          <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6964DE_0%,#FCA6E9_50%,#6964DE_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-gray backdrop-blur-3xl">
            <Image
              className={logoClass}
              src="/Linkedin.svg"
              alt="Linkedin"
              width={20}
              height={18}
            />
            <span className="ml-[10px]">Linkedin</span>
          </div>
        </button>

        <button
          onClick={() => handleButtonClick("Whatsapp", "https://wa.me/yourwhatsapplink")}
          className={`${buttonClass} ${activeButton === "Whatsapp" ? borderClass : ""}`}
        >
          <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F4426C_0%,#FBF2B1_50%,#F4426C_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-gray backdrop-blur-3xl">
            <Image
              className={logoClass}
              src="/Whatsapp.svg"
              alt="Whatsapp"
              width={20}
              height={18}
            />
            <span className="ml-[10px]">Whatsapp</span>
          </div>
        </button>

        <button
          onClick={() => handleButtonClick("Github", "https://www.github.com")}
          className={`${buttonClass} ${activeButton === "Github" ? borderClass : ""}`}
        >
          <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D24074_0%,#6518B4_50%,#D24074_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-gray backdrop-blur-3xl">
            <Image
              className={logoClass}
              src="/Github.svg"
              alt="Github"
              width={20}
              height={18}
            />
            <span className="ml-[10px]">Github</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContactButtons;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-gray text-white h-[70px] md:h-[80px] lg:h-[90px] xl:h-[105px]">
      <div className="mx-[clamp(12px,11.75vw,300px)] flex flex-row justify-between items-center h-full font-inter">
        <Link
          href="/"
          className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]"
        >
          LL
        </Link>
        <div className="flex flex-row gap-[30px] items-center text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
          <Link href="/#Projects">Projects</Link>
          <Link href="/#Resume">Resume</Link>
          <Link href="/#Contact">Contact</Link>
          <Image
            src="/group 23.svg"
            alt=""
            width={40}
            height={40}
            className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px] 2xl:w-[44px] 2xl:h-[44px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

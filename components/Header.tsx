import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-gray text-white h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] xl:h-[105px]">
      <div className="mx-[clamp(12px,11.75vw,300px)] flex flex-row justify-between items-center h-full font-inter">
        <Link
          href="/"
          className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
        >
          LL
        </Link>
        <div className="flex flex-row gap-[30px] items-center text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]">
          <Link href="/#Projects">Projects</Link>
          <Link href="/#Resume">Resume</Link>
          <Link href="/#Contact">Contact</Link>
          <Image
            src="/group 23.svg"
            alt=""
            width={40}
            height={40}
            className="w-[24px] h-[28px] m4:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

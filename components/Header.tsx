import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full relative h-[105px] text-left text-xs text-white font-inter">
      <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-gray w-[1440px] h-[105px]" />
      <div className="absolute top-[34px] left-[calc(50%_+_499px)] w-[41px] h-[34.8px]">
        <div className="absolute top-[0px] left-[calc(50%_-_6.5px)]">en</div>
        <div className="absolute top-[19px] left-[calc(50%_+_8.5px)]">pt</div>
        <div className="absolute top-[19px] left-[calc(50%_-_20.5px)]">es</div>
        <img
          className="absolute top-[11.63px] left-[calc(50%_+_10px)] w-[3.8px] h-[9.7px] object-contain"
          alt=""
          src="Arrow 1.svg"
        />
        <img
          className="absolute top-[12px] left-[calc(50%_-_13.5px)] w-[6.6px] h-[9.3px] object-contain"
          alt=""
          src="Arrow 2.svg"
        />
        <img
          className="absolute top-[31px] left-[calc(50%_-_4.5px)] w-[9.7px] h-[3.8px] object-contain"
          alt=""
          src="Arrow 3.svg"
        />
      </div>
      <div className="absolute top-[34px] left-[calc(50%_-_540px)] w-[1080px] h-9 text-[24px]">
        <div className="absolute top-[4px] left-[0px] w-[1007px] flex flex-row items-center justify-between">
          <Link href="/" className="relative font-light">
            LL
          </Link>
          <div className="flex flex-row items-center justify-center gap-[30px] text-lg">
            <Link href="/projects" className="relative font-light">
              Projects
            </Link>
            <Link href="/resume" className="relative font-light">
              Resume
            </Link>
            <Link href="/contact" className="relative font-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

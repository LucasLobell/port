import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedProjects = () => {
  return (
    <div className="flex flex-row justify-between 2xl:mt-[51px]">
      <div className="w-[344px]">
        <Image
          className="flex w-[344px] h-[237px]"
          src="/white.png"
          alt=""
          width={344}
          height={237}
        />
        <div className="2xl:mt-[26px]">
          <div className="flex flex-col justify-between gap-[30px]">
            <span className="text-[24px] text-white">WNL Digital</span>
            <span className="text-[14px] text-[#c4c4c4]">
              Proxy provider website including authentication, dashboard and
              dynamic features
            </span>
            <span className="text-[14px] text-[#6cace4]">
              React - Bootstrap - Styled Components
            </span>
          </div>
          <div className="2xl:mt-[30px] text-white font-inter w-[221px] flex flex-row justify-between items-center">
            <button className="relative inline-flex w-[125px] h-[35px] sm:w-[130px] sm:h-[38px] md:w-[145px] md:h-[45px] lg:w-[160px] lg:h-[48px] 2xl:w-[165px] 2xl:h-[55px] overflow-hidden rounded p-[2px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9358F7_0%,#10D7E2_50%,#9358F7_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-black backdrop-blur-3xl">
                <Image
                  className="h-[12px] w-[10px] md:h-[16px] md:w-[14px] 2xl:h-[20px] 2xl:w-[18px]"
                  src="/link.svg"
                  alt=""
                  width={20}
                  height={18}
                />
                <span className="ml-[10px]">Live demo</span>
              </div>
            </button>
            <Link href="https://www.github.com">
              <Image
                className=""
                src="/github2.svg"
                alt=""
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[344px]">
        <Image
          className="flex w-[344px] h-[237px]"
          src="/red.png"
          alt=""
          width={344}
          height={237}
        />
        <div className="2xl:mt-[26px]">
          <div className="flex flex-col justify-between gap-[30px]">
            <span className="text-[24px] text-white">School Management</span>
            <span className="text-[14px] text-[#c4c4c4]">
              Site for a BSC based coin called $AAPElasdlasdasj asdaç
            </span>
            <span className="text-[14px] text-[#6cace4]">
              Vue - Nuxt - Netlify
            </span>
          </div>
          <div className="2xl:mt-[30px] text-white font-inter w-[221px] flex flex-row justify-between items-center">
            <button className="relative inline-flex w-[125px] h-[35px] sm:w-[130px] sm:h-[38px] md:w-[145px] md:h-[45px] lg:w-[160px] lg:h-[48px] 2xl:w-[165px] 2xl:h-[55px] overflow-hidden rounded p-[2px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9358F7_0%,#10D7E2_50%,#9358F7_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-black backdrop-blur-3xl">
                <Image
                  className="h-[12px] w-[10px] md:h-[16px] md:w-[14px] 2xl:h-[20px] 2xl:w-[18px]"
                  src="/link.svg"
                  alt=""
                  width={20}
                  height={18}
                />
                <span className="ml-[10px]">Live demo</span>
              </div>
            </button>
            <Link href="https://www.github.com">
              <Image
                className=""
                src="/github2.svg"
                alt=""
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[344px]">
        <Image
          className="flex w-[344px] h-[237px]"
          src="/blue.png"
          alt=""
          width={344}
          height={237}
        />
        <div className="2xl:mt-[26px]">
          <div className="flex flex-col justify-between gap-[30px]">
            <span className="text-[24px] text-white">FoodDelivery</span>
            <span className="text-[14px] text-[#c4c4c4]">
              Sidechain explorer open source project (block explorer) for
              transactions.
            </span>
            <span className="text-[14px] text-[#6cace4]">
              React - TailwindCSS - Context API
            </span>
          </div>
          <div className="2xl:mt-[30px] text-white font-inter w-[221px] flex flex-row justify-between items-center">
            <button className="relative inline-flex w-[125px] h-[35px] sm:w-[130px] sm:h-[38px] md:w-[145px] md:h-[45px] lg:w-[160px] lg:h-[48px] 2xl:w-[165px] 2xl:h-[55px] overflow-hidden rounded p-[2px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9358F7_0%,#10D7E2_50%,#9358F7_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-black backdrop-blur-3xl">
                <Image
                  className="h-[12px] w-[10px] md:h-[16px] md:w-[14px] 2xl:h-[20px] 2xl:w-[18px]"
                  src="/link.svg"
                  alt=""
                  width={20}
                  height={18}
                />
                <span className="ml-[10px]">Live demo</span>
              </div>
            </button>
            <Link href="https://www.github.com">
              <Image
                className=""
                src="/github2.svg"
                alt=""
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;

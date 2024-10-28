"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const LocalizedLink = () => {
  const pathname = usePathname(); 
  const currentLocale = pathname.split('/')[1]; 

  return (
    <Link
      href={`/${currentLocale}/projetos`}
      className="uppercase text-[8px] sm:text-[10px] lg:text-[12px] 2xl:text-[14px] text-white text-opacity-75 hover:underline"
    >
      More Projects
    </Link>
  );
};

export default LocalizedLink;

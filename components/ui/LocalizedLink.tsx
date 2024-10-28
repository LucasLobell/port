// components/LocalizedLink.tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const LocalizedLink = () => {
  const pathname = usePathname(); // Get the current pathname
  const currentLocale = pathname.split('/')[1]; // Extract the locale from the pathname

  return (
    <Link
      href={`/${currentLocale}/projetos`} // Use the current locale in the link
      className="uppercase text-[8px] sm:text-[10px] lg:text-[12px] 2xl:text-[14px] text-white text-opacity-75 hover:underline"
    >
      More Projects
    </Link>
  );
};

export default LocalizedLink;

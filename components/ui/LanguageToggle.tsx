"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import Image from "next/image";

const LanguageToggle = () => {
  const languages = ["en", "pt", "es"];
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState("");

  useEffect(() => {
    const localeFromPath = window.location.pathname.split("/")[1];
    setCurrentLocale(localeFromPath);
  }, []);

  const handleLanguageChange = () => {
    // Find the current index and calculate the next index
    const currentIndex = languages.indexOf(currentLocale);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLocale = languages[nextIndex];

    // Remove the current locale from the path
    const currentPath = window.location.pathname.replace(/^\/(en|pt|es)/, '');
    
    router.push(`/${nextLocale}${currentPath}`);

    setCurrentLocale(nextLocale);
  };

  return (
    <div className="cursor-pointer" onClick={handleLanguageChange}>
      <Image
        src="/group23.svg"
        alt="Language Toggle"
        width={40}
        height={40}
        className="w-[24px] h-[28px] m4:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px]"
      />
    </div>
  );
};

export default LanguageToggle;

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LanguageToggle = () => {
  const [languages, setLanguages] = useState(["en", "pt", "es"]);
  const [first, setfirst] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const localeFromPath = window.location.pathname.split("/")[1];

    const currentIndex = languages.indexOf(localeFromPath);

    const nextIndex = (currentIndex + 1) % languages.length;
    
    const plusIndex = (nextIndex + 1) % languages.length;

    setLanguages([localeFromPath, languages[nextIndex], languages[plusIndex]])
  }, []);

  const handleLanguageChange = () => {
    setfirst(true);
    const current = JSON.parse(JSON.stringify(languages))
    
    setTimeout(() => {
      setfirst(false);
      setLanguages([current[1], current[2], current[0]])
      router.push(`/${current[1]}`);
    }, 1300)
    
  };

  return (
    <div className={first ? "cursor-pointer" : "cursor-pointer"} onClick={handleLanguageChange}>
      <div
        className="language-container relative w-[35px] h-[35px]"
      >
        <div className="w-full relative h-[34.8px] text-left text-xs text-white font-inter">
          {languages.map((lang, index) => (
            <div
              key={lang}
              className={`language-item absolute ${
                index === 0 ? "top-[0px] left-[calc(50%_-_6.5px)]" : ""
              } ${
                index === 1 ? "top-[19px] left-[calc(50%_+_8.5px)]" : ""
              } ${
                index === 2 ? "top-[19px] left-[calc(50%_-_20.5px)]" : ""
              } ${
                index === 0 && first ? "top-[0px] left-[calc(50%_-_6.5px)] slide-w-up" : ""
              } ${
                index === 1 && first ? "top-[19px] left-[calc(50%_+_8.5px)] slide-w-down-right" : ""
              } ${
                index === 2 && first ? "top-[19px] left-[calc(50%_-_20.5px)] slide-w-down-left" : ""
              }
              `}
            >
              {lang}
            </div>
          ))}
          {/*<div className={first ? "rotate-center" : ""}>*/}

          <Image
            className={
              first 
              ? "arrow-image absolute top-[11.63px] left-[calc(50%_+_9.75px)] w-[5px] h-[9.7px] object-contain slide-up-right" 
              : "arrow-image absolute top-[11.63px] left-[calc(50%_+_9.75px)] w-[5px] h-[9.7px] object-contain"
            }
            style={{
              transform: `rotate(0deg)`,
            }}
            width={5}
            height={10}
            alt=""
            src="/Arrow.svg"
          />
          <Image
            className={
              first
              ? "arrow-image absolute top-[11.2px] left-[calc(50%_-_14px)] w-[5px] h-[9.7px] object-contain slide-up-left"
              : "arrow-image absolute top-[11.2px] left-[calc(50%_-_14px)] w-[5px] h-[9.7px] object-contain"
            }
            style={{
              transform: `rotate(-135deg)`,
            }}
            width={5}
            height={10}
            alt=""
            src="/Arrow.svg"
          />
          <Image
            className={
              first
              ? "arrow-image absolute top-[31px] left-[calc(50%_-_2.55px)] w-[5px] h-[9.7px] object-contain slide-down"
              : "arrow-image absolute top-[31px] left-[calc(50%_-_2.55px)] w-[5px] h-[9.7px] object-contain"
            }
            style={{
              transform: `rotate(110deg)`,
            }}
            width={5}
            height={10}
            alt=""
            src="/Arrow.svg"
          />
            {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;

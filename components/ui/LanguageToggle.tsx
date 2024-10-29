"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LanguageToggle = () => {
  const languages = ["en", "pt", "es"];
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState("");

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const localeFromPath = window.location.pathname.split("/")[1];
    setCurrentLocale(localeFromPath);
  }, []);

  const handleLanguageChange = () => {
    const currentIndex = languages.indexOf(currentLocale);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLocale = languages[nextIndex];

    // Rotate counterclockwise by -120 degrees on each click
    setRotation((prevRotation) => prevRotation - 120);

    setTimeout(() => {
      const currentPath = window.location.pathname.replace(
        /^\/(en|pt|es)/,
        ""
      );
      router.push(`/${nextLocale}${currentPath}`);
      setCurrentLocale(nextLocale);
    }, 300); // Match this to the duration of the animation
  };

  // Reorder languages to make currentLocale appear at the top
  const reorderedLanguages = [
    currentLocale,
    ...languages.filter((lang) => lang !== currentLocale),
  ];

  return (
    <div className="cursor-pointer" onClick={handleLanguageChange}>
      <div
        className="language-container relative w-[35px] h-[35px]"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="w-full relative h-[34.8px] text-left text-xs text-white font-inter">
          {reorderedLanguages.map((lang, index) => (
            <div
              key={lang}
              className={`language-item absolute ${
                index === 0 ? "top-[0px] left-[calc(50%_-_6.5px)]" : ""
              } ${
                index === 1 ? "top-[19px] left-[calc(50%_+_8.5px)]" : ""
              } ${
                index === 2 ? "top-[19px] left-[calc(50%_-_20.5px)]" : ""
              }`}
              style={{ transform: `rotate(${-rotation}deg)` }}
            >
              {lang}
            </div>
          ))}
          {/* Right Arrow (no rotation needed) */}
          <Image
            className="arrow-image absolute top-[11.63px] left-[calc(50%_+_9.75px)] w-[5px] h-[9.7px] object-contain"
            style={{
              transform: `rotate(0deg)`,
              transition: "transform 0.3s ease",
            }}
            width={5}
            height={10}
            alt=""
            src="/arrow.svg"
          />
          {/* Left Arrow (rotate 90 degrees to point down) */}
          <Image
            className="arrow-image absolute top-[11.2px] left-[calc(50%_-_13.8px)] w-[5px] h-[9.7px] object-contain"
            style={{
              transform: `rotate(-135deg)`,
              transition: "transform 0.3s ease",
            }}
            width={5}
            height={10}
            alt=""
            src="/arrow.svg"
          />
          {/* Bottom Arrow (rotate -90 degrees to point right) */}
          <Image
            className="arrow-image absolute top-[31px] left-[calc(50%_-_2.55px)] w-[5px] h-[9.7px] object-contain"
            style={{
              transform: `rotate(110deg)`,
              transition: "transform 0.3s ease",
            }}
            width={5}
            height={10}
            alt=""
            src="/arrow.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;

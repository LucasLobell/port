"use client";

import { useEffect } from "react";

export default function ScrollHandler() {
  useEffect(() => {
    const handleScroll = () => {
      const body = document.body;
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop === 0) {
        body.classList.add("not-rounded-top"); 
      } else {
        body.classList.remove("not-rounded-top"); 
      }

      if (scrollTop + clientHeight >= scrollHeight) {
        body.classList.add("not-rounded-bottom"); 
      } else {
        body.classList.remove("not-rounded-bottom");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}

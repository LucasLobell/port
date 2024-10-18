"use client";

import { useEffect } from "react";

export default function ScrollHandler() {
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

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

      body.classList.add("scroll-active");

      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        body.classList.remove("scroll-active");
      }, 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return null;
}

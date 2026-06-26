"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Yukarı Çık"
      className={`group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full shadow-xl transition-all duration-700 ease-out
      ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      }
      bg-[#c1121f] hover:-translate-y-2 hover:bg-[#080808]`}
    >
      <span className="absolute inset-0 rounded-full bg-white/10 scale-0 transition-transform duration-700 group-hover:scale-100" />

      <ArrowUp
        size={22}
        className="relative z-10 text-white transition-all duration-700 group-hover:-translate-y-1 group-hover:scale-110"
      />
    </button>
  );
}
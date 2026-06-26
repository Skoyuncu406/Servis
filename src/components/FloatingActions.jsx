"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed right-5 z-40 transition-all duration-500 lg:right-8 ${
        scrolled ? "top-20" : "top-28"
      }`}
    >
      <div className="flex flex-col items-end gap-3">
        <a
          href="tel:+905422847897"
          aria-label="Telefon ile ara"
          className="group relative flex h-14 w-14 items-center justify-end overflow-hidden rounded-full bg-[#c1121f] text-white shadow-2xl ring-1 ring-white/20 transition-[width,background-color] duration-700 ease-out hover:w-40 "
        >
          <span className="absolute left-5 whitespace-nowrap text-xs font-black uppercase tracking-widest opacity-0 transition-all duration-700 ease-out group-hover:opacity-100">
            Ara
          </span>

          <Phone
            size={22}
            className="relative z-10 mr-4 transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-12"
          />
        </a>

        <a
          href="https://wa.me/905422847897"
          target="_blank"
          aria-label="WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-end overflow-hidden rounded-full bg-[#25D366] text-white shadow-2xl ring-1 ring-white/20 transition-[width,background-color] duration-700 ease-out hover:w-44 "
        >
          <span className="absolute left-5 whitespace-nowrap text-xs font-black uppercase tracking-widest opacity-0 transition-all duration-700 ease-out group-hover:opacity-100">
            WhatsApp
          </span>

          <MessageCircle
            size={23}
            className="relative z-10 mr-4 transition-all duration-700 ease-out group-hover:scale-110 group-hover:-rotate-12"
          />
        </a>
      </div>
    </div>
  );
}
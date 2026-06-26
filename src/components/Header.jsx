"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";

const navLinks = [
  { label: "Ana Sayfa", href: "#anasayfa" },
  { label: "Kurumsal", href: "#hakkimizda" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("anasayfa");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: "-90px 0px -120px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080808]/95 text-white backdrop-blur-xl transition-all duration-300">
      <div
        className={`hidden overflow-hidden border-b border-white/10 bg-[#080808] text-xs font-semibold text-white/70 transition-all duration-300 lg:block ${
          scrolled ? "h-0 py-0" : "h-9 py-2"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-8">
          <a
            href="tel:+905422847897"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Phone size={14} className="text-[#c1121f]" />
            +90 (542) 284 78 97
          </a>

          <span className="h-4 w-px bg-white/15" />

          <a
            href="mailto:ezgitur1@gmail.com"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Mail size={14} className="text-[#c1121f]" />
            ezgitur1@gmail.com
          </a>

          <span className="h-4 w-px bg-white/15" />

          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#c1121f]" />
            İzmir • Menemen • 30 Ağustos Mah.
          </div>
        </div>
      </div>

      <nav
        className={`container-px mx-auto flex max-w-7xl items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a href="#anasayfa" className="flex items-center gap-3">
          <div
            className={`flex items-center justify-center bg-[#c1121f] font-black text-white transition-all duration-300 ${
              scrolled ? "h-10 w-10 text-lg" : "h-12 w-12 text-xl"
            }`}
          >
            E
          </div>

          <div className="leading-none">
            <div
              className={`font-black tracking-tight text-white transition-all duration-300 ${
                scrolled ? "text-xl" : "text-2xl"
              }`}
            >
              EZGİ TUR
            </div>

            <div className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.32em] text-[#c1121f]">
              Servisçilik
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const active = activeSection === link.href.replace("#", "");

            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative text-xs font-extrabold uppercase tracking-widest transition duration-500 ${
                  active ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-3 left-0 h-[2px] bg-[#c1121f] transition-all duration-500 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <a
          href="#teklif"
          className="hidden items-center gap-3 bg-[#c1121f] px-7 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-white hover:text-black lg:inline-flex"
        >
          Teklif Al
          <ArrowRight size={17} />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="group relative flex h-11 w-11 items-center justify-center overflow-hidden border border-white/15 text-white transition hover:border-[#c1121f] lg:hidden"
          aria-label="Menüyü aç"
        >
          <span className="absolute inset-0 translate-y-full bg-[#c1121f] transition duration-300 group-hover:translate-y-0" />

          <span className="relative z-10">
            {open ? <X size={22} /> : <Menu size={22} />}
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#080808] transition-all duration-500 lg:hidden ${
          open ? "max-h-[620px]" : "max-h-0"
        }`}
      >
        <div className="container-px py-5">
          <div className="mb-5 border border-white/10 bg-white/[0.03] p-4">
            <a
              href="tel:+905422847897"
              className="flex items-center gap-3 text-sm font-bold text-white"
            >
              <Phone size={17} className="text-[#c1121f]" />
              +90 (542) 284 78 97
            </a>

            <a
              href="mailto:ezgitur1@gmail.com"
              className="mt-3 flex items-center gap-3 text-sm font-bold text-white/75"
            >
              <Mail size={17} className="text-[#c1121f]" />
              ezgitur1@gmail.com
            </a>
          </div>

          <div className="space-y-2">
            {navLinks.map((link, index) => {
              const active = activeSection === link.href.replace("#", "");

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`group relative flex items-center justify-between overflow-hidden border px-5 py-4 text-sm font-black uppercase tracking-widest transition duration-500 ${
                    active
                      ? "border-[#c1121f] bg-[#c1121f] text-white"
                      : "border-white/10 bg-white/[0.03] text-white hover:border-[#c1121f] hover:bg-white hover:text-black"
                  }`}
                  style={{
                    transitionDelay: open ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-[3px] bg-[#c1121f] transition duration-300 ${
                      active
                        ? "translate-x-0"
                        : "-translate-x-full group-hover:translate-x-0"
                    }`}
                  />

                  <span className="relative z-10">{link.label}</span>

                  <ArrowRight
                    size={16}
                    className={`relative z-10 transition duration-300 group-hover:translate-x-1 ${
                      active ? "text-white" : "text-[#c1121f]"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <a
            href="#teklif"
            onClick={() => setOpen(false)}
            className="group mt-4 flex items-center justify-center gap-3 bg-[#c1121f] px-6 py-4 text-sm font-black uppercase tracking-widest text-white transition duration-300 hover:bg-white hover:text-black"
          >
            Teklif Al
            <ArrowRight
              size={17}
              className="transition duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
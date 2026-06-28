"use client";

import { ArrowRight, BusFront, Clock3, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const benefits = [
  {
    title: "Modern Araç Filosu",
    text: "Yeni model ve bakımlı servis araçları",
    icon: BusFront,
  },
  {
    title: "Güvenli Yolculuk",
    text: "Deneyimli sürücüler ve güvenli ulaşım",
    icon: ShieldCheck,
  },
  {
    title: "Zamanında Servis",
    text: "Planlı ve dakik ulaşım hizmeti",
    icon: Clock3,
  },
];

export default function Quote() {
  return (
    <section
      id="teklif"
      className="scroll-mt-16 overflow-hidden bg-white px-5 py-16 lg:h-[calc(100vh-64px)] lg:py-6"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:h-full lg:grid-cols-2 lg:items-stretch">
        <div className="relative z-10 flex flex-col justify-center lg:h-full">
          <span className="text-[11px] font-black uppercase tracking-[0.32em] text-[#c1121f] sm:text-xs sm:tracking-[0.4em]">
            Teklif Alın
          </span>

          <h2 className="font-heading mt-5 text-3xl leading-tight text-black sm:text-4xl md:text-5xl">
            Personel
            <br />
            Taşımacılığında
            <br />
            Doğru Çözüm
          </h2>

          <div className="mt-6 h-[3px] w-24 bg-[#c1121f]" />

          <p className="mt-7 max-w-xl text-sm leading-7 text-black/65 sm:text-base sm:leading-8">
            Firmanızın personel ulaşım ihtiyacına uygun, güvenli ve ekonomik
            servis çözümleri için bizimle iletişime geçebilirsiniz.
          </p>

          <div className="mt-9 space-y-5">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="group flex items-center gap-5">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#c1121f]/10 transition duration-300 group-hover:bg-[#c1121f] sm:h-14 sm:w-14">
                    <Icon className="text-[#c1121f] transition duration-300 group-hover:text-white" />
                  </div>

                  <div>
                    <h4 className="font-bold text-black">{item.title}</h4>
                    <p className="text-sm text-black/60">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.15} className="h-full">
          <div className="relative z-10 flex h-full items-center">
            <div className="relative w-full">
              <div className="pointer-events-none absolute -left-[2px] -top-[2px] z-20 h-20 w-20 border-l-4 border-t-4 border-[#c1121f] sm:h-24 sm:w-24" />
              <div className="pointer-events-none absolute -bottom-[2px] -right-[2px] z-20 h-20 w-20 border-b-4 border-r-4 border-[#c1121f] sm:h-24 sm:w-24" />

              <form className="relative z-10 w-full space-y-4 border-2 border-black/10 bg-[#f5f5f3] px-6 py-8 sm:px-8 lg:px-10 lg:py-8">
                <input
                  placeholder="Ad Soyad"
                  className="h-13 w-full border-b border-black/15 bg-transparent px-1 text-sm text-black outline-none transition placeholder:text-black/40 focus:border-[#c1121f] sm:h-14 sm:text-base"
                />

                <input
                  placeholder="Firma Adı"
                  className="h-13 w-full border-b border-black/15 bg-transparent px-1 text-sm text-black outline-none transition placeholder:text-black/40 focus:border-[#c1121f] sm:h-14 sm:text-base"
                />

                <input
                  placeholder="Telefon"
                  className="h-13 w-full border-b border-black/15 bg-transparent px-1 text-sm text-black outline-none transition placeholder:text-black/40 focus:border-[#c1121f] sm:h-14 sm:text-base"
                />

                <input
                  placeholder="Personel Sayısı"
                  className="h-13 w-full border-b border-black/15 bg-transparent px-1 text-sm text-black outline-none transition placeholder:text-black/40 focus:border-[#c1121f] sm:h-14 sm:text-base"
                />

                <textarea
                  rows={4}
                  placeholder="Mesajınız"
                  className="w-full resize-none border-b border-black/15 bg-transparent px-1 py-4 text-sm text-black outline-none transition placeholder:text-black/40 focus:border-[#c1121f] sm:text-base"
                />

                <button
                  type="button"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#080808] px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition duration-500 hover:bg-[#c1121f] "
                >
                  Teklif Gönder
                  <ArrowRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
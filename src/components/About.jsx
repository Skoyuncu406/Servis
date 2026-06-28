import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="hakkimizda"
      className="scroll-mt-16 bg-white px-5 py-16 lg:min-h-[calc(100vh-64px)] lg:py-10"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:min-h-[calc(100vh-144px)] lg:grid-cols-2 lg:items-center">
        <div className="relative z-10 block">
          <span className="block text-[11px] font-black uppercase tracking-[0.32em] text-[#c1121f] sm:text-xs sm:tracking-[0.4em]">
            Kurumsal
          </span>

          <h2 className="font-heading mt-4 block text-3xl leading-tight text-black sm:text-4xl md:text-5xl">
            Güvenilir
            <br />
            Servis Taşımacılığı
          </h2>

          <div className="mt-5 h-[3px] w-20 bg-[#c1121f]" />

          <p className="mt-6 block text-sm leading-7 text-black/65 sm:text-base sm:leading-8">
            Ezgi Tur olarak personel taşımacılığında güven, konfor ve dakikliği
            ön planda tutuyoruz. Modern araç filomuz ve deneyimli ekibimiz ile
            kurumların ulaşım süreçlerini sorunsuz şekilde yönetiyoruz.
          </p>

          <p className="mt-4 block text-sm leading-7 text-black/65 sm:text-base sm:leading-8">
            Her yolculuğun güvenli ve planlı olması için kalite
            standartlarımızdan ödün vermeden hizmet sunuyoruz.
          </p>

          <a
            href="#hizmetler"
            className="mt-8 inline-flex items-center gap-3 border-b-2 border-[#c1121f] pb-2 text-xs font-black uppercase tracking-widest text-black transition duration-300 hover:text-[#c1121f] sm:text-sm"
          >
            Hizmetlerimizi İnceleyin
            <ArrowRight size={18} />
          </a>
        </div>

        <Reveal delay={0.15} y={35}>
          <div className="relative h-[300px] w-full overflow-hidden sm:h-[380px] lg:h-[620px]">
            <Image
              src="/about.png"
              alt="Ezgi Tur kurumsal servis taşımacılığı"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 h-20 w-20 border-b-4 border-l-4 border-[#c1121f]" />
            <div className="absolute right-0 top-0 h-20 w-20 border-r-4 border-t-4 border-[#c1121f]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
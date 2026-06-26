import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="hakkimizda"
      className="flex min-h-[calc(100vh-64px)] scroll-mt-16 items-center bg-white py-6"
    >
      <div className="container-px mx-auto grid w-full max-w-7xl gap-8 lg:h-[calc(100vh-112px)] lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-black uppercase tracking-[0.4em] text-[#c1121f]">
            Kurumsal
          </span>

          <h2 className="font-heading mt-4 text-4xl leading-tight text-black md:text-5xl">
            Güvenilir
            <br />
            Servis Taşımacılığı
          </h2>

          <div className="mt-5 h-[3px] w-20 bg-[#c1121f]" />

          <p className="mt-6 text-base leading-8 text-black/65">
            Ezgi Tur olarak personel taşımacılığında güven, konfor ve dakikliği
            ön planda tutuyoruz. Modern araç filomuz ve deneyimli ekibimiz ile
            kurumların ulaşım süreçlerini sorunsuz şekilde yönetiyoruz.
          </p>

          <p className="mt-4 text-base leading-8 text-black/65">
            Her yolculuğun güvenli ve planlı olması için kalite
            standartlarımızdan ödün vermeden hizmet sunuyoruz.
          </p>

          <a
            href="#hizmetler"
            className="mt-8 inline-flex items-center gap-3 border-b-2 border-[#c1121f] pb-2 text-sm font-black uppercase tracking-widest text-black transition hover:text-[#c1121f]"
          >
            Hizmetlerimizi İnceleyin
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="relative h-[360px] overflow-hidden lg:h-full">
          <Image
            src="/about.png"
            alt="Ezgi Tur kurumsal servis taşımacılığı"
            fill
            className="object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
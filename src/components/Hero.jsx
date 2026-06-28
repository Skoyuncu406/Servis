import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative h-screen overflow-hidden bg-[#f5f5f3] pt-20 lg:pt-[116px]"
    >
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Ezgi Tur servis taşımacılığı"
          fill
          priority
          className="object-cover object-[72%_center] md:object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:via-white/60" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container-px relative z-10 mx-auto flex h-full max-w-7xl items-center">
        <div className="max-w-2xl pb-8 pt-8 lg:pt-0">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.35em] text-[#c1121f] md:text-sm">
            EZGİ TUR SERVİS TAŞIMACILIĞI
          </p>

<h1 className="hero-title font-heading  font-bold leading-[0.9] text-black text-5xl xl:text-7xl">
  Personel
  <br />
  Taşımacılığında
  <br />
  <span className="text-[#c1121f]">Güvenilir</span>
  <br />
  Çözüm Ortağınız
</h1>

          <div className="mt-6 flex gap-3">
            <span className="h-[3px] w-16 bg-[#c1121f]" />
            <span className="h-[3px] w-10 bg-black" />
          </div>

          <p className="mt-6 max-w-xl text-sm leading-7 text-black/70 md:text-base lg:text-lg">
            Kurumsal firmalara güvenli, konforlu ve zamanında personel
            taşımacılığı hizmeti sunuyoruz.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#teklif"
              className="inline-flex items-center justify-center gap-3 bg-[#c1121f] px-7 py-4 text-xs font-black uppercase tracking-widest text-white transition duration-300 hover:bg-black md:text-sm"
            >
              Teklif Al
              <ArrowRight size={18} />
            </a>

            <a
              href="tel:+905422847897"
              className="inline-flex items-center justify-center gap-3 border border-black/20 bg-white/80 px-7 py-4 text-xs font-black uppercase tracking-widest text-black backdrop-blur transition duration-300 hover:bg-black hover:text-white md:text-sm"
            >
              <Phone size={18} />
              Hemen Ara
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold text-black/80 md:gap-6 md:text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-[#c1121f]" size={18} />
              Güvenli Ulaşım
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="text-[#c1121f]" size={18} />
              Modern Araç Filosu
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="text-[#c1121f]" size={18} />
              Zamanında Hizmet
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
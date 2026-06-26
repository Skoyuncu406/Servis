"use client";

import {
  ArrowRight,
  BusFront,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export default function Quote() {
  return (
    <section
      id="teklif"
      className="flex min-h-screen items-center bg-white py-24"
    >
      <div className="container-px mx-auto grid max-w-7xl gap-20 lg:grid-cols-2 lg:items-center">

        {/* Sol Alan */}

        <div>

          <span className="text-xs font-black uppercase tracking-[0.4em] text-[#c1121f]">
            Teklif Alın
          </span>

          <h2 className="font-heading mt-5 text-2xl leading-tight text-black md:text-5xl">
            Personel
            <br />
            Taşımacılığında
            <br />
            Doğru Çözüm
          </h2>

          <div className="mt-7 h-[3px] w-24 bg-[#c1121f]" />

          <p className="mt-8 max-w-xl text-lg leading-9 text-black/65">
            Firmanızın personel ulaşım ihtiyacına uygun,
            güvenli ve ekonomik servis çözümleri için
            bizimle iletişime geçebilirsiniz.
          </p>

          <div className="mt-10 space-y-6">

            <div className="group flex items-center gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c1121f]/10 transition duration-300 group-hover:bg-[#c1121f]">

                <BusFront className="text-[#c1121f] transition duration-300 group-hover:text-white" />

              </div>

              <div>

                <h4 className="font-bold text-black">
                  Modern Araç Filosu
                </h4>

                <p className="text-sm text-black/60">
                  Yeni model ve bakımlı servis araçları
                </p>

              </div>

            </div>

            <div className="group flex items-center gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c1121f]/10 transition duration-300 group-hover:bg-[#c1121f]">

                <ShieldCheck className="text-[#c1121f] transition duration-300 group-hover:text-white" />

              </div>

              <div>

                <h4 className="font-bold text-black">
                  Güvenli Yolculuk
                </h4>

                <p className="text-sm text-black/60">
                  Deneyimli sürücüler ve güvenli ulaşım
                </p>

              </div>

            </div>

            <div className="group flex items-center gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c1121f]/10 transition duration-300 group-hover:bg-[#c1121f]">

                <Clock3 className="text-[#c1121f] transition duration-300 group-hover:text-white" />

              </div>

              <div>

                <h4 className="font-bold text-black">
                  Zamanında Servis
                </h4>

                <p className="text-sm text-black/60">
                  Planlı ve dakik ulaşım hizmeti
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Form */}

        <form className="space-y-6">

          <input
            placeholder="Ad Soyad"
            className="h-16 w-full border-b border-black/15 bg-transparent px-1 text-black outline-none transition focus:border-[#c1121f]"
          />

          <input
            placeholder="Firma Adı"
            className="h-16 w-full border-b border-black/15 bg-transparent px-1 text-black outline-none transition focus:border-[#c1121f]"
          />

          <input
            placeholder="Telefon"
            className="h-16 w-full border-b border-black/15 bg-transparent px-1 text-black outline-none transition focus:border-[#c1121f]"
          />

          <input
            placeholder="Personel Sayısı"
            className="h-16 w-full border-b border-black/15 bg-transparent px-1 text-black outline-none transition focus:border-[#c1121f]"
          />

          <textarea
            rows={5}
            placeholder="Mesajınız"
            className="w-full resize-none border-b border-black/15 bg-transparent px-1 py-4 text-black outline-none transition focus:border-[#c1121f]"
          />

          <button
            className="group inline-flex items-center gap-3 bg-[#c1121f] px-10 py-5 text-sm font-black uppercase tracking-widest text-white transition duration-300 hover:bg-black"
          >
            Teklif Gönder

            <ArrowRight
              size={18}
              className="transition duration-300 group-hover:translate-x-1"
            />

          </button>

        </form>

      </div>
    </section>
  );
}
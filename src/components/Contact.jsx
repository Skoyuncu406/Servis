"use client";

import { Mail, MapPin, Phone, Route } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+90 (542) 284 78 97",
    href: "tel:+905422847897",
  },
  {
    icon: Mail,
    title: "E-posta",
    value: "ezgitur1@gmail.com",
    href: "mailto:ezgitur1@gmail.com",
  },
  {
    icon: MapPin,
    title: "Adres",
    value: "30 Ağustos Mahallesi, Menemen / İzmir",
    href: "https://www.google.com/maps/search/?api=1&query=30+A%C4%9Fustos+Mahallesi+Menemen+%C4%B0zmir",
  },
];

export default function Contact() {
  return (
    <section
      id="iletisim"
      className="scroll-mt-16 bg-[#f5f5f3] px-5 py-16 lg:min-h-[calc(100vh-64px)] lg:py-6"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-6 lg:h-[calc(100vh-112px)] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative h-[360px] overflow-hidden border border-black/10 bg-white sm:h-[420px] lg:h-full">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-20 w-20 border-l-4 border-t-4 border-[#c1121f]" />
          <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-20 w-20 border-b-4 border-r-4 border-[#c1121f]" />

          <iframe
            title="Ezgi Tur Konum"
            src="https://www.google.com/maps?q=30%20A%C4%9Fustos%20Mahallesi%20Menemen%20%C4%B0zmir&output=embed"
            className="h-full w-full border-0 grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex h-full flex-col justify-center border border-black/10 bg-white px-6 py-8 sm:px-8 lg:px-8 lg:py-6">
          <span className="text-[10px] font-black uppercase tracking-[0.32em] text-[#c1121f] sm:text-xs">
            İletişim
          </span>

          <h2 className="font-heading mt-4 text-3xl leading-tight text-black sm:text-4xl lg:text-[42px]">
            Bizimle
            <br />
            İletişime Geçin
          </h2>

          <div className="mt-4 h-[3px] w-20 bg-[#c1121f]" />

          <p className="mt-5 text-sm leading-7 text-black/60 lg:text-[15px] lg:leading-7">
            Personel taşımacılığı ve servis çözümleri hakkında bilgi almak için
            telefon, e-posta veya yol tarifi bağlantısını kullanabilirsiniz.
          </p>

          <div className="mt-6 space-y-3">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.title === "Adres" ? "_blank" : undefined}
                  rel={item.title === "Adres" ? "noreferrer" : undefined}
                  className="group flex items-start gap-4 border-b border-black/10 pb-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c1121f]/10 transition duration-300 group-hover:bg-[#c1121f]">
                    <Icon
                      size={18}
                      className="text-[#c1121f] transition duration-300 group-hover:text-white"
                    />
                  </span>

                  <span>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-black">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-black/60">
                      {item.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=30+A%C4%9Fustos+Mahallesi+Menemen+%C4%B0zmir"
            target="_blank"
            rel="noreferrer"
            className="group mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#080808] px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition duration-500 hover:bg-[#c1121f] "
          >
            Yol Tarifi Al
            <Route
              size={18}
              className="transition duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
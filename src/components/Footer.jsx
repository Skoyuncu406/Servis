import { Mail, MapPin, Phone, Route } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] text-white">
      <div className="container-px mx-auto max-w-7xl py-12">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          {/* Sol Alan */}

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center bg-[#c1121f] text-xl font-black">
                E
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-tight">
                  EZGİ TUR
                </h3>

                <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.32em] text-[#c1121f]">
                  Servisçilik
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              Personel taşımacılığı ve kurumsal servis çözümlerinde güvenli,
              konforlu ve zamanında ulaşım hizmeti sunuyoruz.
            </p>

            {/* Sosyal Medya */}

       <div className="mt-8 flex items-center gap-4">
  {[
    { icon: FaFacebookF, label: "Facebook" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaLinkedinIn, label: "LinkedIn" },
  ].map((item) => {
    const Icon = item.icon;

    return (
      <a
        key={item.label}
        href="#"
        aria-label={item.label}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full"
      >
        {/* Ana Daire */}
        <span className="absolute inset-0 rounded-full bg-[#c1121f] scale-0 transition-transform duration-700 ease-out group-hover:scale-100" />

        {/* Ripple */}
        <span className="absolute inset-0 rounded-full border border-[#c1121f] scale-50 opacity-0 transition-all duration-700 ease-out group-hover:scale-125 group-hover:opacity-20" />

        {/* İkon */}
        <Icon
          size={item.label === "Instagram" ? 19 : 18}
          className={`relative z-10 transition-all duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:text-white ${
            item.label === "Instagram"
              ? "group-hover:rotate-12"
              : ""
          }`}
        />
      </a>
    );
  })}
</div>
          </div>

          {/* Menü */}

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.25em] text-white">
              Menü
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <a
                href="#anasayfa"
                className="transition hover:text-[#c1121f]"
              >
                Ana Sayfa
              </a>

              <a
                href="#hakkimizda"
                className="transition hover:text-[#c1121f]"
              >
                Kurumsal
              </a>

              <a
                href="#hizmetler"
                className="transition hover:text-[#c1121f]"
              >
                Hizmetler
              </a>

              <a
                href="#iletisim"
                className="transition hover:text-[#c1121f]"
              >
                İletişim
              </a>
            </div>
          </div>

          {/* İletişim */}

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.25em] text-white">
              İletişim
            </h4>

            <div className="mt-5 space-y-4 text-sm text-white/60">
              <a
                href="tel:+905422847897"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone size={17} className="text-[#c1121f]" />
                +90 (542) 284 78 97
              </a>

              <a
                href="mailto:ezgitur1@gmail.com"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail size={17} className="text-[#c1121f]" />
                ezgitur1@gmail.com
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-1 text-[#c1121f]" />

                <span>
                  İzmir, Menemen
                  <br />
                  30 Ağustos Mahallesi
                </span>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=İzmir+Menemen+30+Ağustos+Mahallesi"
                target="_blank"
                className="inline-flex items-center gap-3 border-b border-[#c1121f] pb-1 font-bold text-white transition hover:text-[#c1121f]"
              >
                Yol Tarifi Al
                <Route size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-6 text-xs text-white/45 md:flex-row md:items-center">
          <p>© {year} Ezgi Tur. Tüm hakları saklıdır.</p>

          <p>
            Web Tasarım & Yazılım{" "}
            <span className="font-bold text-white/70">
              Selçuk 
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
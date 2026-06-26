import { ArrowRight, Mail, MapPin, Phone, Route } from "lucide-react";

const contactItems = [
  {
    title: "Telefon",
    value: "+90 (542) 284 78 97",
    href: "tel:+905422847897",
    icon: Phone,
  },
  {
    title: "E-Posta",
    value: "ezgitur1@gmail.com",
    href: "mailto:ezgitur1@gmail.com",
    icon: Mail,
  },
  {
    title: "Adres",
    value: "İzmir, Menemen / 30 Ağustos Mahallesi",
    href: null,
    icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section
      id="iletisim"
      className="flex min-h-[calc(100vh-64px)] scroll-mt-16 items-center bg-[#f5f5f3] py-6 lg:min-h-[calc(100vh-64px)]"
    >
      <div className="container-px mx-auto grid w-full max-w-7xl gap-6 lg:h-[calc(100vh-112px)] lg:grid-cols-2">
        <div className="group h-[360px] overflow-hidden border border-black/10 bg-white lg:h-full">
          <iframe
            title="Ezgi Tur Harita"
            src="https://www.google.com/maps?q=%C4%B0zmir%20Menemen%2030%20A%C4%9Fustos%20Mahallesi&output=embed"
            className="h-full w-full transition duration-700 group-hover:scale-[1.03]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex h-full flex-col justify-center border border-black/10 bg-white px-7 py-7 lg:px-12">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-[#c1121f]">
            İletişim
          </span>

          <h2 className="font-heading mt-3 text-4xl leading-tight text-black md:text-5xl">
            Bize
            Ulaşın
          </h2>

          <div className="mt-4 h-[3px] w-20 bg-[#c1121f]" />

          <p className="mt-4 max-w-xl text-base leading-7 text-black/65">
            Personel taşımacılığı ve kurumsal servis çözümleri için bizimle
            iletişime geçebilirsiniz.
          </p>

          <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
            {contactItems.map((item) => {
              const Icon = item.icon;

              const content = (
                <div className="group/item relative flex items-center gap-5 overflow-hidden py-4">
                  <span className="absolute left-0 top-0 h-full w-[3px] -translate-x-full bg-[#c1121f] transition duration-300 group-hover/item:translate-x-0" />

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#c1121f]/10 transition duration-300 group-hover/item:bg-[#c1121f]">
                    <Icon
                      size={20}
                      className="text-[#c1121f] transition duration-300 group-hover/item:text-white"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xs font-black uppercase tracking-widest text-black">
                      {item.title}
                    </h3>

                    <p className="mt-1 break-words text-base font-bold leading-6 text-black/70 transition duration-300 group-hover/item:text-[#c1121f]">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.title} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=İzmir+Menemen+30+Ağustos+Mahallesi"
            target="_blank"
            className="group mt-6 flex w-full items-center justify-center gap-3 bg-[#c1121f] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition duration-300 hover:bg-black"
          >
            Yol Tarifi Al
            <Route size={18} />
            <ArrowRight
              size={18}
              className="transition duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
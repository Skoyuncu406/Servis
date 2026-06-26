import Image from "next/image";
import { Building2, Clock3, UsersRound } from "lucide-react";

const services = [
  {
    title: "Personel Taşımacılığı",
    text: "Çalışanlarınızı güvenli, konforlu ve düzenli şekilde iş yerlerine ulaştırıyoruz.",
    image: "/service-1.png",
    icon: UsersRound,
  },
  {
    title: "Vardiyalı Personel Taşımacılığı",
    text: "Gece ve gündüz vardiyalarında kesintisiz servis planlaması sunuyoruz.",
    image: "/service-2.png",
    icon: Clock3,
  },
  {
    title: "Fabrika ve İşletme Servisleri",
    text: "Fabrika, üretim tesisi ve kurumsal işletmeler için planlı ulaşım çözümleri sağlıyoruz.",
    image: "/service-3.png",
    icon: Building2,
  },
];

export default function Services() {
  return (
    <section
      id="hizmetler"
      className="flex min-h-[calc(100vh-64px)] scroll-mt-16 items-center bg-[#f5f5f3] py-6"
    >
      <div className="container-px mx-auto w-full max-w-7xl">
        <div className="mb-8 text-center">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-[#c1121f]">
            Hizmetlerimiz
          </span>

          <h2 className="font-heading mt-3 text-4xl font-bold text-black md:text-5xl">
            Kurumsal Ulaşım Çözümleri
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-20 bg-[#c1121f]" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group border border-black/10 bg-white"
              >
                <div className="relative">
                  <div className="relative h-56 overflow-hidden xl:h-60">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  </div>

                  <div className="absolute left-1/2 top-full z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#c1121f] text-white shadow-xl">
                    <Icon size={26} />
                  </div>
                </div>

                <div className="px-7 pb-7 pt-14 text-center">
                  <h3 className="text-lg font-black text-black">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-16 text-sm leading-7 text-black/65">
                    {service.text}
                  </p>

                  <div className="mx-auto mt-5 h-[2px] w-12 bg-[#c1121f] transition-all duration-300 group-hover:w-24" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import { Building2, Clock3, UsersRound } from "lucide-react";
import Reveal from "./Reveal";

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
      className="scroll-mt-16 bg-[#f5f5f3] py-16 lg:flex lg:min-h-[calc(100vh-64px)] lg:items-center lg:py-6"
    >
      <div className="container-px mx-auto w-full max-w-7xl">
        <div className="mb-10 text-center">
          <Reveal>
            <span className="text-xs font-black uppercase tracking-[0.35em] text-[#c1121f]">
              Hizmetlerimiz
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-heading mt-3 text-3xl font-bold text-black sm:text-4xl md:text-5xl">
              Kurumsal Ulaşım Çözümleri
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-4 h-[3px] w-20 bg-[#c1121f]" />
          </Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={0.12 + index * 0.12} y={45}>
                <article className="group border border-black/10 bg-white transition-all duration-700 hover:-translate-y-2 hover:border-[#c1121f]/40 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                  <div className="relative">
                    <div className="relative h-52 overflow-hidden sm:h-56 xl:h-60">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    </div>

                    <div className="absolute left-1/2 top-full z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#c1121f] text-white shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(193,18,31,0.45)]">
                      <Icon size={26} />
                    </div>
                  </div>

                  <div className="px-6 pb-7 pt-14 text-center sm:px-7">
                    <h3 className="text-base font-black text-black sm:text-lg">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-black/65">
                      {service.text}
                    </p>

                    <div className="mx-auto mt-5 h-[2px] w-12 bg-[#c1121f] transition-all duration-500 group-hover:w-24" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
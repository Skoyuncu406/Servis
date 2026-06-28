"use client";

import {
  BusFront,
  Clock,
  ShieldCheck,
  Smile,
  UserCheck,
  UsersRound,
} from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    title: "Zamanında Hizmet",
    icon: Clock,
  },
  {
    title: "Deneyimli Sürücüler",
    icon: UserCheck,
  },
  {
    title: "Güvenli Ulaşım",
    icon: ShieldCheck,
  },
  {
    title: "Modern Araç Filosu",
    icon: BusFront,
  },
  {
    title: "Müşteri Memnuniyeti",
    icon: Smile,
  },
  {
    title: "Kurumsal Çözümler",
    icon: UsersRound,
  },
];

export default function WhyEzgiTur() {
  return (
    <section className="bg-[#080808] py-10 text-white">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#c1121f]">
              Neden Ezgi Tur Taşımacılık?
            </span>

            <h2 className="font-heading mt-4 text-4xl font-bold md:text-6xl">
              Güven veren servis deneyimi
            </h2>

            <div className="mx-auto mt-6 h-[3px] w-24 bg-[#c1121f]" />
          </div>
        </Reveal>

        <div className="grid border-y border-white/10 md:grid-cols-3 lg:grid-cols-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="group relative flex min-h-48 flex-col items-center justify-center overflow-hidden border-b border-white/10 px-5 py-10 text-center transition duration-500 hover:bg-[#c1121f] md:border-r lg:border-b-0">
                  <div className="absolute inset-0 translate-y-full bg-white transition duration-500 group-hover:translate-y-0" />

                  <div className="relative z-10 flex flex-col items-center">
                    <Icon
                      size={42}
                      className="text-[#c1121f] transition duration-500 group-hover:-translate-y-2 group-hover:text-black"
                    />

                    <h3 className="mt-6 text-sm font-black leading-6 text-white transition duration-500 group-hover:text-black">
                      {item.title}
                    </h3>

                    <span className="mt-5 h-[2px] w-8 bg-[#c1121f] transition-all duration-500 group-hover:w-16 group-hover:bg-black" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
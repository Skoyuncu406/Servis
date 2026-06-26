"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1400);
    const remove = setTimeout(() => setLoading(false), 2100);

    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#080808] transition-all duration-700 ease-out ${
        hide ? "pointer-events-none -translate-y-full opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        <div className="relative flex h-28 w-28 items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-white/10" />
          <span className="absolute inset-2 rounded-full border border-[#c1121f]/30" />
          <span className="absolute inset-0 rounded-full border-t-2 border-[#c1121f] animate-spin" />

          <div className="flex h-16 w-16 items-center justify-center bg-[#c1121f] text-3xl font-black text-white shadow-2xl">
            E
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-3xl font-black tracking-tight text-white">
            EZGİ TUR
          </h2>

          <p className="mt-2 text-[10px] font-black uppercase tracking-[0.45em] text-[#c1121f]">
            Servis Taşımacılığı
          </p>
        </div>

        <div className="mt-8 h-[2px] w-40 overflow-hidden bg-white/10">
          <span className="block h-full w-1/2 animate-[loaderLine_1.2s_ease-in-out_infinite] bg-[#c1121f]" />
        </div>
      </div>
    </div>
  );
}
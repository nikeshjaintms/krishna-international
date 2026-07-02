"use client";
import { useRouter } from "next/navigation";
import { useInquiry } from "@/providers/InquiryProvider";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  Download, ChevronRight, MessageSquare,
  BookOpen, Clock, Printer, Sparkles,
  CheckCircle, ArrowRight,
} from "lucide-react";
import { TShirtMockup } from "@/components/TShirtMockup";
import { cataloguesList } from "@/data/mockData";

/* scroll-reveal */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}
const fadeUp = (v: boolean, delay = 0) =>
  `transition-all duration-700 ${delay ? `delay-[${delay}ms]` : ""} ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

const COLLECTION_COLORS = ["#C20000", "#003b71", "#10B981", "#7C3AED", "#C026D3"];

export default function Catalogue() {
  const router = useRouter();
  const { openInquiry } = useInquiry();
  const s2 = useInView();
  const s3 = useInView();
  const s4 = useInView();

  return (
    <div className="w-full bg-white overflow-x-hidden">

      {/* ══════════════════════════════
          1. HERO
      ══════════════════════════════ */}
      <section className="relative w-full bg-zinc-950 min-h-[400px] sm:min-h-[460px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1920"
            fill priority sizes="100vw"
            alt="Catalogue"
            className="object-cover object-center brightness-[0.25] select-none"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-28 pb-14 text-white animate-fadeIn">
          {/* breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-5">
            <button onClick={() => router.push("/")} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight size={13} className="text-zinc-600" />
            <span className="text-zinc-500">Catalogue</span>
          </div>

          <p className="text-[#C20000] font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
            Digital Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4">
            Our Catalogue
          </h1>
          <div className="w-14 h-1 bg-[#C20000] mb-5" />
          <p className="text-zinc-300 text-sm sm:text-base max-w-lg leading-relaxed">
            Browse our curated collections and download the complete specifications
            sheet — fabric samples, sizes, and detailed sewing guides included.
          </p>
        </div>
      </section>


      {/* ══════════════════════════════
          2. DOWNLOAD BLOCK
      ══════════════════════════════ */}
      <section ref={s2.ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-14 md:py-20">
        <div className={`${fadeUp(s2.visible)} bg-zinc-50 border border-zinc-100 rounded-2xl overflow-hidden shadow-sm`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">

            {/* left — info */}
            <div className="md:col-span-8 p-7 sm:p-9 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C20000]/10 rounded-full">
                <Sparkles size={11} className="text-[#C20000]" />
                <span className="text-[9px] font-bold text-[#C20000] uppercase tracking-widest">
                  Latest Vol. 2024 Released
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-900 uppercase tracking-tight leading-tight">
                Get the Full Apparel Lookbook
              </h2>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-xl">
                Our 2024 technical portfolio features fabric swatches, high-resolution
                t-shirt designs, neck-band print examples, embroidery tension grids,
                and standard size guides.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {[
                  "Combed Pique Cotton Specs",
                  "Moisture Wicking Jersey Patterns",
                  "Dye Sublimation Color Palette",
                  "Wash Labels & Satin Tag Trims",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-[11px] sm:text-xs text-zinc-600 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C20000] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* right — CTA */}
            <div className="md:col-span-4 bg-zinc-900 flex flex-col items-center justify-center gap-4 p-7 sm:p-9">
              <a
                href="/krishna-catalogue.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#C20000] hover:bg-white text-white hover:text-zinc-950 text-xs font-bold tracking-widest uppercase py-3.5 rounded-lg shadow-md transition-all cursor-pointer"
              >
                <Download size={14} />
                Download Catalogue
              </a>
              <p className="text-[10px] text-zinc-500 font-mono text-center">
                PDF FORMAT · FREE ACCESS
              </p>

              <a
                href="https://wa.me/919979207802"
                target="_blank" rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-widest uppercase py-3 rounded-lg transition-colors cursor-pointer"
              >
                <MessageSquare size={13} />
                Request via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* ══════════════════════════════
          4. INFO STRIP
      ══════════════════════════════ */}
      <section ref={s4.ref} className="w-full border-t border-zinc-100 bg-zinc-50 py-12 md:py-16">
        <div className={`${fadeUp(s4.visible)} w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6`}>
          {[
            {
              icon: <Printer size={18} />,
              title: "Printed Catalog Specs",
              body: "We offer printed hardcovers delivered with realistic fabric swatch tags directly to purchase departments.",
            },
            {
              icon: <BookOpen size={18} />,
              title: "Regular Swatch Updates",
              body: "Get direct alerts whenever new fabric blends — like double-dyed jacquard or recycled dri-fit — are stocked.",
            },
            {
              icon: <Clock size={18} />,
              title: "Quote Response Time",
              body: "Submit your catalogue references and receive exact bulk billing charts with timeline estimates in 120 minutes.",
            },
          ].map(item => (
            <div key={item.title} className="flex flex-col sm:flex-row items-start gap-4">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-[#C20000]/10 text-[#C20000] flex items-center justify-center">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-zinc-800 text-xs uppercase tracking-wide">{item.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useInquiry } from "@/providers/InquiryProvider";
import Image from "next/image";
import {
  ArrowRight, Layers, Users, Award, Truck,
  ShieldCheck, Sparkles, Cpu, UserCheck,
  CalendarClock, Coins, MessageSquare,
  ChevronRight, Star, Package, Zap, CheckCircle2,
} from "lucide-react";
import { statsList, whyChooseUs } from "@/data/mockData";
import { Product } from "@/types";

/* ─── tiny hook: detect when element enters viewport ─── */
function useInView(threshold = 0.15) {
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

const BRAND_RED = "#C20000";

export default function Home() {
  const router = useRouter();
  const { openInquiry } = useInquiry();

  const nav = (path: string) => { router.push(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  /* ── data ── */
  const collections = [
    { name: "Polo T-Shirts",      img: "/images/tshirt-1.png" },
    { name: "Sportswear",         img: "/images/tshirt-2.png" },
    { name: "Cotton Wear",        img: "/images/tshirt-3.png" },
    { name: "Sublimation",        img: "/images/tshirt-4.png" },
    { name: "Corporate Uniforms", img: "/images/tshirt-5.png" },
  ];

  const bestSellers = [
    { id: "1", code: "1001", name: "Softy Material Polo",   category: "Polo",       rating: 5, reviews: 120, img: "/images/Softy-Material-Polo-T-Shirt.png" },
    { id: "2", code: "1002", name: "Sublimation Polo",      category: "Polo",       rating: 4, reviews: 98,  img: "/images/sublimation polo.png" },
    { id: "3", code: "1003", name: "Dri Fit T-Shirt",       category: "Round Neck", rating: 5, reviews: 150, img: "/images/Dri-Fit-T-Shirt.png" },
    { id: "4", code: "1011", name: "Dot Knit Polo",         category: "Polo",       rating: 4, reviews: 87,  img: "/images/Dot-Knit-Polo.jpg" },
    { id: "5", code: "1015", name: "Cotton Pique Polo",     category: "Polo",       rating: 5, reviews: 132, img: "/images/cotton pique polo.png" },
  ];

  const processSteps = [
    { num: "01", title: "Share Requirement", desc: "Tell us your design, quantity & fabric preference.", icon: <MessageSquare size={20} /> },
    { num: "02", title: "Design & Mockup",   desc: "Digital artists craft accurate mockups for approval.",  icon: <Sparkles size={20} /> },
    { num: "03", title: "Sample Production", desc: "Physical sample garment prepared for inspection.",      icon: <Package size={20} /> },
    { num: "04", title: "Bulk Production",   desc: "State-of-the-art cutting, sewing & line audits.",       icon: <Zap size={20} /> },
    { num: "05", title: "Delivery",          desc: "Packed securely & dispatched PAN India on time.",       icon: <Truck size={20} /> },
  ];

  const clientLogos = [
    { name: "DECATHLON",      cls: "font-black italic text-blue-700 text-base sm:text-lg" },
    { name: "RELIANCE",       cls: "font-extrabold text-red-700 tracking-wider" },
    { name: "KALOREX",        cls: "font-mono font-bold tracking-widest text-[#C20000]" },
    { name: "NAVYY",          cls: "font-medium tracking-widest text-zinc-900" },
    { name: "SAMARPAN",       cls: "font-serif uppercase text-amber-800 tracking-widest text-sm" },
    { name: "MANGALAM",       cls: "font-semibold tracking-wide text-zinc-700" },
    { name: "AVERY DENNISON", cls: "font-black text-zinc-800 text-xs tracking-tight" },
  ];

  const getStatIcon = (name: string) => {
    const cls = "text-white";
    const sz = 18;
    if (name === "Layers") return <Layers size={sz} className={cls} />;
    if (name === "Users")  return <Users  size={sz} className={cls} />;
    if (name === "Award")  return <Award  size={sz} className={cls} />;
    if (name === "Truck")  return <Truck  size={sz} className={cls} />;
    return <Layers size={sz} className={cls} />;
  };

  const featureIcons = [
    <Sparkles size={22} />, <Cpu size={22} />, <UserCheck size={22} />,
    <ShieldCheck size={22} />, <CalendarClock size={22} />, <Coins size={22} />,
  ];

  /* section visibility hooks */
  const sec2 = useInView();
  const sec3 = useInView();
  const sec4 = useInView();
  const sec5 = useInView();
  const sec6 = useInView();

  const fadeUp = (visible: boolean) =>
    `transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <div className="w-full bg-white overflow-x-hidden">

      {/* ══════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative w-full bg-zinc-950 min-h-[580px] sm:min-h-[640px] flex flex-col justify-center overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0">
          <Image src="/images/home-bg.png" fill priority sizes="100vw"
            alt="Krishna International factory floor"
            className="object-cover object-center brightness-[0.55]" />
        </div>
        {/* layered gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-28 pb-32 sm:pb-36">
          <div className="max-w-2xl space-y-6 animate-fadeIn">

            {/* eyebrow pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-[#C20000]/40 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C20000] animate-ping" />
              <span className="text-[#ff4040] font-mono uppercase text-[10px] font-bold tracking-[0.2em]">
                Premium Apparel Manufacturer · Gujarat, India
              </span>
            </div>

            {/* headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight">
              Gujarat's Most{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#ff3c3c]">Trusted</span>
                <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-[#C20000]/60 rounded" />
              </span>
              <br />T-Shirt Manufacturer
            </h1>

            {/* sub */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg">
              Premium quality apparel for brands, events, sports &amp; corporate
              uniforms — engineered with combed fibres, advanced tailoring &amp;
              global quality checks.
            </p>

            {/* feature chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["MOQ 50 Pcs", "PAN India Delivery", "ISO Quality", "Custom Branding"].map(t => (
                <span key={t} className="flex items-center gap-1 text-[10px] font-bold text-white/80 bg-white/8 border border-white/15 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  <CheckCircle2 size={10} className="text-[#C20000]" /> {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button onClick={() => nav("/products")}
                className="group flex items-center gap-2 bg-[#C20000] hover:bg-white text-white hover:text-zinc-950 font-bold tracking-wider px-6 py-3 rounded-sm text-xs uppercase transition-all shadow-lg cursor-pointer">
                Explore Products
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button onClick={() => openInquiry()}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 hover:border-white/50 text-white font-bold tracking-wider px-6 py-3 rounded-sm text-xs uppercase transition-all cursor-pointer">
                Bulk Inquiry
              </button>
              <a href="https://wa.me/919979207802" target="_blank" rel="noreferrer"
                className="hidden sm:flex items-center gap-1.5 bg-[#25D366]/90 hover:bg-[#25D366] text-white font-bold tracking-wider px-5 py-3 rounded-sm text-xs uppercase transition-all cursor-pointer">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.17 1.6 6L0 24l6.2-1.6A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0zM12 22c-1.9 0-3.74-.5-5.36-1.44l-.38-.22-3.68.95.98-3.58-.25-.39A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.27-7.73c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.06-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.48.07-.74.36-.26.29-1 1-1 2.43s1.03 2.82 1.17 3.01c.14.19 2.03 3.1 4.92 4.35.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ── STATS STRIP (pinned at bottom of hero) ── */}
        <div className="absolute bottom-0 inset-x-0 z-20 border-t border-white/10 bg-black/55 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {statsList.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-9 h-9 shrink-0 rounded-full bg-[#C20000] flex items-center justify-center">
                  {getStatIcon(s.iconName)}
                </div>
                <div>
                  <p className="text-white font-black text-sm sm:text-base leading-none">{s.value}</p>
                  <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* floating WA pill – mobile only */}
        <a href="https://wa.me/919979207802" target="_blank" rel="noreferrer"
          className="sm:hidden absolute top-20 right-4 z-30 flex items-center gap-1.5 bg-[#25D366] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.17 1.6 6L0 24l6.2-1.6A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0zM12 22c-1.9 0-3.74-.5-5.36-1.44l-.38-.22-3.68.95.98-3.58-.25-.39A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.27-7.73c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.06-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.48.07-.74.36-.26.29-1 1-1 2.43s1.03 2.82 1.17 3.01c.14.19 2.03 3.1 4.92 4.35.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z"/>
          </svg>
          WhatsApp
        </a>
      </section>


      {/* ══════════════════════════════════════════════════
          MARQUEE STRIP
      ══════════════════════════════════════════════════ */}
      <div className="w-full bg-[#C20000] overflow-hidden py-2.5 border-y border-[#a00]/40">
        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 px-8">
              {["Polo T-Shirts", "Dry-Fit Jerseys", "Corporate Uniforms", "Cotton Round Necks",
                "Sublimation Printing", "Embroidery Branding", "Bulk Orders Welcome", "PAN India Delivery"].map(t => (
                <span key={t} className="flex items-center gap-2 text-white/90 text-[11px] font-bold uppercase tracking-[0.15em]">
                  <span className="w-1 h-1 bg-white/50 rounded-full" />{t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>


      {/* ══════════════════════════════════════════════════
          2. CATEGORIES
      ══════════════════════════════════════════════════ */}
      <section ref={sec2.ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-24">
        <div className={`${fadeUp(sec2.visible)} space-y-2 text-center mb-10 md:mb-14`}>
          <p className="text-[#C20000] font-mono text-[11px] font-bold uppercase tracking-[0.2em]">Our Categories</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-950 uppercase tracking-tight">
            Find the Perfect Collection
          </h2>
          <div className="w-12 h-[3px] bg-[#C20000] mx-auto mt-3" />
        </div>

        <div className={`${fadeUp(sec2.visible)} grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4`}
          style={{ transitionDelay: "100ms" }}>
          {collections.map((c, i) => (
            <button
              key={c.name}
              onClick={() => nav("/products")}
              className="group relative bg-zinc-50 hover:bg-white rounded-xl border border-zinc-100 hover:border-[#C20000]/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden text-center p-3 sm:p-4 flex flex-col items-center gap-3 cursor-pointer"
            >
              {/* colour accent line */}
              <span className="absolute top-0 inset-x-0 h-[3px] bg-[#C20000] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center overflow-hidden relative">
                <img src={c.img} alt={c.name}
                  className="w-[75%] object-contain transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-zinc-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-black uppercase tracking-wider">Shop Now</span>
                </div>
              </div>

              <div className="space-y-0.5">
                <p className="font-black text-zinc-900 text-[11px] sm:text-xs leading-snug tracking-wide">{c.name}</p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#C20000] uppercase tracking-wider">
                  View <ArrowRight size={9} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          3. WHY CHOOSE US
      ══════════════════════════════════════════════════ */}
      <section ref={sec3.ref} className="w-full bg-zinc-950 text-white py-16 md:py-24 relative overflow-hidden">
        {/* ambient blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C20000]/8 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C20000]/8 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className={`${fadeUp(sec3.visible)} text-center space-y-2 mb-12 md:mb-16`}>
            <p className="text-[#ff4040] font-mono text-[11px] font-bold uppercase tracking-[0.2em]">Why Choose Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
              We Deliver More Than Just T-Shirts
            </h2>
            <div className="w-12 h-[3px] bg-[#C20000] mx-auto mt-3" />
          </div>

          <div className={`${fadeUp(sec3.visible)} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5`}
            style={{ transitionDelay: "150ms" }}>
            {whyChooseUs.map((f, i) => (
              <div key={f.title}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 md:p-6 hover:border-[#C20000]/50 hover:bg-zinc-900 transition-all duration-300 overflow-hidden flex gap-4">
                {/* red glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C20000]/0 group-hover:from-[#C20000]/5 to-transparent transition-all duration-500" />

                <div className="relative shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-lg bg-zinc-800 group-hover:bg-[#C20000] flex items-center justify-center text-[#ff4040] group-hover:text-white transition-all duration-300">
                  {React.cloneElement(featureIcons[i % featureIcons.length] as React.ReactElement<{ className?: string }>, { className: "w-5 h-5" })}
                </div>
                <div className="relative space-y-1.5">
                  <h3 className="font-bold text-white text-sm tracking-wide">{f.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          4. BEST SELLERS
      ══════════════════════════════════════════════════ */}
      <section ref={sec4.ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-24">
        <div className={`${fadeUp(sec4.visible)} flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14`}>
          <div className="space-y-2">
            <p className="text-[#C20000] font-mono text-[11px] font-bold uppercase tracking-[0.2em]">Featured Products</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-950">
              Our Best Sellers
            </h2>
            <div className="w-12 h-[3px] bg-[#C20000] mt-1" />
          </div>
          <button onClick={() => nav("/products")}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 border border-zinc-300 hover:border-[#C20000] text-zinc-600 hover:text-[#C20000] text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-sm transition-colors cursor-pointer shrink-0">
            View All <ArrowRight size={12} />
          </button>
        </div>

        <div className={`${fadeUp(sec4.visible)} grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5`}
          style={{ transitionDelay: "100ms" }}>
          {bestSellers.map((s, i) => (
            <div key={s.id}
              className="group bg-white border border-zinc-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-200 transition-all duration-300 flex flex-col"
              style={{ transitionDelay: `${i * 60}ms` }}>

              {/* image zone */}
              <div className="relative bg-zinc-50 h-36 sm:h-44 flex items-center justify-center overflow-hidden">
                <Image src={s.img} alt={s.name} width={130} height={130}
                  className="w-[70%] max-w-[120px] object-contain group-hover:scale-110 transition-transform duration-500" />
                {/* category badge */}
                <span className="absolute top-2.5 left-2.5 bg-zinc-900 text-white text-[8px] font-mono font-bold px-2 py-0.5 rounded-sm tracking-wider">
                  {s.category}
                </span>
                {/* code badge */}
                <span className="absolute bottom-2.5 right-2.5 bg-[#C20000] text-white text-[8px] font-mono font-bold px-2 py-0.5 rounded-sm tracking-wider">
                  #{s.code}
                </span>
              </div>

              {/* info */}
              <div className="flex flex-col flex-1 p-3 sm:p-3.5 gap-2">
                <h4 className="text-xs font-bold text-zinc-900 line-clamp-2 leading-snug">{s.name}</h4>
                <div className="flex items-center gap-1 mt-auto">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={10}
                      className={j < s.rating ? "text-amber-400 fill-amber-400" : "text-zinc-200 fill-zinc-200"} />
                  ))}
                  <span className="text-[9px] text-zinc-400 ml-1">({s.reviews})</span>
                </div>
                <button
                  onClick={() => openInquiry({ id: s.id, code: s.code, name: s.name, category: s.category, imageUrl: s.img } as unknown as Product)}
                  className="w-full mt-1 text-[10px] sm:text-[11px] font-bold text-white bg-zinc-900 group-hover:bg-[#C20000] uppercase tracking-widest py-2 rounded-sm transition-colors cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          5. PROCESS STRIP  (dark bg)
      ══════════════════════════════════════════════════ */}
      <section ref={sec5.ref} className="w-full bg-zinc-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#C20000_0%,transparent_60%)] opacity-[0.04] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className={`${fadeUp(sec5.visible)} text-center space-y-2 mb-12 md:mb-16`}>
            <p className="text-[#ff4040] font-mono text-[11px] font-bold uppercase tracking-[0.2em]">How It Works</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
              From Idea to Delivery
            </h2>
            <div className="w-12 h-[3px] bg-[#C20000] mx-auto mt-3" />
          </div>

          {/* horizontal on md+, stacked on mobile */}
          <div className={`${fadeUp(sec5.visible)} grid grid-cols-1 sm:grid-cols-5 gap-6 md:gap-4 relative`}
            style={{ transitionDelay: "100ms" }}>
            {/* connector line — desktop only */}
            <div className="hidden sm:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent pointer-events-none" />

            {processSteps.map((step, i) => (
              <div key={step.num}
                className="relative flex sm:flex-col items-start sm:items-center gap-4 sm:gap-3 text-left sm:text-center group"
                style={{ animationDelay: `${i * 80}ms` }}>

                {/* circle */}
                <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-zinc-700 group-hover:border-[#C20000] bg-zinc-900 group-hover:bg-[#C20000]/10 flex items-center justify-center transition-all duration-300 z-10">
                  <span className="text-[#C20000] group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </span>
                  {/* step number badge */}
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C20000] rounded-full text-white text-[9px] font-black flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <div className="flex-1 sm:flex-none space-y-1">
                  <h3 className="font-bold text-white text-xs sm:text-sm tracking-wide">{step.title}</h3>
                  <p className="text-zinc-400 text-[11px] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          6. TRUSTED BY + CTA  (light bg)
      ══════════════════════════════════════════════════ */}
      <section ref={sec6.ref} className="w-full py-16 md:py-24 space-y-16 md:space-y-24">

        {/* Trusted by */}
        <div className={`${fadeUp(sec6.visible)} max-w-7xl mx-auto px-4 sm:px-6 md:px-10 text-center space-y-6`}>
          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.25em]">Trusted by Brands Across India</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
            {clientLogos.map(l => (
              <span key={l.name}
                className={`${l.cls} opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-200 cursor-default select-none`}>
                {l.name}
              </span>
            ))}
          </div>
          {/* divider */}
          <div className="max-w-7xl mx-auto mt-2 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
        </div>

        {/* CTA CARD */}
        <div className={`${fadeUp(sec6.visible)} max-w-7xl mx-auto px-4 sm:px-6 md:px-10`}
          style={{ transitionDelay: "100ms" }}>
          <div className="relative overflow-hidden rounded-2xl bg-zinc-950 shadow-2xl">
            {/* bg texture */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#C20000_0%,transparent_55%)] opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#990000_0%,transparent_50%)] opacity-20" />
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-[#C20000]/40 via-[#C20000]/10 to-transparent" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 md:p-14">
              {/* text */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C20000]/40 rounded-full bg-[#C20000]/10">
                  <Sparkles size={11} className="text-[#ff4040]" />
                  <span className="text-[#ff4040] font-mono text-[10px] font-bold uppercase tracking-widest">Custom Apparel Ready</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight leading-tight">
                  Need Custom T-Shirts<br className="hidden sm:block" />
                  <span className="text-[#ff3c3c]"> for Your Brand?</span>
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
                  Crew necks for retail, cotton pique polos for corporate staff, or
                  moisture-wicking jerseys for sports teams — we deliver high stitch
                  counts, deep colour fastness &amp; customisable trims.
                </p>
                {/* mini feature list */}
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {["Min. 50 Pieces", "Custom Labels", "Fast Turnaround", "Bulk Discounts"].map(t => (
                    <li key={t} className="flex items-center gap-2 text-[11px] text-zinc-300 font-medium">
                      <CheckCircle2 size={13} className="text-[#C20000] shrink-0" />{t}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button onClick={() => openInquiry()}
                    className="px-6 py-3 bg-[#C20000] hover:bg-white text-white hover:text-zinc-950 text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-lg cursor-pointer">
                    Get Bulk Quote
                  </button>
                  <a href="https://wa.me/919979207802" target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors cursor-pointer">
                    <MessageSquare size={13} /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* image */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <Image
                  src="/images/k-2.png"
                  alt="Custom branded t-shirt"
                  width={400}
                  height={320}
                  style={{ height: "auto" }}
                  className="w-full max-w-[200px] sm:max-w-[280px] lg:max-w-[380px] object-contain drop-shadow-[0_20px_40px_rgba(194,0,0,0.3)]"
                />
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}

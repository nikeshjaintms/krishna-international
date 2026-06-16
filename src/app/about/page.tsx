"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useInquiry } from "@/providers/InquiryProvider";
import Image from "next/image";
import {
  Award, Users, ShieldCheck, Truck,
  Activity, Zap, MessageSquare,
  Target, Gem, Handshake, BadgeCheck,
  Eye, CheckCircle2,
} from "lucide-react";

/* tiny scroll-reveal hook */
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

export default function About() {
  const router = useRouter();
  const { openInquiry } = useInquiry();

  const s2 = useInView();
  const s3 = useInView();
  const s4 = useInView();
  const s5 = useInView();

  const stats = [
    { value: "10+",   label: "Years Experience" },
    { value: "5000+", label: "Happy Clients" },
    { value: "100+",  label: "Team Members" },
    { value: "1M+",   label: "Products Delivered" },
  ];

  const pillars = [
    { icon: <Target size={28} strokeWidth={1.5} />,   title: "Our Mission",    body: "Deliver premium quality apparel with timely service and build long-term relationships." },
    { icon: <Eye    size={28} strokeWidth={1.5} />,   title: "Our Vision",     body: "Be India's most trusted and innovative apparel manufacturing company." },
    { icon: <Gem    size={28} strokeWidth={1.5} />,   title: "Our Values",     body: "Quality, Integrity, Innovation and Customer Satisfaction at the core of everything." },
    { icon: <Handshake size={28} strokeWidth={1.5} />,title: "Our Commitment", body: "Best products, best prices and the best overall experience for every client." },
  ];

  const whyList = [
    { icon: <ShieldCheck size={18} />, title: "Premium Quality Fabric",    sub: "for superior comfort" },
    { icon: <Activity    size={18} />, title: "Strict Quality Control",    sub: "at every stage" },
    { icon: <Zap         size={18} />, title: "Advanced Manufacturing",    sub: "with modern machines" },
    { icon: <Truck       size={18} />, title: "On-Time Delivery",          sub: "across India" },
    { icon: <Users       size={18} />, title: "Skilled & Experienced",     sub: "Workforce" },
    { icon: <BadgeCheck  size={18} />, title: "Competitive Pricing",       sub: "for bulk orders" },
  ];

  const processFlow = [
    { step: "01", title: "Fabric Selection",    desc: "We source and test premium cotton, blended pique and polyester yarns for weight, colour fastness and shrink elasticity." },
    { step: "02", title: "Design & Sampling",   desc: "Creating highly customised CAD patterns and physical mockups for client approval before the main production run." },
    { step: "03", title: "Precision Cutting",   desc: "Spreading fabric rolls and executing laser-guided layout cutting to guarantee absolute consistency across all sizes." },
    { step: "04", title: "Expert Stitching",    desc: "Assembly by expert tailors using high-speed overlock and flatlock machinery with premium tensile polyester threads." },
    { step: "05", title: "Strict Quality Check",desc: "Each garment undergoes line audits, thread trimming, metal detection, and shrinkage/steam-iron parameter checks." },
    { step: "06", title: "Packaging & Delivery",desc: "Individual folding, barcode packing, custom tags and thick waterproof bundles delivered securely PAN India." },
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden">

      {/* ══════════════════════════════
          1. HERO
      ══════════════════════════════ */}
      <section className="relative w-full bg-zinc-950 min-h-[420px] sm:min-h-[460px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home-bg.png"
            alt="Krishna International Factory"
            fill priority sizes="100vw"
            className="object-cover object-center brightness-[0.45]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-28 pb-16 text-white animate-fadeIn">
          {/* breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium mb-6">
            <button onClick={() => router.push("/")} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-500">About Us</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            About <span className="text-[#C20000]">Us</span>
          </h1>
          <div className="w-16 h-1 bg-[#C20000] mt-4 mb-5" />
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-medium max-w-xl">
            Krishna International is a leading T-Shirt Manufacturer in India,
            specialising in premium quality apparel for businesses, events,
            sports teams, schools and organisations.
          </p>
        </div>
      </section>


      {/* ══════════════════════════════
          2. STORY & STATS
      ══════════════════════════════ */}
      <section ref={s2.ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT — narrative */}
          <div className={`${fadeUp(s2.visible)} space-y-6`}>
            <p className="text-[#ff3838] font-bold text-[11px] uppercase tracking-[0.2em]">Our Story</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-zinc-900 leading-tight">
              Quality Fabric. Perfect Stitch.<br />
              Trusted by <span className="text-[#ff3838]">Thousands</span>.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Established with a vision to deliver the best in apparel manufacturing,
              Krishna International has grown into a trusted name in the industry.
              With state-of-the-art infrastructure, a skilled workforce and a strong
              commitment to quality, we manufacture a wide range of T-Shirts, Polo
              T-Shirts and Sportswear that combine comfort, durability and style.
            </p>

            {/* 2 × 2 pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((p) => (
                <div key={p.title} className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-[#C20000]/30 hover:bg-white transition-all">
                  <div className="text-[#ff3838] shrink-0 mt-0.5">{p.icon}</div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-900 mb-0.5">{p.title}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image + stats */}
          <div className={`${fadeUp(s2.visible)} flex flex-col gap-0`} style={{ transitionDelay: "120ms" }}>
            {/* image */}
            <div className="relative w-full rounded-t-2xl overflow-hidden shadow-xl" style={{ height: "clamp(240px, 45vw, 420px)" }}>
              <Image
                src="/images/our-story.png"
                alt="Krishna International Factory"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
              {/* subtle vignette at bottom for seamless blend into stats */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent" />
            </div>

            {/* stats strip — glued to image bottom */}
            <div className="bg-zinc-950 rounded-b-2xl border border-zinc-800 border-t-0 grid grid-cols-2 sm:grid-cols-4 divide-x divide-zinc-800">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center justify-center gap-0.5 py-4 px-2 text-center">
                  <span className="text-xl sm:text-2xl font-black text-[#ff3838] leading-none">{s.value}</span>
                  <span className="text-[10px] text-zinc-400 font-medium mt-0.5 leading-snug">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════
          3. WHY CHOOSE US
      ══════════════════════════════ */}
      <section ref={s3.ref} className="w-full bg-zinc-950 py-16 md:py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#C20000]/8 blur-3xl rounded-full -translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C20000]/8 blur-3xl rounded-full translate-x-1/2 pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* left text block */}
            <div className={`${fadeUp(s3.visible)} lg:col-span-5 space-y-6`}>
              <p className="text-[#ff3838] font-bold text-[11px] uppercase tracking-[0.2em]">Why Choose Us</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                We Deliver More<br />Than Just T-Shirts
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                From fabric selection to final packaging, every step is executed
                with precision to ensure superior quality and customer satisfaction.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {whyList.map((w) => (
                  <div key={w.title} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-[#C20000]/40 transition-colors">
                    <div className="text-[#ff3838] shrink-0 mt-0.5">{w.icon}</div>
                    <p className="text-xs font-semibold text-white leading-snug">
                      {w.title}<br />
                      <span className="text-zinc-500 font-normal">{w.sub}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* right photo collage */}
            <div className={`${fadeUp(s3.visible)} lg:col-span-7`} style={{ transitionDelay: "120ms" }}>
              {/* mobile: single image; md+: 2-col collage */}
              <div className="flex flex-col sm:flex-row gap-3 h-auto sm:h-[420px] md:h-[480px] lg:h-[500px]">
                {/* tall left */}
                <div className="relative flex-1 rounded-xl overflow-hidden border border-zinc-800 min-h-[220px] sm:min-h-0">
                  <Image
                    src="/images/about-3.png"
                    alt="Manufacturing machinery"
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                {/* right column — 2 stacked */}
                <div className="flex sm:flex-col gap-3 flex-1 sm:h-full">
                  <div className="relative flex-1 rounded-xl overflow-hidden border border-zinc-800 min-h-[140px] sm:min-h-0">
                    <Image
                      src="/images/about-2.png"
                      alt="Quality check"
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative flex-1 rounded-xl overflow-hidden border border-zinc-800 min-h-[140px] sm:min-h-0">
                    <Image
                      src="/images/why-chooseus.png"
                      alt="Packaging"
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════
          4. MANUFACTURING PROCESS
      ══════════════════════════════ */}
      <section ref={s4.ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-24">
        <div className={`${fadeUp(s4.visible)} text-center space-y-2 mb-12 md:mb-16`}>
          <p className="text-[#C20000] font-mono text-[11px] font-bold uppercase tracking-[0.2em]">
            Our Manufacturing Process
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-900">
            Crafted With Precision
          </h2>
          <div className="w-12 h-[3px] bg-[#C20000] mx-auto mt-3" />
        </div>

        <div className={`${fadeUp(s4.visible)} relative`} style={{ transitionDelay: "80ms" }}>
          {/* connector line — lg only */}
          <div className="hidden lg:block absolute top-6 left-[calc(100%/12)] right-[calc(100%/12)] h-px bg-zinc-200 pointer-events-none z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8">
            {processFlow.map((flow, i) => (
              <div key={flow.step} className="group flex flex-col items-center text-center relative z-10">
                {/* circle */}
                <div className="w-12 h-12 rounded-full border-2 border-zinc-200 group-hover:border-[#C20000] bg-white text-zinc-700 group-hover:bg-[#C20000] group-hover:text-white flex items-center justify-center font-mono font-bold text-xs shadow-sm transition-all duration-300">
                  {flow.step}
                </div>
                <div className="mt-4 space-y-1.5 px-1">
                  <h3 className="font-bold text-zinc-800 text-[11px] sm:text-xs uppercase tracking-wide leading-snug">
                    {flow.title}
                  </h3>
                  <p className="text-zinc-500 text-[10px] sm:text-[11px] leading-relaxed">
                    {flow.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════
          5. CTA
      ══════════════════════════════ */}
      <section ref={s5.ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-16 md:pb-24">
        <div className={`${fadeUp(s5.visible)} relative overflow-hidden w-full bg-zinc-950 rounded-2xl shadow-xl border border-zinc-800`}>
          {/* bg glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#C20000_0%,transparent_55%)] opacity-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-7 sm:p-10">
            <div className="space-y-2 max-w-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-wide text-white leading-tight">
                Want to Start Your Bulk Order?
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Speak directly with our garment craftsmen. We offer personalised
                swatch cards and physical stitching sample runs on request.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => openInquiry()}
                className="px-5 py-3 bg-[#C20000] hover:bg-white text-white hover:text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer shadow-md"
              >
                Get Bulk Quote
              </button>
              <a
                href="https://wa.me/919979207802"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-1.5 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                <MessageSquare size={13} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

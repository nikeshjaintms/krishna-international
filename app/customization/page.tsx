"use client";
import { useRouter } from "next/navigation";
import { useInquiry } from "@/src/components/providers/InquiryProvider";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronRight, CheckCircle2, MessageSquare, ArrowRight, MousePointerClick, Star, BadgeInfo, Layers, PenTool, Printer, Shirt, Flame, Tag } from "lucide-react";
import { TShirtMockup } from "@/src/components/TShirtMockup";
import { customizationOptions, processSteps } from "@/src/data/mockData";

export default function Customization() {
  const router = useRouter();
  const { openInquiry } = useInquiry();
  // Playground interactive color state
  const [activePlaygroundColor, setActivePlaygroundColor] = useState<string>("#C20000");
  const [activePlaygroundStyle, setActivePlaygroundStyle] = useState<"polo" | "round" | "sports">("polo");
  const [selectedTechIndex, setSelectedTechIndex] = useState<number | null>(null);

  const swatches = [
    { name: "Brand Red", hex: "#C20000" },
    { name: "Navy Blue", hex: "#002F6C" },
    { name: "Forest Green", hex: "#064E3B" },
    { name: "Steal Black", hex: "#111827" },
    { name: "Royal Purple", hex: "#5B21B6" },
    { name: "Gold Yellow", hex: "#D97706" }
  ];

  // Learn More modal state
  const [learnMoreOption, setLearnMoreOption] = useState<null | {
    title: string; desc: string; img: string; icon: React.ReactNode;
    details: string; features: string[];
  }>(null);

  return (
    <div className="w-full bg-white">
      {/* 1. HERO BANNER */}
     <section className="relative w-full bg-zinc-950 min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-zinc-950">
          <Image
            src="/images/hero-bg.png"
            fill priority
            alt="Krishna International Customization"
            className="w-full h-full object-cover object-center opacity-110 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-16 text-white space-y-4 animate-fadeIn">
          <p className="text-[#C20000] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest">
            CUSTOMIZATION
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-sans leading-tight text-white">
            Your Brand.<br/>
            <span className="text-[#C20000]">Our Expertise.</span>
          </h1>
          <p className="text-zinc-300 text-sm md:text-base max-w-md font-medium leading-relaxed pt-2">
            We turn your ideas into high-quality custom apparel that represents your brand perfectly.
          </p>
          <div className="flex items-center gap-2 text-sm text-zinc-400 font-medium pt-4">
            <button onClick={() => router.push("/")} className="hover:text-white cursor-pointer transition-colors">Home</button>
            <ChevronRight size={14} className="text-zinc-500" />
            <span className="text-zinc-500">Customization</span>
          </div>
        </div>
      </section>

      {/* 2. CUSTOMIZATION OPTIONS (Cards with images) */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
        <div className="space-y-3 mb-12">
          <p className="text-[#C20000] font-mono text-xs font-bold uppercase tracking-widest">
            MAKE IT YOURS
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900">
            Customization Options
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto font-medium leading-relaxed">
            We offer a wide range of customization techniques to bring your brand to life.<br/>Choose the perfect style that fits your need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          {[
            {
              title: "Embroidery",
              desc: "Premium quality embroidery for a professional and durable look.",
              img: "/images/c-1.jpg",
              icon: <PenTool size={20} className="text-gray-700" />,
              details: "Our machine embroidery uses high-tensile polyester threads stitched at up to 1,000 stitches per minute. Ideal for logos, monograms, and text on polo collars, chest pockets, and caps. Designs are digitised in-house for pixel-perfect accuracy.",
              features: [
                "Up to 15 thread colours per design",
                "Minimum order: 50 pieces",
                "Suitable for polo shirts, caps & jackets",
                "Durable — survives 50+ commercial washes",
                "3D puff embroidery available on request"
              ]
            },
            {
              title: "Screen Printing",
              desc: "Vibrant and long-lasting prints for bulk orders and corporate needs.",
              img: "/images/c-2.jpg",
              icon: <Printer size={20} className="text-gray-700" />,
              details: "Our automatic screen printing presses deliver razor-sharp, pantone-matched prints across large batch orders. Perfect for corporate events, uniforms, and sports jerseys. Plastisol and water-based inks available.",
              features: [
                "Up to 8 spot colours per design",
                "Minimum order: 100 pieces",
                "Print area up to 40 × 50 cm",
                "Plastisol or eco water-based inks",
                "Halftone & gradient designs supported"
              ]
            },
            {
              title: "Sublimation Printing",
              desc: "Full-colour, high-definition prints that don't fade or crack.",
              img: "/images/c-3.jpg",
              icon: <Shirt size={20} className="text-gray-700" />,
              details: "Dye-sublimation infuses ink directly into polyester fibres, producing vivid all-over prints with no feel on the fabric. Colours are photographic-quality and UV-resistant. Best suited for performance sportswear and promotional apparel.",
              features: [
                "Unlimited colours — full photographic quality",
                "All-over / edge-to-edge printing",
                "No cracking, peeling or fading",
                "Minimum order: 25 pieces",
                "Works on 100% polyester fabrics"
              ]
            },
            {
              title: "Heat Transfer",
              desc: "Perfect for multi-colour designs and small batch customization.",
              img: "/images/c-4.jpg",
              icon: <Flame size={20} className="text-gray-700" />,
              details: "Heat transfer vinyl (HTV) and digital transfers are cut and pressed onto garments using calibrated heat presses. Ideal for short runs, gradients, and complex multicolour artwork with no setup fees.",
              features: [
                "No minimum order quantity",
                "Full-colour digital transfers available",
                "Suitable for cotton & poly-cotton blends",
                "Metallic, glitter & reflective finishes",
                "Quick turnaround — 5–7 business days"
              ]
            },
            {
              title: "Custom Labels & Tags",
              desc: "Personalized labels, neck tags, and hang tags to complete your brand.",
              img: "/images/c-5.jpg",
              icon: <Tag size={20} className="text-gray-700" />,
              details: "From woven neck labels and printed satin care tags to full-colour hang tags with barcodes, we handle every branding touchpoint. Labels are sewn by our in-house team to ensure alignment and quality consistency across every garment.",
              features: [
                "Woven, printed or heat-seal neck labels",
                "Satin care & wash instruction labels",
                "Hang tags with barcode printing",
                "Custom packaging & poly-bags",
                "Available from 100 pieces"
              ]
            }
          ].map((opt, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col cursor-pointer">
              <div className="relative h-48 bg-zinc-100 flex items-center justify-center">
                <Image src={opt.img} fill alt={opt.title} className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 z-10">
                  {opt.icon}
                </div>
              </div>
              <div className="pt-10 pb-6 px-4 flex-1 flex flex-col items-center">
                <h3 className="font-bold text-gray-900 text-sm mb-2">{opt.title}</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed mb-4 flex-1">
                  {opt.desc}
                </p>
                <button
                  onClick={() => setLearnMoreOption(opt as any)}
                  className="text-[#C20000] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 hover:gap-2 group-hover:text-red-700 transition-all duration-200 cursor-pointer hover:scale-105"
                >
                  LEARN MORE <ArrowRight size={10} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ENDLESS POSSIBILITIES (Premium Dark configuration playground) */}
      <section className="w-full bg-[#0E0F10] text-white py-20 relative overflow-hidden text-left">
        {/* Ambient subtle backlights */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-red-600/10 blur-3xl rounded-full pointer-events-none" />
        
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Features checklist */}
          <div className="lg:col-span-4 space-y-6">
            <p className="text-[#ff3838] font-mono text-xs font-bold uppercase tracking-widest leading-none">
              DESIGNED FOR YOU
            </p>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none text-white">
              Endless Possibilities
            </h2>
            <div className="w-12 h-[3px] bg-[#C20000] mt-1" />

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#ff3838] shrink-0 mt-0.5" />
                <span className="text-gray-300 text-xs font-bold">Add your logo, custom text, or illustration.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#ff3838] shrink-0 mt-0.5" />
                <span className="text-gray-300 text-xs font-bold">Choose from multiple printing & embroidery styles.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#ff3838] shrink-0 mt-0.5" />
                <span className="text-gray-300 text-xs font-bold">Limitless swatches matching Pantone coordinates.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#ff3838] shrink-0 mt-0.5" />
                <span className="text-gray-300 text-xs font-bold">Woven neck labels & tailored laundry satin tags.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#ff3838] shrink-0 mt-0.5" />
                <span className="text-gray-300 text-xs font-bold">Precision standard Indian sizes from XS to 3XL.</span>
              </li>
            </ul>

            {/* In-app real-time style toggle */}
            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xs space-y-3">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5 leading-none">
                <MousePointerClick size={12} className="text-red-500" />
                Configurator Playground
              </h4>

              <div className="space-y-2">
                <p className="text-[9px] text-zinc-500 uppercase font-mono font-bold">1. Select Base Pattern</p>
                <div className="grid grid-cols-3 gap-1.5">
                  {(["polo", "round", "sports"] as const).map((styleOpt) => (
                    <button
                      key={styleOpt}
                      onClick={() => setActivePlaygroundStyle(styleOpt)}
                      className={`py-1 px-1 text-[9px] font-bold uppercase rounded-xs border font-mono cursor-pointer ${
                        activePlaygroundStyle === styleOpt
                          ? "bg-[#C20000] border-[#C20000] text-white"
                          : "border-zinc-800 text-gray-400 hover:border-zinc-700"
                      }`}
                    >
                      {styleOpt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[9px] text-zinc-500 uppercase font-mono font-bold">2. Select Fabric Shade</p>
                <div className="flex gap-2">
                  {swatches.map((sw) => (
                    <button
                      key={sw.hex}
                      onClick={() => setActivePlaygroundColor(sw.hex)}
                      style={{ backgroundColor: sw.hex }}
                      className={`w-5 h-5 rounded-full border cursor-pointer transform transition-all hover:scale-110 ${
                        activePlaygroundColor === sw.hex
                          ? "border-white ring-2 ring-red-600Scale"
                          : "border-zinc-800"
                      }`}
                      title={sw.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Middle/Right: Mockup annotations overlay mimicking CAD specs perfectly */}
          <div className="lg:col-span-8 flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Interactive rendering with visual pointers */}
            <div className="relative w-full max-w-[320px] bg-zinc-900/40 p-6 rounded-lg border border-zinc-900 shadow-2xl flex items-center justify-center">
              
              <TShirtMockup
                style={activePlaygroundStyle}
                mainColor={activePlaygroundColor}
                stripeColor="#FCD34D"
                hasLogo={true}
                className="w-full h-full min-h-[280px]"
              />

              {/* Annotation labels exact reproduction */}
              {/* Point 1: Premium fabric */}
              <div className="absolute top-12 left-2 text-right">
                <p className="text-[9px] font-black uppercase tracking-widest text-[#ff4c4c]">Premium Fabric</p>
                <p className="text-[8px] text-zinc-400 font-mono mt-0.5">High thread count double combed</p>
              </div>
              <div className="absolute top-16 left-24 w-4 h-[1px] bg-[#ff4c4c]/40" />

              {/* Point 2: Custom printing */}
              <div className="absolute bottom-16 -right-2 text-left">
                <p className="text-[9px] font-black uppercase tracking-widest text-[#ff4c4c]">Custom Printing</p>
                <p className="text-[8px] text-zinc-400 font-mono mt-0.5">Screen, Embroidery or Sublimation</p>
              </div>
              <div className="absolute bottom-20 right-24 w-4 h-[1px] bg-[#ff4c4c]/40" />

              {/* Point 3: Perfect Fit */}
              <div className="absolute bottom-10 left-2 text-right">
                <p className="text-[9px] font-black uppercase tracking-widest text-[#ff4c4c]">Perfect Fit</p>
                <p className="text-[8px] text-zinc-400 font-mono mt-0.5">Sizes ranging from XS to 3XL</p>
              </div>

              {/* Point 4: Left Crest Logo */}
              <div className="absolute top-22 -right-4 text-left">
                <p className="text-[9px] font-black uppercase tracking-widest text-[#ff4c4c]">YOUR LOGO</p>
                <p className="text-[8px] text-zinc-400 font-mono mt-0.5">Computer embroidery or heat-seal badge</p>
              </div>
            </div>

            {/* Specs sidebar table inside config center */}
            <div className="w-full max-w-[280px] bg-zinc-900/60 p-5 rounded border border-zinc-850 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest border-b border-zinc-800 pb-2">Technical CAD Specs</h3>
              
              <ul className="space-y-3 font-mono text-[9px] text-zinc-400">
                <li className="flex justify-between">
                  <span>STITCH PROFILE:</span>
                  <span className="text-white font-bold">DOUBLE NEEDLE COLLAR</span>
                </li>
                <li className="flex justify-between">
                  <span>ARM JOINTS:</span>
                  <span className="text-white font-bold">FLATLOCK ACTIVE SEAMS</span>
                </li>
                <li className="flex justify-between">
                  <span>THREAD STRENGTH:</span>
                  <span className="text-white font-bold">120D HIGH TENSILE POLY</span>
                </li>
                <li className="flex justify-between">
                  <span>COLOUR DEPTH:</span>
                  <span className="text-white font-bold">ISO LEVEL 4 FASTNESS</span>
                </li>
                <li className="flex justify-between">
                  <span>SHRINK DAMAGE:</span>
                  <span className="text-white font-bold">LESS THAN 3% IN BIO WASH</span>
                </li>
              </ul>
              
              <button
                onClick={() => openInquiry()}
                className="w-full py-2 bg-[#C20000] hover:bg-white text-white hover:text-black text-[10px] font-bold tracking-widest uppercase rounded-xs transition-colors cursor-pointer"
              >
                Inquire Selected Config
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. PROCESS DIAGRAM (From Idea to Reality) */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 text-center bg-white">
        <div className="space-y-2 mb-12">
          <p className="text-[#C20000] font-mono text-xs font-bold uppercase tracking-widest">
            OUR TIMELINE
          </p>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-900">
            From Idea to Reality
          </h2>
          <div className="w-12 h-[3px] bg-[#C20000] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div key={step.number} className="relative group text-center flex flex-col items-center">
              {/* Optional connector line */}
              {idx <4 && (
                <div className="hidden md:block absolute top-10 left-[calc(100%-80px)] w-[160px] h-0.5 bg-zinc-100 group-hover:bg-red-200 transition-colors z-0" />
              )}
              
              <div className="w-14 h-14 bg-zinc-50 border-2 border-zinc-100 group-hover:border-red-600 group-hover:bg-red-50 text-gray-800 group-hover:text-[#C20000] rounded-full flex items-center justify-center font-mono font-black text-sm z-10 transition-all shadow-xs scale-100 group-hover:scale-105">
                {step.number}
              </div>

              <div className="mt-4 space-y-1 relative z-10">
                <h3 className="font-bold text-gray-800 text-xs uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed max-w-[150px] mx-auto leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA BANNER CARD */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="w-full bg-[#C20000] text-white p-8 md:p-12 rounded-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-[#990000] to-zinc-950 shadow-xl">
          <div className="lg:col-span-8 text-left space-y-3">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">
              Ready to Customize Your T-Shirts?
            </h2>
            <p className="text-white/80 text-xs">
              Take advantage of direct pricing direct from our manufacturing facility line. We hold certification from major corporate inspection houses.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 md:justify-end">
            <button
              onClick={() => openInquiry()}
              className="px-5 py-2.5 bg-white text-zinc-950 hover:bg-[#111] hover:text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
            >
              Get Bulk Quote
            </button>
            <a
              href="https://wa.me/919979207802"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* LEARN MORE MODAL */}
      {learnMoreOption && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
          onClick={() => setLearnMoreOption(null)}
        >
          <div
            className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
            style={{ animation: "slideUp 0.35s cubic-bezier(0.34,1.56,0.64,1) both" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-56 bg-zinc-100">
              <Image src={learnMoreOption.img} fill alt={learnMoreOption.title} className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <button
                onClick={() => setLearnMoreOption(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-700 font-bold text-sm transition-all cursor-pointer hover:scale-110 shadow-md"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  {learnMoreOption.icon}
                </div>
                <h2 className="text-white font-black text-xl tracking-tight drop-shadow-md">
                  {learnMoreOption.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <p className="text-gray-600 text-sm leading-relaxed">
                {learnMoreOption.details}
              </p>

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#C20000] mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {learnMoreOption.features.map((f: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle2 size={15} className="text-[#C20000] shrink-0 mt-0.5" />
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => { setLearnMoreOption(null); openInquiry(); }}
                  className="flex-1 py-3 bg-[#C20000] hover:bg-[#a00000] text-white text-xs font-black uppercase tracking-widest rounded-lg transition-all cursor-pointer hover:shadow-lg active:scale-95"
                >
                  Get a Quote →
                </button>
                <button
                  onClick={() => setLearnMoreOption(null)}
                  className="px-5 py-3 border border-gray-200 hover:border-gray-400 text-gray-600 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer active:scale-95"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
      `}</style>
    </div>
  );
}

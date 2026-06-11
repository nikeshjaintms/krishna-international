"use client";
import { useRouter } from "next/navigation";
import { useInquiry } from "@/src/components/providers/InquiryProvider";
import Image from "next/image";
import React, { useState } from "react";
import { Download, ChevronRight, FileSpreadsheet, Eye, MessageSquare, BookOpen, Clock, Printer, Sparkles, CheckCircle } from "lucide-react";
import { TShirtMockup } from "@/src/components/TShirtMockup";
import { cataloguesList } from "@/src/data/mockData";



export default function Catalogue() {
  const router = useRouter();
  const { openInquiry } = useInquiry();
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Simulate generation of download file
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);

      // Creating dynamic text file representing the corporate brochure catalogue beautifully
      const blob = new Blob([
        `==================================================\n`,
        `         KRISHNA INTERNATIONAL APPAREL CATALOGUE  \n`,
        `==================================================\n`,
        `Premium T-shirt Manufacturing Facility in India\n\n`,
        `Address: 18, Senkhunj Society, Nr. Technical School,\n`,
        `         Highway Road, Kalol - 382721, Gujarat, India\n`,
        `Phone:   +91 99792 07802 | +91 72039 50369\n`,
        `Email:   info@krishnaint.co.in\n`,
        `Web:     www.krishnaint.co.in\n\n`,
        `--------------------------------------------------\n`,
        `                 1. POLO T-SHIRTS STATUS           \n`,
        `--------------------------------------------------\n`,
        `- Code 1002: Premium Pique Cotton (200-220 GSM)\n`,
        `- Code 1015: Combed Cotton Pique Polo (220+ GSM)\n`,
        `- Code 1011: Lightweight Pique Collar Uniform (180 GSM)\n\n`,
        `--------------------------------------------------\n`,
        `                 2. SPORTSWEAR & ACTIVEWEAR        \n`,
        `--------------------------------------------------\n`,
        `- Code 1003: Active Crew Neck Dri-Fit (160 GSM)\n`,
        `- Code 1005: Sweat Evaporator Dot Knit (160 GSM)\n`,
        `- Code 1006: Honeycomb Football Jersey (180 GSM)\n\n`,
        `--------------------------------------------------\n`,
        `                 3. CUSTOM PRINTING SPECS         \n`,
        `--------------------------------------------------\n`,
        `- Multi-Color screen plastisol printed lines\n`,
        `- Raised computer-guided Tajima brand Embroidery\n`,
        `- Full-coverage dye-sublimation ink fusing\n\n`,
        `Ready for bulk orders. Minimum Order Quantity (MOQ): 50 pieces.\n`,
        `For pricing sheets, contact us on WhatsApp directly: https://wa.me/919979207802\n`,
        `==================================================\n`
      ], { type: "text/plain;charset=utf-8" });

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Krishna-International-Catalog-Exclusions.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 1500);
  };

  return (
    <div className="w-full bg-white">
      {/* 1. HERO BANNER */}
      <section className="relative w-full bg-zinc-950 min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-zinc-950">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1920"
            fill
            priority
            alt="Krishna International Catalogue Storage"
            className="w-full h-full object-cover object-center opacity-25 select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-16 text-white space-y-4 animate-fadeIn">
          <p className="text-[#C20000] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest">
            Digital Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-sans leading-tight text-white">
            Our Catalogue
          </h1>
          <p className="text-zinc-300 text-sm md:text-base max-w-md font-medium leading-relaxed pt-2">
            Browse our curated collections and download the complete specifications sheet, including fabric samples, sizes, and detailed sewing guides.
          </p>
          <div className="flex items-center gap-2 text-sm text-zinc-400 font-medium pt-4">
            <button onClick={() => router.push("/")} className="hover:text-white cursor-pointer transition-colors">
              Home
            </button>
            <ChevronRight size={14} className="text-zinc-500" />
            <span className="text-zinc-500">Catalogue</span>
          </div>
        </div>
      </section>

      {/* 2. CATALOGUE MAIN HEADER BLOCK WITH DOWNLOAD ACTION */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="bg-zinc-50 border border-zinc-100 p-8 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left shadow-xs">

          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#C20000]/10 rounded-full">
              <Sparkles size={11} className="text-[#C20000]" />
              <span className="text-[9px] font-bold text-[#C20000] uppercase tracking-widest leading-none">
                LATEST VOL. 2024 RELEASED
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-tight">
              Get the Full Apparel Lookbook
            </h2>
            <p className="text-gray-500 text-xs leading-relaxed max-w-2xl">
              Our 2024 technical portfolio features fabric swatches, high-resolution t-shirt designs, neck-band print examples, embroidery tension grids, and standard size guides. Keep a copy for your branding audits.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[11px] text-gray-600 font-bold">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C20000]" />
                Combed Pique Cotton Specs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C20000]" />
                Moisture Wicking Jersey Patterns
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C20000]" />
                Dye Sublimation Color Palette
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C20000]" />
                Wash labels & satin tag trims
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col items-center justify-center space-y-3">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full max-w-[240px] flex items-center justify-center gap-2 bg-[#C20000] hover:bg-black text-white text-xs font-bold tracking-widest uppercase py-3.5 rounded shadow-md transition-all scale-100 hover:scale-102 cursor-pointer disabled:opacity-50"
            >
              <Download size={14} className={downloading ? "animate-bounce" : ""} />
              {downloading ? "Generating..." : "Download Catalogue"}
            </button>
            <p className="text-[10px] text-gray-400 font-mono">
              TXT FORMAT • 92 KB • FREE ACCESS
            </p>

            {downloadSuccess && (
              <div className="bg-emerald-50 border border-emerald-100 p-2.5 rounded text-emerald-800 text-[10px] font-medium flex items-center gap-2 max-w-[240px]">
                <CheckCircle size={14} />
                <span>Download started! Check your downloads system.</span>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 3. GRID SHOWCASING CATEGORIES AND COLLECTIONS */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-20 text-center">
        <div className="space-y-2 mb-12">
          <p className="text-[#C20000] font-mono text-xs font-bold uppercase tracking-widest">
            DIGITAL PORTFOLIOS
          </p>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral-950">
            Selected Digital Collections
          </h2>
          <div className="w-12 h-[3px] bg-[#C20000] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
          {cataloguesList.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-white border border-gray-100 rounded-md p-4 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div className="aspect-square bg-zinc-50 rounded flex items-center justify-center relative overflow-hidden p-4">
                <TShirtMockup
                  style={idx % 2 === 0 ? "polo" : "round"}
                  mainColor={
                    idx === 0 ? "#C20000" :
                      idx === 1 ? "#003b71" :
                        idx === 2 ? "#10B981" :
                          idx === 3 ? "#7C3AED" : "#C026D3"
                  }
                  hasLogo={true}
                  className="w-full max-w-[130px]"
                />
                <div className="absolute top-2 left-2 bg-[#C20000] text-[9px] text-white font-mono px-1.5 py-0.5 rounded-sm tracking-wider">
                  {cat.itemCount} Designs
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-none">
                  Collection Range
                </span>
                <h3 className="font-extrabold text-gray-800 text-xs sm:text-sm uppercase tracking-wide leading-tight line-clamp-1">
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-xs">
                  Category: {cat.category}
                </p>

                <div className="pt-3 border-t border-gray-50 flex justify-between items-center">
                  <button
                    onClick={() => {
                      router.push("/products");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-[10px] font-bold text-gray-700 hover:text-[#C20000] transition-colors uppercase cursor-pointer"
                  >
                    View Range
                  </button>
                  <button
                    onClick={() => openInquiry()}
                    className="text-[10px] font-bold text-[#C20000] hover:underline uppercase cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEWING MACHINERY TECHNICAL DETAILS BAR */}
      <section className="w-full border-t border-gray-150 py-12 bg-neutral-50">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">

          <div className="space-y-1.5">
            <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wide flex justify-center sm:justify-start items-center gap-1.5 text-[#C20000]">
              <Printer size={14} />
              Printed Catalog Specs
            </h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              We offer printed hardcovers delivered with realistic fabric swatch tags directly to purchase departments.
            </p>
          </div>

          <div className="space-y-1.5">
            <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wide flex justify-center sm:justify-start items-center gap-1.5 text-[#C20000]">
              <BookOpen size={14} />
              Regular Swatch Updates
            </h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Get direct alerts whenever new fabric blends—like double-dyed jacquard cotton or recycled dri-fit—are stocked.
            </p>
          </div>

          <div className="space-y-1.5">
            <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wide flex justify-center sm:justify-start items-center gap-1.5 text-[#C20000]">
              <Clock size={14} />
              Quote Response Time
            </h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Submit your catalog references and receive exact bulk billing charts with timeline estimates in 120 minutes.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

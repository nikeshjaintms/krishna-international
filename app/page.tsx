"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useInquiry } from "@/src/components/providers/InquiryProvider";
import Image from "next/image";
import { ArrowRight, Layers, Users, Award, Truck, ShieldCheck, Factory, Sparkles, Cpu, UserCheck, CalendarClock, Coins, MessageSquare, BadgeCheck } from "lucide-react";

import { statsList, whyChooseUs, productsList } from "@/src/data/mockData";
import { Product } from "@/src/types";






export default function Home() {
  const router = useRouter();
  const { openInquiry } = useInquiry();

  const handleFeaturedDetails = (product: Product) => {
    openInquiry(product);
  };

  const collections = [
    { name: "Polo T-Shirts", path: "/products", mainColor: "#C20000", customStyle: "polo" as const },
    { name: "Sportswear", path: "/products", mainColor: "#0055A5", customStyle: "sports" as const, stripeColor: "#ffffff" },
    { name: "Cotton Wear", path: "/products", mainColor: "#10B981", customStyle: "round" as const },
    { name: "Sublimation", path: "/products", mainColor: "#8B5CF6", customStyle: "sublimation" as const, stripeColor: "#FCD34D" },
    { name: "Corporate Uniforms", path: "/products", mainColor: "#1F2937", customStyle: "polo" as const, collarColor: "#C20000" },
  ];

  // Best selling products subset
  const bestSellers: Product[] = [
    { id: 1, code: "1001", name: "Softy Material Polo T-Shirt", category: "Polo", rating: 5, reviewsCount: 120, image: "/images/Softy Material Polo T-Shirt.png" },
    { id: 2, code: "1002", name: "Sublimation Polo", category: "Polo", rating: 4, reviewsCount: 98, image: "/images/sublimation polo.png" },
    { id: 3, code: "1003", name: "Dri Fit T-Shirt", category: "Round Neck", rating: 5, reviewsCount: 150, image: "/images/Dri Fit T-Shirt.png" },
    { id: 4, code: "1011", name: "Dot Knit Polo", category: "Polo", rating: 4, reviewsCount: 87, image: "/images/dot knit polo2.png" },
    { id: 5, code: "1015", name: "Cotton Pique Polo", category: "Polo", rating: 5, reviewsCount: 132, image: "/images/cotton pique polo.png" },
  ];

  const clientLogos = [
    { name: "DECATHLON", font: "font-sans font-black tracking-tighter italic text-blue-700 text-lg" },
    { name: "RELIANCE", font: "font-serif font-extrabold tracking-wider text-red-700 text-md" },
    { name: "KALOREX", font: "font-mono font-bold tracking-widest text-[#C20000]" },
    { name: "NAVYY", font: "font-sans font-medium tracking-widest text-zinc-900" },
    { name: "SAMARPAN", font: "font-serif tracking-widest uppercase text-amber-800 text-sm" },
    { name: "MANGALAM", font: "font-sans font-semibold tracking-wide text-zinc-700" },
    { name: "AVERY DENNISON", font: "font-sans tracking-tight font-black text-zinc-800 text-xs" }
  ];




  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers size={22} className="text-white" />;
      case "Users":
        return <Users size={22} className="text-white" />;
      case "Award":
        return <Award size={22} className="text-white" />;
      case "Truck":
        return <Truck size={22} className="text-white" />;
      default:
        return <Layers size={22} className="text-white" />;
    }
  };



  const getFeatureIcon = (index: number) => {
    const icons = [
      <Sparkles size={24} className="text-[#C20000]" />, // Premium quality
      <Cpu size={24} className="text-[#C20000]" />,      // Advanced
      <UserCheck size={24} className="text-[#C20000]" />,// Skilled
      <ShieldCheck size={24} className="text-[#C20000]" />, // Strict QC
      <CalendarClock size={24} className="text-[#C20000]" />, // On time
      <Coins size={24} className="text-[#C20000]" />     // Competitive
    ];
    return icons[index % icons.length];
  };

  return (
    <div className="w-full bg-white">
      {/* 1. HERO BANNER */}
      <section className="relative w-full overflow-hidden bg-zinc-950 min-h-[500px] md:min-h-[580px] flex items-center">
        {/* Background Image */}
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home-bg.png"
            fill
            priority
            alt="Krishna International"
            className="object-cover object-center scale-105 brightness-90"
          />
        </div>


        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />

        {/* Content Box */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/15 border border-[#C20000]/30 rounded-xs">
              <span className="w-2 h-2 rounded-full bg-[#C20000] animate-ping" />
              <span className="text-[#ff3838] font-mono uppercase text-[10px] font-bold tracking-widest">
                PREMIUM APPAREL MANUFACTURER
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-sans tracking-tight">
              Gujrat's Trusted <br />
              <span className="text-[#ff3c3c]">T-Shirt Manufacturer</span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base max-w-xl font-medium leading-relaxed">
              Premium Quality Apparel for Brands, Events, Sports & Corporate Uniforms. Engineered with combed fibers, advanced tailoring, and global quality checks.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => {
                  router.push("/products");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-2 bg-[#C20000] hover:bg-white text-white hover:text-black font-bold tracking-wider px-6 py-3 rounded-xs text-xs uppercase transition-all shadow-md cursor-pointer"
              >
                Explore Products
                <ArrowRight size={14} />
              </button>
              <button
                onClick={() => openInquiry()}
                className="flex items-center gap-2 bg-transparent hover:bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-white font-bold tracking-wider px-6 py-3 rounded-xs text-xs uppercase transition-colors cursor-pointer"
              >
                Bulk Inquiry
              </button>
            </div>
            {/* Stats Bar inside Hero */}
            <div className="absolute bottom-6 left-6 z-20 flex flex-wrap md:flex-nowrap gap-8">
              {statsList.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 text-white"
                >
                  {/* Icon circle */}
                  <div className="w-10 h-10 rounded-full bg-[#C20000] flex items-center justify-center">
                    {getStatIcon(stat.iconName)}
                  </div>

                  {/* Stat text */}
                  <div>
                    <h3 className="text-lg md:text-xl font-black leading-none">
                      {stat.value}
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>



          </div>
        </div>

        {/* WhatsApp Button bottom-right */}
        <div className="absolute bottom-6 right-6 z-30">
          <button
            onClick={() => window.open("https://wa.me/919999999999", "_blank")}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold tracking-wider px-5 py-2 rounded-full text-xs uppercase shadow-md cursor-pointer"
          >
            {/* WhatsApp icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.17 1.6 6L0 24l6.2-1.6A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0zM12 22c-1.9 0-3.74-.5-5.36-1.44l-.38-.22-3.68.95.98-3.58-.25-.39A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.27-7.73c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.06-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.48.07-.74.36-.26.29-1 1-1 2.43s1.03 2.82 1.17 3.01c.14.19 2.03 3.1 4.92 4.35.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" />
            </svg>
            Chat on WhatsApp
          </button>
        </div>
      </section>


      {/* 3. FIND THE PERFECT COLLECTION (Product Categories Grid) */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
        <div className="space-y-2 mb-12">
          <p className="text-[#C20000] font-mono text-xs font-bold uppercase tracking-widest">
            OUR CATEGORIES
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-zinc-950 uppercase tracking-tight">
            Find the Perfect Collection
          </h2>
          <div className="w-12 h-[3px] bg-[#C20000] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {collections.map((coll, index) => (
            <div
              key={coll.name}
              onClick={() => {
                router.push(coll.path);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group bg-zinc-50 hover:bg-white rounded-md p-4 border border-zinc-100 hover:border-zinc-200 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer text-center flex flex-col justify-between"
            >
              {/* Image Container with Hover Overlay */}
              <div className="aspect-square bg-white rounded-xs p-3 flex items-center justify-center border border-zinc-50 group-hover:bg-zinc-50 transition-colors relative overflow-hidden">
                <img
                  src={`/images/tshirt-${index + 1}.png`}
                  alt={coll.name}
                  className="w-full max-w-[140px] object-contain transform transition-transform duration-300 group-hover:scale-110"
                />

                {/* Hover Overlay Text */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-bold uppercase tracking-wide text-sm">
                    Shop Now
                  </span>
                </div>
              </div>

              {/* Title + View Collection */}
              <div className="mt-4 space-y-1">
                <h3 className="font-bold text-gray-800 text-xs sm:text-sm tracking-wide">
                  {coll.name}
                </h3>
                <span className="inline-flex items-center justify-center gap-1 text-[10px] font-bold text-[#C20000] uppercase tracking-wider group-hover:underline">
                  View Collection
                  <ArrowRight size={10} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 4. WHY CHOOSE US ("We Deliver More Than Just T-Shirts") */}
      <section className="w-full bg-zinc-950 text-white py-20 relative overflow-hidden" >
        <div className="absolute inset-0 opacity-5 select-none pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#C20000] blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-85 h-85 bg-[#C20000] blur-3xl rounded-full" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center space-y-2 mb-12">
            <p className="text-[#ff3838] font-mono text-xs font-bold uppercase tracking-widest">
              WHY CHOOSE US
            </p>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
              We Deliver More Than Just T-Shirts
            </h2>
            <div className="w-12 h-[3px] bg-[#C20000] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <div
                key={feature.title}
                className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-md hover:bg-zinc-900/80 transition-all group hover:border-[#C20000]/40 flex gap-4"
              >
                <div className="w-12 h-12 rounded-sm bg-zinc-800 text-[#ff4c4c] flex items-center justify-center shrink-0 group-hover:bg-[#C20000] group-hover:text-white transition-colors">
                  {getFeatureIcon(idx)}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-100 text-sm tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED / BEST SELLING PRODUCTS SPECIAL CAROUSEL PREVIEW */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 bg-white">
        <div className="text-center space-y-2 mb-12">
          <p className="text-[#C20000] font-mono text-xs font-bold uppercase tracking-widest">
            FEATURED PRODUCTS
          </p>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-950">
            Our Best Selling Products
          </h2>
          <div className="w-12 h-[3px] bg-[#C20000] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {bestSellers.map((seller) => {
            const starStr = "★".repeat(seller.rating) + "☆".repeat(5 - seller.rating);
            return (
              <div
                key={seller.id}
                className="bg-white border border-gray-100 rounded-md p-3.5 shadow-xs hover:shadow-lg hover:border-gray-200 transition-all group flex flex-col justify-between"
              >
                {/* Image box */}
                <div className="h-44 bg-zinc-50 rounded-xs flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={seller.image}
                    alt={seller.name}
                    width={140}
                    height={140}
                    className="w-full max-w-[130px] object-contain transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-2 left-2 bg-black text-[9px] text-white font-mono px-1.5 py-0.5 rounded-xs tracking-wider">
                    {seller.code}
                  </div>
                </div>

                {/* Product details */}
                <div className="mt-4 space-y-2 text-center">
                  <h3 className="font-bold text-[#C20000] text-xs uppercase tracking-wider font-mono">
                    Product Code: {seller.code}
                  </h3>
                  <h4 className="text-xs font-bold text-gray-800 line-clamp-1">
                    {seller.name}
                  </h4>
                  <div className="text-[#FBBF24] text-xs font-mono tracking-widest">
                    {starStr} <span className="text-gray-400 text-[10px]">({seller.reviewsCount})</span>
                  </div>

                  <button
                    onClick={() => handleFeaturedDetails(seller)}
                    className="w-full text-[11px] font-bold text-white bg-zinc-900 group-hover:bg-[#C20000] tracking-widest uppercase py-2 rounded-xs transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. TRUSTED BY BRANDS ACROSS INDIA (Logo cloud) */}
      <section className="w-full border-t border-b border-gray-100 bg-zinc-50/50 py-12 text-center" >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 space-y-6">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            Trusted by Brands Across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-75">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className={`${client.font} hover:scale-105 hover:opacity-100 transition-all select-none cursor-pointer`}
              >
                {client.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER CARD */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="w-full bg-[#C20000] rounded-lg text-white p-8 md:p-12 relative overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-[#990000] via-[#C20000] to-zinc-950">
          {/* Decorative blur overlay */}
          <div className="absolute inset-0 opacity-10 leading-none select-none pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white blur-3xl rounded-full" />
          </div>

          {/* Left text content */}
          <div className="lg:col-span-8 text-left space-y-4 relative z-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight">
              Need Custom T-Shirts <br />for Your Brand?
            </h2>
            <p className="text-white/80 text-xs md:text-sm max-w-xl leading-relaxed">
              Whether you need crew neck shirts for a retail line, premium cotton pique polos to represent corporate staff, or moisture-wicking jerseys for sports teams—we deliver high stitch counts, deep color fastness, and customizable trims.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => openInquiry()}
                className="px-6 py-3 bg-white text-zinc-950 hover:bg-[#111] hover:text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-all shadow-md cursor-pointer"
              >
                Get Bulk Quote
              </button>
              <a
                href="https://wa.me/919979207802"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-md cursor-pointer"
              >
                <MessageSquare size={14} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right image section with larger size + shadow */}
          <div className="lg:col-span-4 flex justify-end relative z-10">
            <Image
              src="/images/k-2.png"
              alt="Custom T-Shirt Banner"
              width={600}   // increased width
              height={480}  // increased height
              className="object-contain rounded-md drop-shadow-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

        </div>
      </section>



    </div>
  );
};

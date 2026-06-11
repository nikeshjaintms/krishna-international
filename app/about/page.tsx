"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useInquiry } from "@/src/components/providers/InquiryProvider";
import Image from "next/image";
import { Award, Users, ShieldCheck, Truck, ChevronRight, Activity, MapPin, Check, Heart, Eye, Bookmark, Zap, MessageSquare, Target, Gem, Handshake, BadgeCheck } from "lucide-react";

export default function About() {
  const router = useRouter();
  const { openInquiry } = useInquiry();
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "5000+", label: "Happy Clients" },
    { value: "100+", label: "Team Members" },
    { value: "1M+", label: "Products Delivered" },
  ];

  const processFlow = [
    {
      step: "01",
      title: "Fabric Selection",
      description: "We source and test premium cotton, blended pique and polyester yarns for weight, color fastness and shrink elasticity.",
    },
    {
      step: "02",
      title: "Design & Sampling",
      description: "Creating highly customized CAD patterns and physical mockups for client approval before the main production run.",
    },
    {
      step: "03",
      title: "Precision Cutting",
      description: "Spreading fabric rolls and executing laser-guided layout cutting to guarantee absolute consistency across all t-shirt sizes.",
    },
    {
      step: "04",
      title: "Expert Stitching",
      description: "Assembly by expert tailors using high speed overlock and flatlock machinery with premium tensile polyester threads.",
    },
    {
      step: "05",
      title: "Strict Quality Check",
      description: "Each garment undergoes strict line audits, thread trimming, metal detection, and shrinkage/steam-iron parameters check.",
    },
    {
      step: "06",
      title: "Packaging & Delivery",
      description: "Individual folding, barcode packing, custom tags and thick waterproof bundles delivered securely PAN India.",
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. HERO SECTION WITH ABOUT CONTENT */}
      <section className="relative w-full bg-zinc-950 min-h-[400px] md:min-h-[450px] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0 bg-zinc-950">
          <Image
            src="/images/home-bg.png"
            alt="Krishna International Factory"
            fill
            priority
            className="w-full h-full object-cover object-center opacity-60"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>

        {/* Content inside hero */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-16 text-white space-y-5 animate-fadeIn">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-400 font-medium">
            <button
              onClick={() => router.push("/")}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Home
            </button>
            <span className="text-zinc-500">/</span>
            <span className="text-zinc-500">About Us</span>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight font-sans">
              About <span className="text-[#C20000]">Us</span>
            </h1>
            <div className="w-20 h-1 bg-[#C20000] mt-4" />
          </div>

          {/* About text directly inside hero */}
          <div className="max-w-xl pt-2">
            <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-medium">
              Krishna International is a leading T-Shirt Manufacturer in India,
              specializing in premium quality apparel for businesses,
              events, sports teams, schools and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STORY & STATS SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Block: Narrative */}
          <div className="space-y-6 text-left">
            <p className="text-[#ff3838] font-bold text-xs uppercase tracking-widest">
              OUR STORY
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900 leading-tight">
              Quality Fabric. Perfect Stitch.<br />
              Trusted by <span className="text-[#ff3838]">Thousands</span>.
            </h2>
            
            <p className="text-gray-700 text-sm leading-relaxed">
              Established with a vision to deliver the best in apparel manufacturing, Krishna International has grown into a trusted name in the industry. With state-of-the-art infrastructure, skilled workforce and a strong commitment to quality, we manufacture a wide range of T-Shirts, Polo T-Shirts and Sportswear that combine comfort, durability and style.
            </p>

            {/* Grid 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="text-[#ff3838] shrink-0 mt-1">
                  <Target size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-zinc-900">Our Mission</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    To deliver premium quality apparel with timely service and build long-term relationships.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#ff3838] shrink-0 mt-1">
                  <Eye size={32} strokeWidth={1.5} /> 
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-zinc-900">Our Vision</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    To be India's most trusted and innovative apparel manufacturing company.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#ff3838] shrink-0 mt-1">
                  <Gem size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-zinc-900">Our Values</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Quality, Integrity, Innovation and Customer Satisfaction are at the core of everything we do.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#ff3838] shrink-0 mt-1">
                  <Handshake size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-zinc-900">Our Commitment</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    We are committed to providing the best products, best prices and best experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Image with Floating Stats */}
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <Image 
              src="/images/our-story.png" 
              alt="Krishna International Factory"
              fill
              className="object-cover object-top rounded-xl"
            />
            {/* Dark banner at the bottom */}
            <div className="absolute bottom-0 inset-x-0 bg-zinc-950/95 p-6 text-white grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-700/50 rounded-b-xl border-t border-zinc-800">
               {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center space-y-1 px-2 text-center">
                    <h4 className="text-2xl font-bold text-[#ff3838]">{stat.value}</h4>
                    <p className="text-[10px] sm:text-xs text-white/80 font-medium">{stat.label}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="w-full bg-zinc-950 py-20 text-white">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <p className="text-[#ff3838] font-bold text-xs uppercase tracking-widest">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              We Deliver More<br />
              Than Just T-Shirts
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-sm">
              From fabric selection to final packaging, every step is executed with precision to ensure superior quality and customer satisfaction.
            </p>

            {/* List 2x3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="text-[#ff3838] shrink-0 mt-0.5"><ShieldCheck size={20}/></div>
                <p className="text-xs font-medium text-white">Premium Quality Fabric<br/><span className="text-zinc-400 font-normal">for superior comfort</span></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#ff3838] shrink-0 mt-0.5"><Activity size={20}/></div>
                <p className="text-xs font-medium text-white">Strict Quality Control<br/><span className="text-zinc-400 font-normal">at every stage</span></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#ff3838] shrink-0 mt-0.5"><Zap size={20}/></div>
                <p className="text-xs font-medium text-white">Advanced Manufacturing<br/><span className="text-zinc-400 font-normal">with modern machines</span></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#ff3838] shrink-0 mt-0.5"><Truck size={20}/></div>
                <p className="text-xs font-medium text-white">On-Time Delivery<br/><span className="text-zinc-400 font-normal">across India</span></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#ff3838] shrink-0 mt-0.5"><Users size={20}/></div>
                <p className="text-xs font-medium text-white">Skilled & Experienced<br/><span className="text-zinc-400 font-normal">Workforce</span></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#ff3838] shrink-0 mt-0.5"><BadgeCheck size={20}/></div>
                <p className="text-xs font-medium text-white">Competitive Pricing<br/><span className="text-zinc-400 font-normal">for bulk orders</span></p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px]">
            <div className="md:col-span-1 h-full rounded-xl overflow-hidden relative border border-zinc-800">
              <Image src="/images/about-3.png" alt="Manufacturing Machine" fill className="object-cover" />
            </div>
            <div className="md:col-span-1 grid grid-rows-2 gap-4 h-full">
              <div className="relative rounded-xl overflow-hidden h-full border border-zinc-800">
                <Image src="/images/about-2.png" alt="Quality check" fill className="object-cover" />
              </div>
              <div className="relative rounded-xl overflow-hidden h-full border border-zinc-800">
                <Image src="/images/why-chooseus.png" alt="Worker folding" fill className="object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MANUFACTURING PROCESS (timeline styled exact-match) */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 text-center bg-white">
        <div className="space-y-2 mb-12">
          <p className="text-[#C20000] font-mono text-xs font-bold uppercase tracking-widest">
            OUR MANUFACTURING PROCESS
          </p>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-900">
            Crafted With Precision
          </h2>
          <div className="w-12 h-[3px] bg-[#C20000] mx-auto mt-2" />
        </div>

        {/* Timeline representation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {processFlow.map((flow, index) => (
            <div key={flow.step} className="flex flex-col text-center relative group">
              {/* Floating connector line shown on large screens */}
              {index <5 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] right-[-12%] h-[1px] bg-zinc-200 z-0" />
              )}
              
              <div className="w-12 h-12 rounded-full border-2 border-zinc-100 group-hover:border-[#C20000] bg-white text-zinc-900 group-hover:bg-[#C20000] group-hover:text-white flex items-center justify-center font-mono font-bold text-xs mx-auto z-10 transition-colors shadow-xs">
                {flow.step}
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="font-bold text-gray-800 text-xs uppercase tracking-wide">
                  {flow.title}
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed px-1">
                  {flow.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT CTA ROW */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-20 bg-white">
        <div className="w-full bg-zinc-950 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white border border-zinc-800 bg-radial from-zinc-900 to-black shadow-xl">
          <div className="text-left space-y-2">
            <h3 className="text-lg md:text-xl font-black uppercase tracking-wide">
              Want to start your bulk order?
            </h3>
            <p className="text-zinc-400 text-xs max-w-md">
              Speak directly with our garment craftsmen. We offer personalized swatch cards and physical stitching sample runs on request.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openInquiry()}
              className="px-5 py-3 bg-[#C20000] hover:bg-white text-white hover:text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
            >
              Get Bulk Quote
            </button>
            <a
              href="https://wa.me/919979207802"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
            >
              <MessageSquare size={13} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

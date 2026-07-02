import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, BadgeCheck, Factory, Truck } from "lucide-react";
import { ProductCatalog } from "@/components/ProductCatalog";
import { getProducts } from "@/lib/products";

export default function ProductsPage() {
  const products = getProducts();

  return (
    <div className="w-full bg-white">

      {/* ── HERO ── */}
      <section className="relative w-full bg-zinc-950 min-h-[380px] sm:min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home-bg1.png"
            fill priority sizes="100vw"
            alt="Krishna International Products"
            className="object-cover object-center brightness-[0.3] select-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/70 to-zinc-950/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-28 pb-12 text-white">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* title + breadcrumb */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={13} className="text-zinc-600" />
                <span className="text-zinc-500">Products</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-none">
                Our <span className="text-[#C20000]">Catalog</span>
              </h1>
              <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
                Premium T-shirts manufactured in Gujarat — polo, round neck, sportswear
                &amp; corporate uniforms for bulk orders.
              </p>
            </div>

            {/* feature chips */}
            <div className="flex flex-wrap gap-3 lg:flex-nowrap">
              {[
                { icon: <BadgeCheck size={20} />, label: "Premium Quality" },
                { icon: <Factory   size={20} />, label: "Direct Manufacturer" },
                { icon: <Truck     size={20} />, label: "Bulk Delivery" },
              ].map(({ icon, label }) => (
                <div key={label}
                  className="flex items-center gap-2.5 bg-white/8 backdrop-blur-sm border border-white/12 px-4 py-2.5 rounded-xl">
                  <span className="text-[#C20000]">{icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CATALOG ── */}
      <ProductCatalog products={products} />

    </div>
  );
}

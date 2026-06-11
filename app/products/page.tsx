import React from "react";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { ChevronRight, BadgeCheck, Star, Factory, Truck } from "lucide-react";
import { ProductCatalog } from "@/src/components/ProductCatalog";
import { Product } from "@/src/types";

// The master product definition
const PRODUCT_DEFINITIONS = [
  // Round Neck Products
  { code: "1001", name: "Plain Polyester Round Neck", category: "Round Neck T-Shirts", fabric: "100% Polyester", gsm: "160 GSM" },
  { code: "1002", name: "Softy Material Round Neck", category: "Round Neck T-Shirts", fabric: "Softy Material", gsm: "180 GSM" },
  { code: "1003", name: "Dry-Fit Round Neck", category: "Round Neck T-Shirts", fabric: "Dry Fit", gsm: "160 GSM" },
  { code: "1004", name: "Rise Knit Round Neck", category: "Round Neck T-Shirts", fabric: "Rise Knit", gsm: "180 GSM" },
  { code: "1005", name: "Dot Knit Round Neck", category: "Round Neck T-Shirts", fabric: "Dry Fit", gsm: "160 GSM" },
  { code: "1006", name: "Football Knit Round Neck", category: "Round Neck T-Shirts", fabric: "Polyester", gsm: "180 GSM" },
  { code: "1007", name: "Cotton Round Neck", category: "Round Neck T-Shirts", fabric: "100% Cotton", gsm: "180 GSM" },
  { code: "1008", name: "Polyester Cotton Round Neck", category: "Round Neck T-Shirts", fabric: "Poly Cotton", gsm: "180 GSM" },

  // Polo Products
  { code: "2001", name: "Dry Fit Polo", category: "Polo T-Shirts", fabric: "Dry Fit", gsm: "200 GSM" },
  { code: "2002", name: "Rise Knit Polo", category: "Polo T-Shirts", fabric: "Rise Knit", gsm: "220 GSM" },
  { code: "2003", name: "Dot Knit Polo", category: "Polo T-Shirts", fabric: "Pique Knit", gsm: "200 GSM" },
  { code: "2004", name: "Spun Pique Polo", category: "Polo T-Shirts", fabric: "Spun Pique", gsm: "220 GSM" },
  { code: "2005", name: "Polo Knit Material", category: "Polo T-Shirts", fabric: "Polo Knit", gsm: "220 GSM" },
  { code: "2006", name: "Poly Cotton Pique Polo", category: "Polo T-Shirts", fabric: "Poly Cotton", gsm: "220 GSM" },
  { code: "2007", name: "Cotton Pique Polo", category: "Polo T-Shirts", fabric: "100% Cotton", gsm: "220 GSM" },
  { code: "2008", name: "Inside Cotton Outside Dry-Fit Polo", category: "Polo T-Shirts", fabric: "Cotton + Dry Fit", gsm: "220 GSM" },
  { code: "2009", name: "Sublimation Polo", category: "Polo T-Shirts", fabric: "Polyester", gsm: "180 GSM" }
];

function normalize(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

async function getProducts(): Promise<Product[]> {
  const imagesDir = path.join(process.cwd(), "public", "images");
  let files: string[] = [];
  try {
    files = fs.readdirSync(imagesDir);
  } catch (error) {
    console.error("Error reading images directory", error);
  }

  const generatedProducts: Product[] = [];

  for (const def of PRODUCT_DEFINITIONS) {
    const normalizedDefName = normalize(def.name);
    
    // Find matching file
    let matchedFile = files.find(file => {
      const fileNameWithoutExt = file.split(".").slice(0, -1).join(".");
      const normalizedFileName = normalize(fileNameWithoutExt);
      // Special edge case: Polo Knit Materia (missing l)
      if (normalizedFileName === "poloknitmateria" && normalizedDefName === "poloknitmaterial") return true;
      return normalizedFileName === normalizedDefName;
    });

    generatedProducts.push({
      id: def.code,
      code: def.code,
      name: def.name,
      category: def.category,
      fabric: def.fabric,
      gsm: def.gsm,
      sizes: ["S", "M", "L", "XL", "XXL"],
      rating: 5,
      reviewsCount: Math.floor(Math.random() * 20) + 10,
      imageUrl: matchedFile ? `/images/${matchedFile}` : "", // Empty if not found, to show placeholder
      description: `Premium ${def.name.toLowerCase()} suitable for corporate, sports, and casual wear.`
    });
  }

  return generatedProducts;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="w-full bg-white">
      {/* HERO BANNER */}
      <section className="relative w-full bg-zinc-950 min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-zinc-950">
          <Image
            src="/images/home-bg.png"
            fill priority
            alt="Krishna International Products"
            className="w-full h-full object-cover object-center opacity-20 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/50" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Left Title */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight font-sans text-white uppercase">
              Our <span className="text-[#C20000]">Catalog</span>
            </h1>
            <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} className="text-gray-500" />
              <span className="text-gray-500">Products</span>
            </div>
          </div>

          {/* Right Features Strip */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3">
              <div className="text-[#C20000] bg-white/10 rounded-lg p-2"><BadgeCheck size={24} /></div>
              <span className="text-xs font-bold leading-tight max-w-[100px] uppercase tracking-wider">Premium Quality</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[#C20000] bg-white/10 rounded-lg p-2"><Factory size={24} /></div>
              <span className="text-xs font-bold leading-tight max-w-[100px] uppercase tracking-wider">Direct Manufacturer</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[#C20000] bg-white/10 rounded-lg p-2"><Truck size={24} /></div>
              <span className="text-xs font-bold leading-tight max-w-[100px] uppercase tracking-wider">Bulk Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG DYNAMIC COMPONENT */}
      <ProductCatalog products={products} />

    </div>
  );
}

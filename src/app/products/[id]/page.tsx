"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ChevronRight, Download, List, CheckCircle2 } from "lucide-react";
import { getProducts } from "@/lib/products";
import { useInquiry } from "@/providers/InquiryProvider";

export default function ProductDetailPage() {
  const { id } = useParams();
  const products = getProducts();
  const product = products.find((p) => p.id === id);

  const { openInquiry } = useInquiry();

  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);
  const [selectedGender, setSelectedGender] = useState(product?.gender?.[0] || "Men");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [imgSrc, setImgSrc] = useState(product?.imageUrl || "");
  const [isFading, setIsFading] = useState(false);

  // When color changes, apply smooth fade and try the color-specific image
  useEffect(() => {
    setIsFading(true);
    setTimeout(() => {
      if (selectedColor?.imageUrl) {
        setImgSrc(selectedColor.imageUrl);
      } else if (product?.imageUrl) {
        setImgSrc(product.imageUrl);
      }
      setIsFading(false);
    }, 150); // half of 300ms for crossfade
  }, [selectedColor, product?.imageUrl]);

  if (!product) {
    return notFound();
  }

  return (
    <div className="w-full bg-white pb-24">
      {/* ── HEADER / BREADCRUMBS ── */}
      <div className="w-full bg-zinc-900 border-b border-zinc-800 pt-20 md:pt-28 pb-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-[11px] font-medium text-zinc-300 tracking-wide uppercase">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} className="text-zinc-600" />
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <ChevronRight size={14} className="text-zinc-600" />
          <span className="text-white">{product.category}</span>
          <ChevronRight size={14} className="text-zinc-600" />
          <span className="text-zinc-500 truncate">{product.name}</span>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT: IMAGE GALLERY */}
          <div className="relative w-full aspect-[3/4] bg-zinc-50 rounded-2xl overflow-hidden flex items-center justify-center border border-zinc-100 group">
            {imgSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imgSrc}
                alt={`${product.name} - ${selectedColor?.name || 'Default'}`}
                className={`absolute inset-0 w-full h-full object-contain p-8 sm:p-12 transition-opacity duration-300 ease-in-out group-hover:scale-105 ${
                  isFading ? 'opacity-0' : 'opacity-100'
                }`}
              />
            ) : (
              <span className="text-zinc-400 font-medium">No Image</span>
            )}
          </div>

          {/* RIGHT: PRODUCT DETAILS */}
          <div className="space-y-10">
            {/* Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-4">
                <p className="text-sm font-bold text-zinc-900">
                  Color: <span className="font-medium text-zinc-500 ml-1">{selectedColor?.name}</span>
                </p>
                <div className="flex flex-wrap gap-4">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className="group flex flex-col items-center gap-2 cursor-pointer"
                    >
                      <span
                        className={`w-12 h-12 rounded shadow-sm transition-all ${selectedColor?.name === color.name
                            ? "ring-4 ring-offset-2 ring-zinc-900 scale-110"
                            : "border border-zinc-200 hover:border-zinc-400"
                          }`}
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className={`text-[10px] uppercase font-bold tracking-widest transition-colors ${selectedColor?.name === color.name ? "text-zinc-900" : "text-zinc-400 group-hover:text-zinc-600"
                        }`}>
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications */}
            <div className="space-y-4">
              <h3 className="text-xs font-black text-zinc-900 uppercase tracking-widest">Product Specifications:</h3>
              <ul className="space-y-2 text-sm font-medium text-zinc-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-zinc-400 mt-0.5">•</span>
                  <span><strong className="text-zinc-800 font-bold">Fabric:</strong> {product.fabric}</span>
                </li>
                {product.blend && (
                  <li className="flex items-start gap-2.5">
                    <span className="text-zinc-400 mt-0.5">•</span>
                    <span><strong className="text-zinc-800 font-bold">Blend:</strong> {product.blend}</span>
                  </li>
                )}
                {product.gsm && (
                  <li className="flex items-start gap-2.5">
                    <span className="text-zinc-400 mt-0.5">•</span>
                    <span><strong className="text-zinc-800 font-bold">GSM:</strong> {product.gsm}</span>
                  </li>
                )}
                {product.finish && (
                  <li className="flex items-start gap-2.5">
                    <span className="text-zinc-400 mt-0.5">•</span>
                    <span><strong className="text-zinc-800 font-bold">Finish:</strong> {product.finish}</span>
                  </li>
                )}
                {product.weave && (
                  <li className="flex items-start gap-2.5">
                    <span className="text-zinc-400 mt-0.5">•</span>
                    <span><strong className="text-zinc-800 font-bold">Weave:</strong> {product.weave}</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Size Chart Toggle */}
            <div>
              <button className="flex items-center gap-2 text-sm font-black text-zinc-900 hover:text-[#C20000] transition-colors cursor-pointer group">
                <List size={16} className="text-zinc-400 group-hover:text-[#C20000]" />
                Size Chart
              </button>
            </div>

            {/* Gender Selection */}
            {product.gender && product.gender.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-black text-zinc-900 uppercase tracking-widest">Choose Category:</h3>
                <div className="flex gap-2 w-full max-w-[280px]">
                  {product.gender.map((g) => (
                    <button
                      key={g}
                      onClick={() => setSelectedGender(g)}
                      className={`flex-1 py-3 text-xs tracking-wider font-bold transition-all rounded-lg border ${selectedGender === g
                          ? "bg-[#1E293B] text-white border-[#1E293B] shadow-md"
                          : "bg-white text-zinc-700 border-zinc-300 hover:border-zinc-500"
                        } cursor-pointer`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Product Catalog Link */}
            {product.catalogPdf && (
              <div className="pt-2">
                <a
                  href={product.catalogPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-300 text-zinc-800 font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-lg hover:bg-zinc-50 transition-colors"
                >
                  <Download size={16} className="text-zinc-500" />
                  Product Catalog
                </a>
              </div>
            )}

            {/* Sizes */}
            <div className="space-y-3 pt-8 border-t border-zinc-100">
              <h3 className="text-xs font-black text-zinc-900 uppercase tracking-widest">Available Sizes:</h3>
              <div className="flex flex-wrap gap-2">
                {["S", "M", "L", "XL", "XXL"].map(size => {
                  const avail = product.sizes?.includes(size);
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => avail && setSelectedSize(size)}
                      disabled={!avail}
                      className={`w-12 h-12 flex items-center justify-center text-sm font-bold font-mono rounded-lg transition-all ${isSelected
                          ? "bg-zinc-900 text-white border-2 border-zinc-900 shadow-sm"
                          : avail
                            ? "bg-white border-2 border-zinc-200 text-zinc-900 hover:border-zinc-900 cursor-pointer"
                            : "border border-zinc-100 text-zinc-300 bg-zinc-50 cursor-not-allowed"
                        }`}>
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 border-t border-zinc-100 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openInquiry(product)}
                className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white font-black text-sm uppercase tracking-widest py-4 px-6 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                Get Bulk Quote
              </button>

              <a
                href="https://wa.me/919979207802"
                target="_blank" rel="noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20b858] text-white font-black text-sm uppercase tracking-widest py-4 px-6 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                WhatsApp Inquiry
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { Product } from "@/types";
import { Star } from "lucide-react";

import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">

      {/* image zone — fluid height using aspect-ratio */}
      <div className="relative w-full aspect-[3/4] bg-gray-50 overflow-hidden flex items-center justify-center">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs font-medium">
            No Image
          </div>
        )}
        {/* top-right badge — GSM */}
        <span className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-sm text-[9px] text-white font-bold px-2 py-1 rounded-md tracking-wider">
          {product.gsm}
        </span>
        {/* bottom-left badge — code */}
        <span className="absolute bottom-2.5 left-2.5 bg-zinc-950 text-[9px] text-white font-bold px-2 py-1 rounded-md tracking-wider">
          #{product.code}
        </span>
      </div>

      {/* info */}
      <div className="flex flex-col flex-grow p-3 sm:p-4 gap-2">

        <h3 className="font-bold text-zinc-900 text-xs sm:text-sm tracking-wide leading-snug line-clamp-2">
          {product.name}
        </h3>

        {/* stars */}
        <div className="flex items-center gap-0.5 mt-auto">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10}
              className={i < (product.rating || 5) ? "text-amber-400 fill-amber-400" : "text-zinc-200 fill-zinc-200"} />
          ))}
          {product.reviewsCount && (
            <span className="text-[9px] text-zinc-400 ml-1">({product.reviewsCount})</span>
          )}
        </div>

        {/* footer row */}
        <div className="pt-3 mt-1 border-t border-gray-100 flex flex-col gap-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider truncate">
              {product.fabric}
            </span>
          </div>
          <Link
            href={`/products/${product.id}`}
            className="w-full bg-[#C20000] hover:bg-[#a00000] text-white text-[10px] font-black uppercase tracking-widest py-2.5 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
// v1

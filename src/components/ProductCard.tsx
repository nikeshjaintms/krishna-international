import React from "react";
import Image from "next/image";
import { Product } from "@/types";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">

      {/* image zone — fluid height using aspect-ratio */}
      <div className="relative w-full aspect-[3/4] bg-zinc-50 overflow-hidden">
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
        <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest leading-none">
          {product.category}
        </span>

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
        <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between gap-2">
          <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-wider truncate">
            {product.fabric}
          </span>
          <button
            onClick={() => onViewDetails(product)}
            className="shrink-0 text-[10px] font-black text-[#C20000] hover:text-zinc-900 uppercase tracking-wider cursor-pointer transition-colors"
          >
            Details →
          </button>
        </div>
      </div>
    </div>
  );
}

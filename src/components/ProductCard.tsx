import React from "react";
import Image from "next/image";
import { Product } from "@/src/types";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const starStr = "★".repeat(product.rating || 5) + "☆".repeat(5 - (product.rating || 5));

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full">
      <div className="h-[320px] bg-white rounded-xl flex items-center justify-center relative overflow-hidden mb-4">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="text-gray-400 font-medium text-sm">No Product Image Available</div>
        )}
        <div className="absolute top-3 right-3 flex gap-1">
          <span className="bg-black/80 backdrop-blur-md text-[10px] text-white font-bold px-2 py-1 rounded-md tracking-wider">
            {product.gsm}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 bg-[#09090b] text-[10px] text-white font-bold px-2 py-1 rounded-md tracking-wider shadow-md">
          CODE: {product.code}
        </div>
      </div>

      <div className="flex flex-col flex-grow px-1">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            {product.category}
          </span>
          <div className="text-[#C20000] font-mono text-[10px]">
            {starStr}
          </div>
        </div>

        <h3 className="font-bold text-[#09090b] text-sm tracking-wide uppercase leading-snug mb-3 pr-1">
          {product.name}
        </h3>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
          <span className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">
            FABRIC: {product.fabric}
          </span>
          <button
            onClick={() => onViewDetails(product)}
            className="font-black text-[#C20000] hover:text-[#09090b] transition-colors uppercase tracking-widest cursor-pointer text-[11px] flex items-center gap-1"
          >
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );
}

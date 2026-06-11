"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useInquiry } from "@/src/components/providers/InquiryProvider";
import { ProductCard } from "@/src/components/ProductCard";
import { Product } from "@/src/types";
import { RotateCcw, SlidersHorizontal, Search, X, Star } from "lucide-react";
import Image from "next/image";

interface ProductCatalogProps {
  products: Product[];
}

export function ProductCatalog({ products }: ProductCatalogProps) {
  const router = useRouter();
  const { openInquiry } = useInquiry();
  const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedFabric, setSelectedFabric] = useState<string[]>([]);
  const [selectedGSM, setSelectedGSM] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Options Counts based on actual list
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [products]);

  const fabricCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach((p) => {
      if (p.fabric) {
        counts[p.fabric] = (counts[p.fabric] || 0) + 1;
      }
    });
    return counts;
  }, [products]);

  const gsmCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach((p) => {
      if (p.gsm) {
        counts[p.gsm] = (counts[p.gsm] || 0) + 1;
      }
    });
    // Sort GSM keys
    return Object.fromEntries(Object.entries(counts).sort());
  }, [products]);

  const sizesCounts = ["S", "M", "L", "XL", "XXL"];

  // Toggle Filters Function
  const handleFabricCheck = (fabric: string) => {
    setSelectedFabric(prev =>
      prev.includes(fabric) ? prev.filter(f => f !== fabric) : [...prev, fabric]
    );
  };

  const handleGSMCheck = (gsm: string) => {
    setSelectedGSM(prev =>
      prev.includes(gsm) ? prev.filter(g => g !== gsm) : [...prev, gsm]
    );
  };

  const handleSizeCheck = (size: string) => {
    setSelectedSize(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSelectedFabric([]);
    setSelectedGSM([]);
    setSelectedSize([]);
    setSearchQuery("");
  };

  // Filtered List
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategory !== "All" && product.category !== selectedCategory) return false;
      if (selectedFabric.length > 0 && !selectedFabric.includes(product.fabric)) return false;
      if (selectedGSM.length > 0 && !selectedGSM.includes(product.gsm)) return false;
      
      if (selectedSize.length > 0) {
        const hasMatchingSize = product.sizes && product.sizes.some(size => selectedSize.includes(size));
        if (!hasMatchingSize) return false;
      }

      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCode = product.code.includes(query);
        if (!matchesName && !matchesCode) return false;
      }
      return true;
    });
  }, [products, selectedCategory, selectedFabric, selectedGSM, selectedSize, searchQuery]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
      {/* Left Column: Filter Panel */}
      <aside className="lg:col-span-3 space-y-8">
        <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
          <h3 className="text-sm font-black uppercase tracking-widest text-[#09090b] flex items-center gap-2">
            <SlidersHorizontal size={16} className="text-[#C20000]" />
            Filters
          </h3>
          <button
            onClick={handleResetFilters}
            className="text-[11px] font-bold text-gray-400 hover:text-[#C20000] flex items-center gap-1 transition-colors uppercase tracking-wider cursor-pointer"
          >
            <RotateCcw size={12} />
            Reset
          </button>
        </div>

        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search code or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C20000] focus:border-transparent outline-none text-[#09090b] font-medium transition-all shadow-sm"
          />
          <Search size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
        </div>

        {/* Categories list */}
        <div className="space-y-3 bg-gray-50 p-4 rounded-xl">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#09090b]">
            Categories
          </h4>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`text-sm text-left py-2 px-3 rounded-lg font-bold transition-all flex justify-between items-center cursor-pointer ${
                selectedCategory === "All"
                  ? "bg-[#09090b] text-white shadow-md"
                  : "text-gray-600 hover:bg-white hover:text-[#09090b]"
              }`}
            >
              <span>All Products</span>
              <span className="text-[11px] opacity-70 bg-white/20 px-2 rounded-full">{products.length}</span>
            </button>
            {Object.keys(categoryCounts).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-sm text-left py-2 px-3 rounded-lg font-bold transition-all flex justify-between items-center cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#09090b] text-white shadow-md"
                    : "text-gray-600 hover:bg-white hover:text-[#09090b]"
                }`}
              >
                <span>{cat}</span>
                <span className="text-[11px] opacity-70 bg-white/20 px-2 rounded-full">{categoryCounts[cat]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Fabric List */}
        {Object.keys(fabricCounts).length > 0 && (
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#09090b] border-l-4 border-[#C20000] pl-3">
              Fabric
            </h4>
            <div className="space-y-3 pl-3">
              {Object.entries(fabricCounts).map(([fab, count]) => (
                <label key={fab} className="flex items-center gap-3 text-sm text-gray-600 font-bold select-none cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedFabric.includes(fab)}
                    onChange={() => handleFabricCheck(fab)}
                    className="w-4 h-4 rounded border-gray-300 text-[#C20000] focus:ring-[#C20000] accent-[#C20000] transition-all"
                  />
                  <span className="group-hover:text-[#09090b] transition-colors">{fab}</span>
                  <span className="text-[11px] text-gray-400 font-normal ml-auto">({count})</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* GSM Checkboxes */}
        {Object.keys(gsmCounts).length > 0 && (
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#09090b] border-l-4 border-[#C20000] pl-3">
              GSM (Weight)
            </h4>
            <div className="space-y-3 pl-3">
              {Object.entries(gsmCounts).map(([gsm, count]) => (
                <label key={gsm} className="flex items-center gap-3 text-sm text-gray-600 font-bold select-none cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedGSM.includes(gsm)}
                    onChange={() => handleGSMCheck(gsm)}
                    className="w-4 h-4 rounded border-gray-300 text-[#C20000] focus:ring-[#C20000] accent-[#C20000] transition-all"
                  />
                  <span className="group-hover:text-[#09090b] transition-colors">{gsm}</span>
                  <span className="text-[11px] text-gray-400 font-normal ml-auto">({count})</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Sizes Checkboxes */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#09090b] border-l-4 border-[#C20000] pl-3">
            Size
          </h4>
          <div className="grid grid-cols-5 gap-2 pl-3">
            {sizesCounts.map((s) => {
              const isActive = selectedSize.includes(s);
              return (
                <button
                  key={s}
                  onClick={() => handleSizeCheck(s)}
                  className={`py-2 text-xs font-mono font-bold text-center rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#C20000] text-white shadow-md transform scale-105"
                      : "bg-gray-50 border border-gray-200 text-gray-600 hover:border-[#09090b] hover:text-[#09090b]"
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Right Column: Catalog Grid Results */}
      <main className="lg:col-span-9 space-y-6">
        <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-sm font-bold text-gray-500 tracking-wide">
            Showing <span className="text-[#09090b]">{filteredProducts.length}</span> results
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl space-y-4">
            <SlidersHorizontal size={48} className="mx-auto text-gray-300" />
            <div>
              <h4 className="font-bold text-[#09090b] uppercase tracking-widest text-sm">No Products Found</h4>
              <p className="text-sm text-gray-500 mt-2 max-w-sm mx-auto">
                Try adjusting your filters or clearing your search.
              </p>
            </div>
            <button
              onClick={handleResetFilters}
              className="px-6 py-3 bg-[#C20000] hover:bg-[#990000] text-white font-bold text-xs tracking-widest uppercase rounded-lg transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} onViewDetails={setSelectedProductDetail} />
            ))}
          </div>
        )}
      </main>

      {/* DYNAMIC PRODUCT DETAIL VIEW (MODAL) */}
      {selectedProductDetail && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-[#09090b]/80 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-y-auto max-h-[95vh] flex flex-col md:flex-row relative animate-fadeIn">
            <button onClick={() => setSelectedProductDetail(null)} className="absolute top-4 right-4 text-gray-400 hover:text-[#09090b] z-20 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors cursor-pointer">
              <X size={24} />
            </button>

            {/* Left Image Side */}
            <div className="w-full md:w-1/2 bg-white flex items-center justify-center relative min-h-[400px]">
              {selectedProductDetail.imageUrl ? (
                <Image
                  src={selectedProductDetail.imageUrl}
                  alt={selectedProductDetail.name}
                  fill
                  className="object-contain object-center p-8 animate-slideUp mix-blend-multiply"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="text-gray-400 font-medium">No Product Image Available</div>
              )}
            </div>

            {/* Right Details Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 space-y-6 flex flex-col justify-center bg-gray-50/50">
              <div>
                <h2 className="text-3xl font-black uppercase text-[#09090b] tracking-tight leading-tight mb-3">
                  {selectedProductDetail.name}
                </h2>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-[#09090b] text-white text-xs font-mono font-bold px-3 py-1.5 rounded-md tracking-widest shadow-sm">
                    CODE: {selectedProductDetail.code}
                  </span>
                  <span className="text-xs font-bold text-[#C20000] uppercase tracking-widest bg-[#C20000]/10 px-3 py-1.5 rounded-md">
                    {selectedProductDetail.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-[#C20000]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill={i < (selectedProductDetail.rating || 5) ? "currentColor" : "none"} strokeWidth={i < (selectedProductDetail.rating || 5) ? 0 : 2} className={i >= (selectedProductDetail.rating || 5) ? "text-gray-300" : ""} />
                ))}
              </div>

              <div className="space-y-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#09090b]">Specifications</h4>
                <ul className="text-sm text-gray-600 space-y-3">
                  <li className="flex gap-2 items-center"><span className="font-bold text-[#09090b] min-w-[80px]">Fabric:</span> {selectedProductDetail.fabric}</li>
                  <li className="flex gap-2 items-center"><span className="font-bold text-[#09090b] min-w-[80px]">GSM:</span> {selectedProductDetail.gsm}</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#09090b]">Available Sizes</h4>
                <div className="flex flex-wrap gap-2">
                  {["S", "M", "L", "XL", "XXL"].map(size => {
                    const isAvailable = selectedProductDetail.sizes?.includes(size);
                    return (
                      <span
                        key={size}
                        className={`w-10 h-10 flex items-center justify-center text-sm font-bold font-mono rounded-lg transition-all ${
                          isAvailable
                            ? 'bg-white border-2 border-[#09090b] text-[#09090b] shadow-sm'
                            : 'border border-gray-200 text-gray-300 bg-gray-50'
                        }`}
                      >
                        {size}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 mt-auto">
                <button
                  onClick={() => {
                    setSelectedProductDetail(null);
                    openInquiry(selectedProductDetail);
                  }}
                  className="w-full bg-[#C20000] hover:bg-[#990000] text-white font-black text-sm uppercase tracking-widest py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                >
                  Add to Bulk Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

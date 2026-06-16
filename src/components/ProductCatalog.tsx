"use client";

import React, { useState, useMemo } from "react";
import { useInquiry } from "@/providers/InquiryProvider";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types";
import { RotateCcw, SlidersHorizontal, Search, X, Star, ChevronDown, ChevronUp, Filter } from "lucide-react";
import Image from "next/image";

interface ProductCatalogProps {
  products: Product[];
}

/* small accordion for filter groups on mobile */
function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-xs font-black uppercase tracking-wider text-zinc-900 cursor-pointer"
      >
        {title}
        {open ? <ChevronUp size={13} className="text-zinc-400" /> : <ChevronDown size={13} className="text-zinc-400" />}
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  );
}

export function ProductCatalog({ products }: ProductCatalogProps) {
  const { openInquiry } = useInquiry();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  /* filter state */
  const [category, setCategory]   = useState("All");
  const [fabrics,  setFabrics]    = useState<string[]>([]);
  const [gsms,     setGsms]       = useState<string[]>([]);
  const [sizes,    setSizes]       = useState<string[]>([]);
  const [query,    setQuery]       = useState("");

  /* derived counts */
  const categoryCounts = useMemo(() => {
    const c: Record<string, number> = {};
    products.forEach(p => { c[p.category] = (c[p.category] || 0) + 1; });
    return c;
  }, [products]);

  const fabricCounts = useMemo(() => {
    const c: Record<string, number> = {};
    products.forEach(p => { if (p.fabric) c[p.fabric] = (c[p.fabric] || 0) + 1; });
    return c;
  }, [products]);

  const gsmCounts = useMemo(() => {
    const c: Record<string, number> = {};
    products.forEach(p => { if (p.gsm) c[p.gsm] = (c[p.gsm] || 0) + 1; });
    return Object.fromEntries(Object.entries(c).sort());
  }, [products]);

  const SIZE_OPTIONS = ["S", "M", "L", "XL", "XXL"];

  const toggle = (arr: string[], val: string) =>
    arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val];

  const reset = () => { setCategory("All"); setFabrics([]); setGsms([]); setSizes([]); setQuery(""); };

  const activeFilterCount = (category !== "All" ? 1 : 0) + fabrics.length + gsms.length + sizes.length + (query ? 1 : 0);

  /* filtered list */
  const filtered = useMemo(() => products.filter(p => {
    if (category !== "All" && p.category !== category) return false;
    if (fabrics.length  && !fabrics.includes(p.fabric))  return false;
    if (gsms.length     && !gsms.includes(p.gsm))        return false;
    if (sizes.length    && !p.sizes?.some(s => sizes.includes(s))) return false;
    if (query.trim()) {
      const q = query.toLowerCase();
      if (!p.name.toLowerCase().includes(q) && !p.code.includes(q)) return false;
    }
    return true;
  }), [products, category, fabrics, gsms, sizes, query]);

  /* ── FILTER PANEL CONTENT (shared between sidebar & drawer) ── */
  const FilterPanelContent = () => (
    <div className="space-y-1">

      {/* search */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search by name or code…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C20000] focus:border-transparent outline-none font-medium transition-all"
        />
        <Search size={14} className="absolute left-3 top-3 text-gray-400" />
        {query && (
          <button onClick={() => setQuery("")} className="absolute right-3 top-3 text-gray-400 hover:text-zinc-900 cursor-pointer">
            <X size={14} />
          </button>
        )}
      </div>

      {/* categories */}
      <FilterGroup title="Category">
        <div className="flex flex-col gap-1">
          <button
            onClick={() => setCategory("All")}
            className={`text-xs text-left py-2 px-3 rounded-lg font-bold transition-all flex justify-between items-center cursor-pointer ${
              category === "All" ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
            }`}
          >
            All Products
            <span className="text-[10px] opacity-60">{products.length}</span>
          </button>
          {Object.keys(categoryCounts).map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`text-xs text-left py-2 px-3 rounded-lg font-bold transition-all flex justify-between items-center cursor-pointer ${
                category === cat ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              }`}
            >
              <span className="truncate pr-2">{cat}</span>
              <span className="shrink-0 text-[10px] opacity-60">{categoryCounts[cat]}</span>
            </button>
          ))}
        </div>
      </FilterGroup>

      {/* fabric */}
      <FilterGroup title="Fabric">
        <div className="space-y-2">
          {Object.entries(fabricCounts).map(([fab, count]) => (
            <label key={fab} className="flex items-center gap-2.5 text-xs text-zinc-600 font-medium cursor-pointer select-none hover:text-zinc-900">
              <input
                type="checkbox"
                checked={fabrics.includes(fab)}
                onChange={() => setFabrics(toggle(fabrics, fab))}
                className="w-3.5 h-3.5 rounded accent-[#C20000]"
              />
              <span className="flex-1">{fab}</span>
              <span className="text-[10px] text-zinc-400">({count})</span>
            </label>
          ))}
        </div>
      </FilterGroup>

      {/* GSM */}
      <FilterGroup title="GSM Weight">
        <div className="space-y-2">
          {Object.entries(gsmCounts).map(([gsm, count]) => (
            <label key={gsm} className="flex items-center gap-2.5 text-xs text-zinc-600 font-medium cursor-pointer select-none hover:text-zinc-900">
              <input
                type="checkbox"
                checked={gsms.includes(gsm)}
                onChange={() => setGsms(toggle(gsms, gsm))}
                className="w-3.5 h-3.5 rounded accent-[#C20000]"
              />
              <span className="flex-1">{gsm}</span>
              <span className="text-[10px] text-zinc-400">({count})</span>
            </label>
          ))}
        </div>
      </FilterGroup>

      {/* sizes */}
      <FilterGroup title="Size">
        <div className="grid grid-cols-5 gap-1.5">
          {SIZE_OPTIONS.map(s => (
            <button
              key={s}
              onClick={() => setSizes(toggle(sizes, s))}
              className={`py-1.5 text-[11px] font-mono font-bold rounded-lg transition-all cursor-pointer ${
                sizes.includes(s)
                  ? "bg-[#C20000] text-white shadow-sm"
                  : "bg-zinc-50 border border-zinc-200 text-zinc-600 hover:border-zinc-900 hover:text-zinc-900"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </FilterGroup>
    </div>
  );

  return (
    <div className="w-full">

      {/* ── MOBILE FILTER BAR ── */}
      <div className="lg:hidden sticky top-[60px] z-40 bg-white border-b border-zinc-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-xl text-xs font-bold text-zinc-700 hover:border-zinc-900 transition-colors cursor-pointer"
          >
            <Filter size={13} />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#C20000] text-white text-[9px] font-black flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          <span className="text-xs text-zinc-500 font-medium">
            <span className="font-bold text-zinc-900">{filtered.length}</span> products
          </span>

          {activeFilterCount > 0 && (
            <button onClick={reset} className="flex items-center gap-1 text-[11px] font-bold text-[#C20000] cursor-pointer">
              <RotateCcw size={11} /> Reset
            </button>
          )}
        </div>
      </div>

      {/* ── MOBILE FILTER DRAWER ── */}
      {mobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          {/* panel */}
          <div className="relative ml-auto w-full max-w-sm bg-white h-full flex flex-col shadow-2xl">
            {/* header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100">
              <span className="font-black text-sm uppercase tracking-wider text-zinc-900">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 cursor-pointer transition-colors">
                <X size={16} />
              </button>
            </div>
            {/* scrollable body */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <FilterPanelContent />
            </div>
            {/* footer */}
            <div className="border-t border-zinc-100 px-5 py-4 flex gap-3">
              <button onClick={reset}
                className="flex-1 py-2.5 border border-zinc-200 rounded-xl text-xs font-bold text-zinc-700 hover:border-zinc-900 cursor-pointer transition-colors">
                Reset All
              </button>
              <button onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-2.5 bg-[#C20000] hover:bg-[#a00000] text-white rounded-xl text-xs font-bold cursor-pointer transition-colors">
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MAIN LAYOUT ── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* ── SIDEBAR (desktop only) ── */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-24">
          <div className="bg-white border border-zinc-100 rounded-2xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-100">
              <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                <SlidersHorizontal size={14} className="text-[#C20000]" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#C20000] text-white text-[9px] font-black flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </h3>
              {activeFilterCount > 0 && (
                <button onClick={reset}
                  className="text-[11px] font-bold text-zinc-400 hover:text-[#C20000] flex items-center gap-1 transition-colors cursor-pointer">
                  <RotateCcw size={11} /> Reset
                </button>
              )}
            </div>
            <FilterPanelContent />
          </div>
        </aside>

        {/* ── PRODUCT GRID ── */}
        <main className="lg:col-span-9 space-y-6">
          {/* result bar — desktop */}
          <div className="hidden lg:flex items-center justify-between bg-zinc-50 border border-zinc-100 px-4 py-3 rounded-xl">
            <span className="text-sm font-medium text-zinc-500">
              Showing <span className="font-black text-zinc-900">{filtered.length}</span> of {products.length} products
            </span>
            {activeFilterCount > 0 && (
              <button onClick={reset} className="text-xs font-bold text-[#C20000] hover:underline cursor-pointer flex items-center gap-1">
                <RotateCcw size={11} /> Clear filters
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-zinc-50 rounded-2xl space-y-4">
              <SlidersHorizontal size={40} className="mx-auto text-zinc-300" />
              <h4 className="font-bold text-zinc-900 uppercase tracking-widest text-sm">No Products Found</h4>
              <p className="text-sm text-zinc-500 max-w-xs mx-auto">Try adjusting your filters or clearing your search.</p>
              <button onClick={reset}
                className="px-6 py-2.5 bg-[#C20000] hover:bg-[#a00000] text-white font-bold text-xs tracking-widest uppercase rounded-lg transition-all cursor-pointer">
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} onViewDetails={setSelectedProduct} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* ══════════════════════════════════════════════════
          PRODUCT DETAIL MODAL
      ══════════════════════════════════════════════════ */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-zinc-950/80 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-white w-full sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[95dvh] sm:max-w-4xl animate-fadeIn"
            onClick={e => e.stopPropagation()}
          >
            {/* close button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 z-20 p-2 bg-white/90 hover:bg-zinc-100 rounded-full shadow-sm transition-colors cursor-pointer"
            >
              <X size={18} className="text-zinc-700" />
            </button>

            {/* IMAGE SIDE */}
            <div className="relative w-full md:w-[42%] shrink-0 bg-zinc-50"
              style={{ minHeight: "clamp(220px, 45vw, 420px)" }}>
              {selectedProduct.imageUrl ? (
                <Image
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain object-center p-6 sm:p-8"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-sm">No Image</div>
              )}
            </div>

            {/* DETAILS SIDE */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-10 space-y-5 bg-white">

              {/* name + badges */}
              <div className="space-y-2 pr-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-zinc-900 tracking-tight leading-tight">
                  {selectedProduct.name}
                </h2>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-zinc-900 text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-md tracking-widest">
                    #{selectedProduct.code}
                  </span>
                  <span className="text-[10px] font-bold text-[#C20000] uppercase tracking-widest bg-[#C20000]/10 px-2.5 py-1 rounded-md">
                    {selectedProduct.category}
                  </span>
                </div>
              </div>

              {/* stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16}
                    className={i < (selectedProduct.rating || 5) ? "text-amber-400 fill-amber-400" : "text-zinc-200 fill-zinc-200"} />
                ))}
                {selectedProduct.reviewsCount && (
                  <span className="text-xs text-zinc-400 ml-1.5">({selectedProduct.reviewsCount} reviews)</span>
                )}
              </div>

              {/* specs */}
              <div className="bg-zinc-50 rounded-xl p-4 space-y-3">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Specifications</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-0.5">Fabric</p>
                    <p className="text-sm font-bold text-zinc-900">{selectedProduct.fabric}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-0.5">GSM</p>
                    <p className="text-sm font-bold text-zinc-900">{selectedProduct.gsm}</p>
                  </div>
                </div>
              </div>

              {/* sizes */}
              <div className="space-y-2.5">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Available Sizes</h4>
                <div className="flex flex-wrap gap-2">
                  {["S", "M", "L", "XL", "XXL"].map(size => {
                    const avail = selectedProduct.sizes?.includes(size);
                    return (
                      <span key={size}
                        className={`w-10 h-10 flex items-center justify-center text-xs font-bold font-mono rounded-lg ${
                          avail
                            ? "bg-white border-2 border-zinc-900 text-zinc-900 shadow-sm"
                            : "border border-zinc-200 text-zinc-300 bg-zinc-50"
                        }`}>
                        {size}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => { setSelectedProduct(null); openInquiry(selectedProduct); }}
                className="w-full bg-[#C20000] hover:bg-[#a00000] text-white font-black text-sm uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl cursor-pointer mt-2"
              >
                Add to Bulk Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

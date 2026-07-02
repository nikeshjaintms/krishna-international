"use client";
import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle, MessageSquare, Package, ArrowRight } from "lucide-react";
import { useInquiry } from "@/providers/InquiryProvider";

const INPUT =
  "w-full px-3 py-2.5 text-sm border border-zinc-200 rounded-lg focus:ring-2 focus:ring-[#C20000] focus:border-transparent outline-none text-zinc-800 bg-white transition-all placeholder:text-zinc-400";

const LABEL = "block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1";

export const InquiryModal: React.FC = () => {
  const { isInquiryOpen, closeInquiry, selectedProduct } = useInquiry();

  const [formData, setFormData] = useState({
    name:     "",
    phone:    "",
    email:    "",
    company:  "",
    quantity: "100",
    fabric:   "Cotton",
    category: "Polo T-Shirt",
    notes:    "",
  });

  const [submitted, setSubmitted] = useState(false);

  /* sync selected product into form */
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      category: selectedProduct?.category ?? "Polo T-Shirt",
      notes: selectedProduct
        ? `Inquiry for Code: ${selectedProduct.code} — ${selectedProduct.name}`
        : "",
    }));
  }, [selectedProduct]);

  /* lock body scroll while open */
  useEffect(() => {
    if (isInquiryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      /* reset state when modal closes */
      setSubmitted(false);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isInquiryOpen]);

  if (!isInquiryOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `*Krishna International Bulk Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Category:* ${formData.category}\n` +
      `*Quantity:* ${formData.quantity} pcs\n` +
      `*Fabric:* ${formData.fabric}\n` +
      (formData.notes ? `*Notes:* ${formData.notes}` : "")
    );
    window.open(`https://wa.me/919979207802?text=${text}`, "_blank");
  };

  return (
    /* backdrop — click outside to close */
    <div
      className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center sm:p-4 bg-zinc-950/70 backdrop-blur-sm"
      onClick={closeInquiry}
    >
      {/* panel */}
      <div
        className="
          relative bg-white w-full
          sm:max-w-lg sm:rounded-2xl
          rounded-t-2xl
          max-h-[92dvh] sm:max-h-[90vh]
          overflow-hidden flex flex-col
          shadow-2xl
        "
        onClick={e => e.stopPropagation()}
      >

        {/* ── HEADER ── */}
        <div className="shrink-0 flex items-center justify-between px-5 py-4 bg-zinc-950 text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C20000] flex items-center justify-center shrink-0">
              <Package size={15} />
            </div>
            <div>
              <p className="text-sm font-black tracking-wide uppercase leading-none">Bulk Inquiry</p>
              <p className="text-[10px] text-zinc-400 font-mono mt-0.5">Get Custom Factory Quote</p>
            </div>
          </div>
          <button
            onClick={closeInquiry}
            className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* ── SCROLLABLE BODY ── */}
        <div className="flex-1 overflow-y-auto overscroll-contain">

          {!submitted ? (
            <form onSubmit={handleSubmit} className="p-5 space-y-4">

              {/* selected product chip */}
              {selectedProduct && (
                <div className="flex items-center gap-3 bg-zinc-50 border border-zinc-200 rounded-xl p-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#C20000]/10 text-[#C20000] font-black text-xs flex items-center justify-center">
                    #{selectedProduct.code}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-zinc-900 truncate">{selectedProduct.name}</p>
                    <p className="text-[10px] text-zinc-400 truncate">
                      {selectedProduct.category} · {selectedProduct.fabric}
                    </p>
                  </div>
                </div>
              )}

              {/* row 1 — name + phone (stack on xs, side-by-side on sm) */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                <div>
                  <label className={LABEL}>Your Name *</label>
                  <input type="text" name="name" required value={formData.name}
                    onChange={handleChange} className={INPUT} placeholder="Full name" />
                </div>
                <div>
                  <label className={LABEL}>Phone / WhatsApp *</label>
                  <input type="tel" name="phone" required value={formData.phone}
                    onChange={handleChange} className={INPUT} placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              {/* row 2 — email + company */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                <div>
                  <label className={LABEL}>Email</label>
                  <input type="email" name="email" value={formData.email}
                    onChange={handleChange} className={INPUT} placeholder="you@company.com" />
                </div>
                <div>
                  <label className={LABEL}>Company / Brand</label>
                  <input type="text" name="company" value={formData.company}
                    onChange={handleChange} className={INPUT} placeholder="Your Brand Pvt Ltd" />
                </div>
              </div>

              {/* row 3 — quantity (full) + fabric (full) — 2 cols on sm */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={LABEL}>Target Quantity *</label>
                  <select name="quantity" value={formData.quantity} onChange={handleChange}
                    className={INPUT + " cursor-pointer"}>
                    <option value="50">50 – 100 pcs</option>
                    <option value="100">100 – 500 pcs</option>
                    <option value="500">500 – 2000 pcs</option>
                    <option value="2000">2000+ pcs</option>
                  </select>
                </div>
                <div>
                  <label className={LABEL}>Fabric Style</label>
                  <select name="fabric" value={formData.fabric} onChange={handleChange}
                    className={INPUT + " cursor-pointer"}>
                    <option value="Cotton">100% Bio Cotton</option>
                    <option value="Pique Knit">Premium Pique Cotton-Poly</option>
                    <option value="Polyester">Standard Polyester Knit</option>
                    <option value="Dry Fit">Active Dry Fit Honeycomb</option>
                  </select>
                </div>
              </div>

              {/* row 4 — category (full width) */}
              <div>
                <label className={LABEL}>Product Category</label>
                <select name="category" value={formData.category} onChange={handleChange}
                  className={INPUT + " cursor-pointer"}>
                  <option value="Polo T-Shirt">Polo T-Shirt</option>
                  <option value="Sportswear">Sportswear / Jersey</option>
                  <option value="Cotton Wear">Cotton Wear</option>
                  <option value="Sublimation">Sublimation Wear</option>
                  <option value="Corporate Uniform">Corporate Uniform</option>
                </select>
              </div>

              {/* notes */}
              <div>
                <label className={LABEL}>Customisation Notes</label>
                <textarea name="notes" value={formData.notes} onChange={handleChange}
                  rows={3} className={INPUT + " resize-none"}
                  placeholder="E.g. Left-chest embroidery, double stitch, delivery to Mumbai…" />
              </div>

              {/* submit row */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-widest py-3 rounded-xl uppercase transition-colors cursor-pointer"
                >
                  <MessageSquare size={13} />
                  Chat on WhatsApp
                </button>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#C20000] hover:bg-zinc-900 text-white text-xs font-bold tracking-widest py-3 rounded-xl uppercase transition-colors cursor-pointer"
                >
                  <Send size={13} />
                  Send Proposal
                </button>
              </div>

              <p className="text-center text-[10px] text-zinc-400">
                We respond within 2 business hours · MOQ 50 pieces
              </p>
            </form>

          ) : (
            /* ── SUCCESS STATE ── */
            <div className="p-6 flex flex-col items-center text-center space-y-5">
              {/* icon */}
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle size={36} />
              </div>

              <div className="space-y-1.5">
                <h4 className="font-black text-zinc-900 text-sm uppercase tracking-widest">
                  Proposal Submitted!
                </h4>
                <p className="text-zinc-500 text-xs leading-relaxed max-w-xs mx-auto">
                  Our production managers are building your pricing sheet. We'll reach
                  out within 2 business hours.
                </p>
              </div>

              {/* summary card */}
              <div className="w-full bg-zinc-50 border border-zinc-100 rounded-xl p-4 text-left space-y-2">
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3">Your Inquiry Summary</p>
                {[
                  ["Name",     formData.name],
                  ["Phone",    formData.phone],
                  ["Category", formData.category],
                  ["Quantity", `${formData.quantity} pcs`],
                ].filter(([, v]) => v).map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400 font-medium">{k}</span>
                    <span className="font-bold text-zinc-900">{v}</span>
                  </div>
                ))}
              </div>

              <div className="w-full grid grid-cols-1 xs:grid-cols-2 gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest py-3 rounded-xl transition-colors cursor-pointer"
                >
                  <MessageSquare size={13} />
                  Connect on WhatsApp
                </button>
                <button
                  onClick={() => { setSubmitted(false); closeInquiry(); }}
                  className="flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold uppercase tracking-widest py-3 rounded-xl transition-colors cursor-pointer"
                >
                  Done <ArrowRight size={12} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

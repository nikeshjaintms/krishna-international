"use client";
import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle, Smartphone } from "lucide-react";
import { Product } from "../types";
import { useInquiry } from "./providers/InquiryProvider";

export const InquiryModal: React.FC = () => {
  const { isInquiryOpen, closeInquiry, selectedProduct } = useInquiry();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "100",
    fabric: "Cotton",
    category: selectedProduct ? selectedProduct.category : "Polo T-Shirts",
    notes: selectedProduct ? `Inquiry regarding code: ${selectedProduct.code} - ${selectedProduct.name}` : "",
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      category: selectedProduct ? selectedProduct.category : "Polo T-Shirts",
      notes: selectedProduct ? `Inquiry regarding code: ${selectedProduct.code} - ${selectedProduct.name}` : "",
    }));
  }, [selectedProduct]);

  const [submitted, setSubmitted] = useState(false);

  if (!isInquiryOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsappRedirect = () => {
    const text = encodeURIComponent(
      `*Krishna International Bulk Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Category:* ${formData.category}\n` +
      `*Quantity:* ${formData.quantity} pcs\n` +
      `*Fabric:* ${formData.fabric}\n` +
      `*Notes:* ${formData.notes}`
    );
    window.open(`https://wa.me/919979207802?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg border border-gray-100 overflow-hidden transform scale-100 transition-all">
        {/* Header */}
        <div className="bg-black text-white px-6 py-4 flex justify-between items-center bg-radial from-zinc-900 to-black">
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase">
              Bulk Inquiry Portal
            </h3>
            <p className="text-[10px] text-zinc-400 font-mono tracking-wider">
              Get Custom Factory Quote
            </p>
          </div>
          <button
            onClick={closeInquiry}
            className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {selectedProduct && (
                <div className="bg-zinc-50 border-l-4 border-[#C20000] p-3 rounded-xs flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-200 rounded-sm flex items-center justify-center font-bold text-[#C20000] text-xs">
                    {selectedProduct.code}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">
                      Selected: {selectedProduct.name}
                    </h4>
                    <p className="text-[10px] text-gray-500">
                      Category: {selectedProduct.category} | Fabric: {selectedProduct.fabric}
                    </p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xs focus:ring-1 focus:ring-red-600 focus:border-red-600 outline-none text-gray-800"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xs focus:ring-1 focus:ring-red-600 focus:border-red-600 outline-none text-gray-800"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xs focus:ring-1 focus:ring-red-600 focus:border-red-600 outline-none text-gray-800"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xs focus:ring-1 focus:ring-red-600 focus:border-red-600 outline-none text-gray-800"
                    placeholder="Your Brand Pvt Ltd"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Target Qty *
                  </label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-2 py-2 text-xs border border-gray-200 rounded-xs bg-white text-gray-800 focus:ring-1 focus:ring-red-600 outline-none cursor-pointer"
                  >
                    <option value="50">50 - 100 pcs</option>
                    <option value="100">100 - 500 pcs</option>
                    <option value="500">500 - 2000 pcs</option>
                    <option value="2000">2000+ pcs</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Fabric Style
                  </label>
                  <select
                    name="fabric"
                    value={formData.fabric}
                    onChange={handleChange}
                    className="w-full px-2 py-2 text-xs border border-gray-200 rounded-xs bg-white text-gray-800 focus:ring-1 focus:ring-red-600 outline-none cursor-pointer"
                  >
                    <option value="Cotton">100% Bio Cotton</option>
                    <option value="Pique Knit">Premium Pique Cotton-Poly</option>
                    <option value="Polyester">Standard Polyester Knit</option>
                    <option value="Dry Fit">Active Dry Fit Honeycomb</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-2 py-2 text-xs border border-gray-200 rounded-xs bg-white text-gray-800 focus:ring-1 focus:ring-red-600 outline-none cursor-pointer"
                  >
                    <option value="Polo T-Shirts">Polo T-Shirts</option>
                    <option value="Sportswear">Sportswear / Jerseys</option>
                    <option value="Cotton Wear">Cotton Wear</option>
                    <option value="Sublimation">Sublimation Wear</option>
                    <option value="Corporate Uniforms">Corporate Uniforms</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Customization Instructions
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xs focus:ring-1 focus:ring-red-600 outline-none text-gray-800"
                  placeholder="E.g., Left Chest Embroidery of logo size 2 inches. Double stitch. Delivery to Mumbai."
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={handleWhatsappRedirect}
                  className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-widest py-3 rounded-sm uppercase transition-colors cursor-pointer"
                >
                  <Smartphone size={14} />
                  Chat on Whatsapp
                </button>
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-[#C20000] hover:bg-black text-white text-xs font-bold tracking-widest py-3 rounded-sm uppercase transition-colors cursor-pointer"
                >
                  <Send size={13} />
                  Send Proposal
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full">
                <CheckCircle size={32} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                  Proposal Submitted Successfully
                </h4>
                <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto leading-relaxed">
                  Thank you! Our factory production managers are building your detailed pricing sheet. We will contact you or email you within 2 business hours.
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-xs max-w-sm mx-auto text-left text-xs text-gray-600">
                <p className="font-bold text-gray-800 mb-1">Reviewing coordinates:</p>
                <p>• Name: {formData.name}</p>
                <p>• Quantity: {formData.quantity} Units ({formData.category})</p>
                <p>• Phone: {formData.phone}</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  onClick={handleWhatsappRedirect}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                >
                  Connect Directly on Whatsapp
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    closeInquiry();
                  }}
                  className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

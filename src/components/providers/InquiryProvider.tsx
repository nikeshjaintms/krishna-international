"use client";
import React, { createContext, useContext, useState } from "react";
import { Product } from "../../types";

interface InquiryContextType {
  isInquiryOpen: boolean;
  selectedProduct: Product | null;
  openInquiry: (product?: Product | null) => void;
  closeInquiry: () => void;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openInquiry = (product?: Product | null) => {
    setSelectedProduct(product || null);
    setIsInquiryOpen(true);
  };

  const closeInquiry = () => {
    setIsInquiryOpen(false);
    setSelectedProduct(null);
  };

  return (
    <InquiryContext.Provider value={{ isInquiryOpen, selectedProduct, openInquiry, closeInquiry }}>
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (context === undefined) {
    throw new Error("useInquiry must be used within an InquiryProvider");
  }
  return context;
}

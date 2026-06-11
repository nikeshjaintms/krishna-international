"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { useInquiry } from "./providers/InquiryProvider";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openInquiry } = useInquiry();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80); // switch after 80px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "PRODUCTS", path: "/products" },
    { name: "CUSTOMIZATION", path: "/customization" },
    { name: "CATALOGUE", path: "/catalogue" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <header
  className={`w-full z-50 fixed top-0 transition-all duration-300 ${
    scrolled
      ? "bg-white shadow-md text-gray-800"
      : "bg-transparent text-white"
  }`}
>
    
      {/* Primary Navigation Header */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center py-2">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center cursor-pointer"
        >
          <Image
            src="/images/logo.png" // ✅ updated logo path
            alt="Krishna International Logo"
            width={90} // ✅ reduced size
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navbar Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-xs font-bold tracking-wider relative transition-colors duration-200 py-2 ${isActive ? "text-[#C20000]" : "hover:text-[#C20000]"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C20000]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Menu Toggles */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => openInquiry()}
            className="hidden sm:flex items-center gap-1.5 bg-[#C20000] hover:bg-black text-white text-xs font-bold tracking-widest px-4 py-2 rounded-sm transition-all duration-300 uppercase shadow-md"
          >
            Bulk Inquiry
            <ArrowRight size={13} />
          </button>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 hover:text-[#C20000]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white border-t border-gray-100 py-4 px-4 flex flex-col gap-3 shadow-inner">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-left text-sm font-bold tracking-wider py-2.5 px-3 rounded-xs transition-colors cursor-pointer ${isActive
                    ? "bg-white shadow-md text-gray-800"
                    : "bg-transparent text-white"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-2 px-3">
            <button
              onClick={() => {
                openInquiry();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#C20000] hover:bg-black text-white text-xs font-bold tracking-widest py-3 rounded-sm transition-colors uppercase cursor-pointer"
            >
              Bulk Inquiry
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


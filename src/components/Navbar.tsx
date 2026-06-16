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
import { useInquiry } from "@/providers/InquiryProvider";
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
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white shadow-md text-gray-800"
      : "bg-transparent text-white"
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16 md:h-20">
      
      {/* Logo */}
      <Link
        href="/"
        onClick={() => setIsOpen(false)}
        className="flex-shrink-0"
      >
        <Image
          src="/images/logo.png"
          alt="Krishna International Logo"
          width={120}
          height={50}
          className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;

          return (
            <Link
              key={link.name}
              href={link.path}
              className={`relative py-2 text-xs xl:text-sm font-bold tracking-wider transition-colors ${
                isActive
                  ? "text-[#C20000]"
                  : "hover:text-[#C20000]"
              }`}
            >
              {link.name}

              {isActive && (
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#C20000]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => openInquiry()}
          className="hidden md:flex items-center gap-2 bg-[#C20000] hover:bg-black text-white text-xs lg:text-sm font-bold px-4 py-2 rounded transition"
        >
          Bulk Inquiry
          <ArrowRight size={14} />
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="lg:hidden bg-white shadow-lg border-t">
      <nav className="flex flex-col px-4 py-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;

          return (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-md text-sm font-semibold transition ${
                isActive
                  ? "bg-[#C20000] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.name}
            </Link>
          );
        })}

        <button
          onClick={() => {
            openInquiry();
            setIsOpen(false);
          }}
          className="mt-4 flex items-center justify-center gap-2 bg-[#C20000] hover:bg-black text-white font-semibold py-3 rounded-md"
        >
          Bulk Inquiry
          <ArrowRight size={14} />
        </button>
      </nav>
    </div>
  )}
</header>
  );
};


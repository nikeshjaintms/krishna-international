"use client";
import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";
import Image from "next/image";


export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#111] text-gray-400 text-xs pt-16 pb-8 relative border-t border-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Col 1: About Firm */}
        <div className="lg:col-span-1.5 flex flex-col gap-5">
         {/* Brand Logo */}
<Link href="/" className="flex items-center cursor-pointer">
  <Image
    src="/images/footer-logo-1.png"
    alt="Krishna International Logo"
    width={120}
    height={70}
    className="object-contain"
    priority
  />
</Link>


          <div className="flex items-center gap-2.5">
            <a href="#" className="w-7 h-7 rounded-sm bg-zinc-800 text-gray-300 flex items-center justify-center hover:bg-[#C20000] hover:text-white transition-all">
              <Facebook size={12} />
            </a>
            <a href="#" className="w-7 h-7 rounded-sm bg-zinc-800 text-gray-300 flex items-center justify-center hover:bg-[#C20000] hover:text-white transition-all">
              <Instagram size={12} />
            </a>
            <a href="#" className="w-7 h-7 rounded-sm bg-zinc-800 text-gray-300 flex items-center justify-center hover:bg-[#C20000] hover:text-white transition-all">
              <Linkedin size={12} />
            </a>
            <a href="#" className="w-7 h-7 rounded-sm bg-zinc-800 text-gray-300 flex items-center justify-center hover:bg-[#C20000] hover:text-white transition-all">
              <Youtube size={12} />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold tracking-wider uppercase text-xs border-l-2 border-[#C20000] pl-2.5">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link href="/" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer">
                Products
              </Link>
            </li>
            <li>
              <Link href="/customization" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer">
                Customization
              </Link>
            </li>
            <li>
              <Link href="/catalogue" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer">
                Catalogue
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Products Categories */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold tracking-wider uppercase text-xs border-l-2 border-[#C20000] pl-2.5">
            Products
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link href="/products" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer">
                Polo T-Shirts
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer">
                Sportswear
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer">
                Cotton Wear
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer">
                Sublimation
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer">
                Corporate Uniforms
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer">
                Dry Fit T-Shirts
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Customization Types */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold tracking-wider uppercase text-xs border-l-2 border-[#C20000] pl-2.5">
            Customization
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link href="/customization" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer font-medium">
                Sublimation Printing
              </Link>
            </li>
            <li>
              <Link href="/customization" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer text-gray-400">
                Screen Printing
              </Link>
            </li>
            <li>
              <Link href="/customization" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer text-gray-400">
                Embroidery
              </Link>
            </li>
            <li>
              <Link href="/customization" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer text-gray-400">
                DTF Printing
              </Link>
            </li>
            <li>
              <Link href="/customization" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer text-gray-400">
                Heat Transfer
              </Link>
            </li>
            <li>
              <Link href="/customization" className="hover:text-[#C20000] hover:underline underline-offset-2 transition-colors text-left cursor-pointer text-gray-400">
                Custom Packaging
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 5: Contact Info */}
        <div className="flex flex-col gap-4 text-gray-400">
          <h4 className="text-white font-bold tracking-wider uppercase text-xs border-l-2 border-[#C20000] pl-2.5">
            Contact Info
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2 leading-relaxed">
              <MapPin size={14} className="text-[#C20000] shrink-0 mt-0.5" />
              <span>
                18, Senkhunj Society, Nr. Technical School, Highway Road, Kalol - 382721, Gujarat, India.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-[#C20000] shrink-0" />
              <div className="flex flex-col">
                <a href="tel:+919979207802" className="hover:text-white transition-colors">
                  +91 99792 07802
                </a>
                <a href="tel:+917203950369" className="hover:text-white transition-colors">
                  +91 72039 50369
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-[#C20000] shrink-0" />
              <a href="mailto:info@krishnaint.co.in" className="hover:text-white transition-colors">
                info@krishnaint.co.in
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe size={14} className="text-[#C20000] shrink-0" />
              <a href="https://www.krishnaint.co.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                www.krishnaint.co.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Border Area */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 font-medium text-center sm:text-left">
          © 2024 Krishna International. All Rights Reserved.
        </div>
        <div className="flex items-center gap-5 text-gray-500 font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
        </div>
      </div>

      {/* Floating Scroll-to-Top trigger button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 w-9 h-9 rounded-full bg-[#C20000] hover:bg-white text-white hover:text-black border border-transparent hover:border-gray-800 flex items-center justify-center transition-all shadow-md focus:outline-none cursor-pointer"
        aria-label="Back to Top"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
};

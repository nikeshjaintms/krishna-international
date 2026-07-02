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
    <footer className="w-full bg-[#111] text-gray-400 pt-12 md:pt-16 pb-8 border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
        {/* About Section */}
        <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex">
            <Image
              src="/images/footer-logo-1.png"
              alt="Krishna International Logo"
              width={140}
              height={80}
              className="w-28 sm:w-32 md:w-36 h-auto"
              priority
            />
          </Link>

          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-md bg-zinc-800 flex items-center justify-center hover:bg-[#C20000] hover:text-white transition"
            >
              <Facebook size={16} />
            </a>

            <a
              href="#"
              className="w-9 h-9 rounded-md bg-zinc-800 flex items-center justify-center hover:bg-[#C20000] hover:text-white transition"
            >
              <Instagram size={16} />
            </a>

            <a
              href="#"
              className="w-9 h-9 rounded-md bg-zinc-800 flex items-center justify-center hover:bg-[#C20000] hover:text-white transition"
            >
              <Linkedin size={16} />
            </a>

            <a
              href="#"
              className="w-9 h-9 rounded-md bg-zinc-800 flex items-center justify-center hover:bg-[#C20000] hover:text-white transition"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold uppercase text-sm border-l-2 border-[#C20000] pl-3 mb-4">
            Quick Links
          </h4>

          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-[#C20000] transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-[#C20000] transition"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="hover:text-[#C20000] transition"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                href="/customization"
                className="hover:text-[#C20000] transition"
              >
                Customization
              </Link>
            </li>

            <li>
              <Link
                href="/catalogue"
                className="hover:text-[#C20000] transition"
              >
                Catalogue
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-[#C20000] transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-bold uppercase text-sm border-l-2 border-[#C20000] pl-3 mb-4">
            Products
          </h4>

          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link
                href="/products"
                className="hover:text-[#C20000] transition"
              >
                Polo T-Shirt
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="hover:text-[#C20000] transition"
              >
                Sportswear
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="hover:text-[#C20000] transition"
              >
                Cotton Wear
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="hover:text-[#C20000] transition"
              >
                Sublimation
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="hover:text-[#C20000] transition"
              >
                Corporate Uniform
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="hover:text-[#C20000] transition"
              >
                Dry-Fit T-Shirt
              </Link>
            </li>
          </ul>
        </div>

        {/* Customization */}
        <div>
          <h4 className="text-white font-bold uppercase text-sm border-l-2 border-[#C20000] pl-3 mb-4">
            Customization
          </h4>

          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link
                href="/customization"
                className="hover:text-[#C20000] transition"
              >
                Sublimation Printing
              </Link>
            </li>

            <li>
              <Link
                href="/customization"
                className="hover:text-[#C20000] transition"
              >
                Screen Printing
              </Link>
            </li>

            <li>
              <Link
                href="/customization"
                className="hover:text-[#C20000] transition"
              >
                Embroidery
              </Link>
            </li>

            <li>
              <Link
                href="/customization"
                className="hover:text-[#C20000] transition"
              >
                DTF Printing
              </Link>
            </li>

            <li>
              <Link
                href="/customization"
                className="hover:text-[#C20000] transition"
              >
                Heat Transfer
              </Link>
            </li>

            <li>
              <Link
                href="/customization"
                className="hover:text-[#C20000] transition"
              >
                Custom Packaging
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-sm">
          <h4 className="text-white font-bold uppercase text-sm border-l-2 border-[#C20000] pl-3 mb-4">
            Contact Info
          </h4>

          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <MapPin
                size={18}
                className="text-[#C20000] mt-1 shrink-0"
              />

              <span className="leading-6 break-words">
                18, Senkhunj Society, Nr. Technical School,
                Highway Road, Kalol - 382721,
                Gujarat, India.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Phone
                size={18}
                className="text-[#C20000] mt-1 shrink-0"
              />

              <div className="flex flex-col gap-1">
                <a
                  href="tel:+919979207802"
                  className="hover:text-white transition"
                >
                  +91 99792 07802
                </a>

                <a
                  href="tel:+917203950369"
                  className="hover:text-white transition"
                >
                  +91 72039 50369
                </a>
              </div>
            </li>

            <li className="flex items-center gap-3">
              <Mail
                size={18}
                className="text-[#C20000] shrink-0"
              />

              <a
                href="mailto:info@krishnaint.co.in"
                className="hover:text-white transition break-all"
              >
                info@krishnaint.co.in
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Globe
                size={18}
                className="text-[#C20000] shrink-0"
              />

              <a
                href="https://www.krishnaint.co.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition break-all"
              >
                www.krishnaint.co.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Krishna International. All Rights Reserved. Designed & Developed by{" "}
            <a
              href="https://techomaxsolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-yellow-500 transition-colors"
            >
              Techomax Solution
            </a>
        </p>

        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>

          <span className="hidden sm:block">|</span>

          <a href="#" className="hover:text-white transition">
            Terms & Conditions
          </a>
        </div>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        aria-label="Back To Top"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C20000] hover:bg-white hover:text-black text-white shadow-lg flex items-center justify-center transition-all"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

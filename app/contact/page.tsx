"use client";
import { useRouter } from "next/navigation";
import { useInquiry } from "@/src/components/providers/InquiryProvider";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronRight, MapPin, Phone, Mail, Globe, Send, MessageSquare, BadgeCheck, Compass, Clock, Facebook, Instagram, Linkedin, Youtube, Timer, Briefcase, PenTool, ShieldCheck, Award, Box, Truck, Smile, Wrench } from "lucide-react";

export default function Contact() {
  const router = useRouter();
  const { openInquiry } = useInquiry();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "Bulk Order Quote",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full bg-white">
      {/* 1. HERO BANNER */}
      <section className="relative w-full bg-[#0a0a0a] min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/images/contact-hero-bg.png"
            fill
            priority
            alt="Contact Krishna International"
            className="w-full h-full object-cover object-right-top select-none"
          />
          {/* Gradient to make left side dark, blending into the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent w-full md:w-[75%]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-20 flex flex-col items-start text-left animate-fadeIn">
          <div className="max-w-2xl">
            <p className="text-[#C20000] font-bold text-xs md:text-sm uppercase tracking-widest mb-4">
              CONTACT US
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black tracking-tight leading-[1.1] text-white mb-6">
              We're Here to Help<br />
              Your <span className="text-[#C20000]">Business</span>
            </h1>

            <div className="w-12 h-[3px] bg-[#C20000] mb-8" />

            <div className="space-y-1.5 mb-10">
              <p className="text-gray-100 text-lg md:text-xl font-medium">
                Have a question or need a bulk quote?
              </p>
              <p className="text-gray-100 text-lg md:text-xl font-medium">
                Our team is ready to assist you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="tel:+919979207802" className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#C20000] hover:bg-red-700 text-white px-8 py-3.5 rounded-md font-bold text-sm tracking-wider transition-colors">
                <Phone size={18} className="fill-white" />
                CALL US NOW
              </a>
              <a href="https://wa.me/919979207802" target="_blank" rel="noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-transparent border border-white/60 hover:border-white hover:bg-white/5 text-white px-8 py-3.5 rounded-md font-bold text-sm tracking-wider transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                CHAT ON WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TOP INFO BAR */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 relative z-20">
        <div className="w-full bg-[#FAFAFA] rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 flex flex-wrap lg:flex-nowrap items-start justify-between gap-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">

          <div className="flex gap-4 w-full lg:w-1/4 pt-4 lg:pt-0">
            <div className="text-[#C20000] shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Our Address</h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                18, Senkhunj Society, Nr. Technical School, Highway Road, Kalol - 382721, Gujarat, India.
              </p>
            </div>
          </div>

          <div className="flex gap-4 w-full lg:w-1/5 pt-4 lg:pt-0 lg:pl-6">
            <div className="text-[#C20000] shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Phone</h4>
              <p className="text-gray-500 text-xs">
                +91 99792 07802<br />
                +91 72039 50369
              </p>
            </div>
          </div>

          <div className="flex gap-4 w-full lg:w-1/5 pt-4 lg:pt-0 lg:pl-6">
            <div className="text-[#C20000] shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Email</h4>
              <p className="text-gray-500 text-xs">
                info@krishnaint.co.in<br />
                krishnaintl@gmail.com
              </p>
            </div>
          </div>

          <div className="flex gap-4 w-full lg:w-1/5 pt-4 lg:pt-0 lg:pl-6">
            <div className="text-[#C20000] shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Office Hours</h4>
              <p className="text-gray-500 text-xs">
                Monday - Saturday<br />
                9:00 AM - 7:00 PM
              </p>
            </div>
          </div>

          <div className="flex gap-4 w-full lg:w-[15%] pt-4 lg:pt-0 lg:pl-6">
            <div className="text-[#C20000] shrink-0">
              <Send size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3">Follow Us</h4>
              <div className="flex items-center gap-3 text-gray-700">
                <a href="#" className="hover:text-[#C20000] transition-colors"><Facebook size={18} /></a>
                <a href="#" className="hover:text-[#C20000] transition-colors"><Instagram size={18} /></a>
                <a href="#" className="hover:text-[#C20000] transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="hover:text-[#C20000] transition-colors"><Youtube size={18} /></a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MAIN CONTACT SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* Left Side: Form */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-[#C20000] font-bold text-xs uppercase tracking-widest">
              GET IN TOUCH
            </p>
            <h2 className="text-3xl font-black text-zinc-900">
              Send Us a Message
            </h2>
            <p className="text-gray-500 text-sm">
              Fill out the form and our team will get back to you as soon as possible.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded focus:ring-1 focus:ring-red-600 outline-none text-zinc-800"
                  placeholder="Your Name *"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded focus:ring-1 focus:ring-red-600 outline-none text-zinc-800"
                  placeholder="Your Email *"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded focus:ring-1 focus:ring-red-600 outline-none text-zinc-800"
                  placeholder="Phone Number *"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded focus:ring-1 focus:ring-red-600 outline-none text-zinc-800"
                  placeholder="Company Name"
                />
              </div>

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded bg-white text-zinc-800 focus:ring-1 focus:ring-red-600 outline-none cursor-pointer"
              >
                <option value="Subject *">Subject *</option>
                <option value="Bulk Order Quote">Bulk Order Quote</option>
                <option value="Sample Design Mockup Request">Sample Design Mockup Request</option>
                <option value="General Question">General Question</option>
              </select>

              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded focus:ring-1 focus:ring-red-600 outline-none text-zinc-800"
                placeholder="Your Message *"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#C20000] hover:bg-black text-white text-sm font-bold tracking-widest uppercase py-4 rounded transition-colors cursor-pointer"
              >
                <Send size={16} />
                SEND MESSAGE
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4 border border-gray-100 rounded p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full">
                <BadgeCheck size={32} />
              </div>
              <div>
                <h4 className="text-sm font-black text-gray-800 uppercase tracking-wider">
                  Contact Message Received
                </h4>
                <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
                  Excellent! We have indexed your message successfully. Our team will get back to you shortly.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          )}

          {/* Quick Assistance Box */}
          <div className="border border-gray-200 rounded flex flex-wrap items-center justify-between p-5 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-50 text-[#C20000] rounded-full flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">For Quick Assistance</h4>
                <p className="text-gray-500 text-xs">Call or WhatsApp us for immediate support</p>
              </div>
            </div>
            <div className="text-right">
              <a href="tel:+919979207802" className="block font-black text-lg text-zinc-900 hover:text-[#C20000]">+91 99792 07802</a>
              <a href="https://wa.me/919979207802" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 text-xs font-bold mt-1">
                <MessageSquare size={14} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Location & Features */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-zinc-900">Our Location</h2>

          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14664.834164810014!2d72.48364239855562!3d23.235503023168772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2560372df03d%3A0xc31fa4af1cf29824!2sKalol%2C%20Gujarat%20382721!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Krishna International Location"
            ></iframe>
          </div>

          <div className="bg-[#0E0F10] rounded-xl p-8 text-white space-y-6">
            <h3 className="text-xl font-bold">Why Connect With Us?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="flex gap-4">
                <div className="text-[#C20000] shrink-0">
                  <Timer size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Quick Response</h4>
                  <p className="text-gray-400 text-xs">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-[#C20000] shrink-0">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Bulk Order Support</h4>
                  <p className="text-gray-400 text-xs">Special pricing for bulk requirements</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-[#C20000] shrink-0">
                  <Wrench size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Custom Solutions</h4>
                  <p className="text-gray-400 text-xs">Tailored designs for your brand</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-[#C20000] shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Reliable Service</h4>
                  <p className="text-gray-400 text-xs">Quality products and on-time delivery</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* 4. BOTTOM FEATURE BAR */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="w-full bg-[#FAFAFA] rounded-xl border border-gray-100 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">

          <div className="flex items-center gap-4 sm:pl-4 lg:pl-0">
            <div className="text-[#C20000] shrink-0">
              <Award size={32} />
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 text-sm mb-1">Premium Quality</h4>
              <p className="text-gray-500 text-xs">We use the best fabrics for superior comfort</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-6 sm:pt-0 sm:pl-8">
            <div className="text-[#C20000] shrink-0">
              <Box size={32} />
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 text-sm mb-1">Bulk Production</h4>
              <p className="text-gray-500 text-xs">High capacity manufacturing for bulk orders</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-6 lg:pt-0 lg:pl-8">
            <div className="text-[#C20000] shrink-0">
              <Truck size={32} />
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 text-sm mb-1">Fast Delivery</h4>
              <p className="text-gray-500 text-xs">On-time delivery across India</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-6 sm:pt-0 sm:pl-8">
            <div className="text-[#C20000] shrink-0">
              <Smile size={32} />
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 text-sm mb-1">100% Satisfaction</h4>
              <p className="text-gray-500 text-xs">Quality products with customer satisfaction</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

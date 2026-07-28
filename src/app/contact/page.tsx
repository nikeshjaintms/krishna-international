"use client";
import { useRouter } from "next/navigation";
import { useInquiry } from "@/providers/InquiryProvider";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight, MapPin, Phone, Mail,
  Send, MessageSquare, BadgeCheck, Clock,
  Facebook, Instagram,
  Timer, Briefcase, Wrench, ShieldCheck,
  Award, Box, Truck, Smile,
} from "lucide-react";

/* scroll-reveal */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}
const fadeUp = (v: boolean, delay = 0) =>
  `transition-all duration-700 ${delay ? `delay-[${delay}ms]` : ""} ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

const INPUT = "w-full px-4 py-3 text-sm border border-zinc-200 rounded-lg focus:ring-2 focus:ring-[#C20000] focus:border-transparent outline-none text-zinc-800 bg-white transition-all";

export default function Contact() {
  const router = useRouter();
  const { openInquiry } = useInquiry();

  const s2 = useInView();
  const s3 = useInView();
  const s4 = useInView();

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "",
    company: "", subject: "Bulk Order Quote", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const contactItems = [
    {
      icon: <MapPin size={20} />, title: "Address",
      content: "18, Senkhunj Society, Nr. Technical School, Highway Road, Kalol - 382721, Gujarat, India.",
    },
    {
      icon: <Phone size={20} />, title: "Phone",
      content: "+91 99792 07802\n+91 72039 50369",
    },
    {
      icon: <Mail size={20} />, title: "Email",
      content: "info@krishnaint.co.in\nkrishnaintl@gmail.com",
    },
    {
      icon: <Clock size={20} />, title: "Office Hours",
      content: "Monday – Saturday\n9:00 AM – 7:00 PM",
    },
  ];

  const whyConnect = [
    { icon: <Timer size={20} />,     title: "Quick Response",      body: "We reply within 24 hours." },
    { icon: <Briefcase size={20} />, title: "Bulk Order Support",   body: "Special pricing for bulk requirements." },
    { icon: <Wrench size={20} />,    title: "Custom Solutions",     body: "Tailored designs for your brand." },
    { icon: <ShieldCheck size={20} />, title: "Reliable Service",   body: "Quality products & on-time delivery." },
  ];

  const bottomFeatures = [
    { icon: <Award size={28} />,   title: "Premium Quality",  body: "Best fabrics for superior comfort." },
    { icon: <Box size={28} />,     title: "Bulk Production",  body: "High-capacity manufacturing." },
    { icon: <Truck size={28} />,   title: "Fast Delivery",    body: "On-time delivery across India." },
    { icon: <Smile size={28} />,   title: "100% Satisfaction",body: "Quality products, happy clients." },
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden">

      {/* ══════════════════════════════
          1. HERO
      ══════════════════════════════ */}
      <section className="relative w-full bg-zinc-950 min-h-[460px] sm:min-h-[520px] md:min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero-bg.png"
            fill priority sizes="100vw"
            alt="Contact Krishna International"
            className="object-cover object-right-top brightness-[0.35] select-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/70 to-zinc-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-28 pb-14 text-white animate-fadeIn">
          <div className="max-w-xl space-y-5">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400">
              <button onClick={() => router.push("/")} className="hover:text-white transition-colors cursor-pointer">Home</button>
              <ChevronRight size={13} className="text-zinc-600" />
              <span className="text-zinc-500">Contact</span>
            </div>

            <p className="text-[#C20000] font-mono text-[11px] font-bold uppercase tracking-[0.2em]">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
              We're Here to Help<br />
              Your <span className="text-[#C20000]">Business</span>
            </h1>
            <div className="w-14 h-1 bg-[#C20000]" />
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Have a question or need a bulk quote? Our team is ready to assist you.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col xs:flex-row flex-wrap gap-3 pt-1">
              <a href="tel:+919979207802"
                className="flex items-center justify-center gap-2 bg-[#C20000] hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold text-sm tracking-wide transition-colors">
                <Phone size={16} />
                Call Us Now
              </a>
              <a href="https://wa.me/919979207802" target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-lg font-bold text-sm tracking-wide transition-colors backdrop-blur-sm">
                <MessageSquare size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════
          2. CONTACT INFO BAR
      ══════════════════════════════ */}
      <section ref={s2.ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-14">
        <div className={`${fadeUp(s2.visible)} bg-white rounded-2xl shadow-md border border-zinc-100 overflow-hidden`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-100">
            {contactItems.map(item => (
              <div key={item.title} className="flex items-start gap-4 p-5 sm:p-6">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#C20000]/10 text-[#C20000] flex items-center justify-center mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider mb-1">{item.title}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed whitespace-pre-line">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social row */}
          <div className="border-t border-zinc-100 px-5 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Follow us on social media</span>
            <div className="flex items-center gap-4 text-zinc-500">
              <a href="https://www.facebook.com/people/Scorpion-Tees/61589031926250/"
                target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-50 hover:bg-[#C20000] hover:text-white flex items-center justify-center transition-all">
                <Facebook size={14} />
              </a>
              <a href="https://www.instagram.com/scorpiontees/"
                target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-50 hover:bg-[#C20000] hover:text-white flex items-center justify-center transition-all">
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════
          3. FORM + MAP
      ══════════════════════════════ */}
      <section ref={s3.ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">

          {/* ── LEFT: Form ── */}
          <div className={`${fadeUp(s3.visible)} space-y-6`}>
            <div className="space-y-1.5">
              <p className="text-[#C20000] font-bold text-[11px] uppercase tracking-[0.2em]">Get in Touch</p>
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900">Send Us a Message</h2>
              <p className="text-zinc-500 text-sm">Fill out the form and we'll get back to you shortly.</p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text"    name="name"    required value={formData.name}    onChange={handleChange} className={INPUT} placeholder="Your Name *" />
                  <input type="email"   name="email"   required value={formData.email}   onChange={handleChange} className={INPUT} placeholder="Your Email *" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel"     name="phone"   required value={formData.phone}   onChange={handleChange} className={INPUT} placeholder="Phone Number *" />
                  <input type="text"    name="company"          value={formData.company} onChange={handleChange} className={INPUT} placeholder="Company Name" />
                </div>
                <select name="subject" value={formData.subject} onChange={handleChange} className={INPUT + " cursor-pointer"}>
                  <option value="Bulk Order Quote">Bulk Order Quote</option>
                  <option value="Sample Design Mockup Request">Sample Design Mockup Request</option>
                  <option value="General Question">General Question</option>
                </select>
                <textarea name="message" required value={formData.message} onChange={handleChange}
                  rows={5} className={INPUT + " resize-none"} placeholder="Your Message *" />
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#C20000] hover:bg-zinc-900 text-white text-sm font-bold tracking-widest uppercase py-3.5 rounded-lg transition-colors cursor-pointer shadow-md">
                  <Send size={15} /> Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-10 border border-zinc-100 rounded-2xl bg-zinc-50 space-y-4 px-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full">
                  <BadgeCheck size={30} />
                </div>
                <div>
                  <h4 className="font-black text-zinc-900 text-sm uppercase tracking-wider">Message Received!</h4>
                  <p className="text-zinc-500 text-xs mt-1 leading-relaxed max-w-xs mx-auto">
                    Our team will get back to you within 24 hours.
                  </p>
                </div>
                <button onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer">
                  Send Another
                </button>
              </div>
            )}

            {/* quick call box */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-zinc-100 rounded-xl p-4 sm:p-5 bg-zinc-50">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 shrink-0 bg-[#C20000]/10 text-[#C20000] rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm leading-tight">Quick Assistance</h4>
                  <p className="text-zinc-500 text-xs">Call or WhatsApp for instant support</p>
                </div>
              </div>
              <div className="text-left sm:text-right pl-14 sm:pl-0">
                <a href="tel:+919979207802" className="block font-black text-base text-zinc-900 hover:text-[#C20000] transition-colors">
                  +91 99792 07802
                </a>
                <a href="https://wa.me/919979207802" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 text-xs font-bold mt-0.5 transition-colors">
                  <MessageSquare size={12} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Map + Why connect ── */}
          <div className={`${fadeUp(s3.visible)} space-y-6`} style={{ transitionDelay: "120ms" }}>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900">Our Location</h2>

            {/* map */}
            <div className="w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-sm" style={{ height: "clamp(220px, 40vw, 320px)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14664.834164810014!2d72.48364239855562!3d23.235503023168772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2560372df03d%3A0xc31fa4af1cf29824!2sKalol%2C%20Gujarat%20382721!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Krishna International Location"
              />
            </div>

            {/* why connect */}
            <div className="bg-zinc-950 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="font-black text-base sm:text-lg mb-5 uppercase tracking-wide">Why Connect With Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyConnect.map(w => (
                  <div key={w.title} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-[#C20000]/40 transition-colors">
                    <div className="text-[#C20000] shrink-0 mt-0.5">{w.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{w.title}</h4>
                      <p className="text-zinc-400 text-xs mt-0.5">{w.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════
          4. BOTTOM FEATURE BAR
      ══════════════════════════════ */}
      <section ref={s4.ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-14 md:pb-20">
        <div className={`${fadeUp(s4.visible)} bg-zinc-50 rounded-2xl border border-zinc-100 overflow-hidden`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-zinc-100">
            {bottomFeatures.map(f => (
              <div key={f.title} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-5 sm:p-6">
                <div className="shrink-0 text-[#C20000]">{f.icon}</div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-xs sm:text-sm leading-tight">{f.title}</h4>
                  <p className="text-zinc-500 text-[10px] sm:text-xs mt-0.5 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

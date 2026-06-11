import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";
import { InquiryProvider } from "../src/components/providers/InquiryProvider";
import { InquiryModal } from "../src/components/InquiryModal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Krishna International - Custom Apparel Manufacturing",
  description: "Premium bulk apparel manufacturing and customization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased selection:bg-[#C20000] selection:text-white font-sans min-h-screen flex flex-col justify-between bg-white`}>
        <InquiryProvider>
          <Navbar />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer />
          <InquiryModal />
        </InquiryProvider>
      </body>
    </html>
  );
}

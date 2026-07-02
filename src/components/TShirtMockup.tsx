import React, { useState, useRef } from "react";
import Image from "next/image";

interface TShirtMockupProps {
  style: "polo" | "round" | "sports";
  mainColor: string;
  sleeveColor?: string;
  collarColor?: string;
  stripeColor?: string;
  hasLogo?: boolean;
  customLogo?: string | null;
  className?: string;
  showDetailsLabel?: boolean;
}

export const TShirtMockup: React.FC<TShirtMockupProps> = ({
  style,
  mainColor,
  hasLogo = false,
  customLogo = null,
  className = "w-full h-full",
  showDetailsLabel = false,
}) => {
  // Use our perfectly cut-out realistic generated PNGs!
  // Note: we use v4/v6 to bypass previous browser caches
  let baseImage = "/images/polo-mockup-v4.png"; 
  
  if (style === "round") {
    baseImage = "/images/round-mockup-v4.png";
  } else if (style === "sports") {
    baseImage = "/images/sports-mockup-v6.png";
  }

  // Draggable Logo State
  const [logoPos, setLogoPos] = useState({ x: 68, y: 30 }); // Default percentage position
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    // Capture pointer to allow dragging outside the logo box smoothly
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Clamp to prevent dragging way outside
    const clampedX = Math.max(10, Math.min(90, x));
    const clampedY = Math.max(10, Math.min(90, y));
    
    setLogoPos({ x: clampedX, y: clampedY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
    >
      
      {/* 1. Base color layer clipped exactly to the t-shirt silhouette */}
      <div 
        className="absolute inset-0 z-0 transition-colors duration-500"
        style={{
          backgroundColor: mainColor,
          WebkitMaskImage: `url('${baseImage}')`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: `url('${baseImage}')`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      />

      {/* 2. Realistic folds, shadows, and texture overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none mix-blend-multiply opacity-100 transition-all"
        style={{ filter: "grayscale(100%) contrast(1.05) brightness(1.02)" }}
      >
        <img 
          src={baseImage} 
          alt="Realistic T-Shirt Mockup" 
          className="w-full h-full object-contain pointer-events-none select-none"
          draggable="false"
        />
      </div>

      {/* 3. Uploaded Custom Logo or Default Brand Logo - Draggable */}
      {hasLogo && (
        <div 
          className="absolute z-20 w-10 h-10 drop-shadow-md transition-shadow duration-300 flex items-center justify-center cursor-move"
          style={{
            top: `${logoPos.y}%`,
            left: `${logoPos.x}%`,
            transform: "translate(-50%, -50%)",
            boxShadow: isDragging ? "0 0 15px rgba(255,255,255,0.4)" : "none",
            borderRadius: "4px"
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
           {customLogo ? (
             <img src={customLogo} alt="Custom Logo" className="max-w-full max-h-full object-contain drop-shadow-md pointer-events-none select-none" draggable="false" />
           ) : (
             <svg viewBox="0 0 100 100" className="w-6 h-6 opacity-90 transform hover:scale-110 pointer-events-none select-none">
               {/* White Base */}
               <path d="M 20 20 L 40 20 L 40 80 L 20 80 Z" fill="#ffffff" />
               <path d="M 40 50 L 70 20 L 90 20 L 60 50 L 90 80 L 70 80 L 40 50 Z" fill="#ffffff" />
               {/* Red Inner */}
               <path d="M 25 25 L 35 25 L 35 75 L 25 75 Z" fill="#C20000" />
               <path d="M 35 50 L 60 25 L 75 25 L 50 50 L 75 75 L 60 75 L 35 50 Z" fill="#C20000" />
             </svg>
           )}
        </div>
      )}

      {/* Decorative details tag */}
      {showDetailsLabel && (
        <div className="absolute top-2 right-2 z-30 bg-black/60 backdrop-blur-xs text-[10px] text-white px-2 py-0.5 rounded-full font-mono uppercase tracking-wider shadow-lg">
          {style} Series
        </div>
      )}
    </div>
  );
};

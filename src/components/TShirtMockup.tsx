import React from "react";

interface TShirtMockupProps {
  style?: "polo" | "round" | "sports" | "sublimation";
  mainColor?: string;
  collarColor?: string;
  sleeveColor?: string;
  stripeColor?: string;
  hasLogo?: boolean;
  className?: string;
  showDetailsLabel?: boolean;
}

export const TShirtMockup: React.FC<TShirtMockupProps> = ({
  style = "polo",
  mainColor = "#C20000", // Default Krishna International brand red
  collarColor,
  sleeveColor,
  stripeColor,
  hasLogo = true,
  className = "w-full h-full",
  showDetailsLabel = false,
}) => {
  const collColor = collarColor || mainColor;
  const slvColor = sleeveColor || mainColor;

  // Let's craft highly sophisticated vectors of polo and crew neck t-shirts with folds, lights and shading.
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[320px] filter drop-shadow-md hover:scale-105 transition-transform duration-300"
      >
        <defs>
          {/* Folds and Shading Overlays */}
          <linearGradient id="shading" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.12" />
            <stop offset="25%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#000000" stopOpacity="0" />
            <stop offset="75%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.18" />
          </linearGradient>

          {/* Highlights to give 3D fabric feel */}
          <radialGradient id="fabric-depth" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
          </radialGradient>
          
          <linearGradient id="fold-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="20%" stopColor="#000000" stopOpacity="0.1" />
            <stop offset="80%" stopColor="#ffffff" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* T-Shirt Body Base clipping path or contour */}
        <g id="tshirt-group">
          {/* 1. Sleeves Left & Right */}
          {/* Left Sleeve */}
          <path
            d="M 120 120 L 50 140 L 70 185 L 115 170 Z"
            fill={slvColor}
            stroke="#000000"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          {/* Left Sleeve Cuff */}
          <path
            d="M 50 140 L 70 185 L 67 190 L 45 145 Z"
            fill={collColor}
            opacity="0.95"
          />

          {/* Right Sleeve */}
          <path
            d="M 280 120 L 350 140 L 330 185 L 285 170 Z"
            fill={slvColor}
            stroke="#000000"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          {/* Right Sleeve Cuff */}
          <path
            d="M 350 140 L 330 185 L 333 190 L 355 145 Z"
            fill={collColor}
            opacity="0.95"
          />

          {/* 2. Main Body Contour */}
          <path
            d="M 120 120 C 140 125 260 125 280 120 C 285 170 290 320 285 365 C 240 370 160 370 115 365 C 110 320 115 170 120 120 Z"
            fill={mainColor}
            stroke="#000000"
            strokeOpacity="0.1"
            strokeWidth="1"
          />

          {/* Sublimation / Sports Style Stripe Overlay */}
          {(style === "sports" || style === "sublimation") && (
            <g opacity="0.85">
              {/* Dynamic Jersey Details */}
              <path
                d="M 150 124 L 170 367 L 195 368 L 175 125 Z"
                fill={stripeColor || "#ffffff"}
                opacity="0.9"
              />
              <path
                d="M 225 125 L 205 368 L 230 367 L 250 124 Z"
                fill={stripeColor || "#ffffff"}
                opacity="0.9"
              />
              <path
                d="M 50 140 L 120 120 L 115 145 L 60 160 Z"
                fill={stripeColor || "#ffffff"}
                opacity="0.4"
              />
              <path
                d="M 350 140 L 280 120 L 285 145 L 340 160 Z"
                fill={stripeColor || "#ffffff"}
                opacity="0.4"
              />
            </g>
          )}

          {/* 3D Dynamic Fabric Shading Overlay (Combined Blend Grid) */}
          <path
            d="M 120 120 C 140 125 260 125 280 120 C 285 170 290 320 285 365 C 240 370 160 370 115 365 C 110 320 115 170 120 120 Z"
            fill="url(#shading)"
            style={{ mixBlendMode: "multiply" }}
          />
          <path
            d="M 120 120 C 140 125 260 125 280 120 C 285 170 290 320 285 365 C 240 370 160 370 115 365 C 110 320 115 170 120 120 Z"
            fill="url(#fabric-depth)"
            style={{ mixBlendMode: "overlay" }}
          />
          <path
            d="M 120 120 C 140 125 260 125 280 120 C 285 170 290 320 285 365 C 240 370 160 370 115 365 C 110 320 115 170 120 120 Z"
            fill="url(#fold-grad)"
            style={{ mixBlendMode: "overlay" }}
            opacity="0.8"
          />

          {/* 3. Collar Style */}
          {style === "polo" ? (
            // Polo Rib Collar
            <g id="polo-collar">
              {/* Left Wing Collar */}
              <path
                d="M 200 125 L 140 120 C 135 125 150 160 170 180 Z"
                fill={collColor}
                stroke="#000000"
                strokeOpacity="0.15"
                strokeWidth="1.5"
              />
              {/* Right Wing Collar */}
              <path
                d="M 200 125 L 260 120 C 265 125 250 160 230 180 Z"
                fill={collColor}
                stroke="#000000"
                strokeOpacity="0.15"
                strokeWidth="1.5"
              />
              {/* Inner Collar Back */}
              <path
                d="M 140 120 C 160 108 240 108 260 120 C 240 128 160 128 140 120 Z"
                fill="#222222"
              />
              {/* Polo Button Placket */}
              <path
                d="M 194 135 L 206 135 L 206 195 L 194 195 Z"
                fill={collColor}
                stroke="#000000"
                strokeOpacity="0.18"
                strokeWidth="1"
              />
              {/* Buttons */}
              <circle cx="200" cy="148" r="2.5" fill="#ffffff" stroke="#bbbbbb" strokeWidth="0.5" />
              <circle cx="200" cy="165" r="2.5" fill="#ffffff" stroke="#bbbbbb" strokeWidth="0.5" />
              <circle cx="200" cy="182" r="2.5" fill="#ffffff" stroke="#bbbbbb" strokeWidth="0.5" />
            </g>
          ) : (
            // Round Neck / Crew Rib
            <g id="round-collar">
              <path
                d="M 155 122 C 170 135 230 135 245 122 C 242 115 158 115 155 122 Z"
                fill={collColor}
                stroke="#000000"
                strokeOpacity="0.15"
              />
              {/* Inner Neck Shadow */}
              <path
                d="M 157 121 C 170 128 230 128 243 121 C 240 118 160 118 157 121 Z"
                fill="#151515"
              />
            </g>
          )}

          {/* 4. Brand Accent Logo "K" (Customizable positioning top left) */}
          {hasLogo && (
            <g id="krishna-logo" transform="translate(150, 150)">
              {/* Round white or translucent badge under the logo */}
              <circle cx="2" cy="2" r="10" fill="#000000" opacity="0.15" />
              {/* Red/White premium brand K symbol */}
              <path
                d="M -3 -6 L -1 -6 L -1 6 L -3 6 Z"
                fill="#ffffff"
              />
              <path
                d="M -1 -1 L 3 -6 L 5 -6 L 1 -1 L 5 6 L 3 6 L -1 1 Z"
                fill="#ffffff"
              />
              {/* Golden tiny star above K badge */}
              <polygon points="5,-9 6,-7 8,-7 6.5,-5.5 7,-3.5 5,-5 3,-3.5 3.5,-5.5 2,-7 4,-7" fill="#FBBF24" scale="0.5" />
            </g>
          )}
        </g>
      </svg>

      {/* Decorative details tag overlays for custom mockup display purposes */}
      {showDetailsLabel && (
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-xs text-[10px] text-white px-2 py-0.5 rounded-full font-mono uppercase tracking-wider">
          {style} Series
        </div>
      )}
    </div>
  );
};

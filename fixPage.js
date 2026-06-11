const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Remove the premature component closing
content = content.replace(/\s*\}\s*\n\s*\n\s*\{\/\* 3\. FIND THE PERFECT COLLECTION/, '\n\n\n{/* 3. FIND THE PERFECT COLLECTION');

// 2. Add the component closing to the end of the file
if (!content.trim().endsWith('}')) {
  if (content.trim().endsWith('</section>')) {
      content = content + '\n    </div>\n  );\n}\n';
  } else if (content.trim().endsWith('</div >') || content.trim().endsWith('</div>')) {
      content = content + '\n  );\n}\n';
  } else {
      content = content + '\n    </div>\n  );\n}\n'; // fallback
  }
}

// 3. Inject missing variables back into the component
const varsToInject = `
  const collections = [
    { name: "Polo T-Shirts", path: "/products", mainColor: "#C20000", customStyle: "polo" as const },
    { name: "Sportswear", path: "/products", mainColor: "#0055A5", customStyle: "sports" as const, stripeColor: "#ffffff" },
    { name: "Cotton Wear", path: "/products", mainColor: "#10B981", customStyle: "round" as const },
    { name: "Sublimation", path: "/products", mainColor: "#8B5CF6", customStyle: "sublimation" as const, stripeColor: "#FCD34D" },
    { name: "Corporate Uniforms", path: "/products", mainColor: "#1F2937", customStyle: "polo" as const, collarColor: "#C20000" },
  ];

  // Best selling products subset
  const bestSellers = productsList.slice(0, 5);

  const clientLogos = [
    { name: "DECATHLON", font: "font-sans font-black tracking-tighter italic text-blue-700 text-lg" },
    { name: "RELIANCE", font: "font-serif font-extrabold tracking-wider text-red-700 text-md" },
    { name: "KALOREX", font: "font-mono font-bold tracking-widest text-[#C20000]" },
    { name: "NAVYY", font: "font-sans font-medium tracking-widest text-zinc-900" },
    { name: "SAMARPAN", font: "font-serif tracking-widest uppercase text-amber-800 text-sm" },
    { name: "MANGALAM", font: "font-sans font-semibold tracking-wide text-zinc-700" },
    { name: "AVERY DENNISON", font: "font-sans tracking-tight font-black text-zinc-800 text-xs" }
  ];

  const getFeatureIcon = (index: number) => {
    const icons = [
      <Sparkles size={24} className="text-[#C20000]" />, // Premium quality
      <Cpu size={24} className="text-[#C20000]" />,      // Advanced
      <UserCheck size={24} className="text-[#C20000]" />,// Skilled
      <ShieldCheck size={24} className="text-[#C20000]" />, // Strict QC
      <CalendarClock size={24} className="text-[#C20000]" />, // On time
      <Coins size={24} className="text-[#C20000]" />     // Competitive
    ];
    return icons[index % icons.length];
  };
`;

if (!content.includes('const collections = [')) {
  content = content.replace('const handleFeaturedDetails = (product: Product) => {\n    openInquiry(product);\n  };', 'const handleFeaturedDetails = (product: Product) => {\n    openInquiry(product);\n  };\n' + varsToInject);
}

// 4. Missing imports?
if (!content.includes('import { TShirtMockup }')) {
  content = content.replace('import { Product } from "@/src/types";', 'import { TShirtMockup } from "@/src/components/TShirtMockup";\nimport { Product } from "@/src/types";');
}
if (!content.includes('MessageSquare')) {
   content = content.replace(/import \{ ArrowRight/g, 'import { MessageSquare, BadgeCheck, ArrowRight');
}


fs.writeFileSync('app/page.tsx', content);
console.log('Fixed page.tsx');

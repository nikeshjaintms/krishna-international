import { Product } from "@/types";
import colorMappingData from "@/data/colorMapping.json";

const colorMapping = colorMappingData as Record<string, {name: string; hex: string; imageUrl: string}[]>;


export const PRODUCT_DEFINITIONS = [
  // Round Neck Products
  { code: "1001", name: "Plain Polyester Round Neck", category: "Round Neck T-Shirt", fabric: "100% Polyester", gsm: "160 GSM", imageFile: "Plain-Polyester-Round-Neck.jpg" },
  { code: "1002", name: "Softy Material Round Neck", category: "Round Neck T-Shirt", fabric: "Softy Material", gsm: "180 GSM", imageFile: "Softy-Material-Round-Neck.jpg" },
  { code: "1003", name: "Dry-Fit Round Neck", category: "Round Neck T-Shirt", fabric: "Dry Fit", gsm: "160 GSM", imageFile: "Dry-fit Round-Neck.jpg" },
  { code: "1004", name: "Rise Knit Round Neck", category: "Round Neck T-Shirt", fabric: "Rise Knit", gsm: "180 GSM", imageFile: "Rise Knit Round Neck.jpg" },
  { code: "1005", name: "Dot Knit Round Neck", category: "Round Neck T-Shirt", fabric: "Dry Fit", gsm: "160 GSM", imageFile: "Dot-Knit-Round-Neck.jpg" },
  { code: "1006", name: "Football Knit Round Neck", category: "Round Neck T-Shirt", fabric: "Polyester", gsm: "180 GSM", imageFile: "Football-Knit-Round-Neck.jpg" },
  { code: "1007", name: "Cotton Round Neck", category: "Round Neck T-Shirt", fabric: "100% Cotton", gsm: "180 GSM", imageFile: "Cotton-Round-Neck.jpg" },
  { code: "1008", name: "Polyester Cotton Round Neck", category: "Round Neck T-Shirt", fabric: "Poly Cotton", gsm: "180 GSM", imageFile: "Polyester-Cotton-Round-Neck.jpg" },
  // Polo Products
  { code: "2001", name: "Dry Fit Polo", category: "Polo T-Shirt", fabric: "Dry Fit", gsm: "200 GSM", imageFile: "Dry-Fit-Polo.jpg" },
  { code: "2002", name: "Rise Knit Polo", category: "Polo T-Shirt", fabric: "Rise Knit", gsm: "220 GSM", imageFile: "Rise-Knit-Polo.jpg" },
  { code: "2003", name: "Dot Knit Polo", category: "Polo T-Shirt", fabric: "Pique Knit", gsm: "200 GSM", imageFile: "Dot-Knit-Polo.jpg" },
  { code: "2004", name: "Spun Pique Polo", category: "Polo T-Shirt", fabric: "Spun Pique", gsm: "220 GSM", imageFile: "Spun-Pique-Polo.jpg" },
  { code: "2005", name: "Polo Knit Material", category: "Polo T-Shirt", fabric: "Polo Knit", gsm: "220 GSM", imageFile: "Polo-Knit-Materia.png" },
  { code: "2006", name: "Poly Cotton Pique Polo", category: "Polo T-Shirt", fabric: "Poly Cotton", gsm: "220 GSM", imageFile: "Poly-Cotton Pique-Polo.png" },
  { code: "2007", name: "Cotton Pique Polo", category: "Polo T-Shirt", fabric: "100% Cotton", gsm: "220 GSM", imageFile: "Cotton-Pique-Polo.jpg" },
  { code: "2008", name: "Inside Cotton Outside Dry-Fit Polo", category: "Polo T-Shirt", fabric: "Cotton + Dry Fit", gsm: "220 GSM", imageFile: "Inside-Cotton-Outside-Dry-Fit Polo.png" },
  { code: "2009", name: "Sublimation Polo", category: "Polo T-Shirt", fabric: "Polyester", gsm: "180 GSM", imageFile: "sublimation-polo-tshirt.png" },
  // Uniforms & Others
  { code: "3001", name: "Corporate Uniform", category: "Corporate Uniform", fabric: "Poly Cotton", gsm: "180 GSM", imageFile: "Corporate-Uniform.png", features: ["Professional Look", "Wrinkle Resistant"], idealUsage: ["Office Staff", "Management"] },
  { code: "3002", name: "Pant & Shirt Uniform", category: "Corporate Uniform", fabric: "Cotton Blend", gsm: "200 GSM", imageFile: "Pant-Shirt-Uniform.png", features: ["Comfortable Fit", "Durable"], idealUsage: ["Daily Wear", "Staff"] },
  { code: "3003", name: "Blazer", category: "Corporate Uniform", fabric: "Premium Suiting", gsm: "250 GSM", imageFile: "Blazer.png", features: ["Tailored Fit", "Lined Interior"], idealUsage: ["Executives", "Front Desk"] },
  { code: "3004", name: "Team Uniform", category: "Sportswear", fabric: "Dry Fit", gsm: "160 GSM", imageFile: "Team-Uniform.png", features: ["Moisture Wicking", "Breathable"], idealUsage: ["Sports Teams", "Events"] },
  { code: "3005", name: "Waistcoat", category: "Corporate Uniform", fabric: "Suiting Blend", gsm: "220 GSM", imageFile: "Waistcoat.png", features: ["Adjustable Back", "Multiple Pockets"], idealUsage: ["Hospitality", "Retail"] },
  { code: "3006", name: "Medical Uniform", category: "Hospitality & Healthcare", fabric: "Anti-Microbial Poly Cotton", gsm: "180 GSM", imageFile: "Medical-Uniform.png", features: ["Hygienic", "Easy Wash"], idealUsage: ["Doctors", "Nurses"] },
  { code: "3007", name: "Security Uniform", category: "Security", fabric: "Durable Poly Viscose", gsm: "220 GSM", imageFile: "Security-Uniform.png", features: ["Tough Fabric", "Reinforced Stitching"], idealUsage: ["Security Guards", "Personnel"] },
  { code: "3008", name: "Housekeeping Uniform", category: "Hospitality & Healthcare", fabric: "Breathable Cotton Blend", gsm: "180 GSM", imageFile: "house-keeping.png", features: ["Stain Resistant", "Flexible"], idealUsage: ["Cleaning Crew", "Hotel Staff"] },
];

// Static review counts — avoids Math.random() breaking static generation
const REVIEW_COUNTS: Record<string, number> = {
  "1001": 12, "1002": 18, "1003": 14, "1004": 11, "1005": 10,
  "1006": 16, "1007": 20, "1008": 15, "2001": 22, "2002": 19,
  "2003": 13, "2004": 17, "2005": 14, "2006": 16, "2007": 25,
  "2008": 9,  "2009": 15, "3001": 14, "3002": 10, "3003": 8,
  "3004": 18, "3005": 11, "3006": 21, "3007": 15, "3008": 12,
};

export function getProducts(): Product[] {
  return PRODUCT_DEFINITIONS.map((def) => ({
    id: def.code,
    code: def.code,
    name: def.name,
    category: def.category,
    fabric: def.fabric,
    gsm: def.gsm,
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5,
    reviewsCount: REVIEW_COUNTS[def.code] ?? 10,
    imageUrl: `/images/${def.imageFile}`,
    description: `Premium ${def.name.toLowerCase()} suitable for ${(def as any).idealUsage?.join(", ")?.toLowerCase() || "corporate, sports, and casual wear"}.`,
    features: (def as any).features || [],
    idealUsage: (def as any).idealUsage || [],
    colors: (colorMapping as any)[def.code] || [],
    blend: def.fabric,
    finish: "Bio Wash / Pre-shrunk",
    weave: "Knit",
    gender: ["Men", "Women"],
    catalogPdf: "/catalog.pdf",
  }));
}
// force reload
// cache flush 2
// cache flush 3
// cache flush 4
// cache flush 5
// v6
// v7-strict
// v8-realnames
// v9-color-fix
// v10-team-fix
// v11-cp-fix
// v12-1005-2006-fix

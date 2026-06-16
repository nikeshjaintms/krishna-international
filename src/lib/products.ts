import { Product } from "@/types";

export const PRODUCT_DEFINITIONS = [
  // Round Neck Products
  { code: "1001", name: "Plain Polyester Round Neck", category: "Round Neck T-Shirts", fabric: "100% Polyester", gsm: "160 GSM", imageFile: "Plain-Polyester-Round-Neck.jpg" },
  { code: "1002", name: "Softy Material Round Neck", category: "Round Neck T-Shirts", fabric: "Softy Material", gsm: "180 GSM", imageFile: "Softy-Material-Round-Neck.jpg" },
  { code: "1003", name: "Dry-Fit Round Neck", category: "Round Neck T-Shirts", fabric: "Dry Fit", gsm: "160 GSM", imageFile: "Dry-fit Round-Neck.jpg" },
  { code: "1004", name: "Rise Knit Round Neck", category: "Round Neck T-Shirts", fabric: "Rise Knit", gsm: "180 GSM", imageFile: "Rise Knit Round Neck.jpg" },
  { code: "1005", name: "Dot Knit Round Neck", category: "Round Neck T-Shirts", fabric: "Dry Fit", gsm: "160 GSM", imageFile: "Dot-Knit-Round-Neck.jpg" },
  { code: "1006", name: "Football Knit Round Neck", category: "Round Neck T-Shirts", fabric: "Polyester", gsm: "180 GSM", imageFile: "Football-Knit-Round-Neck.jpg" },
  { code: "1007", name: "Cotton Round Neck", category: "Round Neck T-Shirts", fabric: "100% Cotton", gsm: "180 GSM", imageFile: "Cotton-Round-Neck.jpg" },
  { code: "1008", name: "Polyester Cotton Round Neck", category: "Round Neck T-Shirts", fabric: "Poly Cotton", gsm: "180 GSM", imageFile: "Polyester-Cotton-Round-Neck.jpg" },
  // Polo Products
  { code: "2001", name: "Dry Fit Polo", category: "Polo T-Shirts", fabric: "Dry Fit", gsm: "200 GSM", imageFile: "Dry-Fit-Polo.jpg" },
  { code: "2002", name: "Rise Knit Polo", category: "Polo T-Shirts", fabric: "Rise Knit", gsm: "220 GSM", imageFile: "Rise-Knit-Polo.jpg" },
  { code: "2003", name: "Dot Knit Polo", category: "Polo T-Shirts", fabric: "Pique Knit", gsm: "200 GSM", imageFile: "Dot-Knit-Polo.jpg" },
  { code: "2004", name: "Spun Pique Polo", category: "Polo T-Shirts", fabric: "Spun Pique", gsm: "220 GSM", imageFile: "Spun-Pique-Polo.jpg" },
  { code: "2005", name: "Polo Knit Material", category: "Polo T-Shirts", fabric: "Polo Knit", gsm: "220 GSM", imageFile: "Polo-Knit-Materia.png" },
  { code: "2006", name: "Poly Cotton Pique Polo", category: "Polo T-Shirts", fabric: "Poly Cotton", gsm: "220 GSM", imageFile: "Poly-Cotton Pique-Polo.png" },
  { code: "2007", name: "Cotton Pique Polo", category: "Polo T-Shirts", fabric: "100% Cotton", gsm: "220 GSM", imageFile: "Cotton-Pique-Polo.jpg" },
  { code: "2008", name: "Inside Cotton Outside Dry-Fit Polo", category: "Polo T-Shirts", fabric: "Cotton + Dry Fit", gsm: "220 GSM", imageFile: "Inside-Cotton-Outside-Dry-Fit Polo.png" },
  { code: "2009", name: "Sublimation Polo", category: "Polo T-Shirts", fabric: "Polyester", gsm: "180 GSM", imageFile: "sublimation-polo-tshirt.png" },
];

// Static review counts — avoids Math.random() breaking static generation on Vercel
const REVIEW_COUNTS: Record<string, number> = {
  "1001": 12, "1002": 18, "1003": 14, "1004": 11, "1005": 10,
  "1006": 16, "1007": 20, "1008": 15, "2001": 22, "2002": 19,
  "2003": 13, "2004": 17, "2005": 14, "2006": 16, "2007": 25,
  "2008": 9,  "2009": 15,
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
    description: `Premium ${def.name.toLowerCase()} suitable for corporate, sports, and casual wear.`,
  }));
}

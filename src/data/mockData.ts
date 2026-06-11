import { Product, StatItem, ProcessStep, CustomizationOption, WhyChooseUsItem, CatalogueItem } from "../types";

export const productsList: Product[] = [
  {
    id: "1",
    code: "1001",
    name: "Plain Polyester Round Neck",
    category: "Round Neck T-Shirts",
    fabric: "100% Polyester",
    gsm: "160 - 180 GSM",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4,
    reviewsCount: 12,
    imageUrl: "blue-polo",
    description: "Premium plain polyester round neck shirt. Moisture-wicking and durable design."
  },
  {
    id: "2",
    code: "1002",
    name: "Softy Material Round Neck",
    category: "Round Neck T-Shirts",
    fabric: "Softy Material",
    gsm: "180 - 200 GSM",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 5,
    reviewsCount: 18,
    imageUrl: "red-polo",
    description: "Ultra soft feel round neck, perfect for casual and corporate events."
  },
  {
    id: "3",
    code: "1003",
    name: "Dry-fit Round Neck",
    category: "Round Neck T-Shirts",
    fabric: "Dry Fit",
    gsm: "160 - 180 GSM",
    sizes: ["S", "M", "L", "XL"],
    rating: 4,
    reviewsCount: 14,
    imageUrl: "black-dri-fit",
    description: "Premium quick-dry sport crew neck. Keeps you cool and light during heavy workouts."
  },
  {
    id: "4",
    code: "1004",
    name: "Rise Knit Round Neck",
    category: "Round Neck T-Shirts",
    fabric: "Rise Knit",
    gsm: "160 - 180 GSM",
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 5,
    reviewsCount: 11,
    imageUrl: "lilac-round-neck",
    description: "Athletic-grade interlocking round neck. Lightweight, shrink-resistant, and high stitch count."
  },
  {
    id: "5",
    code: "1005",
    name: "Dot Knit Round Neck",
    category: "Sportswear",
    fabric: "Dry Fit",
    gsm: "160 - 180 GSM",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4,
    reviewsCount: 10,
    imageUrl: "navy-dot-knit",
    description: "Unique textured dot knit fabric which accelerates sweat evaporation, suitable for running and training."
  },
  {
    id: "6",
    code: "1006",
    name: "Football Knit Round Neck",
    category: "Sportswear",
    fabric: "Polyester",
    gsm: "180 - 200 GSM",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 5,
    reviewsCount: 16,
    imageUrl: "orange-sports",
    description: "Durable activewear jersey featuring high elasticity. Tailored side seams for intense body movement."
  },
  {
    id: "7",
    code: "1007",
    name: "100% Cotton Bio Wash T-Shirt",
    category: "Round Neck T-Shirts",
    fabric: "100% Cotton",
    gsm: "180 - 200 GSM",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    rating: 5,
    reviewsCount: 20,
    imageUrl: "navy-cotton",
    description: "Premium combed cotton with organic bio-wash treatment. Anti-pilling, extra soft luster, skin-friendly."
  },
  {
    id: "8",
    code: "1008",
    name: "Polyester Cotton Round Neck",
    category: "Round Neck T-Shirts",
    fabric: "Poly Cotton",
    gsm: "180 - 200 GSM",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4,
    reviewsCount: 15,
    imageUrl: "grey-round-neck",
    description: "Perfect blend of polyester and cotton offering durability and breathable comfort."
  },
  {
    id: "9",
    code: "1009",
    name: "Dri-Fit Comfort Polo",
    category: "Polo T-Shirts",
    fabric: "Dry Fit",
    gsm: "180 - 200 GSM",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4,
    reviewsCount: 22,
    imageUrl: "white-polo",
    description: "Comfortable dry-fit polo suitable for extended wear in warm conditions."
  },
  {
    id: "10",
    code: "1010",
    name: "Rise Knit Polo",
    category: "Polo T-Shirts",
    fabric: "Rise Knit",
    gsm: "200 - 220 GSM",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5,
    reviewsCount: 19,
    imageUrl: "blue-polo",
    description: "Premium structured rise knit polo providing a sophisticated look."
  },
  {
    id: "11",
    code: "1011",
    name: "Dot Knit Polo",
    category: "Corporate Uniforms",
    fabric: "Pique Knit",
    gsm: "180 - 200 GSM",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4,
    reviewsCount: 13,
    imageUrl: "yellow-polo",
    description: "Professional lightweight collared uniform. High crease resistance, perfect for daily office wear."
  },
  {
    id: "12",
    code: "1012",
    name: "Spun Pique Polo",
    category: "Polo T-Shirts",
    fabric: "Spun Pique",
    gsm: "220+ GSM",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4,
    reviewsCount: 17,
    imageUrl: "navy-polo",
    description: "Durable and thick spun pique polo, ideal for a smart casual appearance."
  },
  {
    id: "13",
    code: "1013",
    name: "Polo Knit Material",
    category: "Polo T-Shirts",
    fabric: "Polo Knit",
    gsm: "200 - 220 GSM",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5,
    reviewsCount: 14,
    imageUrl: "red-polo",
    description: "Classic polo knit material with superior finish and elegant collar styling."
  },
  {
    id: "14",
    code: "1014",
    name: "Poly Cotton Pique Polo",
    category: "Polo T-Shirts",
    fabric: "Poly Cotton",
    gsm: "220+ GSM",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4,
    reviewsCount: 16,
    imageUrl: "green-polo",
    description: "A resilient blend of polyester and cotton in a stylish pique knit pattern."
  },
  {
    id: "15",
    code: "1015",
    name: "Cotton Pique Polo",
    category: "Polo T-Shirts",
    fabric: "100% Cotton",
    gsm: "220+ GSM",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5,
    reviewsCount: 25,
    imageUrl: "teal-polo",
    description: "Luxury thick combed pique cotton polo. Features rigid collar bands and premium buttons."
  },
  {
    id: "16",
    code: "1016",
    name: "Inside Cotton Outside Dry-Fit Polo",
    category: "Corporate Uniforms",
    fabric: "Cotton + Dry Fit",
    gsm: "220+ GSM",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    rating: 4,
    reviewsCount: 9,
    imageUrl: "charcoal-active-polo",
    description: "Advanced dual-layer fabric: soft non-allergenic cotton lining inside, and sleek quick-dry polyester shell outside."
  },
  {
    id: "17",
    code: "1017",
    name: "Sublimation Polo",
    category: "Polo T-Shirts",
    fabric: "Polyester",
    gsm: "180 - 200 GSM",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 5,
    reviewsCount: 15,
    imageUrl: "sublimation-blue-polo",
    description: "Vibrant full-bleed dye sublimation polo. Permanent printing ink that will never fade, crack or peel."
  },
  {
    id: "18",
    code: "1018",
    name: "Sports Jersey",
    category: "Sportswear",
    fabric: "Dry Fit",
    gsm: "160 - 180 GSM",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4,
    reviewsCount: 14,
    imageUrl: "stripe-sports",
    description: "Dri-fit active jersey with sublimated side stripes. Elastic cuffs, custom crew neck styling."
  }
];

export const statsList: StatItem[] = [
  { value: "100+", label: "Designs", iconName: "Layers" },
  { value: "1000+", label: "Happy Clients", iconName: "Users" },
  { value: "10+", label: "Years Experience", iconName: "Award" },
  { value: "PAN India", label: "Delivery", iconName: "Truck" }
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Share Requirement",
    description: "Tell us your design, quantity & fabric preference to initiate proposal.",
    iconName: "MessageSquareText"
  },
  {
    number: "02",
    title: "Design & Mockup",
    description: "Our digital artists create highly accurate digital mockups for approvals.",
    iconName: "Figma" // Or PenTool / Crop
  },
  {
    number: "03",
    title: "Sample Production",
    description: "We prepare a real physical sample swatch or garment for structural inspection.",
    iconName: "Scissors"
  },
  {
    number: "04",
    title: "Bulk Production",
    description: "Massive state-of-the-art cutting, sewing, and detailing run with strict line audits.",
    iconName: "Factory"
  },
  {
    number: "05",
    title: "Packaging & Delivery",
    description: "Tightly pressed and packed in protective cargo bags for secured transit across India.",
    iconName: "Truck"
  }
];

export const customizationOptions: CustomizationOption[] = [
  {
    title: "Embroidery",
    tagline: "Premium quality embroidery for a professional and durable brand look.",
    description: "Using multi-thread computer-controlled Japanese embroidery machines. Perfect for elegant, raised brand icons on Left Chest of Polo T-Shirts.",
    imageUrl: "embroidery"
  },
  {
    title: "Screen Printing",
    tagline: "Vibrant and long-lasting prints for bulk orders and corporate needs.",
    description: "Industry-standard plastisol, water-based, and puff inks. High color opacity, stretch-compliant, and optimized for bulk cotton wear merchandising.",
    imageUrl: "screen-print"
  },
  {
    title: "Sublimation Printing",
    tagline: "Full-colour, high-definition prints that don't fade or crack over years.",
    description: "Chemical bonding of ink molecules to pure polyester fibers. Essential for dynamic football jerseys, multi-colored sports design, and school wear.",
    imageUrl: "sublimation"
  },
  {
    title: "Heat Transfer",
    tagline: "Perfect for multi-colour designs, names, numbers and small batches.",
    description: "Premium vinyl transfer films heat fused with precision temperature pneumatic machines. Ideal for cricket jersey numbering and vibrant graphics.",
    imageUrl: "heat-transfer"
  },
  {
    title: "Custom Labels & Tags",
    tagline: "Personalized neck labels, wash care satin tags, and hanging brand tags.",
    description: "We offer printed or woven neck bands, custom size tags, barcode-ready barcode hangtags and branded tags that establish your absolute retail identity.",
    imageUrl: "labels-tags"
  }
];

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Premium Quality Fabric",
    description: "We source pristine raw yarns of Combed Cotton, Polyester, and Poly-Cotton, ensuring high stretch recovery and fast color ratios.",
    iconName: "Sparkles"
  },
  {
    title: "Advanced Manufacturing",
    description: "Equipped with specialized high-speed flatlock, overlocking stitching machinery, and computer-guided auto cutters for accurate patterns.",
    iconName: "Cpu"
  },
  {
    title: "Skilled Workforce",
    description: "Our craftsmen have decades of tailoring expertise combined with dedicated design sampling masters specializing in Indian sizes.",
    iconName: "UserCheck"
  },
  {
    title: "Strict Quality Control",
    description: "Multiple checkpoints from fabric shrinkage inspection, stitching tensile test, metal thread detection, and steam iron finishing check.",
    iconName: "ShieldCheck"
  },
  {
    title: "On-Time Dispatch",
    description: "Optimized assembly line logistics coupled with reliable national freight partners guaranteeing strict container transit schedules.",
    iconName: "CalendarClock"
  },
  {
    title: "Competitive Pricing",
    description: "Direct-from-factory pricing with no intermediate agent markups, passing pure source economies of scale directly down to your business budget.",
    iconName: "Coins"
  }
];

export const cataloguesList: CatalogueItem[] = [
  {
    title: "Premium Polo Collection",
    category: "Polo T-Shirts",
    imageUrl: "polo-mockup",
    itemCount: 24
  },
  {
    title: "Elite Sportswear & Activewear",
    category: "Sportswear",
    imageUrl: "sports-mockup",
    itemCount: 18
  },
  {
    title: "Daily Street Cotton Wear",
    category: "Cotton Wear",
    imageUrl: "cotton-mockup",
    itemCount: 32
  },
  {
    title: "Full Dye Sublimation Catalog",
    category: "Sublimation",
    imageUrl: "sub-mockup",
    itemCount: 15
  },
  {
    title: "Corporate Staff Uniforms",
    category: "Corporate Uniforms",
    imageUrl: "corp-mockup",
    itemCount: 20
  }
];

export interface Product {
  id: string | number;
  code: string;
  name: string;
  category: string;
  fabric: string;
  gsm: string;
  sizes: string[];
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CustomizationOption {
  title: string;
  description: string;
  imageUrl: string;
  tagline: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  iconName: string;
}

export interface CatalogueItem {
  title: string;
  category: string;
  imageUrl: string;
  itemCount: number;
}

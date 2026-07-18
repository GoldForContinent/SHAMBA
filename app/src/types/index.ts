export interface Product {
  id: number;
  slug: string;
  productName: string;
  category: string;
  subCategory?: string;
  description: string;
  fullDescription?: string;
  price?: number;
  imageUrl: string;
  stockStatus: 'In Stock' | 'Out of Stock' | 'Pre-Order';
  featured?: boolean;
  origin?: string;
  packaging?: string;
  moq?: string;
  applications?: string[];
  descriptionAttributes?: Record<string, string>;
  productDetails?: Record<string, string>;
  nutritionalValues?: Record<string, string>;
  qualityInfo?: string;
  shippingInfo?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  productCount: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface WhyChooseUsItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface CoreValue {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
  suffix?: string;
}

export interface StatCard {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
}

export interface ServiceCard {
  id: number;
  title: string;
  items: string[];
  icon: string;
}

export interface CommitmentStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  productInterest: string;
  message: string;
}

export interface QualityStandard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface SupplyChainStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

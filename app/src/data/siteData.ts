import type { NavLink, WhyChooseUsItem, CoreValue, StatItem, QualityStandard, SupplyChainStep } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Assortment', href: '/assortment' },
  { label: 'Shop', href: '/shop' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Quality', href: '/quality' },
  { label: 'Contact', href: '/contact' },
];

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: 1,
    title: 'Reliable Suppliers',
    description: 'We partner with vetted, certified producers who have demonstrated consistent quality and reliability over years of collaboration.',
    icon: 'Shield',
  },
  {
    id: 2,
    title: 'Full Compliance',
    description: 'All products meet international standards including ISO, HACCP, Organic, and Fair Trade certifications as applicable.',
    icon: 'CheckCircle',
  },
  {
    id: 3,
    title: 'Timely Delivery',
    description: 'We understand the importance of supply chain reliability. Our logistics network ensures on-time delivery to any global destination.',
    icon: 'Clock',
  },
  {
    id: 4,
    title: 'Best Price',
    description: 'Direct relationships with producers eliminate unnecessary intermediaries, allowing us to offer competitive pricing without compromising quality.',
    icon: 'Tag',
  },
  {
    id: 5,
    title: 'Constant Updates',
    description: 'Stay informed with real-time order tracking, market insights, and proactive communication throughout your buying journey.',
    icon: 'RefreshCw',
  },
];

export const stats: StatItem[] = [
  { id: 1, value: '30', label: 'Years of Experience', suffix: '+' },
  { id: 2, value: '100', label: 'Quality Assured', suffix: '%' },
  { id: 3, value: '50', label: 'Global Partners', suffix: '+' },
  { id: 4, value: '9', label: 'Product Categories', suffix: '' },
];

export const coreValues: CoreValue[] = [
  {
    id: 1,
    title: 'Involved',
    subtitle: 'Deeply Engaged',
    description: 'We are personally involved at every stage — from farm visits and supplier audits to packaging oversight and shipping coordination. Your success is our success.',
    icon: 'Users',
  },
  {
    id: 2,
    title: 'Improve',
    subtitle: 'Continuously Better',
    description: 'We constantly seek ways to improve our processes, products, and partnerships. Feedback drives innovation, and we embrace change as a path to excellence.',
    icon: 'TrendingUp',
  },
  {
    id: 3,
    title: '100%',
    subtitle: 'All In, Always',
    description: 'We give 100% to every order, every relationship, and every challenge. No shortcuts, no compromises — just full commitment to delivering excellence.',
    icon: 'Award',
  },
];

export const qualityStandards: QualityStandard[] = [
  {
    id: 1,
    title: 'ISO 22000 Certified',
    description: 'Food safety management systems ensuring hazard control at every step.',
    icon: 'FileCheck',
  },
  {
    id: 2,
    title: 'HACCP Compliant',
    description: 'Hazard Analysis Critical Control Points protocols for safe food handling.',
    icon: 'ShieldCheck',
  },
  {
    id: 3,
    title: 'Organic Certification',
    description: 'EU Organic, USDA Organic, and ECOCERT standards available on request.',
    icon: 'Leaf',
  },
  {
    id: 4,
    title: 'Fair Trade Verified',
    description: 'Ethical sourcing ensuring fair wages and working conditions for farmers.',
    icon: 'HeartHandshake',
  },
  {
    id: 5,
    title: 'Third-Party Lab Testing',
    description: 'Independent laboratory analysis for purity, contaminants, and nutritional content.',
    icon: 'Microscope',
  },
  {
    id: 6,
    title: 'Traceability Systems',
    description: 'Full batch traceability from farm to final delivery for complete transparency.',
    icon: 'GitBranch',
  },
];

export const supplyChainSteps: SupplyChainStep[] = [
  {
    id: 1,
    title: 'Ethical Sourcing',
    description: 'We identify and partner with certified farmers and cooperatives who share our commitment to quality and sustainability.',
    icon: 'Search',
  },
  {
    id: 2,
    title: 'Quality Inspection',
    description: 'Rigorous testing at origin for moisture, purity, contaminants, and compliance with international standards.',
    icon: 'ClipboardCheck',
  },
  {
    id: 3,
    title: 'Processing & Packaging',
    description: 'Value-addition in certified facilities with food-grade packaging customized to client requirements.',
    icon: 'Package',
  },
  {
    id: 4,
    title: 'Global Delivery',
    description: 'Seamless logistics management with proper documentation, customs clearance, and on-time delivery.',
    icon: 'Globe',
  },
];

export const companyInfo = {
  name: 'SHAMBAMALL',
  tagline: 'Your Trusted Manufacturer & Sourcing Partner in East Africa',
  description: 'SHAMBAMALL is a premium agricultural trading company based in Nairobi, Kenya. We specialize in sourcing, processing, and exporting high-quality agricultural products to clients worldwide.',
  address: 'L.R. No. 330/210, Mombasa Road, Nairobi, Kenya',
  phone: '+254 791 312 250',
  email: 'info@shambamall.com',
  whatsappNumber: '254791312250',
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    twitter: '#',
  },
};

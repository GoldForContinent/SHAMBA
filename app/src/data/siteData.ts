import type { NavLink, WhyChooseUsItem, CoreValue, StatItem, StatCard, QualityStandard, SupplyChainStep, ServiceCard, CommitmentStep } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Assortment',
    href: '/assortment',
    children: [
      { label: 'Food Ingredients', href: '/assortment/food-ingredients' },
      { label: 'Private Label', href: '/assortment/private-label' },
    ],
  },
  { label: 'Shop', href: '/shop' },
  { label: 'What We Do', href: '/what-we-do' },
  {
    label: 'Quality',
    href: '/quality',
    children: [
      { label: 'Services', href: '/quality/services' },
      { label: 'Our Quality', href: '/quality' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: 1,
    title: 'Vetted Supplier Network',
    description: 'Every supplier in our network is assessed for financial stability, production capacity, and consistency before we bring them into the fold — so what you order is what you can depend on, shipment after shipment.',
    icon: 'Shield',
  },
  {
    id: 2,
    title: 'Ethical & Compliant Sourcing',
    description: 'We hold every partner to clear standards on labor practices and factory conditions, because a supply chain you can stand behind matters as much as the product itself.',
    icon: 'CheckCircle',
  },
  {
    id: 3,
    title: 'On-Time, Every Time',
    description: 'Agricultural sourcing lives and dies on timelines. We plan shipments with buffer, communicate early on any risk, and treat your deadline as our deadline.',
    icon: 'Clock',
  },
  {
    id: 4,
    title: 'Pricing That Respects Your Margins',
    description: 'Direct relationships with growers and processors mean fewer middlemen between the farm and your invoice — and better pricing passed straight to you.',
    icon: 'Tag',
  },
  {
    id: 5,
    title: "You're Never in the Dark",
    description: 'From order confirmation to delivery, we proactively update you at every stage — no chasing us for status, no surprises at the port.',
    icon: 'RefreshCw',
  },
];

export const stats: StatItem[] = [
  { id: 1, value: '30', label: 'Years of Experience', suffix: '+' },
  { id: 2, value: '100', label: 'Quality Assured', suffix: '%' },
  { id: 3, value: '50', label: 'Global Partners', suffix: '+' },
  { id: 4, value: '9', label: 'Product Categories', suffix: '' },
];

export const statCards: StatCard[] = [
  {
    id: 1,
    title: 'East Africa Rooted',
    subtitle: 'Deep local sourcing relationships',
    icon: 'MapPin',
  },
  {
    id: 2,
    title: '9 Product Categories',
    subtitle: 'From oils to beverages, one trusted supplier',
    icon: 'Layers',
  },
  {
    id: 3,
    title: 'Direct Farmer Ties',
    subtitle: 'Fewer intermediaries, fresher supply',
    icon: 'Users',
  },
  {
    id: 4,
    title: 'Full Traceability',
    subtitle: 'Know exactly where your order came from',
    icon: 'GitBranch',
  },
];

export const coreValues: CoreValue[] = [
  {
    id: 1,
    title: 'Partnership',
    subtitle: 'Built to Last',
    description: 'We see every client relationship as a long-term partnership, not a single transaction. That means fair terms, honest communication, and showing up consistently — from your first small order to your hundredth.',
    icon: 'Users',
  },
  {
    id: 2,
    title: 'Progress',
    subtitle: 'Moving Agriculture Forward',
    description: 'Agriculture in East Africa is changing fast, and we want to be part of that change — helping farmers adopt better practices while helping buyers access more consistent, better-documented supply.',
    icon: 'TrendingUp',
  },
  {
    id: 3,
    title: 'Full Commitment',
    subtitle: 'All In, Always',
    description: "When we take on a client, we take on their standards as our own. Quality isn't a checkbox for us — it's the reason repeat clients keep coming back.",
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

export const serviceCards: ServiceCard[] = [
  {
    id: 1,
    title: 'Sourcing & Product Development',
    items: [
      'Sample development: We produce and share samples matched to your specifications before any bulk order is confirmed.',
      'Cost-conscious sourcing: Our supplier relationships let us hold competitive pricing without compromising on standards.',
      'Supplier vetting: Every new supplier goes through a capacity and compliance review before we work with them.',
    ],
    icon: 'Search',
  },
  {
    id: 2,
    title: 'Quality Verification',
    items: [
      'In-house checks: Our team inspects product at multiple stages, not just before shipment.',
      'Independent verification: Where needed, we bring in third-party auditors to confirm compliance with international standards.',
    ],
    icon: 'ShieldCheck',
  },
  {
    id: 3,
    title: 'Production Coordination',
    items: [
      'Client-factory liaison: We manage communication between you and the production side, so nothing gets lost in translation.',
      'Pre-shipment sign-off: Every batch is reviewed against agreed specs before it moves.',
      'Multi-stage inspection: We catch issues early, before they become your problem.',
    ],
    icon: 'ClipboardCheck',
  },
  {
    id: 4,
    title: 'Logistics & Delivery',
    items: [
      'Documentation handled: Export paperwork, compliance filings, and customs clearance are managed on our end.',
      'Reliable transport: Domestic and cross-border delivery planned for cost and reliability, not just speed.',
      'Storage & packaging: Flexible warehousing and packaging options to fit how you receive goods.',
    ],
    icon: 'Truck',
  },
];

export const commitmentSteps: CommitmentStep[] = [
  {
    id: 1,
    title: 'Integrity First',
    description: "We build relationships meant to last years, not single transactions — which means transparency even when it's inconvenient.",
    icon: 'Heart',
  },
  {
    id: 2,
    title: 'Fair, Competitive Pricing',
    description: 'Lean sourcing operations mean we can offer strong value without cutting corners on standards.',
    icon: 'DollarSign',
  },
  {
    id: 3,
    title: 'Breadth Without Compromise',
    description: 'A wide product range doesn\'t mean lower quality on any single item — every category gets the same scrutiny.',
    icon: 'Grid',
  },
  {
    id: 4,
    title: "Standards That Don't Slip",
    description: "From the first sample to the final shipment, we hold the line on quality — because that's what earns repeat business.",
    icon: 'CheckCircle',
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

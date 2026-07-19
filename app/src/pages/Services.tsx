import { Link } from 'react-router';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const serviceCategories = [
  {
    id: 'sourcing',
    label: 'What We Do',
    title: 'Research, Development & Sourcing',
    description: 'Every product begins with careful research and a clear understanding of what the market demands. We develop and present samples that align precisely with your specifications, so you can make confident decisions before committing to bulk orders.',
    items: [
      {
        heading: 'Sample Development',
        text: 'We produce and share samples matched to your exact specifications before any bulk commitment is made.',
      },
      {
        heading: 'Cost-Conscious Sourcing',
        text: 'Our direct supplier relationships let us hold competitive pricing without cutting corners on standards or reliability.',
      },
      {
        heading: 'Factory Evaluation',
        text: 'Every manufacturing partner is thoroughly assessed for production capacity, regulatory compliance, and ethical practices before we work with them.',
      },
    ],
    image: 'https://puregrowthagri.com/images/cashew1.jpg',
    imageAlt: 'Premium raw cashew nuts sourced from East African farms',
  },
  {
    id: 'quality',
    label: 'Quality Assurance',
    title: 'Rigorous Checks at Every Stage',
    description: 'Quality is not a final checkpoint. It is a continuous process woven into every stage of production. Our team conducts thorough assessments throughout, and where needed, we bring in globally recognized audit firms to confirm compliance with international safety and sustainability benchmarks.',
    items: [
      {
        heading: 'In-House Inspections',
        text: 'Our team evaluates product at multiple stages, not just before shipment, to maintain consistent premium standards.',
      },
      {
        heading: 'Independent Verification',
        text: 'We collaborate with third-party audit firms to verify compliance with international safety, quality, and sustainability benchmarks.',
      },
    ],
    image: 'https://puregrowthagri.com/images/sesame2.jpg',
    imageAlt: 'Carefully inspected sesame seeds ready for quality verification',
  },
  {
    id: 'production',
    label: 'Production Support',
    title: 'Seamless Coordination From Concept to Shelf',
    description: 'We act as the bridge between you and the factory floor. Our merchandising and communications team ensures nothing gets lost in translation, every product detail is reviewed before mass production begins, and multi-stage inspections catch issues early before they reach your warehouse.',
    items: [
      {
        heading: 'Client-Factory Liaison',
        text: 'We manage communication between you and the production side, so every detail is understood and executed correctly.',
      },
      {
        heading: 'Pre-Production Sign-Off',
        text: 'Every product detail, from design to materials, is carefully reviewed against agreed specifications before production starts.',
      },
      {
        heading: 'Multi-Stage Inspections',
        text: 'We detect and resolve potential issues early in the process, ensuring consistent product excellence from start to finish.',
      },
    ],
    image: 'https://puregrowthagri.com/images/maize2.jpg',
    imageAlt: 'Quality maize kernels in production facility',
  },
  {
    id: 'logistics',
    label: 'Logistics',
    title: 'Reliable Delivery to Your Door',
    description: 'Getting the product to you safely and on time is where most supply chains fail. We handle every detail of documentation, customs clearance, and transport so your goods arrive without delays, damage, or unexpected costs.',
    items: [
      {
        heading: 'Documentation & Customs',
        text: 'Export paperwork, compliance filings, and customs clearance are managed entirely on our end with precision.',
      },
      {
        heading: 'Transport Planning',
        text: 'Our logistics network is built for cost efficiency and reliability, covering both domestic and international delivery routes.',
      },
      {
        heading: 'Warehousing & Packaging',
        text: 'Flexible storage and packaging solutions that protect your product and adapt to how you receive goods.',
      },
    ],
    image: 'https://puregrowthagri.com/images/kenya%20aa%202.jpg',
    imageAlt: 'Kenyan AA coffee beans prepared for global shipping',
  },
];

const commitments = [
  {
    number: '01',
    title: 'Partnerships Built on Trust',
    text: 'We create long-term relationships founded on transparency and mutual growth, not single transactions.',
  },
  {
    number: '02',
    title: 'Pricing That Respects Your Margins',
    text: 'Through strategic sourcing and lean operations, we deliver the best market value without compromising on quality.',
  },
  {
    number: '03',
    title: 'A Range That Grows With You',
    text: 'Our diverse portfolio spans multiple categories, giving you the flexibility to adapt as your market evolves.',
  },
  {
    number: '04',
    title: 'Quality That Never Slips',
    text: 'From raw materials to final shipment, we maintain strict oversight at every stage so every product meets and exceeds expectations.',
  },
];

export default function Services() {
  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-80px' });
  const commitRef = useRef(null);
  const commitInView = useInView(commitRef, { once: true, margin: '-80px' });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  return (
    <div className="pt-16 sm:pt-20">

      {/* ═══════════════════════════════════════════════════════
          HERO — Immersive, massive type
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#1F4A3E] relative overflow-hidden min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="https://puregrowthagri.com/images/sunfloweroil2.jpg"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F4A3E] via-[#1F4A3E]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20 lg:py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              How We Work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-white mt-4 mb-6 leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            Our{' '}
            <span className="text-[#C79A3E]">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-body text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed"
          >
            From product conception to final delivery, we manage every stage of the supply chain with precision, transparency, and a commitment to getting it right.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INTRO STATEMENT — Full-width typographic section
      ═══════════════════════════════════════════════════════ */}
      <section ref={introRef} className="bg-[#F8F6F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 sm:py-28 lg:py-36 max-w-[900px]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading font-bold text-text-primary leading-[1.15] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
              >
                At the center of everything we do is a commitment to{' '}
                <span className="text-[#1F4A3E]">excellence,</span>{' '}
                <span className="text-[#C79A3E]">efficiency,</span>{' '}
                and ethical partnerships.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={introInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 w-16 h-0.5 bg-[#C79A3E] rounded-full"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICE CATEGORIES — Alternating split layouts
      ═══════════════════════════════════════════════════════ */}
      {serviceCategories.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* ═══════════════════════════════════════════════════════
          OUR COMMITMENT — Dark section, numbered cards
      ═══════════════════════════════════════════════════════ */}
      <section ref={commitRef} className="bg-[#1F4A3E] py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        {/* Decorative grain */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <filter id="svcGrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#svcGrain)"/>
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C79A3E]/[0.06] rounded-full translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={commitInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-14 sm:mb-18"
          >
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Our Commitment
            </span>
            <h2
              className="font-heading font-bold text-white mt-3 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              What Sets{' '}
              <span className="text-[#C79A3E]">Us Apart</span>
            </h2>
          </motion.div>

          <div className="space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5">
            {commitments.map((item, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={commitInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                >
                  <div
                    className={`
                      h-full rounded-2xl p-7 sm:p-8 transition-all duration-300 group
                      ${isEven
                        ? 'bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.08]'
                        : 'bg-white/[0.12] hover:bg-white/[0.17] border border-white/[0.10]'
                      }
                    `}
                  >
                    <div className="flex items-start gap-5">
                      <span
                        className="font-heading font-bold leading-none text-[#C79A3E] flex-shrink-0"
                        style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
                      >
                        {item.number}
                      </span>
                      <div>
                        <h3 className="font-heading font-bold text-white text-lg sm:text-xl mb-2 leading-snug">
                          {item.title}
                        </h3>
                        <p className="font-body text-sm text-white/65 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA — Bold, immersive
      ═══════════════════════════════════════════════════════ */}
      <section ref={ctaRef} className="bg-[#F8F6F2] py-20 sm:py-28 lg:py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Let&apos;s Work Together
            </span>
            <h2
              className="font-heading font-bold text-text-primary mt-4 mb-6 leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Ready to Start{' '}
              <span className="text-[#1F4A3E]">Your Next Order?</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
              From a single sample to full-scale production, we are here to manage every step. Get in touch and let us build a supply chain that works for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#1F4A3E] text-white font-ui font-semibold rounded-full hover:bg-[#16382F] transition-all duration-300 shadow-lift hover:shadow-[0_12px_40px_rgba(31,74,62,0.3)] text-base"
              >
                Get in Touch
                <FiArrowRight size={18} />
              </Link>
              <Link
                to="/quality"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#1F4A3E] font-ui font-semibold rounded-full hover:bg-white/80 transition-all duration-300 border border-[#1F4A3E]/10 shadow-soft"
              >
                View Our Quality Standards
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   SERVICE SECTION — Alternating split layout
══════════════════════════════════════════════════════════════ */

function ServiceSection({ service, index }: { service: typeof serviceCategories[number]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 1;

  return (
    <section
      ref={ref}
      className={`py-20 sm:py-28 lg:py-36 ${isEven ? 'bg-white' : 'bg-[#F8F6F2]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className={`relative ${isEven ? 'order-2 lg:order-2' : 'order-1 lg:order-1'}`}
          >
            <div className="rounded-3xl overflow-hidden shadow-lift aspect-[4/5]">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating accent card */}
            <div className={`absolute -bottom-6 ${isEven ? '-left-6' : '-right-6 sm:right-6'} bg-white rounded-2xl p-4 shadow-lift max-w-[180px]`}>
              <p className="font-heading font-bold text-[#1F4A3E] text-sm mb-0.5">{service.label}</p>
              <p className="font-ui text-xs text-text-secondary leading-snug">Stage {String(index + 1).padStart(2, '0')} of 04</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={isEven ? 'order-1 lg:order-1' : 'order-2 lg:order-2'}
          >
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              {service.label}
            </span>
            <h2
              className="font-heading font-bold text-text-primary mt-3 mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              {service.title}
            </h2>
            <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed mb-8">
              {service.description}
            </p>

            {/* Service items */}
            <div className="space-y-5">
              {service.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#1F4A3E]/[0.07] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1F4A3E] transition-colors duration-300">
                    <FiCheckCircle size={18} className="text-[#1F4A3E] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-base text-text-primary mb-0.5">
                      {item.heading}
                    </p>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

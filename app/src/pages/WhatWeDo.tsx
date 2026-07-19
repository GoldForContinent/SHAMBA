import { Link } from 'react-router';
import { FiArrowRight, FiSearch, FiClipboard, FiPackage, FiGlobe, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { supplyChainSteps, coreValues } from '@/data/siteData';

const stepIconMap: Record<string, React.ElementType> = {
  Search: FiSearch,
  ClipboardCheck: FiClipboard,
  Package: FiPackage,
  Globe: FiGlobe,
};

const valueIconMap: Record<string, React.ElementType> = {
  Users: FiUsers,
  TrendingUp: FiTrendingUp,
  Award: FiAward,
};

export default function WhatWeDo() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const inView1 = useInView(ref1, { once: true, margin: '-80px' });
  const inView2 = useInView(ref2, { once: true, margin: '-80px' });
  const inView3 = useInView(ref3, { once: true, margin: '-80px' });
  const inView4 = useInView(ref4, { once: true, margin: '-80px' });
  const inView5 = useInView(ref5, { once: true, margin: '-80px' });

  return (
    <div className="pt-16 sm:pt-20">

      {/* ═══════════════════════════════════════════════════════
          HERO — Immersive, massive type
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#1F4A3E] relative overflow-hidden min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="https://puregrowthagri.com/images/kenya%20aa%202.jpg"
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
              Our Role
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-white mt-4 mb-6 leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            What{' '}
            <span className="text-[#C79A3E]">We Do</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-body text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed"
          >
            A leading organic food company active in the supply chain of 100% organic food ingredients and consumer products worldwide.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ORGANIC WHOLESALER — Split layout, big statement
      ═══════════════════════════════════════════════════════ */}
      <section ref={ref1} className="py-20 sm:py-28 lg:py-36 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — Statement */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p
                className="font-heading font-bold text-text-primary leading-[1.15] tracking-tight mb-8"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
              >
                We are an organic wholesaler with{' '}
                <span className="text-[#1F4A3E]">sustainable food from all over the world</span>
              </p>
              <div className="space-y-4 font-body text-lg text-text-secondary leading-relaxed">
                <p>
                  As a specialist in organic food ingredients, we partner globally with producers to source a wide portfolio of only the highest-quality organic products.
                </p>
                <p>
                  We pack organic food ingredients for private labels within the food service market, offering full traceability. Everything we do meets the highest ethical and social standards, and we hold all relevant organic certifications.
                </p>
              </div>
            </motion.div>

            {/* Right — Image with floating stat */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-lift aspect-[4/5]">
                <img
                  src="https://puregrowthagri.com/images/blackpepper2.jpg"
                  alt="Premium organic black pepper"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#1F4A3E] text-white rounded-2xl p-5 shadow-lift max-w-[200px]">
                <p className="font-heading font-bold text-2xl leading-none mb-1">100%</p>
                <p className="font-ui text-xs text-white/70 leading-snug">Organic certified ingredients only</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PRODUCT PORTFOLIO — Alternating containers
      ═══════════════════════════════════════════════════════ */}
      <section ref={ref2} className="py-20 sm:py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-14 sm:mb-18"
          >
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Our Portfolio
            </span>
            <h2
              className="font-heading font-bold text-text-primary mt-3 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Which Kind of Exclusively{' '}
              <span className="text-[#1F4A3E]">Organic Products</span>{' '}
              Do We Distribute?
            </h2>
          </motion.div>

          {/* Alternating content cards */}
          <div className="space-y-6 lg:space-y-8">
            {/* Card 1 — Green */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#1F4A3E] rounded-3xl p-8 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
            >
              <div className="lg:col-span-3">
                <p className="font-body text-white/80 text-base sm:text-lg leading-relaxed">
                  As organic wholesale food suppliers, we sell more than 1000 different raw ingredients and only offer 100% organic food to our customers. All our products are grown and produced by our carefully selected network of farmers from all over the world.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-2xl overflow-hidden aspect-[16/10]">
                  <img
                    src="https://puregrowthagri.com/images/cashew1.jpg"
                    alt="Organic cashew nuts from East Africa"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            {/* Card 2 — Cream */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#F8F6F2] rounded-3xl p-8 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
            >
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden aspect-[16/10]">
                  <img
                    src="https://puregrowthagri.com/images/mango2.jpg"
                    alt="Organic dried mangoes"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="lg:col-span-3 order-1 lg:order-2">
                <p className="font-body text-text-secondary text-base sm:text-lg leading-relaxed">
                  Our catalog spans nine core categories: oils and fats, cereals and pulses, nuts and seeds, spices and herbs, fruits and vegetables, coffee, fertilizer, hides and skins, and sisal fiber. Each product is sourced from growers and processors we have personally vetted and audited.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              to="/assortment"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1F4A3E] text-white font-ui font-semibold rounded-full hover:bg-[#16382F] transition-all duration-300 shadow-soft hover:shadow-lift group"
            >
              Explore Categories
              <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SUSTAINABLE SUPPLY — Mission section
      ═══════════════════════════════════════════════════════ */}
      <section ref={ref3} className="py-20 sm:py-28 lg:py-36 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — Image with floating card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-lift aspect-[4/5]">
                <img
                  src="https://puregrowthagri.com/images/maize2.jpg"
                  alt="Organic maize from East African farms"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-6 -right-4 sm:right-6 bg-white rounded-2xl p-4 shadow-lift">
                <p className="font-heading font-bold text-[#1F4A3E] text-sm mb-0.5">Mission</p>
                <p className="font-ui text-xs text-text-secondary">Change the food chain to 100% organic</p>
              </div>
            </motion.div>

            {/* Right — Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                Our Mission
              </span>
              <h2
                className="font-heading font-bold text-text-primary mt-3 mb-6 leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
              >
                Is Our Organic Wholesale Business All About{' '}
                <span className="text-[#1F4A3E]">a Sustainable Food Supply?</span>
              </h2>
              <div className="space-y-4 font-body text-lg text-text-secondary leading-relaxed">
                <p>
                  Our mission is to change the entire food chain to 100% organic. That is why we work together with a network of organic farmers on local projects across East Africa and beyond.
                </p>
                <p>
                  As organic wholesale food suppliers, we sell more than 1000 different raw ingredients and only offer 100% organic food to our customers. All our products are grown and produced by our carefully selected network of farmers from all over the world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SUPPLY CHAIN — Connected timeline
      ═══════════════════════════════════════════════════════ */}
      <section ref={ref4} className="py-20 sm:py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 sm:mb-18"
          >
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Our Process
            </span>
            <h2
              className="font-heading font-bold text-text-primary mt-3 mb-4 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              From Source{' '}
              <span className="text-[#1F4A3E]">to Your Door</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
              A streamlined, transparent process that ensures quality at every step from farm to your facility.
            </p>
          </motion.div>

          {/* Horizontal Connected Timeline — Desktop */}
          <div className="hidden lg:block relative mb-8">
            <div className="absolute top-8 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#1F4A3E]/20 via-[#C79A3E]/40 to-[#1F4A3E]/20" />

            <div className="grid grid-cols-4 gap-6 relative">
              {supplyChainSteps.map((step, index) => {
                const Icon = stepIconMap[step.icon] || FiSearch;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView4 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="relative z-10 mx-auto mb-5">
                      <div className="w-16 h-16 bg-white border-2 border-[#1F4A3E] rounded-full flex items-center justify-center mx-auto shadow-card hover:bg-[#1F4A3E] transition-colors duration-300 group">
                        <Icon size={24} className="text-[#1F4A3E] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#C79A3E] rounded-full flex items-center justify-center text-white text-xs font-heading font-bold shadow-soft">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:hidden">
            {supplyChainSteps.map((step, index) => {
              const Icon = stepIconMap[step.icon] || FiSearch;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView4 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 bg-[#1F4A3E] rounded-full flex items-center justify-center mx-auto mb-5 relative z-10 shadow-soft">
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#C79A3E] rounded-full flex items-center justify-center text-white text-xs font-heading font-bold">
                      {index + 1}
                    </span>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ROLE OF ORGANIC AGRICULTURE — Competitor-style content
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#1F4A3E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <filter id="wdGrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#wdGrain)"/>
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C79A3E]/[0.06] rounded-full translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                The Role of Organic Agriculture
              </span>
              <h2
                className="font-heading font-bold text-white mt-3 mb-6 leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
              >
                Producing{' '}
                <span className="text-[#C79A3E]">Sustainable Food</span>{' '}
                for the World
              </h2>
              <div className="space-y-4 font-body text-white/75 text-base sm:text-lg leading-relaxed">
                <p>
                  As organic wholesale food suppliers, we sell more than 1000 different raw ingredients and only offer 100% organic food to our customers. All our products are grown and produced by our carefully selected network of farmers from all over the world.
                </p>
                <p>
                  We work across the full supply chain: from identifying the right growers and processors for a given product, through rigorous quality verification, to getting goods to your door with complete documentation and traceability at every stage.
                </p>
              </div>
            </motion.div>

            {/* Right — Accurate stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-4 sm:gap-5"
            >
              {[
                { value: '1000+', label: 'Raw Ingredients' },
                { value: '9', label: 'Product Categories' },
                { value: '100%', label: 'Certified Organic' },
                { value: '15+', label: 'Countries Sourced' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="bg-white/[0.07] backdrop-blur-sm rounded-2xl p-6 sm:p-7 text-center border border-white/[0.08] hover:bg-white/[0.12] transition-colors duration-300"
                >
                  <p className="font-heading font-bold text-[#C79A3E] leading-none mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                    {stat.value}
                  </p>
                  <p className="font-ui text-sm text-white/60">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CORE VALUES — Competitor-style: numbered, bold
      ═══════════════════════════════════════════════════════ */}
      <section ref={ref5} className="py-20 sm:py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-14 sm:mb-18"
          >
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Our Foundation
            </span>
            <h2
              className="font-heading font-bold text-text-primary mt-3 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Core <span className="text-[#1F4A3E]">Values</span>
            </h2>
          </motion.div>

          <div className="space-y-6 lg:space-y-8">
            {coreValues.map((value, index) => {
              const IconComponent = valueIconMap[value.icon] || FiPackage;
              const isEven = index % 2 === 1;
              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView5 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className={`
                    rounded-3xl p-8 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center
                    ${isEven ? 'bg-[#1F4A3E]' : 'bg-[#F8F6F2]'}
                  `}
                >
                  {/* Number + Icon */}
                  <div className="lg:col-span-1 flex items-center gap-5">
                    <span
                      className={`font-heading font-bold leading-none ${isEven ? 'text-[#C79A3E]' : 'text-[#1F4A3E]'}`}
                      style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isEven ? 'bg-white/15' : 'bg-[#1F4A3E]/[0.07]'}`}>
                      <IconComponent size={22} className={isEven ? 'text-white' : 'text-[#1F4A3E]'} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-4">
                    <h3
                      className={`font-heading font-bold text-xl sm:text-2xl mb-2 leading-snug ${isEven ? 'text-white' : 'text-text-primary'}`}
                    >
                      {value.title}
                    </h3>
                    <p className={`font-ui text-sm font-medium mb-3 ${isEven ? 'text-[#C79A3E]' : 'text-[#C79A3E]'}`}>
                      {value.subtitle}
                    </p>
                    <p className={`font-body text-base leading-relaxed ${isEven ? 'text-white/75' : 'text-text-secondary'}`}>
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

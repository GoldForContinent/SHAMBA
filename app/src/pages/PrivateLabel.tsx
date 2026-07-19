import { Link } from 'react-router';
import { FiArrowRight, FiCheckCircle, FiPackage, FiShield, FiUsers } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const whyItems = [
  {
    icon: FiPackage,
    title: 'We Hold Stock and Labels',
    description: 'No need to manage separate inventory and label suppliers; we handle both.',
  },
  {
    icon: FiUsers,
    title: 'We Build It With You',
    description: 'Product and packaging decisions made collaboratively, not handed to you as a fixed menu.',
  },
  {
    icon: FiShield,
    title: 'We Handle the Certification Load',
    description: 'We provide the documentation and certificates your buyers will expect.',
  },
];

const packagingOptions = [
  'Pillow or block-bottom bags, 100g – 1000g',
  'Paper bag formats from 1kg – 15kg',
  'Multiple width options to fit different retail formats',
  'Clear front-and-back labeling options',
];

export default function PrivateLabel() {
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
          HERO — Massive type, immersive
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#1F4A3E] relative overflow-hidden min-h-[50vh] flex items-end">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://puregrowthagri.com/images/sunfloweroil2.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
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
              Your Brand
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-white mt-4 mb-6 leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            Private{' '}
            <span className="text-[#C79A3E]">Label</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-body text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed"
          >
            Want to build your own brand on ingredients you can trust?
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INTRO — Split: big pull-quote left, image right
      ═══════════════════════════════════════════════════════ */}
      <section ref={ref1} className="py-20 sm:py-28 lg:py-36 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — Large statement text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p
                className="font-heading font-bold text-text-primary leading-[1.15] tracking-tight mb-8"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
              >
                We pack, blend, and prepare high-quality{' '}
                <span className="text-[#1F4A3E]">grains, rice, nuts, seeds, pulses, and more</span>{' '}
                under your brand.
              </p>
              <p className="font-body text-lg text-text-secondary leading-relaxed max-w-lg">
                Need help figuring out the right mix or format? We&apos;ll work through it with you.
              </p>
            </motion.div>

            {/* Right — Image with creative treatment */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-lift aspect-[4/5]">
                <img
                  src="https://puregrowthagri.com/images/coconutoil2.jpg"
                  alt="Private label coconut oil packaging"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-[#1F4A3E] text-white rounded-2xl p-5 shadow-lift max-w-[200px]">
                <p className="font-heading font-bold text-2xl leading-none mb-1">100%</p>
                <p className="font-ui text-xs text-white/70 leading-snug">Organic certified private label products</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT WE OFFER — Alternating green/cream containers
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
              What We Offer
            </span>
            <h2
              className="font-heading font-bold text-text-primary mt-3 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Sourced Right,{' '}
              <span className="text-[#1F4A3E]">Packaged Responsibly</span>
            </h2>
          </motion.div>

          {/* Two-column alternating cards */}
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
                  Our catalog spans a wide range of agricultural ingredients sourced directly from vetted growers and processors across the region. We prioritize traceability, so you&apos;ll know where your ingredients came from and how they were handled at every stage.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-2xl overflow-hidden aspect-[16/10]">
                  <img
                    src="https://puregrowthagri.com/images/sesame2.jpg"
                    alt="Sesame seeds: traceable sourcing"
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
                    alt="Dried mangoes: responsible packaging"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="lg:col-span-3 order-1 lg:order-2">
                <p className="font-body text-text-secondary text-base sm:text-lg leading-relaxed">
                  Beyond ingredient quality, we&apos;re mindful of how we package. Where possible, we use recyclable and lower-impact packaging materials, because responsible sourcing shouldn&apos;t stop at the ingredient. It should extend to everything the product touches on its way to the shelf.
                </p>
              </div>
            </motion.div>
          </div>

          {/* In Short — Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 bg-[#C79A3E]/[0.06] border border-[#C79A3E]/15 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="font-heading font-bold text-lg text-text-primary mb-4">
              In Short
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                'Responsible, lower-impact packaging materials where available',
                'Compliance with relevant food safety certification standards',
                'Careful attention to packaging integrity and presentation',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FiCheckCircle size={18} className="text-[#C79A3E] mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm text-text-secondary leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PACKAGING OPTIONS — Split layout, numbered
      ═══════════════════════════════════════════════════════ */}
      <section ref={ref3} className="py-20 sm:py-28 lg:py-36 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — Image stack */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-lift aspect-[4/5]">
                <img
                  src="https://puregrowthagri.com/images/maize2.jpg"
                  alt="Maize kernels for packaging"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute top-6 -right-4 sm:right-6 bg-white rounded-2xl p-4 shadow-lift">
                <p className="font-heading font-bold text-[#1F4A3E] text-sm mb-0.5">Flexible</p>
                <p className="font-ui text-xs text-text-secondary">100g to 15kg formats</p>
              </div>
            </motion.div>

            {/* Right — Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                Packaging Options
              </span>
              <h2
                className="font-heading font-bold text-text-primary mt-3 mb-8 leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
              >
                We Work Around What Fits Your Product and Your Market
              </h2>

              <div className="space-y-5">
                {packagingOptions.map((option, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#1F4A3E]/[0.07] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1F4A3E] transition-colors duration-300">
                      <span className="font-ui font-bold text-sm text-[#1F4A3E] group-hover:text-white transition-colors duration-300">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="font-body text-base text-text-secondary leading-relaxed pt-2">
                      {option}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SOCIAL IMPACT — Full-width dark, big quote
      ═══════════════════════════════════════════════════════ */}
      <section ref={ref4} className="bg-[#1F4A3E] py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        {/* Decorative grain */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <filter id="plGrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#plGrain)"/>
          </svg>
        </div>
        {/* Decorative accent circle */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C79A3E]/[0.06] rounded-full translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Social Impact
            </span>
            <h2
              className="font-heading font-bold text-white mt-4 mb-8 leading-[1.15]"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Packaging <span className="text-[#C79A3E]">With Purpose</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="font-body text-white/75 text-base sm:text-lg leading-relaxed text-center mb-6">
              Choosing to package with us isn&apos;t just about the end product. It supports the broader network of farmers and local producers we work with, and contributes to fairer, more consistent income across that chain. We&apos;re committed to working with people who bring the right skills and motivation, regardless of background.
            </p>
            <div className="w-12 h-0.5 bg-[#C79A3E] rounded-full mx-auto mb-6" />
            <p className="font-body text-white/75 text-base sm:text-lg leading-relaxed text-center">
              Together, we can shape an assortment and packaging approach that actually fits your market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHY AgroWorldHub — Alternating dark/light cards
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
              Why AgroWorldHub
            </span>
            <h2
              className="font-heading font-bold text-text-primary mt-3 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Why Choose{' '}
              <span className="text-[#1F4A3E]">AgroWorldHub</span>{' '}
              <br className="hidden sm:block" />
              for Your Private Label
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whyItems.map((item, index) => {
              const Icon = item.icon;
              const isDark = index === 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView5 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <div
                    className={`
                      h-full rounded-2xl p-8 sm:p-9 transition-all duration-300 group
                      ${isDark
                        ? 'bg-[#1F4A3E] shadow-[0_10px_35px_rgba(31,74,62,0.2)] hover:shadow-[0_16px_48px_rgba(31,74,62,0.3)]'
                        : 'bg-[#F8F6F2] shadow-soft hover:shadow-lift'
                      }
                    `}
                  >
                    <div
                      className={`
                        w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                        transition-colors duration-300
                        ${isDark
                          ? 'bg-white/15 group-hover:bg-[#C79A3E]'
                          : 'bg-[#1F4A3E]/[0.07] group-hover:bg-[#1F4A3E]'
                        }
                      `}
                    >
                      <Icon
                        size={24}
                        className={`
                          transition-colors duration-300
                          ${isDark
                            ? 'text-white group-hover:text-white'
                            : 'text-[#1F4A3E] group-hover:text-white'
                          }
                        `}
                      />
                    </div>

                    <h3
                      className={`
                        font-heading font-bold text-xl mb-3 leading-snug
                        ${isDark ? 'text-white' : 'text-text-primary'}
                      `}
                    >
                      {item.title}
                    </h3>

                    <div className={`w-8 h-0.5 rounded-full mb-4 ${isDark ? 'bg-[#C79A3E]' : 'bg-[#C79A3E]/40'}`} />

                    <p
                      className={`
                        font-body text-sm leading-relaxed
                        ${isDark ? 'text-white/75' : 'text-text-secondary'}
                      `}
                    >
                      {item.description}
                    </p>
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
      <section className="bg-[#1F4A3E] py-20 sm:py-28 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://puregrowthagri.com/images/palmoil2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F4A3E] via-[#1F4A3E]/90 to-[#1F4A3E]/70" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-heading font-bold text-white mb-6 leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Ready to Build{' '}
              <span className="text-[#C79A3E]">Your Brand?</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get in touch to discuss your private label project. We&apos;ll help you find the right products, formats, and packaging for your market.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C79A3E] text-white font-ui font-semibold rounded-full hover:bg-[#B38A35] transition-all duration-300 shadow-lift hover:shadow-[0_12px_40px_rgba(199,154,62,0.35)] text-base"
            >
              Start a Conversation
              <FiArrowRight size={18} className="group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

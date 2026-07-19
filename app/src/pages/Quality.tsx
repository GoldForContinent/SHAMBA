import { Link } from 'react-router';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiHeart,
  FiSun,
  FiGlobe,
  FiBookOpen,
  FiAward,
  FiZap,
  FiUsers,
} from 'react-icons/fi';
import { Link as RouterLink } from 'react-router';

const qualityPromise = [
  { label: '100% Organic', icon: FiHeart },
  { label: 'Fully Compliant', icon: FiShield },
  { label: 'Non-Irradiated', icon: FiSun },
  { label: 'GMO-Free', icon: FiZap },
];

const standards = [
  {
    icon: FiAward,
    title: 'Accredited Specialists',
    text: 'Our quality department is made up of academically trained food technologists who have specialized in quality assurance, quality control, and technical advisory. In 2008, the team completed a pan-European food safety qualification programme, earning accreditation as EU-recognised food safety specialists.',
  },
  {
    icon: FiBookOpen,
    title: 'Continuous Development',
    text: 'Knowledge is not static, and neither are we. Our specialists stay current by maintaining close working relationships with suppliers and continuously updating their expertise to reflect the latest in food safety science and international regulatory standards.',
  },
  {
    icon: FiUsers,
    title: 'Supplier Engagement',
    text: 'Rather than relying on desk-based assessments alone, our quality team works directly with our supplier network through regular site visits and collaborative checks, ensuring our standards reflect real production conditions on the ground.',
  },
  {
    icon: FiGlobe,
    title: 'International Benchmarks',
    text: 'Every product is evaluated against internationally recognized safety, quality, and sustainability benchmarks, giving you the confidence that what arrives meets the strictest global standards.',
  },
];

export default function Quality() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const pledgeRef = useRef(null);
  const pledgeInView = useInView(pledgeRef, { once: true, margin: '-60px' });
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: '-80px' });
  const standardsRef = useRef(null);
  const standardsInView = useInView(standardsRef, { once: true, margin: '-60px' });
  const statementRef = useRef(null);
  const statementInView = useInView(statementRef, { once: true, margin: '-60px' });
  const responseRef = useRef(null);
  const responseInView = useInView(responseRef, { once: true, margin: '-60px' });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  return (
    <div className="pt-16 sm:pt-20">

      {/* ═══════════════════════════════════════════════════════
          HERO — Split screen: dark text left, image right
      ═══════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">

          {/* Left — Text */}
          <div className="bg-[#1F4A3E] flex items-center relative overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#C79A3E]/[0.07] rounded-full" />
            <div className="absolute bottom-10 right-0 w-40 h-40 bg-white/[0.03] rounded-full" />

            <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-28">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                  Our Quality
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-heading font-bold text-white mt-4 mb-6 leading-[1.05] tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              >
                Every Product{' '}
                <span className="text-[#C79A3E]">Meets</span>{' '}
                the Standard.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="font-body text-base sm:text-lg text-white/70 max-w-lg leading-relaxed mb-8"
              >
                We take every measure necessary to guarantee that all of our products are organic, safe, and fully compliant with current legislation. Our customers can be confident they are working with the best products available.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  to="/quality/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C79A3E] text-white font-ui font-semibold rounded-full hover:bg-[#B38A35] transition-all duration-300 shadow-lift hover:shadow-[0_8px_30px_rgba(199,154,62,0.3)]"
                >
                  Our Services
                  <FiArrowRight size={16} />
                </Link>
                <RouterLink
                  to="#quality-standards"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-ui font-semibold rounded-full hover:bg-white/15 transition-all duration-300 border border-white/15"
                >
                  Explore Standards
                </RouterLink>
              </motion.div>
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative min-h-[40vh] lg:min-h-0">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="absolute inset-0"
            >
              <img
                src="https://puregrowthagri.com/images/cashew1.jpg"
                alt="Premium organic cashews ready for quality inspection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F4A3E]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent" />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-8 left-8 bg-white rounded-2xl p-5 shadow-lift max-w-[200px] z-10"
            >
              <div className="w-10 h-10 bg-[#1F4A3E]/10 rounded-xl flex items-center justify-center mb-3">
                <FiShield size={20} className="text-[#1F4A3E]" />
              </div>
              <p className="font-heading font-bold text-[#1F4A3E] text-sm mb-0.5">Certified & Verified</p>
              <p className="font-ui text-xs text-text-secondary">EU-recognised food safety specialists on staff</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          QUALITY PLEDGE — Big typographic statement
      ═══════════════════════════════════════════════════════ */}
      <section ref={pledgeRef} className="bg-white py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1F4A3E] via-[#C79A3E] to-[#1F4A3E]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={pledgeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-[950px]"
          >
            <h2
              className="font-heading font-bold text-text-primary leading-[1.15] tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)' }}
            >
              Do you want to know which measures we take? Our quality standards, our dedicated team, and our unwavering commitment are all designed to give you{' '}
              <span className="text-[#1F4A3E]">complete confidence</span>{' '}
              in every product we deliver.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={pledgeInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="w-12 h-0.5 bg-[#C79A3E] rounded-full" />
            <span className="font-ui text-sm text-text-secondary uppercase tracking-wider font-medium">Read on to discover how</span>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          QUALITY TEAM — Immersive split with floating stats
      ═══════════════════════════════════════════════════════ */}
      <section ref={teamRef} className="bg-[#F8F6F2] py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-[#C79A3E]/[0.04] rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={teamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-lift aspect-[4/5]">
                <img
                  src="https://puregrowthagri.com/images/kenya%20aa%202.jpg"
                  alt="Our quality team inspecting premium Kenyan AA coffee beans"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating accreditation card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-8 -right-4 sm:right-6 bg-[#1F4A3E] rounded-2xl p-5 shadow-lift max-w-[220px]"
              >
                <FiAward size={22} className="text-[#C79A3E] mb-2" />
                <p className="font-heading font-bold text-white text-sm mb-0.5">EU Accredited</p>
                <p className="font-ui text-xs text-white/60 leading-snug">Recognised food safety specialists since 2008</p>
              </motion.div>
            </motion.div>

            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={teamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                Our Quality Team
              </span>
              <h2
                className="font-heading font-bold text-text-primary mt-3 mb-6 leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
              >
                Trained Specialists Who{' '}
                <span className="text-[#1F4A3E]">Know the Difference</span>
              </h2>

              <div className="space-y-4 mb-8">
                <p className="font-body text-base text-text-secondary leading-relaxed">
                  Our quality department consists of academically trained food technologists who, through years of experience and dedication, have specialized in quality assurance, quality control, and technical advisory.
                </p>
                <p className="font-body text-base text-text-secondary leading-relaxed">
                  They continuously strive to provide answers to your questions by maintaining intensive working relationships with our suppliers and by keeping their own knowledge up to date with the latest developments in food safety.
                </p>
                <p className="font-body text-base text-text-secondary leading-relaxed">
                  In 2008, the team completed a pan-European food safety qualification programme, earning accreditation as EU-recognised food safety specialists.
                </p>
              </div>

              {/* Key highlights */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '2008', label: 'EU Accredited' },
                  { value: '100%', label: 'Organic Standard' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-card border border-[#1F4A3E]/[0.04]">
                    <p className="font-heading font-bold text-[#1F4A3E] text-2xl">{stat.value}</p>
                    <p className="font-ui text-xs text-text-secondary mt-0.5 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          QUALITY STANDARDS — 4 cards, alternating backgrounds
      ═══════════════════════════════════════════════════════ */}
      <section ref={standardsRef} id="quality-standards" className="bg-white py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#1F4A3E]/[0.02] rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={standardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              How We Guarantee Quality
            </span>
            <h2
              className="font-heading font-bold text-text-primary mt-3 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Our Standards{' '}
              <span className="text-[#1F4A3E]">in Practice</span>
            </h2>
          </motion.div>

          <div className="space-y-5">
            {standards.map((item, idx) => {
              const isEven = idx % 2 === 1;
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={standardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                >
                  <div
                    className={`
                      rounded-2xl p-7 sm:p-8 lg:p-10 transition-all duration-300 group
                      ${isEven
                        ? 'bg-[#1F4A3E] text-white'
                        : 'bg-[#F8F6F2] text-text-primary'
                      }
                    `}
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <div className={`
                        w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300
                        ${isEven
                          ? 'bg-white/[0.12] group-hover:bg-[#C79A3E]'
                          : 'bg-[#1F4A3E]/10 group-hover:bg-[#1F4A3E]'
                        }
                      `}>
                        <Icon
                          size={24}
                          className={`
                            transition-colors duration-300
                            ${isEven
                              ? 'text-[#C79A3E] group-hover:text-white'
                              : 'text-[#1F4A3E] group-hover:text-white'
                            }
                          `}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className={`
                          font-heading font-bold text-xl sm:text-2xl mb-3 leading-snug
                          ${isEven ? 'text-white' : 'text-text-primary'}
                        `}>
                          {item.title}
                        </h3>
                        <p className={`
                          font-body text-sm sm:text-base leading-relaxed max-w-3xl
                          ${isEven ? 'text-white/70' : 'text-text-secondary'}
                        `}>
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
          QUALITY RESPONSE — Split layout
      ═══════════════════════════════════════════════════════ */}
      <section ref={responseRef} className="bg-[#F8F6F2] py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Quality Standards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={responseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-card border border-[#1F4A3E]/[0.04]"
            >
              <div className="w-12 h-12 bg-[#1F4A3E]/10 rounded-xl flex items-center justify-center mb-6">
                <FiCheckCircle size={22} className="text-[#1F4A3E]" />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-primary mb-4">
                Quality Standards
              </h3>
              <p className="font-body text-base text-text-secondary leading-relaxed mb-5">
                We serve our customers with 100% organic food ingredients and a reliable supply of high-quality products that are fully suitable and safe for the end use intended.
              </p>
              <p className="font-body text-base text-text-secondary leading-relaxed">
                Every product meets all applicable legal requirements, whether it is a 50kg trial order or a 5-tonne production shipment. That standard never changes.
              </p>
            </motion.div>

            {/* Standard Quality Response */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={responseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#1F4A3E] rounded-2xl p-8 sm:p-10 shadow-lift relative overflow-hidden"
            >
              {/* Decorative */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/[0.05] rounded-full" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C79A3E] to-transparent" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/[0.12] rounded-xl flex items-center justify-center mb-6">
                  <FiHeart size={22} className="text-[#C79A3E]" />
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-4">
                  Standard Quality Response
                </h3>
                <p className="font-body text-base text-white/70 leading-relaxed mb-5">
                  We consider answering your questionnaires as an important part of our mutual communication, sharing relevant information to build and strengthen our shared supply chain.
                </p>
                <p className="font-body text-base text-white/70 leading-relaxed">
                  Clear, timely responses save both sides problems down the line. We treat every compliance request as a genuine part of building trust, never as paperwork to rush through.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          GENERAL QUALITY STATEMENT — 4 showcase cards
      ═══════════════════════════════════════════════════════ */}
      <section ref={statementRef} className="bg-white py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        {/* Decorative line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C79A3E] to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statementInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              General Quality Statement
            </span>
            <h2
              className="font-heading font-bold text-text-primary mt-3 mb-4 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              All Our Products Are
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {qualityPromise.map((item, idx) => {
              const Icon = item.icon;
              const isGreen = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={statementInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                >
                  <div
                    className={`
                      rounded-2xl p-8 text-center h-full transition-all duration-300 group relative overflow-hidden
                      ${isGreen
                        ? 'bg-[#1F4A3E] shadow-lift'
                        : 'bg-[#F8F6F2] border border-[#1F4A3E]/[0.06]'
                      }
                    `}
                  >
                    {/* Background accent */}
                    <div className={`
                      absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10
                      ${isGreen ? 'bg-white' : 'bg-[#1F4A3E]'}
                    `} />

                    <div className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-300
                      ${isGreen
                        ? 'bg-white/[0.12] group-hover:bg-[#C79A3E]'
                        : 'bg-[#1F4A3E]/10 group-hover:bg-[#1F4A3E]'
                      }
                    `}>
                      <Icon
                        size={28}
                        className={`
                          transition-colors duration-300
                          ${isGreen
                            ? 'text-[#C79A3E] group-hover:text-white'
                            : 'text-[#1F4A3E] group-hover:text-white'
                          }
                        `}
                      />
                    </div>

                    <h3 className={`
                      font-heading font-bold text-lg
                      ${isGreen ? 'text-white' : 'text-text-primary'}
                    `}>
                      {item.label}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA — Services referral + disclaimer
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#F8F6F2]">
        {/* Services CTA */}
        <div ref={ctaRef} className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative bg-[#1F4A3E] rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 opacity-15">
                <img
                  src="https://puregrowthagri.com/images/sunfloweroil2.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1F4A3E]/60" />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C79A3E]/[0.08] rounded-full translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/[0.03] rounded-full -translate-x-1/4 translate-y-1/3" />

              <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C79A3E]/20 border border-[#C79A3E]/30 rounded-full text-[#C79A3E] text-xs font-ui font-semibold uppercase tracking-wider mb-5">
                    <span className="w-1.5 h-1.5 bg-[#C79A3E] rounded-full" />
                    How We Work
                  </span>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4 leading-tight">
                    Explore Our Full Service Offering
                  </h2>
                  <p className="font-body text-base text-white/70 max-w-xl leading-relaxed">
                    From sourcing and quality verification to production coordination and logistics, see how we manage every step of the supply chain.
                  </p>
                </div>
                <Link
                  to="/quality/services"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C79A3E] text-white font-ui font-semibold rounded-full hover:bg-[#B38A35] transition-all duration-300 shadow-lift hover:shadow-[0_8px_30px_rgba(199,154,62,0.3)] flex-shrink-0"
                >
                  View Services
                  <FiArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-[#1F4A3E]/[0.04]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C79A3E]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiBookOpen size={18} className="text-[#C79A3E]" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-base text-text-primary mb-2">
                    General Disclaimer
                  </h4>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    All information is provided according to the best of our knowledge; however, this information can be subject to inadvertent change. If you intend to use any of our products for vulnerable consumers, including individuals with allergies, infants and young children, elderly citizens, or immunocompromised individuals, you must note that our products are not sold as being specifically suitable for these groups. You are under the obligation to determine suitability for each batch of product purchased. We are happy to assist with this assessment on request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { FiShield, FiCheckCircle, FiClock, FiTag, FiRefreshCw } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { whyChooseUsItems } from '@/data/siteData';

const iconMap: Record<string, React.ElementType> = {
  Shield: FiShield,
  CheckCircle: FiCheckCircle,
  Clock: FiClock,
  Tag: FiTag,
  RefreshCw: FiRefreshCw,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const card1 = whyChooseUsItems[0];
  const card2 = whyChooseUsItems[1];
  const card3 = whyChooseUsItems[2];
  const card4 = whyChooseUsItems[3];
  const card5 = whyChooseUsItems[4];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-[#F8F6F2] relative overflow-hidden">
      {/* Decorative grain texture */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <svg width="100%" height="100%">
          <filter id="wcuGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#wcuGrain)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-18"
        >
          <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
            Why Partner With Us
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mt-3 mb-4 leading-tight">
            Sourcing You Can{' '}
            <span className="text-[#1F4A3E]">Build a Business On</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Five reasons global buyers trust AgroWorldHub to deliver consistent quality, reliable timelines, and supply chains they can stand behind.
          </p>
        </motion.div>

        {/* ── Row 1: 2 Large Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 mb-6 lg:mb-8">

          {/* Card 1 — Wider focal point (3/5 width) */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="lg:col-span-3"
          >
            <FeatureCard
              item={card1}
              Icon={iconMap[card1.icon] || FiShield}
              elevated={false}
              large
            />
          </motion.div>

          {/* Card 2 — Narrower (2/5 width) */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="lg:col-span-2"
          >
            <FeatureCard
              item={card2}
              Icon={iconMap[card2.icon] || FiCheckCircle}
              elevated
              dark
            />
          </motion.div>
        </div>

        {/* ── Row 2: 3 Compact Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Card 3 */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={cardVariants}
          >
            <FeatureCard
              item={card3}
              Icon={iconMap[card3.icon] || FiClock}
              elevated={false}
              compact
            />
          </motion.div>

          {/* Card 4 */}
          <motion.div
            custom={3}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={cardVariants}
          >
            <FeatureCard
              item={card4}
              Icon={iconMap[card4.icon] || FiTag}
              elevated
              compact
              dark
            />
          </motion.div>

          {/* Card 5 */}
          <motion.div
            custom={4}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={cardVariants}
          >
            <FeatureCard
              item={card5}
              Icon={iconMap[card5.icon] || FiRefreshCw}
              elevated={false}
              compact
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Feature Card ── */

function FeatureCard({
  item,
  Icon,
  elevated = false,
  large = false,
  compact = false,
  dark = false,
}: {
  item: { title: string; description: string };
  Icon: React.ElementType;
  elevated?: boolean;
  large?: boolean;
  compact?: boolean;
  dark?: boolean;
}) {
  return (
    <div
      className={`
        group h-full rounded-2xl transition-all duration-350
        ${dark
          ? `bg-[#1F4A3E] border border-[#1F4A3E]
             ${elevated
               ? 'shadow-[0_10px_35px_rgba(31,74,62,0.25)] hover:shadow-[0_16px_48px_rgba(31,74,62,0.35)]'
               : 'shadow-[0_6px_24px_rgba(31,74,62,0.18)] hover:shadow-[0_12px_40px_rgba(31,74,62,0.30)]'
             }`
          : `bg-white border border-[#1F4A3E]/[0.04]
             ${elevated
               ? 'shadow-[0_8px_30px_rgba(31,74,62,0.08)] hover:shadow-[0_12px_40px_rgba(31,74,62,0.14)]'
               : 'shadow-soft hover:shadow-[0_8px_30px_rgba(31,74,62,0.10)]'
             }`
        }
        ${large ? 'p-8 sm:p-10' : compact ? 'p-6 sm:p-7' : 'p-7 sm:p-8'}
      `}
    >
      {/* Icon — top left */}
      <div
        className={`
          flex items-center justify-center rounded-xl mb-5
          transition-colors duration-300
          ${large ? 'w-14 h-14' : 'w-11 h-11'}
          ${dark
            ? 'bg-white group-hover:bg-[#C79A3E]'
            : 'bg-[#1F4A3E]/[0.07] group-hover:bg-[#1F4A3E]'
          }
        `}
      >
        <Icon
          size={large ? 24 : 20}
          className={`
            transition-colors duration-300
            ${dark
              ? 'text-[#1F4A3E] group-hover:text-white'
              : 'text-[#1F4A3E] group-hover:text-white'
            }
          `}
        />
      </div>

      {/* Title */}
      <h3
        className={`
          font-heading font-bold leading-snug mb-2
          ${dark ? 'text-white' : 'text-text-primary'}
          ${large ? 'text-xl sm:text-2xl' : compact ? 'text-base sm:text-lg' : 'text-lg'}
        `}
      >
        {item.title}
      </h3>

      {/* Divider accent */}
      <div className={`w-8 h-0.5 rounded-full mb-3 group-hover:w-12 transition-all duration-300 ${dark ? 'bg-[#C79A3E]' : 'bg-[#C79A3E]/40'}`} />

      {/* Description — left-aligned, readable */}
      <p
        className={`
          font-body leading-relaxed
          ${dark ? 'text-white/80' : 'text-text-secondary'}
          ${large ? 'text-sm sm:text-base' : 'text-sm'}
        `}
      >
        {item.description}
      </p>
    </div>
  );
}

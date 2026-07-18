import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin, FiLayers, FiUsers, FiGitBranch } from 'react-icons/fi';
import { statCards } from '@/data/siteData';

const iconMap: Record<string, React.ElementType> = {
  MapPin: FiMapPin,
  Layers: FiLayers,
  Users: FiUsers,
  GitBranch: FiGitBranch,
};

export default function StatsBand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-white relative">
      {/* Decorative grain accent */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <svg width="100%" height="100%">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary">
              Built on Real Experience, Not Just Promises
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {statCards.map((stat, index) => {
              const Icon = iconMap[stat.icon] || FiMapPin;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="bg-[#F8F6F2] rounded-xl p-6 border border-[#1F4A3E]/[0.06] shadow-card hover:shadow-lift transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-[#1F4A3E]/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1F4A3E] transition-colors duration-300">
                    <Icon size={22} className="text-[#1F4A3E] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-text-primary mb-1">
                    {stat.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {stat.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

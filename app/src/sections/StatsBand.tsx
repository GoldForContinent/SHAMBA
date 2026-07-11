import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { stats } from '@/data/siteData';
import AnimatedCounter from '@/components/ui-custom/AnimatedCounter';

export default function StatsBand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-14 sm:py-18 lg:py-20 bg-[#1F4A3E] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#C79A3E]/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#C79A3E]/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-[#C79A3E] mb-2">
                <AnimatedCounter target={parseInt(stat.value)} suffix={stat.suffix} />
              </div>
              <p className="font-ui text-sm sm:text-base text-white/80 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

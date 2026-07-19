import { Link } from 'react-router';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

export default function ServiceChannels() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C79A3E]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
            How We Serve You
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mt-3 mb-4 leading-tight">
            100% Organic Food,{' '}
            <span className="text-[#1F4A3E]">Two Ways</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Whether you need raw ingredients for your production line or a fully branded product ready for your shelf, we&apos;ve got you covered.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 — Food Ingredients */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Link
              to="/assortment/food-ingredients"
              className="group block relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] shadow-soft hover:shadow-lift transition-all duration-500"
            >
              {/* Background image */}
              <img
                src="https://images.unsplash.com/photo-1705765276919-d1d0c69377ac?w=800&h=1000&fit=crop"
                alt="Raw food ingredients: grains, spices, and seeds"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-9">
                {/* Top tag */}
                <div className="flex justify-start">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-xs font-ui font-medium border border-white/20">
                    <span className="w-1.5 h-1.5 bg-[#C79A3E] rounded-full" />
                    Browse Catalog
                  </span>
                </div>

                {/* Bottom content */}
                <div>
                  <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-3 leading-none uppercase tracking-tight">
                    Food{' '}
                    <br className="hidden sm:block" />
                    Ingredients
                  </h3>

                  <div className="flex items-center gap-2 text-white/80 group-hover:text-[#C79A3E] transition-colors duration-300">
                    <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <FiCheck size={12} className="text-white" />
                    </div>
                    <span className="font-ui text-sm font-medium">
                      Vetted sourcing, full traceability
                    </span>
                    <FiArrowRight size={14} className="ml-auto group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 2 — Private Label */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/assortment/private-label"
              className="group block relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] shadow-soft hover:shadow-lift transition-all duration-500"
            >
              {/* Background image */}
              <img
                src="https://images.unsplash.com/photo-1663269275910-7b161cd02284?w=800&h=1000&fit=crop"
                alt="Glass jars with white labels: private label packaging"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-9">
                {/* Top tag */}
                <div className="flex justify-start">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-xs font-ui font-medium border border-white/20">
                    <span className="w-1.5 h-1.5 bg-[#D48B55] rounded-full" />
                    Build Your Brand
                  </span>
                </div>

                {/* Bottom content */}
                <div>
                  <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-3 leading-none uppercase tracking-tight">
                    Private{' '}
                    <br className="hidden sm:block" />
                    Label
                  </h3>

                  <div className="flex items-center gap-2 text-white/80 group-hover:text-[#C79A3E] transition-colors duration-300">
                    <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <FiCheck size={12} className="text-white" />
                    </div>
                    <span className="font-ui text-sm font-medium">
                      Your brand, our supply chain
                    </span>
                    <FiArrowRight size={14} className="ml-auto group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

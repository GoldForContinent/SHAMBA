import { Link } from 'react-router';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const values = [
  {
    title: 'Respect for Nature',
    description: 'We select ingredients grown in harmony with the ecosystem, because what goes into the soil determines what ends up on the shelf.',
  },
  {
    title: '100% Organic Is Our Baseline',
    description: 'Organic isn\'t a premium label we add on request. It\'s the standard every product meets before it carries our name.',
  },
  {
    title: 'Certified Excellence',
    description: 'Every item in our catalog is fully verified, backed by the documentation and certifications your buyers expect.',
  },
];

export default function AboutPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-[#F8F6F2] relative overflow-hidden">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <filter id="aboutGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#aboutGrain)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Large tall image — top left */}
              <div className="row-span-2 rounded-2xl overflow-hidden shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1775203304348-bc115948e718?w=600&h=900&fit=crop"
                  alt="Assortment of dried ingredients and spices on wood"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Medium image — top right */}
              <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?w=500&h=375&fit=crop"
                  alt="Aromatic spices on display"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Small image — bottom right */}
              <div className="rounded-2xl overflow-hidden shadow-card aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&h=500&fit=crop"
                  alt="Cold-pressed oils"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Our Principles
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-text-primary mt-3 mb-6 leading-tight uppercase">
              Rooted in Pure,{' '}
              <span className="text-[#1F4A3E]">Organic Principles</span>
            </h2>

            <div className="space-y-5 mb-8">
              {values.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Custom SVG checkmark */}
                  <div className="w-7 h-7 rounded-full bg-[#1F4A3E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="#1F4A3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-base text-text-primary mb-0.5">
                      {item.title}
                    </p>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1F4A3E] text-white font-ui font-semibold rounded-full hover:bg-[#16382F] transition-all duration-300 shadow-soft hover:shadow-lift group"
            >
              Discover More
              <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

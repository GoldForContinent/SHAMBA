import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FiArrowRight } from 'react-icons/fi';
import { companyInfo } from '@/data/siteData';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop"
          alt="Agricultural landscape"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F4A3E]/90 via-[#1F4A3E]/70 to-[#1F4A3E]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#C79A3E]/20 border border-[#C79A3E]/30 rounded-full text-[#C79A3E] text-xs sm:text-sm font-ui font-semibold uppercase tracking-wider mb-6">
              Est. Nairobi, Kenya
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Your Trusted Manufacturer & Sourcing Partner in{' '}
            <span className="text-[#C79A3E]">East Africa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-body text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl"
          >
            {companyInfo.tagline}. We connect global buyers with premium agricultural products — ethically sourced, rigorously tested, and delivered with excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C79A3E] text-white font-ui font-semibold rounded-lg hover:bg-[#B38A35] transition-all duration-200 shadow-lift hover:shadow-soft"
            >
              Explore Our Products
              <FiArrowRight size={18} />
            </Link>
            <Link
              to="/what-we-do"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white font-ui font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80V40C240 80 480 0 720 0C960 0 1200 80 1440 40V80H0Z"
            fill="#F8F6F2"
          />
        </svg>
      </div>
    </section>
  );
}

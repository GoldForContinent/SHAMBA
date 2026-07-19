import { Link } from 'react-router';
import { FiArrowRight, FiPackage, FiTag } from 'react-icons/fi';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';

export default function Assortment() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Page Header */}
      <section className="bg-[#1F4A3E] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=1920&h=400&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              What We Supply
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-4">
              Our Assortment
            </h1>
            <p className="font-body text-base sm:text-lg text-white/80 max-w-2xl">
              Explore what we source and supply, from raw agricultural ingredients to full private-label packaging support.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Two-Panel Creative Section ── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12 sm:mb-16">
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Two Ways We Serve You
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mt-3 mb-4 leading-tight">
              Choose Your{' '}
              <span className="text-[#1F4A3E]">Path</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
              Whether you need raw ingredients for your production line or a fully branded product ready for your shelf, we&apos;ve got you covered.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            {/* ── Food Ingredients Panel ── */}
            <ScrollReveal direction="left" delay={0.1}>
              <Link
                to="/assortment/food-ingredients"
                className="group relative block w-full overflow-hidden lg:rounded-l-[2.5rem] lg:rounded-tr-[1rem] lg:rounded-br-[1rem] lg:rounded-tl-[2.5rem] rounded-2xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] shadow-lift hover:shadow-[0_20px_60px_rgba(31,74,62,0.25)] transition-all duration-500"
              >
                {/* Background image — hidden by default, revealed on hover */}
                <img
                  src="https://images.unsplash.com/photo-1705765276919-d1d0c69377ac?w=900&h=1100&fit=crop"
                  alt="Assorted food ingredients: grains, beans, spices"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100"
                  loading="lazy"
                />

                {/* Solid brand background — fades out on hover */}
                <div className="absolute inset-0 bg-[#1F4A3E] group-hover:opacity-0 transition-opacity duration-700" />

                {/* Dark overlay on hover for text contrast */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-700" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-10 lg:p-12 z-10">
                  {/* Top: Icon badge */}
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 transition-colors duration-300">
                    <FiPackage size={24} className="text-white" />
                  </div>

                  {/* Bottom: Text */}
                  <div>
                    <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-3 leading-none uppercase tracking-tight">
                      Food{' '}
                      <br className="hidden sm:block" />
                      Ingredients
                    </h3>

                    <p className="font-body text-white/70 text-sm sm:text-base max-w-md mb-5 leading-relaxed">
                      Browse our full catalog of vetted agricultural ingredients, including oils, grains, spices, pulses, and more, with complete traceability from source to shipment.
                    </p>

                    <span className="inline-flex items-center gap-2 text-white font-ui font-semibold text-sm group-hover:text-[#C79A3E] transition-colors duration-300">
                      Explore Catalog
                      <FiArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* ── Private Label Panel ── */}
            <ScrollReveal direction="right" delay={0.2}>
              <Link
                to="/assortment/private-label"
                className="group relative block w-full overflow-hidden lg:rounded-r-[2.5rem] lg:rounded-tl-[1rem] lg:rounded-bl-[1rem] lg:rounded-tr-[2.5rem] rounded-2xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] shadow-lift hover:shadow-[0_20px_60px_rgba(199,154,62,0.25)] transition-all duration-500"
              >
                {/* Background image — hidden by default, revealed on hover */}
                <img
                  src="https://images.unsplash.com/photo-1663269275910-7b161cd02284?w=900&h=1100&fit=crop"
                  alt="Private label glass jars with white labels"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100"
                  loading="lazy"
                />

                {/* Solid brand background — fades out on hover */}
                <div className="absolute inset-0 bg-[#C79A3E] group-hover:opacity-0 transition-opacity duration-700" />

                {/* Dark overlay on hover for text contrast */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-700" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-10 lg:p-12 z-10">
                  {/* Top: Icon badge */}
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 transition-colors duration-300">
                    <FiTag size={24} className="text-white" />
                  </div>

                  {/* Bottom: Text */}
                  <div>
                    <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-3 leading-none uppercase tracking-tight">
                      Private{' '}
                      <br className="hidden sm:block" />
                      Label
                    </h3>

                    <p className="font-body text-white/70 text-sm sm:text-base max-w-md mb-5 leading-relaxed">
                      We pack, blend, and prepare high-quality agricultural ingredients under your brand, from custom formulations to retail-ready packaging.
                    </p>

                    <span className="inline-flex items-center gap-2 text-white font-ui font-semibold text-sm group-hover:text-[#1F4A3E] transition-colors duration-300">
                      Build Your Brand
                      <FiArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

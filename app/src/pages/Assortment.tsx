import { Link } from 'react-router';
import { FiArrowRight, FiTag } from 'react-icons/fi';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/ui-custom/StaggerContainer';
import { categories } from '@/data/products';

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
              Explore what we source and supply — from raw agricultural ingredients to full private-label packaging support.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category) => (
              <StaggerItem key={category.slug}>
                <Link
                  to={`/shop?category=${category.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-card border border-[#1F4A3E]/[0.04] hover:shadow-lift transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#C79A3E] text-white text-xs font-ui font-medium rounded-md">
                        <FiTag size={10} />
                        {category.productCount} Products
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h2 className="font-heading font-semibold text-lg text-text-primary mb-2 group-hover:text-[#1F4A3E] transition-colors">
                      {category.name}
                    </h2>
                    <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[#1F4A3E] font-ui font-medium text-sm group-hover:gap-2.5 transition-all">
                      View Products
                      <FiArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Private Label Banner */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative bg-[#1F4A3E] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img
                  src="https://images.unsplash.com/photo-1584652868574-0669f4292976?w=1200&h=400&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-10 sm:py-14 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-[#C79A3E]/20 border border-[#C79A3E]/30 rounded-full text-[#C79A3E] text-xs font-ui font-semibold uppercase tracking-wider mb-4">
                    Private Label Services
                  </span>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
                    Build Your Own Brand on Our Supply Chain
                  </h2>
                  <p className="font-body text-white/80 max-w-xl">
                    We pack, blend, and prepare high-quality agricultural ingredients under your brand. Need help figuring out the right mix or format? We&apos;ll work through it with you.
                  </p>
                </div>
                <Link
                  to="/assortment/private-label"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C79A3E] text-white font-ui font-semibold rounded-lg hover:bg-[#B38A35] transition-colors shadow-lift flex-shrink-0"
                >
                  Learn More
                  <FiArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

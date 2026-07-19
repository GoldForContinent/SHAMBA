import { Link } from 'react-router';
import { FiArrowRight, FiTag } from 'react-icons/fi';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/ui-custom/StaggerContainer';
import { categories } from '@/data/products';

export default function FoodIngredients() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Page Header */}
      <section className="bg-[#1F4A3E] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&h=400&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Browse Our Range
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-4">
              Food Ingredients
            </h1>
            <p className="font-body text-base sm:text-lg text-white/80 max-w-3xl">
              Browse our core ingredient categories below, each backed by vetted sourcing and full traceability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Grid — Reuses existing category tiles */}
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

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mb-4">
              Looking for Something Specific?
            </h2>
            <p className="font-body text-base text-text-secondary mb-8 max-w-2xl mx-auto">
              If you need a product not listed above, our sourcing team can locate and qualify suppliers to meet your specific requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1F4A3E] text-white font-ui font-semibold rounded-lg hover:bg-[#16382F] transition-colors shadow-lift"
            >
              Get in Touch
              <FiArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

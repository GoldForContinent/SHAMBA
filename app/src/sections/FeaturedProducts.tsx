import { useRef } from 'react';
import { Link } from 'react-router';
import { FiArrowRight, FiArrowLeft, FiMessageCircle } from 'react-icons/fi';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';
import { useProducts } from '@/hooks/useProducts';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { Skeleton } from '@/components/ui/skeleton';

export default function FeaturedProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { products, loading, error } = useProducts();

  const featuredProducts = products.filter((p) => p.featured);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Featured Products
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary mt-2">
              Premium Selection
            </h2>
            <p className="font-body text-text-secondary mt-2 max-w-lg">
              Hand-picked products representing the finest quality from our trusted network of East African producers.
            </p>
          </div>

          {/* Navigation Arrows */}
          {!loading && featuredProducts.length > 0 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-lg border border-[#1F4A3E]/20 flex items-center justify-center text-[#1F4A3E] hover:bg-[#1F4A3E] hover:text-white transition-colors"
                aria-label="Scroll left"
              >
                <FiArrowLeft size={18} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-lg border border-[#1F4A3E]/20 flex items-center justify-center text-[#1F4A3E] hover:bg-[#1F4A3E] hover:text-white transition-colors"
                aria-label="Scroll right"
              >
                <FiArrowRight size={18} />
              </button>
            </div>
          )}
        </ScrollReveal>

        {/* Loading State */}
        {loading && (
          <div className="flex gap-5 sm:gap-6 overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-[280px] sm:w-[300px]">
                <div className="bg-[#F8F6F2] rounded-xl overflow-hidden shadow-card h-full flex flex-col">
                  <Skeleton className="aspect-square" />
                  <div className="p-4 sm:p-5 space-y-3">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-10 w-full" />
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-8 w-20" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="font-body text-sm text-text-secondary max-w-sm">
              Unable to load featured products right now. Please try refreshing the page.
            </p>
          </div>
        )}

        {/* Products Carousel */}
        {!loading && !error && (
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[280px] sm:w-[300px] snap-start"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-[#F8F6F2] rounded-xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-300 group h-full flex flex-col">
                  {/* Image */}
                  <Link to={`/shop/${product.slug}`} className="block relative overflow-hidden aspect-square">
                    <img
                      src={product.imageUrl}
                      alt={product.productName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#1F4A3E] text-white text-xs font-ui font-medium rounded-md">
                        {product.category}
                      </span>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <Link to={`/shop/${product.slug}`}>
                      <h3 className="font-heading font-semibold text-base text-text-primary mb-1.5 group-hover:text-[#1F4A3E] transition-colors line-clamp-1">
                        {product.productName}
                      </h3>
                    </Link>
                    <p className="font-body text-sm text-text-secondary line-clamp-2 mb-4 flex-1">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between gap-2 mt-auto">
                      <span className={`px-2 py-0.5 text-xs font-ui font-medium rounded ${
                        product.stockStatus === 'In Stock'
                          ? 'bg-green-100 text-green-700'
                          : product.stockStatus === 'Pre-Order'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {product.stockStatus}
                      </span>
                      <a
                        href={getWhatsAppLink(product.productName)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-white text-xs font-ui font-semibold rounded-lg hover:bg-[#1DA851] transition-colors"
                      >
                        <FiMessageCircle size={12} />
                        Inquire
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Link */}
        <ScrollReveal className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1F4A3E] text-[#1F4A3E] font-ui font-semibold rounded-lg hover:bg-[#1F4A3E] hover:text-white transition-all duration-200"
          >
            View All Products
            <FiArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

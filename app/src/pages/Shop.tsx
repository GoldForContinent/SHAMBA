import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import { FiMessageCircle, FiFilter, FiGrid, FiList, FiPackage } from 'react-icons/fi';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';
import { categories } from '@/data/products';
import { useProducts } from '@/hooks/useProducts';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { Skeleton } from '@/components/ui/skeleton';

const PRODUCTS_PER_PAGE = 6;

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const { products, loading, error } = useProducts();

  const categoriesWithCounts = useMemo(() => {
    return categories.map((cat) => ({
      ...cat,
      productCount: products.filter((p) => p.category === cat.name).length,
    }));
  }, [products]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products;
    const category = categories.find(c => c.slug === selectedCategory);
    if (!category) return products;
    return products.filter(p => p.category === category.name);
  }, [selectedCategory, products]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setCurrentPage(1);
    if (slug === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
  };

  const getStockBadgeClasses = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-700';
      case 'Pre-Order':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-red-100 text-red-700';
    }
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Page Header */}
      <section className="bg-[#1F4A3E] py-10 sm:py-14 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&h=400&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Browse Our Collection
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-3">
              Product Shop
            </h1>
            <p className="font-body text-base text-white/80 max-w-2xl">
              {loading
                ? 'Loading products...'
                : `${filteredProducts.length} products available across ${categoriesWithCounts.length} categories. All products can be inquired via WhatsApp.`}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-white rounded-xl p-5 shadow-card">
                <h3 className="font-heading font-semibold text-base text-text-primary mb-4 flex items-center gap-2">
                  <FiFilter size={16} className="text-[#C79A3E]" />
                  Categories
                </h3>
                <div className="space-y-1.5">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`w-full text-left px-3 py-2.5 rounded-lg font-ui text-sm transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-[#1F4A3E] text-white'
                        : 'text-text-secondary hover:bg-[#1F4A3E]/5 hover:text-text-primary'
                    }`}
                  >
                    All Products
                    <span className={`ml-2 text-xs ${selectedCategory === 'all' ? 'text-white/70' : 'text-text-secondary'}`}>
                      ({loading ? '...' : products.length})
                    </span>
                  </button>
                  {categoriesWithCounts.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => handleCategoryChange(cat.slug)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg font-ui text-sm transition-colors ${
                        selectedCategory === cat.slug
                          ? 'bg-[#1F4A3E] text-white'
                          : 'text-text-secondary hover:bg-[#1F4A3E]/5 hover:text-text-primary'
                      }`}
                    >
                      {cat.name}
                      <span className={`ml-2 text-xs ${selectedCategory === cat.slug ? 'text-white/70' : 'text-text-secondary'}`}>
                        ({cat.productCount})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Mobile Category Filter */}
            <div className="lg:hidden">
              <div className="flex gap-2 overflow-x-auto pb-3 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-ui text-sm font-medium snap-start transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-[#1F4A3E] text-white'
                      : 'bg-white text-text-secondary hover:bg-[#1F4A3E]/10'
                  }`}
                >
                  All
                </button>
                {categoriesWithCounts.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => handleCategoryChange(cat.slug)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full font-ui text-sm font-medium snap-start transition-colors ${
                      selectedCategory === cat.slug
                        ? 'bg-[#1F4A3E] text-white'
                        : 'bg-white text-text-secondary hover:bg-[#1F4A3E]/10'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1 min-w-0">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-5">
                <p className="font-ui text-sm text-text-secondary">
                  {loading
                    ? 'Loading...'
                    : `Showing ${paginatedProducts.length} of ${filteredProducts.length} products`}
                </p>
                <div className="hidden sm:flex items-center gap-1 bg-white rounded-lg p-1 shadow-sm">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#1F4A3E] text-white' : 'text-text-secondary hover:text-text-primary'}`}
                    aria-label="Grid view"
                  >
                    <FiGrid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#1F4A3E] text-white' : 'text-text-secondary hover:text-text-primary'}`}
                    aria-label="List view"
                  >
                    <FiList size={16} />
                  </button>
                </div>
              </div>

              {/* Loading State */}
              {loading && (
                <div className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'
                    : 'flex flex-col gap-4'
                }>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-white rounded-xl overflow-hidden shadow-card">
                      <Skeleton className="aspect-square rounded-none" />
                      <div className="p-4 sm:p-5 space-y-3">
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-3 w-1/3" />
                        <Skeleton className="h-10 w-full" />
                        <div className="flex items-center justify-between">
                          <Skeleton className="h-5 w-16" />
                          <Skeleton className="h-8 w-20" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                    <FiPackage size={28} className="text-red-400" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                    Unable to Load Products
                  </h3>
                  <p className="font-body text-sm text-text-secondary mb-4 max-w-sm">
                    We couldn't load the product catalogue right now. Please try refreshing the page or check back later.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-5 py-2.5 bg-[#1F4A3E] text-white font-ui font-medium rounded-lg hover:bg-[#16382F] transition-colors"
                  >
                    Refresh Page
                  </button>
                </div>
              )}

              {/* Products */}
              {!loading && !error && paginatedProducts.length > 0 && (
                <div className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'
                    : 'flex flex-col gap-4'
                }>
                  {paginatedProducts.map((product) => (
                    <div
                      key={product.id}
                      className={`bg-white rounded-xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-300 group ${
                        viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                      }`}
                    >
                      {/* Image */}
                      <Link
                        to={`/shop/${product.slug}`}
                        className={`block relative overflow-hidden ${
                          viewMode === 'list' ? 'sm:w-56 flex-shrink-0 aspect-square' : 'aspect-square'
                        }`}
                      >
                        <img
                          src={product.imageUrl}
                          alt={product.productName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </Link>

                      {/* Content */}
                      <div className="p-4 sm:p-5 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <Link to={`/shop/${product.slug}`}>
                            <h3 className="font-heading font-semibold text-base text-text-primary group-hover:text-[#1F4A3E] transition-colors line-clamp-1">
                              {product.productName}
                            </h3>
                          </Link>
                        </div>
                        <span className="text-xs font-ui font-medium text-[#C79A3E] mb-2">
                          {product.category}
                        </span>
                        <p className={`font-body text-sm text-text-secondary mb-4 flex-1 ${viewMode === 'list' ? '' : 'line-clamp-2'}`}>
                          {product.description}
                        </p>

                        <div className="flex items-center justify-between gap-2 mt-auto">
                          <span className={`px-2 py-0.5 text-xs font-ui font-medium rounded ${getStockBadgeClasses(product.stockStatus)}`}>
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
                  ))}
                </div>
              )}

              {/* Empty State */}
              {!loading && !error && paginatedProducts.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-[#1F4A3E]/10 rounded-full flex items-center justify-center mb-4">
                    <FiPackage size={28} className="text-[#1F4A3E]" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                    No Products Found
                  </h3>
                  <p className="font-body text-sm text-text-secondary mb-4 max-w-sm">
                    No products available in this category yet. Please check back later or browse other categories.
                  </p>
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className="px-5 py-2.5 bg-[#1F4A3E] text-white font-ui font-medium rounded-lg hover:bg-[#16382F] transition-colors"
                  >
                    View All Products
                  </button>
                </div>
              )}

              {/* Pagination */}
              {!loading && !error && totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white rounded-lg font-ui text-sm font-medium text-text-primary hover:bg-[#1F4A3E] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg font-ui text-sm font-medium transition-colors ${
                        currentPage === page
                          ? 'bg-[#1F4A3E] text-white'
                          : 'bg-white text-text-primary hover:bg-[#1F4A3E]/10'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white rounded-lg font-ui text-sm font-medium text-text-primary hover:bg-[#1F4A3E] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

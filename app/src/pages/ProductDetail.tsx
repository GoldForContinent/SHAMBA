import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { FiMessageCircle, FiArrowLeft, FiMapPin, FiPackage, FiCheckCircle, FiGrid, FiTruck } from 'react-icons/fi';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/ui-custom/StaggerContainer';
import { categories } from '@/data/products';
import { useProducts } from '@/hooks/useProducts';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { products, loading, error } = useProducts();

  const product = useMemo(() => {
    if (!slug || loading) return undefined;
    return products.find((p) => p.slug === slug);
  }, [slug, products, loading]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product, products]);

  const categorySlug = useMemo(() => {
    if (!product) return undefined;
    return categories.find((c) => c.name === product.category)?.slug;
  }, [product]);

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

  if (loading) {
    return (
      <div className="pt-16 sm:pt-20">
        <div className="bg-[#F8F6F2] border-b border-[#1F4A3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Skeleton className="h-4 w-64" />
          </div>
        </div>
        <section className="py-8 sm:py-12 lg:py-16 bg-[#F8F6F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skeleton className="h-5 w-24 mb-6" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <Skeleton className="aspect-square rounded-2xl" />
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-20" />
                </div>
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-20 w-full" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Skeleton className="h-16" />
                  <Skeleton className="h-16" />
                  <Skeleton className="h-16" />
                </div>
                <Skeleton className="h-14 w-full sm:w-64" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 sm:pt-20">
        <section className="py-16 sm:py-24 bg-[#F8F6F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiPackage size={28} className="text-red-400" />
            </div>
            <h2 className="font-heading font-semibold text-xl text-text-primary mb-2">
              Unable to Load Product
            </h2>
            <p className="font-body text-sm text-text-secondary mb-6 max-w-sm mx-auto">
              We couldn't load the product details right now. Please try refreshing the page.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 bg-[#1F4A3E] text-white font-ui font-medium rounded-lg hover:bg-[#16382F] transition-colors"
              >
                Refresh Page
              </button>
              <Link
                to="/shop"
                className="px-5 py-2.5 border border-[#1F4A3E] text-[#1F4A3E] font-ui font-medium rounded-lg hover:bg-[#1F4A3E]/5 transition-colors"
              >
                Back to Shop
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const getStockBadgeClassesForProduct = getStockBadgeClasses;

  return (
    <div className="pt-16 sm:pt-20">
      {/* Breadcrumb */}
      <div className="bg-[#F8F6F2] border-b border-[#1F4A3E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm font-ui">
            <Link to="/" className="text-text-secondary hover:text-[#1F4A3E] transition-colors">Home</Link>
            <span className="text-text-secondary">/</span>
            <Link to="/shop" className="text-text-secondary hover:text-[#1F4A3E] transition-colors">Shop</Link>
            <span className="text-text-secondary">/</span>
            {categorySlug && (
              <>
                <Link to={`/shop?category=${categorySlug}`} className="text-text-secondary hover:text-[#1F4A3E] transition-colors">
                  {product.category}
                </Link>
                <span className="text-text-secondary">/</span>
              </>
            )}
            <span className="text-text-primary font-medium truncate max-w-[200px]">{product.productName}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-text-secondary hover:text-[#1F4A3E] font-ui text-sm mb-6 transition-colors"
            >
              <FiArrowLeft size={16} />
              Back to Shop
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl overflow-hidden shadow-card aspect-square">
                <img
                  src={product.imageUrl}
                  alt={product.productName}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Product Info */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 bg-[#1F4A3E]/10 text-[#1F4A3E] text-xs font-ui font-medium rounded-md">
                    {product.category}
                  </span>
                  <span className={`px-2.5 py-1 text-xs font-ui font-medium rounded-md ${getStockBadgeClassesForProduct(product.stockStatus)}`}>
                    {product.stockStatus}
                  </span>
                </div>

                <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary mb-4">
                  {product.productName}
                </h1>

                <p className="font-body text-base text-text-secondary leading-relaxed mb-6">
                  {product.fullDescription || product.description}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {product.origin && (
                    <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
                      <div className="w-9 h-9 bg-[#1F4A3E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FiMapPin size={16} className="text-[#1F4A3E]" />
                      </div>
                      <div>
                        <p className="font-ui text-xs text-text-secondary uppercase tracking-wider">Origin</p>
                        <p className="font-ui text-sm font-medium text-text-primary">{product.origin}</p>
                      </div>
                    </div>
                  )}
                  {product.packaging && (
                    <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
                      <div className="w-9 h-9 bg-[#1F4A3E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FiPackage size={16} className="text-[#1F4A3E]" />
                      </div>
                      <div>
                        <p className="font-ui text-xs text-text-secondary uppercase tracking-wider">Packaging</p>
                        <p className="font-ui text-sm font-medium text-text-primary">{product.packaging}</p>
                      </div>
                    </div>
                  )}
                  {product.moq && (
                    <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
                      <div className="w-9 h-9 bg-[#1F4A3E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FiCheckCircle size={16} className="text-[#1F4A3E]" />
                      </div>
                      <div>
                        <p className="font-ui text-xs text-text-secondary uppercase tracking-wider">Minimum Order</p>
                        <p className="font-ui text-sm font-medium text-text-primary">{product.moq}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Applications */}
                {product.applications && product.applications.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-heading font-semibold text-base text-text-primary mb-3 flex items-center gap-2">
                      <FiGrid size={16} className="text-[#C79A3E]" />
                      Applications
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.applications.map((app, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm font-body text-text-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C79A3E] mt-1.5 flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specifications */}
                {product.specifications && Object.keys(product.specifications).length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-heading font-semibold text-base text-text-primary mb-3">
                      Product Specifications
                    </h3>
                    <div className="bg-white rounded-xl overflow-hidden">
                      {Object.entries(product.specifications).map(([key, value], i) => (
                        <div
                          key={key}
                          className={`flex items-center justify-between px-4 py-3 text-sm ${
                            i % 2 === 0 ? 'bg-[#F8F6F2]' : 'bg-white'
                          }`}
                        >
                          <span className="font-ui font-medium text-text-primary">{key}</span>
                          <span className="font-body text-text-secondary text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quality Info */}
                {product.qualityInfo && (
                  <div className="mb-6">
                    <h3 className="font-heading font-semibold text-base text-text-primary mb-3 flex items-center gap-2">
                      <FiCheckCircle size={16} className="text-[#C79A3E]" />
                      Quality Assurance
                    </h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed bg-white p-4 rounded-xl">
                      {product.qualityInfo}
                    </p>
                  </div>
                )}

                {/* Shipping Info */}
                {product.shippingInfo && (
                  <div className="mb-6">
                    <h3 className="font-heading font-semibold text-base text-text-primary mb-3 flex items-center gap-2">
                      <FiTruck size={16} className="text-[#C79A3E]" />
                      Shipping & Logistics
                    </h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed bg-white p-4 rounded-xl">
                      {product.shippingInfo}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-auto pt-4">
                  <a
                    href={getWhatsAppLink(product.productName)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-ui font-semibold rounded-xl hover:bg-[#1DA851] transition-all duration-200 shadow-lift text-base"
                  >
                    <FiMessageCircle size={20} />
                    Inquire via WhatsApp
                  </a>
                  <p className="font-ui text-xs text-text-secondary mt-3">
                    We typically respond within 2 hours during business hours.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-text-primary mb-6 sm:mb-8">
                Related Products
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((relatedProduct) => (
                <StaggerItem key={relatedProduct.id}>
                  <Link
                    to={`/shop/${relatedProduct.slug}`}
                    className="group block bg-[#F8F6F2] rounded-xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-300"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={relatedProduct.imageUrl}
                        alt={relatedProduct.productName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-sm text-text-primary group-hover:text-[#1F4A3E] transition-colors line-clamp-1">
                        {relatedProduct.productName}
                      </h3>
                      <p className="font-body text-xs text-text-secondary line-clamp-2 mt-1">
                        {relatedProduct.description}
                      </p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </div>
  );
}

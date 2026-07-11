import { Link } from 'react-router';
import { FiArrowRight, FiSearch, FiClipboard, FiPackage, FiGlobe, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/ui-custom/StaggerContainer';
import { supplyChainSteps, coreValues } from '@/data/siteData';

const stepIconMap: Record<string, React.ElementType> = {
  Search: FiSearch,
  ClipboardCheck: FiClipboard,
  Package: FiPackage,
  Globe: FiGlobe,
};

const valueIconMap: Record<string, React.ElementType> = {
  Users: FiUsers,
  TrendingUp: FiTrendingUp,
  Award: FiAward,
};

export default function WhatWeDo() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Page Header */}
      <section className="bg-[#1F4A3E] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&h=400&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-4">
              What We Do
            </h1>
            <p className="font-body text-base sm:text-lg text-white/80 max-w-3xl">
              We are more than a trading company — we are your end-to-end partner in sourcing premium agricultural products from East Africa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mt-2 mb-4">
                Connecting East African Farmers to the World
              </h2>
              <div className="space-y-4 font-body text-text-secondary leading-relaxed">
                <p>
                  SHAMBAMALL was founded with a clear purpose: to bridge the gap between East Africa&apos;s exceptional agricultural producers and discerning buyers worldwide. We believe that the region&apos;s fertile soils, ideal climate, and rich farming heritage produce some of the world&apos;s finest agricultural products — and we are here to bring them to your doorstep.
                </p>
                <p>
                  Our mission extends beyond trade. We are committed to building sustainable, ethical supply chains that benefit farming communities while delivering uncompromising quality to our clients. Every product we handle represents our commitment to excellence, transparency, and fair partnership.
                </p>
                <p>
                  Whether you are a supermarket chain seeking reliable supply, a restaurant group looking for premium ingredients, or an exporter building your product line — we provide the expertise, infrastructure, and dedication to make your sourcing journey seamless and successful.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-soft aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&h=600&fit=crop"
                    alt="East African farming landscape"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-card max-w-[200px]">
                  <p className="font-heading font-bold text-3xl text-[#1F4A3E]">30+</p>
                  <p className="font-ui text-sm text-text-secondary">Years of Combined Experience</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Supply Chain */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12 sm:mb-16">
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              How We Work
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary mt-2 mb-4">
              Our Supply Chain
            </h2>
            <p className="font-body text-text-secondary max-w-2xl mx-auto">
              A streamlined, transparent process that ensures quality at every step — from farm to your facility.
            </p>
          </ScrollReveal>

          {/* Steps */}
          <div className="relative">
            {/* Connecting Line - Desktop */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-[#1F4A3E]/15" />

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {supplyChainSteps.map((step, index) => {
                const Icon = stepIconMap[step.icon] || FiSearch;
                return (
                  <StaggerItem key={step.id}>
                    <div className="relative text-center">
                      <div className="w-16 h-16 bg-[#1F4A3E] rounded-full flex items-center justify-center mx-auto mb-5 relative z-10 shadow-soft">
                        <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#C79A3E] rounded-full flex items-center justify-center text-white text-xs font-heading font-bold">
                          {index + 1}
                        </span>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="font-body text-sm text-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden shadow-soft aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800&h=600&fit=crop"
                  alt="Agricultural product variety"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                What We Offer
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mt-2 mb-4">
                Comprehensive Product Portfolio
              </h2>
              <div className="space-y-4 font-body text-text-secondary leading-relaxed">
                <p>
                  Our product range spans nine major categories of agricultural commodities — from cold-pressed oils and ancient grains to exotic spices and premium coffee. Each category is curated to meet the highest standards of quality, traceability, and consistency.
                </p>
                <p>
                  We work directly with certified producers, cooperatives, and processing facilities across Kenya, Tanzania, Uganda, and Ethiopia. This direct relationship model ensures competitive pricing, consistent supply, and complete transparency — from farm gate to final delivery.
                </p>
                <p>
                  Our portfolio is continuously evolving as we discover new products and partner with innovative producers. If you are looking for a product not currently listed, our sourcing team can locate and qualify suppliers to meet your specific requirements.
                </p>
              </div>
              <Link
                to="/assortment"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#1F4A3E] text-white font-ui font-semibold rounded-lg hover:bg-[#16382F] transition-colors"
              >
                Explore Categories
                <FiArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10 sm:mb-12">
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              What Guides Us
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary mt-2 mb-4">
              Our Core Values
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {coreValues.map((value) => {
              const IconComponent = valueIconMap[value.icon] || FiPackage;
              return (
                <StaggerItem key={value.id}>
                  <div className="text-center p-6 sm:p-8">
                    <div className="w-14 h-14 bg-[#1F4A3E]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <IconComponent size={24} className="text-[#1F4A3E]" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-text-primary mb-1">
                      {value.title}
                    </h3>
                    <p className="text-[#C79A3E] text-sm font-ui font-medium mb-3">
                      {value.subtitle}
                    </p>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1F4A3E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=600&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                Our Commitment
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mt-2 mb-4">
                Sustainability & Ethical Sourcing
              </h2>
              <div className="space-y-4 font-body text-white/80 leading-relaxed">
                <p>
                  We believe that premium quality and ethical practices go hand in hand. Our sustainability commitment spans environmental stewardship, fair labor practices, and community development.
                </p>
                <p>
                  We prioritize working with farmers who employ sustainable agricultural methods — including organic farming, water conservation, and biodiversity protection. Many of our partner farms are certified organic, and we actively support others in transitioning to certified status.
                </p>
                <p>
                  Fair pricing is non-negotiable. We ensure that producers receive equitable compensation for their products, enabling them to invest in their farms, families, and communities. This approach not only supports livelihoods but also ensures the long-term viability of the supply chains we depend on.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center">
                  <p className="font-heading font-bold text-3xl text-[#C79A3E] mb-1">100%</p>
                  <p className="font-ui text-sm text-white/80">Ethical Sourcing</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center">
                  <p className="font-heading font-bold text-3xl text-[#C79A3E] mb-1">50+</p>
                  <p className="font-ui text-sm text-white/80">Partner Farms</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center">
                  <p className="font-heading font-bold text-3xl text-[#C79A3E] mb-1">9</p>
                  <p className="font-ui text-sm text-white/80">Product Categories</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center">
                  <p className="font-heading font-bold text-3xl text-[#C79A3E] mb-1">0</p>
                  <p className="font-ui text-sm text-white/80">Middlemen</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

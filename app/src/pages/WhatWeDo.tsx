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
              Our Role
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-4">
              What We Do
            </h1>
            <p className="font-body text-base sm:text-lg text-white/80 max-w-3xl">
              SHAMBAMALL connects East African farms and processors to buyers who need reliable, well-documented agricultural supply — restaurants, supermarkets, food processors, and exporters alike. We handle sourcing, quality checks, and logistics so you don&apos;t have to manage a dozen separate supplier relationships to fill one order.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Supply Partner Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                How We Work
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mt-2 mb-4">
                A Supply Partner, Not Just a Supplier
              </h2>
              <div className="space-y-4 font-body text-text-secondary leading-relaxed">
                <p>
                  We work across the full chain — from identifying the right growers and processors for a given product, through quality verification, to getting goods to your door. Our role is to remove the coordination burden from your side of the transaction, while holding every step to a standard we&apos;d be comfortable putting our name on.
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
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-card max-w-[200px] border border-[#1F4A3E]/[0.06]">
                  <p className="font-heading font-bold text-3xl text-[#1F4A3E]">9</p>
                  <p className="font-ui text-sm text-text-secondary">Core Product Categories</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Supply Chain — Connected Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12 sm:mb-16">
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary mt-2 mb-4">
              From Source to Your Door
            </h2>
            <p className="font-body text-text-secondary max-w-2xl mx-auto">
              A streamlined, transparent process that ensures quality at every step — from farm to your facility.
            </p>
          </ScrollReveal>

          {/* Horizontal Connected Timeline — Desktop */}
          <div className="hidden lg:block relative mb-8">
            {/* Connecting line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#1F4A3E]/20 via-[#C79A3E]/40 to-[#1F4A3E]/20" />

            <div className="grid grid-cols-4 gap-6 relative">
              {supplyChainSteps.map((step, index) => {
                const Icon = stepIconMap[step.icon] || FiSearch;
                return (
                  <div key={step.id} className="relative text-center">
                    <div className="relative z-10 mx-auto mb-5">
                      <div className="w-16 h-16 bg-white border-2 border-[#1F4A3E] rounded-full flex items-center justify-center mx-auto shadow-card hover:bg-[#1F4A3E] transition-colors duration-300 group">
                        <Icon size={24} className="text-[#1F4A3E] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#C79A3E] rounded-full flex items-center justify-center text-white text-xs font-heading font-bold shadow-soft">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Stack */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:hidden">
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
                What&apos;s in Our Portfolio
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mt-2 mb-4">
                Nine Core Categories
              </h2>
              <div className="space-y-4 font-body text-text-secondary leading-relaxed">
                <p>
                  Our catalog spans nine core categories — oils and fats, grains and cereals, pulses and legumes, nuts and seeds, dried fruits, spices and herbs, flours and meals, sweeteners, and beverages. Each product is sourced from growers and processors we&apos;ve personally vetted, not aggregated blind from open markets.
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

      {/* Why Sourcing Discipline Matters */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                Our Approach
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mt-2 mb-4">
                Why Sourcing Discipline Matters
              </h2>
              <div className="space-y-4 font-body text-text-secondary leading-relaxed">
                <p>
                  A supply chain is only as strong as its weakest link. That&apos;s why we don&apos;t just place orders — we maintain ongoing relationships with our supplier network, revisit quality standards regularly, and build in redundancy so a single grower&apos;s bad season doesn&apos;t become your stockout.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F8F6F2] rounded-xl p-5 text-center border border-[#1F4A3E]/[0.06]">
                  <p className="font-heading font-bold text-3xl text-[#1F4A3E] mb-1">50+</p>
                  <p className="font-ui text-sm text-text-secondary">Partner Farms</p>
                </div>
                <div className="bg-[#F8F6F2] rounded-xl p-5 text-center border border-[#1F4A3E]/[0.06]">
                  <p className="font-heading font-bold text-3xl text-[#1F4A3E] mb-1">4</p>
                  <p className="font-ui text-sm text-text-secondary">Countries Sourced</p>
                </div>
                <div className="bg-[#F8F6F2] rounded-xl p-5 text-center border border-[#1F4A3E]/[0.06]">
                  <p className="font-heading font-bold text-3xl text-[#1F4A3E] mb-1">100%</p>
                  <p className="font-ui text-sm text-text-secondary">Traceable Supply</p>
                </div>
                <div className="bg-[#F8F6F2] rounded-xl p-5 text-center border border-[#1F4A3E]/[0.06]">
                  <p className="font-heading font-bold text-3xl text-[#1F4A3E] mb-1">0</p>
                  <p className="font-ui text-sm text-text-secondary">Middlemen</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1F4A3E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=600&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-10 sm:mb-12">
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Our Foundation
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2 mb-4">
              What Drives How We Work
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {coreValues.map((value) => {
              const IconComponent = valueIconMap[value.icon] || FiPackage;
              return (
                <StaggerItem key={value.id}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 text-center">
                    <div className="w-14 h-14 bg-[#C79A3E]/20 rounded-full flex items-center justify-center mx-auto mb-5">
                      <IconComponent size={24} className="text-[#C79A3E]" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-1">
                      {value.title}
                    </h3>
                    <p className="text-[#C79A3E] text-sm font-ui font-medium mb-3">
                      {value.subtitle}
                    </p>
                    <p className="font-body text-sm text-white/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}

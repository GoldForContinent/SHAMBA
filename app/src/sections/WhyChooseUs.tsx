import { FiShield, FiCheckCircle, FiClock, FiTag, FiRefreshCw } from 'react-icons/fi';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/ui-custom/StaggerContainer';
import { whyChooseUsItems } from '@/data/siteData';

const iconMap: Record<string, React.ElementType> = {
  Shield: FiShield,
  CheckCircle: FiCheckCircle,
  Clock: FiClock,
  Tag: FiTag,
  RefreshCw: FiRefreshCw,
};

export default function WhyChooseUs() {
  const firstThree = whyChooseUsItems.slice(0, 3);
  const lastTwo = whyChooseUsItems.slice(3);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F6F2] relative overflow-hidden">
      {/* Subtle leaf accent */}
      <svg className="absolute top-0 right-0 w-80 h-80 opacity-[0.03] pointer-events-none" viewBox="0 0 200 200" fill="none">
        <path d="M100 0C100 55.2285 55.2285 100 0 100C55.2285 100 100 144.772 100 200C100 144.772 144.772 100 200 100C144.772 100 100 55.2285 100 0Z" fill="#1F4A3E"/>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
            Why Partner With Us
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary mt-2 mb-4">
            Sourcing You Can Build a Business On
          </h2>
        </ScrollReveal>

        {/* 3-column top row */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {firstThree.map((item) => {
            const Icon = iconMap[item.icon] || FiShield;
            return (
              <StaggerItem key={item.id}>
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-card border border-[#1F4A3E]/[0.04] hover:shadow-lift transition-all duration-300 group h-full">
                  <div className="w-12 h-12 bg-[#1F4A3E]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#1F4A3E] transition-colors duration-300">
                    <Icon size={22} className="text-[#1F4A3E] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* 2-column bottom row, centered */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {lastTwo.map((item) => {
            const Icon = iconMap[item.icon] || FiShield;
            return (
              <StaggerItem key={item.id}>
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-card border border-[#1F4A3E]/[0.04] hover:shadow-lift transition-all duration-300 group h-full">
                  <div className="w-12 h-12 bg-[#1F4A3E]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#1F4A3E] transition-colors duration-300">
                    <Icon size={22} className="text-[#1F4A3E] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

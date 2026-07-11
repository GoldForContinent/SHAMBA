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
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary mt-2 mb-4">
            The SHAMBAMALL Advantage
          </h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto">
            We combine decades of expertise with a modern approach to agricultural trade, ensuring you receive the best products and service at every step.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseUsItems.slice(0, 3).map((item) => {
            const Icon = iconMap[item.icon] || FiShield;
            return (
              <StaggerItem key={item.id}>
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-card hover:shadow-lift transition-all duration-300 group h-full">
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
          {/* Last two items - centered on desktop */}
          {whyChooseUsItems.slice(3).map((item) => {
            const Icon = iconMap[item.icon] || FiShield;
            return (
              <StaggerItem key={item.id} className="sm:col-span-1 lg:col-span-1 sm:last:col-start-1/2 lg:last:col-start-auto">
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-card hover:shadow-lift transition-all duration-300 group h-full">
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

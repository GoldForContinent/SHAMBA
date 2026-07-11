import { FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/ui-custom/StaggerContainer';
import { coreValues } from '@/data/siteData';

const iconMap: Record<string, React.ElementType> = {
  Users: FiUsers,
  TrendingUp: FiTrendingUp,
  Award: FiAward,
};

export default function CoreValues() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
            Our Core Values
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary mt-2 mb-4">
            What Drives Us
          </h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto">
            Three principles guide every decision we make and every relationship we build.
          </p>
        </ScrollReveal>

        {/* Values Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {coreValues.map((value) => {
            const Icon = iconMap[value.icon] || FiAward;
            return (
              <StaggerItem key={value.id}>
                <div className="relative bg-white rounded-xl p-6 sm:p-8 shadow-card hover:shadow-lift transition-all duration-300 group text-center h-full">
                  {/* Decorative accent line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#C79A3E] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="w-16 h-16 bg-[#1F4A3E]/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#1F4A3E] transition-colors duration-300">
                    <Icon size={28} className="text-[#1F4A3E] group-hover:text-white transition-colors duration-300" />
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
  );
}

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
    <section className="py-16 sm:py-20 lg:py-24 bg-[#1F4A3E] relative overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C79A3E]/[0.07] rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C79A3E]/[0.05] rounded-full -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
            Our Foundation
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2 mb-4">
            What Drives How We Work
          </h2>
        </ScrollReveal>

        {/* Values Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {coreValues.map((value) => {
            const Icon = iconMap[value.icon] || FiAward;
            return (
              <StaggerItem key={value.id}>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 group text-center h-full">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#C79A3E] rounded-b-full" />

                  <div className="w-16 h-16 bg-[#C79A3E]/20 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#C79A3E]/30 transition-colors duration-300">
                    <Icon size={28} className="text-[#C79A3E]" />
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
  );
}

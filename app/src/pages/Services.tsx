import { FiSearch, FiShield, FiClipboard, FiTruck, FiHeart, FiFileText, FiCheckCircle } from 'react-icons/fi';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/ui-custom/StaggerContainer';
import { serviceCards, commitmentSteps } from '@/data/siteData';

const serviceIconMap: Record<string, React.ElementType> = {
  Search: FiSearch,
  ShieldCheck: FiShield,
  ClipboardCheck: FiClipboard,
  Truck: FiTruck,
};

const commitmentIconMap: Record<string, React.ElementType> = {
  Heart: FiHeart,
  DollarSign: FiFileText,
  Grid: FiCheckCircle,
  CheckCircle: FiCheckCircle,
};

export default function Services() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Page Header */}
      <section className="bg-[#1F4A3E] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=1920&h=400&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              What We Do
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-4">
              Our Services
            </h1>
            <p className="font-body text-base sm:text-lg text-white/80 max-w-3xl">
              Quality isn&apos;t something we check for once and forget — it&apos;s built into every stage of how we source, handle, and ship. Here&apos;s exactly how we make sure what reaches you meets the standard we promised.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid — 4 cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {serviceCards.map((service) => {
              const Icon = serviceIconMap[service.icon] || FiSearch;
              return (
                <StaggerItem key={service.id}>
                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-card border border-[#1F4A3E]/[0.04] hover:shadow-lift transition-all duration-300 group h-full">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 bg-[#1F4A3E]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1F4A3E] transition-colors duration-300">
                        <Icon size={22} className="text-[#1F4A3E] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-text-primary pt-2">
                        {service.title}
                      </h3>
                    </div>
                    <ul className="space-y-3 ml-16">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="font-body text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[#C79A3E] rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Commitment — 4-step horizontal timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10 sm:mb-12">
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Our Commitment
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary mt-2">
              What Sets Us Apart
            </h2>
          </ScrollReveal>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute top-8 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#1F4A3E]/20 via-[#C79A3E]/40 to-[#1F4A3E]/20" />
            <div className="grid grid-cols-4 gap-6 relative">
              {commitmentSteps.map((step, index) => {
                const Icon = commitmentIconMap[step.icon] || FiCheckCircle;
                return (
                  <div key={step.id} className="relative text-center">
                    <div className="relative z-10 mx-auto mb-5">
                      <div className="w-16 h-16 bg-white border-2 border-[#C79A3E] rounded-full flex items-center justify-center mx-auto shadow-card">
                        <Icon size={24} className="text-[#C79A3E]" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#1F4A3E] rounded-full flex items-center justify-center text-white text-xs font-heading font-bold shadow-soft">
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

          {/* Mobile stack */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:hidden">
            {commitmentSteps.map((step, index) => {
              const Icon = commitmentIconMap[step.icon] || FiCheckCircle;
              return (
                <StaggerItem key={step.id}>
                  <div className="relative text-center">
                    <div className="w-16 h-16 bg-[#C79A3E] rounded-full flex items-center justify-center mx-auto mb-5 relative z-10 shadow-soft">
                      <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#1F4A3E] rounded-full flex items-center justify-center text-white text-xs font-heading font-bold">
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
    </div>
  );
}

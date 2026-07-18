import { FiFileText, FiShield, FiCheckCircle, FiHeart, FiSun, FiGitBranch } from 'react-icons/fi';
import { Link } from 'react-router';
import { FiArrowRight } from 'react-icons/fi';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/ui-custom/StaggerContainer';
import { qualityStandards } from '@/data/siteData';

const standardIconMap: Record<string, React.ElementType> = {
  FileCheck: FiFileText,
  ShieldCheck: FiShield,
  Leaf: FiCheckCircle,
  HeartHandshake: FiHeart,
  Microscope: FiSun,
  GitBranch: FiGitBranch,
};

export default function Quality() {
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
              Our Promise
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-4">
              Our Quality
            </h1>
            <p className="font-body text-base sm:text-lg text-white/80 max-w-3xl">
              Quality isn&apos;t something we check for once and forget — it&apos;s built into every stage of how we source, handle, and ship. Here&apos;s exactly how we make sure what reaches you meets the standard we promised.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quality Team */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                Our People
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mt-2 mb-4">
                The Quality Team Behind Your Supply
              </h2>
              <div className="space-y-4 font-body text-text-secondary leading-relaxed">
                <p>
                  Our quality team is made up of trained food and agricultural specialists who stay current with regional and international food safety standards. They work closely with our supplier network — not from a desk, but through regular site engagement — so quality checks reflect real production conditions, not paperwork alone.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="right">
              <div className="rounded-2xl overflow-hidden shadow-soft aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&h=600&fit=crop"
                  alt="Quality testing laboratory"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quality Standards Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12 sm:mb-16">
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Certifications & Standards
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary mt-2 mb-4">
              Our Quality Standards
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityStandards.map((standard) => {
              const Icon = standardIconMap[standard.icon] || FiFileText;
              return (
                <StaggerItem key={standard.id}>
                  <div className="bg-[#F8F6F2] rounded-xl p-6 sm:p-8 hover:shadow-lift transition-all duration-300 group h-full border border-[#1F4A3E]/[0.04]">
                    <div className="w-12 h-12 bg-[#1F4A3E]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#1F4A3E] transition-colors duration-300">
                      <Icon size={22} className="text-[#1F4A3E] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                      {standard.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {standard.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Quality Standards & Response */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ScrollReveal>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-card border border-[#1F4A3E]/[0.04] h-full">
                <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                  Our Goal
                </span>
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-text-primary mt-2 mb-4">
                  Quality Standards
                </h2>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  We aim to give every client a dependable supply of high-quality product that&apos;s fit for its intended use and compliant with relevant food safety requirements. That standard applies whether the order is 50kg or 5 tonnes.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-card border border-[#1F4A3E]/[0.04] h-full">
                <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                  Client-Centric
                </span>
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-text-primary mt-2 mb-4">
                  Standard Quality Response
                </h2>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  We treat every client questionnaire and compliance request as a genuine part of building trust — not paperwork to rush through. Clear answers now save both sides problems later.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* General Quality Statement */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden shadow-soft aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&h=600&fit=crop"
                  alt="Sustainable farming practices"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                General Quality Statement
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mt-2 mb-4">
                All Our Products Are
              </h2>
              <ul className="space-y-3 font-body text-text-secondary leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C79A3E] rounded-full mt-2.5 flex-shrink-0" />
                  Sourced with full traceability back to origin
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C79A3E] rounded-full mt-2.5 flex-shrink-0" />
                  Handled in line with applicable food safety regulations
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C79A3E] rounded-full mt-2.5 flex-shrink-0" />
                  Free from irradiation
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C79A3E] rounded-full mt-2.5 flex-shrink-0" />
                  Non-GMO
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-12 sm:py-16 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative bg-[#1F4A3E] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img
                  src="https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=1200&h=400&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-10 sm:py-14 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-[#C79A3E]/20 border border-[#C79A3E]/30 rounded-full text-[#C79A3E] text-xs font-ui font-semibold uppercase tracking-wider mb-4">
                    How We Work
                  </span>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
                    Explore Our Full Service Offering
                  </h2>
                  <p className="font-body text-white/80 max-w-xl">
                    From sourcing and quality verification to production coordination and logistics — see how we manage every step of the supply chain.
                  </p>
                </div>
                <Link
                  to="/quality/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C79A3E] text-white font-ui font-semibold rounded-lg hover:bg-[#B38A35] transition-colors shadow-lift flex-shrink-0"
                >
                  View Services
                  <FiArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 sm:py-12 bg-white border-t border-[#1F4A3E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-[#F8F6F2] rounded-xl p-6 sm:p-8 border border-[#1F4A3E]/10">
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-3">
                Important Notice
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                Information on this site reflects our current knowledge and practices and may be updated as our processes evolve. If any product is intended for vulnerable consumer groups — including individuals with allergies, infants, elderly consumers, or immunocompromised individuals — please note our products are not marketed as specifically suitable for these groups, and suitability should be independently confirmed for each batch. We&apos;re happy to assist with that assessment on request.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

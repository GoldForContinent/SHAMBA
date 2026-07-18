import { Link } from 'react-router';
import { FiArrowRight, FiCheckCircle, FiPackage, FiShield, FiUsers } from 'react-icons/fi';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/ui-custom/StaggerContainer';

const whyItems = [
  {
    icon: FiPackage,
    title: 'We Hold Stock and Labels',
    description: 'No need to manage separate inventory and label suppliers — we handle both.',
  },
  {
    icon: FiUsers,
    title: 'We Build It With You',
    description: 'Product and packaging decisions made collaboratively, not handed to you as a fixed menu.',
  },
  {
    icon: FiShield,
    title: 'We Handle the Certification Load',
    description: 'We provide the documentation and certificates your buyers will expect.',
  },
];

const packagingOptions = [
  'Pillow or block-bottom bags, 100g – 1000g',
  'Paper bag formats from 1kg – 15kg',
  'Multiple width options to fit different retail formats',
  'Clear front-and-back labeling options',
];

export default function PrivateLabel() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Page Header */}
      <section className="bg-[#1F4A3E] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1584652868574-0669f4292976?w=1920&h=400&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Your Brand
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-4">
              Private Label
            </h1>
            <p className="font-body text-base sm:text-lg text-white/80 max-w-3xl">
              Want to build your own brand on ingredients you can trust?
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro + Image */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-4 font-body text-text-secondary leading-relaxed">
                <p>
                  We pack, blend, and prepare high-quality grains, rice, nuts, seeds, pulses, and more under your brand. Need help figuring out the right mix or format? We&apos;ll work through it with you.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="right">
              <div className="rounded-2xl overflow-hidden shadow-soft aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop"
                  alt="Private label packaging"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ScrollReveal>
              <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                What We Offer
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mt-2 mb-4">
                Sourced Right, Packaged Responsibly
              </h2>
              <div className="space-y-4 font-body text-text-secondary leading-relaxed">
                <p>
                  Our catalog spans a wide range of agricultural ingredients sourced directly from vetted growers and processors across the region. We prioritize traceability — you&apos;ll know where your ingredients came from and how they were handled at every stage.
                </p>
                <p>
                  Beyond ingredient quality, we&apos;re mindful of how we package. Where possible, we use recyclable and lower-impact packaging materials, because responsible sourcing shouldn&apos;t stop at the ingredient — it should extend to everything the product touches on its way to the shelf.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-[#F8F6F2] rounded-xl p-6 sm:p-8 border border-[#1F4A3E]/[0.06]">
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-4">
                  In Short
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle size={18} className="text-[#C79A3E] mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm text-text-secondary">Responsible, lower-impact packaging materials where available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle size={18} className="text-[#C79A3E] mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm text-text-secondary">Compliance with relevant food safety certification standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle size={18} className="text-[#C79A3E] mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm text-text-secondary">Careful attention to packaging integrity and presentation</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Packaging Options */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-soft aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop"
                  alt="Packaging options"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
                Packaging Options
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mt-2 mb-4">
                We Work Around What Fits Your Product and Your Market
              </h2>
              <ul className="space-y-3">
                {packagingOptions.map((option, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#C79A3E] rounded-full mt-2.5 flex-shrink-0" />
                    <span className="font-body text-sm text-text-secondary leading-relaxed">{option}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Social Impact
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mt-2 mb-4">
              Packaging With Purpose
            </h2>
            <div className="space-y-4 font-body text-text-secondary leading-relaxed text-left">
              <p>
                Choosing to package with us isn&apos;t just about the end product — it supports the broader network of farmers and local producers we work with, and contributes to fairer, more consistent income across that chain. We&apos;re committed to working with people who bring the right skills and motivation, regardless of background.
              </p>
              <p>
                Together, we can shape an assortment and packaging approach that actually fits your market.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose SHAMBAMALL */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10 sm:mb-12">
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Why SHAMBAMALL
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary mt-2">
              Why Choose SHAMBAMALL for Your Private Label
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whyItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={index}>
                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-card border border-[#1F4A3E]/[0.04] hover:shadow-lift transition-all duration-300 group text-center h-full">
                    <div className="w-14 h-14 bg-[#1F4A3E]/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#1F4A3E] transition-colors duration-300">
                      <Icon size={24} className="text-[#1F4A3E] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
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

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-[#1F4A3E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=400&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4">
              Ready to Build Your Brand?
            </h2>
            <p className="font-body text-base text-white/80 mb-8 max-w-2xl mx-auto">
              Get in touch to discuss your private label project. We&apos;ll help you find the right products, formats, and packaging for your market.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C79A3E] text-white font-ui font-semibold rounded-lg hover:bg-[#B38A35] transition-colors shadow-lift"
            >
              Start a Conversation
              <FiArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

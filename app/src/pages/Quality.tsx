import { FiFileText, FiShield, FiCheckCircle, FiHeart, FiSun, FiGitBranch } from 'react-icons/fi';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/ui-custom/StaggerContainer';
import { qualityStandards } from '@/data/siteData';

const iconMap: Record<string, React.ElementType> = {
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
              Quality Assurance
            </h1>
            <p className="font-body text-base sm:text-lg text-white/80 max-w-3xl">
              Quality is not an afterthought — it is the foundation of everything we do. From supplier selection to final delivery, every step is governed by rigorous standards and verified through independent testing.
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
                Our Team
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mt-2 mb-4">
                Dedicated Quality Professionals
              </h2>
              <div className="space-y-4 font-body text-text-secondary leading-relaxed">
                <p>
                  Our quality assurance team comprises experienced food technologists, agricultural specialists, and certified auditors who oversee every aspect of product quality. With decades of combined experience in agricultural commodity inspection, our team is equipped to identify, verify, and guarantee the highest standards.
                </p>
                <p>
                  We maintain a zero-compromise policy on quality. Every batch undergoes multi-point inspection — from origin verification and sensory evaluation to laboratory analysis for contaminants, moisture content, and nutritional parameters. Products that do not meet our standards are rejected at source, ensuring that only the finest reach our clients.
                </p>
                <p>
                  Our team also works proactively with suppliers to improve their practices, providing guidance on post-harvest handling, storage, and processing techniques. This collaborative approach elevates quality across our entire supply network.
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
            <p className="font-body text-text-secondary max-w-2xl mx-auto">
              We adhere to internationally recognized standards and hold certifications that demonstrate our commitment to quality, safety, and ethical practices.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityStandards.map((standard) => {
              const Icon = iconMap[standard.icon] || FiFileText;
              return (
                <StaggerItem key={standard.id}>
                  <div className="bg-[#F8F6F2] rounded-xl p-6 sm:p-8 hover:shadow-lift transition-all duration-300 group h-full">
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

      {/* Standards Response */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mx-auto">
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Client-Centric Approach
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mt-2 mb-6">
              Standards Response
            </h2>
            <div className="space-y-5 font-body text-text-secondary leading-relaxed">
              <p>
                We understand that different markets and clients have unique quality requirements. Our quality management system is designed to be responsive and adaptive — capable of meeting specific client standards, regional regulations, and industry certifications.
              </p>
              <p>
                Upon receiving your inquiry, our quality team reviews your specifications and confirms our ability to meet them. Where additional testing, documentation, or process modifications are required, we outline these clearly and implement them seamlessly into our workflow.
              </p>
              <p>
                We provide comprehensive documentation with every shipment, including certificates of analysis, origin certificates, phytosanitary certificates, and any client-specific documentation. Our transparency ensures you have complete confidence in the products you receive.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* General Statement */}
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
                Our Commitment
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mt-2 mb-4">
                General Quality Statement
              </h2>
              <div className="space-y-4 font-body text-text-secondary leading-relaxed">
                <p>
                  SHAMBAMALL is committed to providing agricultural products of the highest quality that meet or exceed customer expectations and regulatory requirements. Our quality management system encompasses all aspects of our operations — from supplier qualification and product sourcing to processing, packaging, storage, and delivery.
                </p>
                <p>
                  We continuously invest in our quality infrastructure, including laboratory equipment, staff training, and process improvements. Regular internal and external audits ensure our systems remain effective and aligned with international best practices.
                </p>
                <p>
                  Customer feedback is integral to our quality improvement cycle. We actively solicit and respond to client input, using it to drive enhancements in our products, services, and processes. Your satisfaction is the ultimate measure of our quality success.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 sm:py-12 bg-[#F8F6F2] border-t border-[#1F4A3E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#1F4A3E]/10">
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-3">
                Disclaimer
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                While every effort is made to ensure the accuracy of product information, specifications, and certifications on this website, SHAMBAMALL reserves the right to modify product details without prior notice. All product descriptions, certifications, and quality claims are subject to verification against actual shipment documentation. For the most current product specifications, certification status, and availability, please contact our team directly. Product images are representative and may not reflect the exact appearance of shipped goods.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

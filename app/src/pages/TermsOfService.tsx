import { useEffect } from 'react';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';
import { companyInfo } from '@/data/siteData';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the AgroWorldHub website (agroworldhub.com) and our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.

These terms apply to all visitors, users, and clients who access or use our website and services.`,
  },
  {
    title: '2. About AgroWorldHub',
    content: `AgroWorldHub is a premium agricultural trading company registered and operating in Nairobi, Kenya. We specialize in sourcing, processing, and exporting high-quality agricultural products to clients worldwide. Our services include food ingredient sourcing, quality assurance, production coordination, logistics, and private label solutions.`,
  },
  {
    title: '3. Products and Services',
    content: `All product descriptions, images, specifications, and pricing displayed on our website are provided for general informational purposes. While we strive for accuracy, we reserve the right to modify product details, pricing, and availability without prior notice.

- **Samples**: Product samples are available upon request to confirm specifications before bulk orders are placed.
- **Quotes**: All prices and quotations are provided on a per-inquiry basis and are subject to change based on market conditions, order volume, and destination.
- **MOQ**: Minimum order quantities may apply and vary by product and supplier.`,
  },
  {
    title: '4. Orders and Agreements',
    content: `Placing an inquiry or order through our website or via direct communication does not constitute a binding contract. An order becomes binding only upon written confirmation from AgroWorldHub, which includes agreed pricing, quantities, specifications, delivery terms, and payment arrangements.

We reserve the right to decline any order at our discretion, including but not limited to cases where:
- Product specifications cannot be met to our quality standards.
- Payment terms cannot be agreed upon.
- The order conflicts with applicable export or trade regulations.`,
  },
  {
    title: '5. Pricing and Payment',
    content: `All prices are quoted in USD unless otherwise stated and are subject to change without notice. Final pricing is confirmed upon order confirmation and may be affected by:

- Market fluctuations in raw material costs.
- Shipping and logistics charges.
- Regulatory or compliance costs.
- Currency exchange rate changes.

Payment terms are established on a per-order basis as part of the order confirmation process.`,
  },
  {
    title: '6. Shipping and Delivery',
    content: `Shipping terms are agreed upon for each order individually. While we make every effort to ensure timely delivery, AgroWorldHub is not liable for delays caused by circumstances beyond our reasonable control, including but not limited to customs clearance delays, shipping carrier disruptions, natural disasters, government actions, or port congestion.

Risk of loss and title for products transfer to the buyer in accordance with the agreed Incoterms specified in the order confirmation.`,
  },
  {
    title: '7. Quality Assurance',
    content: `AgroWorldHub maintains rigorous quality control processes across all stages of sourcing, handling, and delivery. However, all products are sold on the understanding that the buyer has satisfied themselves as to the suitability of the products for their intended purpose.

Our quality statements, certifications, and standards as presented on our website reflect our current practices and may be updated as processes evolve.`,
  },
  {
    title: '8. Intellectual Property',
    content: `All content on this website, including but not limited to text, graphics, logos, images, product descriptions, and software, is the property of AgroWorldHub or its content suppliers and is protected by applicable copyright, trademark, and intellectual property laws.

You may not reproduce, distribute, modify, or create derivative works from any content on this website without prior written permission from AgroWorldHub.`,
  },
  {
    title: '9. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, AgroWorldHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to:

- The use of or inability to use our website.
- Any inaccuracies in website content or product information.
- Delays, interruptions, or failures in service delivery.
- Actions taken based on information provided on this website.

Our total liability for any claim arising from or related to our services shall not exceed the value of the specific order to which the claim relates.`,
  },
  {
    title: '10. Indemnification',
    content: `You agree to indemnify, defend, and hold harmless AgroWorldHub, its directors, employees, and partners from any claims, losses, damages, liabilities, costs, and expenses (including reasonable legal fees) arising from your use of our website, violation of these terms, or violation of any third-party rights.`,
  },
  {
    title: '11. Force Majeure',
    content: `AgroWorldHub shall not be held liable for any failure or delay in performing our obligations under these terms if such failure or delay results from circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, pandemic, government regulations, natural disasters, labor disputes, or disruption to supply chains and transportation networks.`,
  },
  {
    title: '12. Governing Law and Disputes',
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising from or related to these terms or our services shall first be attempted to be resolved through good-faith negotiation. Where negotiation fails, disputes shall be subject to the exclusive jurisdiction of the courts of Nairobi, Kenya.`,
  },
  {
    title: '13. Modifications to Terms',
    content: `We reserve the right to update or modify these Terms of Service at any time without prior notice. Changes take effect immediately upon posting to this page. Your continued use of the website after any modifications constitutes acceptance of the updated terms.

We encourage you to review this page periodically to stay informed of any changes.`,
  },
  {
    title: '14. Contact',
    content: `If you have any questions about these Terms of Service, please contact us:

**AgroWorldHub**
${companyInfo.address}
Email: ${companyInfo.email}
Phone: ${companyInfo.phone}`,
  },
];

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="bg-[#1F4A3E] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%">
            <filter id="tosGrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#tosGrain)"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Legal
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-4">
              Terms of Service
            </h1>
            <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl">
              Please read these terms carefully before using our website or engaging our services. They outline the conditions under which we operate and serve our clients.
            </p>
            <p className="font-ui text-sm text-white/50 mt-4">
              Last Updated: July 19, 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-body text-base text-text-secondary leading-relaxed mb-10">
              These Terms of Service govern your use of the AgroWorldHub website and services. By using our website, placing inquiries, or engaging our services, you agree to these terms.
            </p>
          </ScrollReveal>

          <div className="space-y-10">
            {sections.map((section, idx) => (
              <ScrollReveal key={idx}>
                <div>
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-text-primary mb-3">
                    {section.title}
                  </h2>
                  <div className="font-body text-sm sm:text-base text-text-secondary leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

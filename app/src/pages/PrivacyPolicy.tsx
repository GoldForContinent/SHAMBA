import { useEffect } from 'react';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';
import { companyInfo } from '@/data/siteData';

const sections = [
  {
    title: '1. Information We Collect',
    content: `When you visit our website, submit a contact form, inquire about a product, or communicate with us via WhatsApp or email, we may collect the following types of personal information:

- **Contact details**: Name, email address, phone number, and company name.
- **Business information**: Product interest, order requirements, destination country, and shipping preferences.
- **Technical data**: IP address, browser type, device information, pages visited, and time spent on our website, collected automatically through cookies and analytics tools.
- **Communication records**: Messages, inquiries, and correspondence you send to us through any channel.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect for the following purposes:

- To respond to your inquiries, provide quotes, and fulfill product requests.
- To process and manage orders, including coordination with suppliers and logistics partners.
- To improve our website, services, and user experience.
- To send relevant updates about products, services, or company news, only where you have opted in.
- To comply with legal, regulatory, and contractual obligations.
- To detect and prevent fraud, unauthorized access, or other harmful activities.`,
  },
  {
    title: '3. How We Share Your Information',
    content: `We do not sell or rent your personal information to third parties. We may share your data with:

- **Trusted suppliers and processors**: To fulfill orders and coordinate production on your behalf.
- **Logistics and shipping partners**: To arrange delivery of products to your specified destination.
- **Legal and regulatory authorities**: Where required by law, regulation, or legal process.
- **Service providers**: Website hosting, analytics, and communication tools that support our operations, bound by confidentiality agreements.

All third-party partners are contractually required to handle your data in accordance with applicable data protection standards.`,
  },
  {
    title: '4. Data Retention',
    content: `We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.

When your data is no longer required, it is securely deleted or anonymized so that it can no longer be associated with you.`,
  },
  {
    title: '5. Data Security',
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission (SSL/TLS), secure server infrastructure, restricted access controls, and regular security reviews.

While we take every reasonable precaution, no method of transmission or storage is completely secure. We encourage you to contact us if you have concerns about the security of your data.`,
  },
  {
    title: '6. Your Rights',
    content: `Depending on your location, you may have the following rights regarding your personal data:

- **Access**: Request a copy of the personal data we hold about you.
- **Correction**: Request correction of inaccurate or incomplete data.
- **Deletion**: Request deletion of your personal data, subject to legal retention requirements.
- **Objection**: Object to the processing of your data for certain purposes.
- **Portability**: Request transfer of your data in a structured, machine-readable format.
- **Withdrawal of consent**: Where processing is based on consent, you may withdraw it at any time.

To exercise any of these rights, please contact us at ${companyInfo.email}.`,
  },
  {
    title: '7. Cookies and Tracking',
    content: `Our website uses cookies and similar technologies to improve your browsing experience, analyze website traffic, and understand user behavior. Cookies are small text files stored on your device when you visit our website.

**Types of cookies we use:**
- **Essential cookies**: Required for the website to function correctly (e.g., session management, security).
- **Analytics cookies**: Help us understand how visitors interact with our website by collecting anonymous usage data.
- **Preference cookies**: Remember your settings and preferences to provide a personalized experience.

You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect website functionality.

For full details, please refer to our Cookie Policy section below.`,
  },
  {
    title: '8. Third-Party Links',
    content: `Our website may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policy of any third-party site you visit.`,
  },
  {
    title: '9. International Data Transfers',
    content: `As a company based in Kenya serving international clients, your information may be transferred to and processed in countries outside your country of residence. We ensure that appropriate safeguards are in place to protect your data during such transfers, in compliance with applicable data protection laws.`,
  },
  {
    title: '10. Children\'s Privacy',
    content: `Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete that information promptly.`,
  },
  {
    title: '11. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make material changes, we will update the "Last Updated" date at the top of this page.

We encourage you to review this page periodically to stay informed about how we protect your information.`,
  },
  {
    title: '12. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:

**AgroWorldHub**
${companyInfo.address}
Email: ${companyInfo.email}
Phone: ${companyInfo.phone}`,
  },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="bg-[#1F4A3E] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%">
            <filter id="ppGrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#ppGrain)"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Legal
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-4">
              Privacy Policy
            </h1>
            <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl">
              Your privacy matters to us. This policy explains how AgroWorldHub collects, uses, and protects your personal information when you interact with our website and services.
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
              At AgroWorldHub, we are committed to safeguarding your personal information and maintaining your trust. This Privacy Policy describes how we collect, use, store, and share data when you visit our website, use our services, or communicate with us.
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

import { Link } from 'react-router';
import { FiArrowRight, FiMessageCircle } from 'react-icons/fi';
import { getWhatsAppLink } from '@/lib/whatsapp';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';

export default function CTABanner() {
  return (
    <section className="py-16 sm:py-20 bg-[#1F4A3E] relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C79A3E]/10 rounded-full translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C79A3E]/5 rounded-full -translate-x-1/4 translate-y-1/3" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
            Ready to Source with Confidence?
          </h2>
          <p className="font-body text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join buyers worldwide who trust AgroWorldHub for premium agricultural products. Get in touch today and let us handle your sourcing needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-ui font-semibold rounded-lg hover:bg-[#1DA851] transition-all duration-200 shadow-lift w-full sm:w-auto justify-center"
            >
              <FiMessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-ui font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20 w-full sm:w-auto justify-center"
            >
              Contact Us
              <FiArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

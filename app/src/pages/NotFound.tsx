import { Link } from 'react-router';
import { FiHome, FiSearch } from 'react-icons/fi';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';

export default function NotFound() {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen flex flex-col">
      <section className="flex-1 flex items-center justify-center bg-[#F8F6F2] py-16 sm:py-24">
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="w-24 h-24 mx-auto mb-8 bg-[#1F4A3E]/10 rounded-full flex items-center justify-center">
              <span className="font-heading font-bold text-5xl text-[#1F4A3E]">404</span>
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary mb-4">
              Page Not Found
            </h1>
            <p className="font-body text-base text-text-secondary mb-8 max-w-sm mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F4A3E] text-white font-ui font-semibold rounded-lg hover:bg-[#16382F] transition-colors"
              >
                <FiHome size={16} />
                Back to Home
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1F4A3E] font-ui font-semibold rounded-lg border border-[#1F4A3E]/20 hover:bg-[#1F4A3E]/5 transition-colors"
              >
                <FiSearch size={16} />
                Browse Products
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

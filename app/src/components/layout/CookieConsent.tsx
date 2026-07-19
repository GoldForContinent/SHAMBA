import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShield, FiX } from 'react-icons/fi';

const COOKIE_CONSENT_KEY = 'agroworldhub_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-5 lg:p-6 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto bg-[#1F4A3E] rounded-2xl shadow-[0_-8px_40px_rgba(0,0,0,0.25)] p-6 sm:p-7 pointer-events-auto relative overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C79A3E]/[0.08] rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/[0.03] rounded-full -translate-x-1/4 translate-y-1/3" />

            {/* Close button */}
            <button
              onClick={decline}
              className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors"
              aria-label="Close cookie banner"
            >
              <FiX size={18} />
            </button>

            <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5">
              {/* Icon */}
              <div className="w-11 h-11 bg-[#C79A3E]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <FiShield size={20} className="text-[#C79A3E]" />
              </div>

              {/* Content */}
              <div className="flex-1 pr-6">
                <h3 className="font-heading font-bold text-white text-base mb-1.5">
                  We Value Your Privacy
                </h3>
                <p className="font-body text-sm text-white/65 leading-relaxed mb-1">
                  We use cookies and similar technologies to improve your browsing experience, analyze website traffic, and deliver personalized content. By clicking &quot;Accept All&quot;, you consent to the use of all cookies.
                </p>
                <p className="font-ui text-xs text-white/45">
                  Read our{' '}
                  <Link to="/privacy-policy" className="text-[#C79A3E] hover:text-[#C79A3E]/80 underline underline-offset-2 transition-colors" onClick={() => setVisible(false)}>
                    Privacy Policy
                  </Link>
                  {' '}for more details.
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2.5 flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={decline}
                  className="flex-1 sm:flex-initial px-5 py-2.5 bg-white/10 text-white/80 font-ui font-medium text-sm rounded-lg hover:bg-white/15 transition-colors border border-white/10"
                >
                  Decline
                </button>
                <button
                  onClick={accept}
                  className="flex-1 sm:flex-initial px-5 py-2.5 bg-[#C79A3E] text-white font-ui font-semibold text-sm rounded-lg hover:bg-[#B38A35] transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '@/data/siteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F6F2]/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                isScrolled ? 'bg-brand-primary' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <span className="text-white font-heading font-bold text-sm sm:text-base">S</span>
              </div>
              <span className={`font-heading font-bold text-lg sm:text-xl tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-brand-primary' : 'text-white'
              }`}>
                SHAMBAMALL
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-ui font-medium rounded-lg transition-all duration-200 ${
                    location.pathname === link.href
                      ? isScrolled
                        ? 'text-brand-primary bg-brand-primary/10'
                        : 'text-white bg-white/15'
                      : isScrolled
                        ? 'text-text-secondary hover:text-brand-primary hover:bg-brand-primary/5'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button + Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/shop"
                className={`hidden sm:inline-flex px-4 py-2 text-sm font-ui font-semibold rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? 'bg-brand-primary text-white hover:bg-[#16382F] shadow-card hover:shadow-lift'
                    : 'bg-white text-brand-primary hover:bg-white/90 shadow-lg'
                }`}
              >
                Shop Now
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'text-text-primary hover:bg-brand-primary/10'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-[#F8F6F2] shadow-2xl"
            >
              <div className="flex flex-col pt-20 px-6 pb-8 h-full">
                <div className="flex flex-col gap-1 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        to={link.href}
                        className={`block px-4 py-3 rounded-lg font-ui font-medium text-base transition-colors ${
                          location.pathname === link.href
                            ? 'text-brand-primary bg-brand-primary/10'
                            : 'text-text-primary hover:text-brand-primary hover:bg-brand-primary/5'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <Link
                  to="/shop"
                  className="sm:hidden w-full px-4 py-3 bg-brand-primary text-white text-center font-ui font-semibold rounded-lg hover:bg-[#16382F] transition-colors mt-4"
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

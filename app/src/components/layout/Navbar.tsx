import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { navLinks } from '@/data/siteData';
import Logo from '@/components/layout/Logo';
import type { NavLink } from '@/types';

function DesktopDropdown({ link, isHomepage, isScrolled }: { link: NavLink; isHomepage: boolean; isScrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }, []);

  const handleLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const parentActive = location.pathname === link.href ||
    (link.children?.some(c => location.pathname === c.href) ?? false);

  const parentClass = `px-3 py-2 text-sm font-ui font-medium rounded-lg transition-all duration-200 inline-flex items-center gap-1 ${
    parentActive
      ? !isHomepage || isScrolled
        ? 'text-brand-primary bg-brand-primary/10'
        : 'text-white bg-white/15'
      : !isHomepage || isScrolled
        ? 'text-text-secondary hover:text-brand-primary hover:bg-brand-primary/5'
        : 'text-white/90 hover:text-white hover:bg-white/10'
  }`;

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Parent link — Quality parent has no own page, so it's not a Link; Assortment has its own page */}
      {link.href === '/quality' && !link.children?.some(c => c.href === link.href) ? (
        <button
          onClick={() => setOpen(!open)}
          className={parentClass}
        >
          {link.label}
          <FiChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      ) : (
        <Link
          to={link.href}
          className={parentClass}
          onMouseEnter={handleEnter}
        >
          {link.label}
          <FiChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </Link>
      )}

      <AnimatePresence>
        {open && link.children && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lift border border-[#1F4A3E]/[0.08] py-2 z-50"
          >
            {link.children.map((child) => (
              <Link
                key={child.href}
                to={child.href}
                className="block px-4 py-2.5 text-sm font-ui text-text-secondary hover:text-brand-primary hover:bg-[#F8F6F2] transition-colors"
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavItem({ link, index }: { link: NavLink; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const hasChildren = link.children && link.children.length > 0;

  // Quality parent has no own page — it shouldn't navigate
  const isParentOnly = link.href === '/quality' && hasChildren;

  const parentActive = location.pathname === link.href ||
    (link.children?.some(c => location.pathname === c.href) ?? false);

  if (!hasChildren) {
    return (
      <motion.div
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
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 + 0.1 }}
    >
      {isParentOnly ? (
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-ui font-medium text-base transition-colors text-left ${
            parentActive && !location.pathname.startsWith(link.href + '/')
              ? 'text-brand-primary bg-brand-primary/10'
              : 'text-text-primary hover:text-brand-primary hover:bg-brand-primary/5'
          }`}
        >
          {link.label}
          <FiChevronDown
            size={16}
            className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      ) : (
        <div>
          <div className="flex items-center">
            <Link
              to={link.href}
              className={`flex-1 px-4 py-3 rounded-lg font-ui font-medium text-base transition-colors ${
                location.pathname === link.href
                  ? 'text-brand-primary bg-brand-primary/10'
                  : 'text-text-primary hover:text-brand-primary hover:bg-brand-primary/5'
              }`}
            >
              {link.label}
            </Link>
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-3 py-3 text-text-secondary"
              aria-label={`Expand ${link.label} submenu`}
            >
              <FiChevronDown
                size={16}
                className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        </div>
      )}

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 py-1 space-y-0.5">
              {link.children!.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  className={`block px-4 py-2.5 rounded-lg font-ui text-sm transition-colors ${
                    location.pathname === child.href
                      ? 'text-brand-primary bg-brand-primary/10'
                      : 'text-text-secondary hover:text-brand-primary hover:bg-brand-primary/5'
                  }`}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';

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
            <Link to="/" className="flex-shrink-0">
              <Logo
                variant="compact"
                light={!isHomepage || isScrolled ? false : true}
                className={`h-10 sm:h-12 w-auto transition-opacity duration-300`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <DesktopDropdown
                    key={link.label}
                    link={link}
                    isHomepage={isHomepage}
                    isScrolled={isScrolled}
                  />
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-3 py-2 text-sm font-ui font-medium rounded-lg transition-all duration-200 ${
                      location.pathname === link.href
                        ? !isHomepage || isScrolled
                          ? 'text-brand-primary bg-brand-primary/10'
                          : 'text-white bg-white/15'
                        : !isHomepage || isScrolled
                          ? 'text-text-secondary hover:text-brand-primary hover:bg-brand-primary/5'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA Button + Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/shop"
                className={`hidden sm:inline-flex px-4 py-2 text-sm font-ui font-semibold rounded-lg transition-all duration-200 ${
                  !isHomepage || isScrolled
                    ? 'bg-brand-primary text-white hover:bg-[#16382F] shadow-card hover:shadow-lift'
                    : 'bg-white text-brand-primary hover:bg-white/90 shadow-lg'
                }`}
              >
                Shop Now
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  !isHomepage || isScrolled
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
                    <MobileNavItem key={link.label} link={link} index={index} />
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

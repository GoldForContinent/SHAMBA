import { Link } from 'react-router';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { companyInfo } from '@/data/siteData';
import { navLinks } from '@/data/siteData';
import { categories } from '@/data/products';

export default function Footer() {
  return (
    <footer className="bg-[#1F4A3E] text-white/90">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">S</span>
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                SHAMBAMALL
              </span>
            </Link>
            <p className="text-white/70 text-sm font-body leading-relaxed mb-6 max-w-xs">
              Your trusted manufacturer and sourcing partner in East Africa. Premium agricultural products, ethically sourced and delivered globally.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={companyInfo.social.facebook}
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={16} />
              </a>
              <a
                href={companyInfo.social.instagram}
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={16} />
              </a>
              <a
                href={companyInfo.social.linkedin}
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={16} />
              </a>
              <a
                href={companyInfo.social.twitter}
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white text-sm font-ui transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5">
              {categories.slice(0, 6).map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/shop?category=${category.slug}`}
                    className="text-white/70 hover:text-white text-sm font-ui transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMapPin size={16} className="text-brand-secondary mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm font-ui">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone size={16} className="text-brand-secondary flex-shrink-0" />
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="text-white/70 hover:text-white text-sm font-ui transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail size={16} className="text-brand-secondary flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-white/70 hover:text-white text-sm font-ui transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-xs font-ui text-center sm:text-left">
              &copy; {new Date().getFullYear()} SHAMBAMALL. All rights reserved.
            </p>
            <p className="text-white/50 text-xs font-ui">
              Premium Agricultural Trading from Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

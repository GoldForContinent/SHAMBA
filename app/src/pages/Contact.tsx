import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle, FiMessageCircle } from 'react-icons/fi';
import ScrollReveal from '@/components/ui-custom/ScrollReveal';
import { companyInfo } from '@/data/siteData';
import { getWhatsAppLink } from '@/lib/whatsapp';
import type { ContactFormData } from '@/types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    productInterest: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Page Header */}
      <section className="bg-[#1F4A3E] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=400&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-[#C79A3E] text-sm font-ui font-semibold uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-4">
              Contact Us
            </h1>
            <p className="font-body text-base sm:text-lg text-white/80 max-w-2xl">
              Ready to source premium agricultural products? We are here to answer your questions, provide quotes, and start a successful partnership.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <ScrollReveal className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiCheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
                      Message Sent Successfully
                    </h3>
                    <p className="font-body text-text-secondary mb-6">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ fullName: '', email: '', phone: '', productInterest: '', message: '' });
                      }}
                      className="px-5 py-2.5 bg-[#1F4A3E] text-white font-ui font-medium rounded-lg hover:bg-[#16382F] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading font-semibold text-xl text-text-primary mb-6">
                      Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="fullName" className="block font-ui text-sm font-medium text-text-primary mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 rounded-lg border font-ui text-sm transition-colors ${
                              errors.fullName
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                                : 'border-[#1F4A3E]/15 focus:border-[#1F4A3E] focus:ring-[#1F4A3E]/20'
                            } focus:outline-none focus:ring-2`}
                            placeholder="John Doe"
                          />
                          {errors.fullName && (
                            <p className="mt-1 text-xs text-red-500 font-ui">{errors.fullName}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="email" className="block font-ui text-sm font-medium text-text-primary mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 rounded-lg border font-ui text-sm transition-colors ${
                              errors.email
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                                : 'border-[#1F4A3E]/15 focus:border-[#1F4A3E] focus:ring-[#1F4A3E]/20'
                            } focus:outline-none focus:ring-2`}
                            placeholder="john@company.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-red-500 font-ui">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="phone" className="block font-ui text-sm font-medium text-text-primary mb-1.5">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 rounded-lg border font-ui text-sm transition-colors ${
                              errors.phone
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                                : 'border-[#1F4A3E]/15 focus:border-[#1F4A3E] focus:ring-[#1F4A3E]/20'
                            } focus:outline-none focus:ring-2`}
                            placeholder="+1 234 567 890"
                          />
                          {errors.phone && (
                            <p className="mt-1 text-xs text-red-500 font-ui">{errors.phone}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="productInterest" className="block font-ui text-sm font-medium text-text-primary mb-1.5">
                            Product of Interest
                          </label>
                          <select
                            id="productInterest"
                            name="productInterest"
                            value={formData.productInterest}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-[#1F4A3E]/15 font-ui text-sm focus:outline-none focus:ring-2 focus:ring-[#1F4A3E]/20 focus:border-[#1F4A3E] transition-colors bg-white"
                          >
                            <option value="">Select a category</option>
                            <option value="oils-fats">Oils & Fats</option>
                            <option value="coffee">Coffee</option>
                            <option value="cereals-pulses">Cereals & Pulses</option>
                            <option value="nuts-seeds">Nuts & Seeds</option>
                            <option value="spices-herbs">Spices & Herbs</option>
                            <option value="fruits-vegetables">Fruits & Vegetables</option>
                            <option value="fertilizer">Fertilizer</option>
                            <option value="hides-skins">Hides & Skins</option>
                            <option value="sisal-fiber">Sisal Fiber</option>
                            <option value="other">Other / Not Sure</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block font-ui text-sm font-medium text-text-primary mb-1.5">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full px-4 py-2.5 rounded-lg border font-ui text-sm transition-colors resize-none ${
                            errors.message
                              ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                              : 'border-[#1F4A3E]/15 focus:border-[#1F4A3E] focus:ring-[#1F4A3E]/20'
                          } focus:outline-none focus:ring-2`}
                          placeholder="Tell us about your requirements, quantities, destination, and any specific needs..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-xs text-red-500 font-ui">{errors.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1F4A3E] text-white font-ui font-semibold rounded-lg hover:bg-[#16382F] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FiSend size={16} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>

            {/* Contact Info Sidebar */}
            <ScrollReveal delay={0.1} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Contact Details */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card">
                  <h3 className="font-heading font-semibold text-lg text-text-primary mb-5">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#1F4A3E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FiMapPin size={18} className="text-[#1F4A3E]" />
                      </div>
                      <div>
                        <p className="font-ui text-xs text-text-secondary uppercase tracking-wider">Address</p>
                        <p className="font-ui text-sm text-text-primary mt-0.5">{companyInfo.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#1F4A3E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FiPhone size={18} className="text-[#1F4A3E]" />
                      </div>
                      <div>
                        <p className="font-ui text-xs text-text-secondary uppercase tracking-wider">Phone</p>
                        <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="font-ui text-sm text-text-primary mt-0.5 hover:text-[#1F4A3E] transition-colors">
                          {companyInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#1F4A3E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FiMail size={18} className="text-[#1F4A3E]" />
                      </div>
                      <div>
                        <p className="font-ui text-xs text-text-secondary uppercase tracking-wider">Email</p>
                        <a href={`mailto:${companyInfo.email}`} className="font-ui text-sm text-text-primary mt-0.5 hover:text-[#1F4A3E] transition-colors">
                          {companyInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#1F4A3E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FiClock size={18} className="text-[#1F4A3E]" />
                      </div>
                      <div>
                        <p className="font-ui text-xs text-text-secondary uppercase tracking-wider">Business Hours</p>
                        <p className="font-ui text-sm text-text-primary mt-0.5">Mon - Fri: 8:00 AM - 6:00 PM EAT</p>
                        <p className="font-ui text-sm text-text-primary">Sat: 9:00 AM - 2:00 PM EAT</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Quick Contact */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#25D366] rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-lift transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FiMessageCircle size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-base text-white mb-0.5">
                        Chat on WhatsApp
                      </h4>
                      <p className="font-ui text-sm text-white/80">
                        Get instant responses during business hours
                      </p>
                    </div>
                  </div>
                </a>

                {/* Map Placeholder */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-card">
                  <div className="aspect-[4/3] bg-[#EDE9E3] relative flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-14 h-14 bg-[#1F4A3E]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FiMapPin size={24} className="text-[#1F4A3E]" />
                      </div>
                      <p className="font-heading font-semibold text-base text-text-primary mb-1">
                        SHAMBAMALL
                      </p>
                      <p className="font-ui text-sm text-text-secondary">
                        {companyInfo.address}
                      </p>
                      <a
                        href="https://maps.google.com/?q=Nairobi+Kenya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-3 text-[#1F4A3E] font-ui text-sm font-medium hover:underline"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

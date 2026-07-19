import { Routes, Route } from 'react-router';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFAB from '@/components/layout/WhatsAppFAB';
import ScrollToTop from '@/components/layout/ScrollToTop';
import CookieConsent from '@/components/layout/CookieConsent';
import Home from '@/pages/Home';
import Assortment from '@/pages/Assortment';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import WhatWeDo from '@/pages/WhatWeDo';
import Quality from '@/pages/Quality';
import Services from '@/pages/Services';
import PrivateLabel from '@/pages/PrivateLabel';
import FoodIngredients from '@/pages/FoodIngredients';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assortment" element={<Assortment />} />
          <Route path="/assortment/food-ingredients" element={<FoodIngredients />} />
          <Route path="/assortment/private-label" element={<PrivateLabel />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:slug" element={<ProductDetail />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/quality/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFAB />
      <CookieConsent />
    </>
  );
}

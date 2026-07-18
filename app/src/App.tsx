import { Routes, Route } from 'react-router';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFAB from '@/components/layout/WhatsAppFAB';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Home from '@/pages/Home';
import Assortment from '@/pages/Assortment';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import WhatWeDo from '@/pages/WhatWeDo';
import Quality from '@/pages/Quality';
import PrivateLabel from '@/pages/PrivateLabel';
import FoodIngredients from '@/pages/FoodIngredients';
import Contact from '@/pages/Contact';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assortment" element={<Assortment />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:slug" element={<ProductDetail />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/private-label" element={<PrivateLabel />} />
          <Route path="/food-ingredients" element={<FoodIngredients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}

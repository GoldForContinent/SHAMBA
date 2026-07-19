import Hero from '@/sections/Hero';
import AboutPhilosophy from '@/sections/AboutPhilosophy';
import ServiceChannels from '@/sections/ServiceChannels';
import WhyChooseUs from '@/sections/WhyChooseUs';
import StatsBand from '@/sections/StatsBand';
import FeaturedProducts from '@/sections/FeaturedProducts';
import Manifesto from '@/sections/Manifesto';
import CoreValues from '@/sections/CoreValues';
import CTABanner from '@/sections/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPhilosophy />
      <ServiceChannels />
      <WhyChooseUs />
      <StatsBand />
      <FeaturedProducts />
      <Manifesto />
      <CoreValues />
      <CTABanner />
    </>
  );
}

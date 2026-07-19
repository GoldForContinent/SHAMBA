import ScrollReveal from '@/components/ui-custom/ScrollReveal';

export default function Manifesto() {
  return (
    <section className="bg-[#F8F6F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 sm:py-32 lg:py-40 max-w-[900px]">
          <ScrollReveal direction="left" duration={0.7}>
            <h2 className="font-heading font-bold text-text-primary leading-[1.15] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
            >
              We build transparent supply chains.{' '}
              <span className="text-[#1F4A3E]">Sourced with integrity.</span>{' '}
              Delivered with precision.{' '}
              <span className="text-[#C79A3E]">Together</span> with businesses like yours, we define the future of sustainable food trade.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3} duration={0.5}>
            <div className="mt-8 w-16 h-0.5 bg-[#C79A3E] rounded-full" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

import { useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router';
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiPause,
  FiPlay,
} from 'react-icons/fi';
import { companyInfo } from '@/data/siteData';

type HeroSlide = {
  src: string;
  alt: string;
  focus: string;
  caption: string;
  credit?: {
    author: string;
    license: string;
    licenseUrl: string;
    sourceUrl: string;
  };
};

const slides: HeroSlide[] = [
  {
    src: '/images/hero/wet-blue.jpg',
    alt: 'Stack of chrome-tanned (wet blue) hides',
    focus: 'Hides & Skins',
    caption: 'Wet blue hides awaiting finishing',
    credit: {
      author: 'Myousry6666',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Leather_tanneries_(40).jpg',
    },
  },
  {
    src: '/images/hero/wet-salted.jpg',
    alt: 'Stacked goat skins in pale and blue-grey grades',
    focus: 'Hides & Skins',
    caption: 'Salted hides and skins, graded by size and weight',
    credit: {
      author: 'Salil Kumar Mukherjee',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Goat_skins.jpg',
    },
  },
  {
    src: '/images/hero/hides-stretched.jpg',
    alt: 'Cowhide stretched and curing in the open air',
    focus: 'Hides & Skins',
    caption: 'Sun-dried cowhides prepared for the leather trade',
    credit: {
      author: 'Enda012',
      license: 'CC BY 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Stretched_Cowhide_Skin.jpg',
    },
  },
  {
    src: '/images/hero/hides-kenya.jpg',
    alt: 'Animal hides and skins drying on wooden rails in the Great Rift Valley, Kenya',
    focus: 'Hides & Skins',
    caption: 'Hides drying at Mai Mahiu, Kenya',
    credit: {
      author: 'Lebu Ayiga',
      license: 'CC BY 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Animal_hides_drying_at_Mai_Mahiu_Viewpoint,_Great_Rift_Valley,_Kenya.jpg',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop',
    alt: 'A maize plantation in East Africa',
    focus: 'Cereals & Pulses',
    caption: 'Maize, one of our core export crops',
  },
];

const AUTOPLAY_MS = 7000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const goTo = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  const isPlaying = !paused && !prefersReducedMotion;

  useEffect(() => {
    if (!isPlaying) return;

    const timer = window.setInterval(() => {
      setIndex((previous) => (previous + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const activeSlide = slides[index];

  return (
    <section
      className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden"
      aria-label="Featured products"
    >
      {/* Background carousel */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {slides.map((slide, slideIndex) => {
          const isActive = slideIndex === index;

          return (
            <motion.div
              key={slide.src}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 1.1,
                ease: 'easeInOut',
              }}
              aria-hidden={!isActive}
            >
              <motion.img
                src={slide.src}
                alt={isActive ? slide.alt : ''}
                className="h-full w-full object-cover"
                loading={slideIndex === 0 ? 'eager' : 'lazy'}
                initial={false}
                animate={{
                  scale: isActive && !prefersReducedMotion ? 1.06 : 1,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : AUTOPLAY_MS / 1000 + 1.2,
                  ease: 'linear',
                }}
              />
            </motion.div>
          );
        })}

        {/* Readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#12382E]/95 via-[#1F4A3E]/80 to-[#1F4A3E]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#142E27]/85 via-transparent to-[#1F4A3E]/40" />
      </div>

      {/* Active slide badge */}
      <div className="absolute top-24 right-4 sm:right-8 z-20 hidden lg:flex flex-col items-end gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C79A3E]" />
          {activeSlide.focus}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-ui text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#C79A3E] mb-4"
          >
            Hides &amp; Skins &middot; Cereals &amp; Pulses &middot; Specialty Crops
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Your Trusted Manufacturer &amp; Sourcing Partner in{' '}
            <span className="text-[#C79A3E]">East Africa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-body text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl"
          >
            {companyInfo.tagline}. From ethically sourced hides and skins to
            cereals, pulses and specialty crops, we connect global buyers with
            East Africa&apos;s finest &mdash; rigorously tested and delivered
            with excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C79A3E] text-white font-ui font-semibold rounded-lg hover:bg-[#B38A35] transition-all duration-200 shadow-lift hover:shadow-soft"
            >
              Explore Our Products
              <FiArrowRight size={18} />
            </Link>
            <Link
              to="/what-we-do"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white font-ui font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Carousel controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            <div
              className="flex items-center gap-1.5"
              role="group"
              aria-label="Featured image carousel controls"
            >
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous featured image"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A3E]"
              >
                <FiChevronLeft size={16} />
              </button>

              <div className="flex items-center gap-2 px-1">
                {slides.map((slide, slideIndex) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => goTo(slideIndex)}
                    aria-label={`Show image ${slideIndex + 1}: ${slide.focus}`}
                    aria-current={slideIndex === index ? 'true' : undefined}
                    className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F4A3E] ${
                      slideIndex === index
                        ? 'w-7 bg-[#C79A3E]'
                        : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next featured image"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A3E]"
              >
                <FiChevronRight size={16} />
              </button>

              {!prefersReducedMotion && (
                <button
                  type="button"
                  onClick={() => setPaused((previous) => !previous)}
                  aria-label={
                    paused
                      ? 'Play featured image carousel'
                      : 'Pause featured image carousel'
                  }
                  className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A3E]"
                >
                  {paused ? <FiPlay size={14} /> : <FiPause size={14} />}
                </button>
              )}
            </div>

            <p className="font-ui text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-white/55">
              <span className="text-white/80">
                {String(index + 1).padStart(2, '0')} /{' '}
                {String(slides.length).padStart(2, '0')}
              </span>{' '}
              &middot; {activeSlide.caption}
            </p>
          </motion.div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80V40C240 80 480 0 720 0C960 0 1200 80 1440 40V80H0Z"
            fill="#F8F6F2"
          />
        </svg>
      </div>
    </section>
  );
}

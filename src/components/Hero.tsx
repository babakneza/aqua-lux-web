import { useState, useEffect } from 'react';
import { ArrowDown, FileDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from './ui/button';

export const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    '/img/hero/meter-1.png',
    '/img/hero/meter-2.png',
    '/img/hero/meter-3.png',
  ];

  const scrollToProducts = () => {
    document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Image Slider - Left 60% (3 columns) */}
          <div 
            className="md:col-span-3 relative h-[400px] md:h-[500px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative h-full glass-panel rounded-3xl overflow-hidden">
              {/* Slides */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* Dark overlay for contrast */}
                  <div className="absolute inset-0 bg-black/20 z-10" />
                  <img
                    src={slide}
                    alt={`Water Meter ${index + 1}`}
                    className="w-full h-full object-contain p-12"
                  />
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute ltr:right-4 rtl:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-gold w-8' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text Content - Right 40% (2 columns) */}
          <div className="md:col-span-2 space-y-6">
            <div className="glass-panel p-8 rounded-3xl animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                <span className="text-gold block mb-2">{t('heroTitle')}</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/90 mb-6">
                {t('heroSubtitle')}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={scrollToProducts}
                  className="magnetic-btn bg-gradient-accent hover:shadow-glow px-6 py-6"
                >
                  {t('viewProducts')}
                  <ArrowDown className="w-5 h-5 ltr:ml-2 rtl:mr-2 animate-bounce" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="magnetic-btn border-2 border-gold hover:bg-gold/10 text-gold hover:text-gold px-6 py-6"
                  asChild
                >
                  <a href="/catalog.pdf" download>
                    <FileDown className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                    {t('downloadCatalog')}
                  </a>
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 text-sm opacity-90">
              <div className="flex items-center space-x-2 space-x-reverse">
                <span className="text-gold text-xl">✓</span>
                <span>ISO 9001</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <span className="text-gold text-xl">✓</span>
                <span>ISO 4064</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <span className="text-gold text-xl">✓</span>
                <span>OIML R49</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <span className="text-gold text-xl">✓</span>
                <span>MID Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0 60 Q 300 20, 600 60 T 1200 60 V 120 H 0 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

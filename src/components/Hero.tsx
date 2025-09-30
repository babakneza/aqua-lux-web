import { ArrowDown, FileDown } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from './ui/button';

export const Hero = () => {
  const { t } = useTranslation();

  const scrollToProducts = () => {
    document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-primary">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />
        </div>
      </div>

      {/* Floating Product Images */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/img/hero/meter-1.png"
          alt="Water Meter"
          className="absolute top-1/4 ltr:left-[10%] rtl:right-[10%] w-32 md:w-48 opacity-20 animate-float"
        />
        <img
          src="/img/hero/meter-2.png"
          alt="Water Meter"
          className="absolute top-1/3 ltr:right-[15%] rtl:left-[15%] w-24 md:w-40 opacity-20 animate-float-delayed"
        />
        <img
          src="/img/hero/meter-3.png"
          alt="Water Meter"
          className="absolute bottom-1/4 ltr:left-[20%] rtl:right-[20%] w-28 md:w-44 opacity-20 animate-float"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Glass Panel */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="gradient-text block mb-2">{t('heroTitle')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-8">
              {t('heroSubtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToProducts}
                className="magnetic-btn bg-gradient-accent hover:shadow-glow text-lg px-8 py-6"
              >
                {t('viewProducts')}
                <ArrowDown className="w-5 h-5 ltr:ml-2 rtl:mr-2 animate-bounce" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="magnetic-btn border-2 border-accent/50 hover:bg-accent/10 text-lg px-8 py-6"
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
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center space-x-2 space-x-reverse">
              <span className="text-gold text-2xl">✓</span>
              <span>ISO 9001</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <span className="text-gold text-2xl">✓</span>
              <span>ISO 4064</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <span className="text-gold text-2xl">✓</span>
              <span>OIML R49</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <span className="text-gold text-2xl">✓</span>
              <span>MID Certified</span>
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

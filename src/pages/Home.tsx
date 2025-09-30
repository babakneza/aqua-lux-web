import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { useTranslation } from '@/hooks/useTranslation';
import { products } from '@/data/products';
import { WaveDivider } from '@/components/WaveDivider';
import { Factory, TestTube, Award, Quote } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Home = () => {
  const { t, tObj } = useTranslation();
  const featuredProducts = products.slice(0, 6);

  const certifications = [
    { name: 'ISO 9001', desc: { fa: 'سیستم مدیریت کیفیت', en: 'Quality Management System' } },
    { name: 'ISO 4064', desc: { fa: 'استاندارد کنتورهای آب', en: 'Water Meters Standard' } },
    { name: 'OIML R49', desc: { fa: 'تایید بین‌المللی', en: 'International Approval' } },
    { name: 'MID', desc: { fa: 'دستگاه‌های اندازه‌گیری اروپا', en: 'European Measuring Instruments' } },
  ];

  const testimonials = [
    {
      quote: { fa: 'کیفیت عالی و دقت بالا. بهترین انتخاب برای شهرداری ما.', en: 'Excellent quality and high accuracy. Best choice for our municipality.' },
      author: { fa: 'شهرداری تهران', en: 'Tehran Municipality' },
      sector: { fa: 'شهری', en: 'Municipal' },
      rating: 5,
    },
    {
      quote: { fa: 'کنتورهای صنعتی بسیار مقاوم با خدمات پس از فروش عالی.', en: 'Very durable industrial meters with excellent after-sales service.' },
      author: { fa: 'شرکت صنایع پتروشیمی', en: 'Petrochemical Industries Co.' },
      sector: { fa: 'صنعتی', en: 'Industrial' },
      rating: 5,
    },
    {
      quote: { fa: 'مناسب برای شرایط سخت کشاورزی. قابل اعتماد و اقتصادی.', en: 'Perfect for harsh agricultural conditions. Reliable and economical.' },
      author: { fa: 'تعاونی کشاورزی البرز', en: 'Alborz Agricultural Cooperative' },
      sector: { fa: 'کشاورزی', en: 'Agricultural' },
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Products */}
      <section id="featured-products" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gold-text">{t('featuredProducts')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {tObj({ 
              fa: 'مجموعه‌ای از بهترین کنتورهای آب برای کاربردهای مختلف', 
              en: 'A collection of our finest water meters for various applications' 
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <WaveDivider />

      {/* Factory & Operations - Photo Based */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gold-text">{t('factoryTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Manufacturing */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
              <img
                src="/img/factory/manufacturing.jpg"
                alt="Manufacturing"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-gold mb-2">
                  {tObj({ fa: 'تولید پیشرفته', en: 'Advanced Manufacturing' })}
                </h3>
                <p className="text-sm text-white/90">
                  {tObj({ 
                    fa: 'خط تولید مدرن با ظرفیت سالانه بالا و کنترل کیفیت دقیق', 
                    en: 'Modern production line with high annual capacity and precise quality control' 
                  })}
                </p>
              </div>
            </div>

            {/* Warehouse */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
              <img
                src="/img/factory/warehouse.jpg"
                alt="Warehouse"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-gold mb-2">
                  {tObj({ fa: 'انبار و لجستیک', en: 'Warehouse & Logistics' })}
                </h3>
                <p className="text-sm text-white/90">
                  {tObj({ 
                    fa: 'سیستم مدیریت انبار پیشرفته با ردیابی کامل موجودی', 
                    en: 'Advanced warehouse management system with complete inventory tracking' 
                  })}
                </p>
              </div>
            </div>

            {/* Testing */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
              <img
                src="/img/factory/testing.jpg"
                alt="Testing Laboratory"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-gold mb-2">
                  {tObj({ fa: 'آزمایشگاه تست', en: 'Testing Laboratory' })}
                </h3>
                <p className="text-sm text-white/90">
                  {tObj({ 
                    fa: 'آزمایشگاه مجهز به استانداردهای ISO 17025 برای تست کامل کنتورها', 
                    en: 'Laboratory equipped with ISO 17025 standards for comprehensive meter testing' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider className="transform rotate-180" />

      {/* Certifications */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gold-text">{t('certificationsTitle')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {tObj({ 
              fa: 'گواهینامه‌های معتبر بین‌المللی که کیفیت محصولات ما را تضمین می‌کنند', 
              en: 'Internationally recognized certifications that guarantee our product quality' 
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="glass-panel p-6 rounded-2xl text-center space-y-3 hover-scale cursor-pointer group"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-gold rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all">
                <Award className="w-10 h-10 text-gold-foreground" />
              </div>
              <h3 className="text-xl font-bold">{cert.name}</h3>
              <p className="text-xs text-muted-foreground">{tObj(cert.desc)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials - 3D Deck Effect */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gold-text">{t('testimonialsTitle')}</h2>
          </div>

          {/* Desktop: Overlapped Deck */}
          <div className="hidden md:flex justify-center items-center max-w-5xl mx-auto min-h-[400px] relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card absolute w-[350px] glass-panel p-6 rounded-2xl space-y-4 transition-all duration-300 cursor-pointer"
                style={{
                  left: `${index * 120}px`,
                  zIndex: 1,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.zIndex = '10';
                  e.currentTarget.style.transform = 'scale(1.05) translateY(-10px)';
                  e.currentTarget.style.filter = 'none';
                  // Blur others
                  document.querySelectorAll('.testimonial-card').forEach((card) => {
                    if (card !== e.currentTarget) {
                      (card as HTMLElement).style.filter = 'blur(2px) brightness(0.7)';
                    }
                  });
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.zIndex = '1';
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.filter = 'none';
                  // Remove blur from all
                  document.querySelectorAll('.testimonial-card').forEach((card) => {
                    (card as HTMLElement).style.filter = 'none';
                  });
                }}
              >
                <Quote className="w-8 h-8 text-accent" />
                <p className="text-sm italic text-foreground/90">"{tObj(testimonial.quote)}"</p>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{tObj(testimonial.author)}</p>
                  <Badge variant="secondary" className="mt-2">
                    {tObj(testimonial.sector)}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Simple Grid */}
          <div className="md:hidden grid grid-cols-1 gap-6 max-w-md mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-panel p-6 rounded-2xl space-y-4">
                <Quote className="w-8 h-8 text-accent" />
                <p className="text-sm italic text-foreground/90">"{tObj(testimonial.quote)}"</p>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{tObj(testimonial.author)}</p>
                  <Badge variant="secondary" className="mt-2">
                    {tObj(testimonial.sector)}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

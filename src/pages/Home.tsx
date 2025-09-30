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

      {/* Factory & Operations */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gold-text">{t('factoryTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-8 rounded-2xl text-center space-y-4 hover-scale">
              <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-2xl flex items-center justify-center">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold gradient-text">
                {tObj({ fa: 'تولید پیشرفته', en: 'Advanced Manufacturing' })}
              </h3>
              <p className="text-sm text-muted-foreground">
                {tObj({ 
                  fa: 'خط تولید مدرن با ظرفیت سالانه بالا و کنترل کیفیت دقیق', 
                  en: 'Modern production line with high annual capacity and precise quality control' 
                })}
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl text-center space-y-4 hover-scale">
              <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-2xl flex items-center justify-center">
                <TestTube className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold gradient-text">
                {tObj({ fa: 'آزمایشگاه تست', en: 'Testing Laboratory' })}
              </h3>
              <p className="text-sm text-muted-foreground">
                {tObj({ 
                  fa: 'آزمایشگاه مجهز به استانداردهای ISO 17025 برای تست کامل کنتورها', 
                  en: 'Laboratory equipped with ISO 17025 standards for comprehensive meter testing' 
                })}
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl text-center space-y-4 hover-scale">
              <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold gradient-text">
                {tObj({ fa: 'تضمین کیفیت', en: 'Quality Assurance' })}
              </h3>
              <p className="text-sm text-muted-foreground">
                {tObj({ 
                  fa: 'سیستم مدیریت کیفیت جامع با گواهینامه‌های بین‌المللی', 
                  en: 'Comprehensive quality management system with international certifications' 
                })}
              </p>
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

      {/* Testimonials */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gold-text">{t('testimonialsTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

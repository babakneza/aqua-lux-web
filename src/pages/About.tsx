import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Factory, Globe, Award, Users, TrendingUp, Shield, Target, Eye, Heart, ArrowRight } from 'lucide-react';
import { WaveDivider } from '@/components/WaveDivider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const About = () => {
  const { t, tObj } = useTranslation();

  const milestones = [
    { year: '2010', event: { fa: 'تأسیس شرکت', en: 'Company Founded' } },
    { year: '2013', event: { fa: 'دریافت ISO 9001', en: 'ISO 9001 Certification' } },
    { year: '2016', event: { fa: 'صادرات اولین محصول', en: 'First Export' } },
    { year: '2020', event: { fa: 'ظرفیت 500 هزار عدد در سال', en: '500K Units Annual Capacity' } },
    { year: '2024', event: { fa: 'توسعه محصولات هوشمند', en: 'Smart Product Development' } },
  ];

  const stats = [
    { 
      icon: TrendingUp,
      value: 500000,
      suffix: '+',
      label: { fa: 'واحد در سال', en: 'Units/Year' }
    },
    { 
      icon: Globe,
      value: 15,
      suffix: '+',
      label: { fa: 'کشور صادرات', en: 'Export Countries' }
    },
    { 
      icon: Users,
      value: 200,
      suffix: '+',
      label: { fa: 'کارکنان متخصص', en: 'Expert Staff' }
    },
    { 
      icon: Award,
      value: 10,
      suffix: '+',
      label: { fa: 'گواهینامه بین‌المللی', en: 'Certifications' }
    },
  ];

  const values = [
    {
      icon: Target,
      title: { fa: 'تعهد به کیفیت', en: 'Quality Commitment' },
      desc: { fa: 'استانداردهای بین‌المللی در هر مرحله تولید', en: 'International standards at every production stage' }
    },
    {
      icon: Eye,
      title: { fa: 'شفافیت', en: 'Transparency' },
      desc: { fa: 'ارتباط صادقانه و شفاف با مشتریان', en: 'Honest and transparent communication with clients' }
    },
    {
      icon: Heart,
      title: { fa: 'مشتری‌محوری', en: 'Customer Focus' },
      desc: { fa: 'رضایت مشتری در اولویت اول', en: 'Customer satisfaction as top priority' }
    },
  ];

  const team = [
    {
      name: { fa: 'دکتر احمد رضایی', en: 'Dr. Ahmad Rezaei' },
      role: { fa: 'مدیر عامل', en: 'CEO' },
      bio: { fa: '20 سال تجربه در صنعت اندازه‌گیری', en: '20 years experience in measurement industry' }
    },
    {
      name: { fa: 'مهندس سارا احمدی', en: 'Eng. Sara Ahmadi' },
      role: { fa: 'مدیر تحقیق و توسعه', en: 'R&D Director' },
      bio: { fa: 'متخصص در فناوری اولتراسونیک', en: 'Ultrasonic technology specialist' }
    },
    {
      name: { fa: 'مهندس علی کریمی', en: 'Eng. Ali Karimi' },
      role: { fa: 'مدیر کنترل کیفیت', en: 'Quality Control Manager' },
      bio: { fa: 'ISO 17025 مدیر آزمایشگاه', en: 'ISO 17025 Laboratory Manager' }
    },
  ];

  // Animated Counter Hook
  const useAnimatedCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
      if (!isVisible) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setCount(end);
        return;
      }

      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }, [end, duration, isVisible]);

    return { count, ref };
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="/img/about/hero-banner.jpg"
          alt="Company"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold animate-fade-in">
                {t('about')}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                {tObj({
                  fa: 'با بیش از یک دهه تجربه در تولید کنتورهای آب، ما متعهد به ارائه بهترین محصولات با استانداردهای بین‌المللی هستیم.',
                  en: 'With over a decade of experience in water meter manufacturing, we are committed to delivering the finest products with international standards.'
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const { count, ref } = useAnimatedCounter(stat.value);
            return (
              <div key={index} ref={ref} className="glass-panel p-6 rounded-2xl text-center space-y-3 hover-scale">
                <div className="w-12 h-12 mx-auto bg-gradient-accent rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text">
                  {count.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{tObj(stat.label)}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mission & Values Cards with Scroll Animations */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 gold-text">
          {tObj({ fa: 'ارزش‌های ما', en: 'Our Values' })}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 rounded-2xl text-center space-y-4 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-gold rounded-2xl flex items-center justify-center">
                <value.icon className="w-8 h-8 text-gold-foreground" />
              </div>
              <h3 className="text-xl font-bold gradient-text">{tObj(value.title)}</h3>
              <p className="text-sm text-muted-foreground">{tObj(value.desc)}</p>
            </div>
          ))}
        </div>
      </section>

      <WaveDivider />

      {/* Company Story */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <Factory className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold gold-text">
                {tObj({ fa: 'داستان ما', en: 'Our Story' })}
              </h2>
            </div>
            
            <div className="space-y-4 text-foreground/90 leading-relaxed text-lg">
              <p>
                {tObj({
                  fa: 'شرکت ما در سال 2010 با هدف تولید کنتورهای آب با کیفیت بالا و قیمت مناسب تأسیس شد. با تکیه بر دانش فنی روز و استفاده از تجهیزات پیشرفته، توانسته‌ایم جایگاه ویژه‌ای در بازار داخلی و بین‌المللی کسب کنیم.',
                  en: 'Our company was founded in 2010 with the goal of producing high-quality and affordable water meters. Leveraging modern technical knowledge and advanced equipment, we have secured a special position in both domestic and international markets.'
                })}
              </p>
              <p>
                {tObj({
                  fa: 'امروزه با ظرفیت تولید سالانه بیش از 500 هزار عدد و صادرات به بیش از 15 کشور، از پیشگامان صنعت اندازه‌گیری آب در منطقه هستیم.',
                  en: 'Today, with an annual production capacity of over 500,000 units and exports to more than 15 countries, we are pioneers in the water measurement industry in the region.'
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider className="transform rotate-180" />

      {/* Brand Timeline */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 gold-text">
          {tObj({ fa: 'سیر تکامل', en: 'Our Journey' })}
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 space-x-reverse glass-panel p-6 rounded-2xl hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-glow">
                <span className="text-xl font-bold text-gold-foreground">{milestone.year}</span>
              </div>
              <div className="flex-1 pt-4">
                <p className="text-lg font-semibold">{tObj(milestone.event)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Standards */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto text-accent mb-6" />
            <h2 className="text-3xl font-bold mb-6 gold-text">
              {tObj({ fa: 'استانداردها و کیفیت', en: 'Standards & Quality' })}
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-8 text-lg">
              {tObj({
                fa: 'آزمایشگاه ما دارای گواهینامه ISO 17025 بوده و تمامی محصولات تحت آزمون‌های دقیق کنترل کیفیت قرار می‌گیرند. ما به استانداردهای ISO 4064، OIML R49 و MID پایبند هستیم.',
                en: 'Our laboratory is ISO 17025 certified and all products undergo rigorous quality control testing. We adhere to ISO 4064, OIML R49, and MID standards.'
              })}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {['ISO 9001', 'ISO 4064', 'ISO 17025', 'OIML R49', 'MID', 'CE'].map((cert) => (
                <Badge key={cert} className="bg-gold/20 text-gold border border-gold/30 px-4 py-2 text-base">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team with Hover Reveal */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <Users className="w-16 h-16 mx-auto text-accent mb-6" />
          <h2 className="text-3xl font-bold gold-text">
            {tObj({ fa: 'تیم مدیریت', en: 'Management Team' })}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group glass-panel p-6 rounded-2xl text-center space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-pointer"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-glow">
                <Users className="w-16 h-16 text-accent transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">{tObj(member.name)}</h3>
                <p className="text-sm text-gold">{tObj(member.role)}</p>
              </div>
              <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tObj(member.bio)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="glass-panel p-12 rounded-3xl text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 gold-text">
            {tObj({ fa: 'آماده همکاری با شما هستیم', en: 'Ready to Work With You' })}
          </h2>
          <p className="text-foreground/90 mb-8 text-lg">
            {tObj({
              fa: 'برای اطلاعات بیشتر درباره محصولات و خدمات ما با تیم فروش تماس بگیرید.',
              en: 'Contact our sales team for more information about our products and services.'
            })}
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-gold text-gold-foreground hover:shadow-glow px-8 py-6 text-lg"
            asChild
          >
            <a href="/contact">
              {tObj({ fa: 'تماس با ما', en: 'Contact Us' })}
              <ArrowRight className="w-5 h-5 ltr:ml-2 rtl:mr-2" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;

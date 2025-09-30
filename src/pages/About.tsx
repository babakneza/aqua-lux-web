import { useTranslation } from '@/hooks/useTranslation';
import { Factory, Globe, Award, Users, TrendingUp, Shield } from 'lucide-react';
import { WaveDivider } from '@/components/WaveDivider';
import { Badge } from '@/components/ui/badge';

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
      value: '500K+',
      label: { fa: 'واحد در سال', en: 'Units/Year' }
    },
    { 
      icon: Globe,
      value: '15+',
      label: { fa: 'کشور صادرات', en: 'Export Countries' }
    },
    { 
      icon: Users,
      value: '200+',
      label: { fa: 'کارکنان متخصص', en: 'Expert Staff' }
    },
    { 
      icon: Award,
      value: '10+',
      label: { fa: 'گواهینامه بین‌المللی', en: 'Certifications' }
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

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gold-text">{t('about')}</span>
          </h1>
          <p className="text-xl text-foreground/90 leading-relaxed">
            {tObj({
              fa: 'با بیش از یک دهه تجربه در تولید کنتورهای آب، ما متعهد به ارائه بهترین محصولات با استانداردهای بین‌المللی هستیم.',
              en: 'With over a decade of experience in water meter manufacturing, we are committed to delivering the finest products with international standards.'
            })}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="glass-panel p-6 rounded-2xl text-center space-y-3 hover-scale">
              <div className="w-12 h-12 mx-auto bg-gradient-accent rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{tObj(stat.label)}</div>
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
            
            <div className="space-y-4 text-foreground/90 leading-relaxed">
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

      {/* Timeline */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 gold-text">
          {tObj({ fa: 'سیر تکامل', en: 'Our Journey' })}
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start space-x-4 space-x-reverse glass-panel p-6 rounded-2xl hover-scale">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center">
                <span className="text-lg font-bold text-gold-foreground">{milestone.year}</span>
              </div>
              <div className="flex-1">
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
            <p className="text-foreground/90 leading-relaxed mb-8">
              {tObj({
                fa: 'آزمایشگاه ما دارای گواهینامه ISO 17025 بوده و تمامی محصولات تحت آزمون‌های دقیق کنترل کیفیت قرار می‌گیرند. ما به استانداردهای ISO 4064، OIML R49 و MID پایبند هستیم.',
                en: 'Our laboratory is ISO 17025 certified and all products undergo rigorous quality control testing. We adhere to ISO 4064, OIML R49, and MID standards.'
              })}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {['ISO 9001', 'ISO 4064', 'ISO 17025', 'OIML R49', 'MID', 'CE'].map((cert) => (
                <Badge key={cert} className="bg-gold/20 text-gold border border-gold/30 px-4 py-2">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <Users className="w-16 h-16 mx-auto text-accent mb-6" />
          <h2 className="text-3xl font-bold gold-text">
            {tObj({ fa: 'تیم مدیریت', en: 'Management Team' })}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="glass-panel p-6 rounded-2xl text-center space-y-4 hover-scale">
              <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                <Users className="w-12 h-12 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">{tObj(member.name)}</h3>
                <p className="text-sm text-gold">{tObj(member.role)}</p>
              </div>
              <p className="text-sm text-muted-foreground">{tObj(member.bio)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

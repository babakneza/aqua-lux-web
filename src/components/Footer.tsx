import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { WaveDivider } from './WaveDivider';

export const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'products', path: '/products' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' },
  ];

  const certifications = ['ISO 9001', 'ISO 4064', 'OIML R49', 'MID'];

  return (
    <footer className="relative bg-card mt-20">
      <WaveDivider className="absolute top-0 left-0 right-0 transform -translate-y-full text-card" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">W</span>
              </div>
              <span className="text-lg font-bold gradient-text">WaterMeter</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('heroSubtitle')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 gold-text">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ key, path }) => (
                <li key={key}>
                  <Link
                    to={path}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 gold-text">{t('contactInfo')}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2 space-x-reverse">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <span>Tehran, Iran</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>+98 21 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>info@watermeter.com</span>
              </li>
            </ul>
          </div>

          {/* Social & Certifications */}
          <div>
            <h3 className="font-semibold text-lg mb-4 gold-text">{t('followUs')}</h3>
            <div className="flex space-x-3 space-x-reverse mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-all hover-scale"
              >
                <Linkedin className="w-5 h-5 text-accent" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-all hover-scale"
              >
                <Instagram className="w-5 h-5 text-accent" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-all hover-scale"
              >
                <Send className="w-5 h-5 text-accent" />
              </a>
            </div>

            <h4 className="text-sm font-semibold mb-2">{t('certificationsTitle')}</h4>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-2 py-1 text-xs bg-secondary/20 text-secondary-foreground rounded border border-secondary/30"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/30 pt-6 text-center text-sm text-muted-foreground">
          <p>© 2025 WaterMeter. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

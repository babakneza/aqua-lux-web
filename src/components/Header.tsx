import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLocale } from '@/contexts/LocaleContext';
import { LocaleSwitcher } from './LocaleSwitcher';
import { Button } from './ui/button';
import logoEn from '@/assets/logo-en.jpeg';
import logoFa from '@/assets/logo-fa.jpeg';

export const Header = () => {
  const { t } = useTranslation();
  const { locale } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'products', path: '/products' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center hover-scale">
          <img
            src={locale === 'fa' ? logoFa : logoEn}
            alt={locale === 'fa' ? 'متراب' : 'METRAB'}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 space-x-reverse">
          {navItems.map(({ key, path }) => (
            <Link
              key={key}
              to={path}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive(path)
                  ? 'bg-accent/20 text-accent font-semibold'
                  : 'hover:bg-accent/10 text-foreground'
              }`}
            >
              {t(key)}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2 space-x-reverse">
          <Button
            variant="default"
            size="sm"
            className="hidden sm:flex magnetic-btn bg-gradient-gold hover:shadow-glow"
            asChild
          >
            <Link to="/contact">
              <FileText className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
              {t('requestQuote')}
            </Link>
          </Button>

          <LocaleSwitcher />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-accent/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-border/50 animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive(path)
                    ? 'bg-accent/20 text-accent font-semibold'
                    : 'hover:bg-accent/10'
                }`}
              >
                {t(key)}
              </Link>
            ))}
            <Button
              variant="default"
              className="w-full magnetic-btn bg-gradient-gold"
              asChild
            >
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <FileText className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                {t('requestQuote')}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

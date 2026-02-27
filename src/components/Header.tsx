import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.services') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-sm shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`font-serif text-xl md:text-2xl tracking-wide transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
              }`}>
              {t('nav.logo')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`link-underline text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
                  } ${isActive(link.path) ? 'after:scale-x-100' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side - Language & Contact */}
          <div className="hidden md:flex items-center gap-6">
            {/* Language Switcher */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
                  }`}
              >
                {language === 'en' ? t('language.en') : t('language.fr')}
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white shadow-lg border border-gray-100 py-1 min-w-[80px]">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`w-full px-4 py-2 text-left text-xs uppercase tracking-[0.15em] hover:bg-gray-50 transition-colors ${language === 'en' ? 'font-semibold' : ''
                      }`}
                  >
                    {t('language.en')}
                  </button>
                  <button
                    onClick={() => setLanguage('fr')}
                    className={`w-full px-4 py-2 text-left text-xs uppercase tracking-[0.15em] hover:bg-gray-50 transition-colors ${language === 'fr' ? 'font-semibold' : ''
                      }`}
                  >
                    {t('language.fr')}
                  </button>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
                }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
                  }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-white">
              <div className="flex flex-col h-full pt-12">
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl font-serif ${isActive(link.path) ? 'text-black' : 'text-gray-500'
                        }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pb-8">
                  <div className="flex gap-4 mb-6">
                    <button
                      onClick={() => setLanguage('en')}
                      className={`text-sm uppercase tracking-[0.15em] ${language === 'en' ? 'font-semibold text-black' : 'text-gray-400'
                        }`}
                    >
                      {t('language.en')}
                    </button>
                    <button
                      onClick={() => setLanguage('fr')}
                      className={`text-sm uppercase tracking-[0.15em] ${language === 'fr' ? 'font-semibold text-black' : 'text-gray-400'
                        }`}
                    >
                      {t('language.fr')}
                    </button>
                  </div>
                  <a
                    href="https://wa.me/212600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm uppercase tracking-[0.15em]"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

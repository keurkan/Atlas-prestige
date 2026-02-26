import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const locations = ['Marrakesh', 'Casablanca', 'Rabat', 'Agadir'];

  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-wide">
                {t('nav.logo')}
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-6">
              {t('footer.navigation')}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors text-sm link-underline inline-block w-fit"
              >
                {t('nav.services')}
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition-colors text-sm link-underline inline-block w-fit"
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition-colors text-sm link-underline inline-block w-fit"
              >
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-6">
              {t('footer.locations')}
            </h4>
            <ul className="flex flex-col gap-2">
              {locations.map((location) => (
                <li key={location} className="text-gray-400 text-sm">
                  {location}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-6">
              {t('footer.contact')}
            </h4>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:contact@atlasprestige.ma"
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {t('footer.email')}
              </a>
              <a
                href="https://wa.me/212600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {t('footer.phone')}
              </a>
            </div>

            <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-4">
              {t('footer.socials')}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <p className="text-gray-500 text-xs text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

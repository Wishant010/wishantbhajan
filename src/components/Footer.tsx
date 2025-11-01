import React from "react"
import { useLanguage } from "../contexts/LanguageContext"

interface FooterProps {
  useHomepageStyle?: boolean
}

const Footer: React.FC<FooterProps> = ({ useHomepageStyle = false }) => {
  const { t } = useLanguage();
  return (
    <footer className="relative py-20">
      {/* Background matching portfolio section on homepage */}
      <div
        className="absolute inset-0"
        style={{
          background: useHomepageStyle
            ? 'rgb(15, 23, 42)' // bg-slate-900 to match portfolio
            : `linear-gradient(180deg,
                rgba(30, 35, 54, 0.5) 0%,
                rgba(32, 37, 56, 0.55) 50%,
                rgba(34, 39, 62, 0.6) 100%
              )`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                Wishant Bhajan
              </h3>
              <p className="text-slate-200 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t('footer.quickLinks')}</h4>
            <div className="space-y-2">
              {[
                { labelKey: 'nav.home', href: '/' },
                { labelKey: 'nav.about', href: '/about' },
                { labelKey: 'nav.portfolio', href: '/portfolio' },
                { labelKey: 'nav.article', href: '/article' }
              ].map((link) => (
                <a
                  key={link.labelKey}
                  href={link.href}
                  className="block text-slate-200 hover:text-blue-400 transition-colors duration-300"
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t('footer.services')}</h4>
            <div className="space-y-2">
              <span className="block text-slate-200">{t('footer.services.web')}</span>
              <span className="block text-slate-200">{t('footer.services.uiux')}</span>
              <span className="block text-slate-200">{t('footer.services.app')}</span>
              <span className="block text-slate-200">{t('footer.services.consulting')}</span>
            </div>
          </div>

          {/* Specialties */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t('footer.specialties')}</h4>
            <div className="flex flex-wrap gap-2">
              {['spec.webapps', 'spec.uiux', 'spec.fullstack', 'spec.databases', 'spec.apis', 'spec.webapplications'].map((specKey) => (
                <span
                  key={specKey}
                  className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-purple-500/30 hover:text-purple-400 transition-all duration-300"
                >
                  {t(`footer.${specKey}`)}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Footer Info - subtiele scheidingslijn */}
        <div className="mt-12 pt-8 border-t border-slate-700/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-300 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-300 hover:text-blue-400 text-sm transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 text-sm transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

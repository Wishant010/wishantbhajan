import React from "react"
import { useLanguage } from "../contexts/LanguageContext"

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative py-20">
      {/* Subtiele blauwe gradient die aansluit op Contact - NIET te donker */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg,
            #0c1929 0%,
            #0c1a2a 20%,
            #0d1b2b 40%,
            #0d1c2c 60%,
            #0e1c2d 80%,
            #0e1d2e 100%
          )`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-3">
                Wishant Bhajan
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Full-stack developer & UI/UX designer met een passie voor het bouwen van innovatieve digitale oplossingen.
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
                { labelKey: 'nav.portfolio', href: '/portfolio' }
              ].map((link) => (
                <a
                  key={link.labelKey}
                  href={link.href}
                  className="block text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </div>
          </div>

          {/* Diensten */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Diensten</h4>
            <div className="space-y-2">
              <span className="block text-slate-400">Web Development</span>
              <span className="block text-slate-400">UI/UX Design</span>
              <span className="block text-slate-400">App Development</span>
              <span className="block text-slate-400">Consulting</span>
            </div>
          </div>

          {/* Specialiteiten */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Specialiteiten</h4>
            <div className="flex flex-wrap gap-2">
              {['Web Apps', 'UI/UX Design', 'Frontend & Backend', 'Databases', 'API\'s', 'Webapplicaties'].map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20 hover:bg-emerald-500/30 transition-all duration-300"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Footer Info - subtiele scheidingslijn */}
        <div className="mt-12 pt-8 border-t border-slate-700/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2025 Wishant Bhajan. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-500 hover:text-emerald-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-emerald-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

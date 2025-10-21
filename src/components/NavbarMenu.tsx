import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarMenuProps {}

const NavbarMenu = ({}: NavbarMenuProps) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  const navItems = [
    { label: t('nav.about'), href: '#about', id: 'about' },
    { label: t('nav.portfolio'), href: '#portfolio', id: 'portfolio' },
    { label: t('nav.skills'), href: '#skills', id: 'skills' },
    { label: t('nav.contact'), href: '#contact', id: 'contact' },
  ];

  // Handle scroll spy to highlight active section and track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Update scrolled state for navbar styling
      setScrolled(scrollPosition > 50);
      
      // Update active section
      const sections = ['home', 'about', 'portfolio', 'skills', 'contact'];
      const currentScrollPosition = scrollPosition + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (currentScrollPosition >= offsetTop && currentScrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[9999] backdrop-blur-xl border-b transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/98 border-emerald-500/30 shadow-2xl py-3'
          : 'bg-slate-900/95 border-emerald-500/20 shadow-lg py-4'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0,
        opacity: 1
      }}
      transition={{ 
        duration: 0.6, 
        ease: [0.23, 1, 0.32, 1], 
        delay: 0.3
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent cursor-pointer relative group"
            initial={{ x: -30, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1
            }}
            transition={{ 
              delay: 0.5, 
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1]
            }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('#home', 'home')}
          >
            Wishant Bhajan
            {/* Glitch effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:block"
            initial={{ x: 30, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1
            }}
            transition={{ 
              delay: 0.7, 
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <div className="flex items-center gap-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1 
                  }}
                  transition={{ 
                    delay: 0.8 + (index * 0.1), 
                    duration: 0.4 
                  }}
                  className="relative"
                >
                  <button
                    onClick={() => handleNavClick(item.href, item.id)}
                    className={`relative px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 group ${
                      activeSection === item.id
                        ? 'text-slate-900 bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-400/25'
                        : 'text-emerald-100 hover:text-white hover:bg-emerald-500/20'
                    }`}
                  >
                    {item.label}
                    
                    {/* Cyberpunk hover effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400/0 via-cyan-400/20 to-emerald-400/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10" />
                  </button>
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg -z-10"
                      layoutId="navbar-pill"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.div>
              ))}
              
              {/* Language Toggle */}
              <motion.div
                className="flex items-center gap-1 px-2 ml-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                <button
                  onClick={() => setLanguage('nl')}
                  className={`px-2 py-1 text-sm font-medium transition-colors duration-300 ${
                    language === 'nl'
                      ? 'text-emerald-400'
                      : 'text-slate-400 hover:text-emerald-300'
                  }`}
                >
                  NL
                </button>
                <span className="text-slate-600">|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 text-sm font-medium transition-colors duration-300 ${
                    language === 'en'
                      ? 'text-emerald-400'
                      : 'text-slate-400 hover:text-emerald-300'
                  }`}
                >
                  EN
                </button>
              </motion.div>
            </div>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col gap-1.5">
              <span className="w-6 h-0.5 bg-emerald-400" />
              <span className="w-6 h-0.5 bg-emerald-400" />
              <span className="w-6 h-0.5 bg-emerald-400" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Animated bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        style={{ transformOrigin: 'center' }}
      />
    </motion.header>
  );
};

export default NavbarMenu;
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarMenuProps {
  isVisible: boolean;
}

const NavbarMenu = ({ isVisible }: NavbarMenuProps) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  
  const navItems = [
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Over Mij', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Handle scroll spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-emerald-500/20 shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.6, 
        ease: [0.23, 1, 0.32, 1], 
        delay: isVisible ? 0.3 : 0 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent cursor-pointer"
            initial={{ x: -30, opacity: 0 }}
            animate={{ 
              x: isVisible ? 0 : -30, 
              opacity: isVisible ? 1 : 0
            }}
            transition={{ 
              delay: isVisible ? 0.5 : 0, 
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1]
            }}
            onClick={() => handleNavClick('#home', 'home')}
          >
            Wishant Bhajan
          </motion.div>
          
          {/* Navigation */}
          <motion.nav
            initial={{ x: 30, opacity: 0 }}
            animate={{ 
              x: isVisible ? 0 : 30, 
              opacity: isVisible ? 1 : 0
            }}
            transition={{ 
              delay: isVisible ? 0.7 : 0, 
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <div className="flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ 
                    y: isVisible ? 0 : -20, 
                    opacity: isVisible ? 1 : 0 
                  }}
                  transition={{ 
                    delay: isVisible ? 0.8 + (index * 0.1) : 0, 
                    duration: 0.4 
                  }}
                  className="relative"
                >
                  <button
                    onClick={() => handleNavClick(item.href, item.id)}
                    className={`relative px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 ${
                      activeSection === item.id
                        ? 'text-slate-900 bg-emerald-400 shadow-lg shadow-emerald-400/25'
                        : 'text-emerald-100 hover:text-white hover:bg-emerald-500/20'
                    }`}
                  >
                    {item.label}
                  </button>
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-emerald-400 rounded-lg -z-10"
                      layoutId="navbar-pill"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.nav>
        </div>
      </div>
    </motion.header>
  );
};

export default NavbarMenu;
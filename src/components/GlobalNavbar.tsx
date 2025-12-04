'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from '../utils/routerCompat';
import { useLanguage } from '../contexts/LanguageContext';

const GlobalNavbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: t('nav.home'),
      path: '/home',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    {
      label: t('nav.about'),
      path: '/about',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    },
    {
      label: t('nav.portfolio'),
      path: '/portfolio',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    {
      label: t('nav.events'),
      path: '/events',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[9999] backdrop-blur-xl border-b transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/98 border-emerald-500/30 shadow-2xl'
          : 'bg-slate-900/95 border-emerald-500/20 shadow-lg'
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
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with cyberpunk style */}
          <Link to="/home">
            <motion.div
              className="text-2xl md:text-3xl font-bold relative group cursor-pointer"
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
            >
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Wishant Bhajan
              </span>

              {/* Glitch effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
            </motion.div>
          </Link>

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
                  key={item.path}
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
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 group ${
                      location.pathname === item.path
                        ? 'text-slate-900 bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-400/25'
                        : 'text-emerald-100 hover:text-white hover:bg-emerald-500/20'
                    }`}
                  >
                    <span className="hidden lg:inline">{item.icon}</span>
                    <span>{item.label}</span>

                    {/* Cyberpunk hover effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400/0 via-cyan-400/20 to-emerald-400/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10" />
                  </Link>
                </motion.div>
              ))}

              {/* Language Toggle */}
              <motion.div
                className="flex items-center gap-1 px-2"
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                className="w-6 h-0.5 bg-emerald-400"
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 8 : 0
                }}
              />
              <motion.span
                className="w-6 h-0.5 bg-emerald-400"
                animate={{
                  opacity: isMenuOpen ? 0 : 1
                }}
              />
              <motion.span
                className="w-6 h-0.5 bg-emerald-400"
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -8 : 0
                }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1],
            opacity: { duration: 0.25 }
          }}
          style={{ overflow: 'hidden' }}
        >
          <nav className="pt-4 pb-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={false}
                animate={{
                  x: isMenuOpen ? 0 : -10,
                  opacity: isMenuOpen ? 1 : 0
                }}
                transition={{
                  delay: isMenuOpen ? index * 0.03 : 0,
                  duration: 0.25,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-bold'
                      : 'text-emerald-200 hover:bg-emerald-500/20 hover:text-white'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            ))}

            {/* Mobile Language Toggle */}
            <motion.div
              className="flex items-center justify-start gap-2 px-4 py-3 mb-2"
              initial={false}
              animate={{
                x: isMenuOpen ? 0 : -10,
                opacity: isMenuOpen ? 1 : 0
              }}
              transition={{
                delay: isMenuOpen ? navItems.length * 0.03 : 0,
                duration: 0.25,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <button
                onClick={() => setLanguage('nl')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  language === 'nl'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                    : 'text-slate-400 hover:text-emerald-300'
                }`}
              >
                Nederlands
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                    : 'text-slate-400 hover:text-emerald-300'
                }`}
              >
                English
              </button>
            </motion.div>
          </nav>
        </motion.div>
      </div>

      {/* Animated bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        style={{ transformOrigin: 'center', width: '100%' }}
      />
    </motion.header>
  );
};

export default GlobalNavbar;
'use client';

import React from 'react';
import { useLocation, useNavigate } from '../../utils/routerCompat';
import GlobalNavbar from '../../components/GlobalNavbar';
import MatrixRain from '../../components/Effects/MatrixRain';
import ParticleField from '../../components/Effects/ParticleField';
import ContactBar from '../../components/ContactBar';
import Footer from '../../components/Footer';
import { portfolioData } from '../../data/portfolioData';
import ProjectsGrid from '../../components/Projects/ProjectsGrid';
import { useLanguage } from '../../contexts/LanguageContext';

const NewPortfolioPage: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const pageRef = React.useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = React.useState('');

  // Get category from URL query parameter, then location state, then default to 'cybersecurity'
  const getInitialCategory = () => {
    const params = new URLSearchParams(location.search);
    const urlCategory = params.get('category');
    if (urlCategory && ['cybersecurity', 'bedrijven', 'persoonlijk'].includes(urlCategory)) {
      return urlCategory;
    }
    const stateCategory = (location.state as { selectedCategory?: string })?.selectedCategory;
    if (stateCategory) {
      return stateCategory;
    }
    return 'cybersecurity';
  };

  const [selectedCategory, setSelectedCategory] = React.useState<string>(getInitialCategory());
  const [selectedTier, setSelectedTier] = React.useState<string>('I');
  const [selectedSubcategory, setSelectedSubcategory] = React.useState<string>('all');

  // Update URL when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Update URL with new category (replace to avoid too many history entries)
    navigate(`/portfolio?category=${category}`, { replace: true });
  };

  // Listen for browser back/forward and update category from URL
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlCategory = params.get('category');
    if (urlCategory && ['cybersecurity', 'bedrijven', 'persoonlijk'].includes(urlCategory)) {
      if (urlCategory !== selectedCategory) {
        setSelectedCategory(urlCategory);
      }
    }
  }, [location.search]);

  const getCategoryIcon = (categoryId: string, isActive: boolean) => {
    const iconColor = isActive ? 'currentColor' : '#9ca3af';

    switch (categoryId) {
      case 'cybersecurity':
        return (
          <svg className="w-5 h-5" fill="none" stroke={iconColor} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        );
      case 'bedrijven':
        return (
          <svg className="w-5 h-5" fill="none" stroke={iconColor} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'persoonlijk':
        return (
          <svg className="w-5 h-5" fill="none" stroke={iconColor} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      default:
        return null;
    }
  };

  React.useEffect(() => {
    // Reset scroll position when category changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Reset tier filter when changing category
    if (selectedCategory !== 'cybersecurity') {
      setSelectedTier('all');
    }
    // Reset subcategory filter when changing category
    if (selectedCategory !== 'persoonlijk') {
      setSelectedSubcategory('all');
    }
  }, [selectedCategory, searchQuery]);


  return (
    <div ref={pageRef} className="bg-slate-900 relative w-full min-h-screen overflow-visible" data-page="portfolio">
        {/* Background Layer - Absolute positioning covering full page */}
        <div className="fixed top-0 left-0 right-0 bottom-0 z-0 pointer-events-none overflow-hidden w-full">
          {/* Matrix Rain Background */}
          <div className="absolute inset-0 w-full h-full">
            <MatrixRain fullHeight={true} />
          </div>

          {/* Particle Field */}
          <div className="absolute inset-0 w-full h-full">
            <ParticleField
              density={0.00008}
              maxDistance={150}
              particleColor="#00ffff"
              lineColor="#00ffff"
              mouseInteraction={true}
            />
          </div>

          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-900 to-emerald-950/20 w-full h-full" />

          {/* Animated Hexagon Pattern */}
          <div
            className="absolute inset-0 w-full h-full opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2310b981' stroke-width='0.5'%3E%3Cpath d='M30 0L52 15L52 45L30 60L8 45L8 15Z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Navbar - Fixed on top */}
        <div className="relative z-50">
          <GlobalNavbar />
        </div>

        {/* Logo Watermark in center - behind content */}
        <div className="absolute top-1/3 left-0 right-0 z-0 flex items-center justify-center pointer-events-none">
          <img
            src="/site-assets/logo.png"
            alt="WB Logo"
            loading="lazy"
            decoding="async"
            className="w-[600px] h-auto opacity-[0.15] select-none"
          />
        </div>

        {/* Main Content - Seamless flow */}
        <div className="relative z-10">
          {/* Portfolio content */}
          <div className="min-h-screen pt-20 px-4 md:px-8 lg:px-16">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 mb-4 text-center">
                {t('portfoliopage.title')}
              </h1>
              <p className="text-gray-300 text-center text-lg mb-8">
                {t('portfoliopage.subtitle')}
              </p>

              {/* Search and Filter Section */}
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-center mb-8">
                {/* Search Bar */}
                <div className="relative w-full lg:w-96">
                  <input
                    type="text"
                    placeholder={t('portfoliopage.search')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all backdrop-blur-sm"
                  />
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {portfolioData.map((category) => {
                    const isActive = selectedCategory === category.id;

                    return (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        type="button"
                        className={`px-6 py-3 rounded-lg font-medium cursor-pointer flex items-center gap-2 transition-all duration-300 ${
                          isActive
                            ? 'text-white shadow-md border'
                            : 'bg-slate-800/50 text-gray-300 border border-cyan-500/30'
                        }`}
                        style={isActive ? {
                          backgroundColor: `${category.color}40`,
                          borderColor: category.color,
                          boxShadow: `0 4px 15px ${category.color}20`
                        } : {}}
                      >
                        {getCategoryIcon(category.id, isActive)}
                        <span>{t(`portfoliopage.category.${category.id}`)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tier Filter - Only show for Cybersecurity */}
              {selectedCategory === 'cybersecurity' && (
                <div className="flex gap-3 justify-center mb-8">
                  <button
                    onClick={() => setSelectedTier('all')}
                    className={`px-5 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                      selectedTier === 'all'
                        ? 'bg-cyan-500/40 text-white border border-cyan-500'
                        : 'bg-slate-800/50 text-gray-300 border border-cyan-500/30'
                    }`}
                  >
                    {t('portfoliopage.tier.all')}
                  </button>
                  <button
                    onClick={() => setSelectedTier('I')}
                    className={`px-5 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                      selectedTier === 'I'
                        ? 'bg-green-500/40 text-white border border-green-500'
                        : 'bg-slate-800/50 text-gray-300 border border-green-500/30'
                    }`}
                  >
                    {t('portfoliopage.tier.i')}
                  </button>
                  <button
                    onClick={() => setSelectedTier('II')}
                    className={`px-5 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                      selectedTier === 'II'
                        ? 'bg-yellow-500/40 text-white border border-yellow-500'
                        : 'bg-slate-800/50 text-gray-300 border border-yellow-500/30'
                    }`}
                  >
                    {t('portfoliopage.tier.ii')}
                  </button>
                  <button
                    onClick={() => setSelectedTier('III')}
                    className={`px-5 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                      selectedTier === 'III'
                        ? 'bg-red-500/40 text-white border border-red-500'
                        : 'bg-slate-800/50 text-gray-300 border border-red-500/30'
                    }`}
                  >
                    {t('portfoliopage.tier.iii')}
                  </button>
                </div>
              )}

              {/* Subcategory Filter - Only show for Persoonlijk */}
              {selectedCategory === 'persoonlijk' && (
                <div className="flex gap-3 justify-center mb-8">
                  <button
                    onClick={() => setSelectedSubcategory('all')}
                    className={`px-5 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                      selectedSubcategory === 'all'
                        ? 'bg-pink-500/40 text-white border border-pink-500'
                        : 'bg-slate-800/50 text-gray-300 border border-pink-500/30'
                    }`}
                  >
                    {t('portfoliopage.subcategory.all')}
                  </button>
                  <button
                    onClick={() => setSelectedSubcategory('websites')}
                    className={`px-5 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                      selectedSubcategory === 'websites'
                        ? 'bg-purple-500/40 text-white border border-purple-500'
                        : 'bg-slate-800/50 text-gray-300 border border-purple-500/30'
                    }`}
                  >
                    {t('portfoliopage.subcategory.websites')}
                  </button>
                  <button
                    onClick={() => setSelectedSubcategory('crypto')}
                    className={`px-5 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                      selectedSubcategory === 'crypto'
                        ? 'bg-yellow-500/40 text-white border border-yellow-500'
                        : 'bg-slate-800/50 text-gray-300 border border-yellow-500/30'
                    }`}
                  >
                    {t('portfoliopage.subcategory.crypto')}
                  </button>
                  <button
                    onClick={() => setSelectedSubcategory('systemen')}
                    className={`px-5 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                      selectedSubcategory === 'systemen'
                        ? 'bg-blue-500/40 text-white border border-blue-500'
                        : 'bg-slate-800/50 text-gray-300 border border-blue-500/30'
                    }`}
                  >
                    {t('portfoliopage.subcategory.systems')}
                  </button>
                </div>
              )}

              {/* Projects Grid */}
              <ProjectsGrid
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
                selectedTier={selectedTier}
                selectedSubcategory={selectedSubcategory}
              />
            </div>
          </div>

          {/* Contact Bar - Transparent background for seamless flow */}
          <ContactBar useHomepageStyle={false} transparentBackground={true} />

          {/* Footer - Transparent background for seamless flow */}
          <Footer useHomepageStyle={false} transparentBackground={true} />
        </div>

        {/* Custom CSS for animations */}
        <style>{`
          /* Prevent double scrollbar and horizontal scroll */
          html, body {
            overflow-x: hidden !important;
            width: 100% !important;
            max-width: 100vw !important;
          }

          body {
            overflow-y: auto !important;
          }

          /* Prevent portfolio page from creating its own scrollbar */
          [data-page="portfolio"] {
            overflow: visible !important;
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Glow pulse animation */
          @keyframes glow-pulse {
            0%, 100% {
              box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
            }
            50% {
              box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
            }
          }

          .category-btn {
            animation: glow-pulse 3s ease-in-out infinite;
          }

          /* Custom scrollbar styling - lichtblauw */
          ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-track {
            background: #0f172a;
          }

          ::-webkit-scrollbar-thumb {
            background: rgba(0, 255, 255, 0.3);
            border-radius: 5px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 255, 255, 0.5);
          }
        `}</style>
    </div>
  );
};

export default NewPortfolioPage;
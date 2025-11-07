import React from 'react';
import GlobalNavbar from '../../components/GlobalNavbar';
import styles from './NewPortfolioPage.module.css';
import MatrixRain from '../../components/Effects/MatrixRain';
import ParticleField from '../../components/Effects/ParticleField';
import ContactBar from '../../components/ContactBar';
import Footer from '../../components/Footer';

const NewPortfolioPage: React.FC = () => {
  const pageRef = React.useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = React.useState('100vh');

  React.useEffect(() => {
    const updateHeight = () => {
      if (pageRef.current) {
        const newHeight = Math.max(pageRef.current.scrollHeight, document.documentElement.scrollHeight);
        setPageHeight(`${newHeight}px`);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    // Update after content loads
    setTimeout(updateHeight, 100);
    setTimeout(updateHeight, 500);
    setTimeout(updateHeight, 1000);
    setTimeout(updateHeight, 2000);

    // Also observe changes to the page
    const observer = new MutationObserver(updateHeight);
    if (pageRef.current) {
      observer.observe(pageRef.current, {
        childList: true,
        subtree: true,
        attributes: true
      });
    }

    return () => {
      window.removeEventListener('resize', updateHeight);
      observer.disconnect();
    };
  }, []);


  return (
    <div ref={pageRef} className="min-h-screen bg-slate-900 relative" data-page="portfolio">
        {/* Background Layer - Absolute positioning covering full page */}
        <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none" style={{ height: pageHeight }}>
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
          <div className={`absolute inset-0 ${styles.hexPattern} w-full h-full`} />
        </div>

        {/* Navbar - Fixed on top */}
        <div className="relative z-50">
          <GlobalNavbar />
        </div>

        {/* Logo Watermark in center - behind content */}
        <div className="absolute top-1/3 left-0 right-0 z-0 flex items-center justify-center pointer-events-none">
          <img
            src="/logo.png"
            alt="WB Logo"
            className={`w-[600px] h-auto opacity-[0.15] select-none ${styles.logoWatermark}`}
          />
        </div>

        {/* Main Content - Seamless flow */}
        <div className="relative z-10">
          {/* Portfolio content will go here */}
          <div className="min-h-screen pt-20">
            {/* Add your portfolio content here */}
          </div>

          {/* Contact Bar - Transparent background for seamless flow */}
          <ContactBar useHomepageStyle={false} transparentBackground={true} />

          {/* Footer - Transparent background for seamless flow */}
          <Footer useHomepageStyle={false} transparentBackground={true} />
        </div>

        {/* Custom CSS for animations */}
        <style>{`
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

          /* Scrollbar styling */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #0a192f;
          }

          ::-webkit-scrollbar-thumb {
            background: #00ffff40;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #00ffff60;
          }
        `}</style>
    </div>
  );
};

export default NewPortfolioPage;
import React from 'react';
import GlobalNavbar from '../../components/GlobalNavbar';
import styles from './NewPortfolioPage.module.css';
import MatrixRain from '../../components/Effects/MatrixRain';
import ParticleField from '../../components/Effects/ParticleField';
import CursorGlow from '../../components/Effects/CursorGlow';

const NewPortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden" data-page="portfolio">
      <GlobalNavbar />
      {/* Background Layer - z-0 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Matrix Rain Background */}
        <div className="absolute inset-0">
          <MatrixRain />
        </div>

        {/* Particle Field */}
        <div className="absolute inset-0">
          <ParticleField
            density={0.00008}
            maxDistance={150}
            particleColor="#00ffff"
            lineColor="#00ffff"
            mouseInteraction={true}
          />
        </div>

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-900 to-emerald-950/20" />

        {/* Animated Hexagon Pattern */}
        <div className={`absolute inset-0 ${styles.hexPattern}`} />
      </div>

      {/* Cursor Glow Effect - z-50 */}
      <CursorGlow
        color="#00ffff"
        size={400}
        blur={100}
        followSpeed={0.15}
        enabled={true}
      />

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
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

        /* Hide scrollbar but keep functionality */
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

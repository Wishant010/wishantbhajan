import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MagicBento from '../../components/MagicBento';
import { useLanguage } from '../../contexts/LanguageContext';

const FeaturedProjects: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const featuredProjects = [
    {
      color: '#0A0E27',
      title: 'CyberGuard Pro',
      description: 'Advanced network security monitoring system with real-time threat detection and automated response capabilities',
      label: 'Live'
    },
    {
      color: '#0B1029',
      title: 'Data Vault',
      description: 'Encrypted cloud storage solution with zero-knowledge architecture and end-to-end encryption',
      label: 'In Development'
    },
    {
      color: '#0C132B',
      title: 'AI Assistant',
      description: 'Smart automation platform powered by machine learning for workflow optimization',
      label: 'Featured'
    }
  ];

  return (
    <section className="featured-projects-section relative min-h-screen py-24 px-6 lg:px-12 overflow-hidden"
      style={{
        background: `linear-gradient(180deg,
          #04081E 0%,
          #050B22 5%,
          #060E26 10%,
          #08112A 15%,
          #0A142D 20%,
          #0C1630 25%,
          #0E1932 30%,
          #0F1B35 35%,
          #101D37 40%,
          #111F39 45%,
          #10203A 50%,
          #0F1E38 55%,
          #0E1C36 60%,
          #0C1A33 65%,
          #0A1831 70%,
          #08152E 75%,
          #07132C 80%,
          #06112A 85%,
          #050E27 90%,
          #040C24 95%,
          #030A21 100%
        )`
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Cyber Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Gradient Overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 20% 30%, rgba(0, 245, 255, 0.05) 0%, transparent 40%)`
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 80% 70%, rgba(0, 255, 185, 0.03) 0%, transparent 40%)`
          }}
        />
      </div>

      <div className="container mx-auto max-w-[1400px] relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl lg:text-6xl font-bold mb-4"
            style={{
              color: '#00B8D4',
              textShadow: '0 0 25px rgba(0, 184, 212, 0.5), 0 0 8px rgba(0, 150, 168, 0.7)',
            }}
          >
            {t('portfolio.header')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            {t('portfolio.description')}
          </motion.p>
        </motion.div>

        {/* Magic Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <MagicBento
            cards={featuredProjects}
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            clickEffect={true}
            enableMagnetism={true}
            glowColor="0, 245, 255"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={() => navigate('/portfolio')}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(0, 184, 212, 0.1) 100%)',
              border: '2px solid rgba(0, 245, 255, 0.3)',
              color: '#00F5FF',
              boxShadow: '0 0 20px rgba(0, 245, 255, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 245, 255, 0.2) 0%, rgba(0, 184, 212, 0.2) 100%)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 245, 255, 0.4), 0 0 60px rgba(0, 245, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(0, 184, 212, 0.1) 100%)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View All Projects
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />

            {/* Animated Border */}
            <span
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(0, 245, 255, 0.4), transparent)',
                animation: 'borderGlow 3s linear infinite'
              }}
            />
          </button>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-6 text-sm text-gray-500"
          >
            10+ projects showcasing expertise in web development, cybersecurity, and automation
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        @keyframes borderGlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .featured-projects-section {
          background-attachment: fixed;
          background-size: 100% 100%;
        }

        /* Smooth scroll transition */
        .featured-projects-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to bottom, transparent, rgba(4, 8, 30, 0.5));
          pointer-events: none;
          z-index: 1;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .featured-projects-section {
            padding: 3rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TerminalSequence from './TerminalSequence';
import ParticleSystem from './ParticleSystem';
import { Link } from 'react-router-dom';

interface HologramHeroProps {
  name?: string;
  title?: string;
  tags?: string[];
}

const HologramHero: React.FC<HologramHeroProps> = ({
  name = 'WISHANT BHAJAN',
  title = 'Full Stack Developer',
  tags = ['Cybersecurity', 'Innovation', 'UX'],
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [particleCount, setParticleCount] = useState(30);

  useEffect(() => {
    const updateSizes = () => {
      if (window.innerWidth < 768) {
        // Mobile
        setParticleCount(15);
      } else if (window.innerWidth < 1024) {
        // Tablet
        setParticleCount(20);
      } else {
        // Desktop
        setParticleCount(30);
      }
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);

    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  const handleSequenceComplete = () => {
    setIsLoaded(true);
    setTimeout(() => setShowContent(true), 500);
  };

  return (
    <section className="hologram-hero relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#0a0e1a',
            backgroundImage: `
              linear-gradient(rgba(0, 243, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 243, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Radial gradients */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, rgba(0, 243, 255, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, rgba(255, 0, 255, 0.08) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Particle System */}
      <ParticleSystem count={particleCount} />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center justify-center space-y-12">
          {/* Terminal Sequence */}
          {!isLoaded && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TerminalSequence onComplete={handleSequenceComplete} />
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 20,
            }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Name - Typing Effect */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
              style={{
                color: '#00f3ff',
                textShadow: '0 0 20px rgba(0, 243, 255, 0.5), 0 0 40px rgba(0, 243, 255, 0.3)',
                letterSpacing: '0.05em',
              }}
            >
              {name.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showContent ? 1 : 0 }}
                  transition={{ duration: 0.1, delay: 0.8 + index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Title */}
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl font-medium"
              style={{
                color: '#ff00ff',
                textShadow: '0 0 15px rgba(255, 0, 255, 0.4)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: showContent ? 1 : 0,
                y: showContent ? 0 : 20,
              }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              {title}
            </motion.p>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: showContent ? 1 : 0,
                y: showContent ? 0 : 20,
              }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              {tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 rounded-lg font-medium"
                  style={{
                    backgroundColor: 'rgba(0, 243, 255, 0.1)',
                    border: '1px solid rgba(0, 243, 255, 0.3)',
                    color: '#00f3ff',
                    backdropFilter: 'blur(10px)',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: showContent ? 1 : 0,
                    scale: showContent ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.4, delay: 2 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(0, 243, 255, 0.2)',
                    boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)',
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: showContent ? 1 : 0,
                y: showContent ? 0 : 20,
              }}
              transition={{ duration: 0.6, delay: 2.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="#journey"
                  className="px-8 py-3 rounded-lg font-bold inline-flex items-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #00f3ff 0%, #0099cc 100%)',
                    color: '#0a0e1a',
                    boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#journey')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Journey
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/portfolio"
                  className="px-8 py-3 rounded-lg font-bold inline-flex items-center gap-2"
                  style={{
                    backgroundColor: 'rgba(0, 243, 255, 0.1)',
                    border: '2px solid #00f3ff',
                    color: '#00f3ff',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  View Projects
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0a0e1a)',
        }}
      />
    </section>
  );
};

export default HologramHero;

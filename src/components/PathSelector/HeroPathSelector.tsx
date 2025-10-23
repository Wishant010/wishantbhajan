import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PathCircle from './PathCircle';
import TimelineView from './TimelineView';
import { pathsData } from '../../data/pathsData';

const HeroPathSelector: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);

  const handlePathSelect = (pathId: string) => {
    setSelectedPath(pathId);
    setTimeout(() => {
      setIsTimelineOpen(true);
    }, 300);
  };

  const handlePathChange = (pathId: string) => {
    // Close current timeline
    setIsTimelineOpen(false);

    // Wait for animation, then switch path
    setTimeout(() => {
      setSelectedPath(pathId);
      setTimeout(() => {
        setIsTimelineOpen(true);
        // Scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 100);
    }, 400);
  };

  const handleCloseTimeline = () => {
    setIsTimelineOpen(false);
    setTimeout(() => {
      setSelectedPath(null);
    }, 300);
  };

  const selectedPathData = pathsData.find((p) => p.id === selectedPath);

  // Prepare all paths data for navigation
  const allPathsForNav = pathsData.map(p => ({
    id: p.id,
    label: p.label,
    icon: p.icon,
    color: p.color,
  }));

  return (
    <section className="hero-path-selector relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#0a0e1a',
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(0, 243, 255, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 0, 255, 0.05) 0%, transparent 50%),
              linear-gradient(rgba(0, 243, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 243, 255, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 50px 50px, 50px 50px',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 40px rgba(0, 243, 255, 0.3)',
              }}
            >
              Welkom in Mijn Wereld
            </span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Kies een verhaal om te ontdekken
          </motion.p>
        </motion.div>

        {/* Path Circle Selector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <PathCircle
            paths={pathsData.map((p) => ({
              id: p.id,
              icon: p.icon,
              label: p.label,
              color: p.color,
              angle: p.angle,
            }))}
            selectedPath={selectedPath}
            onPathSelect={handlePathSelect}
          />
        </motion.div>

        {/* Instructions */}
        {!selectedPath && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p className="text-slate-400 text-sm md:text-base">
              Klik op een pad om mijn reis te verkennen
            </p>
            <motion.div
              className="mt-4 inline-block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                className="w-6 h-6 text-cyan-400 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Timeline View (Full screen overlay) */}
      {selectedPathData && (
        <TimelineView
          isOpen={isTimelineOpen}
          pathTitle={selectedPathData.label}
          pathIcon={selectedPathData.icon}
          pathColor={selectedPathData.color}
          timeline={selectedPathData.timeline}
          onClose={handleCloseTimeline}
          currentPathId={selectedPathData.id}
          allPaths={allPathsForNav}
          onPathChange={handlePathChange}
        />
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#00f3ff', '#ff00ff', '#39ff14', '#ffd700'][
                Math.floor(Math.random() * 4)
              ],
              boxShadow: `0 0 10px currentColor`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroPathSelector;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileSection from './ProfileSection';
import PathCard from './PathCard';
import TimelineView from '../PathSelector/TimelineView';
import { pathsData } from '../../data/pathsData';

const BentoHero: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);

  const handlePathClick = (pathId: string) => {
    setSelectedPath(pathId);
    setTimeout(() => {
      setIsTimelineOpen(true);

      // Smooth scroll to top after timeline opens
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 150);
    }, 100);
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
    // First scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Then close timeline with delay for smooth effect
    setTimeout(() => {
      setIsTimelineOpen(false);
      setTimeout(() => {
        setSelectedPath(null);
      }, 300);
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

  // Icon components
  const icons = {
    student: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    business: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
    work: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
        />
      </svg>
    ),
    life: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  };

  const pathCards = [
    {
      id: 'student',
      title: 'Student',
      description: 'Mijn academische journey sinds 2020',
      meta: '2020 - 2025',
      accentColor: '#3B82F6',
      icon: icons.student,
    },
    {
      id: 'business',
      title: 'Bedrijf',
      description: 'Entrepreneurial ventures & startups',
      meta: 'Startup Journey',
      accentColor: '#8B5CF6',
      icon: icons.business,
    },
    {
      id: 'work',
      title: 'Werk',
      description: 'Professional roles & achievements',
      meta: '5+ Roles',
      accentColor: '#10B981',
      icon: icons.work,
    },
    {
      id: 'life',
      title: 'Persoonlijk',
      description: 'Hobbies, passies & wie ik ben',
      meta: 'Passies & More',
      accentColor: '#F59E0B',
      icon: icons.life,
    },
  ];

  return (
    <section className="bento-hero relative min-h-screen pt-32 pb-24 px-6">
      {/* Subtle dark overlay for better text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(15, 20, 25, 0.3) 0%, rgba(26, 31, 46, 0.5) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Content - Hidden when timeline is open */}
        <AnimatePresence mode="wait">
          {!isTimelineOpen && (
            <motion.div
              key="hero-content"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header */}
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                  Over Mij
                </h1>
                <p className="text-lg text-slate-400">
                  Ontdek mijn verhaal, passies en expertise
                </p>
              </motion.div>

              {/* Bento Grid Layout */}
              <div className="grid lg:grid-cols-[350px_1fr] gap-6">
                {/* Left: Profile Section */}
                <div className="lg:sticky lg:top-24 h-fit">
                  <ProfileSection />
                </div>

                {/* Right: Path Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pathCards.map((card, index) => (
                    <PathCard
                      key={card.id}
                      id={card.id}
                      title={card.title}
                      description={card.description}
                      meta={card.meta}
                      accentColor={card.accentColor}
                      icon={card.icon}
                      onClick={() => handlePathClick(card.id)}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Timeline View */}
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
    </section>
  );
};

export default BentoHero;

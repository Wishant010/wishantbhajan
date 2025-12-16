import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileSection from './ProfileSection';
import PathCard from './PathCard';
import TimelineView from '../PathSelector/TimelineView';
import { pathsData } from '../../data/pathsData';
import IconMapper from '../IconMapper';
import { useLanguage } from '../../contexts/LanguageContext';

const BentoHero: React.FC = () => {
  const { t } = useLanguage();
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);

  const handlePathClick = (pathId: string) => {
    // First scroll to top immediately
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setSelectedPath(pathId);
    setTimeout(() => {
      setIsTimelineOpen(true);
    }, 100);
  };

  const handlePathChange = (pathId: string) => {
    // Immediately switch to the new path
    // Timeline stays open, just content changes
    // Scrolling to top is handled by TimelineView component
    setSelectedPath(pathId);
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

  const pathCards = [
    {
      id: 'student',
      title: t('bentohero.student.title'),
      description: t('bentohero.student.description'),
      meta: t('bentohero.student.meta'),
      accentColor: '#3B82F6',
      iconName: 'book',
    },
    {
      id: 'business',
      title: t('bentohero.business.title'),
      description: t('bentohero.business.description'),
      meta: t('bentohero.business.meta'),
      accentColor: '#8B5CF6',
      iconName: 'briefcase',
    },
    {
      id: 'work',
      title: t('bentohero.work.title'),
      description: t('bentohero.work.description'),
      meta: t('bentohero.work.meta'),
      accentColor: '#10B981',
      iconName: 'code',
    },
    {
      id: 'life',
      title: t('bentohero.life.title'),
      description: t('bentohero.life.description'),
      meta: t('bentohero.life.meta'),
      accentColor: '#F59E0B',
      iconName: 'heart',
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
                  {t('bentohero.title')}
                </h1>
                <p className="text-lg text-slate-400">
                  {t('bentohero.subtitle')}
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
                      icon={<IconMapper name={card.iconName} style={{ color: card.accentColor }} />}
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

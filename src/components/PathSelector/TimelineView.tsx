import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TimelineNode, { TimelineNodeData } from './TimelineNode';
import IconMapper from '../IconMapper';

interface TimelineViewProps {
  isOpen: boolean;
  pathTitle: string;
  pathIcon: string;
  pathColor: string;
  timeline: TimelineNodeData[];
  onClose: () => void;
  currentPathId: string;
  allPaths: Array<{ id: string; label: string; icon: string; color: string }>;
  onPathChange: (pathId: string) => void;
}

const TimelineView: React.FC<TimelineViewProps> = ({
  isOpen,
  pathTitle,
  pathIcon,
  pathColor,
  timeline,
  onClose,
  currentPathId,
  allPaths,
  onPathChange,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Block body AND html scroll when timeline is open
  useEffect(() => {
    if (isOpen) {
      // Store original overflow values
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      // Block scrolling on both body and html
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      return () => {
        // Restore original values
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
    return undefined;
  }, [isOpen]);

  // Scroll to top when path changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [currentPathId]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[10000] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
          }}
        >
          {/* Backdrop - Gradient to hide navbar at top */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgb(10, 15, 25) 0%, rgb(10, 15, 25) 80px, rgba(10, 15, 25, 0.70) 150px, rgba(10, 15, 25, 0.70) 100%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Timeline Container - This is the ONLY scrollable element */}
          <motion.div
            ref={scrollContainerRef}
            className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="max-w-6xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-20">
              {/* Header */}
              <div
                className="sticky top-8 z-10 pb-6 mb-8"
                style={{
                  background: 'rgba(10, 15, 25, 0.80)',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPathId}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between">
                      {/* Title */}
                      <div className="flex items-center gap-4">
                        <div
                          className="p-4 rounded-xl"
                          style={{
                            backgroundColor: `${pathColor}20`,
                            boxShadow: `0 0 20px ${pathColor}40`,
                          }}
                        >
                          <IconMapper
                            name={pathIcon}
                            className="w-10 h-10"
                            style={{ color: pathColor }}
                          />
                        </div>
                        <div>
                          <h2
                            className="text-3xl md:text-4xl font-bold uppercase tracking-wider"
                            style={{
                              color: pathColor,
                              textShadow: `0 0 20px ${pathColor}80`,
                            }}
                          >
                            {pathTitle} PAD
                          </h2>
                          <p className="text-slate-400 mt-1">
                            Ontdek mijn reis door de tijd
                          </p>
                        </div>
                      </div>

                      {/* Back Button */}
                      <motion.button
                        onClick={onClose}
                        className="px-6 py-3 rounded-lg font-bold flex items-center gap-2"
                        style={{
                          backgroundColor: `${pathColor}20`,
                          border: `2px solid ${pathColor}`,
                          color: pathColor,
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: pathColor,
                          color: '#0a0e1a',
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
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
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                          />
                        </svg>
                        Terug
                      </motion.button>
                    </div>

                    {/* Divider */}
                    <motion.div
                      className="mt-6 h-1 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${pathColor} 0%, transparent 100%)`,
                        transformOrigin: 'left',
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Timeline - Wrap in AnimatePresence for smooth transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPathId}
                  className="space-y-0 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Vaste verticale lijn in het midden (desktop) */}
                  <div
                    className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5"
                    style={{
                      background: `linear-gradient(180deg, ${pathColor}60, ${pathColor}30)`,
                      zIndex: 0,
                    }}
                  />

                  {/* Vaste verticale lijn aan de linkerkant (mobile) */}
                  <div
                    className="md:hidden absolute left-4 top-0 bottom-0 w-0.5"
                    style={{
                      background: `linear-gradient(180deg, ${pathColor}60, ${pathColor}30)`,
                      zIndex: 0,
                    }}
                  />

                  {timeline.map((node, index) => (
                    <TimelineNode
                      key={`${currentPathId}-${node.year}-${index}`}
                      data={node}
                      index={index}
                      color={pathColor}
                    />
                  ))}

                  {/* End marker */}
                  <motion.div
                    className="flex flex-col items-center gap-4 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: timeline.length * 0.15 }}
                  >
                    <div
                      className="w-5 h-5 rounded-full"
                      style={{
                        backgroundColor: pathColor,
                        boxShadow: `0 0 20px ${pathColor}, 0 0 40px ${pathColor}80`,
                      }}
                    />
                    <p
                      className="text-lg font-medium italic"
                      style={{ color: pathColor }}
                    >
                      En het verhaal gaat door...
                    </p>
                  </motion.div>

                  {/* Navigation to other paths */}
                  <motion.div
                    className="mt-16 pt-8 border-t"
                    style={{
                      borderColor: `${pathColor}20`,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: timeline.length * 0.15 + 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      Ontdek andere paden
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {allPaths
                        .filter((path) => path.id !== currentPathId)
                        .map((path, index) => (
                          <motion.button
                            key={path.id}
                            onClick={() => onPathChange(path.id)}
                            className="p-6 rounded-xl text-left group relative overflow-hidden transition-all duration-300"
                            style={{
                              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02))',
                              border: `2px solid ${path.color}40`,
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: timeline.length * 0.15 + 0.4 + index * 0.1 }}
                            whileHover={{
                              scale: 1.05,
                              borderColor: path.color,
                              boxShadow: `0 10px 40px ${path.color}70, 0 0 60px ${path.color}40`,
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {/* Hover gradient - stronger opacity */}
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                              style={{
                                background: `radial-gradient(circle at center, ${path.color}30, ${path.color}10 50%, transparent 80%)`,
                              }}
                            />

                            <div className="relative z-10 flex items-center gap-4">
                              <div
                                className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
                                style={{
                                  backgroundColor: `${path.color}20`,
                                }}
                              >
                                <IconMapper
                                  name={path.icon}
                                  className="w-8 h-8 transition-all duration-300"
                                  style={{
                                    color: path.color,
                                    filter: 'brightness(1)',
                                  }}
                                />
                              </div>
                              <div className="flex-1">
                                <h4
                                  className="text-lg font-semibold text-white mb-1 transition-all duration-300 group-hover:brightness-150"
                                  style={{
                                    textShadow: '0 0 0 transparent',
                                  }}
                                >
                                  {path.label}
                                </h4>
                                <p
                                  className="text-sm text-slate-400 transition-all duration-300"
                                  style={{
                                    color: 'rgb(148, 163, 184)',
                                  }}
                                >
                                  Bekijk dit pad →
                                </p>
                              </div>
                            </div>

                            {/* Accent line - thicker and more visible on hover */}
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 h-1 group-hover:h-2 transition-all duration-300"
                              style={{
                                background: path.color,
                                transformOrigin: 'left',
                                boxShadow: `0 0 20px ${path.color}00`,
                              }}
                              initial={{ scaleX: 0 }}
                              whileHover={{
                                scaleX: 1,
                                boxShadow: `0 0 20px ${path.color}, 0 0 40px ${path.color}80`,
                              }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.button>
                        ))}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom padding */}
              <div className="h-20" />
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimelineView;

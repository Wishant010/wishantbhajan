import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TimelineNode, { TimelineNodeData } from './TimelineNode';

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
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 backdrop-blur-md"
            style={{
              background: 'linear-gradient(to bottom, rgba(15, 20, 25, 0.95), rgba(26, 31, 46, 0.95))',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Timeline Container - This is the ONLY scrollable element */}
          <motion.div
            className="absolute inset-0 overflow-y-auto overflow-x-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="max-w-4xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-20">
              {/* Header */}
              <motion.div
                className="sticky top-0 z-10 pb-6 mb-8"
                style={{
                  background: 'linear-gradient(to bottom, rgba(15, 20, 25, 0.95), rgba(26, 31, 46, 0.8))',
                  backdropFilter: 'blur(20px)',
                }}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between">
                  {/* Title */}
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{pathIcon}</span>
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
                  transition={{ delay: 0.3, duration: 0.6 }}
                />
              </motion.div>

              {/* Timeline */}
              <div className="space-y-0">
                {timeline.map((node, index) => (
                  <TimelineNode
                    key={`${node.year}-${index}`}
                    data={node}
                    index={index}
                    color={pathColor}
                  />
                ))}

                {/* End marker */}
                <motion.div
                  className="flex items-center gap-6 mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: timeline.length * 0.15 }}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: pathColor,
                        boxShadow: `0 0 15px ${pathColor}`,
                      }}
                    />
                  </div>
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
                    borderColor: `${pathColor}30`,
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
                          className="p-6 rounded-xl backdrop-blur-md text-left group relative overflow-hidden"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
                            border: `1px solid ${path.color}30`,
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: timeline.length * 0.15 + 0.4 + index * 0.1 }}
                          whileHover={{
                            scale: 1.05,
                            borderColor: `${path.color}60`,
                            boxShadow: `0 10px 30px ${path.color}40`,
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Hover gradient */}
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              background: `radial-gradient(circle at center, ${path.color}10, transparent 70%)`,
                            }}
                          />

                          <div className="relative z-10 flex items-center gap-4">
                            <span className="text-4xl">{path.icon}</span>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-white mb-1">
                                {path.label}
                              </h4>
                              <p className="text-sm text-slate-400">
                                Bekijk dit pad →
                              </p>
                            </div>
                          </div>

                          {/* Accent line */}
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-1"
                            style={{
                              background: path.color,
                              transformOrigin: 'left',
                            }}
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.button>
                      ))}
                  </div>
                </motion.div>
              </div>

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

import React from 'react';
import { motion } from 'framer-motion';

export interface PathCardProps {
  id: string;
  title: string;
  description: string;
  meta: string;
  accentColor: string;
  icon: React.ReactNode;
  onClick: () => void;
  index: number;
}

const PathCard: React.FC<PathCardProps> = ({
  title,
  description,
  meta,
  accentColor,
  icon,
  onClick,
  index,
}) => {
  // Convert hex to rgba for glow effect
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <motion.button
      onClick={onClick}
      className="path-card relative w-full h-full p-8 rounded-2xl backdrop-blur-md text-left overflow-hidden group"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        borderColor: hexToRgba(accentColor, 0.3),
        boxShadow: `0 20px 60px ${hexToRgba(accentColor, 0.3)}, 0 0 0 1px ${hexToRgba(accentColor, 0.2)}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Gradient Overlay (appears on hover) */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${hexToRgba(accentColor, 0.1)}, transparent 70%)`,
        }}
      />

      {/* Accent Line (appears on hover) */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(90deg, ${accentColor}, transparent)`,
          transformOrigin: 'left',
        }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      {/* Icon Container */}
      <motion.div
        className="mb-6 w-16 h-16 rounded-xl flex items-center justify-center relative"
        style={{
          backgroundColor: `${accentColor}10`,
        }}
      >
        {/* Icon glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            backgroundColor: hexToRgba(accentColor, 0.15),
            boxShadow: `0 0 20px ${hexToRgba(accentColor, 0.4)}`,
          }}
        />

        <motion.div
          style={{ color: accentColor }}
          className="w-8 h-8 relative z-10"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h3
          className="text-xl font-semibold text-white mb-2"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        <p className="text-sm text-slate-400 group-hover:text-slate-300 mb-4 leading-relaxed transition-colors duration-300">
          {description}
        </p>
        <motion.span
          className="inline-block text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full"
          style={{
            backgroundColor: `${accentColor}15`,
            color: accentColor,
          }}
          whileHover={{
            backgroundColor: hexToRgba(accentColor, 0.25),
            scale: 1.05,
          }}
          transition={{ duration: 0.2 }}
        >
          {meta}
        </motion.span>
      </div>

      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `linear-gradient(120deg, transparent 0%, ${hexToRgba(accentColor, 0.1)} 50%, transparent 100%)`,
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Hover Arrow */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.div
          className="relative"
          animate={{ x: [0, 4, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          {/* Arrow glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              filter: `drop-shadow(0 0 8px ${accentColor})`,
            }}
          >
            <svg
              className="w-6 h-6 opacity-0"
              style={{ color: accentColor }}
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
          </motion.div>

          {/* Arrow icon */}
          <svg
            className="w-6 h-6 relative z-10"
            style={{ color: accentColor }}
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
        </motion.div>
      </div>
    </motion.button>
  );
};

export default PathCard;

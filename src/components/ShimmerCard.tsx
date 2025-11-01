import React from 'react';
import { motion } from 'framer-motion';

interface ShimmerCardProps {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  scaleX?: number;
  scaleY?: number;
  initial?: any;
  animate?: any;
  transition?: any;
  whileHover?: any;
}

const ShimmerCard: React.FC<ShimmerCardProps> = ({
  children,
  className = '',
  shimmerColor = '#ffffff',
  shimmerSize = '0.05em',
  borderRadius = '0.75rem',
  shimmerDuration = '3s',
  background = 'transparent',
  scaleX = 1,
  scaleY = 1,
  initial,
  animate,
  transition,
  whileHover,
}) => {
  return (
    <motion.div
      className={`group relative flex items-center gap-3 overflow-hidden border border-white/10 ${className}`}
      style={{
        ['--spread' as any]: '90deg',
        ['--shimmer-color' as any]: shimmerColor,
        ['--radius' as any]: borderRadius,
        ['--speed' as any]: shimmerDuration,
        borderRadius: borderRadius,
      }}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
    >
      {/* Shimmer effect - contained within card */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="animate-shimmer-slide absolute inset-0 w-full h-full">
          <div className="animate-spin-around absolute -inset-[100%] w-[200%] h-[200%]" />
        </div>
      </div>

      {/* Content */}
      {children}

      {/* Subtle inner shadow */}
      <div
        className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] pointer-events-none transition-shadow duration-300 group-hover:shadow-[inset_0_1px_3px_rgba(255,255,255,0.15)]"
        style={{ borderRadius: borderRadius }}
      />
    </motion.div>
  );
};

export default ShimmerCard;

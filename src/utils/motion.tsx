/**
 * Optimized Framer Motion setup using LazyMotion
 * Reduces initial bundle from ~43kb to ~5kb
 */
import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// Re-export the lightweight motion component
export { m };

// LazyMotion provider wrapper
interface MotionProviderProps {
  children: React.ReactNode;
}

export const MotionProvider: React.FC<MotionProviderProps> = ({ children }) => (
  <LazyMotion features={domAnimation} strict>
    {children}
  </LazyMotion>
);

// Predefined animation variants for common patterns
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Optimized spring transition (less bouncy = faster)
export const springTransition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30
};

// Simple ease transition for better performance
export const easeTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1] as const
};

// Reduced motion check hook
export const useReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Helper to get animation props based on reduced motion preference
export const getAnimationProps = (
  reducedMotion: boolean,
  variants: typeof fadeIn,
  transition?: typeof easeTransition
) => {
  if (reducedMotion) {
    return {
      initial: 'visible',
      animate: 'visible'
    };
  }

  return {
    initial: 'hidden',
    animate: 'visible',
    variants,
    transition: transition || easeTransition
  };
};

// Lightweight hover/tap props for interactive elements
export const interactiveProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.15 }
};

// Mobile-friendly interactive props (smaller scale changes)
export const mobileInteractiveProps = {
  whileTap: { scale: 0.97 },
  transition: { duration: 0.1 }
};

import React from 'react';
import { motion } from 'framer-motion';

interface WireframeCubeProps {
  size?: number;
  color?: string;
  speed?: number;
}

const WireframeCube: React.FC<WireframeCubeProps> = ({
  size = 300,
  color = '#00f3ff',
  speed = 20
}) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{
        perspective: '1000px',
        width: size,
        height: size,
      }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Front Face */}
        <div
          className="absolute w-full h-full opacity-30"
          style={{
            border: `1px solid ${color}`,
            transform: `translateZ(${size / 2}px)`,
          }}
        />

        {/* Back Face */}
        <div
          className="absolute w-full h-full opacity-30"
          style={{
            border: `1px solid ${color}`,
            transform: `translateZ(-${size / 2}px) rotateY(180deg)`,
          }}
        />

        {/* Right Face */}
        <div
          className="absolute w-full h-full opacity-30"
          style={{
            border: `1px solid ${color}`,
            transform: `rotateY(90deg) translateZ(${size / 2}px)`,
          }}
        />

        {/* Left Face */}
        <div
          className="absolute w-full h-full opacity-30"
          style={{
            border: `1px solid ${color}`,
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
          }}
        />

        {/* Top Face */}
        <div
          className="absolute w-full h-full opacity-30"
          style={{
            border: `1px solid ${color}`,
            transform: `rotateX(90deg) translateZ(${size / 2}px)`,
          }}
        />

        {/* Bottom Face */}
        <div
          className="absolute w-full h-full opacity-30"
          style={{
            border: `1px solid ${color}`,
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
          }}
        />

        {/* Diagonal lines for extra wireframe effect */}
        <svg className="absolute w-full h-full top-0 left-0 pointer-events-none">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke={color} strokeWidth="1" opacity="0.2" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke={color} strokeWidth="1" opacity="0.2" />
        </svg>
      </motion.div>
    </div>
  );
};

export default WireframeCube;

import React, { useMemo } from 'react';
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
  const halfSize = size / 2;

  const faceStyle = useMemo(() => ({
    border: `1px solid ${color}`,
  }), [color]);

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none [perspective:1000px]"
      style={{ width: size, height: size }}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
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
          style={{ ...faceStyle, transform: `translateZ(${halfSize}px)` }}
        />

        {/* Back Face */}
        <div
          className="absolute w-full h-full opacity-30"
          style={{ ...faceStyle, transform: `translateZ(-${halfSize}px) rotateY(180deg)` }}
        />

        {/* Right Face */}
        <div
          className="absolute w-full h-full opacity-30"
          style={{ ...faceStyle, transform: `rotateY(90deg) translateZ(${halfSize}px)` }}
        />

        {/* Left Face */}
        <div
          className="absolute w-full h-full opacity-30"
          style={{ ...faceStyle, transform: `rotateY(-90deg) translateZ(${halfSize}px)` }}
        />

        {/* Top Face */}
        <div
          className="absolute w-full h-full opacity-30"
          style={{ ...faceStyle, transform: `rotateX(90deg) translateZ(${halfSize}px)` }}
        />

        {/* Bottom Face */}
        <div
          className="absolute w-full h-full opacity-30"
          style={{ ...faceStyle, transform: `rotateX(-90deg) translateZ(${halfSize}px)` }}
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

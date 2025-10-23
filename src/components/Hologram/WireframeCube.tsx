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
    <div className="wireframe-cube-container" style={{
      width: size,
      height: size,
      perspective: '1000px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
    }}>
      <motion.div
        className="cube"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
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
          className="cube-face"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: `1px solid ${color}`,
            opacity: 0.3,
            transform: `translateZ(${size / 2}px)`,
          }}
        />

        {/* Back Face */}
        <div
          className="cube-face"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: `1px solid ${color}`,
            opacity: 0.3,
            transform: `translateZ(-${size / 2}px) rotateY(180deg)`,
          }}
        />

        {/* Right Face */}
        <div
          className="cube-face"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: `1px solid ${color}`,
            opacity: 0.3,
            transform: `rotateY(90deg) translateZ(${size / 2}px)`,
          }}
        />

        {/* Left Face */}
        <div
          className="cube-face"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: `1px solid ${color}`,
            opacity: 0.3,
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
          }}
        />

        {/* Top Face */}
        <div
          className="cube-face"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: `1px solid ${color}`,
            opacity: 0.3,
            transform: `rotateX(90deg) translateZ(${size / 2}px)`,
          }}
        />

        {/* Bottom Face */}
        <div
          className="cube-face"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: `1px solid ${color}`,
            opacity: 0.3,
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
          }}
        />

        {/* Diagonal lines for extra wireframe effect */}
        <svg
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            pointerEvents: 'none',
          }}
        >
          <line x1="0" y1="0" x2="100%" y2="100%" stroke={color} strokeWidth="1" opacity="0.2" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke={color} strokeWidth="1" opacity="0.2" />
        </svg>
      </motion.div>
    </div>
  );
};

export default WireframeCube;

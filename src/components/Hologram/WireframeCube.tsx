import React from 'react';
import { motion } from 'framer-motion';
import styles from './WireframeCube.module.css';

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
  const containerStyle = {
    width: size,
    height: size,
  };

  const frontFaceStyle = {
    border: `1px solid ${color}`,
    transform: `translateZ(${size / 2}px)`,
  };

  const backFaceStyle = {
    border: `1px solid ${color}`,
    transform: `translateZ(-${size / 2}px) rotateY(180deg)`,
  };

  const rightFaceStyle = {
    border: `1px solid ${color}`,
    transform: `rotateY(90deg) translateZ(${size / 2}px)`,
  };

  const leftFaceStyle = {
    border: `1px solid ${color}`,
    transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
  };

  const topFaceStyle = {
    border: `1px solid ${color}`,
    transform: `rotateX(90deg) translateZ(${size / 2}px)`,
  };

  const bottomFaceStyle = {
    border: `1px solid ${color}`,
    transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
  };

  return (
    <div className={styles.container} {...(containerStyle && { style: containerStyle })}>
      <motion.div
        className={styles.cube}
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
          className={styles.cubeFace}
          {...(frontFaceStyle && { style: frontFaceStyle })}
        />

        {/* Back Face */}
        <div
          className={styles.cubeFace}
          {...(backFaceStyle && { style: backFaceStyle })}
        />

        {/* Right Face */}
        <div
          className={styles.cubeFace}
          {...(rightFaceStyle && { style: rightFaceStyle })}
        />

        {/* Left Face */}
        <div
          className={styles.cubeFace}
          {...(leftFaceStyle && { style: leftFaceStyle })}
        />

        {/* Top Face */}
        <div
          className={styles.cubeFace}
          {...(topFaceStyle && { style: topFaceStyle })}
        />

        {/* Bottom Face */}
        <div
          className={styles.cubeFace}
          {...(bottomFaceStyle && { style: bottomFaceStyle })}
        />

        {/* Diagonal lines for extra wireframe effect */}
        <svg className={styles.diagonalSvg}>
          <line x1="0" y1="0" x2="100%" y2="100%" stroke={color} strokeWidth="1" opacity="0.2" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke={color} strokeWidth="1" opacity="0.2" />
        </svg>
      </motion.div>
    </div>
  );
};

export default WireframeCube;

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  duration: number;
}

interface ParticleSystemProps {
  count?: number;
  colors?: string[];
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({
  count = 25,
  colors = ['#00f3ff', '#ff00ff', '#39ff14'],
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticle = (): Particle => {
      return {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 3 + 1,
        duration: Math.random() * 3 + 2,
      };
    };

    // Initial particles
    const initialParticles = Array.from({ length: count }, createParticle);
    setParticles(initialParticles);

    // Continuously spawn new particles
    const interval = setInterval(() => {
      setParticles((prev) => {
        const newParticles = prev.filter(
          (p) => Date.now() - (p.id * 1000) < p.duration * 1000
        );

        // Add new particles to maintain count
        while (newParticles.length < count) {
          newParticles.push(createParticle());
        }

        return newParticles;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [count, colors]);

  return (
    <div
      className="particle-system absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
            initial={{
              opacity: 0,
              y: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: -50,
              scale: [0, 1, 1, 0.5],
              x: Math.random() * 20 - 10,
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: particle.duration,
              ease: 'easeOut',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ParticleSystem;

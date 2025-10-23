import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useGlitch } from '../../hooks/useGlitch';
import { useParallax } from '../../hooks/useParallax';

interface HologramPortraitProps {
  imageUrl?: string;
  size?: number;
  isVisible?: boolean;
}

const HologramPortrait: React.FC<HologramPortraitProps> = ({
  imageUrl = '/wish-photo.jpg',
  size = 400,
  isVisible = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isGlitching = useGlitch(3000, 200);
  const parallax = useParallax(containerRef, 10);
  const [scanlinePosition, setScanlinePosition] = useState(0);

  // Scanline animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanlinePosition((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="hologram-portrait-container relative"
      style={{
        width: size,
        height: size,
        perspective: '1000px',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        x: parallax.x,
        y: parallax.y,
      }}
      transition={{
        opacity: { duration: 1, delay: 2.5 },
        scale: { duration: 1, delay: 2.5 },
        x: { duration: 0.3, ease: 'easeOut' },
        y: { duration: 0.3, ease: 'easeOut' },
      }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        {/* Glowing border ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: '2px solid #00f3ff',
            boxShadow: '0 0 20px #00f3ff, 0 0 40px #00f3ff, inset 0 0 20px rgba(0, 243, 255, 0.2)',
          }}
          animate={{
            rotate: 360,
            boxShadow: [
              '0 0 20px #00f3ff, 0 0 40px #00f3ff, inset 0 0 20px rgba(0, 243, 255, 0.2)',
              '0 0 30px #ff00ff, 0 0 60px #ff00ff, inset 0 0 30px rgba(255, 0, 255, 0.2)',
              '0 0 20px #00f3ff, 0 0 40px #00f3ff, inset 0 0 20px rgba(0, 243, 255, 0.2)',
            ],
          }}
          transition={{
            rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
            boxShadow: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          }}
        />

        {/* Portrait image container */}
        <div
          className="absolute inset-4 rounded-full overflow-hidden"
          style={{
            backgroundColor: 'rgba(15, 25, 45, 0.3)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 243, 255, 0.3)',
          }}
        >
          {/* Main Image with glitch effect */}
          <motion.img
            src={imageUrl}
            alt="Wishant Bhajan Hologram"
            className="w-full h-full object-cover"
            style={{
              filter: isGlitching
                ? 'hue-rotate(90deg) saturate(2)'
                : 'hue-rotate(0deg) saturate(1)',
              mixBlendMode: 'normal',
            }}
            animate={{
              x: isGlitching ? [0, -3, 3, -2, 2, 0] : 0,
              filter: isGlitching
                ? [
                    'hue-rotate(0deg)',
                    'hue-rotate(90deg)',
                    'hue-rotate(-90deg)',
                    'hue-rotate(0deg)',
                  ]
                : 'hue-rotate(0deg)',
            }}
            transition={{
              duration: 0.2,
            }}
          />

          {/* RGB Split Glitch Overlay */}
          {isGlitching && (
            <>
              <motion.img
                src={imageUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{
                  mixBlendMode: 'screen',
                  opacity: 0.5,
                }}
                animate={{
                  x: 3,
                }}
                transition={{ duration: 0.1 }}
              />
              <motion.img
                src={imageUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{
                  mixBlendMode: 'screen',
                  opacity: 0.5,
                }}
                animate={{
                  x: -3,
                }}
                transition={{ duration: 0.1 }}
              />
            </>
          )}

          {/* Scanline Effect */}
          <div
            className="absolute w-full h-1 pointer-events-none"
            style={{
              top: `${scanlinePosition}%`,
              background: 'linear-gradient(to bottom, transparent, #00f3ff, transparent)',
              boxShadow: '0 0 10px #00f3ff',
              opacity: 0.7,
            }}
          />

          {/* Digital Noise Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
              mixBlendMode: 'overlay',
            }}
          />

          {/* Hologram grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 243, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 243, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '10px 10px',
            }}
          />
        </div>

        {/* Reflection effect */}
        <div
          className="absolute rounded-full overflow-hidden"
          style={{
            top: '105%',
            left: '10%',
            right: '10%',
            height: '30%',
            opacity: 0.3,
            transform: 'scaleY(-1)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)',
          }}
        >
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'blur(3px)' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HologramPortrait;

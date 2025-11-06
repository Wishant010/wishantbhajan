import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface LockMechanismProps {
  isOpen: boolean;
}

const LockMechanism: React.FC<LockMechanismProps> = ({ isOpen }) => {
  const lockRef = useRef<HTMLDivElement>(null);
  const boltRefs = useRef<(HTMLDivElement | null)[]>([]);
  const centerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const tl = gsap.timeline();

      // Glow intensifies
      tl.to(glowRef.current, {
        scale: 1.5,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
      // Bolts retract
      .to(boltRefs.current, {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'back.in(2)'
      }, '-=0.1')
      // Center rotates to open position
      .to(centerRef.current, {
        rotation: 90,
        duration: 0.5,
        ease: 'power3.in'
      }, '-=0.2');
    } else {
      const tl = gsap.timeline();

      // Center rotates back to locked position
      tl.to(centerRef.current, {
        rotation: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
      })
      // Bolts extend
      .to(boltRefs.current, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: 'back.out(2)'
      }, '-=0.2')
      // Glow normalizes
      .to(glowRef.current, {
        scale: 1,
        opacity: 0.6,
        duration: 0.3,
        ease: 'power2.out'
      }, '-=0.2');
    }
  }, [isOpen]);

  return (
    <div
      ref={lockRef}
      className="relative inline-block z-30"
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Outer glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-full blur-xl"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.6) 0%, transparent 70%)',
          width: '120px',
          height: '120px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.6
        }}
      />

      {/* Lock bolts (4 directional) */}
      {[0, 90, 180, 270].map((angle, index) => (
        <div
          key={angle}
          ref={(el) => { boltRefs.current[index] = el; }}
          className="absolute"
          style={{
            width: '40px',
            height: '8px',
            background: 'linear-gradient(90deg, #00ffff, #00ff88)',
            top: '50%',
            left: '50%',
            transformOrigin: 'left center',
            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
            borderRadius: '4px'
          }}
        />
      ))}

      {/* Center mechanism */}
      <div
        ref={centerRef}
        className="relative"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Outer ring */}
        <div
          className="w-20 h-20 rounded-full border-4 flex items-center justify-center"
          style={{
            borderColor: '#00ffff',
            background: 'radial-gradient(circle, rgba(10, 25, 47, 0.9), rgba(0, 255, 255, 0.2))',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.6), inset 0 0 20px rgba(0, 255, 255, 0.3)'
          }}
        >
          {/* Inner circle */}
          <div
            className="w-10 h-10 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #00ffff, #00ff88)',
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.5)',
              animation: 'pulse 2s ease-in-out infinite'
            }}
          >
            {/* Keyhole */}
            <div className="w-full h-full flex items-center justify-center">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                <circle cx="8" cy="6" r="4" fill="#0a192f" />
                <path d="M6 10 L6 16 L10 16 L10 10" fill="#0a192f" />
              </svg>
            </div>
          </div>
        </div>

        {/* Rotating gears */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {[0, 45, 90, 135].map((angle) => (
            <div
              key={angle}
              className="absolute w-1 h-6 bg-cyan-400 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: 'center',
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                opacity: 0.5,
                animation: 'rotate 4s linear infinite'
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 25px rgba(0, 255, 255, 1), inset 0 0 15px rgba(255, 255, 255, 0.7);
          }
        }

        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LockMechanism;

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface ShieldPieceProps {
  index: number;
  isOpen: boolean;
}

const ShieldPiece: React.FC<ShieldPieceProps> = ({ index, isOpen }) => {
  const pieceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pieceRef.current) return;

    if (isOpen) {
      // Calculate split direction based on piece index
      const directions = [
        { x: -600, y: -400, rotation: -45 }, // Top-left
        { x: 600, y: -400, rotation: 45 },   // Top-right
        { x: -600, y: 400, rotation: 45 },   // Bottom-left
        { x: 600, y: 400, rotation: -45 }    // Bottom-right
      ];

      const direction = directions[index];

      gsap.to(pieceRef.current, {
        x: direction.x,
        y: direction.y,
        rotation: direction.rotation,
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.in',
        delay: index * 0.05
      });
    } else {
      // Reassemble animation
      gsap.to(pieceRef.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 1.0,
        ease: 'back.out(1.7)',
        delay: (3 - index) * 0.05
      });
    }
  }, [isOpen, index]);

  // Get clip path for each piece
  const getClipPath = () => {
    const clips = [
      'polygon(0 0, 50% 0, 50% 50%, 0 50%)',     // Top-left
      'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)', // Top-right
      'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)', // Bottom-left
      'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' // Bottom-right
    ];
    return clips[index];
  };

  return (
    <div
      ref={pieceRef}
      className="absolute inset-0"
      style={{
        clipPath: getClipPath(),
        willChange: 'transform, opacity'
      }}
    >
      <div
        className="w-full h-full border-2 border-cyan-500/30 rounded-3xl relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.95) 0%, rgba(17, 34, 64, 0.95) 100%)',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.2), inset 0 0 30px rgba(0, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}
      >
        {/* Hexagon pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2300ffff' stroke-width='0.5'%3E%3Cpath d='M20 0L34 10L34 30L20 40L6 30L6 10Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" style={{ mixBlendMode: 'screen' }}>
          <line
            x1={index % 2 === 0 ? "0" : "100%"}
            y1={index < 2 ? "0" : "100%"}
            x2="50%"
            y2="50%"
            stroke="#00ffff"
            strokeWidth="1"
            strokeDasharray="4 4"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="8"
              dur="0.5s"
              repeatCount="indefinite"
            />
          </line>
        </svg>

        {/* Glowing edge */}
        <div
          className="absolute inset-0"
          style={{
            boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 0.3)',
            pointerEvents: 'none'
          }}
        />
      </div>
    </div>
  );
};

export default ShieldPiece;

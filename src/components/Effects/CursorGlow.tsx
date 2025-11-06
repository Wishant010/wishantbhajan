import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { isMobileDevice, isTouchDevice } from '../../utils/performanceOptimization';

interface CursorGlowProps {
  color?: string;
  size?: number;
  blur?: number;
  followSpeed?: number;
  enabled?: boolean;
}

const CursorGlow: React.FC<CursorGlowProps> = ({
  color = '#00ffff',
  size = 400,
  blur = 100,
  followSpeed = 0.15,
  enabled = true
}) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile or touch-enabled
    const checkMobile = () => {
      setIsMobile(isMobileDevice() || isTouchDevice());
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!enabled || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => {
      gsap.to([glowRef.current, cursorRef.current], {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to([glowRef.current, cursorRef.current], {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    // Smooth follow animation
    const animate = () => {
      // Lerp (linear interpolation) for smooth following
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * followSpeed;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * followSpeed;

      if (glowRef.current) {
        gsap.set(glowRef.current, {
          x: currentPos.current.x,
          y: currentPos.current.y,
          xPercent: -50,
          yPercent: -50
        });
      }

      if (cursorRef.current) {
        gsap.set(cursorRef.current, {
          x: currentPos.current.x,
          y: currentPos.current.y,
          xPercent: -50,
          yPercent: -50
        });
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, [enabled, followSpeed, isMobile]);

  if (!enabled || isMobile) return null;

  return (
    <>
      {/* Main glow effect */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-50"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          opacity: 0,
          willChange: 'transform'
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `radial-gradient(circle, ${color}40 0%, ${color}20 30%, transparent 70%)`,
            filter: `blur(${blur}px)`,
            mixBlendMode: 'screen'
          }}
        />
      </div>

      {/* Cursor dot */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50"
        style={{
          width: '8px',
          height: '8px',
          opacity: 0,
          willChange: 'transform'
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: color,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}80, 0 0 30px ${color}40`
          }}
        />
      </div>

      {/* Hide default cursor */}
      <style>{`
        body {
          cursor: none;
        }

        a, button, [role="button"], input, textarea, select {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default CursorGlow;

import React, { useEffect, useRef, useState } from 'react';
import { isMobileDevice, prefersReducedMotion } from '../../utils/performanceOptimization';

interface MatrixRainProps {
  fullHeight?: boolean;
}

const MatrixRain: React.FC<MatrixRainProps> = ({ fullHeight = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastFrameTime = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Don't run animation if not visible or reduced motion preferred
    if (!isVisible || prefersReducedMotion()) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const isMobile = isMobileDevice();
    const targetFPS = isMobile ? 20 : 30; // Lower FPS for better performance
    const frameInterval = 1000 / targetFPS;

    // Set canvas size with reduced resolution on mobile
    const updateSize = () => {
      const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5);
      const width = window.innerWidth;
      const height = fullHeight && container.parentElement
        ? container.parentElement.clientHeight || window.innerHeight
        : window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    updateSize();

    const characters = 'アイウエオカキクケコ01';
    const fontSize = isMobile ? 16 : 14; // Larger font = fewer columns
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops: number[] = new Array(columns).fill(0).map(() => Math.random() * -100);

    const draw = (timestamp: number) => {
      // Throttle frame rate
      if (timestamp - lastFrameTime.current < frameInterval) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      lastFrameTime.current = timestamp;

      // Semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ffff';
      ctx.font = `${fontSize}px monospace`;

      // Process fewer columns on mobile
      const step = isMobile ? 2 : 1;
      for (let i = 0; i < drops.length; i += step) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(draw);

    // Debounced resize handler
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateSize, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [fullHeight, isVisible]);

  // Return static element if reduced motion preferred
  if (prefersReducedMotion()) {
    return (
      <div ref={containerRef} className="absolute inset-0 w-full h-full bg-gradient-to-b from-cyan-900/5 to-transparent" />
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-20 w-full h-full will-change-transform"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
};

export default React.memo(MatrixRain);

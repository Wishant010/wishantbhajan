import React, { useRef, useEffect, useState } from 'react';
import { isMobileDevice, prefersReducedMotion } from '../../utils/performanceOptimization';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

interface ParticleFieldProps {
  density?: number;
  maxDistance?: number;
  particleColor?: string;
  lineColor?: string;
  mouseInteraction?: boolean;
}

const ParticleField: React.FC<ParticleFieldProps> = ({
  density = 0.00008,
  maxDistance = 150,
  particleColor = '#00ffff',
  lineColor = '#00ffff',
  mouseInteraction = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; radius: number }>({ x: 0, y: 0, radius: 100 });
  const animationRef = useRef<number | null>(null);
  const lastFrameTime = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy loading with IntersectionObserver
  useEffect(() => {
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
    // Don't run if not visible or reduced motion preferred
    if (!isVisible || prefersReducedMotion()) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const isMobile = isMobileDevice();
    const targetFPS = isMobile ? 24 : 30;
    const frameInterval = 1000 / targetFPS;

    // Set canvas size with optimized resolution
    const resizeCanvas = () => {
      const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    // Initialize particles with optimized count
    const initParticles = () => {
      let adjustedDensity = density;
      if (isMobile) {
        adjustedDensity = density * 0.4; // 60% fewer particles on mobile
      }

      // Cap maximum particles
      const maxParticles = isMobile ? 50 : 100;
      const particleCount = Math.min(
        Math.floor(window.innerWidth * window.innerHeight * adjustedDensity),
        maxParticles
      );

      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.2
      }));
    };

    // Throttled mouse handler
    let lastMouseUpdate = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseUpdate < 50) return; // Throttle to 20fps
      lastMouseUpdate = now;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Optimized animation loop
    const animate = (timestamp: number) => {
      // Frame rate limiting
      if (timestamp - lastFrameTime.current < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime.current = timestamp;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const particles = particlesRef.current;
      const adjustedMaxDistance = isMobile ? maxDistance * 0.7 : maxDistance;

      // Disable shadow for performance
      ctx.shadowBlur = 0;

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(window.innerWidth, particle.x));
        particle.y = Math.max(0, Math.min(window.innerHeight, particle.y));

        // Mouse interaction (skip on mobile for performance)
        if (mouseInteraction && !isMobile) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distSq = dx * dx + dy * dy;
          const radiusSq = mouseRef.current.radius * mouseRef.current.radius;

          if (distSq < radiusSq) {
            const dist = Math.sqrt(distSq);
            const force = (mouseRef.current.radius - dist) / mouseRef.current.radius * 0.3;
            const angle = Math.atan2(dy, dx);
            particle.vx -= Math.cos(angle) * force;
            particle.vy -= Math.sin(angle) * force;
          }
        }

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Draw particle (no shadow for performance)
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${particleColor}${Math.floor(particle.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Draw lines to nearby particles (check fewer particles)
        const checkLimit = isMobile ? Math.min(i + 10, particles.length) : particles.length;
        for (let j = i + 1; j < checkLimit; j++) {
          const other = particles[j];
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < adjustedMaxDistance * adjustedMaxDistance) {
            const dist = Math.sqrt(distSq);
            const opacity = (1 - dist / adjustedMaxDistance) * 0.2;
            ctx.beginPath();
            ctx.strokeStyle = `${lineColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Setup
    resizeCanvas();

    // Debounced resize
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 200);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    if (mouseInteraction && !isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, maxDistance, particleColor, lineColor, mouseInteraction, isVisible]);

  // Static fallback for reduced motion
  if (prefersReducedMotion()) {
    return (
      <div ref={containerRef} className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-900/10 to-transparent" />
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{ opacity: 0.6 }}
      />
    </div>
  );
};

export default React.memo(ParticleField);

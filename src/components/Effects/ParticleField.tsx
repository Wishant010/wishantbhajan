import React, { useRef, useEffect } from 'react';
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
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; radius: number }>({ x: 0, y: 0, radius: 100 });
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      // Reduce particles on mobile devices or when reduced motion is preferred
      const isMobile = isMobileDevice();
      const reducedMotion = prefersReducedMotion();

      let adjustedDensity = density;
      if (reducedMotion) {
        adjustedDensity = density * 0.3; // 70% fewer particles
      } else if (isMobile) {
        adjustedDensity = density * 0.5; // 50% fewer particles on mobile
      }

      const particleCount = Math.floor(canvas.width * canvas.height * adjustedDensity);
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.2
        });
      }
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Draw particle
    const drawParticle = (particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${particleColor}${Math.floor(particle.alpha * 255).toString(16).padStart(2, '0')}`;
      ctx.fill();

      // Add glow effect
      ctx.shadowBlur = 10;
      ctx.shadowColor = particleColor;
    };

    // Draw line between particles
    const drawLine = (p1: Particle, p2: Particle, distance: number) => {
      const opacity = (1 - distance / maxDistance) * 0.3;
      ctx.beginPath();
      ctx.strokeStyle = `${lineColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
      ctx.lineWidth = 0.5;
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    // Calculate distance between two points
    const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    // Update and draw particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Mouse interaction - repel particles
        if (mouseInteraction) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

          if (distanceToMouse < mouseRef.current.radius) {
            const force = (mouseRef.current.radius - distanceToMouse) / mouseRef.current.radius;
            const angle = Math.atan2(dy, dx);
            particle.vx -= Math.cos(angle) * force * 0.5;
            particle.vy -= Math.sin(angle) * force * 0.5;
          }
        }

        // Apply damping to velocity
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Draw particle
        drawParticle(particle);

        // Draw lines to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const distance = getDistance(particle.x, particle.y, other.x, other.y);

          if (distance < maxDistance) {
            drawLine(particle, other, distance);
          }
        }

        // Draw line to mouse if close enough
        if (mouseInteraction) {
          const distanceToMouse = getDistance(
            particle.x,
            particle.y,
            mouseRef.current.x,
            mouseRef.current.y
          );

          if (distanceToMouse < mouseRef.current.radius) {
            const opacity = (1 - distanceToMouse / mouseRef.current.radius) * 0.5;
            ctx.beginPath();
            ctx.strokeStyle = `${lineColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    if (mouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, maxDistance, particleColor, lineColor, mouseInteraction]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default ParticleField;

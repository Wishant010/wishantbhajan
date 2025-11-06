import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface UseMagneticEffectOptions {
  strength?: number;
  ease?: string;
  duration?: number;
}

export const useMagneticEffect = <T extends HTMLElement>(
  options: UseMagneticEffectOptions = {}
) => {
  const { strength = 0.3, ease = 'power3.out', duration = 0.3 } = options;
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from cursor to element center
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      // Magnetic radius (adjust this value to change the magnetic field size)
      const magneticRadius = rect.width * 1.5;

      if (distance < magneticRadius) {
        // Calculate pull strength based on distance (closer = stronger pull)
        const pullStrength = (1 - distance / magneticRadius) * strength;

        // Calculate the target position
        const targetX = distanceX * pullStrength * 30;
        const targetY = distanceY * pullStrength * 30;

        // Apply magnetic effect
        gsap.to(element, {
          x: targetX,
          y: targetY,
          duration,
          ease,
          overwrite: 'auto'
        });
      }
    };

    const handleMouseLeave = () => {
      // Reset position when mouse leaves
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: duration * 1.5,
        ease: 'elastic.out(1, 0.5)',
        overwrite: 'auto'
      });
    };

    // Attach event listeners to window for better tracking
    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, ease, duration]);

  return elementRef;
};

export default useMagneticEffect;

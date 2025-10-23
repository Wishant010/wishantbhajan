import { useState, useEffect, RefObject } from 'react';

interface ParallaxOffset {
  x: number;
  y: number;
}

export const useParallax = (ref: RefObject<HTMLElement | null>, strength: number = 10): ParallaxOffset => {
  const [offset, setOffset] = useState<ParallaxOffset>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;

      setOffset({
        x: deltaX * strength,
        y: deltaY * strength,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref, strength]);

  return offset;
};

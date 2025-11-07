import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  fullHeight?: boolean;
}

const MatrixRain: React.FC<MatrixRainProps> = ({ fullHeight = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size - use parent container height if fullHeight is true
    const updateSize = () => {
      canvas.width = window.innerWidth;
      if (fullHeight && container.parentElement) {
        canvas.height = container.parentElement.clientHeight || window.innerHeight;
      } else {
        canvas.height = window.innerHeight;
      }
    };

    updateSize();

    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      // Black background with fade effect
      ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ffff';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    // Handle resize
    window.addEventListener('resize', updateSize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateSize);
    };
  }, [fullHeight]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-20 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
};

export default MatrixRain;

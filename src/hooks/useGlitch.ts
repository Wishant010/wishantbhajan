import { useState, useEffect } from 'react';

export const useGlitch = (interval: number = 3000, duration: number = 200) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      setTimeout(() => {
        setIsGlitching(false);
      }, duration);
    };

    // Initial random delay before first glitch
    const initialDelay = Math.random() * 2000;

    const initialTimer = setTimeout(() => {
      triggerGlitch();

      // Set up recurring glitches
      const glitchInterval = setInterval(triggerGlitch, interval);

      return () => clearInterval(glitchInterval);
    }, initialDelay);

    return () => {
      clearTimeout(initialTimer);
    };
  }, [interval, duration]);

  return isGlitching;
};

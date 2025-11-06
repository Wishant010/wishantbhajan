import React, { useEffect, useRef, useState } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  revealSpeed?: number;
  characters?: string;
  autoStart?: boolean;
  trigger?: boolean;
  onComplete?: () => void;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  scrambleSpeed = 50,
  revealSpeed = 50,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?',
  autoStart = true,
  trigger = false,
  onComplete
}) => {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number | undefined>(undefined);
  const targetTextRef = useRef<string>(text);
  const currentIndexRef = useRef<number>(0);
  const hasStartedRef = useRef<boolean>(false);

  useEffect(() => {
    targetTextRef.current = text;
  }, [text]);

  useEffect(() => {
    if (!autoStart && !trigger) return;
    if (hasStartedRef.current && !trigger) return;

    hasStartedRef.current = true;
    currentIndexRef.current = 0;

    const scramble = () => {
      const target = targetTextRef.current;
      const currentIndex = currentIndexRef.current;

      if (currentIndex >= target.length) {
        setDisplayText(target);
        if (onComplete) onComplete();
        return;
      }

      // Build display text: revealed portion + scrambled portion
      let result = '';

      for (let i = 0; i < target.length; i++) {
        if (i < currentIndex) {
          // Already revealed
          result += target[i];
        } else if (target[i] === ' ') {
          // Preserve spaces
          result += ' ';
        } else {
          // Scrambled character
          result += characters[Math.floor(Math.random() * characters.length)];
        }
      }

      setDisplayText(result);

      // Schedule next frame
      const nextDelay = Math.random() * scrambleSpeed;
      frameRef.current = window.setTimeout(scramble, nextDelay);
    };

    // Reveal one character at a time
    const reveal = () => {
      const target = targetTextRef.current;
      const currentIndex = currentIndexRef.current;

      if (currentIndex >= target.length) {
        setDisplayText(target);
        if (onComplete) onComplete();
        return;
      }

      currentIndexRef.current++;
      frameRef.current = window.setTimeout(reveal, revealSpeed);
    };

    // Start with initial scramble
    scramble();

    // After a short scramble period, start revealing
    const revealTimeout = setTimeout(() => {
      if (frameRef.current) clearTimeout(frameRef.current);
      currentIndexRef.current = 0;
      reveal();
    }, scrambleSpeed * 10);

    return () => {
      if (frameRef.current) clearTimeout(frameRef.current);
      clearTimeout(revealTimeout);
    };
  }, [text, scrambleSpeed, revealSpeed, characters, autoStart, trigger, onComplete]);

  return <span className={className}>{displayText}</span>;
};

export default ScrambleText;

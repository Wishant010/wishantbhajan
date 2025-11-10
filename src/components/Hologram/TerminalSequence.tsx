import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalSequenceProps {
  onComplete?: () => void;
}

const TerminalSequence: React.FC<TerminalSequenceProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');

  const phases = [
    { delay: 0, text: '> Initializing consciousness...', duration: 400 },
    { delay: 400, text: '> Scanning biometric data...', duration: 400 },
    { delay: 800, text: '> Loading identity matrix...', duration: 600, hasProgress: true },
    { delay: 1600, text: '> Reconstructing digital presence...', duration: 300 },
    { delay: 1900, text: '> IDENTITY VERIFIED ✓', duration: 300 },
    { delay: 2200, text: '> ACCESS GRANTED', duration: 300, isSuccess: true },
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    phases.forEach((phaseData, index) => {
      const timer = setTimeout(() => {
        setPhase(index);
        typeText(phaseData.text);

        if (phaseData.hasProgress) {
          animateProgress();
        }
      }, phaseData.delay);

      timers.push(timer);
    });

    // Complete callback
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2500);

    timers.push(completeTimer);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onComplete]);

  const typeText = (fullText: string) => {
    let index = 0;
    setText('');

    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 15);
  };

  const animateProgress = () => {
    let prog = 0;
    const interval = setInterval(() => {
      if (prog <= 100) {
        setProgress(prog);
        prog += 4;
      } else {
        clearInterval(interval);
      }
    }, 10);
  };

  const currentPhase = phases[phase];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="terminal-sequence font-mono text-sm md:text-base"
      style={{
        backgroundColor: 'rgba(10, 14, 26, 0.8)',
        border: '1px solid rgba(0, 243, 255, 0.3)',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 0 20px rgba(0, 243, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        maxWidth: '500px',
      }}
    >
      {/* Terminal Lines */}
      <div className="space-y-2">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span
            style={{
              color: currentPhase?.isSuccess ? '#39ff14' : '#00f3ff',
              textShadow: `0 0 10px ${currentPhase?.isSuccess ? '#39ff14' : '#00f3ff'}`,
            }}
          >
            {text}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{ color: '#00f3ff' }}
          >
            _
          </motion.span>
        </motion.div>

        {/* Progress Bar */}
        {currentPhase?.hasProgress && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            transition={{ duration: 0.5 }}
            className="mt-3"
          >
            <div
              style={{
                width: '100%',
                height: '8px',
                backgroundColor: 'rgba(0, 243, 255, 0.1)',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <motion.div
                style={{
                  height: '100%',
                  backgroundColor: '#00f3ff',
                  boxShadow: '0 0 10px #00f3ff',
                }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div
              className="text-right mt-1"
              style={{ color: '#00f3ff', fontSize: '0.75rem' }}
            >
              {progress}%
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TerminalSequence;

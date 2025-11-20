import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import ProfileCard from '../../components/ProfileCard';
import { useLanguage } from '../../contexts/LanguageContext';

// Terminal Component with Typing Animation
const Terminal: React.FC<{ startTyping: boolean; onTypingComplete?: () => void; t: (key: string) => string }> = ({ startTyping, onTypingComplete, t }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [hasTyped, setHasTyped] = useState(false);

  const terminalLines = [
    { prompt: '>', command: './about-me.sh', delay: 500 },
    { prompt: '>', text: t('aboutsection.terminal.name'), delay: 100 },
    { prompt: '>', text: t('aboutsection.terminal.age'), delay: 100 },
    { prompt: '>', text: t('aboutsection.terminal.location'), delay: 100 },
    { prompt: '>', text: t('aboutsection.terminal.role'), delay: 100 },
    { prompt: '>', text: t('aboutsection.terminal.status'), delay: 100 },
    { prompt: '>', text: t('aboutsection.terminal.passion'), delay: 100 },
    { prompt: '>', text: t('aboutsection.terminal.experience'), delay: 100 }
  ];

  useEffect(() => {
    // Only start typing when section is in view and hasn't typed before
    if (!startTyping || hasTyped) return;

    setHasTyped(true);
    const typeText = async () => {
      for (let i = 0; i < terminalLines.length; i++) {
        const line = terminalLines[i];
        await new Promise(resolve => setTimeout(resolve, line.delay));

        const fullText = line.command || line.text || '';
        let typed = '';

        for (let j = 0; j <= fullText.length; j++) {
          typed = fullText.slice(0, j);
          setCurrentLine(i);
          setDisplayedText(prev => {
            const lines = prev.split('\n');
            lines[i] = `${line.prompt} ${typed}`;
            return lines.join('\n');
          });
          await new Promise(resolve => setTimeout(resolve, 30));
        }
      }
      // Notify parent that typing is complete
      if (onTypingComplete) {
        onTypingComplete();
      }
    };

    typeText();

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTyping, hasTyped]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="group relative bg-gradient-to-br from-[#0D1117] to-[#0A0E27] rounded-xl overflow-hidden shadow-2xl border border-cyan-500/20 w-full max-w-2xl backdrop-blur-[10px] transition-all duration-300 before:content-[''] before:absolute before:inset-[-1px] before:bg-gradient-to-r before:from-[#00F5FF] before:to-[#00FFB9] before:opacity-10 before:rounded-lg before:-z-10 before:transition-opacity before:duration-300 hover:before:opacity-20"
      style={{
        boxShadow: '0 0 60px rgba(0, 245, 255, 0.15)',
      }}
    >
      {/* Terminal Header */}
      <div className="bg-gradient-to-r from-[#161B22] to-[#1C2128] px-6 py-3 flex items-center gap-2 border-b border-[rgba(0,245,255,0.1)]">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <span className="ml-4 text-gray-500 text-sm font-mono">about-me.sh</span>
      </div>

      {/* Terminal Content */}
      <div className="p-8 font-mono text-base lg:text-lg min-h-[200px] relative overflow-hidden">
        {displayedText.split('\n').map((line, index) => (
          <div key={index} className="mb-2 flex items-center animate-terminal-line-fade">
            {line.includes(':') ? (
              <>
                <span className="text-teal-500">{line.split(':')[0]}</span>
                <span className="text-gray-400">:</span>
                <span className="text-cyan-600">{line.split(':')[1]}</span>
              </>
            ) : (
              <span className="text-teal-500">{line}</span>
            )}
            {index === currentLine && showCursor && (
              <span className="text-cyan-500 animate-blink">_</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Main AboutSection Component
const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);


  return (
    <section
      ref={ref}
      className="about-section relative min-h-screen py-32 px-6 lg:px-12 overflow-hidden bg-[length:200%_200%] animate-gradient-shift"
      style={{
        background: `linear-gradient(180deg,
          #0A0E27 0%,
          #0B1029 8%,
          #0C132B 16%,
          #0D152E 24%,
          #0E1831 32%,
          #0F1A34 40%,
          #101D37 48%,
          #0F1B35 56%,
          #0E1932 64%,
          #0C1630 72%,
          #0A142D 80%,
          #08112A 88%,
          #060E26 94%,
          #050B22 97%,
          #04081E 100%
        )`,
      }}
    >
      {/* Multi-layer gradient overlays for extra smoothness */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 0%, rgba(0, 245, 255, 0.05) 0%, transparent 40%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 100%, rgba(0, 255, 185, 0.03) 0%, transparent 40%)' }} />
        {/* Noise texture overlay for natural gradient */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

          {/* Left Side - Title and Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-10 lg:mt-8"
          >
            {/* Title at top-left */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
              transition={{ duration: 0.5 }}
            >
              <h2
                className="text-5xl lg:text-7xl font-bold mb-6 text-[#00B8D4]"
                style={{
                  textShadow: '0 0 25px rgba(0, 184, 212, 0.5), 0 0 8px rgba(0, 150, 168, 0.7)'
                }}
              >
                {t('aboutsection.title')}
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
                {t('aboutsection.subtitle')}
              </p>
            </motion.div>

            {/* Terminal Component - Larger */}
            <Terminal
              startTyping={isInView}
              onTypingComplete={() => setIsTypingComplete(true)}
              t={t}
            />

            {/* Button that appears after typing is complete */}
            {isTypingComplete && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-start mt-8"
              >
                <motion.a
                  href="/about"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-xl overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:rounded-full before:bg-white/10 before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-[600ms] hover:before:w-[300px] hover:before:h-[300px]"
                  style={{
                    boxShadow: '0 0 30px rgba(0, 184, 212, 0.4)'
                  }}
                  whileHover={{
                    scale: 1.08,
                    x: 10,
                    boxShadow: '0 0 40px rgba(0, 184, 212, 0.6), 0 0 60px rgba(0, 245, 255, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider">
                    {t('aboutsection.button')}
                  </span>
                  <svg
                    className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.a>
              </motion.div>
            )}
          </motion.div>

          {/* Right Side - ProfileCard */}
          <motion.div
            className="relative h-[600px] lg:h-[700px] flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProfileCard
              avatarUrl="/wish-photo.jpg"
              miniAvatarUrl="/favicon.svg"
              name={t('aboutsection.profilecard.name')}
              title={t('aboutsection.profilecard.title')}
              handle="wishant010"
              status={t('aboutsection.profilecard.status')}
              contactText={t('aboutsection.profilecard.contact')}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </motion.div>

        </div>
      </div>

      {/* Mesh gradient overlay for ultra-smooth effect */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(15, 26, 52, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(10, 20, 45, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(13, 21, 46, 0.3) 0%, transparent 50%)
          `
        }}
      />
    </section>
  );
};

export default AboutSection;
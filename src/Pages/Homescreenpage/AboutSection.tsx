import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import ProfileCard from '../../components/ProfileCard';

// Terminal Component with Typing Animation
const Terminal: React.FC<{ startTyping: boolean }> = ({ startTyping }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [hasTyped, setHasTyped] = useState(false);

  const terminalLines = [
    { prompt: '>', command: './about-me.sh', delay: 500 },
    { prompt: '>', text: 'Name: Wishant Bhajan', delay: 100 },
    { prompt: '>', text: 'Age: 20', delay: 100 },
    { prompt: '>', text: 'Location: Rotterdam, NL', delay: 100 },
    { prompt: '>', text: 'Role: Student Informatica 3e jaars', delay: 100 },
    { prompt: '>', text: 'Status: Available for work', delay: 100 },
    { prompt: '>', text: 'Passion: Cybersecurity & Innovation', delay: 100 },
    { prompt: '>', text: 'Experience: 3+ years', delay: 100 }
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
    };

    typeText();

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [startTyping, hasTyped]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="terminal-container relative bg-[#0D1117] rounded-xl overflow-hidden shadow-2xl border border-cyan-500/20 w-full max-w-2xl"
      style={{
        boxShadow: '0 0 60px rgba(0, 245, 255, 0.15)',
      }}
    >
      {/* Terminal Header */}
      <div className="terminal-header bg-[#161B22] px-6 py-3 flex items-center gap-2">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <span className="ml-4 text-gray-500 text-sm font-mono">about-me.sh</span>
      </div>

      {/* Terminal Content */}
      <div className="terminal-content p-8 font-mono text-base lg:text-lg">
        {displayedText.split('\n').map((line, index) => (
          <div key={index} className="terminal-line mb-2">
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
              <span className="terminal-cursor text-cyan-500">_</span>
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

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);


  return (
    <section
      ref={ref}
      className="about-section relative min-h-screen py-32 px-6 lg:px-12 overflow-hidden"
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
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 30% 0%, rgba(0, 245, 255, 0.05) 0%, transparent 40%)`
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 70% 100%, rgba(0, 255, 185, 0.03) 0%, transparent 40%)`
          }}
        />
        {/* Noise texture overlay for natural gradient */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
            mixBlendMode: 'soft-light',
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
                className="text-5xl lg:text-7xl font-bold mb-6"
                style={{
                  color: '#00B8D4', // Donkerder cyaan voor titel
                  textShadow: '0 0 25px rgba(0, 184, 212, 0.5), 0 0 8px rgba(0, 150, 168, 0.7)',
                }}
              >
                Over Mij
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
                3e jaars Informatica student met een passie voor cybersecurity
                en innovatieve weboplossingen. Ik combineer creativiteit met technische
                expertise om veilige en gebruiksvriendelijke applicaties te bouwen.
              </p>
            </motion.div>

            {/* Terminal Component - Larger */}
            <Terminal startTyping={isInView} />
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
              name="Wishant Bhajan"
              title="Software Engineer"
              handle="wishant010"
              status="Available for work"
              contactText="Contact"
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

      <style>{`
        /* Smooth gradient animation for extra smoothness */
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .about-section {
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
        }

        /* Mesh gradient overlay for ultra-smooth effect */
        .about-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 50%, rgba(15, 26, 52, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(10, 20, 45, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(13, 21, 46, 0.3) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }


        .terminal-cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @media (max-width: 1024px) {
          .about-section {
            padding: 4rem 2rem;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 3rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Category } from '../../types/portfolio.types';
import ScrambleText from '../Effects/ScrambleText';

interface ShieldContainerProps {
  isOpen: boolean;
  selectedCategory: Category | null;
  onCategorySelect: (category: Category) => void;
}

const ShieldContainer: React.FC<ShieldContainerProps> = ({
  onCategorySelect
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [titleScrambleTrigger, setTitleScrambleTrigger] = useState(false);

  // Simple fade-in animation
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(logoRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: 'power3.out',
      onComplete: () => setTitleScrambleTrigger(true)
    })
    .from('.category-card', {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.4)'
    }, '-=0.4');
  }, []);


  const categories: Array<{ id: Category; label: string; icon: string; color: string; description: string }> = [
    {
      id: 'cybersecurity',
      label: 'Cybersecurity',
      icon: '🔒',
      color: '#00ffff',
      description: 'Security tools & research'
    },
    {
      id: 'school',
      label: 'School',
      icon: '🎓',
      color: '#6366f1',
      description: 'Academic projects'
    },
    {
      id: 'bedrijf',
      label: 'Bedrijf',
      icon: '💼',
      color: '#f59e0b',
      description: 'Professional work'
    },
    {
      id: 'persoonlijk',
      label: 'Persoonlijk',
      icon: '🎨',
      color: '#ec4899',
      description: 'Personal projects'
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center py-10 md:py-20 px-4">
      <div
        ref={containerRef}
        className="relative w-full max-w-6xl"
      >
        {/* Header */}
        <div
          ref={logoRef}
          className="text-center mb-12 md:mb-16"
        >
          <div className="relative inline-block">
            <div className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                <ScrambleText
                  text="Project Portfolio"
                  scrambleSpeed={30}
                  revealSpeed={40}
                  trigger={titleScrambleTrigger}
                  autoStart={false}
                />
              </span>
            </div>
            <p className="text-slate-400 text-lg md:text-xl">
              Selecteer een categorie om projecten te bekijken
            </p>
          </div>
        </div>

        {/* Category Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className="category-card group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              style={{
                background: `linear-gradient(135deg, rgba(10, 25, 47, 0.95) 0%, rgba(17, 34, 64, 0.95) 100%)`,
                border: `2px solid ${category.color}40`,
                boxShadow: `0 4px 20px ${category.color}20`,
              }}
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: `0 0 40px ${category.color}60, inset 0 0 40px ${category.color}20`,
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="text-6xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3
                  className="text-2xl font-bold tracking-wide"
                  style={{ color: category.color }}
                >
                  {category.label}
                </h3>
                <p className="text-slate-400 text-sm">
                  {category.description}
                </p>
                <div
                  className="mt-4 px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundColor: `${category.color}20`,
                    color: category.color,
                  }}
                >
                  View Projects →
                </div>
              </div>

              {/* Animated border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${category.color}40, transparent)`,
                  animation: 'borderSlide 2s linear infinite',
                }}
              />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes borderSlide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ShieldContainer;

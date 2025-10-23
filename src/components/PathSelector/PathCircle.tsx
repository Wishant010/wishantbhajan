import React from 'react';
import { motion } from 'framer-motion';

interface PathButton {
  id: string;
  icon: string;
  label: string;
  color: string;
  angle: number;
}

interface PathCircleProps {
  paths: PathButton[];
  selectedPath: string | null;
  onPathSelect: (pathId: string) => void;
}

const PathCircle: React.FC<PathCircleProps> = ({ paths, selectedPath, onPathSelect }) => {
  const radius = 180; // Distance from center

  const getPosition = (angle: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius,
    };
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Center Portrait/Logo */}
      <motion.div
        className="absolute z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div
          className="w-32 h-32 rounded-full flex items-center justify-center text-6xl"
          style={{
            background: 'linear-gradient(135deg, #00f3ff 0%, #ff00ff 100%)',
            boxShadow: '0 0 40px rgba(0, 243, 255, 0.5), 0 0 80px rgba(255, 0, 255, 0.3)',
          }}
        >
          <span className="text-white font-bold">WB</span>
        </div>
      </motion.div>

      {/* Path Buttons */}
      {paths.map((path, index) => {
        const position = getPosition(path.angle);
        const isSelected = selectedPath === path.id;

        return (
          <motion.div
            key={path.id}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
            }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{
              x: position.x,
              y: position.y,
              opacity: selectedPath === null || isSelected ? 1 : 0.3,
              scale: selectedPath === null || isSelected ? 1 : 0.8,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100,
            }}
          >
            <motion.button
              onClick={() => onPathSelect(path.id)}
              className="relative"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Button Container */}
              <div
                className="w-32 h-32 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: isSelected ? path.color : 'rgba(15, 25, 45, 0.8)',
                  border: `2px solid ${path.color}`,
                  boxShadow: isSelected
                    ? `0 0 30px ${path.color}, 0 0 60px ${path.color}40`
                    : `0 0 15px ${path.color}40`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Icon */}
                <span className="text-4xl">{path.icon}</span>

                {/* Label */}
                <span
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{
                    color: isSelected ? '#0a0e1a' : '#fff',
                  }}
                >
                  {path.label}
                </span>
              </div>

              {/* Glow effect */}
              {isSelected && (
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle, ${path.color}40 0%, transparent 70%)`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )}
            </motion.button>
          </motion.div>
        );
      })}

      {/* Connecting Lines */}
      <svg
        className="absolute inset-0 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      >
        {paths.map((path, index) => {
          const position = getPosition(path.angle);
          const centerX = '50%';
          const centerY = '50%';

          return (
            <motion.line
              key={`line-${path.id}`}
              x1={centerX}
              y1={centerY}
              x2={`calc(50% + ${position.x}px)`}
              y2={`calc(50% + ${position.y}px)`}
              stroke={path.color}
              strokeWidth="2"
              opacity={selectedPath === null || selectedPath === path.id ? 0.3 : 0.1}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default PathCircle;

import React from 'react';
import { motion } from 'framer-motion';

export interface TimelineNodeData {
  year: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  achievements?: string[];
}

interface TimelineNodeProps {
  data: TimelineNodeData;
  index: number;
  color: string;
}

const TimelineNode: React.FC<TimelineNodeProps> = ({ data, index, color }) => {
  return (
    <motion.div
      className="relative flex gap-6 pb-12"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center">
        {/* Year Badge */}
        <motion.div
          className="relative z-10 px-4 py-2 rounded-lg font-bold text-sm mb-4"
          style={{
            backgroundColor: color,
            color: '#0a0e1a',
            boxShadow: `0 0 20px ${color}80`,
          }}
          whileHover={{ scale: 1.05 }}
        >
          {data.year}
        </motion.div>

        {/* Dot */}
        <div
          className="w-4 h-4 rounded-full relative z-10"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 15px ${color}`,
          }}
        />

        {/* Vertical Line */}
        <div
          className="w-0.5 flex-1 mt-2"
          style={{
            backgroundColor: `${color}40`,
          }}
        />
      </div>

      {/* Content Card */}
      <motion.div
        className="flex-1 rounded-xl p-6 backdrop-blur-lg"
        style={{
          backgroundColor: 'rgba(15, 25, 45, 0.6)',
          border: `1px solid ${color}40`,
        }}
        whileHover={{
          scale: 1.02,
          borderColor: `${color}80`,
          boxShadow: `0 0 30px ${color}40`,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        {data.image && (
          <motion.div
            className="mb-4 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-48 object-cover"
              style={{
                border: `2px solid ${color}40`,
              }}
            />
          </motion.div>
        )}

        {/* Title */}
        <h3
          className="text-xl font-bold mb-2"
          style={{ color }}
        >
          {data.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 mb-4 leading-relaxed">
          {data.description}
        </p>

        {/* Achievements */}
        {data.achievements && data.achievements.length > 0 && (
          <div className="mb-4 space-y-2">
            {data.achievements.map((achievement, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-2 text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + i * 0.1 }}
              >
                <span style={{ color }}>✓</span>
                <span className="text-slate-300">{achievement}</span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tags */}
        {data.tags && data.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag, i) => (
              <motion.span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `${color}20`,
                  color,
                  border: `1px solid ${color}40`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 + i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TimelineNode;

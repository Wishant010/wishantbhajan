import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TimelineNodeData {
  year: string;
  title: string;
  description: string;
  image?: string;
  imageStyle?: 'icon' | 'preview' | 'expandable';  // Hoe de foto wordt weergegeven
  tags?: string[];
  achievements?: string[];
}

interface TimelineNodeProps {
  data: TimelineNodeData;
  index: number;
  color: string;
}

const TimelineNode: React.FC<TimelineNodeProps> = ({ data, index, color }) => {
  // Alternate sides: even indices on left, odd on right
  const isLeft = index % 2 === 0;

  // State voor hover preview en pinned foto
  const [imageHovered, setImageHovered] = useState(false);
  const [imagePinned, setImagePinned] = useState(false);

  // Content Card Component (reusable for both sides)
  const ContentCard = (
    <motion.div
      className="flex-1 rounded-xl p-6"
      style={{
        backgroundColor: 'rgba(15, 25, 45, 0.7)',
        border: `1px solid ${color}40`,
      }}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{
        scale: 1.02,
        borderColor: `${color}80`,
        boxShadow: `0 0 30px ${color}40`,
        transition: { duration: 0.15 }
      }}
    >
      {/* Title met optioneel foto icoon (Optie A) */}
      <div className="flex items-center justify-between mb-2">
        <h3
          className="text-xl font-bold"
          style={{ color }}
        >
          {data.title}
        </h3>

        {/* Foto icoon naast titel (rond/cirkel vorm) */}
        {data.image && data.imageStyle === 'icon' && (
          <motion.div
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => {
              if (!imagePinned) {
                setImageHovered(false);
              }
            }}
            onClick={() => setImagePinned(!imagePinned)}
            className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ml-3 cursor-pointer relative"
            style={{
              border: `3px solid ${imagePinned ? color : `${color}60`}`,
              boxShadow: imagePinned ? `0 0 30px ${color}` : `0 0 15px ${color}40`,
            }}
            whileHover={{
              scale: 1.15,
              boxShadow: `0 0 30px ${color}`,
              borderColor: `${color}`,
              transition: { duration: 0.15 }
            }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </div>

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
              whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.15 } }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      )}
    </motion.div>
  );

  // Timeline Center Component (dot + line)
  const TimelineCenter = (
    <div className="flex flex-col items-center">
      {/* Year Badge */}
      <motion.div
        className="relative z-10 px-4 py-2 rounded-lg font-bold text-sm mb-4 whitespace-nowrap"
        style={{
          backgroundColor: color,
          color: '#0a0e1a',
          boxShadow: `0 0 20px ${color}80`,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.15 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
      >
        {data.year}
      </motion.div>

      {/* Dot */}
      <motion.div
        className="w-5 h-5 rounded-full relative z-10"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 20px ${color}, 0 0 40px ${color}80`,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
      />
    </div>
  );

  return (
    <div className="relative">
      {/* Desktop/Tablet: Zigzag layout */}
      <motion.div
        className="hidden md:grid relative grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {isLeft ? (
          <>
            <div className="relative">
              {ContentCard}
            </div>
            {TimelineCenter}
            <div /> {/* Empty space on right */}
          </>
        ) : (
          <>
            <div /> {/* Empty space on left */}
            {TimelineCenter}
            <div className="relative">
              {ContentCard}
            </div>
          </>
        )}

        {/* Hover Preview - Direct naast de card */}
        <AnimatePresence>
          {(imageHovered || imagePinned) && data.image && (
            <motion.div
              className="absolute top-0 z-50 hidden md:block"
              style={{
                left: isLeft ? 'calc(50% + 100px)' : 'auto',
                right: isLeft ? 'auto' : 'calc(50% + 100px)',
              }}
              initial={{ opacity: 0, scale: 0.9, x: isLeft ? -10 : 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: isLeft ? -10 : 10 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => {
                if (!imagePinned) {
                  setImageHovered(false);
                }
              }}
            >
              {/* Foto */}
              <div
                className="rounded-xl overflow-hidden shadow-2xl relative"
                style={{
                  border: `3px solid ${color}`,
                  boxShadow: `0 0 40px ${color}80, 0 0 60px ${color}40`,
                  width: '300px',
                  backgroundColor: 'rgba(15, 25, 45, 0.98)',
                }}
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-auto object-cover"
                  style={{
                    maxHeight: '350px',
                  }}
                />

                {/* Foto titel overlay */}
                <div
                  className="px-4 py-3"
                  style={{
                    background: `linear-gradient(to bottom, transparent, ${color}30)`,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <p
                    className="text-sm font-bold text-center"
                    style={{ color }}
                  >
                    {data.title}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Mobile: Single column layout */}
      <motion.div
        className="md:hidden relative flex gap-4 pb-12"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
      >
        <div className="flex flex-col items-center">
          {/* Year Badge */}
          <motion.div
            className="relative z-10 px-3 py-1 rounded-lg font-bold text-xs mb-3 whitespace-nowrap"
            style={{
              backgroundColor: color,
              color: '#0a0e1a',
              boxShadow: `0 0 15px ${color}80`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            {data.year}
          </motion.div>

          {/* Dot */}
          <motion.div
            className="w-4 h-4 rounded-full relative z-10"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 15px ${color}, 0 0 30px ${color}80`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
          />
        </div>

        {/* Content Card */}
        {ContentCard}
      </motion.div>
    </div>
  );
};

export default TimelineNode;

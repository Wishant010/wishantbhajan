import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lightbox from '../Lightbox';

export interface TimelineNodeData {
  year: string;
  title: string;
  description: string;
  image?: string;
  images?: string[];  // Support voor meerdere foto's
  imageStyle?: 'icon' | 'preview' | 'expandable';  // Hoe de foto wordt weergegeven
  tags?: string[];
  achievements?: string[];
  website?: string;  // Website URL om onderaan te tonen
}

interface TimelineNodeProps {
  data: TimelineNodeData;
  index: number;
  color: string;
}

const TimelineNode: React.FC<TimelineNodeProps> = ({ data, index, color }) => {
  // Alternate sides: even indices on left, odd on right
  const isLeft = index % 2 === 0;

  // State voor meerdere foto's en lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxStartIndex, setLightboxStartIndex] = useState(0);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const [hasBeenHovered, setHasBeenHovered] = useState(false);

  // Bepaal welke foto's beschikbaar zijn
  const lightboxImages = data.images || (data.image ? [data.image] : []);
  const hasMultipleImages = lightboxImages.length > 1;
  // Als er een specifiek image veld is, gebruik die voor het icoon, anders de eerste van images
  const currentImage = data.image || lightboxImages[0];

  // Helper functie om te checken of bestand een video is
  const isVideo = (url: string) => {
    return url?.toLowerCase().endsWith('.mp4') ||
           url?.toLowerCase().endsWith('.webm') ||
           url?.toLowerCase().endsWith('.ogg');
  };

  // Auto-cycle slideshow effect
  useEffect(() => {
    if (showSlideshow && hasMultipleImages) {
      const interval = setInterval(() => {
        setSlideshowIndex((prev) => (prev + 1) % lightboxImages.length);
      }, 10000); // Wissel elke 10 seconden

      return () => clearInterval(interval);
    }
    return undefined;
  }, [showSlideshow, hasMultipleImages, lightboxImages.length]);

  // Open lightbox functie
  const openLightbox = (index: number = 0) => {
    setLightboxStartIndex(index);
    setLightboxOpen(true);
  };

  // Close lightbox functie
  const closeLightbox = () => {
    setLightboxOpen(false);
    // Start slideshow na sluiten van lightbox
    if (hasMultipleImages) {
      setShowSlideshow(true);
    }
  };

  // Content Card Component (reusable for both sides)
  const ContentCard = (
    <motion.div
      className="flex-1 rounded-xl p-6 relative backdrop-blur-sm"
      style={{
        backgroundColor: 'rgba(15, 25, 45, 0.98)',
        border: `1px solid ${color}40`,
        willChange: 'transform',
        isolation: 'isolate',
      }}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{
        scale: 1.02,
        borderColor: `${color}80`,
        boxShadow: `0 0 30px ${color}40`,
        backgroundColor: 'rgba(15, 25, 45, 1)',
        y: -4,
        transition: { duration: 0.15 },
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
        {currentImage && data.imageStyle === 'icon' && (
          <motion.div
            onClick={() => openLightbox(0)}
            onMouseEnter={() => {
              if (!hasBeenHovered) {
                setHasBeenHovered(true);
                openLightbox(0);
              }
            }}
            className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 cursor-pointer relative md:hover:scale-105 ml-3"
            style={{
              border: `3px solid ${color}60`,
              boxShadow: `0 0 15px ${color}40`,
              willChange: 'transform',
            }}
            whileHover={{
              boxShadow: `0 0 30px ${color}`,
              borderColor: `${color}`,
              transition: { duration: 0.15 }
            }}
            transition={{ duration: 0.2 }}
            role="button"
            aria-label={`Bekijk ${data.title} foto's${hasMultipleImages ? ` (${lightboxImages.length} foto's)` : ''}`}
            tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(0);
              }
            }}
          >
            <img
              src={currentImage}
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
          {data.tags.map((tag, i) => {
            const isMohammad = tag === 'Mohammad Falaha';
            const isDamian = tag === 'Damian Willemse';
            const isClickable = isMohammad || isDamian;
            const TagComponent = isClickable ? motion.a : motion.span;

            let tagProps;
            if (isMohammad) {
              tagProps = {
                href: 'https://moportofolio.io/',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'px-3 py-1 rounded-full text-xs font-medium cursor-pointer',
              };
            } else if (isDamian) {
              tagProps = {
                href: 'http://www.damianwillemse.nl',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'px-3 py-1 rounded-full text-xs font-medium cursor-pointer',
              };
            } else {
              tagProps = {
                className: 'px-3 py-1 rounded-full text-xs font-medium',
              };
            }

            return (
              <TagComponent
                key={tag}
                {...tagProps}
                style={{
                  backgroundColor: `${color}20`,
                  color,
                  border: `1px solid ${color}40`,
                  willChange: 'transform',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 + i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.15 } }}
              >
                {tag}
              </TagComponent>
            );
          })}
        </div>
      )}

      {/* Website Link */}
      {data.website && (
        <motion.a
          href={data.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
          style={{
            backgroundColor: `${color}20`,
            color,
            border: `1px solid ${color}40`,
            willChange: 'transform',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.3 }}
          whileHover={{
            scale: 1.05,
            y: -2,
            backgroundColor: `${color}30`,
            borderColor: `${color}80`,
            transition: { duration: 0.15 }
          }}
        >
          {data.title}.nl →
        </motion.a>
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
          willChange: 'transform',
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
    <>
      {/* Lightbox component */}
      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxStartIndex}
          onClose={closeLightbox}
          altTexts={lightboxImages.map((_, i) => `${data.title} foto ${i + 1}`)}
          color={color}
        />
      )}

    <div className="relative" style={{ overflow: 'visible' }}>
      {/* Desktop/Tablet: Zigzag layout */}
      <motion.div
        className="hidden md:grid relative grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 pb-12"
        style={{ overflow: 'visible' }}
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
            <div className="relative flex justify-start items-start">
              {/* Slideshow preview aan de rechterkant */}
              {showSlideshow && hasMultipleImages && (
                <motion.div
                  className="rounded-xl overflow-hidden cursor-pointer"
                  style={{
                    border: `4px solid ${color}`,
                    boxShadow: `0 0 30px ${color}60`,
                    width: '100%',
                    aspectRatio: '4/3',
                  }}
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => openLightbox(slideshowIndex)}
                  whileHover={{ scale: 1.02, boxShadow: `0 0 50px ${color}` }}
                >
                  {isVideo(lightboxImages[slideshowIndex]) ? (
                    <motion.video
                      key={slideshowIndex}
                      src={lightboxImages[slideshowIndex]}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <motion.img
                      key={slideshowIndex}
                      src={lightboxImages[slideshowIndex]}
                      alt={`${data.title} ${slideshowIndex + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </motion.div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="relative flex justify-end items-start">
              {/* Slideshow preview aan de rechterkant */}
              {showSlideshow && hasMultipleImages && (
                <motion.div
                  className="rounded-xl overflow-hidden cursor-pointer relative"
                  style={{
                    border: `4px solid ${color}`,
                    boxShadow: `0 0 30px ${color}60`,
                    width: '100%',
                    aspectRatio: '4/3',
                  }}
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => openLightbox(slideshowIndex)}
                  whileHover={{ scale: 1.02, boxShadow: `0 0 50px ${color}` }}
                >
                  {isVideo(lightboxImages[slideshowIndex]) ? (
                    <motion.video
                      key={slideshowIndex}
                      src={lightboxImages[slideshowIndex]}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <motion.img
                      key={slideshowIndex}
                      src={lightboxImages[slideshowIndex]}
                      alt={`${data.title} ${slideshowIndex + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </motion.div>
              )}
            </div>
            {TimelineCenter}
            <div className="relative">
              {ContentCard}
            </div>
          </>
        )}
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
    </>
  );
};

export default TimelineNode;

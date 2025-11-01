import React, { useEffect, useState, useCallback } from 'react';
import './Lightbox.css';

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
  altTexts?: string[];
  color?: string;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  initialIndex,
  onClose,
  altTexts = [],
  color = '#0096FF'
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  // Helper functie om te checken of bestand een video is
  const isVideo = (url: string) => {
    return url.toLowerCase().endsWith('.mp4') ||
           url.toLowerCase().endsWith('.webm') ||
           url.toLowerCase().endsWith('.ogg');
  };

  // Navigatie functie
  const navigate = useCallback((direction: number) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  }, [images.length]);

  // Keyboard event handler
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        navigate(-1);
        break;
      case 'ArrowRight':
        navigate(1);
        break;
    }
  }, [navigate, onClose]);

  // Event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = '';
    };
  }, [handleKeyPress]);

  // Overlay click handler - sluit alleen bij klik op overlay
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Stop propagation voor knoppen
  const handleButtonClick = (event: React.MouseEvent, action: () => void) => {
    event.stopPropagation();
    action();
  };

  return (
    <div className="lightbox-overlay" onClick={handleOverlayClick}>
      <div className="lightbox-content">
        {/* Afbeelding wrapper met navigatie knoppen BINNEN */}
        <div className="lightbox-image-wrapper">
          {/* Vorige knop - BINNEN image wrapper */}
          {images.length > 1 && (
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => handleButtonClick(e, () => navigate(-1))}
              aria-label="Vorige afbeelding"
              style={{
                borderColor: `${color}60`,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          )}

          {/* Afbeelding of Video */}
          {isVideo(images[currentIndex]) ? (
            <video
              src={images[currentIndex]}
              className="lightbox-image"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: `0 0 50px ${color}80`,
                border: `2px solid ${color}`,
              }}
              controls
              autoPlay
              loop
            />
          ) : (
            <img
              src={images[currentIndex]}
              alt={altTexts[currentIndex] || `Afbeelding ${currentIndex + 1}`}
              className="lightbox-image"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: `0 0 50px ${color}80`,
                border: `2px solid ${color}`,
              }}
            />
          )}

          {/* Volgende knop - BINNEN image wrapper */}
          {images.length > 1 && (
            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => handleButtonClick(e, () => navigate(1))}
              aria-label="Volgende afbeelding"
              style={{
                borderColor: `${color}60`,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          )}
        </div>

        {/* Sluit knop */}
        <button
          className="lightbox-close"
          onClick={(e) => handleButtonClick(e, onClose)}
          aria-label="Sluit lightbox"
          style={{
            borderColor: `${color}60`,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Counter */}
        {images.length > 1 && (
          <div
            className="lightbox-counter"
            style={{
              borderColor: `${color}60`,
            }}
          >
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox;

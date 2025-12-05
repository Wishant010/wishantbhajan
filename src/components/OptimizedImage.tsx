/**
 * OptimizedImage Component
 * High-performance image component with lazy loading, WebP support, and placeholder
 */
import React, { useState, useRef, useEffect, memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholderColor?: string;
  priority?: boolean; // Load immediately without lazy loading
  onLoad?: () => void;
  onError?: () => void;
  sizes?: string;
  srcSet?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = memo(({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderColor = 'rgba(30, 41, 59, 0.5)',
  priority = false,
  onLoad,
  onError,
  sizes,
  srcSet,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading 100px before entering viewport
        threshold: 0.01
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate WebP source if original is jpg/png
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const hasWebpVersion = webpSrc !== src;

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        aspectRatio: width && height ? `${width}/${height}` : undefined,
        backgroundColor: !isLoaded ? placeholderColor : 'transparent',
      }}
    >
      {/* Placeholder skeleton */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 skeleton"
          style={{ backgroundColor: placeholderColor }}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800/50">
          <span className="text-slate-400 text-sm">Image unavailable</span>
        </div>
      )}

      {/* Actual image */}
      {isInView && !hasError && (
        <picture>
          {/* WebP version if available */}
          {hasWebpVersion && (
            <source srcSet={srcSet || webpSrc} type="image/webp" sizes={sizes} />
          )}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={`
              w-full h-full object-cover
              transition-opacity duration-300 ease-out
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              contentVisibility: 'auto',
            }}
            sizes={sizes}
            srcSet={srcSet}
          />
        </picture>
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;

/**
 * Hook for lazy loading any element with Intersection Observer
 */
export const useLazyLoad = (options?: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
        ...options
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
};

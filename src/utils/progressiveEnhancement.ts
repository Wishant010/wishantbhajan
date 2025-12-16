// Progressive Enhancement Utilities
import { isMobileDevice, prefersReducedMotion } from './performanceOptimization';

// Extended Navigator interface for device capabilities
interface NavigatorExtended extends Navigator {
  deviceMemory?: number;
  connection?: {
    effectiveType?: string;
  };
}

/**
 * Conditional component loader for heavy effects
 * Only loads on desktop with good performance capabilities
 */
export function shouldLoadHeavyComponent(): boolean {
  if (typeof window === 'undefined') return false;
  
  const mobile = isMobileDevice();
  const reducedMotion = prefersReducedMotion();
  const lowEnd = isLowEndDevice();
  
  return !mobile && !reducedMotion && !lowEnd;
}

/**
 * Check if device is low-end
 */
export function isLowEndDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 4;
  
  // Check device memory (if available)
  const nav = navigator as NavigatorExtended;
  const memory = nav.deviceMemory || 4;

  // Check connection speed
  const connection = nav.connection;
  const slowConnection = connection?.effectiveType === '2g' || 
                        connection?.effectiveType === 'slow-2g';
  
  return cores <= 2 || memory <= 2 || slowConnection;
}

/**
 * Get optimal particle count based on device
 */
export function getOptimalParticleCount(defaultCount: number = 100): number {
  if (isMobileDevice()) return Math.floor(defaultCount * 0.3); // 30% on mobile
  if (isLowEndDevice()) return Math.floor(defaultCount * 0.5); // 50% on low-end
  return defaultCount;
}

/**
 * Get optimal quality settings for Three.js/Canvas
 */
export function getOptimalQualitySettings() {
  const mobile = isMobileDevice();
  const lowEnd = isLowEndDevice();
  
  return {
    antialias: !mobile && !lowEnd,
    shadows: !mobile && !lowEnd,
    pixelRatio: mobile ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio,
    maxLights: mobile ? 2 : lowEnd ? 4 : 8,
    postProcessing: !mobile && !lowEnd,
  };
}

/**
 * Adaptive animation complexity
 */
export function getAnimationComplexity(): 'low' | 'medium' | 'high' {
  if (prefersReducedMotion()) return 'low';
  if (isMobileDevice()) return 'low';
  if (isLowEndDevice()) return 'medium';
  return 'high';
}

/**
 * Should enable blur effects (expensive on mobile)
 */
export function shouldEnableBlur(): boolean {
  return !isMobileDevice() || !isLowEndDevice();
}

/**
 * Should enable parallax effects
 */
export function shouldEnableParallax(): boolean {
  return !isMobileDevice() && !prefersReducedMotion();
}

/**
 * Get optimal video quality
 */
export function getOptimalVideoQuality(): '360p' | '720p' | '1080p' {
  if (isMobileDevice()) return '360p';
  if (isLowEndDevice()) return '720p';
  return '1080p';
}

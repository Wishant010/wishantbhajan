/**
 * Performance optimization utilities for high-performance animations
 */

/**
 * Debounce function to limit the rate at which a function can fire
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function to ensure a function is only called once in a specified time period
 */
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * RequestAnimationFrame wrapper for smooth animations
 */
export const rafThrottle = <T extends (...args: unknown[]) => unknown>(
  func: T
): ((...args: Parameters<T>) => void) => {
  let rafId: number | null = null;

  return function executedFunction(...args: Parameters<T>) {
    if (rafId) return;

    rafId = requestAnimationFrame(() => {
      func(...args);
      rafId = null;
    });
  };
};

/**
 * Check if device prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Check if device is mobile
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768;
};

/**
 * Check if device is touch-enabled
 */
export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore
    navigator.msMaxTouchPoints > 0
  );
};

/**
 * Get optimal animation duration based on device capabilities
 */
export const getOptimalAnimationDuration = (baseDuration: number): number => {
  if (prefersReducedMotion()) return 0;
  if (isMobileDevice()) return baseDuration * 0.7; // 30% faster on mobile
  return baseDuration;
};

/**
 * Enable hardware acceleration for an element
 */
export const enableHardwareAcceleration = (element: HTMLElement): void => {
  element.style.transform = element.style.transform || 'translateZ(0)';
  element.style.willChange = element.style.willChange || 'transform, opacity';
  element.style.backfaceVisibility = 'hidden';
  element.style.perspective = '1000px';
};

/**
 * Disable hardware acceleration for an element (cleanup)
 */
export const disableHardwareAcceleration = (element: HTMLElement): void => {
  element.style.willChange = 'auto';
};

/**
 * Lazy load images with Intersection Observer
 */
export const lazyLoadImage = (
  img: HTMLImageElement,
  src: string,
  placeholder?: string
): void => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          image.src = src;
          if (placeholder) image.classList.remove('lazy-placeholder');
          observer.unobserve(image);
        }
      });
    });

    if (placeholder) {
      img.src = placeholder;
      img.classList.add('lazy-placeholder');
    }

    observer.observe(img);
  } else {
    // Fallback for browsers without IntersectionObserver
    img.src = src;
  }
};

/**
 * Performance marks for measuring
 */
export class PerformanceTracker {
  private marks: Map<string, number> = new Map();

  mark(name: string): void {
    this.marks.set(name, performance.now());
    if (performance.mark) {
      performance.mark(name);
    }
  }

  measure(name: string, startMark: string, endMark?: string): number {
    const start = this.marks.get(startMark);
    const end = endMark ? this.marks.get(endMark) : performance.now();

    if (!start) {
      console.warn(`Start mark "${startMark}" not found`);
      return 0;
    }

    const duration = (end || performance.now()) - start;

    if (performance.measure && endMark) {
      try {
        performance.measure(name, startMark, endMark);
      } catch (_e) {
        console.warn('Performance.measure not available');
      }
    }

    return duration;
  }

  clear(name?: string): void {
    if (name) {
      this.marks.delete(name);
      if (performance.clearMarks) {
        performance.clearMarks(name);
      }
    } else {
      this.marks.clear();
      if (performance.clearMarks) {
        performance.clearMarks();
      }
      if (performance.clearMeasures) {
        performance.clearMeasures();
      }
    }
  }
}

export const performanceTracker = new PerformanceTracker();

/**
 * Check if device is low-powered (for reducing animation complexity)
 */
export const isLowPowerDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  // Check for low memory (if available)
  const nav = navigator as Navigator & { deviceMemory?: number };
  if (nav.deviceMemory && nav.deviceMemory < 4) return true;

  // Check for slow CPU (hardwareConcurrency)
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return true;

  // Mobile devices are generally lower powered
  return isMobileDevice();
};

/**
 * Cache for device capability results to avoid repeated checks
 */
const deviceCapabilityCache: {
  isMobile?: boolean;
  isLowPower?: boolean;
  prefersReducedMotion?: boolean;
  hasWebGL?: boolean;
  pixelRatio?: number;
} = {};

/**
 * Get cached device capabilities (computed once)
 */
export const getDeviceCapabilities = () => {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isLowPower: false,
      prefersReducedMotion: false,
      hasWebGL: true,
      pixelRatio: 1,
      shouldDisableHeavyAnimations: false,
      shouldDisable3D: false,
      maxParticles: 100,
      targetFPS: 60
    };
  }

  // Cache checks
  if (deviceCapabilityCache.isMobile === undefined) {
    deviceCapabilityCache.isMobile = isMobileDevice();
  }
  if (deviceCapabilityCache.isLowPower === undefined) {
    deviceCapabilityCache.isLowPower = isLowPowerDevice();
  }
  if (deviceCapabilityCache.prefersReducedMotion === undefined) {
    deviceCapabilityCache.prefersReducedMotion = prefersReducedMotion();
  }
  if (deviceCapabilityCache.hasWebGL === undefined) {
    deviceCapabilityCache.hasWebGL = checkWebGLSupport();
  }
  if (deviceCapabilityCache.pixelRatio === undefined) {
    deviceCapabilityCache.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  }

  const isMobile = deviceCapabilityCache.isMobile;
  const isLowPower = deviceCapabilityCache.isLowPower;
  const reducedMotion = deviceCapabilityCache.prefersReducedMotion;
  const hasWebGL = deviceCapabilityCache.hasWebGL;
  const pixelRatio = deviceCapabilityCache.pixelRatio;

  return {
    isMobile,
    isLowPower,
    prefersReducedMotion: reducedMotion,
    hasWebGL,
    pixelRatio,
    // Computed properties for easy conditionals
    shouldDisableHeavyAnimations: reducedMotion || isLowPower,
    shouldDisable3D: !hasWebGL || isLowPower || reducedMotion,
    maxParticles: isLowPower ? 30 : isMobile ? 50 : 100,
    targetFPS: reducedMotion ? 0 : isLowPower ? 24 : isMobile ? 30 : 60
  };
};

/**
 * Check for WebGL support
 */
export const checkWebGLSupport = (): boolean => {
  if (typeof window === 'undefined') return false;

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch {
    return false;
  }
};

/**
 * Listen for reduced motion preference changes
 */
export const onReducedMotionChange = (callback: (prefersReduced: boolean) => void): (() => void) => {
  if (typeof window === 'undefined') return () => {};

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const handler = (e: MediaQueryListEvent) => {
    deviceCapabilityCache.prefersReducedMotion = e.matches;
    callback(e.matches);
  };

  mediaQuery.addEventListener('change', handler);
  return () => mediaQuery.removeEventListener('change', handler);
};

/**
 * Intersection Observer factory with default options for lazy loading
 */
export const createLazyObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
): IntersectionObserver => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry);
        }
      });
    },
    {
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    }
  );
};

/**
 * Get optimal FPS target based on device capabilities
 */
export const getTargetFPS = (): number => {
  if (prefersReducedMotion()) return 0;
  if (isLowPowerDevice()) return 24;
  if (isMobileDevice()) return 30;
  return 60;
};

/**
 * Create a frame limiter for animation loops
 */
export const createFrameLimiter = (targetFPS: number) => {
  const frameInterval = 1000 / targetFPS;
  let lastFrameTime = 0;

  return (timestamp: number): boolean => {
    if (timestamp - lastFrameTime < frameInterval) {
      return false; // Skip frame
    }
    lastFrameTime = timestamp;
    return true; // Render frame
  };
};

/**
 * Check if animations should be paused (tab not visible)
 */
export const shouldPauseAnimations = (): boolean => {
  if (typeof document === 'undefined') return false;
  return document.hidden;
};

/**
 * Create visibility-aware animation controller
 */
export const createVisibilityController = (
  onVisible: () => void,
  onHidden: () => void
): (() => void) => {
  const handleVisibilityChange = () => {
    if (document.hidden) {
      onHidden();
    } else {
      onVisible();
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Return cleanup function
  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
};

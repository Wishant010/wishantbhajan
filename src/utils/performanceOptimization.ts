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
    // @ts-expect-error - legacy IE/Edge touch detection
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

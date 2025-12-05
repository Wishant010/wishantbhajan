/**
 * Performance optimization hooks for React components
 */
import { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { getDeviceCapabilities } from '../utils/performanceOptimization';

/**
 * Hook that returns device capabilities (cached)
 */
export const useDeviceCapabilities = () => {
  return useMemo(() => getDeviceCapabilities(), []);
};

/**
 * Hook for throttled callback
 */
export const useThrottle = <T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
): T => {
  const lastRun = useRef(Date.now());
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  return useCallback(
    ((...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastRun.current >= delay) {
        lastRun.current = now;
        callback(...args);
      } else {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          lastRun.current = Date.now();
          callback(...args);
        }, delay - (now - lastRun.current));
      }
    }) as T,
    [callback, delay]
  );
};

/**
 * Hook for debounced callback
 */
export const useDebounce = <T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
): T => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  return useCallback(
    ((...args: Parameters<T>) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    }) as T,
    [callback, delay]
  );
};

/**
 * Hook for debounced value
 */
export const useDebouncedValue = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

/**
 * Hook that pauses animations when tab is not visible
 */
export const usePageVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return isVisible;
};

/**
 * Hook for intersection observer with callback
 */
export const useIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
) => {
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(callback);
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
        ...options
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [callback, options]);

  return targetRef;
};

/**
 * Hook that returns true when element is in viewport
 */
export const useInView = (options?: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasBeenInView(true);
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
        ...options
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView, hasBeenInView };
};

/**
 * Hook for RAF-based animation loop
 */
export const useAnimationFrame = (callback: (deltaTime: number) => void, isActive = true) => {
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  useEffect(() => {
    if (!isActive) return;

    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        callback(deltaTime);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [callback, isActive]);
};

/**
 * Hook for FPS-limited animation loop
 */
export const useFPSLimitedAnimation = (
  callback: (deltaTime: number) => void,
  targetFPS: number,
  isActive = true
) => {
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>(0);
  const frameInterval = 1000 / targetFPS;

  useEffect(() => {
    if (!isActive || targetFPS <= 0) return;

    const animate = (time: number) => {
      if (time - previousTimeRef.current >= frameInterval) {
        callback(time - previousTimeRef.current);
        previousTimeRef.current = time;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [callback, targetFPS, frameInterval, isActive]);
};

/**
 * Hook that returns whether animations should be reduced
 */
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
};

/**
 * Hook for stable callback reference
 */
export const useStableCallback = <T extends (...args: unknown[]) => unknown>(callback: T): T => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  return useCallback(
    ((...args: Parameters<T>) => callbackRef.current(...args)) as T,
    []
  );
};

/**
 * Hook for previous value
 */
export const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

/**
 * Hook that returns true only on mount
 */
export const useIsFirstRender = (): boolean => {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }

  return false;
};

'use client';

import { useEffect, ReactNode, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// Enhanced responsive error fallback component
function ResponsiveErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  const [deviceInfo, setDeviceInfo] = useState({ isMobile: false, isTablet: false, breakpoint: 'lg' });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      setDeviceInfo({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        breakpoint: width < 640 ? 'xs' : width < 768 ? 'sm' : width < 1024 ? 'md' : 'lg'
      });
    }
  }, []);

  const { isMobile, isTablet, breakpoint } = deviceInfo;

  useEffect(() => {
    // Log error for monitoring
    console.error('Application Error:', {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      device: { isMobile, isTablet, breakpoint },
    });
  }, [error, isMobile, isTablet, breakpoint]);

  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className={`text-center mx-auto ${isMobile ? 'max-w-sm' : 'max-w-md'}`}>
        <div className="mb-8">
          {/* Error icon with responsive sizing */}
          <div
            className={`
              ${isMobile ? 'w-16 h-16' : isTablet ? 'w-18 h-18' : 'w-20 h-20'}
              mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse
            `}
          >
            <svg
              className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} text-red-400`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>

          <h1
            className={`${
              isMobile ? 'text-xl' : isTablet ? 'text-2xl' : 'text-2xl'
            } font-bold text-white mb-3`}
          >
            Oeps, er ging iets mis!
          </h1>

          <p
            className={`text-gray-400 mb-8 leading-relaxed ${
              isMobile ? 'text-sm' : 'text-base'
            }`}
          >
            Er is een onverwachte fout opgetreden. Dit kan komen door browser
            extensies of een tijdelijke storing. Probeer de pagina opnieuw te laden.
          </p>

          <div className="space-y-3">
            <button
              onClick={resetErrorBoundary}
              className={`
                w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium
                transition-all duration-200 transform hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900
                ${isMobile ? 'text-sm' : 'text-base'}
              `}
            >
              Probeer opnieuw
            </button>

            <button
              onClick={() => (window.location.href = '/')}
              className={`
                w-full px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900
                ${isMobile ? 'text-sm' : 'text-base'}
              `}
            >
              Ga naar homepage
            </button>
          </div>
        </div>

        {/* Development error details */}
        {isDevelopment && (
          <details className="text-left mt-8 p-4 bg-slate-800 rounded-lg border border-slate-700">
            <summary
              className={`text-red-400 cursor-pointer mb-3 font-medium select-none flex items-center gap-2 ${
                isMobile ? 'text-sm' : 'text-base'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Error Details (Development Mode)
            </summary>
            <div className="space-y-2">
              <div className="text-sm">
                <span className="text-gray-400">Message:</span>
                <pre
                  className={`text-red-300 mt-1 bg-slate-900 p-2 rounded overflow-auto ${
                    isMobile ? 'text-xs' : 'text-sm'
                  }`}
                >
                  {error.message}
                </pre>
              </div>
              <div className="text-sm">
                <span className="text-gray-400">Stack:</span>
                <pre
                  className={`text-gray-300 mt-1 bg-slate-900 p-2 rounded overflow-auto max-h-40 ${
                    isMobile ? 'text-xs' : 'text-sm'
                  }`}
                >
                  {error.stack}
                </pre>
              </div>
            </div>
          </details>
        )}
      </div>
    </div>
  );
}

// Performance monitoring component
function PerformanceMonitor({ children }: { children: ReactNode }) {
  const [deviceInfo, setDeviceInfo] = useState({ isMobile: false, isTablet: false, prefersReducedMotion: false });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      setDeviceInfo({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        prefersReducedMotion
      });
    }
  }, []);

  const { isMobile, isTablet, prefersReducedMotion } = deviceInfo;

  useEffect(() => {
    // Disable wallet extension injection conflicts
    const disableWalletInjection = () => {
      try {
        if (typeof window !== 'undefined') {
          const blockedGlobals = ['ethereum', 'phantom', 'keplr', 'web3', 'solana'];

          blockedGlobals.forEach(global => {
            if (!(global in window)) {
              try {
                Object.defineProperty(window, global, {
                  get: () => undefined,
                  set: () => false,
                  configurable: false,
                });
              } catch (_e) {
                // Silently fail
              }
            }
          });
        }
      } catch (_error) {
        // Silently ignore
      }
    };

    // Performance optimizations based on device type
    const optimizeForDevice = () => {
      if (typeof window !== 'undefined') {
        if (isMobile && !prefersReducedMotion) {
          document.documentElement.style.setProperty('--animation-duration', '0.3s');
        }

        if (isTablet) {
          document.documentElement.style.setProperty('--animation-duration', '0.5s');
        }

        if (!isMobile && !isTablet && !prefersReducedMotion) {
          document.documentElement.style.setProperty('--animation-duration', '0.8s');
        }
      }
    };

    disableWalletInjection();
    optimizeForDevice();
  }, [isMobile, isTablet, prefersReducedMotion]);

  return <>{children}</>;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <PerformanceMonitor>
      <ErrorBoundary
        FallbackComponent={ResponsiveErrorFallback}
        onError={(error, errorInfo) => {
          console.error('ErrorBoundary caught error:', error, errorInfo);
        }}
        onReset={() => {
          window.location.reload();
        }}
      >
        {children}
      </ErrorBoundary>
    </PerformanceMonitor>
  );
}

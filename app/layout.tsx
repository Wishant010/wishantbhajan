import type { Metadata, Viewport } from 'next';
import { LanguageProvider } from '../src/contexts/LanguageContext';
import '../src/index.css';
import { Providers } from './providers';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://wishantbhajan.nl'),

  title: {
    default: 'Wishant Bhajan - Full-Stack Developer & Cybersecurity Specialist',
    template: '%s | Wishant Bhajan',
  },

  description: 'Portfolio van Wishant Bhajan - Full-Stack Developer gespecialiseerd in React, Next.js, TypeScript, Three.js en Cybersecurity. Bekijk mijn projecten en expertise.',

  keywords: [
    'Wishant Bhajan',
    'Full-Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Three.js',
    'Cybersecurity',
    'Frontend Developer',
    'Backend Developer',
    'Portfolio',
    'Web Development',
    'Nederland',
    'Software Engineer',
    'Framer Motion',
    'GSAP',
    'Tailwind CSS',
  ],

  authors: [{ name: 'Wishant Bhajan', url: 'https://wishantbhajan.nl' }],
  creator: 'Wishant Bhajan',
  publisher: 'Wishant Bhajan',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  manifest: '/manifest.json',

  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://wishantbhajan.nl',
    siteName: 'Wishant Bhajan Portfolio',
    title: 'Wishant Bhajan - Full-Stack Developer & Cybersecurity Specialist',
    description: 'Portfolio van Wishant Bhajan - Full-Stack Developer gespecialiseerd in React, Next.js, TypeScript, Three.js en Cybersecurity.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wishant Bhajan Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Wishant Bhajan - Full-Stack Developer & Cybersecurity Specialist',
    description: 'Portfolio van Wishant Bhajan - Full-Stack Developer gespecialiseerd in React, Next.js, TypeScript, Three.js en Cybersecurity.',
    images: ['/og-image.png'],
    creator: '@wishantbhajan',
  },

  alternates: {
    canonical: 'https://wishantbhajan.nl',
  },

  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Wishant Bhajan',
    jobTitle: 'Full-Stack Developer & Cybersecurity Specialist',
    url: 'https://wishantbhajan.nl',
    sameAs: [
      'https://github.com/Wishant010',
      'https://linkedin.com/in/wishant-bhajan',
    ],
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Three.js',
      'Cybersecurity',
      'Full-Stack Development',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Educational Institution',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL',
    },
  };

  return (
    <html lang="nl">
      <head>
        {/* Font preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Optimized font loading with display=swap */}
        <link 
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet"
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <Providers>
            {children}
          </Providers>
        </LanguageProvider>
      </body>
    </html>
  );
}

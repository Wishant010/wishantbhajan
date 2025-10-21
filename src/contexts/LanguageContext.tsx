import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'nl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  nl: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'Over Mij',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.welcome': 'Welkom in mijn',
    'hero.portfolio': 'digitale portfolio',
    'hero.role1': 'Full Stack Developer',
    'hero.role2': 'UI/UX Enthusiast',
    'hero.role3': 'Cybersecurity Enthusiast',
    'hero.description1': 'Ik transformeer ideeën naar',
    'hero.description1.highlight': 'digitale realiteit',
    'hero.description2': 'Als IT-student en passionate developer bouw ik moderne webapplicaties die niet alleen mooi zijn, maar ook',
    'hero.description2.highlight': 'innovatief en gebruiksvriendelijk',
    'hero.description3': 'Gespecialiseerd in React, TypeScript, Node.js en moderne web technologieën.',
    'hero.downloadCV': 'Download CV',
    'hero.follow': 'Te vinden op:',

    // About Section
    'about.title': 'Over Mij',
    'about.subtitle': 'Met een passie voor technologie en innovatie, ontwikkel ik moderne webapplicaties die gebruikerservaring en functionaliteit perfect combineren.',
    'about.frontend': 'Frontend Development',
    'about.frontend.desc': 'React, TypeScript, Next.js, Tailwind CSS',
    'about.backend': 'Backend Development',
    'about.backend.desc': 'Node.js, Python, Databases, API Design',
    'about.uiux': 'UI/UX Design',
    'about.uiux.desc': 'Figma, Prototyping, User Research, Design Systems',
    'about.projects': 'Projects',
    'about.projects.desc': 'Ontdek mijn innovatieve projecten van e-commerce platforms tot portfolio dashboards.',
    'about.experience': 'Experience',
    'about.experience.desc': 'Jaren ervaring in het bouwen van schaalbare webapplicaties met moderne technologieën.',
    'about.passion': 'Passion',
    'about.passion.desc': 'Gedreven door perfectie en altijd op zoek naar nieuwe uitdagingen in de digitale wereld.',
    'about.tech': 'Technologieën & Tools',

    // Skills Section
    'skills.title': 'Mijn Skills',
    'skills.subtitle': 'Een overzicht van mijn technische vaardigheden en expertise in verschillende gebieden van softwareontwikkeling.',
    'skills.learning.title': 'Altijd Leren & Groeien',
    'skills.learning.desc': 'Technologie evolueert constant, en ik ook. Ik ben altijd bezig met het leren van nieuwe frameworks, tools en best practices om voorop te blijven lopen in de wereld van webontwikkeling.',

    // Portfolio Section
    'portfolio.title': 'Mijn Portfolio',
    'portfolio.subtitle': 'Een selectie van mijn meest recente en innovatieve projecten die moderne technologieën en creatieve oplossingen combineren.',
    'portfolio.featured': 'Featured Projects',
    'portfolio.other': 'Andere Projecten',
    'portfolio.keyFeatures': 'Key Features:',
    'portfolio.viewProject': 'View Project',
    'portfolio.cta.title': 'Geïnteresseerd in samenwerking?',
    'portfolio.cta.subtitle': 'Laten we samen iets geweldigs bouwen. Neem contact op voor meer informatie over mijn projecten.',
    'portfolio.cta.button': 'Bekijk Alle Projecten',

    // Contact Section
    'contact.title': 'Laten we samenwerken',
    'contact.subtitle': 'Heb je een interessant project, een vraag over mijn werk, of wil je gewoon een gesprek? Ik hoor graag van je en ben altijd open voor nieuwe uitdagingen!',
    'contact.form.title': 'Stuur een bericht',
    'contact.form.name': 'Naam',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Onderwerp',
    'contact.form.message': 'Bericht',
    'contact.form.send': 'Verstuur Bericht',
    'contact.info': 'Contact Informatie',
    'contact.email': 'Email',
    'contact.email.desc': 'Voor projecten en samenwerking',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedin.desc': 'Professioneel netwerk',
    'contact.github': 'GitHub',
    'contact.github.desc': 'Bekijk mijn code',
    'contact.availability': 'Beschikbaarheid',
    'contact.available': 'Beschikbaar voor nieuwe projecten',
    'contact.available.desc': 'Ik reageer meestal binnen 24 uur op berichten en ben altijd geïnteresseerd in uitdagende projecten.',
    'contact.expect': 'Wat kun je verwachten?',
    'contact.expect1': 'Snelle en professionele reactie',
    'contact.expect2': 'Transparante communicatie over project scope',
    'contact.expect3': 'Hoge kwaliteit code en design',
    'contact.expect4': 'Ondersteuning na oplevering',
    'contact.cta.title': 'Klaar om je idee werkelijkheid te maken?',
    'contact.cta.subtitle': 'Van concept tot realisatie - laten we samen iets geweldigs bouwen dat impact maakt.',
    'contact.cta.start': 'Start een Project',
    'contact.cta.portfolio': 'Bekijk Portfolio',

    // Footer Section
    'footer.description': 'Full Stack Developer met passie voor innovatieve digitale oplossingen en moderne webontwikkeling.',
    'footer.quickLinks': 'Quick Links',
    'footer.technologies': 'Technologies',
    'footer.copyright': '© 2025 Wishant Bhajan. Alle rechten voorbehouden.',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.welcome': 'Welcome to my',
    'hero.portfolio': 'digital portfolio',
    'hero.role1': 'Full Stack Developer',
    'hero.role2': 'UI/UX Enthusiast',
    'hero.role3': 'Cybersecurity Enthusiast',
    'hero.description1': 'I transform ideas into',
    'hero.description1.highlight': 'digital reality',
    'hero.description2': 'As an IT student and passionate developer, I build modern web applications that are not only beautiful, but also',
    'hero.description2.highlight': 'innovative and user-friendly',
    'hero.description3': 'Specialized in React, TypeScript, Node.js and modern web technologies.',
    'hero.downloadCV': 'Download CV',
    'hero.follow': 'Find me on:',

    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'With a passion for technology and innovation, I develop modern web applications that perfectly combine user experience and functionality.',
    'about.frontend': 'Frontend Development',
    'about.frontend.desc': 'React, TypeScript, Next.js, Tailwind CSS',
    'about.backend': 'Backend Development',
    'about.backend.desc': 'Node.js, Python, Databases, API Design',
    'about.uiux': 'UI/UX Design',
    'about.uiux.desc': 'Figma, Prototyping, User Research, Design Systems',
    'about.projects': 'Projects',
    'about.projects.desc': 'Discover my innovative projects from e-commerce platforms to portfolio dashboards.',
    'about.experience': 'Experience',
    'about.experience.desc': 'Years of experience building scalable web applications with modern technologies.',
    'about.passion': 'Passion',
    'about.passion.desc': 'Driven by perfection and always looking for new challenges in the digital world.',
    'about.tech': 'Technologies & Tools',

    // Skills Section
    'skills.title': 'My Skills',
    'skills.subtitle': 'An overview of my technical skills and expertise in various areas of software development.',
    'skills.learning.title': 'Always Learning & Growing',
    'skills.learning.desc': 'Technology is constantly evolving, and so am I. I am always learning new frameworks, tools and best practices to stay ahead in the world of web development.',

    // Portfolio Section
    'portfolio.title': 'My Portfolio',
    'portfolio.subtitle': 'A selection of my most recent and innovative projects that combine modern technologies and creative solutions.',
    'portfolio.featured': 'Featured Projects',
    'portfolio.other': 'Other Projects',
    'portfolio.keyFeatures': 'Key Features:',
    'portfolio.viewProject': 'View Project',
    'portfolio.cta.title': 'Interested in collaboration?',
    'portfolio.cta.subtitle': "Let's build something amazing together. Contact me for more information about my projects.",
    'portfolio.cta.button': 'View All Projects',

    // Contact Section
    'contact.title': "Let's work together",
    'contact.subtitle': 'Have an interesting project, a question about my work, or just want to chat? I would love to hear from you and am always open to new challenges!',
    'contact.form.title': 'Send a message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.email.desc': 'For projects and collaboration',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedin.desc': 'Professional network',
    'contact.github': 'GitHub',
    'contact.github.desc': 'View my code',
    'contact.availability': 'Availability',
    'contact.available': 'Available for new projects',
    'contact.available.desc': 'I usually respond within 24 hours and am always interested in challenging projects.',
    'contact.expect': 'What can you expect?',
    'contact.expect1': 'Fast and professional response',
    'contact.expect2': 'Transparent communication about project scope',
    'contact.expect3': 'High quality code and design',
    'contact.expect4': 'Support after delivery',
    'contact.cta.title': 'Ready to bring your idea to life?',
    'contact.cta.subtitle': 'From concept to realization - let\'s build something amazing together that makes an impact.',
    'contact.cta.start': 'Start a Project',
    'contact.cta.portfolio': 'View Portfolio',

    // Footer Section
    'footer.description': 'Full Stack Developer with a passion for innovative digital solutions and modern web development.',
    'footer.quickLinks': 'Quick Links',
    'footer.technologies': 'Technologies',
    'footer.copyright': '© 2025 Wishant Bhajan. All rights reserved.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'nl') ? saved : 'nl';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['nl']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

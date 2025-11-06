import { CategoryConfig } from '../types/portfolio.types';

export const portfolioData: CategoryConfig[] = [
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    icon: "🔒",
    color: "#00ffff",
    gradient: ["#00ffff", "#00ff88"],
    projects: [
      {
        id: "wishshield",
        title: "WishShield Security Scanner",
        description: "Advanced vulnerability assessment tool focusing on OWASP Top 10 security risks",
        category: "cybersecurity",
        thumbnail: "/projects/security-scanner.jpg",
        technologies: ["Python", "Flask", "OWASP", "Security", "Penetration Testing"],
        links: {
          github: "https://github.com/wishantbhajan",
        },
        featured: true,
        details: "Comprehensive security scanner with automated reporting and CI/CD integration"
      },
      {
        id: "homelab",
        title: "Home Lab Security Environment",
        description: "Personal cybersecurity lab for testing and learning",
        category: "cybersecurity",
        thumbnail: "/projects/homelab.jpg",
        technologies: ["Linux", "Docker", "Networking", "Security Tools"],
        links: {},
        featured: true,
        details: "Complete home lab setup for security research and experimentation"
      },
      {
        id: "hackthebox",
        title: "Hack The Box Challenges",
        description: "Collection of completed HTB challenges and writeups",
        category: "cybersecurity",
        thumbnail: "/projects/htb.jpg",
        technologies: ["Ethical Hacking", "CTF", "Penetration Testing"],
        links: {},
        featured: false,
        details: "Various HTB challenges completed with detailed documentation"
      }
    ]
  },
  {
    id: "school",
    label: "School",
    icon: "🎓",
    color: "#6366f1",
    gradient: ["#6366f1", "#8b5cf6"],
    projects: [
      {
        id: "mendix-ctf",
        title: "Mendix CTF Challenges",
        description: "Security challenges and XAS API exploitation exercises",
        category: "school",
        thumbnail: "/projects/mendix.jpg",
        technologies: ["Mendix", "XAS API", "Security", "Low-Code"],
        links: {
          case_study: "#"
        },
        featured: true,
        details: "Advanced Mendix security analysis and API exploitation"
      },
      {
        id: "school-projects",
        title: "HBO ICT Projects",
        description: "Collection of school projects from Informatica study",
        category: "school",
        thumbnail: "/projects/school.jpg",
        technologies: ["Python", "C#", "React", "TypeScript", "Databases"],
        links: {},
        featured: false,
        details: "Various projects completed during HBO ICT Informatica program"
      }
    ]
  },
  {
    id: "bedrijf",
    label: "Bedrijf",
    icon: "💼",
    color: "#f59e0b",
    gradient: ["#f59e0b", "#ef4444"],
    projects: [
      {
        id: "tabletech",
        title: "TableTech",
        description: "Restaurant digitalization software with custom solutions for businesses",
        category: "bedrijf",
        thumbnail: "/over-mij/bedrijven-pad/tableTech.png",
        technologies: ["React", "TypeScript", "Node.js", "Restaurant Software"],
        links: {
          demo: "https://tabletech.nl"
        },
        featured: true,
        details: "Complete restaurant management system with POS integration"
      },
      {
        id: "wishweb",
        title: "WishWeb",
        description: "Web development agency creating websites for businesses",
        category: "bedrijf",
        thumbnail: "/projects/wishweb.jpg",
        technologies: ["React", "Next.js", "TypeScript", "Web Design"],
        links: {
          demo: "https://wishweb.nl"
        },
        featured: true,
        details: "Professional web development services for SMEs"
      },
      {
        id: "rdam-app",
        title: "Rotterdam App",
        description: "Innovative mobile application for Rotterdam (Coming Soon)",
        category: "bedrijf",
        thumbnail: "/projects/rdam.jpg",
        technologies: ["React Native", "TypeScript", "Mobile", "Innovation"],
        links: {},
        featured: false,
        details: "Revolutionary app for Rotterdam citizens - in development"
      }
    ]
  },
  {
    id: "persoonlijk",
    label: "Persoonlijk",
    icon: "🎨",
    color: "#ec4899",
    gradient: ["#ec4899", "#8b5cf6"],
    projects: [
      {
        id: "portfolio",
        title: "Personal Portfolio",
        description: "This website - showcasing my work and skills",
        category: "persoonlijk",
        thumbnail: "/projects/portfolio.jpg",
        technologies: ["React", "TypeScript", "GSAP", "Tailwind CSS", "Framer Motion"],
        links: {
          github: "https://github.com/wishantbhajan",
          demo: "https://wishantbhajan.nl"
        },
        featured: true,
        details: "Interactive portfolio with advanced animations and modern design"
      },
      {
        id: "crypto-experiments",
        title: "Crypto & AI Experiments",
        description: "Personal projects exploring cryptocurrency and AI technologies",
        category: "persoonlijk",
        thumbnail: "/projects/crypto-ai.jpg",
        technologies: ["Python", "AI", "Machine Learning", "APIs"],
        links: {
          github: "https://github.com/wishantbhajan"
        },
        featured: true,
        details: "Various experiments with AI models and crypto technologies"
      }
    ]
  }
];

export interface EventPost {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  image?: string;
  description: string;
  highlights: string[];
  tags: string[];
  featured?: boolean;
}

export const eventPosts: EventPost[] = [
  {
    id: "hackathon-2024",
    title: "Dutch Blockchain Hackathon 2024",
    date: "15-17 Maart 2024",
    location: "Amsterdam, Nederland",
    category: "Hackathon",
    description: "Een intense 48-uur durende blockchain hackathon waar ik samen met mijn team een gedecentraliseerde supply chain oplossing ontwikkelde. We gebruikten Ethereum smart contracts en IPFS voor data opslag.",
    highlights: [
      "2e plaats behaald uit 50+ teams",
      "Gebouwd met Solidity, React en Web3.js",
      "Pitch presentatie voor industry experts",
      "Netwerken met blockchain developers"
    ],
    tags: ["Blockchain", "Web3", "Solidity", "React", "Hackathon"],
    featured: true
  },
  {
    id: "react-summit-2024",
    title: "React Summit Amsterdam",
    date: "2-3 Juni 2024",
    location: "Amsterdam, Nederland",
    category: "Conference",
    description: "Deelgenomen aan één van Europa's grootste React conferences. Bijgewoond workshops over Server Components, nieuwe React hooks en performance optimalisatie technieken.",
    highlights: [
      "Workshops over React 19 features",
      "Networking met 2000+ developers",
      "Live coding sessions met React core team",
      "Hands-on met Next.js 14"
    ],
    tags: ["React", "Next.js", "JavaScript", "Frontend", "Conference"],
    featured: true
  },
  {
    id: "ai-ml-workshop",
    title: "AI & Machine Learning Workshop",
    date: "10 September 2024",
    location: "Utrecht, Nederland",
    category: "Workshop",
    description: "Intensieve workshop over het implementeren van machine learning modellen in webapplicaties. Geleerd over TensorFlow.js en het bouwen van real-time AI features.",
    highlights: [
      "Hands-on met TensorFlow.js",
      "Building ML-powered web apps",
      "Computer vision projects",
      "NLP implementaties"
    ],
    tags: ["AI", "Machine Learning", "TensorFlow", "Python", "Workshop"]
  },
  {
    id: "cybersec-conf-2023",
    title: "CyberSec Netherlands 2023",
    date: "5-6 December 2023",
    location: "Rotterdam, Nederland",
    category: "Conference",
    description: "Bijgewoond aan nationale cybersecurity conference met focus op web application security, penetration testing en secure coding practices.",
    highlights: [
      "OWASP Top 10 deep dive",
      "Live penetration testing demos",
      "Security best practices voor React apps",
      "Networking met security professionals"
    ],
    tags: ["Cybersecurity", "OWASP", "Penetration Testing", "Security", "Conference"],
    featured: false
  },
  {
    id: "devops-meetup",
    title: "DevOps Amsterdam Meetup",
    date: "20 Juli 2024",
    location: "Amsterdam, Nederland",
    category: "Meetup",
    description: "Maandelijkse DevOps meetup met focus op CI/CD pipelines, containerization met Docker en Kubernetes orchestration.",
    highlights: [
      "Hands-on Docker & Kubernetes",
      "CI/CD pipeline optimization",
      "Infrastructure as Code",
      "Cloud deployment strategies"
    ],
    tags: ["DevOps", "Docker", "Kubernetes", "CI/CD", "Meetup"]
  },
  {
    id: "ux-design-sprint",
    title: "UX Design Sprint Workshop",
    date: "15 Mei 2024",
    location: "Den Haag, Nederland",
    category: "Workshop",
    description: "Vijf-daagse Google Design Sprint workshop waar we een compleet product van idee tot prototype hebben gebouwd. Focus op user research, rapid prototyping en usability testing.",
    highlights: [
      "Complete Design Sprint process",
      "User interviews & research",
      "Rapid prototyping in Figma",
      "Usability testing sessies"
    ],
    tags: ["UX Design", "Prototyping", "Figma", "User Research", "Workshop"],
    featured: false
  },
  {
    id: "web3-summit",
    title: "Web3 Summit Europe",
    date: "22-24 Augustus 2024",
    location: "Berlin, Duitsland",
    category: "Conference",
    description: "Internationale conference over de toekomst van het gedecentraliseerde web. Sessies over DeFi, NFTs, DAOs en de nieuwste ontwikkelingen in de Web3 space.",
    highlights: [
      "Keynotes van Ethereum founders",
      "DeFi protocol workshops",
      "NFT marketplace development",
      "DAO governance systemen"
    ],
    tags: ["Web3", "DeFi", "NFT", "Ethereum", "Conference"],
    featured: true
  },
  {
    id: "typescript-workshop",
    title: "Advanced TypeScript Workshop",
    date: "8 November 2024",
    location: "Online",
    category: "Workshop",
    description: "Diepgaande workshop over advanced TypeScript patterns, generics, type inference en het bouwen van type-safe applicaties.",
    highlights: [
      "Advanced type patterns",
      "Generic constraints & inference",
      "Type guards & assertions",
      "Building type-safe APIs"
    ],
    tags: ["TypeScript", "JavaScript", "Type Safety", "Workshop"]
  }
];

export const eventCategories = [
  "Alle",
  "Hackathon",
  "Conference",
  "Workshop",
  "Meetup"
];

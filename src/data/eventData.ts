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
    id: "mendix-ctf-2025",
    title: "Mendix CTF 2025",
    date: "2025",
    location: "Nederland",
    category: "Hackathon",
    image: "/events/MendixCTF2025.webp",
    description: "Capture The Flag competitie georganiseerd door Mendix. Een spannende cybersecurity challenge waar deelnemers hun hacking skills testen door puzzels en kwetsbaarheden op te lossen.",
    highlights: [
      "Cybersecurity challenges oplossen",
      "Reverse engineering en cryptografie",
      "Web application security testing",
      "Competitief hacken met andere developers"
    ],
    tags: ["CTF", "Cybersecurity", "Hacking", "Mendix", "Competition"],
    featured: true
  },
  {
    id: "xebia-github-copilot-hackathon",
    title: "Xebia GitHub Copilot Hackathon",
    date: "2025",
    location: "Nederland",
    category: "Hackathon",
    image: "/events/XebiaGithubCopilotHackathon.jpeg",
    description: "Hackathon georganiseerd door Xebia met focus op het bouwen van innovatieve oplossingen met behulp van GitHub Copilot AI. Experimenteren met AI-assisted development.",
    highlights: [
      "AI-assisted coding met GitHub Copilot",
      "Innovatieve projecten bouwen",
      "Samenwerken met Xebia experts",
      "Leren over AI in software development"
    ],
    tags: ["AI", "GitHub Copilot", "Hackathon", "Xebia", "Development"],
    featured: true
  },
  {
    id: "ai-fixathon-amsterdam",
    title: "AI Fixathon Amsterdam",
    date: "2025",
    location: "Amsterdam, Nederland",
    category: "Hackathon",
    image: "/events/AIFixathonAmsterdam.jpg",
    description: "Een unieke hackathon gericht op het oplossen van maatschappelijke problemen met behulp van AI en machine learning technologieën.",
    highlights: [
      "AI oplossingen voor real-world problemen",
      "Machine learning implementaties",
      "Samenwerking met AI experts",
      "Impact-driven development"
    ],
    tags: ["AI", "Machine Learning", "Hackathon", "Amsterdam", "Innovation"],
    featured: true
  },
  {
    id: "apify-challenge",
    title: "Apify Challenge",
    date: "2025",
    location: "Online",
    category: "Hackathon",
    image: "/events/ApifyChallenge.jpeg",
    description: "Web scraping en automatisering challenge georganiseerd door Apify. Bouwen van actors en crawlers om data van het web te verzamelen en te verwerken.",
    highlights: [
      "Web scraping technieken leren",
      "Apify platform beheersen",
      "Data extraction & automation",
      "Building scalable crawlers"
    ],
    tags: ["Web Scraping", "Automation", "Apify", "Data", "Challenge"],
    featured: false
  },
  {
    id: "build-weekend-young-creators",
    title: "Build Weekend by Young Creators",
    date: "2025",
    location: "Nederland",
    category: "Hackathon",
    image: "/events/buildweekendbyyoungcreators.png",
    description: "Een weekend lang bouwen en creëren met andere jonge developers en creators. Focus op het van idee naar werkend product brengen in korte tijd.",
    highlights: [
      "Van idee naar prototype in een weekend",
      "Samenwerken met jonge creators",
      "Pitchen voor jury",
      "Netwerken met gelijkgestemden"
    ],
    tags: ["Startup", "Building", "Young Creators", "Hackathon", "Innovation"],
    featured: false
  },
  {
    id: "agency-at-night",
    title: "Agency at Night",
    date: "2025",
    location: "Nederland",
    category: "Meetup",
    image: "/events/AgencyAtNight.png",
    description: "Networking event voor developers en designers in de agency wereld. Een avond vol kennisdeling, inspiratie en het leggen van nieuwe connecties.",
    highlights: [
      "Netwerken met agency professionals",
      "Kennisdeling over digitale projecten",
      "Inspirerende talks",
      "Nieuwe connecties leggen"
    ],
    tags: ["Networking", "Agency", "Meetup", "Design", "Development"],
    featured: false
  },
  {
    id: "citylab010-netwerkavond",
    title: "Citylab010 Netwerkavond",
    date: "2025",
    location: "Rotterdam, Nederland",
    category: "Meetup",
    image: "/events/Citylab010Netwerkavond.jpg",
    description: "Netwerkavond georganiseerd door Citylab010 in Rotterdam. Ontmoeten van innovators, ondernemers en tech professionals uit de regio.",
    highlights: [
      "Rotterdam tech community",
      "Innovatie en ondernemerschap",
      "Lokale startups ontmoeten",
      "Citylab010 initiatieven"
    ],
    tags: ["Networking", "Rotterdam", "Innovation", "Citylab010", "Meetup"],
    featured: false
  },
  {
    id: "computational-science-nl",
    title: "Computational Science NL",
    date: "2025",
    location: "Nederland",
    category: "Conference",
    image: "/events/ComputationalScienceNL.jpg",
    description: "Conference over computational science en wetenschappelijk programmeren. Sessies over simulaties, data analysis en high-performance computing.",
    highlights: [
      "Wetenschappelijk programmeren",
      "Data science toepassingen",
      "High-performance computing",
      "Academische netwerkmogelijkheden"
    ],
    tags: ["Computational Science", "Data Science", "HPC", "Research", "Conference"],
    featured: false
  }
];

export const eventCategories = [
  "Alle",
  "Hackathon",
  "Conference",
  "Workshop",
  "Meetup"
];

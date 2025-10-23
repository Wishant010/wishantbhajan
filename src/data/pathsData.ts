import { TimelineNodeData } from '../components/PathSelector/TimelineNode';

export interface PathData {
  id: string;
  icon: string;
  label: string;
  color: string;
  angle: number;
  timeline: TimelineNodeData[];
}

export const pathsData: PathData[] = [
  {
    id: 'student',
    icon: '📚',
    label: 'Student',
    color: '#3B82F6', // Professional blue
    angle: -90, // Top
    timeline: [
      {
        year: '2020',
        title: 'HBO-ICT Start',
        description:
          'Begonnen met mijn studie HBO-ICT aan de Hogeschool Rotterdam. Eerste kennismaking met programmeren en webontwikkeling.',
        achievements: [
          'Ingeschreven bij Hogeschool Rotterdam',
          'Basis programmeren geleerd (Java, Python)',
          'Eerste HTML/CSS projecten',
        ],
        tags: ['Java', 'Python', 'HTML', 'CSS'],
      },
      {
        year: '2021',
        title: 'React & TypeScript',
        description:
          'Verdiept in moderne webontwikkeling. Eerste grote projecten met React en TypeScript gebouwd.',
        achievements: [
          'React fundamentals gecertificeerd',
          'TypeScript Expert level bereikt',
          'Eerste portfolio website gebouwd',
        ],
        tags: ['React', 'TypeScript', 'JavaScript', 'Git'],
      },
      {
        year: '2022',
        title: 'Backend & Security',
        description:
          'Focus op backend development en cybersecurity. Databases, API\'s en beveiligingsconcepten onder de knie gekregen.',
        achievements: [
          'Node.js & Express mastered',
          'PostgreSQL & MongoDB ervaring',
          'Security fundamentals gecertificeerd',
        ],
        tags: ['Node.js', 'PostgreSQL', 'Security', 'REST APIs'],
      },
      {
        year: '2023',
        title: 'Stage Full Stack Developer',
        description:
          'Stage gelopen als Full Stack Developer bij een innovatief tech bedrijf. Real-world ervaring opgedaan met grootschalige applicaties.',
        achievements: [
          '6 maanden stage succesvol afgerond',
          'Production-ready features gebouwd',
          'Agile/Scrum team ervaring',
        ],
        tags: ['Full Stack', 'Agile', 'Docker', 'AWS'],
      },
      {
        year: '2024',
        title: 'Thesis & Afstuderen',
        description:
          'Bezig met afstuderen. Thesis over Security in Modern Web Applications. Bijna klaar om de tech wereld te veroveren!',
        achievements: [
          'Thesis research afgerond',
          'Advanced cybersecurity modules',
          'Voorbereidingen voor graduation',
        ],
        tags: ['Research', 'Cybersecurity', 'Thesis', 'Graduation'],
      },
    ],
  },
  {
    id: 'business',
    icon: '💼',
    label: 'Bedrijf',
    color: '#8B5CF6', // Professional purple
    angle: 0, // Right
    timeline: [
      {
        year: '2022',
        title: 'Eerste Freelance Project',
        description:
          'Gestart met freelance werk naast studie. Eerste website gebouwd voor een lokale ondernemer.',
        achievements: [
          'Eerste betaalde project afgerond',
          'Client management skills ontwikkeld',
          'Portfolio opgebouwd',
        ],
        tags: ['Freelance', 'Web Design', 'Client Work'],
      },
      {
        year: '2023',
        title: 'Side-Business Gestart',
        description:
          'Officieel gestart met eigen side-business. Websites en apps bouwen voor kleine bedrijven en startups.',
        achievements: [
          'KVK registratie afgerond',
          '3 succesvolle projecten opgeleverd',
          'Eerste terugkerende klant',
        ],
        tags: ['Entrepreneurship', 'Business', 'Startups'],
      },
      {
        year: '2024',
        title: '5+ Tevreden Clients',
        description:
          'Business groeit gestaag. Meerdere klanten geholpen met hun digitale transformatie. Focus op kwaliteit en innovatie.',
        achievements: [
          '5+ succesvolle projecten',
          '100% client satisfaction rate',
          'Specialisatie in modern web apps',
        ],
        tags: ['Growth', 'Client Success', 'Innovation'],
      },
      {
        year: '2025',
        title: 'Scaling Plans',
        description:
          'Plannen om de business uit te breiden. Mogelijk een team opbouwen en grotere projecten aannemen.',
        achievements: [
          'Business strategie ontwikkeld',
          'Netwerk uitgebreid',
          'Nieuwe partnerships in de maak',
        ],
        tags: ['Scaling', 'Strategy', 'Team Building'],
      },
    ],
  },
  {
    id: 'work',
    icon: '💻',
    label: 'Werk',
    color: '#10B981', // Professional green
    angle: 90, // Bottom
    timeline: [
      {
        year: '2021',
        title: 'Junior Developer',
        description:
          'Eerste professionele rol als Junior Developer. Geleerd hoe professionele softwareontwikkeling werkt in een team.',
        achievements: [
          'Eerste professionele code review',
          'Git workflow mastered',
          'Team collaboration skills',
        ],
        tags: ['Junior Dev', 'Team Work', 'Learning'],
      },
      {
        year: '2022',
        title: 'Frontend Developer',
        description:
          'Doorgegroeid naar Frontend Developer rol. Focus op React en moderne frontend technologieën.',
        achievements: [
          'Lead developer op 2 projecten',
          'Component library opgezet',
          'Performance optimalisaties',
        ],
        tags: ['React', 'Frontend', 'UI/UX', 'Performance'],
      },
      {
        year: '2023',
        title: 'Full Stack Developer',
        description:
          'Volledige Full Stack rol. Zowel frontend als backend verantwoordelijkheden. Grotere technische uitdagingen.',
        achievements: [
          'Full ownership van features',
          'Database design & optimization',
          'API architecture design',
        ],
        tags: ['Full Stack', 'APIs', 'Databases', 'Architecture'],
      },
      {
        year: '2024',
        title: 'Lead Developer',
        description:
          'Gepromoveerd naar Lead Developer. Verantwoordelijk voor technische beslissingen en mentoring van junior developers.',
        achievements: [
          '2 junior developers gementord',
          'Tech stack modernisatie geleid',
          'Code quality standards opgezet',
        ],
        tags: ['Leadership', 'Mentoring', 'Tech Lead', 'Strategy'],
      },
    ],
  },
  {
    id: 'life',
    icon: '🎮',
    label: 'Leven',
    color: '#F59E0B', // Professional amber/orange
    angle: 180, // Left
    timeline: [
      {
        year: 'Hobbies',
        title: 'Gaming & Tech Enthusiast',
        description:
          'Passie voor gaming sinds jong. Van casual gaming tot competitive esports. Ook grote interesse in de nieuwste tech gadgets.',
        achievements: [
          'PC gebouwd van scratch',
          'Deel van gaming community',
          'Tech reviewer hobbyist',
        ],
        tags: ['Gaming', 'PC Building', 'Tech', 'Community'],
      },
      {
        year: 'Passies',
        title: 'Cybersecurity & AI',
        description:
          'Gefascineerd door cybersecurity en artificial intelligence. Altijd bezig om nieuwe ontwikkelingen te volgen en zelf te experimenteren.',
        achievements: [
          'CTF competitions deelgenomen',
          'AI/ML modellen getraind',
          'Security research projecten',
        ],
        tags: ['Cybersecurity', 'AI', 'Machine Learning', 'Research'],
      },
      {
        year: 'Creativiteit',
        title: 'Fotografie & Design',
        description:
          'Creatieve uitlaatklep naast programmeren. Fotografie en grafisch design helpen me om anders naar problemen te kijken.',
        achievements: [
          'Portfolio van 100+ foto\'s',
          'Design skills toegepast in projecten',
          'Instagram community opgebouwd',
        ],
        tags: ['Photography', 'Design', 'Creativity', 'Visual Arts'],
      },
      {
        year: 'Lifestyle',
        title: 'Fitness & Balance',
        description:
          'Work-life balance is belangrijk. Fitness helpt me scherp te blijven. Cycling voor ontspanning en avontuur.',
        achievements: [
          'Regelmatig fitness routine',
          'Meerdere cycling routes verkend',
          'Healthy lifestyle maintained',
        ],
        tags: ['Fitness', 'Cycling', 'Health', 'Balance'],
      },
    ],
  },
];

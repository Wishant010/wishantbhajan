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
    icon: 'book',
    label: 'Student',
    color: '#3B82F6', // Professional blue
    angle: -90, // Top
    timeline: [
      {
        year: '2017-2021',
        title: 'MAVO Diploma',
        description:
          'Begonnen met mijn middelbare school op het Montfort College. MAVO diploma succesvol behaald en start gelegd voor verdere IT opleiding.',
        image: 'https://placehold.co/600x400/3B82F6/white?text=MAVO+Diploma+Uitreiking',
        imageStyle: 'icon',
        achievements: [
          'MAVO diploma behaald',
          'Eerste kennismaking met computers en technologie',
          'Interesse in programmeren ontdekt',
        ],
        tags: ['Montfort College', 'MAVO', 'Fundament', 'Start'],
      },
      {
        year: '2021-2023',
        title: 'HAVO Diploma',
        description:
          'Doorgestroomd naar HAVO op het Montfort College. Focus op exacte vakken en voorbereiding op HBO studie.',
        image: 'https://placehold.co/600x400/3B82F6/white?text=HAVO+Diploma+Uitreiking',
        imageStyle: 'icon',
        achievements: [
          'HAVO diploma succesvol afgerond',
          'NG profiel gekozen',
          'Voorbereid op HBO-ICT studie',
        ],
        tags: ['Montfort College', 'HAVO', '2 jaar', 'NG profiel'],
      },
      {
        year: '2023-2024',
        title: 'Informatica Jaar 1 - HBO',
        description:
          'Eerste jaar Informatica aan de Hogeschool. Kennismaking met professioneel programmeren: Python in het eerste semester, CSharp in het tweede semester.',
        image: 'https://placehold.co/600x400/3B82F6/white?text=Informatica+Jaar+1',
        imageStyle: 'icon',
        achievements: [
          'Python fundamentals onder de knie',
          'Object-Oriented Programming met CSharp',
          'Start datastructuren en algoritmes geleerd',
        ],
        tags: ['Python', 'CSharp', 'OOP', 'Algoritmes'],
      },
      {
        year: '2024-2025',
        title: 'Informatica Jaar 2 - Full Stack',
        description:
          'Tweede jaar gericht op moderne webontwikkeling en professionele praktijken. React, TypeScript en backend development met CSharp. Testing, debugging en CI/CD pipelines. Databases, security, algoritmes en networking in het tweede semester.',
        achievements: [
          'React & TypeScript mastered',
          'Backend development met CSharp',
          'CI/CD pipelines opgezet',
          'Database design & SQL expertise',
          'Security principles toegepast',
          'Netwerk protocollen geleerd',
        ],
        tags: ['React', 'TypeScript', 'CSharp', 'CI/CD', 'Databases', 'Security', 'Networking'],
      },
      {
        year: '2025-2026',
        title: 'Informatica Jaar 3 - Stage',
        description:
          'Derde jaar: stage bij een cybersecurity bedrijf. Praktijkervaring opdoen met security testing, penetration testing en security operations. Real-world cybersecurity uitdagingen aanpakken.',
        achievements: [
          'Stage bij cybersecurity bedrijf (lopend)',
          'Penetration testing ervaring',
          'Security audits uitgevoerd',
          'Incident response geleerd',
        ],
        tags: ['Cybersecurity', 'Pentesting', 'Stage', 'Security Operations'],
      },
      {
        year: 'Sep 2026',
        title: 'Externe Minor - Finland',
        description:
          'Internationale ervaring opdoen met een externe minor in Finland. Samenwerken met internationale studenten en nieuwe technologieën en culturen ontdekken.',
        achievements: [
          'Internationale minor gekozen',
          'Cross-cultural collaboration',
          'Nieuwe technologieën verkennen',
        ],
        tags: ['Finland', 'International', 'Minor', 'Exchange'],
      },
      {
        year: '2027',
        title: 'Interne Minor & Afstuderen',
        description:
          'Laatste fase van de studie: interne minor voor verdere specialisatie en afstudeeropdracht. Focus op security in moderne web applicaties. Klaar om de IT-wereld te veroveren!',
        achievements: [
          'Interne minor afgerond',
          'Afstudeeronderzoek uitgevoerd',
          'Thesis over web security',
          'HBO diploma behaald',
        ],
        tags: ['Graduation', 'Thesis', 'Minor', 'Cybersecurity', 'Diploma'],
      },
    ],
  },
  {
    id: 'business',
    icon: 'briefcase',
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
    icon: 'code',
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
    icon: 'heart',
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

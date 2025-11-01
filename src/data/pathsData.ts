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
        images: [
          '/over-mij/studentenpad/Mavo-foto1.jpg',
          '/over-mij/studentenpad/Mavo-foto2.jpg'
        ],
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
        images: [
          '/over-mij/studentenpad/Afbeelding van WhatsApp op 2025-10-31 om 23.26.28_d3c42979.jpg',
          '/over-mij/studentenpad/Afbeelding van WhatsApp op 2025-10-31 om 23.26.28_e94d9d40.jpg'
        ],
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
        images: [
          '/over-mij/studentenpad/Afbeelding van WhatsApp op 2025-10-31 om 23.19.43_34a40d4e.jpg',
          '/over-mij/studentenpad/Afbeelding van WhatsApp op 2025-10-31 om 23.24.44_e5054846.jpg'
        ],
        imageStyle: 'icon',
        achievements: [
          'Python fundamentals onder de knie',
          'OODP (Object Oriented Design & Programming) met CSharp',
          'Propedeuse behaald',
        ],
        tags: ['Python', 'CSharp', 'OODP', 'Propedeuse'],
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
        description: 'Coming soon',
        achievements: [],
        tags: ['Cybersecurity', 'Pentesting', 'Stage', 'Security Operations'],
      },
      {
        year: 'Sep 2026',
        title: 'Externe Minor - Slovenië',
        description:
          'Internationale ervaring opdoen met een externe minor in Slovenië. Samenwerken met internationale studenten en nieuwe technologieën en culturen ontdekken.',
        achievements: [
          'Internationale minor gekozen',
          'Cross-cultural collaboration',
          'Nieuwe technologieën verkennen',
        ],
        tags: ['Slovenië', 'International', 'Minor', 'Exchange'],
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
        year: '2020',
        title: 'Vendingmachine Business',
        description:
          'In 2020 begon ik mijn vendingmachine business. Eerste stappen in ondernemerschap door het plaatsen en beheren van snackautomaten op strategische locaties.',
        images: [
          '/over-mij/bedrijven-pad/Afbeelding van WhatsApp op 2025-11-01 om 16.28.57_013930df.jpg',
          '/over-mij/bedrijven-pad/Afbeelding van WhatsApp op 2025-11-01 om 16.28.57_eda1cb03.jpg',
          '/over-mij/bedrijven-pad/Untitled design.mp4'
        ],
        imageStyle: 'icon',
        achievements: [
          'Eerste vendingmachines geplaatst',
          'Locaties geregeld en onderhandeld',
          'Voorraad management opgezet',
          'Omzet en winst bijgehouden',
        ],
        tags: ['Vendingmachines', 'Ondernemerschap', 'Logistiek', 'Business'],
      },
      {
        year: '2023',
        title: 'WishWeb',
        description:
          'In 2023 opgericht WishWeb waar ik websites maak voor bedrijven.\n\n\nWebsite:\nwishweb.nl (under construction)',
        achievements: [
          'WishWeb opgericht',
          'Websites bouwen voor bedrijven',
          'KVK registratie afgerond',
          'Portfolio van klanten opgebouwd',
        ],
        tags: ['WishWeb', 'Webdevelopment', 'Business', 'Websites'],
      },
      {
        year: '2025',
        title: 'TableTech',
        description:
          'TableTech opgericht - een bedrijf waarbij we voor restaurants software hebben gemaakt dat hun restaurant digitaliseert. Ook maken we op maat software voor bedrijven.',
        image: '/over-mij/bedrijven-pad/tableTech.png',
        images: [
          '/over-mij/bedrijven-pad/foto-samen.jpeg',
          '/over-mij/bedrijven-pad/foto1.png',
          '/over-mij/bedrijven-pad/foto2.png'
        ],
        imageStyle: 'icon',
        achievements: [
          'Restaurant digitalisering software ontwikkeld',
          'Maatwerk software voor bedrijven',
          'Meerdere restaurants geholpen',
        ],
        tags: ['Wishant Bhajan', 'Damian Willemse', 'Hicham Tahiri', 'Mohammad Falaha'],
        website: 'https://tabletech.nl',
      },
      {
        year: '2026',
        title: 'Rdam App',
        description: 'Coming soon',
        achievements: [],
        tags: ['App', 'Innovatie', 'Rotterdam', 'Technology'],
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
        year: '2019-2020',
        title: 'Retail Fulfillment Medewerker - Jumbo',
        description:
          'Eerste werkervaring als Retail Fulfillment Medewerker bij Jumbo Supermarkten van juni 2019 tot juni 2020. Verantwoordelijk voor voorraad management, klantenservice en order fulfillment.',
        achievements: [
          'Voorraad beheer en optimalisatie',
          'Order picking en fulfillment',
          'Klantenservice en advisering',
          'Samenwerken in teamverband',
        ],
        tags: ['Jumbo', 'Retail Fulfillment', 'Logistics', 'Klantenservice'],
      },
      {
        year: '2021-2023',
        title: 'Freelance Horeca & Event Medewerker',
        description:
          'Als freelancer via YouNonges en Staff You werkte ik bij diverse evenementen en horecagelegenheden. Veelzijdige rol waarbij ik werkte bij tankstations, Ahoy, Maassilo, Blijdorp, Feyenoord Stadion, Number One en vele andere horecalocaties. Ervaring opgedaan als barman, sales medewerker en event staff.',
        achievements: [
          'Event staff bij grote evenementen (Ahoy, Maassilo, Feyenoord)',
          'Barman bij diverse horecagelegenheden',
          'Sales en klantencontact bij Blijdorp',
          'Flexibel inzetbaar op verschillende locaties',
          'Werken onder hoge druk tijdens events',
        ],
        tags: ['Horeca', 'Events', 'Sales', 'Barman', 'Freelance'],
      },
      {
        year: '2021-2023',
        title: 'Bezorger - Domino\'s Pizza',
        description:
          'Als bezorger bij Domino\'s Pizza was ik verantwoordelijk voor het op tijd en in perfecte staat bezorgen van bestellingen. Daarnaast werkte ik als sales medewerker voor Kubus Woningen.',
        achievements: [
          'Efficiënte en snelle bezorging',
          'Klantenservice en klanttevredenheid',
          'Sales bij Kubus Woningen',
          'Tijdmanagement en route planning',
        ],
        tags: ['Bezorging', 'Klantenservice', 'Sales', 'Logistiek'],
      },
      {
        year: '2023-2024',
        title: 'IT Technician - GO Sharing',
        description:
          'Als IT Technician bij GO Sharing bouwde ik elektrische scooters volledig van scratch op en was betrokken bij hardware programmering en troubleshooting van elektronische componenten. Verantwoordelijk voor firmware updates, assemblage, technische diagnoses en performance optimalisatie.',
        achievements: [
          'Scooters volledig van scratch opbouwen',
          'Hardware programmering van scooter componenten',
          'Firmware updates en deployment',
          'Technische storingen diagnosticeren en oplossen',
          'Performance optimalisatie van systemen',
        ],
        tags: ['Hardware', 'Firmware', 'Assembly', 'IoT', 'E-mobility'],
      },
      {
        year: '2024-2025',
        title: 'IT Support Specialist - Studenten Aan Huis',
        description:
          'Als IT Support Specialist bij Studenten Aan Huis help ik klanten met het troubleshooten van software en hardware problemen, installeren en configureren van software, en optimaliseren van systeemprestaties. Deze rol vereist sterke probleemoplossende vaardigheden en uitgebreide technische kennis.',
        achievements: [
          'Software en hardware troubleshooting',
          'Software installatie en configuratie',
          'Systeemprestaties optimaliseren',
          'Klantenservice en technische ondersteuning',
        ],
        tags: ['IT Support', 'Troubleshooting', 'Customer Service', 'Technical Support'],
      },
      {
        year: '2026',
        title: 'Cybersecurity',
        description: 'Coming soon',
        achievements: [],
        tags: ['Cybersecurity', 'Security', 'Pentesting', 'Ethical Hacking'],
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
        title: 'Gaming, Sport & Tech',
        description:
          'Passie voor gaming sinds jong. Daarnaast ben ik sportief actief met darten, tennis, voetbal, padel, Jujitsu en MMA. Ook grote interesse in tech gadgets, websites maken, lezen van ontwikkelingsboeken en schaken.',
        achievements: [
          'PC gebouwd van scratch',
          'Actief in verschillende sporten (darten, tennis, voetbal, padel)',
          'Jujitsu en MMA training',
          'Websites maken als hobby',
          'Tech reviewer hobbyist',
          'Lezen van ontwikkelingsboeken',
          'Schaken',
        ],
        tags: ['Gaming', 'Sport', 'MMA', 'Webdevelopment', 'Tech', 'Fitness', 'Schaken', 'Lezen'],
      },
      {
        year: 'Passies',
        title: 'Technologie & Security',
        description:
          'Gepassioneerd over technologie, cybersecurity en ethical hacking. Ook run ik een Home Lab voor experimenten en testing.',
        achievements: [
          'Ethical hacking en penetration testing',
          'Security research en experimenten',
          'Hack The Box challenges',
          'Home Lab opgezet voor testing',
          'CTF competitions deelgenomen',
        ],
        tags: ['Cybersecurity', 'Ethical Hacking', 'Home Lab', 'Technology'],
      },
      {
        year: 'Creativiteit',
        title: 'Web Design & Ontwikkeling',
        description:
          'Creatieve uitlaatklep waar design en technologie samenkomen. Van concept tot deployment - de gehele workflow van websites maken, ontwerpen en bouwen. UX/UI design, prototyping, frontend development en alles daartussenin.',
        achievements: [
          'Websites ontwerpen en bouwen',
          'UX/UI design en prototyping',
          'Gehele workflow van concept tot deployment',
          'Design systems en style guides',
          'Gebruiksvriendelijke interfaces ontwerpen',
        ],
        tags: ['Web Design', 'UX/UI', 'Frontend', 'Prototyping', 'Workflow'],
      },
      {
        year: 'Lifestyle',
        title: 'Actief & Ondernemend',
        description:
          'Een actieve lifestyle met focus op gezondheid, groei en ondernemerschap. 4 dagen per week naar de gym, 3 dagen Jujitsu training, reizen, werken aan eigen bedrijven en constant bezig met zelfontwikkeling.',
        achievements: [
          '4x per week gym training',
          '3x per week Jujitsu',
          'Reizen en nieuwe ervaringen opdoen',
          'Werken aan eigen bedrijven',
          'Continue zelfontwikkeling',
        ],
        tags: ['Fitness', 'Jujitsu', 'Reizen', 'Ondernemerschap', 'Zelfontwikkeling'],
      },
    ],
  },
];

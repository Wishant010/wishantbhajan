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
        title: "WishShield",
        description: "Advanced vulnerability assessment tool focusing on OWASP Top 10 security risks. Comprehensive security scanner with automated reporting and CI/CD integration capabilities.",
        category: "cybersecurity",
        thumbnail: "/projects/security/futuristic_cybersecurity_shield_icon_with_hexagonal_shape.jpeg",
        technologies: ["Python", "Flask", "OWASP", "Security", "Penetration Testing"],
        links: {},
        featured: true,
        details: "Comprehensive security scanner with automated reporting and CI/CD integration",
        tier: "I"
      },
      {
        id: "wishguard",
        title: "WishGuard",
        description: "Security monitoring and protection system",
        category: "cybersecurity",
        thumbnail: "/projects/security/fix_the_letter_b__so_that.png",
        technologies: ["Python", "Security", "Monitoring", "Protection"],
        links: {},
        featured: true,
        details: "Advanced security monitoring and threat protection system",
        tier: "I"
      },
      {
        id: "cscnl-hackathon",
        title: "CSCNL Hackathon 2025",
        description: "Cybersecurity challenge and hackathon competition project",
        category: "cybersecurity",
        thumbnail: "/projects/security/cybersecurity_ctf_competition_visual_red_and_cyan.jpeg",
        technologies: ["Security", "Hacking", "CTF", "Competition"],
        links: {},
        featured: true,
        details: "Participation in CSCNL Hackathon 2025 cybersecurity competition",
        tier: "I"
      },
      {
        id: "wish-traffic-analyzer",
        title: "Wish Traffic Analyzer",
        description: "Network traffic analysis and monitoring tool for security insights",
        category: "cybersecurity",
        thumbnail: "/projects/security/network_traffic_visualization_glowing_green_data_streams.jpeg",
        technologies: ["Python", "Network Analysis", "Wireshark", "Security", "Packet Inspection"],
        links: {},
        featured: true,
        details: "Advanced network traffic analyzer for detecting anomalies and security threats",
        tier: "I"
      },
      {
        id: "sql-injection-waf",
        title: "SQL Injection Detection & WAF",
        description: "Intelligente Web Application Firewall die real-time SQL injection attacks detecteert en blokkeert met machine learning patterns",
        category: "cybersecurity",
        thumbnail: "/projects/security/futuristic_web_application_firewall_visualization_with_large.jpeg",
        technologies: ["Python", "Flask", "Redis", "PostgreSQL", "Machine Learning", "scikit-learn"],
        links: {},
        featured: true,
        details: "Real-time traffic monitoring, pattern matching voor SQL injection signatures, automatische blacklisting van malicious IP's, en false positive reduction met ML-based classification",
        tier: "II"
      },
      {
        id: "secure-file-sharing",
        title: "Secure Multi-Party File Sharing Platform",
        description: "Zero-knowledge file sharing platform met end-to-end encryption waar zelfs de server de bestanden niet kan lezen",
        category: "cybersecurity",
        thumbnail: "/projects/security/zeroknowledge_encryption_visualization_with_prominent_wb_logo.jpeg",
        technologies: ["Node.js", "Express", "WebCrypto API", "PostgreSQL", "React", "AES-256", "RSA"],
        links: {},
        featured: true,
        details: "Client-side encryption, key management met asymmetric encryption, multi-user access control, time-limited sharing links, en 2FA voor account access",
        tier: "II"
      },
      {
        id: "vulnerability-scanner",
        title: "Automated Vulnerability Scanner & Remediation Advisor",
        description: "Geautomatiseerde scanner die web applicaties scant op OWASP Top 10 vulnerabilities en concrete fix-suggesties geeft",
        category: "cybersecurity",
        thumbnail: "/projects/security/automated_security_scanning_visualization_with_wb_letters.jpeg",
        technologies: ["Python", "aiohttp", "OWASP ZAP", "Docker", "NVD API", "CI/CD Integration"],
        links: {},
        featured: true,
        details: "Automated crawling, active scanning voor XSS, CSRF, SQL injection, dependency analysis, AI-powered code analysis, en automated exploit verification",
        tier: "II",
        comingSoon: true
      },
      {
        id: "threat-intelligence-platform",
        title: "Advanced Threat Intelligence Platform",
        description: "Enterprise-grade SIEM-achtig platform met AI-driven anomaly detection dat zero-day threats kan detecteren via behavioral analysis",
        category: "cybersecurity",
        thumbnail: "/projects/security/aipowered_threat_intelligence_command_center_with_massive.jpeg",
        technologies: ["Go", "Python", "TensorFlow", "Elasticsearch", "Neo4j", "Kafka", "Kubernetes", "React"],
        links: {},
        featured: true,
        details: "Multi-source data ingestion, ML detection engine, threat correlation, automated response orchestration, MITRE ATT&CK mapping, en real-time processing van 100,000+ events per seconde",
        tier: "III"
      },
      {
        id: "distributed-honeypot",
        title: "Distributed Honeypot Network",
        description: "Wereldwijd gedistribueerd netwerk van high-interaction honeypots met deception technology die attackers misleiden en zero-day exploits detecteren",
        category: "cybersecurity",
        thumbnail: "/projects/security/global_honeypot_network_visualization_with_large_wb.jpeg",
        technologies: ["Python", "Docker", "Kubernetes", "MongoDB", "WireGuard", "Cuckoo Sandbox", "YARA"],
        links: {},
        featured: true,
        details: "High-interaction honeypot fleet, deception layer, full traffic capture, automated malware analysis, threat intelligence generation, en globally distributed infrastructure",
        tier: "III"
      },
      {
        id: "blockchain-pki",
        title: "Blockchain-Based Decentralized PKI",
        description: "Gedecentraliseerd Public Key Infrastructure systeem gebouwd op blockchain dat het traditionele CA-model vervangt met een trustless alternatief",
        category: "cybersecurity",
        thumbnail: "/projects/security/blockchain_certificate_chain_visualization_with_prominent_wb.jpeg",
        technologies: ["Solidity", "Ethereum", "Go", "libsodium", "IPFS", "React", "Post-Quantum Crypto"],
        links: {},
        featured: true,
        details: "Smart contract certificate registry, decentralized CA network, post-quantum cryptography, zero-knowledge proofs, automated ACME issuance, en instant blockchain-based revocation",
        tier: "III"
      }
    ]
  },
  {
    id: "bedrijven",
    label: "Bedrijven",
    icon: "💼",
    color: "#f59e0b",
    gradient: ["#f59e0b", "#ef4444"],
    projects: [
      {
        id: "tabletech",
        title: "TableTech",
        description: "Restaurant digitalization software with custom solutions for businesses",
        category: "bedrijven",
        thumbnail: "/projects/business/modern_restaurant_technology_visualization_with_prominent_tabletech.jpeg",
        technologies: ["React", "TypeScript", "Node.js", "Restaurant Software"],
        links: {
          demo: "https://tabletech.nl"
        },
        featured: true,
        details: "Complete restaurant management system with POS integration"
      },
      {
        id: "rijschool-management",
        title: "Rijschool Management Systeem",
        description: "Comprehensive driving school management system for lessons and students",
        category: "bedrijven",
        thumbnail: "/projects/business/modern_driving_school_management_dashboard_clean_scheduling.jpeg",
        technologies: ["Coming Soon December 2025"],
        links: {},
        featured: true,
        details: "Complete management system for driving schools with scheduling and student tracking",
        comingSoon: true
      },
      {
        id: "wk-game",
        title: "WK Game",
        description: "Interactive World Cup prediction game platform",
        category: "bedrijven",
        thumbnail: "/projects/games/dynamic_football_stadium_scene_with_bright_floodlights.png",
        technologies: ["Coming Soon Mei 2026"],
        links: {},
        featured: true,
        details: "Engaging World Cup prediction game with real-time updates and leaderboards",
        comingSoon: true
      },
      {
        id: "rdam-app",
        title: "Rdam App",
        description: "Innovative mobile application for Rotterdam",
        category: "bedrijven",
        thumbnail: "/projects/games/their_is_a_lil_glitch_fix_it.jpeg",
        technologies: ["Coming Soon June 2026"],
        links: {},
        featured: true,
        details: "Revolutionary app for Rotterdam citizens - in development",
        comingSoon: true
      },
      {
        id: "meet-up",
        title: "Meet UP",
        description: "Social networking platform for organizing and joining local meetups",
        category: "bedrijven",
        thumbnail: "/projects/games/meet_up_needs_to_be_on_top.jpeg",
        technologies: ["Coming Soon December 2026"],
        links: {},
        featured: true,
        details: "Platform for creating and discovering local events and meetups",
        comingSoon: true
      },
      {
        id: "sneak-up",
        title: "Sneak UP",
        description: "Multiplayer challenge game with friends",
        category: "bedrijven",
        thumbnail: "/projects/games/_remove_the_flits_and_remove_dare.jpeg",
        technologies: ["Coming Soon June 2027"],
        links: {},
        featured: true,
        details: "Interactive game platform with diverse challenges and competitions",
        comingSoon: true
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
        id: "calendify",
        title: "Calendify",
        description: "Kantoorkalender webapplicatie voor hybride werkplek samenwerking",
        category: "persoonlijk",
        subcategory: "websites",
        thumbnail: "/projects/business/professional_office_management_dashboard_clean_calendar_interface.jpeg",
        technologies: ["React", "TypeScript", "C#", ".NET", "SQL Server", "REST API"],
        links: {},
        featured: true,
        details: "Full-stack webapplicatie ontworpen om medewerkers te helpen kantooraanwezigheid te coördineren, vergaderruimtes te boeken en deel te nemen aan bedrijfsevenementen",
        projectData: {
          problem: "In hybride werkomgevingen hebben teams moeite om te weten wie er op kantoor zal zijn, wat samenwerking en evenementenplanning moeilijk maakt. Bestaande oplossingen missen de eenvoud en sociale functies die nodig zijn om kantooraanwezigheid aan te moedigen.",
          solution: "Calendify biedt een duidelijk, gedeeld overzicht van kantooraanwezigheid en evenementdeelname met een intuïtieve interface die toegankelijk is op alle apparaten. De applicatie dient als een sociale hub die medewerkers motiveert om samen te werken en persoonlijk contact te maken.",
          features: [
            {
              title: "Kantooraanwezigheid Bijhouden",
              description: "Medewerkers kunnen gemakkelijk aangeven wanneer ze op kantoor zijn, waardoor teams samenwerkingsdagen kunnen coördineren en plannen",
              icon: "calendar"
            },
            {
              title: "Evenementenbeheer",
              description: "Beheerders kunnen bedrijfsevenementen aanmaken zoals bordspellenavonden en hackathons, terwijl medewerkers zich gemakkelijk kunnen aanmelden en deelname kunnen volgen",
              icon: "event"
            },
            {
              title: "Ruimteboekingssysteem",
              description: "Real-time beschikbaarheid van vergaderruimtes met directe boekingsfunctionaliteit om werkplekbeheer te stroomlijnen",
              icon: "room"
            },
            {
              title: "Beheerderspaneel",
              description: "Uitgebreide beheerinterface voor beheerders om evenementen aan te maken, te bewerken en te monitoren met deelnemerstracking",
              icon: "dashboard"
            },
            {
              title: "Rolgebaseerde Toegang",
              description: "Veilig authenticatiesysteem met verschillende rechten voor beheerders en gewone medewerkers",
              icon: "security"
            },
            {
              title: "Responsief Ontwerp",
              description: "Volledig responsieve interface die naadloos werkt op desktop, tablet en mobiele apparaten met WCAG toegankelijkheidsnaleving",
              icon: "responsive"
            }
          ],
          techStack: {
            frontend: ["React", "TypeScript", "React Router", "Aceternity UI", "Framer Motion", "GSAP"],
            backend: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server"],
            architecture: ["RESTful API", "Session-based Authentication", "Service Layer Pattern", "DTO Pattern"]
          },
          architecture: "De applicatie volgt een moderne client-server architectuur met een React frontend die communiceert met een ASP.NET Core backend via RESTful API's. De backend implementeert een clean service layer patroon met aparte controllers voor authenticatie, evenementen, aanwezigheid en ruimteboekingen.",
          challenges: [
            "Implementeren van real-time beschikbaarheidscontrole van ruimtes om dubbele boekingen te voorkomen",
            "Ontwerpen van een intuïtieve UI die werkt op meerdere apparaatformaten terwijl WCAG toegankelijkheidsnormen worden gehandhaafd",
            "Bouwen van een robuust rolgebaseerd authenticatiesysteem met sessiebeheer"
          ],
          learnings: [
            "Full-stack ontwikkeling met React en C#/.NET integratie onder de knie gekregen",
            "Ervaring opgedaan met complex relationeel database ontwerp en Entity Framework",
            "Geleerd om toegankelijke en responsieve interfaces te implementeren volgens WCAG richtlijnen"
          ]
        }
      },
      {
        id: "urban-mobility",
        title: "Urban Mobility",
        description: "Smart urban transportation solution for modern cities",
        category: "persoonlijk",
        subcategory: "systemen",
        thumbnail: "/projects/utilities/professional_terminal_interface_with_urban_mobility_text_v2.png",
        technologies: ["React", "TypeScript", "Maps API", "Mobile", "IoT"],
        links: {},
        featured: true,
        details: "Innovative urban mobility platform connecting transport options in the city"
      },
      {
        id: "shipment-tracking",
        title: "Shipment Tracking System",
        description: "QR-based shipment tracking systeem van warehouse tot deur",
        category: "persoonlijk",
        subcategory: "systemen",
        thumbnail: "/projects/business/modern_warehouse_logistics_visualization_large_distribution_center.jpeg",
        technologies: ["React Native", "TypeScript", "C# .NET", "PostgreSQL", "Tailwind CSS", "Neon Database"],
        links: {},
        featured: true,
        details: "Complete shipment tracking system with real-time updates and logistics management",
        projectData: {
          clientInfo: {
            name: "Shipment Tracking System",
            description: "Een uitgebreid QR-gebaseerd shipment tracking systeem dat elke zending volgt van warehouse tot deur met real-time updates en slimme analytics.",
            industry: "Logistics & Supply Chain",
            needs: [
              "Real-time tracking van zendingen",
              "QR code scanning voor snelle updates",
              "Dashboard voor management en analytics",
              "Mobiele app voor bezorgers en warehouse medewerkers"
            ]
          },
          assignment: {
            why: "Bedrijven hebben behoefte aan een betrouwbaar systeem om zendingen te volgen van warehouse tot klant. Dit systeem biedt transparantie voor zowel medewerkers als klanten over de status van hun pakketten.",
            wishes: [
              "QR code scanning voor instant status updates",
              "Real-time locatie tracking",
              "Uitgebreid dashboard met analytics",
              "Mobiele app die ook offline werkt",
              "Automatische synchronisatie wanneer verbinding hersteld wordt",
              "Overzicht van alle actieve zendingen"
            ],
            problems: [
              "Geen real-time inzicht in pakket locaties",
              "Handmatige status updates zijn foutgevoelig",
              "Klanten weten niet waar hun pakket is",
              "Geen centrale plek voor shipment management"
            ]
          },
          myRole: [
            {
              title: "Mobile App Development",
              description: "Cross-platform React Native app voor iOS en Android met native performance",
              icon: "code"
            },
            {
              title: "Backend API",
              description: "Robuuste C# .NET backend voor shipment data en business logic",
              icon: "server"
            },
            {
              title: "Database Design",
              description: "PostgreSQL database structuur voor betrouwbare tracking data",
              icon: "database"
            },
            {
              title: "QR Code Systeem",
              description: "Smart QR code scanning systeem voor instant status updates",
              icon: "qr"
            },
            {
              title: "Dashboard Development",
              description: "Uitgebreid analytics dashboard voor shipment management",
              icon: "dashboard"
            },
            {
              title: "UI/UX Design",
              description: "Gebruiksvriendelijk design met Tailwind CSS en NativeWind",
              icon: "design"
            }
          ],
          screenshots: [
            {
              src: "/projects/shipment/dashboard.png",
              alt: "Shipment Dashboard",
              caption: "Live dashboard met actieve zendingen en analytics"
            },
            {
              src: "/projects/shipment/scanner.png",
              alt: "QR Scanner",
              caption: "QR code scanner voor instant shipment updates"
            },
            {
              src: "/projects/shipment/tracking.png",
              alt: "Tracking View",
              caption: "Real-time tracking van zending status"
            }
          ],
          process: [
            {
              step: 1,
              title: "Analyse & Planning",
              description: "Onderzoek naar logistics workflows en requirements verzamelen"
            },
            {
              step: 2,
              title: "Database Design",
              description: "PostgreSQL schema ontwerp voor shipments, tracking events en gebruikers"
            },
            {
              step: 3,
              title: "Backend Development",
              description: "C# .NET API met endpoints voor tracking, scanning en analytics"
            },
            {
              step: 4,
              title: "Mobile App",
              description: "React Native app met QR scanning en offline support"
            },
            {
              step: 5,
              title: "Dashboard",
              description: "Web dashboard voor management en real-time analytics"
            },
            {
              step: 6,
              title: "Testing & Deployment",
              description: "Uitgebreide tests en deployment naar cloud infrastructure"
            }
          ],
          technicalHighlights: [
            {
              title: "QR Code Scanning",
              description: "Instant shipment scanning met smart QR codes - één scan update de status door het hele netwerk",
              icon: "qr"
            },
            {
              title: "Real-Time Tracking",
              description: "Live locatie updates en delivery status - klanten en managers zien exact waar zendingen zijn",
              icon: "location"
            },
            {
              title: "Offline Support",
              description: "Mobiele app werkt offline en synchroniseert automatisch wanneer verbinding hersteld wordt",
              icon: "sync"
            },
            {
              title: "Smart Dashboard",
              description: "Uitgebreide analytics, route optimalisatie en inventory management in één plek",
              icon: "dashboard"
            },
            {
              title: "Cross-Platform",
              description: "Eén codebase voor iOS en Android met native performance dankzij React Native",
              icon: "mobile"
            }
          ]
        }
      },
      {
        id: "spirit-engineering",
        title: "Spirit Engineering",
        description: "Persoonlijke portfolio website ontworpen en ontwikkeld",
        category: "persoonlijk",
        subcategory: "websites",
        thumbnail: "/projects/utilities/dark_modern_engineering_portfolio_brain_wb_logo.jpg",
        technologies: ["Webdesign", "UI/UX", "Wix Studio", "Portfolio"],
        links: {},
        featured: true,
        details: "Complete website die ik heb ontworpen en gebouwd om iemands werk en vaardigheden te showcasen",
        projectData: {
          clientInfo: {
            name: "Spirit Engineering",
            description: "Spirit Engineering is een persoonlijk portfolio project waarvoor ik de complete website heb ontworpen en ontwikkeld. De klant wilde een professionele online aanwezigheid om zijn werk en expertise te presenteren.",
            industry: "Portfolio & Personal Branding",
            needs: [
              "Een professionele en moderne portfolio website",
              "Duidelijke presentatie van projecten en vaardigheden",
              "Persoonlijke uitstraling die past bij de eigenaar",
              "Makkelijk te navigeren structuur voor bezoekers"
            ]
          },
          assignment: {
            why: "De klant had behoefte aan een professionele portfolio website om zijn werk te showcasen. Hij wilde een moderne, strakke website die zijn persoonlijkheid en vaardigheden goed zou weergeven aan potentiële werkgevers en klanten.",
            wishes: [
              "Modern en professioneel design dat persoonlijkheid uitstraalt",
              "Overzichtelijke presentatie van projecten en skills",
              "Portfolio sectie voor gerealiseerde projecten",
              "Responsive design voor alle apparaten",
              "Snelle laadtijden en goede gebruikerservaring",
              "Eenvoudige contactmogelijkheden"
            ],
            problems: [
              "Geen bestaande online aanwezigheid",
              "Moeilijk om werk en vaardigheden te presenteren aan anderen",
              "Behoefte aan professionele uitstraling",
              "Geen centrale plek om projecten te tonen"
            ]
          },
          myRole: [
            {
              title: "Figma Design",
              description: "Complete Figma design gemaakt voor de klant",
              icon: "design"
            },
            {
              title: "Pagina-indeling & Structuur",
              description: "Strategische informatiearchitectuur voor optimale gebruikersflow",
              icon: "layout"
            },
            {
              title: "Webdesign",
              description: "Visueel ontwerp met focus op technische professionaliteit en merkidentiteit",
              icon: "palette"
            },
            {
              title: "Mobile Ondersteuning",
              description: "Volledig responsive design geoptimaliseerd voor alle schermformaten",
              icon: "mobile"
            },
            {
              title: "Animaties & Interactie",
              description: "Subtiele animaties en micro-interacties voor een premium gevoel",
              icon: "animation"
            },
            {
              title: "Branding Afstemming",
              description: "Consistente visuele taal die aansluit bij de merkidentiteit van Spirit Engineering",
              icon: "brand"
            }
          ],
          screenshots: [
            {
              src: "/projects/spirit/272a485a-f703-4df8-b5c5-c45340c0b3a6.png",
              alt: "Spirit Engineering Homepage",
              caption: "Homepage met hero sectie en tagline"
            },
            {
              src: "/projects/spirit/552f18f3-dab0-40f0-b92b-38f3dc5f9fd5.png",
              alt: "Spirit Engineering Projecten",
              caption: "Projecten sectie met portfolio items"
            },
            {
              src: "/projects/spirit/c4501aaa-2c58-4b23-9cb1-0c7a870b3f6e.png",
              alt: "Spirit Engineering About Me",
              caption: "About Me pagina met persoonlijk verhaal"
            },
            {
              src: "/projects/spirit/30f0cd48-de70-4a18-bacd-0786e93416a2.png",
              alt: "Spirit Engineering Contact",
              caption: "Contact pagina met brein logo"
            }
          ],
          process: [
            {
              step: 1,
              title: "Intake & Doelstellingen",
              description: "Diepgaande gesprekken met de klant om bedrijfsdoelen, doelgroep en wensen in kaart te brengen"
            },
            {
              step: 2,
              title: "Concurrentieanalyse",
              description: "Onderzoek naar vergelijkbare bedrijven en best practices in de technische sector"
            },
            {
              step: 3,
              title: "Wireframes",
              description: "Schematische layouts voor alle pagina's om structuur en gebruikersflow te bepalen"
            },
            {
              step: 4,
              title: "UI Design",
              description: "Visueel ontwerp met kleurenpalet, typografie en componenten"
            },
            {
              step: 5,
              title: "Testen",
              description: "Uitgebreide tests op verschillende apparaten en browsers"
            },
            {
              step: 6,
              title: "Oplevering",
              description: "Lancering van de website en overdracht aan de klant"
            }
          ],
          technicalHighlights: [
            {
              title: "Responsive Design",
              description: "Pixel-perfect weergave op desktop, tablet en mobiel met flexibele layouts",
              icon: "responsive"
            },
            {
              title: "Performante Opbouw",
              description: "Geoptimaliseerde code en assets voor snelle laadtijden onder 2 seconden",
              icon: "performance"
            },
            {
              title: "SEO-Basics",
              description: "Technische SEO-optimalisatie voor betere vindbaarheid in zoekmachines",
              icon: "seo"
            },
            {
              title: "Animaties & Hover Effects",
              description: "Subtiele micro-interacties die de gebruikerservaring verrijken",
              icon: "animation"
            },
            {
              title: "Modulaire Structuur",
              description: "Herbruikbare componenten voor diensten en projecten die makkelijk uit te breiden zijn",
              icon: "structure"
            }
          ]
        }
      },
      {
        id: "spirit-engineering-bv",
        title: "SpirIT Engineering BV",
        description: "Portfolio website",
        category: "persoonlijk",
        subcategory: "websites",
        thumbnail: "/projects/utilities/sophisticated_dark_engineering_luminous_split_brain.jpg",
        technologies: ["Coming Soon"],
        links: {},
        featured: true,
        details: "Professional engineering consultancy platform with advanced technical solutions",
        comingSoon: true
      },
      {
        id: "crypto-bot",
        title: "Crypto Bot",
        description: "Automated cryptocurrency trading bot with advanced algorithms",
        category: "persoonlijk",
        subcategory: "crypto",
        thumbnail: "/projects/business/futuristic_cryptocurrency_trading_bot_visualization_wb_logo.jpg",
        technologies: ["Almost Done"],
        links: {},
        featured: true,
        details: "Intelligent trading bot for cryptocurrency markets with real-time analytics",
        comingSoon: true
      },
      {
        id: "dc-par",
        title: "DC PAR - Damclub",
        description: "Club website",
        category: "persoonlijk",
        subcategory: "websites",
        thumbnail: "/projects/games/professional_checkers_board_game_dc_par_logo.jpg",
        technologies: ["Almost Done"],
        links: {},
        featured: true,
        details: "Community platform for checkers enthusiasts with game management and member features",
        darkOverlay: true,
        comingSoon: true
      },
      {
        id: "dp-trucks",
        title: "DP-Trucks Management Systeem",
        description: "Inventory management system",
        category: "persoonlijk",
        subcategory: "systemen",
        thumbnail: "/projects/business/dynamic_truck_logistics_visualization_interactive_map.jpg",
        technologies: ["Almost Done"],
        links: {},
        featured: true,
        details: "Advanced management system for tracking and managing truck fleet operations",
        comingSoon: true
      }
    ]
  }
];

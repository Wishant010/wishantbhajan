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
        thumbnail: "/futuristic_cybersecurity_shield_icon_with_hexagonal_shape.jpeg",
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
        thumbnail: "/fix_the_letter_b__so_that.png",
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
        thumbnail: "/cybersecurity_ctf_competition_visual_red_and_cyan.jpeg",
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
        thumbnail: "/network_traffic_visualization_glowing_green_data_streams.jpeg",
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
        thumbnail: "/futuristic_web_application_firewall_visualization_with_large.jpeg",
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
        thumbnail: "/zeroknowledge_encryption_visualization_with_prominent_wb_logo.jpeg",
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
        thumbnail: "/automated_security_scanning_visualization_with_wb_letters.jpeg",
        technologies: ["Python", "aiohttp", "OWASP ZAP", "Docker", "NVD API", "CI/CD Integration"],
        links: {},
        featured: true,
        details: "Automated crawling, active scanning voor XSS, CSRF, SQL injection, dependency analysis, AI-powered code analysis, en automated exploit verification",
        tier: "II"
      },
      {
        id: "threat-intelligence-platform",
        title: "Advanced Threat Intelligence Platform",
        description: "Enterprise-grade SIEM-achtig platform met AI-driven anomaly detection dat zero-day threats kan detecteren via behavioral analysis",
        category: "cybersecurity",
        thumbnail: "/aipowered_threat_intelligence_command_center_with_massive.jpeg",
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
        thumbnail: "/global_honeypot_network_visualization_with_large_wb.jpeg",
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
        thumbnail: "/blockchain_certificate_chain_visualization_with_prominent_wb.jpeg",
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
        thumbnail: "/modern_restaurant_technology_visualization_with_prominent_tabletech.jpeg",
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
        thumbnail: "/modern_driving_school_management_dashboard_clean_scheduling.jpeg",
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
        thumbnail: "/dynamic_football_stadium_scene_with_bright_floodlights.png",
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
        thumbnail: "/their_is_a_lil_glitch_fix_it.jpeg",
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
        thumbnail: "/meet_up_needs_to_be_on_top.jpeg",
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
        thumbnail: "/_remove_the_flits_and_remove_dare.jpeg",
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
        description: "Office calendar web application for hybrid workplace collaboration",
        category: "persoonlijk",
        subcategory: "websites",
        thumbnail: "/professional_office_management_dashboard_clean_calendar_interface.jpeg",
        technologies: ["React", "TypeScript", "C#", ".NET", "SQL Server", "REST API"],
        links: {},
        featured: true,
        details: "Full-stack web application designed to help employees coordinate office attendance, book meeting rooms, and participate in company events",
        projectData: {
          problem: "In hybrid work environments, teams struggle to know who will be in the office, which makes collaboration and event planning difficult. Existing solutions lack the simplicity and social features needed to encourage office attendance.",
          solution: "Calendify provides a clear, shared overview of office presence and event attendance with an intuitive interface accessible across all devices. The application serves as a social hub that motivates employees to collaborate and connect in person.",
          features: [
            {
              title: "Office Attendance Tracking",
              description: "Employees can easily mark when they'll be in the office, helping teams coordinate and plan collaboration days",
              icon: "calendar"
            },
            {
              title: "Event Management",
              description: "Admins can create company events like boardgame nights and hack-a-thons, while employees can easily sign up and track participation",
              icon: "event"
            },
            {
              title: "Room Booking System",
              description: "Real-time meeting room availability with instant booking functionality to streamline workspace management",
              icon: "room"
            },
            {
              title: "Admin Dashboard",
              description: "Comprehensive management interface for admins to create, edit, and monitor events with attendee tracking",
              icon: "dashboard"
            },
            {
              title: "Role-Based Access",
              description: "Secure authentication system with distinct permissions for administrators and regular employees",
              icon: "security"
            },
            {
              title: "Responsive Design",
              description: "Fully responsive interface that works seamlessly on desktop, tablet, and mobile devices with WCAG accessibility compliance",
              icon: "responsive"
            }
          ],
          techStack: {
            frontend: ["React", "TypeScript", "React Router", "Aceternity UI", "Framer Motion", "GSAP"],
            backend: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server"],
            architecture: ["RESTful API", "Session-based Authentication", "Service Layer Pattern", "DTO Pattern"]
          },
          architecture: "The application follows a modern client-server architecture with a React frontend communicating with an ASP.NET Core backend through RESTful APIs. The backend implements a clean service layer pattern with separate controllers for authentication, events, attendance, and room bookings.",
          challenges: [
            "Implementing real-time room availability checking to prevent double bookings",
            "Designing an intuitive UI that works across multiple device sizes while maintaining WCAG accessibility standards",
            "Building a robust role-based authentication system with session management"
          ],
          learnings: [
            "Mastered full-stack development with React and C#/.NET integration",
            "Gained experience with complex relational database design and Entity Framework",
            "Learned to implement accessible and responsive interfaces following WCAG guidelines"
          ]
        }
      },
      {
        id: "urban-mobility",
        title: "Urban Mobility",
        description: "Smart urban transportation solution for modern cities",
        category: "persoonlijk",
        subcategory: "systemen",
        thumbnail: "/professional_terminal_interface_with_urban_mobility_text_v2.png",
        technologies: ["React", "TypeScript", "Maps API", "Mobile", "IoT"],
        links: {},
        featured: true,
        details: "Innovative urban mobility platform connecting transport options in the city"
      },
      {
        id: "shipment-tracking",
        title: "Shipment Tracking System",
        description: "Real-time logistics and shipment tracking solution",
        category: "persoonlijk",
        subcategory: "systemen",
        thumbnail: "/modern_warehouse_logistics_visualization_large_distribution_center.jpeg",
        technologies: ["React", "TypeScript", "Logistics", "Real-time Tracking", "API Integration"],
        links: {},
        featured: true,
        details: "Complete shipment tracking system with real-time updates and logistics management"
      },
      {
        id: "spirit-engineering",
        title: "Spirit Engineering Portfolio",
        description: "Portfolio website",
        category: "persoonlijk",
        subcategory: "websites",
        thumbnail: "/dark_modern_engineering_portfolio_brain_wb_logo.jpg",
        technologies: ["React", "TypeScript", "Portfolio", "Web Design"],
        links: {},
        featured: true,
        details: "Modern portfolio website showcasing engineering projects and services"
      },
      {
        id: "spirit-engineering-bv",
        title: "SpirIT Engineering BV",
        description: "Portfolio website",
        category: "persoonlijk",
        subcategory: "websites",
        thumbnail: "/sophisticated_dark_engineering_luminous_split_brain.jpg",
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
        thumbnail: "/futuristic_cryptocurrency_trading_bot_visualization_wb_logo.jpg",
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
        thumbnail: "/professional_checkers_board_game_dc_par_logo.jpg",
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
        thumbnail: "/dynamic_truck_logistics_visualization_interactive_map.jpg",
        technologies: ["Almost Done"],
        links: {},
        featured: true,
        details: "Advanced management system for tracking and managing truck fleet operations",
        comingSoon: true
      }
    ]
  }
];

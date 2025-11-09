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
        id: "rdam-app",
        title: "Rdam App",
        description: "Innovative mobile application for Rotterdam (Coming Soon)",
        category: "bedrijven",
        thumbnail: "/their_is_a_lil_glitch_fix_it.jpeg",
        technologies: ["React Native", "TypeScript", "Mobile", "Innovation"],
        links: {},
        featured: true,
        details: "Revolutionary app for Rotterdam citizens - in development"
      },
      {
        id: "shipment-tracking",
        title: "Shipment Tracking System",
        description: "Real-time logistics and shipment tracking solution for businesses",
        category: "bedrijven",
        thumbnail: "/modern_warehouse_logistics_visualization_large_distribution_center.jpeg",
        technologies: ["React", "TypeScript", "Logistics", "Real-time Tracking", "API Integration"],
        links: {},
        featured: true,
        details: "Complete shipment tracking system with real-time updates and logistics management"
      },
      {
        id: "rijschool-management",
        title: "Rijschool Management Systeem",
        description: "Comprehensive driving school management system for lessons and students",
        category: "bedrijven",
        thumbnail: "/modern_driving_school_management_dashboard_clean_scheduling.jpeg",
        technologies: ["React", "TypeScript", "Scheduling", "Student Management"],
        links: {},
        featured: true,
        details: "Complete management system for driving schools with scheduling and student tracking"
      },
      {
        id: "wk-game",
        title: "WK Game",
        description: "Interactive World Cup prediction game platform",
        category: "bedrijven",
        thumbnail: "/dynamic_football_stadium_scene_with_bright_floodlights.png",
        technologies: ["React", "TypeScript", "Gaming", "Real-time"],
        links: {},
        featured: true,
        details: "Engaging World Cup prediction game with real-time updates and leaderboards"
      },
      {
        id: "sneak-up",
        title: "Sneak UP",
        description: "Innovative sneaker marketplace and community platform",
        category: "bedrijven",
        thumbnail: "/_remove_the_flits_and_remove_dare.jpeg",
        technologies: ["React", "TypeScript", "E-commerce", "Community"],
        links: {},
        featured: true,
        details: "Modern sneaker marketplace with community features and authentication"
      },
      {
        id: "meet-up",
        title: "Meet UP",
        description: "Social networking platform for organizing and joining local meetups",
        category: "bedrijven",
        thumbnail: "/meet_up_needs_to_be_on_top.jpeg",
        technologies: ["React", "TypeScript", "Social", "Events"],
        links: {},
        featured: true,
        details: "Platform for creating and discovering local events and meetups"
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
        description: "Smart calendar application for managing schedules and events",
        category: "persoonlijk",
        subcategory: "websites",
        thumbnail: "/professional_office_management_dashboard_clean_calendar_interface.jpeg",
        technologies: ["React", "TypeScript", "Calendar API", "UI/UX"],
        links: {},
        featured: true,
        details: "Modern calendar app with intuitive interface and smart scheduling features"
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
        id: "crypto-bot",
        title: "Crypto Bot",
        description: "Automated cryptocurrency trading bot with advanced algorithms",
        category: "persoonlijk",
        subcategory: "crypto",
        thumbnail: "/futuristic_cryptocurrency_trading_bot_visualization_wb_logo.jpg",
        technologies: ["Python", "Trading APIs", "Machine Learning", "Blockchain"],
        links: {},
        featured: true,
        details: "Intelligent trading bot for cryptocurrency markets with real-time analytics"
      },
      {
        id: "dc-par",
        title: "DC PAR - Damclub",
        description: "Digital platform for the local checkers club",
        category: "persoonlijk",
        subcategory: "websites",
        thumbnail: "/professional_checkers_board_game_dc_par_logo.jpg",
        technologies: ["React", "TypeScript", "Community", "Sports"],
        links: {},
        featured: true,
        details: "Community platform for checkers enthusiasts with game management and member features",
        darkOverlay: true
      },
      {
        id: "dp-trucks",
        title: "DP-Trucks Management Systeem",
        description: "Comprehensive fleet management system for truck operations",
        category: "persoonlijk",
        subcategory: "systemen",
        thumbnail: "/dynamic_truck_logistics_visualization_interactive_map.jpg",
        technologies: ["React", "TypeScript", "Fleet Management", "Logistics"],
        links: {},
        featured: true,
        details: "Advanced management system for tracking and managing truck fleet operations"
      },
      {
        id: "spirit-engineering",
        title: "Spirit Engineering Portfolio",
        description: "Professional portfolio website for engineering services",
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
        description: "Corporate engineering solutions and consulting services",
        category: "persoonlijk",
        subcategory: "websites",
        thumbnail: "/sophisticated_dark_engineering_luminous_split_brain.jpg",
        technologies: ["React", "TypeScript", "Corporate", "Engineering", "Consulting"],
        links: {},
        featured: true,
        details: "Professional engineering consultancy platform with advanced technical solutions"
      }
    ]
  }
];

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlobalNavbar from "../../components/GlobalNavbar";
import ContactBar from "../../components/ContactBar";
import Footer from "../../components/Footer";
import LightPillar from "../../components/Effects/LightPillar";
import { useLanguage } from "../../contexts/LanguageContext";

// Event interface
interface Event {
  id: number;
  title: string;
  type: "hackathon" | "workshop" | "conference" | "meetup";
  category: "cybersecurity" | "ai" | "blockchain" | "overig";
  date: string;
  displayDate: string;
  location: string;
  participants: string;
  description: string;
  image: string;
  imagePosition?: string;
  // Extended info for detail page
  myExperience?: string;
  highlights?: string[];
  learned?: string[];
  conclusion?: string;
  photos?: string[];
  videos?: string[];
  // Status for upcoming events
  isUpcoming?: boolean;
  // Call-to-action for waitlist/signup
  cta?: {
    title: string;
    text: string;
    buttonText: string;
    buttonUrl: string;
  };
}

type CategoryFilter = "all" | "cybersecurity" | "ai" | "blockchain" | "overig";

const EventPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [sortOrder, setSortOrder] = useState<"recent" | "oldest">("recent");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [lightboxMedia, setLightboxMedia] = useState<{ url: string; index: number; type: 'photo' | 'video' } | null>(null);

  // Block body scroll when detail overlay or lightbox is open
  useEffect(() => {
    const scrollY = window.scrollY;

    if (selectedEvent || lightboxMedia) {
      document.body.classList.add('modal-open');
      document.body.dataset.scrollY = String(scrollY);
    } else {
      document.body.classList.remove('modal-open');
      const savedScrollY = document.body.dataset.scrollY;
      if (savedScrollY) {
        window.scrollTo(0, parseInt(savedScrollY));
        delete document.body.dataset.scrollY;
      }
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedEvent, lightboxMedia]);

  // Escape key to close lightbox
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxMedia) {
          setLightboxMedia(null);
        } else if (selectedEvent) {
          setSelectedEvent(null);
        }
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [lightboxMedia, selectedEvent]);

  // Category filter buttons
  const categories: { key: CategoryFilter; label: string; icon: React.ReactNode }[] = [
    {
      key: "all",
      label: t("eventpage.filter.all"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      key: "cybersecurity",
      label: "Cybersecurity",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      key: "ai",
      label: "AI & ML",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      key: "blockchain",
      label: "Blockchain",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      key: "overig",
      label: "Overig",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      )
    },
  ];

  // Event data
  const events: Event[] = useMemo(() => [
    {
      id: 1,
      title: "AI Fixathon Amsterdam",
      type: "hackathon",
      category: "ai",
      date: "2025-12-13",
      displayDate: "13-14 december 2025",
      location: "Vandebron, Amsterdam",
      participants: "Max 40 deelnemers",
      description: "Een weekend lang doorhacken op AI-oplossingen die de wereld een stukje beter maken. Van gezondheidszorg tot klimaatactie – samen met het LUMC en andere partners bouwen we technologie met betekenis.",
      image: "/events/AIFixathonAmsterdam.jpg",
      isUpcoming: true,
      myExperience: "Binnenkort, op 13 en 14 december 2025, ga ik een intens hackathon-weekend tegemoet bij Vandebron in Amsterdam. Met een compact team van maximaal drie personen tackle ik uitdagingen die er echt toe doen: de UN Sustainable Development Goals. Partners zoals het LUMC brengen concrete vraagstukken uit de praktijk mee. Dit wordt de perfecte mix van technische uitdaging en maatschappelijke relevantie.",
      highlights: [
        "32 uur aaneengesloten hacken: van zaterdagochtend 10:00 tot zondagmiddag 18:00",
        "Vier SDG-tracks: Gezondheid & Welzijn, Duurzame Productie, Circulaire Economie en Klimaatactie",
        "Het LUMC levert real-world challenges uit de medische praktijk",
        "Teamgrootte: maximaal 3 personen, alleen of met bekenden",
        "GreenPT en ActivePieces stellen gratis cloud credits en development tools beschikbaar",
        "Vandebron regelt alle maaltijden en versnaperingen",
        "Te winnen: cashprijzen, platform credits en exclusieve merchandise",
        "Veelbelovende prototypes krijgen kans op verdere ontwikkeling met partners",
        "Volledige transparantie: alle geschreven code wordt open-source gepubliceerd"
      ],
      learned: [
        "AI-systemen ontwikkelen die daadwerkelijk bijdragen aan de SDGs",
        "No-code/low-code AI agents bouwen met het ActivePieces platform",
        "Energie-efficiënt werken met large language models via GreenPT",
        "Technische oplossingen bedenken voor complexe medische vraagstukken",
        "Best practices rondom open-source development en samenwerking",
        "De stap maken van hackathon-prototype naar productiewaardige applicatie"
      ],
      conclusion: "De Norrsken AI Fixathon is geen doorsnee hackathon. Het maakt deel uit van een wereldwijd netwerk dat AI inzet voor de belangrijkste uitdagingen van onze tijd. Met het LUMC als partner werk je aan vraagstukken die direct uit de praktijk komen. En het interessantste: als je prototype potentie toont, kun je het na afloop verder uitbouwen tot iets dat echt wordt gebruikt."
    },
    {
      id: 2,
      title: "Apify $1M Challenge: Amsterdam",
      type: "hackathon",
      category: "ai",
      date: "2025-12-06",
      displayDate: "6 december 2025",
      location: "Meet Berlage, Amsterdam",
      participants: "13 deelnemers",
      description: "In één dag met een team van 4 een compleet woningscraping platform neergezet. WoningSpotters haalt automatisch koop- en huurwoningen op van Nederlandse vastgoedsites.",
      image: "/events/ApifyChallenge.jpeg",
      myExperience: "Op 6 december namen we met z'n vieren de Apify $1M Challenge aan. Het resultaat: WoningSpotters – een platform dat woningdata verzamelt van vrijwel alle Nederlandse huizensites. We combineerden een React frontend met Python en Apify voor het scrapen. Een dag vol gas geven, en het werkte!",
      highlights: [
        "Eéndaagse coding sessie (10:00-18:00) in het monumentale Meet Berlage",
        "WoningSpotters ontwikkeld: automatisch woningaanbod verzamelen",
        "Brons gepakt met ons viertal!",
        "Tech stack: React UI + Python backend + Apify scrapers",
        "Diverse Nederlandse woningplatforms aangesloten",
        "Directe hulp van Apify developers ter plekke",
        "Verzorgde catering de hele dag",
        "In contact gekomen met andere scraping-enthousiastelingen"
      ],
      learned: [
        "Scrapen van sites met uiteenlopende HTML-structuren",
        "Apify inzetten voor betrouwbare en opschaalbare datacollectie",
        "Data transformeren en verwerken met Python scripts",
        "Snel interfaces bouwen met React",
        "In één dag van nul naar werkend product",
        "Technische demo's geven aan jury",
        "Contacten leggen in de scraping-wereld"
      ],
      conclusion: "Eén dag, één doel: WoningSpotters neerzetten. Het lukte, inclusief een derde plek als beloning. React, Python en Apify bleken een winnende combinatie voor dit woningmarkt-probleem.",
      photos: [
        "/events/apify/ApifyChallenge1.JPG"
      ],
      videos: [
        "/events/apify/Video van WhatsApp op 2025-12-10 om 19.34.07_095c0d8b.mp4",
        "/events/apify/Video van WhatsApp op 2025-12-10 om 19.34.07_fba44fad.mp4",
        "/events/apify/Video van WhatsApp op 2025-12-10 om 19.35.30_0b2d2078.mp4"
      ]
    },
    {
      id: 3,
      title: "Build Weekend by Young Creators & n8n",
      type: "hackathon",
      category: "ai",
      date: "2025-11-29",
      displayDate: "29-30 november 2025",
      location: "StartDock, Amsterdam",
      participants: "~150 builders (25 teams van 4-6 personen)",
      description: "Twee dagen non-stop bouwen met andere jonge developers. Met het team een werkend prototype opgeleverd onder begeleiding van ervaren mentors.",
      image: "/events/buildweekendbyyoungcreators.png",
      myExperience: "Met Damian Willemse, Mohammad Falaha, Rachid Ouaalit en Hicham Tahiri trokken we naar dit hackathon weekend. Ons eindresultaat: FoodSwipe – een swipe-based app voor het ontdekken van restaurants en recepten, TikTok-style. De AI-component liet gebruikers ingrediënten invoeren om direct een passend recept te krijgen.",
      highlights: [
        "FoodSwipe gebouwd: restaurants en recepten ontdekken via swipen",
        "AI-receptgenerator op basis van beschikbare ingrediënten",
        "Toolkit: n8n, Apify, Lovable, OpenAI en ElevenLabs",
        "Partners stelden tools en support beschikbaar",
        "Prijs gewonnen: 1 jaar n8n Cloud Pro (door het dragen van een n8n-pet!)",
        "48 uur intensief coderen en itereren als team"
      ],
      learned: [
        "Processen automatiseren via n8n workflows",
        "Restaurant-info scrapen met Apify actors",
        "Razendsnel prototypen met Lovable",
        "OpenAI koppelen voor slimme receptsuggesties",
        "Audio genereren via ElevenLabs voor promotiecontent",
        "In 48 uur van idee naar demo-ready product"
      ],
      conclusion: "Build Weekend was pittig maar ontzettend leerzaam. FoodSwipe werd een succes, ook zonder hoofdprijs. De diepgaande kennismaking met n8n en Apify was de grootste winst. Bonus: door een simpele n8n-pet te dragen scoorden we een jaar gratis Cloud Pro. Van schets naar werkend prototype in twee dagen – dat blijft bijzonder.",
      photos: [
        "/events/buildweekend/BuildWeekend2.jpg",
        "/events/buildweekend/BuildWeekend4.jpg",
        "/events/buildweekend/BuildWeekend5.jpg"
      ],
      cta: {
        title: "FoodSwipe op je radar?",
        text: "Wil je als eerste weten wanneer FoodSwipe live gaat? Zet jezelf op de waitlist en we houden je op de hoogte!",
        buttonText: "Zet me op de waitlist",
        buttonUrl: "#foodswipe-waitlist"
      }
    },
    {
      id: 4,
      title: "Mendix Capture The Flag 2025",
      type: "conference",
      category: "cybersecurity",
      date: "2025-10-09",
      displayDate: "9-10 oktober 2025",
      location: "Wereldwijd (17 locaties)",
      participants: "1.092 hackers wereldwijd",
      description: "Internationale hacking-wedstrijd georganiseerd door Mendix. Twee dagen lang security challenges kraken samen met hackers van over de hele wereld.",
      image: "/events/MendixCTF2025.webp",
      myExperience: "Mijn CTF-debuut, samen met Hicham Tahiri, Damian Willemse en Mohammad Falaha. De competitie telde 27 uitdagingen verdeeld over drie niveaus. Als complete beginners wisten we 12 flags te veroveren – meer dan we hadden verwacht.",
      highlights: [
        "27 security puzzels op drie moeilijkheidsgraden",
        "12 flags gescoord als team",
        "15+ workshops specifiek over Mendix security",
        "Globaal evenement: 1.092 hackers verspreid over 17 landen",
        "Coaching van security specialisten op locatie",
        "Exclusieve swag voor alle deelnemers"
      ],
      learned: [
        "Introductie tot CTF-wedstrijden en ethical hacking praktijken",
        "Kwetsbaarheden spotten binnen Mendix-applicaties",
        "Begrijpen hoe aanvallen werken én hoe je ze tegengaat",
        "Presteren als team wanneer de druk hoog is",
        "Hands-on werken met pentest tools"
      ],
      conclusion: "Debuut gemaakt in de CTF-wereld en direct 12 van 27 flags binnengehaald. Hacken leer je door te doen – bugs vinden en exploiteren in een veilige omgeving. De combinatie van competitie, begeleiding en een wereldwijde community maakte dit onvergetelijk.",
      photos: [
        "/events/mendixCTF2025/MendixCTF20252.jpg"
      ],
      videos: [
        "/events/mendixCTF2025/Video van WhatsApp op 2025-12-10 om 19.55.35_1d0e9434.mp4",
        "/events/mendixCTF2025/Video van WhatsApp op 2025-12-10 om 19.55.35_3ee4de39.mp4",
        "/events/mendixCTF2025/Video van WhatsApp op 2025-12-10 om 19.55.35_7f28f046.mp4",
        "/events/mendixCTF2025/Video van WhatsApp op 2025-12-10 om 19.55.35_87b5fbb5.mp4",
        "/events/mendixCTF2025/Video van WhatsApp op 2025-12-10 om 19.55.35_d0e567b0.mp4"
      ]
    },
    {
      id: 5,
      title: "CityLab010 Netwerkevent",
      type: "workshop",
      category: "overig",
      date: "2025-09-10",
      displayDate: "10 september 2025",
      location: "Het Timmerhuis, Rotterdam",
      participants: "TBD",
      description: "Netwerkavond van CityLab010: plannenmakers, ondernemers en gemeentemedewerkers ontmoeten elkaar om projecten te bespreken en feedback uit te wisselen.",
      image: "/events/Citylab010Netwerkavond.jpg",
      myExperience: "Hicham Tahiri, Damian Willemse en ik presenteerden ons idee: een toerisme-app gericht op Rotterdam. Vanuit onze eigen tafel konden we pitchen aan voorbijgangers. De avond draaide om uitwisseling – we hoorden de plannen van anderen en kregen waardevolle feedback op onze eigen visie.",
      highlights: [
        "Standplaats om ons Rotterdam toerisme-concept te presenteren",
        "Face-to-face met de Stadsjury, andere plannenmakers en gemeente-experts",
        "Workshop over hoe het CityLab-traject in de praktijk werkt",
        "Concrete Blossom gaf een sessie over ondernemen vanuit je eigen leefwereld",
        "Inzichten over cultureel erfgoed als fundament voor sociaal ondernemen",
        "Verhalen van oud-deelnemers die het CityLab010 programma hebben afgerond"
      ],
      learned: [
        "Hoe het CityLab010 ondersteuningsprogramma eruitziet voor starters",
        "Ondernemerschap dat vertrekt vanuit je persoonlijke context",
        "Slim schakelen binnen gemeentelijke systemen en kansen",
        "De link tussen erfgoed en maatschappelijk ondernemen",
        "Netwerken en feedback verzamelen bij relevante stakeholders",
        "Waar de Stadsjury op let bij het beoordelen van initiatieven"
      ],
      conclusion: "Een avond vol gesprekken die ons toerisme-idee aanscherpten. Contact met experts en andere plannenmakers bracht concrete verbeterpunten aan het licht en maakte duidelijk wat de gemeente kan bieden. De workshops over leefwerelden en het CityLab-traject gaven praktisch toepasbare kennis.",
      photos: []
    },
    {
      id: 6,
      title: "Hackathon Computational Science",
      type: "hackathon",
      category: "ai",
      date: "2025-06-14",
      displayDate: "14 juni 2025",
      location: "De Zalen van Zeven, Utrecht, Netherlands",
      participants: "~35 deelnemers (7 teams)",
      description: "Inaugurele wetenschappelijke hackathon: in Julia een watersimulatiemodel programmeren voor Deltares.",
      image: "/events/ComputationalScienceNL.jpg",
      myExperience: "Team BBBs: Damian Willemse, Hicham Tahiri en ik. De challenge: een 1D shallow-water solver schrijven in Julia, een taal waar we nul ervaring mee hadden. Zes uur lang worstelden we met numerieke modellen en visualisaties. De verwachting was laag, het resultaat verraste: Honorable Mention!",
      highlights: [
        "Waterstroming gesimuleerd via 1D shallow-water equations in Julia",
        "Venue: De Zalen van Zeven, een oude kerk omgetoverd tot eventlocatie",
        "Demo gegeven aan specialisten van Deltares, VORtech BV en externe beoordelaars",
        "Honorable Mention in de wacht gesleept als Team BBBs",
        "Nieuwe contacten binnen de Nederlandse computational science scene"
      ],
      learned: [
        "Julia en numerieke simulatietechnieken voor het eerst toegepast",
        "Shallow-water vergelijkingen vertalen naar watermodellen",
        "Functioneren met een compleet onbekende tech stack onder tijdsdruk",
        "Complexe technische ideeën bondig presenteren",
        "Volhouden ook als het eindresultaat onzeker aanvoelt"
      ],
      conclusion: "Zonder Julia-achtergrond toch een Honorable Mention veroverd. Bewijs dat teamwork en doorzetten belangrijker zijn dan voorkennis bij technische uitdagingen.",
      photos: []
    },
    {
      id: 7,
      title: "Xebia GitHub Copilot Hackathon",
      type: "hackathon",
      category: "ai",
      date: "2025-05-21",
      displayDate: "21 mei 2025",
      location: "Xebia Hilversum, Laapersveld 27, Netherlands",
      participants: "~50 deelnemers",
      description: "Hackathon rondom AI-gestuurd programmeren. Geleerd hoe je GitHub Copilot effectief inzet door middel van speelse challenges.",
      image: "/events/XebiaGithubCopilotHackathon.jpeg",
      myExperience: "Samen met Hicham Tahiri en Damian Willemse kozen we voor Track 2: Advanced Mode. Thijs Limmen en Liuba Gonta gaven ons een intro. In twee uur bouwden we via AI-prompting een werkend spel – leerzaam én vermakelijk.",
      highlights: [
        "Track 2 (Advanced Mode) introductie door Thijs Limmen en Liuba Gonta",
        "Twee uur de tijd om via AI prompting een game te bouwen",
        "Met Hicham een Pokémon-style spel in elkaar gezet",
        "Direct aan de slag met geavanceerde Copilot functies",
        "Afsluiting met borrel waar iedereen zijn creaties toonde"
      ],
      learned: [
        "Prompts formuleren die complexere code opleveren",
        "Copilot toepassen voor game logic en development",
        "Teamwork waarbij AI-tools de hoofdrol spelen",
        "Repetitieve taken slim uitbesteden aan Copilot",
        "Geavanceerde Copilot-features die je workflow versnellen"
      ],
      conclusion: "Deze hackathon liet zien wat GitHub Copilot kan wanneer je de tool goed kent. In twee uur een Pokémon-achtig spel neerzetten was pittig maar waardevol. De inzichten over AI-prompting en het optimaal benutten van Copilot neem ik mee in mijn dagelijkse werk.",
      photos: [
        "/events/xebiaHackathon/XebiaGitHubCopilotHackathon2.jpg",
        "/events/xebiaHackathon/XebiaGitHubCopilotHackathon3.jpg"
      ]
    },
    {
      id: 8,
      title: "Agency at Night",
      type: "meetup",
      category: "overig",
      date: "2025-05-16",
      displayDate: "16 mei 2025",
      location: "Rotterdam (51 agencies)",
      participants: "TBD",
      description: "Speciale avond waarop 51 Rotterdamse agencies hun deuren openzetten. Inzichten opgedaan over marketing, design en digitale innovatie via presentaties en workshops.",
      image: "/events/AgencyAtNight.png",
      imagePosition: "20%",
      myExperience: "Met Hicham Tahiri en Damian Willemse bezochten we zes agencies en schoven aan bij allerlei workshops. Een avond boordevol inspiratie over marketing automation, AI-toepassingen, SEO-strategieën en creatieve challenges.",
      highlights: [
        "100procent | united playground: sessie over marketing automation en resultaatoptimalisatie",
        "Marketing Engineers: GeoGuessr competitie",
        "Tastylemon: professionele fotoshoot en brand experience",
        "Das Buro: branding quiz met certificaat Das Buro Branding Professional Degree",
        "Candid: challenge rond AI prompting met v0.dev",
        "Buro voor de boeg: workshop AI-gedreven zoekmachineoptimalisatie"
      ],
      learned: [
        "Automation-aanpak voor maximale marketingresultaten",
        "AI praktisch inzetten voor betere SEO-prestaties",
        "Snelle prototypes maken via v0.dev prompting",
        "Branding-basics plus officieel certificaat",
        "Contacten opbouwen met creatieve professionals in Rotterdam",
        "Beter begrip van de verschillende agency-disciplines en werkstijlen"
      ],
      conclusion: "Agency at Night bood in één avond een kijkje bij diverse Rotterdamse creative agencies. Van automation tot AI-SEO, van branding tot prompting – de variatie aan sessies gaf een breed beeld van de creatieve sector. Het Das Buro Branding Professional Degree certificaat was een leuke extra.",
      photos: [
        "/events/agencyatNight/Afbeelding van WhatsApp op 2025-12-10 om 18.35.47_1734985d.jpg",
        "/events/agencyatNight/Afbeelding van WhatsApp op 2025-12-10 om 18.35.48_48507a43.jpg"
      ]
    },
  ], []);

  // Filter and sort events
  const filteredEvents = useMemo(() => {
    const filtered = activeCategory === "all"
      ? events
      : events.filter(e => e.category === activeCategory);

    return filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "recent" ? dateB - dateA : dateA - dateB;
    });
  }, [activeCategory, sortOrder, events]);

  // Get type badge styles
  const getTypeBadgeStyles = (type: string) => {
    switch (type) {
      case "hackathon":
        return "bg-purple-500/20 text-purple-400 border-purple-500/50";
      case "workshop":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/50";
      case "conference":
        return "bg-red-500/20 text-red-400 border-red-500/50";
      case "meetup":
        return "bg-orange-500/20 text-orange-400 border-orange-500/50";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/50";
    }
  };

  // Get type label
  const getTypeLabel = (type: string) => {
    switch (type) {
      case "hackathon": return "Hackathon";
      case "workshop": return "Workshop";
      case "conference": return "Conference";
      case "meetup": return "Meetup";
      default: return type;
    }
  };

  // Placeholder image based on type
  const getPlaceholderGradient = (type: string) => {
    switch (type) {
      case "hackathon":
        return "from-purple-600 via-violet-600 to-indigo-700";
      case "workshop":
        return "from-emerald-600 via-teal-600 to-cyan-700";
      case "conference":
        return "from-red-600 via-rose-600 to-pink-700";
      case "meetup":
        return "from-orange-600 via-amber-600 to-yellow-700";
      default:
        return "from-slate-600 via-slate-700 to-slate-800";
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden" data-page="event">
      {/* Fixed LightPillar Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <LightPillar
          topColor="#8B5CF6"
          bottomColor="#06B6D4"
          intensity={0.5}
          rotationSpeed={0.12}
          glowAmount={0.006}
          pillarWidth={1.2}
          pillarHeight={0.4}
          noiseIntensity={0.15}
          mixBlendMode="screen"
        />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      <GlobalNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-8 overflow-hidden z-10">
        <div className="relative z-10 flex justify-center mb-6">
          <motion.div
            initial={{ y: -30, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-xl" />
            <div className="relative rounded-full bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 px-10 py-5 shadow-2xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5" />
              <h1 className="relative text-2xl md:text-4xl font-bold text-center">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Events & Hackathons
                </span>
              </h1>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 text-center text-blue-200/60 max-w-2xl mx-auto px-6"
        >
          {t("eventpage.subtitle")}
        </motion.p>
      </section>

      {/* Filter Bar */}
      <section className="z-10 py-6 sticky top-16 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-between gap-4"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(({ key, label, icon }) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === key
                      ? "bg-gradient-to-r from-purple-500/90 to-blue-500/90 text-white shadow-lg shadow-purple-500/40 border-2 border-purple-400/50"
                      : "bg-transparent text-slate-300 hover:bg-slate-800/30 border-2 border-slate-500/60 hover:border-purple-500/50 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {icon}
                  {label}
                </motion.button>
              ))}
            </div>

            {/* Sort Toggle */}
            <motion.button
              onClick={() => setSortOrder(prev => prev === "recent" ? "oldest" : "recent")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-transparent text-slate-300 hover:bg-slate-800/30 border-2 border-slate-500/60 hover:border-cyan-500/50 hover:text-white text-sm transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              {sortOrder === "recent" ? "Recent" : "Oudste"}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="relative z-10 py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + sortOrder}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredEvents.length === 0 ? (
                <div className="col-span-full text-center py-16">
                  <p className="text-slate-400 text-lg">Geen events gevonden in deze categorie</p>
                </div>
              ) : (
                filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => {
                      setSelectedEvent(event);
                      // Reset both page and modal scroll
                      window.scrollTo({ top: 0, behavior: 'instant' });
                      setTimeout(() => {
                        const modal = document.querySelector('[data-event-modal]');
                        if (modal) modal.scrollTop = 0;
                      }, 10);
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-full rounded-2xl bg-slate-900/40 backdrop-blur-sm border-2 border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2">
                      {/* Event Image - Lazy loaded */}
                      <div className={`relative h-56 md:h-64 bg-gradient-to-br ${getPlaceholderGradient(event.type)} overflow-hidden`}>
                        {event.image ? (
                          <img
                            src={event.image}
                            alt={event.title}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out md:group-hover:scale-110"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-white/30 text-6xl font-bold">
                                {event.title.charAt(0)}
                              </span>
                            </div>
                          </>
                        )}
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition-opacity duration-300" />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-purple-500/0 transition-all duration-300 md:group-hover:bg-purple-500/10" />

                        {/* Type Badge on image */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm ${getTypeBadgeStyles(event.type)}`}>
                            {getTypeLabel(event.type)}
                          </span>
                          {event.isUpcoming && (
                            <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm bg-amber-500/20 text-amber-400 border-amber-500/50">
                              Aankomend
                            </span>
                          )}
                        </div>

                        {/* Title overlay on image */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors line-clamp-2 drop-shadow-lg">
                            {event.title}
                          </h3>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5">
                        {/* Event Details */}
                        <div className="space-y-3 mb-4">
                          {/* Date */}
                          <div className="flex items-center gap-3 text-slate-300">
                            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <span className="text-sm font-medium">{event.displayDate}</span>
                          </div>

                          {/* Location */}
                          <div className="flex items-center gap-3 text-slate-300">
                            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <span className="text-sm font-medium truncate">{event.location}</span>
                          </div>

                          {/* Participants */}
                          <div className="flex items-center gap-3 text-slate-300">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <span className="text-sm font-medium">{event.participants}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
                          {event.description}
                        </p>

                        {/* View more indicator */}
                        <div className="mt-4 flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                          <span>Bekijk details</span>
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Event Detail Page Overlay */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-[10000] bg-slate-950 overflow-y-auto overflow-x-hidden dark-scrollbar"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflowY: 'auto',
              overflowX: 'hidden',
              WebkitOverflowScrolling: 'touch',
            }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onAnimationComplete={() => {
              // Scroll modal to top when opening
              const modal = document.querySelector('[data-event-modal]');
              if (modal) modal.scrollTop = 0;
            }}
            data-event-modal
          >
            {/* Background Effect - pointer-events-none to not block content */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <LightPillar
                topColor="#8B5CF6"
                bottomColor="#06B6D4"
                intensity={0.3}
                rotationSpeed={0.08}
                glowAmount={0.004}
                pillarWidth={1.0}
                pillarHeight={0.3}
                noiseIntensity={0.1}
                mixBlendMode="screen"
              />
              <div className="absolute inset-0 bg-slate-950/60" />
            </div>

            {/* Content - starts at top of viewport */}
            <div className="relative z-10 min-h-screen pointer-events-auto pt-0">
              {/* Hero Image - Lazy loaded */}
              <div className={`relative h-64 md:h-96 bg-gradient-to-br ${getPlaceholderGradient(selectedEvent.type)}`}>
                {selectedEvent.image ? (
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      objectPosition: selectedEvent.imagePosition 
                        ? `center ${selectedEvent.imagePosition}` 
                        : 'center center'
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-9xl font-bold">
                      {selectedEvent.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Title on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm ${getTypeBadgeStyles(selectedEvent.type)}`}>
                        {getTypeLabel(selectedEvent.type)}
                      </span>
                      {selectedEvent.isUpcoming && (
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm bg-amber-500/20 text-amber-400 border-amber-500/50">
                          Aankomend Event
                        </span>
                      )}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                      {selectedEvent.title}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Main Info */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* My Experience - if available */}
                    {selectedEvent.myExperience ? (
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <button
                            onClick={() => setSelectedEvent(null)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/50 transition-all group text-sm"
                          >
                            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="font-medium">Alle events</span>
                          </button>
                          <h2 className="text-xl font-semibold text-white flex items-center gap-3">
                            <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></span>
                            {selectedEvent.isUpcoming ? "Mijn Verwachtingen" : "Mijn Ervaring"}
                          </h2>
                          {selectedEvent.isUpcoming && (
                            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold border border-amber-500/50">
                              Aankomend Event
                            </span>
                          )}
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg">
                          {selectedEvent.myExperience}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <button
                            onClick={() => setSelectedEvent(null)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/50 transition-all group text-sm"
                          >
                            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="font-medium">Alle events</span>
                          </button>
                          <h2 className="text-xl font-semibold text-white flex items-center gap-3">
                            <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></span>
                            Over dit event
                          </h2>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg">
                          {selectedEvent.description}
                        </p>
                      </div>
                    )}

                    {/* Highlights - if available */}
                    {selectedEvent.highlights && selectedEvent.highlights.length > 0 && (
                      <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/50">
                        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                          Hoogtepunten
                        </h2>
                        <div className="space-y-3">
                          {selectedEvent.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start gap-3 text-slate-300">
                              <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Photos & Videos section - Lazy loaded */}
                    {(selectedEvent.photos !== undefined || selectedEvent.videos !== undefined) && (() => {
                      // Combine photos and videos into one media array for unified navigation
                      const allMedia: { url: string; type: 'photo' | 'video' }[] = [
                        ...(selectedEvent.photos || []).map(url => ({ url, type: 'photo' as const })),
                        ...(selectedEvent.videos || []).map(url => ({ url, type: 'video' as const }))
                      ];

                      return (
                      <div>
                        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Foto's & Video's
                        </h2>
                        {allMedia.length > 0 ? (
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {allMedia.map((media, index) => (
                              <div
                                key={`media-${index}`}
                                className="relative aspect-video rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700/50 cursor-pointer group"
                                onClick={() => setLightboxMedia({ url: media.url, index, type: media.type })}
                              >
                                {media.type === 'photo' ? (
                                  <img
                                    src={media.url}
                                    alt={`${selectedEvent.title} foto ${index + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                ) : (
                                  <video
                                    src={media.url}
                                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                    muted
                                    playsInline
                                    preload="metadata"
                                  />
                                )}
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                  {media.type === 'video' ? (
                                    <svg className="w-12 h-12 text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M8 5v14l11-7z" />
                                    </svg>
                                  ) : (
                                    <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                  )}
                                </div>
                                {/* Video badge */}
                                {media.type === 'video' && (
                                  <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1 pointer-events-none">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M8 5v14l11-7z" />
                                    </svg>
                                    Video
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="p-8 rounded-xl bg-slate-800/30 border border-dashed border-slate-700/50 text-center">
                            <svg className="w-12 h-12 text-slate-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-slate-500">Foto's & video's komen binnenkort...</p>
                          </div>
                        )}
                      </div>
                    );
                    })()}

                    {/* What I learned */}
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 via-slate-800/50 to-cyan-500/10 border border-slate-700/50">
                      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {selectedEvent.isUpcoming ? "Wat Ik Wil Leren (verwacht / leerdoelen)" : "Wat ik heb geleerd"}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* Custom learned items if available */}
                        {selectedEvent.learned && selectedEvent.learned.length > 0 ? (
                          selectedEvent.learned.map((item, index) => {
                            const colors = ["bg-purple-400", "bg-cyan-400", "bg-emerald-400", "bg-orange-400", "bg-pink-400", "bg-blue-400"];
                            return (
                              <div key={index} className="flex items-start gap-3 text-slate-300">
                                <span className={`w-2 h-2 ${colors[index % colors.length]} rounded-full mt-2 flex-shrink-0`}></span>
                                <span>{item}</span>
                              </div>
                            );
                          })
                        ) : (
                          <>
                            {/* Default items based on type */}
                            {selectedEvent.type === "hackathon" && (
                              <>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                  Samenwerken onder tijdsdruk
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                  Snel prototypen en itereren
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                  Presenteren aan jury
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                                  Creatief problemen oplossen
                                </div>
                              </>
                            )}
                            {selectedEvent.type === "workshop" && (
                              <>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                  Hands-on ervaring opdoen
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                  Leren van experts
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                  Netwerken met vakgenoten
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                                  Nieuwe tools ontdekken
                                </div>
                              </>
                            )}
                            {selectedEvent.type === "conference" && (
                              <>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                  Inzichten van sprekers
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                  Industrie trends
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                  Best practices
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                                  Professioneel netwerk uitbreiden
                                </div>
                              </>
                            )}
                            {selectedEvent.type === "meetup" && (
                              <>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                  Connecties leggen
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                  Kennis delen
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                  Inspiratie opdoen
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                                  Community building
                                </div>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    </div>

                    {/* Conclusion - if available */}
                    {selectedEvent.conclusion && (
                      <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/50">
                        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Conclusie
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                          {selectedEvent.conclusion}
                        </p>
                      </div>
                    )}

                    {/* Call-to-action - if available */}
                    {selectedEvent.cta && (
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 border border-orange-500/30 relative overflow-hidden">
                        {/* Decorative background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-2xl" />

                        <div className="relative">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white">{selectedEvent.cta.title}</h3>
                          </div>

                          <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                            {selectedEvent.cta.text}
                          </p>

                          <motion.a
                            href={selectedEvent.cta.buttonUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            {selectedEvent.cta.buttonText}
                          </motion.a>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: Sidebar */}
                  <div className="space-y-4">
                    {/* Date */}
                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wider">Datum</p>
                          <p className="text-white font-semibold">{selectedEvent.displayDate}</p>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wider">Locatie</p>
                          <p className="text-white font-semibold">{selectedEvent.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Participants */}
                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wider">Deelnemers</p>
                          <p className="text-white font-semibold">{selectedEvent.participants}</p>
                        </div>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wider">Categorie</p>
                          <p className="text-white font-semibold capitalize">{selectedEvent.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Events Section */}
                <div className="mt-16">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></span>
                    Andere events waar ik ben geweest
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {events
                      .filter(e => e.id !== selectedEvent.id)
                      .slice(0, 6)
                      .map((event) => (
                        <motion.div
                          key={event.id}
                          onClick={() => {
                            setSelectedEvent(event);
                            // Reset both page and modal scroll
                            window.scrollTo({ top: 0, behavior: 'instant' });
                            setTimeout(() => {
                              const modal = document.querySelector('[data-event-modal]');
                              if (modal) modal.scrollTop = 0;
                            }, 10);
                          }}
                          className="group cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="relative rounded-xl bg-slate-900/60 border border-slate-700/50 overflow-hidden hover:border-purple-500/50 transition-all">
                            {/* Image - Lazy loaded */}
                            <div className={`relative h-32 bg-gradient-to-br ${getPlaceholderGradient(event.type)}`}>
                              {event.image ? (
                                <img
                                  src={event.image}
                                  alt={event.title}
                                  loading="lazy"
                                  decoding="async"
                                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-white/30 text-4xl font-bold">
                                    {event.title.charAt(0)}
                                  </span>
                                </div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                              {/* Badge */}
                              <div className="absolute top-2 left-2">
                                <span className={`inline-block px-2 py-1 rounded-full text-[10px] font-semibold border backdrop-blur-sm ${getTypeBadgeStyles(event.type)}`}>
                                  {getTypeLabel(event.type)}
                                </span>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                              <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-1 mb-1">
                                {event.title}
                              </h3>
                              <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{event.displayDate}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>

                  {/* Back to all events button */}
                  <div className="mt-10 flex justify-center">
                    <motion.button
                      onClick={() => setSelectedEvent(null)}
                      className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/50 text-white hover:from-purple-500/30 hover:to-cyan-500/30 hover:border-purple-400 transition-all group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span className="font-semibold">Bekijk alle events</span>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Footer in detail page */}
              <div className="relative z-10 mt-8">
                <ContactBar transparentBackground />
                <Footer transparentBackground />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Bar & Footer */}
      <div className="relative z-10">
        <ContactBar transparentBackground />
        <Footer transparentBackground />
      </div>

      {/* Media Lightbox - Supports both photos and videos */}
      {lightboxMedia && selectedEvent && (() => {
        // Create combined media array for navigation
        const allMedia: { url: string; type: 'photo' | 'video' }[] = [
          ...(selectedEvent.photos || []).map(url => ({ url, type: 'photo' as const })),
          ...(selectedEvent.videos || []).map(url => ({ url, type: 'video' as const }))
        ];

        const currentMedia = allMedia[lightboxMedia.index];
        if (!currentMedia) return null;

        return (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key="lightbox-overlay"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setLightboxMedia(null)}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxMedia(null);
                }}
                aria-label="Sluiten (Escape)"
                style={{
                  position: 'fixed',
                  top: '16px',
                  right: '16px',
                  zIndex: 100000,
                  padding: '12px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                }}
                className="hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation arrows */}
              {allMedia.length > 1 && (
                <>
                  {/* Previous */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const newIndex = lightboxMedia.index === 0 ? allMedia.length - 1 : lightboxMedia.index - 1;
                      const newMedia = allMedia[newIndex];
                      setLightboxMedia({ url: newMedia.url, index: newIndex, type: newMedia.type });
                    }}
                    aria-label="Vorige"
                    style={{
                      position: 'fixed',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 100000,
                      padding: '12px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    className="hover:bg-white/20 transition-colors backdrop-blur-sm"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Next */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const newIndex = lightboxMedia.index === allMedia.length - 1 ? 0 : lightboxMedia.index + 1;
                      const newMedia = allMedia[newIndex];
                      setLightboxMedia({ url: newMedia.url, index: newIndex, type: newMedia.type });
                    }}
                    aria-label="Volgende"
                    style={{
                      position: 'fixed',
                      right: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 100000,
                      padding: '12px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    className="hover:bg-white/20 transition-colors backdrop-blur-sm"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Centered Media Container */}
              <div
                className="relative"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  padding: '60px 16px',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {currentMedia.type === 'photo' ? (
                  <motion.img
                    key={lightboxMedia.url}
                    src={lightboxMedia.url}
                    alt={`${selectedEvent.title} foto ${lightboxMedia.index + 1}`}
                    className="rounded-lg shadow-2xl"
                    style={{
                      maxWidth: 'calc(100vw - 120px)',
                      maxHeight: 'calc(100vh - 120px)',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                ) : (() => {
                  const isMutedVideo = lightboxMedia.url.includes('d0e567b0') || lightboxMedia.url.includes('3ee4de39');
                  return (
                    <motion.video
                      key={lightboxMedia.url}
                      src={lightboxMedia.url}
                      className="rounded-lg shadow-2xl"
                      style={{
                        maxWidth: 'calc(100vw - 120px)',
                        maxHeight: 'calc(100vh - 120px)',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                      controls={!isMutedVideo}
                      autoPlay
                      loop={isMutedVideo}
                      playsInline
                      muted={isMutedVideo}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  );
                })()}
              </div>

              {/* Media counter with type indicator */}
              <div
                style={{
                  position: 'fixed',
                  bottom: '16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 100000,
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {currentMedia.type === 'video' && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
                {lightboxMedia.index + 1} / {allMedia.length}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        );
      })()}
    </div>
  );
};

export default EventPage;

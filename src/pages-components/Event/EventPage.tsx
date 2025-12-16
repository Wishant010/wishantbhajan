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
  thumbnail?: string; // Optional thumbnail for overview page
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

  // Handle browser back button for event detail overlay
  useEffect(() => {
    if (selectedEvent) {
      // Push a new history entry when opening event detail
      window.history.pushState({ eventOpen: true, eventId: selectedEvent.id }, '');
    }
  }, [selectedEvent]);

  // Listen for popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      // Close lightbox first, then event detail
      if (lightboxMedia) {
        setLightboxMedia(null);
      } else if (selectedEvent) {
        setSelectedEvent(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
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
      label: t("eventpage.category.cybersecurity"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      key: "ai",
      label: t("eventpage.category.ai"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      key: "blockchain",
      label: t("eventpage.category.blockchain"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      key: "overig",
      label: t("eventpage.category.other"),
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
      title: t('event.1.title'),
      type: "hackathon",
      category: "ai",
      date: "2025-12-13",
      displayDate: t('event.1.displayDate'),
      location: t('event.1.location'),
      participants: t('event.1.participants'),
      description: t('event.1.description'),
      image: "/events/AiFixathon/AIFixathonAmsterdam1.jpeg",
      thumbnail: "/events/AiFixathon/AIFixathonAmsterdam.jpg",
      myExperience: t('event.1.myExperience'),
      highlights: [
        t('event.1.highlight.1'),
        t('event.1.highlight.2'),
        t('event.1.highlight.3'),
        t('event.1.highlight.4'),
        t('event.1.highlight.5'),
        t('event.1.highlight.6'),
        t('event.1.highlight.7'),
        t('event.1.highlight.8'),
        t('event.1.highlight.9')
      ],
      learned: [
        t('event.1.learned.1'),
        t('event.1.learned.2'),
        t('event.1.learned.3'),
        t('event.1.learned.4'),
        t('event.1.learned.5'),
        t('event.1.learned.6'),
        t('event.1.learned.7'),
        t('event.1.learned.8')
      ],
      conclusion: t('event.1.conclusion'),
      photos: [
        "/events/AiFixathon/AIFixathonAmsterdam1.jpeg",
        "/events/AiFixathon/AIFixathonAmsterdam3.jpeg",
        "/events/AiFixathon/1765852707063.jpeg",
        "/events/AiFixathon/1765852706303.jpeg",
        "/events/AiFixathon/1765852706267.jpeg"
      ]
    },
    {
      id: 2,
      title: t('event.2.title'),
      type: "hackathon",
      category: "ai",
      date: "2025-12-06",
      displayDate: t('event.2.displayDate'),
      location: t('event.2.location'),
      participants: t('event.2.participants'),
      description: t('event.2.description'),
      image: "/events/apify/ApifyChallenge.jpeg",
      myExperience: t('event.2.myExperience'),
      highlights: [
        t('event.2.highlight.1'),
        t('event.2.highlight.2'),
        t('event.2.highlight.3'),
        t('event.2.highlight.4'),
        t('event.2.highlight.5'),
        t('event.2.highlight.6'),
        t('event.2.highlight.7'),
        t('event.2.highlight.8')
      ],
      learned: [
        t('event.2.learned.1'),
        t('event.2.learned.2'),
        t('event.2.learned.3'),
        t('event.2.learned.4'),
        t('event.2.learned.5'),
        t('event.2.learned.6'),
        t('event.2.learned.7')
      ],
      conclusion: t('event.2.conclusion'),
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
      title: t('event.3.title'),
      type: "hackathon",
      category: "ai",
      date: "2025-11-29",
      displayDate: t('event.3.displayDate'),
      location: t('event.3.location'),
      participants: t('event.3.participants'),
      description: t('event.3.description'),
      image: "/events/buildweekend/buildweekendbyyoungcreators.png",
      myExperience: t('event.3.myExperience'),
      highlights: [
        t('event.3.highlight.1'),
        t('event.3.highlight.2'),
        t('event.3.highlight.3'),
        t('event.3.highlight.4'),
        t('event.3.highlight.5'),
        t('event.3.highlight.6')
      ],
      learned: [
        t('event.3.learned.1'),
        t('event.3.learned.2'),
        t('event.3.learned.3'),
        t('event.3.learned.4'),
        t('event.3.learned.5'),
        t('event.3.learned.6')
      ],
      conclusion: t('event.3.conclusion'),
      photos: [
        "/events/buildweekend/Afbeelding van WhatsApp op 2025-12-01 om 02.52.44_8971d6c5.jpg",
        "/events/buildweekend/Afbeelding van WhatsApp op 2025-12-01 om 04.02.24_2931ee3f.jpg",
        "/events/buildweekend/buildweekendbyyoungcreators5.jpeg"
      ],
      videos: [
        "/events/buildweekend/1201(6).mp4"
      ],
      cta: {
        title: t('event.3.cta.title'),
        text: t('event.3.cta.text'),
        buttonText: t('event.3.cta.buttonText'),
        buttonUrl: "https://tally.so/r/EkqvxL"
      }
    },
    {
      id: 4,
      title: t('event.4.title'),
      type: "conference",
      category: "cybersecurity",
      date: "2025-10-09",
      displayDate: t('event.4.displayDate'),
      location: t('event.4.location'),
      participants: t('event.4.participants'),
      description: t('event.4.description'),
      image: "/events/Mendix/MendixCTF2025.webp",
      myExperience: t('event.4.myExperience'),
      highlights: [
        t('event.4.highlight.1'),
        t('event.4.highlight.2'),
        t('event.4.highlight.3'),
        t('event.4.highlight.4'),
        t('event.4.highlight.5'),
        t('event.4.highlight.6')
      ],
      learned: [
        t('event.4.learned.1'),
        t('event.4.learned.2'),
        t('event.4.learned.3'),
        t('event.4.learned.4'),
        t('event.4.learned.5')
      ],
      conclusion: t('event.4.conclusion'),
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
      title: t('event.5.title'),
      type: "workshop",
      category: "overig",
      date: "2025-09-10",
      displayDate: t('event.5.displayDate'),
      location: t('event.5.location'),
      participants: t('event.5.participants'),
      description: t('event.5.description'),
      image: "/events/CityLab010/Citylab010Netwerkavond.jpg",
      myExperience: t('event.5.myExperience'),
      highlights: [
        t('event.5.highlight.1'),
        t('event.5.highlight.2'),
        t('event.5.highlight.3'),
        t('event.5.highlight.4'),
        t('event.5.highlight.5'),
        t('event.5.highlight.6')
      ],
      learned: [
        t('event.5.learned.1'),
        t('event.5.learned.2'),
        t('event.5.learned.3'),
        t('event.5.learned.4'),
        t('event.5.learned.5'),
        t('event.5.learned.6')
      ],
      conclusion: t('event.5.conclusion'),
      photos: [
        "/events/CityLab010/Citylab010Netwerkavond2.jpg",
        "/events/CityLab010/Citylab010Netwerkavond3.jpg"
      ]
    },
    {
      id: 6,
      title: t('event.6.title'),
      type: "hackathon",
      category: "ai",
      date: "2025-06-14",
      displayDate: t('event.6.displayDate'),
      location: t('event.6.location'),
      participants: t('event.6.participants'),
      description: t('event.6.description'),
      image: "/events/Computer-Science/ComputationalScienceNL.jpg",
      myExperience: t('event.6.myExperience'),
      highlights: [
        t('event.6.highlight.1'),
        t('event.6.highlight.2'),
        t('event.6.highlight.3'),
        t('event.6.highlight.4'),
        t('event.6.highlight.5')
      ],
      learned: [
        t('event.6.learned.1'),
        t('event.6.learned.2'),
        t('event.6.learned.3'),
        t('event.6.learned.4'),
        t('event.6.learned.5')
      ],
      conclusion: t('event.6.conclusion'),
      photos: [
        "/events/Computer-Science/ComputationalScienceNL2.jpeg",
        "/events/Computer-Science/ComputationalScienceNL3.jpeg"
      ],
      videos: [
        "/events/Computer-Science/IMG_4147.MP4"
      ]
    },
    {
      id: 7,
      title: t('event.7.title'),
      type: "hackathon",
      category: "ai",
      date: "2025-05-21",
      displayDate: t('event.7.displayDate'),
      location: t('event.7.location'),
      participants: t('event.7.participants'),
      description: t('event.7.description'),
      image: "/events/xebiaHackathon/XebiaGithubCopilotHackathon.jpeg",
      myExperience: t('event.7.myExperience'),
      highlights: [
        t('event.7.highlight.1'),
        t('event.7.highlight.2'),
        t('event.7.highlight.3'),
        t('event.7.highlight.4'),
        t('event.7.highlight.5')
      ],
      learned: [
        t('event.7.learned.1'),
        t('event.7.learned.2'),
        t('event.7.learned.3'),
        t('event.7.learned.4'),
        t('event.7.learned.5')
      ],
      conclusion: t('event.7.conclusion'),
      photos: [
        "/events/xebiaHackathon/XebiaGithubCopilotHackathon2.JPG"
      ]
    },
    {
      id: 8,
      title: t('event.8.title'),
      type: "meetup",
      category: "overig",
      date: "2025-05-16",
      displayDate: t('event.8.displayDate'),
      location: t('event.8.location'),
      participants: t('event.8.participants'),
      description: t('event.8.description'),
      image: "/events/agencyatNight/AgencyAtNight.png",
      imagePosition: "20%",
      myExperience: t('event.8.myExperience'),
      highlights: [
        t('event.8.highlight.1'),
        t('event.8.highlight.2'),
        t('event.8.highlight.3'),
        t('event.8.highlight.4'),
        t('event.8.highlight.5'),
        t('event.8.highlight.6')
      ],
      learned: [
        t('event.8.learned.1'),
        t('event.8.learned.2'),
        t('event.8.learned.3'),
        t('event.8.learned.4'),
        t('event.8.learned.5'),
        t('event.8.learned.6')
      ],
      conclusion: t('event.8.conclusion'),
      photos: [
        "/events/agencyatNight/Afbeelding van WhatsApp op 2025-12-10 om 18.35.47_1734985d.jpg",
        "/events/agencyatNight/Afbeelding van WhatsApp op 2025-12-10 om 18.35.48_48507a43.jpg"
      ]
    },
  ], [t]);

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
      case "hackathon": return t('eventpage.type.hackathon');
      case "workshop": return t('eventpage.type.workshop');
      case "conference": return t('eventpage.type.conference');
      case "meetup": return t('eventpage.type.meetup');
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
                  {t('eventpage.heroTitle')}
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
              {sortOrder === "recent" ? t('eventpage.sort.recent') : t('eventpage.sort.oldest')}
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
                  <p className="text-slate-400 text-lg">{t('eventpage.noEventsFound')}</p>
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
                        {(event.thumbnail || event.image) ? (
                          <img
                            src={event.thumbnail || event.image}
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
                              {t('eventpage.upcomingBadge')}
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
                          <span>{t('eventpage.viewDetails')}</span>
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
            className="fixed inset-0 z-[10000] bg-slate-950 overflow-y-auto overflow-x-hidden dark-scrollbar touch-scroll-momentum"
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
                    className={`absolute inset-0 w-full h-full object-cover ${selectedEvent.imagePosition ? '' : 'object-center'}`}
                    {...(selectedEvent.imagePosition && { style: { objectPosition: `center ${selectedEvent.imagePosition}` } })}
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
                          {t('eventpage.upcomingEvent')}
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
                            <span className="font-medium">{t('eventpage.allEvents')}</span>
                          </button>
                          <h2 className="text-xl font-semibold text-white flex items-center gap-3">
                            <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></span>
                            {selectedEvent.isUpcoming ? t('eventpage.myExpectations') : t('eventpage.myExperience')}
                          </h2>
                          {selectedEvent.isUpcoming && (
                            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold border border-amber-500/50">
                              {t('eventpage.upcomingEvent')}
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
                            <span className="font-medium">{t('eventpage.allEvents')}</span>
                          </button>
                          <h2 className="text-xl font-semibold text-white flex items-center gap-3">
                            <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></span>
                            {t('eventpage.aboutEvent')}
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
                          {t('eventpage.highlights')}
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
                          {t('eventpage.photosVideos')}
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
                                    alt={`${selectedEvent.title} photo ${index + 1}`}
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
                                    {t('eventpage.video')}
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
                            <p className="text-slate-500">{t('eventpage.photosVideosSoon')}</p>
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
                        {selectedEvent.isUpcoming ? t('eventpage.whatIWantToLearn') : t('eventpage.whatILearned')}
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
                                  {t('eventpage.learned.hackathon.1')}
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                  {t('eventpage.learned.hackathon.2')}
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                  {t('eventpage.learned.hackathon.3')}
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                                  {t('eventpage.learned.hackathon.4')}
                                </div>
                              </>
                            )}
                            {selectedEvent.type === "workshop" && (
                              <>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                  {t('eventpage.learned.workshop.1')}
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                  {t('eventpage.learned.workshop.2')}
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                  {t('eventpage.learned.workshop.3')}
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                                  {t('eventpage.learned.workshop.4')}
                                </div>
                              </>
                            )}
                            {selectedEvent.type === "conference" && (
                              <>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                  {t('eventpage.learned.conference.1')}
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                  {t('eventpage.learned.conference.2')}
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                  {t('eventpage.learned.conference.3')}
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                                  {t('eventpage.learned.conference.4')}
                                </div>
                              </>
                            )}
                            {selectedEvent.type === "meetup" && (
                              <>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                  {t('eventpage.learned.meetup.1')}
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                  {t('eventpage.learned.meetup.2')}
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                  {t('eventpage.learned.meetup.3')}
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                                  {t('eventpage.learned.meetup.4')}
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
                          {t('eventpage.conclusion')}
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
                          <p className="text-xs text-slate-500 uppercase tracking-wider">{t('eventpage.date')}</p>
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
                          <p className="text-xs text-slate-500 uppercase tracking-wider">{t('eventpage.location')}</p>
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
                          <p className="text-xs text-slate-500 uppercase tracking-wider">{t('eventpage.participants')}</p>
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
                          <p className="text-xs text-slate-500 uppercase tracking-wider">{t('eventpage.category')}</p>
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
                    {t('eventpage.otherEvents')}
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
                      <span className="font-semibold">{t('eventpage.viewAllEvents')}</span>
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
        <div className="fixed inset-0 w-screen h-screen z-[99999] overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key="lightbox-overlay"
              className="fixed inset-0 w-screen h-screen bg-black/95 flex items-center justify-center"
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
                aria-label={t('eventpage.close')}
                className="fixed top-4 right-4 z-[100000] p-3 rounded-full bg-white/10 text-white border-none cursor-pointer hover:bg-white/20 transition-colors backdrop-blur-sm"
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
                    aria-label={t('eventpage.previous')}
                    className="fixed left-4 top-1/2 -translate-y-1/2 z-[100000] p-3 rounded-full bg-white/10 text-white border-none cursor-pointer hover:bg-white/20 transition-colors backdrop-blur-sm"
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
                    aria-label={t('eventpage.next')}
                    className="fixed right-4 top-1/2 -translate-y-1/2 z-[100000] p-3 rounded-full bg-white/10 text-white border-none cursor-pointer hover:bg-white/20 transition-colors backdrop-blur-sm"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Centered Media Container */}
              <div
                className="relative flex items-center justify-center w-full h-full py-[60px] px-4"
                onClick={(e) => e.stopPropagation()}
              >
                {currentMedia.type === 'photo' ? (
                  <motion.img
                    key={lightboxMedia.url}
                    src={lightboxMedia.url}
                    alt={`${selectedEvent.title} foto ${lightboxMedia.index + 1}`}
                    className="rounded-lg shadow-2xl lightbox-media"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                ) : (() => {
                  const isMutedVideo = lightboxMedia.url.includes('d0e567b0') || lightboxMedia.url.includes('3ee4de39') || lightboxMedia.url.includes('IMG_4147');
                  return (
                    <motion.video
                      key={lightboxMedia.url}
                      src={lightboxMedia.url}
                      className="rounded-lg shadow-2xl lightbox-media"
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
              <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100000] py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium flex items-center gap-2">
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

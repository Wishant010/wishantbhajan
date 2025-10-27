import React from "react";
import AboutNavbar from "../../components/AboutNavbar";
import ContactBar from "../../components/ContactBar";
import Footer from "../../components/Footer";
import BentoHero from "../../components/BentoHero/BentoHero";
import NeuroBackground from "../../components/Background/NeuroBackground";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden" data-page="about">
      {/* Full-page Neuro Background */}
      <div className="fixed inset-0 z-0">
        <NeuroBackground hue={200} saturation={0.8} chroma={0.6} />
      </div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        <AboutNavbar />

        {/* Bento Hero Section */}
        <BentoHero />

        {/* Contact Bar */}
        <ContactBar />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;

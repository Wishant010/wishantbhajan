"use client"

import React from "react"
import HeroSection from "./herosection"
import AboutSection from "./AboutSection"
import FeaturedProjectsAndSkills from "./FeaturedProjectsAndSkills"
import GlobalNavbar from "../../components/GlobalNavbar"
import ContactBar from "../../components/ContactBar"
import Footer from "../../components/Footer"

interface HomescreenProps {
  isVisible?: boolean
}

const Homescreen: React.FC<HomescreenProps> = ({ isVisible = true }) => {
  // Add smooth scrolling to the entire document
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <GlobalNavbar />
      
      {/* Navigation will be part of hero section */}
      <section id="home">
        <HeroSection isVisible={isVisible} />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="portfolio">
        <FeaturedProjectsAndSkills />
      </section>

      {/* Contact Bar instead of full contact section */}
      <section id="contact">
        <ContactBar />
      </section>

      <Footer />
    </div>
  )
}

export default Homescreen

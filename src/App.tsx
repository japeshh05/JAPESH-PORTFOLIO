import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { SpotlightBackground } from './components/SpotlightBackground';
import { Footer } from './components/Footer';
import { NotFound } from './components/NotFound';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { JourneySection } from './sections/JourneySection';
import { AchievementsSection } from './sections/AchievementsSection';
import { AcademicsSection } from './sections/AcademicsSection';
import { CurrentlySection } from './sections/CurrentlySection';
import { SkillsSection } from './sections/SkillsSection';
import { ContactSection } from './sections/ContactSection';
import { MarqueeStrip } from './components/MarqueeStrip';
import { PageLoader } from './components/PageLoader';

export const App: React.FC = () => {
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    // Check if user is navigating to an unknown path (anything other than / or index.html)
    const path = window.location.pathname;
    if (path !== '/' && path !== '/index.html' && path !== '') {
      setIs404(true);
    }
  }, []);

  if (is404) {
    return (
      <NotFound
        onBackHome={() => {
          setIs404(false);
          window.history.pushState(null, '', '/#home');
        }}
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-bg text-text-primary selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* Initial Page Load Curtain */}
      <PageLoader />

      {/* Blueprint Grid + Cursor Spotlight */}
      <SpotlightBackground />

      {/* Top Reading Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Main Sticky Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10 flex flex-col">
        {/* #home */}
        <HeroSection />

        {/* Marquee divider */}
        <MarqueeStrip />

        {/* #about */}
        <AboutSection />

        {/* #journey */}
        <JourneySection />

        {/* Marquee divider */}
        <MarqueeStrip />

        {/* #achievements */}
        <AchievementsSection />

        {/* #academics */}
        <AcademicsSection />

        {/* #now */}
        <CurrentlySection />

        {/* #skills */}
        <SkillsSection />

        {/* #contact */}
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default App;


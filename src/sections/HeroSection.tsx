import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GearsVisual } from '../components/GearsVisual';
import { profileData } from '../data/profile';
import { ArrowDownRight, Mail, Compass, ShieldCheck } from 'lucide-react';

const ROLES = [
  "Mechanical Engineering @ CIT",
  "Governor's Rajya Puraskar Awardee",
  "Avinashi Boys School First Ranker",
  "Aspiring Workshop & Design Engineer"
];

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const nameLetters = (profileData?.name || "Japesh").split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Engineering Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-primary/30 text-xs font-mono text-primary mb-6 shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span>Coimbatore Institute of Technology • Mechanical Engg</span>
          </motion.div>

          {/* Big Letter-by-Letter Name */}
          <motion.h1
            id="hero-heading"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-heading font-bold text-text-primary tracking-tight leading-none text-5xl sm:text-7xl lg:text-8xl mb-4"
          >
            {nameLetters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block bg-gradient-to-r from-text-primary via-primary to-accent bg-clip-text text-transparent hover:text-primary transition-colors"
              >
                {char}
              </motion.span>
            ))}
            <span className="text-accent animate-pulse">.</span>
          </motion.h1>

          {/* Dynamic Cycling Role Line */}
          <div className="h-8 sm:h-9 overflow-hidden mb-6">
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-base sm:text-xl font-medium text-primary flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>{ROLES[roleIndex]}</span>
            </motion.div>
          </div>

          {/* Personal Tagline */}
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            {profileData?.tagline || 
              "From the football field to the workshop floor: the story of a mechanical engineering student who keeps showing up and leveling up."}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            {/* Primary Amber CTA */}
            <a
              href="#journey"
              onClick={scrollTo('journey')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent to-accent-orange text-slate-950 font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-amber-glow group"
            >
              <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
              <span>View Journey</span>
            </a>

            {/* Secondary Cyan CTA */}
            <a
              href="#contact"
              onClick={scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full glass-panel border border-primary/40 text-text-primary hover:text-primary hover:border-primary font-semibold text-sm transition-all duration-300 hover:bg-primary/10 active:scale-95 shadow-sm"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>Get in Touch</span>
              <ArrowDownRight className="w-4 h-4 text-text-secondary" />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 pt-6 border-t border-surface-border w-full grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-accent">472/500</div>
              <div className="text-xs text-text-secondary mt-0.5">10th School First</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-primary">553/600</div>
              <div className="text-xs text-text-secondary mt-0.5">12th Board Exam</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-text-primary">187/200</div>
              <div className="text-xs text-text-secondary mt-0.5">TNEA CIT Cutoff</div>
            </div>
          </div>

        </div>

        {/* Right Column: Animated Precision Gears Visual */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <GearsVisual />
        </div>

      </div>
    </section>
  );
};


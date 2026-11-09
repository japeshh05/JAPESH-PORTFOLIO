import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Shield, Sparkles, Cpu, Award } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const skills = Array.isArray(profileData?.skills) ? profileData.skills : [];

  const coreValues = [
    {
      icon: Shield,
      title: "Scout Discipline",
      desc: "Instilled through years with Bharat Scouts & Guides, leading squad formations, camps, and earning the Governor's Rajya Puraskar."
    },
    {
      icon: Award,
      title: "Athletic Resilience",
      desc: "Carrying lessons learned on the football field — how to accept a tough defeat, reset the mindset, and come back stronger."
    },
    {
      icon: Cpu,
      title: "Analytical Curiosity",
      desc: "A natural pull toward understanding physical systems, linkages, forces, and taking concepts from paper into CAD models."
    }
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            [ 06 • Capabilities & Values ]
          </span>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-4 text-text-primary"
          >
            Engineering Foundation & Values
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto">
            Technical competencies combined with the character built through competitive sports, scouting, and academic focus.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Core Values 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {coreValues.map((val, index) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-surface-border hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                  {val.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Chips Cloud */}
        <div className="glass-panel p-8 rounded-2xl border border-surface-border text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono font-semibold uppercase text-text-secondary tracking-widest">
              Core Skills & Tools
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="px-4 py-2 rounded-full glass-panel border border-primary/20 text-text-primary text-xs sm:text-sm font-mono hover:border-accent hover:text-accent hover:shadow-amber-glow transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


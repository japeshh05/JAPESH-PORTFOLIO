import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Award, GraduationCap, Flame } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const storyParagraphs = profileData?.aboutStory && profileData.aboutStory.length > 0
    ? profileData.aboutStory
    : [
        "I am a mechanical engineering student passionate about understanding how things work from the inside out.",
        "From early sports to state-level scouting honors, every step has taught me that discipline beats talent when talent doesn't work hard.",
        "Today at CIT, I apply that mindset to thermodynamics, design, and workshop fabrication."
      ];

  const highlights = [
    {
      icon: Award,
      title: "Rajya Puraskar",
      subtitle: "Governor's Scout Award",
      desc: "Highest state scouting honor conferred by Governor R.N. Ravi for squad leadership and service.",
      color: "text-accent border-accent/30 bg-accent/10"
    },
    {
      icon: GraduationCap,
      title: "School First Rank",
      subtitle: "Avinashi Boys School",
      desc: "472/500 in 10th boards; 553/600 in 12th; 187/200 engineering cutoff securing CIT.",
      color: "text-primary border-primary/30 bg-primary/10"
    },
    {
      icon: Flame,
      title: "Resilience on Field",
      subtitle: "Sports & State Camps",
      desc: "From 6th std football defeat to 2nd place in Tirupur district drill in Coonoor's fog.",
      color: "text-violetGlow border-violetGlow/30 bg-violetGlow/10"
    }
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            [ 01 • The Story ]
          </span>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-4 text-text-primary"
          >
            Engineering Character Through Grit
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Story Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-text-secondary leading-relaxed text-base sm:text-lg">
            {storyParagraphs.map((para, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-4 border-l-2 border-primary/30"
              >
                {para}
              </motion.p>
            ))}

            <div className="pt-4 flex flex-wrap gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono glass-panel border border-surface-border text-text-primary">
                📍 Coimbatore Institute of Technology
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono glass-panel border border-surface-border text-text-primary">
                🏫 Avinashi Boys Higher Secondary
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono glass-panel border border-surface-border text-text-primary">
                ⚙️ Mechanical Engineering
              </span>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {highlights.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="glass-panel p-5 rounded-2xl border border-surface-border hover:border-primary/40 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl border ${card.color} shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading font-bold text-text-primary text-base">
                          {card.title}
                        </h3>
                      </div>
                      <div className="text-xs font-mono text-accent mb-1">
                        {card.subtitle}
                      </div>
                      <p className="text-xs text-text-secondary leading-normal">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};


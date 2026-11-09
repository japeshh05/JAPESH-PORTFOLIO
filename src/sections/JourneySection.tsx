import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Milestone, MilestoneIcon } from '../data/types';
import { 
  Trophy, 
  GraduationCap, 
  BookOpen, 
  Compass, 
  Cog, 
  Activity, 
  FileText 
} from 'lucide-react';

const getMilestoneIcon = (icon: MilestoneIcon) => {
  switch (icon) {
    case 'football':
      return <Activity className="w-5 h-5 text-accent" />;
    case 'scout':
      return <Compass className="w-5 h-5 text-primary" />;
    case 'trophy':
      return <Trophy className="w-5 h-5 text-accent" />;
    case 'book':
      return <BookOpen className="w-5 h-5 text-primary" />;
    case 'mic':
      return <FileText className="w-5 h-5 text-violetGlow" />;
    case 'cap':
      return <GraduationCap className="w-5 h-5 text-accent" />;
    case 'gear':
      return <Cog className="w-5 h-5 text-primary animate-spin-slow" />;
    default:
      return <Compass className="w-5 h-5 text-primary" />;
  }
};

const getTagColor = (tag?: string) => {
  switch (tag) {
    case 'sport':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    case 'scouts':
      return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
    case 'academic':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    case 'competition':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    case 'college':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    default:
      return 'bg-slate-500/10 text-slate-300 border-slate-500/20';
  }
};

export const JourneySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const milestones: Milestone[] = Array.isArray(profileData?.milestones) ? profileData.milestones : [];

  return (
    <section
      id="journey"
      ref={containerRef}
      aria-labelledby="journey-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            [ 02 • Evolution ]
          </span>
          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-4 text-text-primary"
          >
            The Journey So Far
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto">
            From stepping onto the football pitch in 6th grade to the engineering labs of CIT.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Empty state safeguard */}
        {milestones.length === 0 ? (
          <div className="text-center py-12 glass-panel rounded-2xl border border-surface-border">
            <p className="text-text-secondary font-mono text-sm">More journey milestones coming soon...</p>
          </div>
        ) : (
          <div className="relative">
            {/* Center Timeline Line (Desktop: center, Mobile: left) */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-surface-border -translate-x-1/2 z-0" />
            
            {/* Scroll Animated Colored Beam */}
            {!shouldReduceMotion && (
              <motion.div
                className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-violetGlow to-accent -translate-x-1/2 z-0 origin-top"
                style={{ scaleY }}
              />
            )}

            {/* Timeline Milestones */}
            <div className="flex flex-col gap-12 relative z-10">
              {milestones.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`flex flex-col md:flex-row items-start md:items-center w-full ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content Card Side */}
                    <div className="w-full md:w-[45%] pl-14 md:pl-0">
                      <div className="glass-panel p-6 rounded-2xl border border-surface-border hover:border-primary/40 transition-all duration-300 shadow-sm group">
                        
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <span className="font-mono text-xs font-semibold text-accent tracking-wider uppercase">
                            {item.year}
                          </span>
                          {item.tag && (
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getTagColor(item.tag)} uppercase`}>
                              {item.tag}
                            </span>
                          )}
                        </div>

                        <h3 className="font-heading font-bold text-lg text-text-primary group-hover:text-primary transition-colors mb-2">
                          {item.title}
                        </h3>

                        <p className="text-text-secondary text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Node Dot / Icon (Desktop: Center, Mobile: Left) */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-surface border-2 border-primary flex items-center justify-center shadow-cyan-glow group hover:scale-110 transition-transform">
                        {getMilestoneIcon(item.icon)}
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block w-[45%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};


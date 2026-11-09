import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Target, Compass, Wrench, CheckCircle2 } from 'lucide-react';

export const CurrentlySection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const goals = Array.isArray(profileData?.currentGoals) ? profileData.currentGoals : [];

  return (
    <section
      id="now"
      aria-labelledby="now-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            [ 05 • Present Horizon ]
          </span>
          <h2
            id="now-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-4 text-text-primary"
          >
            Currently in the Workshop
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto">
            Focusing all energy on mastering mechanical engineering at Coimbatore Institute of Technology (CIT).
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Current State Card */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-8 sm:p-10 rounded-2xl border border-primary/30 shadow-cyan-glow relative overflow-hidden"
        >
          {/* Subtle background blueprint accent */}
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Wrench className="w-48 h-48 text-primary" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-mono text-xs mb-4">
                <Target className="w-3.5 h-3.5" />
                <span>Undergraduate Focus (2024 - 2028)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mb-3">
                B.E. Mechanical Engineering @ CIT
              </h3>

              <p className="text-text-secondary leading-relaxed mb-6 text-sm sm:text-base">
                Studying at Coimbatore Institute of Technology. Diving into machine mechanisms, materials, thermodynamics, and manufacturing processes, blending textbook mathematics with workshop hands-on craft.
              </p>

              <div className="space-y-3">
                <div className="text-xs font-mono font-semibold uppercase text-primary tracking-wider">
                  Active Milestones & Targets:
                </div>
                {goals.map((goal, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="p-5 rounded-xl bg-surface border border-surface-border">
                <div className="text-xs font-mono text-text-secondary">INSTITUTION</div>
                <div className="text-base font-bold text-text-primary mt-1">Coimbatore Institute of Technology (CIT)</div>
                <div className="text-xs text-primary mt-0.5">Autonomous Gov-Aided Engineering College</div>
              </div>

              <div className="p-5 rounded-xl bg-surface border border-surface-border">
                <div className="text-xs font-mono text-text-secondary">CORE ASPIRATION</div>
                <div className="text-base font-bold text-text-primary mt-1">Industrial Mechanical Engineer</div>
                <div className="text-xs text-accent mt-0.5">Machine Design • CAD • Workshop Precision</div>
              </div>

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-3 text-xs font-mono text-primary">
                <Compass className="w-5 h-5 text-accent shrink-0" />
                <span>"Constantly showing up, learning, and leveling up."</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};


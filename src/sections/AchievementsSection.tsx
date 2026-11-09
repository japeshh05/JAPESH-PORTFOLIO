import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Achievement } from '../data/types';
import { 
  Award, 
  GraduationCap, 
  Medal, 
  Trophy, 
  FileText, 
  Activity, 
  Compass, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'Award':
      return <Award className="w-6 h-6 text-accent" />;
    case 'GraduationCap':
      return <GraduationCap className="w-6 h-6 text-primary" />;
    case 'Medal':
      return <Medal className="w-6 h-6 text-accent" />;
    case 'Trophy':
      return <Trophy className="w-6 h-6 text-primary" />;
    case 'FileText':
      return <FileText className="w-6 h-6 text-violetGlow" />;
    case 'Activity':
      return <Activity className="w-6 h-6 text-accent" />;
    case 'Compass':
      return <Compass className="w-6 h-6 text-primary" />;
    default:
      return <Award className="w-6 h-6 text-primary" />;
  }
};

export const AchievementsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const achievements: Achievement[] = Array.isArray(profileData?.achievements) ? profileData.achievements : [];
  
  // Interactive tilt state
  const [tiltId, setTiltId] = useState<string | null>(null);

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            [ 03 • Honors & Milestones ]
          </span>
          <h2
            id="achievements-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-4 text-text-primary"
          >
            Recognized Milestones
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto">
            Honors earned through consistent effort, leadership in Scouts, and scholastic discipline.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Empty State Safeguard */}
        {achievements.length === 0 ? (
          <div className="text-center py-12 glass-panel rounded-2xl border border-surface-border">
            <p className="text-text-secondary font-mono text-sm">More achievements coming soon...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, index) => {
              const isFeatured = !!item.featured;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onMouseEnter={() => !shouldReduceMotion && setTiltId(item.id)}
                  onMouseLeave={() => setTiltId(null)}
                  className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                    isFeatured
                      ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-br from-surface via-surface to-accent/10 border-2 border-accent/60 shadow-amber-glow'
                      : 'glass-panel border border-surface-border hover:border-primary/40 hover:shadow-cyan-glow'
                  } ${
                    tiltId === item.id && !shouldReduceMotion
                      ? 'transform -translate-y-1.5'
                      : ''
                  }`}
                >
                  {/* Featured Badge Glow */}
                  {isFeatured && (
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-accent text-slate-950 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5" />
                        Highest State Scouting Award
                      </span>
                      <span className="text-xs font-mono text-accent hidden sm:inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Conferred by Governor of Tamil Nadu
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Top Row: Icon & Grade */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className={`p-3 rounded-xl border ${
                        isFeatured 
                          ? 'bg-accent/15 border-accent/40 text-accent' 
                          : 'bg-surface border-surface-border text-primary'
                      }`}>
                        {renderIcon(item.icon)}
                      </div>
                      {item.grade && (
                        <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface border border-surface-border text-text-secondary">
                          {item.grade}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className={`font-heading font-bold text-text-primary mb-2 ${
                      isFeatured ? 'text-2xl sm:text-3xl' : 'text-lg'
                    }`}>
                      {item.title}
                    </h3>

                    {/* Detail */}
                    <p className={`text-text-secondary leading-relaxed ${
                      isFeatured ? 'text-base sm:text-lg max-w-3xl' : 'text-sm'
                    }`}>
                      {item.detail}
                    </p>
                  </div>

                  {/* Mechanical Dimension Accent */}
                  <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between text-[11px] font-mono text-text-secondary">
                    <span>RECORD_ID: {item.id}</span>
                    <span className="text-primary">VERIFIED</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};


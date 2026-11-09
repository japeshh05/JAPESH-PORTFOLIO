import React, { useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Score } from '../data/types';
import { Gauge, CheckCircle } from 'lucide-react';

interface GaugeProps {
  score: Score;
  index: number;
}

const CircularGauge: React.FC<GaugeProps> = ({ score, index }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  const percentage = Math.round((score.value / score.outOf) * 100);
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = isInView
    ? circumference - (percentage / 100) * circumference
    : circumference;

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setDisplayValue(score.value);
      return;
    }

    const duration = 1600; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(Math.floor(ease * score.value));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(score.value);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, score.value, shouldReduceMotion]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-panel p-6 sm:p-8 rounded-2xl border border-surface-border text-center flex flex-col items-center justify-between shadow-sm hover:border-primary/40 transition-all duration-300"
    >
      {/* Gauge SVG */}
      <div className="relative w-44 h-44 mx-auto flex items-center justify-center mb-6">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
          {/* Background circle track */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            className="text-surface-border"
          />
          {/* Pressure gauge fill stroke */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={shouldReduceMotion ? circumference - (percentage / 100) * circumference : strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>
        </svg>

        {/* Inner Counter Center Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center select-none">
          <span className="font-heading font-bold text-3xl sm:text-4xl text-text-primary tracking-tight">
            {displayValue}
          </span>
          <span className="font-mono text-xs text-text-secondary mt-0.5">
            / {score.outOf}
          </span>
          <span className="text-[11px] font-mono text-primary font-semibold mt-1">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Label and Details */}
      <div className="w-full">
        <h3 className="font-heading font-bold text-lg text-text-primary mb-1">
          {score.label}
        </h3>
        {score.note && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs">
            <CheckCircle className="w-3 h-3" />
            <span>{score.note}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export const AcademicsSection: React.FC = () => {
  const scores: Score[] = Array.isArray(profileData?.scores) ? profileData.scores : [];

  return (
    <section
      id="academics"
      aria-labelledby="academics-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            [ 04 • Academic Track Record ]
          </span>
          <h2
            id="academics-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-4 text-text-primary"
          >
            Scholastic Performance
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto">
            High-ranking consistency across school examinations, culminating in merit admission at CIT.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Empty state guard */}
        {scores.length === 0 ? (
          <div className="text-center py-12 glass-panel rounded-2xl border border-surface-border">
            <p className="text-text-secondary font-mono text-sm">Academic score records coming soon...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {scores.map((score, index) => (
              <CircularGauge key={score.id} score={score} index={index} />
            ))}
          </div>
        )}

        {/* Technical Specification Footer Tag */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-surface-border text-xs font-mono text-text-secondary">
            <Gauge className="w-4 h-4 text-primary" />
            <span>Verified Official Board Examination Results • Avinashi Boys School</span>
          </div>
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { Cog } from 'lucide-react';
import { profileData } from '../data/profile';

export const MarqueeStrip: React.FC = () => {
  const skills = profileData?.skills && profileData.skills.length > 0
    ? profileData.skills
    : ["Engineering", "Scout Discipline", "Leadership", "Resilience", "CAD", "Precision"];

  // Double the list for infinite seamless marquee
  const repeated = [...skills, ...skills, ...skills];

  return (
    <div className="w-full py-4 bg-surface/30 border-y border-surface-border overflow-hidden select-none">
      <div className="flex gap-8 whitespace-nowrap animate-marquee">
        {repeated.map((skill, index) => (
          <div key={index} className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono text-text-secondary">
            <Cog className="w-3.5 h-3.5 text-primary opacity-60 animate-spin-slow" />
            <span className="tracking-wide uppercase">{skill}</span>
            <span className="text-accent/50 font-bold">•</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            overflow-x: auto;
          }
        }
      `}</style>
    </div>
  );
};


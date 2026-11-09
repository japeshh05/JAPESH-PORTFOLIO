import React from 'react';
import { ArrowUp, Heart, Cog } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '#home');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-surface-border bg-surface/50 text-text-secondary py-12 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Branding and Bio note */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2">
            <Cog className="w-4 h-4 text-primary animate-spin-slow" />
            <span className="font-heading font-bold text-text-primary text-base">
              {profileData?.name || 'Japesh'}
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              CIT Mechanical '28
            </span>
          </div>
          <p className="text-xs text-text-secondary max-w-sm">
            Engineer in the making. Driven by curiosity, discipline, and workshop craftsmanship.
          </p>
        </div>

        {/* Center: Built with care */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-text-secondary">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-accent fill-accent" />
          <span>for engineering & precision</span>
        </div>

        {/* Right Side: Back to Top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-text-secondary">
            &copy; {currentYear} {profileData?.name || 'Japesh'}
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border border-surface-border text-xs font-mono text-text-primary hover:text-primary hover:border-primary/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};


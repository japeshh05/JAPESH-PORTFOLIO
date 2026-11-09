import React from 'react';
import { Compass, Home } from 'lucide-react';

interface NotFoundProps {
  onBackHome?: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBackHome }) => {
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBackHome) {
      onBackHome();
    } else {
      window.location.href = '/#home';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4 py-16 text-text-primary blueprint-grid relative">
      <div className="max-w-lg w-full glass-panel p-8 md:p-12 rounded-2xl text-center border border-surface-border shadow-cyan-glow relative z-10">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary animate-pulse">
          <Compass className="w-10 h-10" />
        </div>
        <span className="inline-block px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full mb-4">
          Status Code: 404
        </span>
        <h1 className="text-3xl md:text-4xl font-bold font-heading mb-3 text-text-primary">
          Lost on the Field?
        </h1>
        <p className="text-text-secondary text-base mb-8 max-w-sm mx-auto">
          Looks like this play drifted out of bounds. The engineering workshop and milestone timeline are back on the main field.
        </p>
        <a
          href="/#home"
          onClick={handleHomeClick}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent to-accent-orange text-slate-950 font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-amber-glow"
        >
          <Home className="w-4 h-4" />
          Back to Home Field
        </a>
      </div>
    </div>
  );
};


import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Cog } from 'lucide-react';

export const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Gear spinner under 1s per UI_UX.md spec
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (shouldReduceMotion) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg blueprint-grid select-none pointer-events-none"
        >
          <div className="relative flex items-center justify-center">
            {/* Outer spinning gear */}
            <div className="w-20 h-20 rounded-full border-2 border-primary/20 flex items-center justify-center">
              <Cog className="w-10 h-10 text-primary animate-spin-slow drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
            </div>

            {/* Inner pulsing amber dot */}
            <div className="absolute w-3 h-3 rounded-full bg-accent animate-ping" />
          </div>

          <div className="mt-4 font-mono text-xs tracking-widest uppercase text-text-secondary flex items-center gap-1.5">
            <span className="text-primary font-bold">JAPESH</span>
            <span>•</span>
            <span className="text-accent">ENGINEERING</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

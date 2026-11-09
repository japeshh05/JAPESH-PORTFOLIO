import React, { useEffect, useState } from 'react';

export const SpotlightBackground: React.FC = () => {
  const [pos, setPos] = useState({ x: 50, y: 30 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if touch device
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(touchDevice);

    if (touchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Blueprint Grid Layer */}
      <div className="absolute inset-0 blueprint-grid opacity-60" />

      {/* Spotlight Radial Glow */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isTouch ? 'animate-pulse-slow' : ''
        }`}
        style={{
          background: isTouch
            ? 'radial-gradient(circle 450px at 50% 30%, rgba(34, 211, 238, 0.08), transparent 70%), radial-gradient(circle 350px at 70% 60%, rgba(251, 191, 36, 0.05), transparent 70%)'
            : `radial-gradient(circle 500px at ${pos.x}% ${pos.y}%, rgba(34, 211, 238, 0.09), transparent 75%), radial-gradient(circle 350px at ${pos.x + 10}% ${pos.y + 15}%, rgba(139, 92, 246, 0.04), transparent 70%)`,
        }}
      />
    </div>
  );
};


import React from 'react';

export const GearsVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[420px] aspect-square mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Background blueprint concentric circles */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="180" stroke="#22D3EE" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="200" cy="200" r="140" stroke="#22D3EE" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="200" cy="200" r="90" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="6 4" strokeOpacity="0.4" />
        
        {/* Dimension crosshairs */}
        <line x1="20" y1="200" x2="380" y2="200" stroke="#22D3EE" strokeWidth="0.75" strokeDasharray="5 5" strokeOpacity="0.3" />
        <line x1="200" y1="20" x2="200" y2="380" stroke="#22D3EE" strokeWidth="0.75" strokeDasharray="5 5" strokeOpacity="0.3" />

        {/* Technical dimension markers */}
        <text x="210" y="35" fill="#22D3EE" fontSize="9" fontFamily="JetBrains Mono" opacity="0.6">
          Ø 360.00 MM
        </text>
        <text x="35" y="195" fill="#FBBF24" fontSize="9" fontFamily="JetBrains Mono" opacity="0.6">
          RATIO 2:1
        </text>
      </svg>

      {/* Primary Main Gear (Clockwise) */}
      <div className="absolute w-[240px] h-[240px] -translate-x-6 -translate-y-4 animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(34,211,238,0.25)]">
          <defs>
            <radialGradient id="gearGrad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#101826" />
              <stop offset="85%" stopColor="#0B132B" />
              <stop offset="100%" stopColor="#1E293B" />
            </radialGradient>
          </defs>

          {/* Gear teeth ring (12 teeth) */}
          <g fill="url(#gearGrad1)" stroke="#22D3EE" strokeWidth="2.5" strokeLinejoin="round">
            {Array.from({ length: 12 }).map((_, i) => (
              <rect
                key={i}
                x="88"
                y="6"
                width="24"
                height="28"
                rx="4"
                transform={`rotate(${i * 30} 100 100)`}
              />
            ))}
            {/* Gear body disk */}
            <circle cx="100" cy="100" r="82" fill="url(#gearGrad1)" />
          </g>

          {/* Inner cutout spokes */}
          <circle cx="100" cy="100" r="54" fill="#070B14" stroke="#22D3EE" strokeWidth="2" strokeDasharray="3 3" />
          {Array.from({ length: 4 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="46"
              x2="100"
              y2="154"
              stroke="#22D3EE"
              strokeWidth="3"
              strokeOpacity="0.7"
              transform={`rotate(${i * 45} 100 100)`}
            />
          ))}

          {/* Center Hub */}
          <circle cx="100" cy="100" r="28" fill="#101826" stroke="#FBBF24" strokeWidth="3" />
          <circle cx="100" cy="100" r="12" fill="#22D3EE" />
          <circle cx="100" cy="100" r="4" fill="#070B14" />
        </svg>
      </div>

      {/* Meshing Secondary Gear (Counter-Clockwise, perfectly offset) */}
      <div className="absolute w-[140px] h-[140px] translate-x-20 translate-y-20 animate-spin-reverse-slow">
        <svg viewBox="0 0 140 140" className="w-full h-full drop-shadow-[0_0_12px_rgba(251,191,36,0.25)]">
          <defs>
            <radialGradient id="gearGrad2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#101826" />
              <stop offset="100%" stopColor="#1E293B" />
            </radialGradient>
          </defs>

          {/* Small gear teeth (8 teeth) */}
          <g fill="url(#gearGrad2)" stroke="#FBBF24" strokeWidth="2" strokeLinejoin="round">
            {Array.from({ length: 8 }).map((_, i) => (
              <rect
                key={i}
                x="62"
                y="4"
                width="16"
                height="20"
                rx="3"
                transform={`rotate(${i * 45} 70 70)`}
              />
            ))}
            <circle cx="70" cy="70" r="54" fill="url(#gearGrad2)" />
          </g>

          {/* Inner details */}
          <circle cx="70" cy="70" r="34" fill="#070B14" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="2 2" />
          <circle cx="70" cy="70" r="18" fill="#101826" stroke="#22D3EE" strokeWidth="2" />
          <circle cx="70" cy="70" r="7" fill="#FBBF24" />
        </svg>
      </div>

      {/* Floating Spark & Bolt Particles */}
      <div className="absolute -top-3 right-10 w-2 h-2 rounded-full bg-accent animate-spark-drift shadow-[0_0_8px_#FBBF24]" />
      <div className="absolute bottom-6 left-8 w-1.5 h-1.5 rounded-full bg-primary animate-spark-drift shadow-[0_0_6px_#22D3EE]" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-24 -left-4 w-2 h-2 rounded-full bg-violetGlow animate-spark-drift opacity-80" style={{ animationDelay: '3s' }} />
    </div>
  );
};


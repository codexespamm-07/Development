import React from "react";

/**
 * A highly-detailed, beautifully stylized peacock feather vector.
 * Employs gradient colors: Sapphire, Teal, Emerald, Gold.
 */
export const PeacockFeather: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 120,
}) => {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 100 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} filter drop-shadow-md`}
    >
      <defs>
        {/* Core Eye - Deep Sapphire Blue */}
        <radialGradient id="sapphireEye" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0B4F6C" />
          <stop offset="60%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#020617" />
        </radialGradient>
        
        {/* Eye Ring 1 - Teal/Turquoise */}
        <radialGradient id="tealRing" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="70%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#0F766E" />
        </radialGradient>

        {/* Eye Ring 2 - Radiant Antique Gold */}
        <radialGradient id="goldRing" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="70%" stopColor="#C8A24A" />
          <stop offset="100%" stopColor="#92400E" />
        </radialGradient>

        {/* Outer Shell - Emerald Green */}
        <radialGradient id="emeraldShell" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="70%" stopColor="#059669" />
          <stop offset="100%" stopColor="#064E3B" />
        </radialGradient>

        {/* Feather Quill Gradient */}
        <linearGradient id="quillGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#C8A24A" />
        </linearGradient>
      </defs>

      {/* Stem / Quill */}
      <path
        d="M50 80 C 50 110, 52 135, 55 148"
        stroke="url(#quillGold)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Barbs (Feather side-threads) */}
      <g stroke="#0D9488" strokeWidth="1.2" strokeLinecap="round" opacity="0.85">
        {/* Left Side Barbs */}
        <path d="M50 80 C 35 78, 20 65, 10 45" />
        <path d="M49 90 C 32 88, 18 73, 8 52" stroke="#059669" />
        <path d="M48 100 C 30 98, 16 80, 12 60" />
        <path d="M47 110 C 28 108, 20 90, 18 70" stroke="#C8A24A" strokeWidth="1" />
        <path d="M46 120 C 30 118, 24 98, 24 80" />
        <path d="M45 130 C 34 128, 30 110, 30 92" stroke="#059669" />
        
        {/* Right Side Barbs */}
        <path d="M50 80 C 65 78, 80 65, 90 45" />
        <path d="M51 90 C 68 88, 82 73, 92 52" stroke="#059669" />
        <path d="M52 100 C 70 98, 84 80, 88 60" />
        <path d="M53 110 C 72 108, 80 90, 82 70" stroke="#C8A24A" strokeWidth="1" />
        <path d="M54 120 C 70 118, 76 98, 76 80" />
        <path d="M55 130 C 66 128, 70 110, 70 92" stroke="#059669" />
      </g>

      {/* The Eye - Concentric teardrop shapes */}
      {/* Outer Emerald Shell */}
      <path
        d="M50 15 C 22 15, 20 55, 50 82 C 80 55, 78 15, 50 15 Z"
        fill="url(#emeraldShell)"
      />

      {/* Antique Gold Ring */}
      <path
        d="M50 25 C 29 25, 28 55, 50 74 C 72 55, 71 25, 50 25 Z"
        fill="url(#goldRing)"
      />

      {/* Teal/Turquoise Eye */}
      <path
        d="M50 32 C 35 32, 34 54, 50 67 C 66 54, 65 32, 50 32 Z"
        fill="url(#tealRing)"
      />

      {/* Deep Sapphire Inner Core */}
      <ellipse cx="50" cy="51" rx="10" ry="14" fill="url(#sapphireEye)" />

      {/* Subtle Glimmer Dot */}
      <circle cx="46" cy="46" r="2.5" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
};

/**
 * A majestic stylized peacock illustration for landing page accents.
 */
export const MajesticPeacock: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 180,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="peacockTeal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B4F6C" />
          <stop offset="50%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="crownGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#C8A24A" />
        </linearGradient>
      </defs>

      {/* Elegant Crown Feathers */}
      <g stroke="url(#crownGold)" strokeWidth="1.5">
        <line x1="100" y1="45" x2="85" y2="25" />
        <line x1="100" y1="45" x2="100" y2="20" />
        <line x1="100" y1="45" x2="115" y2="25" />
      </g>
      <circle cx="85" cy="23" r="3" fill="#C8A24A" />
      <circle cx="100" cy="18" r="3.5" fill="#0D9488" />
      <circle cx="115" cy="23" r="3" fill="#C8A24A" />

      {/* Graceful Neck & Head */}
      <path
        d="M100 45 
           C 85 45, 75 60, 80 85 
           C 85 110, 115 125, 110 155 
           C 107 170, 95 180, 80 180"
        stroke="url(#peacockTeal)"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />

      {/* Head details / Beak */}
      <path
        d="M78 48 C 76 48, 62 52, 60 55 C 62 57, 72 58, 77 56 Z"
        fill="#C8A24A"
      />

      {/* Elegant Eye */}
      <circle cx="86" cy="52" r="2.5" fill="#FFFFFF" />
      <circle cx="86" cy="52" r="1.2" fill="#0F172A" />

      {/* Abstract Fan of Feathers in Background */}
      <path
        d="M125 100 C 150 90, 180 110, 175 140 C 170 170, 130 185, 110 155"
        stroke="#C8A24A"
        strokeWidth="3"
        strokeDasharray="4,4"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M120 110 C 140 100, 165 115, 160 135 C 155 155, 125 165, 115 145"
        stroke="#0D9488"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />

      {/* Accent Feather Eyelets in background */}
      <circle cx="175" cy="140" r="6" fill="#0B4F6C" stroke="#C8A24A" strokeWidth="1.5" />
      <circle cx="175" cy="140" r="2.5" fill="#FBBF24" />
      
      <circle cx="160" cy="112" r="6" fill="#059669" stroke="#C8A24A" strokeWidth="1.5" />
      <circle cx="160" cy="112" r="2.5" fill="#3B82F6" />

      <circle cx="145" cy="92" r="5" fill="#1E3A8A" stroke="#C8A24A" strokeWidth="1.2" />
      <circle cx="145" cy="92" r="2" fill="#34D399" />
    </svg>
  );
};

/**
 * An elegant separator featuring a peacock feather eye surrounded by golden filigree curves.
 */
export const PeacockDivider: React.FC<{ className?: string; color?: string }> = ({
  className = "",
  color = "#C8A24A",
}) => {
  return (
    <div className={`flex items-center justify-center gap-4 py-4 ${className}`}>
      {/* Left scroll line */}
      <svg width="100" height="24" viewBox="0 0 100 24" fill="none" className="opacity-80">
        <path
          d="M10 12 H 80 C 85 12, 90 8, 92 4 C 94 0, 98 2, 98 6 C 98 12, 90 18, 85 18 H 30"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="10" cy="12" r="3" fill={color} />
      </svg>

      {/* Center Peacock Feather Motif */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-[#C8A24A] bg-[#0B4F6C] p-1.5 shadow-md">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          {/* Emerald background */}
          <path
            d="M50 10 C 25 10, 20 50, 50 85 C 80 50, 75 10, 50 10 Z"
            fill="#059669"
          />
          {/* Gold Middle */}
          <path
            d="M50 22 C 32 22, 30 50, 50 74 C 70 50, 68 22, 50 22 Z"
            fill="#C8A24A"
          />
          {/* Teal */}
          <path
            d="M50 32 C 38 32, 36 50, 50 64 C 64 50, 62 32, 50 32 Z"
            fill="#0D9488"
          />
          {/* Sapphire */}
          <circle cx="50" cy="48" r="10" fill="#0B4F6C" />
          <circle cx="47" cy="44" r="2.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Right scroll line */}
      <svg width="100" height="24" viewBox="0 0 100 24" fill="none" className="opacity-80 scale-x-[-1]">
        <path
          d="M10 12 H 80 C 85 12, 90 8, 92 4 C 94 0, 98 2, 98 6 C 98 12, 90 18, 85 18 H 30"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="10" cy="12" r="3" fill={color} />
      </svg>
    </div>
  );
};

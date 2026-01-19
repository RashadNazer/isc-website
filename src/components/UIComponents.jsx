import React from 'react';

// THEMED MESH BACKGROUND WRAPPER
export const MeshBackground = ({ children, className = "" }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 pointer-events-none">
      {/* Top Right Glow */}
      <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-100/40 dark:bg-blue-900/10 blur-[120px]" />
      {/* Bottom Left Glow */}
      <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-100/30 dark:bg-indigo-900/10 blur-[120px]" />
    </div>
    <div className="relative z-10">{children}</div>
  </div>
);

// ANGLED SECTION DIVIDER
export const SectionDivider = ({ colorClass = "fill-slate-50 dark:fill-slate-950" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[98%] z-20">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={`relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px] ${colorClass}`}
    >
      <path d="M1200 120L0 120 1200 0z"></path>
    </svg>
  </div>
);
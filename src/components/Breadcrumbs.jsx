import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

/**
 * Breadcrumbs
 * Usage:
 *   <Breadcrumbs items={[{ label: "About Us", path: "/about" }, { label: "Leadership" }]} />
 *
 * variant: "default" | "light"
 *   - "default" works on light/dark page backgrounds
 *   - "light" is for use over dark/colored hero backgrounds (white text)
 */
const Breadcrumbs = ({ items = [], variant = "default", className = "" }) => {
  const isLight = variant === "light";

  // Color palette based on variant
  const colors = isLight
    ? {
        home: "text-white/60 hover:text-white",
        sep: "text-white/30",
        link: "text-white/60 hover:text-white",
        current: "text-white",
      }
    : {
        home:
          "text-slate-400 hover:text-blue-600 dark:hover:text-blue-400",
        sep: "text-slate-300 dark:text-slate-700",
        link:
          "text-slate-400 hover:text-blue-600 dark:hover:text-blue-400",
        current: "text-slate-700 dark:text-slate-300",
      };

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex-wrap ${className}`}
    >
      <Link to="/" className={`flex items-center gap-1.5 transition-colors ${colors.home}`}>
        <Home className="w-3 h-3" strokeWidth={2.5} />
        <span>Home</span>
      </Link>

      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            <ChevronRight className={`w-3 h-3 flex-shrink-0 ${colors.sep}`} strokeWidth={3} />
            {isLast || !item.path ? (
              <span className={`max-w-[200px] truncate ${colors.current}`}>
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className={`transition-colors max-w-[200px] truncate ${colors.link}`}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
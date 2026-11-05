import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check, Settings } from "lucide-react";

const STORAGE_KEY = "isc-cookie-consent-v1";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,      // always true
    analytics: true,
    marketing: false,
  });

  // Check on mount whether we need to show the banner
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Show after a short delay so the page has time to render
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (prefs) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...prefs,
        timestamp: new Date().toISOString(),
      })
    );
    setIsVisible(false);
    // If you have analytics code, initialize it here based on prefs.analytics
    // e.g., if (prefs.analytics) window.gtag && window.gtag('consent', 'update', {analytics_storage: 'granted'});
  };

  const handleAcceptAll = () =>
    saveConsent({ essential: true, analytics: true, marketing: true });

  const handleRejectAll = () =>
    saveConsent({ essential: true, analytics: false, marketing: false });

  const handleSavePreferences = () => saveConsent(preferences);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6 md:max-w-md z-[200]"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 p-5 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <Cookie className="w-4 h-4" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white">
                    Cookie Preferences
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    PDPL Compliant
                  </p>
                </div>
              </div>
              <button
                onClick={handleRejectAll}
                aria-label="Dismiss"
                className="p-1.5 -mt-1 -mr-1 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 pb-5">
              {!showDetails ? (
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  We use cookies to improve your browsing experience, analyze
                  traffic, and support our marketing. You can manage your
                  preferences or accept all. Read our{" "}
                  <Link
                    to="/cookies"
                    className="text-blue-600 dark:text-blue-400 font-bold underline underline-offset-2"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              ) : (
                <div className="space-y-2 mb-4">
                  <CookieCategory
                    title="Essential"
                    description="Required for the site to function."
                    checked={true}
                    disabled={true}
                  />
                  <CookieCategory
                    title="Analytics"
                    description="Help us understand how visitors use the site."
                    checked={preferences.analytics}
                    onChange={(v) =>
                      setPreferences((p) => ({ ...p, analytics: v }))
                    }
                  />
                  <CookieCategory
                    title="Marketing"
                    description="Used to show relevant content on other platforms."
                    checked={preferences.marketing}
                    onChange={(v) =>
                      setPreferences((p) => ({ ...p, marketing: v }))
                    }
                  />
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-2">
                {!showDetails && (
                  <>
                    <button
                      onClick={handleAcceptAll}
                      className="flex-1 min-w-[110px] bg-blue-600 text-white px-4 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-wider hover:bg-blue-700 transition-colors"
                    >
                      Accept All
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="flex-1 min-w-[110px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={() => setShowDetails(true)}
                      aria-label="Manage preferences"
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <Settings className="w-4 h-4" strokeWidth={2.5} />
                    </button>
                  </>
                )}
                {showDetails && (
                  <>
                    <button
                      onClick={handleSavePreferences}
                      className="flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-wider hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      Save Preferences
                    </button>
                    <button
                      onClick={() => setShowDetails(false)}
                      className="px-4 py-2.5 text-slate-500 dark:text-slate-400 font-black text-[10px] uppercase tracking-wider hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                    >
                      Back
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* Sub-component for a cookie category */
const CookieCategory = ({ title, description, checked, disabled, onChange }) => (
  <label
    className={`flex items-start gap-3 p-3 rounded-xl border transition-colors cursor-pointer ${
      disabled
        ? "bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 cursor-not-allowed"
        : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-500/40"
    }`}
  >
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.checked)}
      className="mt-0.5 w-4 h-4 rounded accent-blue-600 cursor-pointer disabled:cursor-not-allowed"
    />
    <div className="flex-1 min-w-0">
      <p className="text-xs font-black text-slate-900 dark:text-white mb-0.5">
        {title}
        {disabled && (
          <span className="ml-2 text-[9px] text-slate-400 font-bold uppercase tracking-wider">
            Always Active
          </span>
        )}
      </p>
      <p className="text-[10px] text-slate-500 dark:text-slate-500 leading-snug">
        {description}
      </p>
    </div>
  </label>
);

export default CookieConsent;
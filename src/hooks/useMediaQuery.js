import { useState, useEffect } from "react";

/**
 * Custom hook to detect if a CSS media query matches the current viewport.
 * @param {string} query - The media query to check (e.g., "(max-width: 768px)")
 * @returns {boolean} - Returns true if the media query matches, false otherwise.
 */
export const useMediaQuery = (query) => {
  // State to store whether the query currently matches
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create a MediaQueryList object based on the provided query string
    const media = window.matchMedia(query);

    // Initial check: update state if the current match status differs from the local state
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Callback function to be triggered on viewport resize
    const listener = () => setMatches(media.matches);

    // Listen for window resize events to re-evaluate the media query
    window.addEventListener("resize", listener);

    // Cleanup: remove the event listener when the component unmounts or query changes
    // This prevents memory leaks and stale event listeners
    return () => window.removeEventListener("resize", listener);
    
  }, [matches, query]); // Re-run the effect if the query string or matches state changes

  return matches;
};
// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component
 * * This component handles scroll restoration and hash-link navigation.
 * Since React Router doesn't automatically scroll to the top or to anchors
 * when the path changes, this component listens to the URL and manages
 * the window's scroll position manually.
 */
export default function ScrollToTop() {
  // pathname detects page changes (e.g., /about to /services)
  // hash detects anchor changes (e.g., #contact)
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // SCENARIO 1: Standard Page Navigation
    // If the URL has no hash (e.g., just "isc.com/careers"), 
    // we reset the scroll position to the very top (0,0).
    if (!hash) {
      window.scrollTo(0, 0);
    } 
    
    // SCENARIO 2: Anchor/Section Navigation
    // If the URL contains a hash (e.g., "isc.com/#about"),
    // we manually find the element and scroll it into view.
    else {
      // Remove the '#' character to get the raw ID string
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // 'smooth' behavior creates a cinematic sliding effect
        // instead of an instant jump.
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // The effect re-runs every time the path or the hash in the URL changes
  }, [pathname, hash]);

  // This component is functional logic only; it doesn't render any UI
  return null;
}
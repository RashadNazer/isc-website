import { useEffect } from "react";

const BASE_TITLE = "International Security & Communications";

export const usePageTitle = (pageName, section) => {
  useEffect(() => {
    if (!pageName) {
      document.title = BASE_TITLE;
      return;
    }

    document.title = section
      ? `ISC: ${section} · ${pageName}`
      : `ISC: ${pageName}`;
  }, [pageName, section]);
};
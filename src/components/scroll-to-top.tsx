"use client";

import { useEffect } from "react";

/** Ensures first paint of the home page starts at the top (no mid-page jump). */
export function ScrollToTop() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}

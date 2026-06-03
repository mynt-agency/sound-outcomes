"use client";

/**
 * Smooth-scroll helpers ported from the design prototype.
 * Anchors offset by the sticky-nav height so targets aren't hidden.
 */

const NAV_OFFSET = 64;

export const scrollToId = (id: string) => (e: { preventDefault: () => void }) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - NAV_OFFSET, behavior: "smooth" });
};

export const scrollToTop = (e: { preventDefault: () => void }) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

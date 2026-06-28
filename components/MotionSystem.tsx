"use client";

import { useEffect } from "react";

export default function MotionSystem() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.add("motion-ready");

    if (reduceMotion) {
      document.documentElement.classList.add("motion-reduced");
      document.querySelectorAll("[data-motion-section]").forEach((section) => section.classList.add("is-in-view"));
      return;
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-section]"));
    const revealPassedSections = () => {
      const triggerLine = window.innerHeight * 0.86;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < triggerLine) {
          section.classList.add("is-in-view");
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0.16 }
    );

    sections.forEach((section) => observer.observe(section));
    revealPassedSections();

    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax-media]"));
    let ticking = false;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight || 1;

      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewportHeight) return;

        const progress = (rect.top + rect.height * 0.5 - viewportHeight * 0.5) / viewportHeight;
        item.style.setProperty("--parallax-y", `${Math.max(-1, Math.min(1, progress)) * -16}px`);
      });

      ticking = false;
    };

    const requestParallax = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        revealPassedSections();
        updateParallax();
      });
    };

    updateParallax();
    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestParallax);
      window.removeEventListener("resize", requestParallax);
    };
  }, []);

  return null;
}

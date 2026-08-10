"use client";

import { useEffect } from "react";

const motionRegions = [
  ".hero-shell",
  ".certificates",
  ".showreel-breakout",
  ".services",
  ".team",
  ".pricing",
  ".work",
  ".about",
  ".contact",
  ".reels-hero",
  ".reels-browser",
  ".reels-contact",
  ".learn-hero",
  ".learn-courses",
  ".combined-program",
  ".learn-process",
  ".learn-audience",
  ".learn-credibility",
  ".learn-final-cta",
  ".certificate-card",
  ".service-card",
  ".team-card",
  ".price-card",
  ".work-card",
  ".reel-card",
  ".learn-course-card",
  ".audience-card",
  ".credibility-card",
].join(",");

export default function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const limitedHardware = (typeof deviceMemory === "number" && deviceMemory <= 4) || (navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4);
    root.classList.toggle("performance-lite", limitedHardware);
    const updateDocumentVisibility = () => {
      root.classList.toggle("motion-document-paused", document.hidden);
    };

    updateDocumentVisibility();
    document.addEventListener("visibilitychange", updateDocumentVisibility);

    if (!("IntersectionObserver" in window)) {
      return () => {
        document.removeEventListener("visibilitychange", updateDocumentVisibility);
        root.classList.remove("motion-document-paused");
        root.classList.remove("performance-lite");
      };
    }

    const regions = Array.from(document.querySelectorAll<HTMLElement>(motionRegions));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("motion-paused", !entry.isIntersecting);
        }
      },
      { rootMargin: "160px 0px", threshold: 0 },
    );

    for (const region of regions) observer.observe(region);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateDocumentVisibility);
      root.classList.remove("motion-document-paused");
      root.classList.remove("performance-lite");
    };
  }, []);

  return null;
}

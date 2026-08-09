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
].join(",");

export default function MotionController() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const regions = Array.from(document.querySelectorAll<HTMLElement>(motionRegions));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("motion-paused", !entry.isIntersecting);
        }
      },
      { rootMargin: "220px 0px", threshold: 0 },
    );

    for (const region of regions) observer.observe(region);
    return () => observer.disconnect();
  }, []);

  return null;
}

"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import CinematicIntro from "./CinematicIntro";

const INTRO_KEY = "thoughts-cinematic-intro-v3";
const TRANSITION_LEAD_MS = 340;
const TRANSITION_REVEAL_MS = 280;

type PageTransitionContextValue = {
  navigate: (href: string) => void;
};

const PageTransitionContext = createContext<PageTransitionContextValue | null>(null);

function jumpToPageTop() {
  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  window.requestAnimationFrame(() => {
    root.style.scrollBehavior = previousBehavior;
  });
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext);
  if (!context) throw new Error("usePageTransition must be used inside PageTransitionProvider");
  return context;
}

export default function PageTransitionProvider({ children }: { children: ReactNode }) {
  const [initialVisible, setInitialVisible] = useState(true);
  const [navigationVisible, setNavigationVisible] = useState(false);
  const routeTimer = useRef<number | null>(null);
  const hideTimer = useRef<number | null>(null);
  const safetyTimer = useRef<number | null>(null);

  const clearNavigationTimers = useCallback(() => {
    if (routeTimer.current !== null) window.clearTimeout(routeTimer.current);
    if (hideTimer.current !== null) window.clearTimeout(hideTimer.current);
    if (safetyTimer.current !== null) window.clearTimeout(safetyTimer.current);
    routeTimer.current = null;
    hideTimer.current = null;
    safetyTimer.current = null;
  }, []);

  useEffect(() => {
    const alreadySeen = window.sessionStorage.getItem(INTRO_KEY);
    const timer = window.setTimeout(() => {
      if (!alreadySeen) window.sessionStorage.setItem(INTRO_KEY, "seen");
      setInitialVisible(false);
    }, alreadySeen ? 0 : 2800);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    return clearNavigationTimers;
  }, [clearNavigationTimers]);

  const navigate = useCallback((href: string) => {
    clearNavigationTimers();
    setNavigationVisible(true);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    routeTimer.current = window.setTimeout(() => {
      routeTimer.current = null;
      const destination = new URL(href, window.location.href);
      const currentRoute = `${window.location.pathname}${window.location.search}`;
      const destinationRoute = `${destination.pathname}${destination.search}`;

      if (destinationRoute === currentRoute) {
        jumpToPageTop();
        hideTimer.current = window.setTimeout(() => setNavigationVisible(false), TRANSITION_REVEAL_MS);
        return;
      }

      window.location.assign(`${destination.pathname}${destination.search}${destination.hash}`);
    }, reduceMotion ? 0 : TRANSITION_LEAD_MS);

    safetyTimer.current = window.setTimeout(() => setNavigationVisible(false), 1800);
  }, [clearNavigationTimers]);

  function skipIntro() {
    window.sessionStorage.setItem(INTRO_KEY, "seen");
    setInitialVisible(false);
  }

  return (
    <PageTransitionContext.Provider value={{ navigate }}>
      {children}
      {initialVisible && <CinematicIntro onSkip={skipIntro} />}
      {navigationVisible && !initialVisible && <CinematicIntro variant="navigation" />}
    </PageTransitionContext.Provider>
  );
}

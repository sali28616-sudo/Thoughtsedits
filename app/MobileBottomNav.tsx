"use client";

import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";

type NavKey = "home" | "reels" | "learn" | "about";

const items: Array<{ key: NavKey; label: string; href: string }> = [
  { key: "home", label: "Home", href: "/" },
  { key: "reels", label: "Reels", href: "/reels" },
  { key: "learn", label: "Learn", href: "/learn-editing" },
  { key: "about", label: "About Us", href: "/about" },
];

function NavIcon({ name }: { name: NavKey }) {
  if (name === "home") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9.5V21h14V9.5M9 21v-7h6v7" />
      </svg>
    );
  }

  if (name === "reels") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m10 9 5 3-5 3V9Z" />
        <path d="M18 8h3M18 12h3M18 16h3" />
      </svg>
    );
  }

  if (name === "learn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5.5c3.2-.8 6.2-.2 9 2v12c-2.8-2.2-5.8-2.8-9-2V5.5Z" />
        <path d="M21 5.5c-3.2-.8-6.2-.2-9 2v12c2.8-2.2 5.8-2.8 9-2V5.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 21c.7-4.2 3.2-6.4 7.5-6.4s6.8 2.2 7.5 6.4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export default function MobileBottomNav() {
  const pathname = usePathname();

  const activeKey: NavKey =
    pathname === "/reels"
      ? "reels"
      : pathname === "/learn-editing"
        ? "learn"
        : pathname === "/about"
          ? "about"
          : "home";

  return (
    <nav className="mobile-crystal-nav" aria-label="Mobile navigation">
      {items.map((item) => {
        const active = item.key === activeKey;
        return (
          <TransitionLink
            className={`mobile-crystal-link${active ? " is-active" : ""}`}
            href={item.href}
            aria-current={active ? "page" : undefined}
            key={item.key}
          >
            <NavIcon name={item.key} />
            <span>{item.label}</span>
          </TransitionLink>
        );
      })}
    </nav>
  );
}

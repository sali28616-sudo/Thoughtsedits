"use client";

import { useEffect, useRef, useState } from "react";

type MobileWhatsAppCTAProps = {
  href: string;
  label?: string;
  ariaLabel?: string;
};

export default function MobileWhatsAppCTA({
  href,
  label = "WhatsApp Salman",
  ariaLabel = "Start a project with Salman on WhatsApp",
}: MobileWhatsAppCTAProps) {
  const dockRef = useRef<HTMLDivElement>(null);
  const [isDocked, setIsDocked] = useState(false);

  useEffect(() => {
    const footer = dockRef.current?.previousElementSibling;
    if (!(footer instanceof HTMLElement) || footer.tagName !== "FOOTER" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsDocked(entry.isIntersecting),
      { threshold: 0.08 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mobile-whatsapp-dock" ref={dockRef}>
      <a
        className={`mobile-whatsapp${isDocked ? " is-footer-docked" : ""}`}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel}
      >
        <span>●</span> {label}
      </a>
    </div>
  );
}

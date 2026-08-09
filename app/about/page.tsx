import type { Metadata } from "next";
import AboutSection from "../AboutSection";
import TeamSection from "../TeamSection";
import TransitionLink from "../TransitionLink";

export const metadata: Metadata = {
  title: "About Us — Thoughts Creative Studio",
  description: "Meet Salman and the Thoughts Creative Studio video editing team, and learn about their professional editing experience and creative approach.",
};

const whatsapp = "https://wa.me/923086969047";

export default function AboutPage() {
  return (
    <main className="reels-page about-page">
      <div className="ambient-3d" aria-hidden="true">
        <span className="ambient-orb ambient-orb-a" />
        <span className="ambient-orb ambient-orb-b" />
        <span className="wire-cube cube-a"><i /><i /><i /><i /></span>
        <span className="ambient-ring ring-a" />
      </div>

      <header className="site-header reels-header">
        <TransitionLink className="brand" href="/" aria-label="Thoughts home">Thoughts<span>.</span></TransitionLink>
        <nav aria-label="About page navigation">
          <TransitionLink href="/">Home</TransitionLink>
          <TransitionLink href="/reels">Reels</TransitionLink>
          <TransitionLink href="/learn-editing">Learn Editing</TransitionLink>
          <TransitionLink className="active-nav" href="/about" aria-current="page">About Us</TransitionLink>
        </nav>
        <div className="header-actions">
          <TransitionLink className="learn-nav-cta" href="/learn-editing">Learn</TransitionLink>
          <TransitionLink className="reels-nav-cta" href="/reels"><span aria-hidden="true">▶</span> Reels</TransitionLink>
          <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Start a project</a>
        </div>
      </header>

      <TeamSection />
      <AboutSection certificateHref="/#certificates" />

      <footer className="reels-footer">
        <TransitionLink className="brand" href="/">Thoughts<span>.</span></TransitionLink>
        <p>Video editing by Salman · 3 years of experience</p>
        <div><TransitionLink href="/">Home</TransitionLink><TransitionLink href="/reels">Reels</TransitionLink><TransitionLink href="/learn-editing">Learn Editing</TransitionLink><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div>
      </footer>
      <a className="mobile-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Start a project with Salman on WhatsApp"><span>●</span> WhatsApp Salman</a>
    </main>
  );
}

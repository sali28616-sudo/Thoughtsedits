import type { Metadata } from "next";
import Link from "next/link";
import ReelsExplorer from "./ReelsExplorer";

export const metadata: Metadata = {
  title: "Reels — Thoughts Video Editing",
  description: "Explore vertical social media reels, promotional videos, educational edits and motion graphics created by Salman and the Thoughts editing team.",
};

const whatsapp = "https://wa.me/923086969047";

export default function ReelsPage() {
  return (
    <main className="reels-page">
      <div className="ambient-3d" aria-hidden="true">
        <span className="ambient-orb ambient-orb-a" />
        <span className="ambient-orb ambient-orb-b" />
        <span className="wire-cube cube-a"><i /><i /><i /><i /></span>
        <span className="ambient-ring ring-a" />
      </div>

      <header className="site-header reels-header">
        <Link className="brand" href="/" aria-label="Thoughts home">Thoughts<span>.</span></Link>
        <nav aria-label="Reels page navigation">
          <Link href="/">Home</Link>
          <a className="active-nav" href="#reels">Reels</a>
          <a href="#start-project">Contact</a>
        </nav>
        <div className="header-actions">
          <Link className="reels-nav-cta reels-home-cta" href="/">← Home</Link>
          <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Start a project</a>
        </div>
      </header>

      <section className="reels-hero section">
        <div className="reels-hero-copy">
          <p className="hero-kicker"><span>●</span> Vertical portfolio · 9:16</p>
          <h1>Reels that<br /><span>earn the pause.</span></h1>
          <p>Explore social-first edits created for strong hooks, clear storytelling and the kind of pacing that keeps viewers watching.</p>
          <div className="reels-hero-actions">
            <a className="button hero-primary" href="#reels"><span>▶</span> Explore videos</a>
            <a className="hero-link" href={whatsapp} target="_blank" rel="noreferrer">Book an edit ↗</a>
          </div>
        </div>
        <div className="reels-hero-proof" aria-label="Portfolio highlights">
          <div><strong>1M+</strong><span>Social views</span></div>
          <div><strong>6</strong><span>Featured reels</span></div>
          <div><strong>3+</strong><span>Years editing</span></div>
        </div>
      </section>

      <section className="reels-browser section" id="reels">
        <div className="reels-section-heading">
          <div><p className="eyebrow">Selected client work</p><h2>Pick a category.<br />Press play.</h2></div>
          <p>Tap any video to watch. Use the category buttons to quickly find the editing style you need.</p>
        </div>
        <ReelsExplorer />
      </section>

      <section className="reels-contact section" id="start-project">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>Let’s make your next reel<br />impossible to scroll past.</h2>
        <div className="actions">
          <a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">Start on WhatsApp ↗</a>
          <a className="button light" href="mailto:ext.salman786@gmail.com">Email Salman</a>
        </div>
        <span className="crystal-edge" aria-hidden="true" />
      </section>

      <footer className="reels-footer">
        <Link className="brand" href="/">Thoughts<span>.</span></Link>
        <p>Video editing by Salman · 3 years of experience</p>
        <div><Link href="/">Home</Link><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div>
      </footer>
      <a className="mobile-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Start a project with Salman on WhatsApp"><span>●</span> WhatsApp Salman</a>
    </main>
  );
}

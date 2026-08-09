import type { Metadata } from "next";
import TransitionLink from "../TransitionLink";

export const metadata: Metadata = {
  title: "Learn Video Editing — Thoughts Creative Studio",
  description: "Learn professional video editing, build a client-ready portfolio, and understand how to find and manage freelance video editing clients with Thoughts Creative Studio.",
};

const whatsapp = "https://wa.me/923086969047";

const editingFeatures = [
  "Video editing fundamentals",
  "Professional editing workflow",
  "Cutting & pacing",
  "Transitions",
  "Text & subtitles",
  "Background music",
  "Sound effects",
  "Color correction",
  "Color grading basics",
  "Motion graphics fundamentals",
  "Social media video editing",
  "Short-form content editing",
  "Long-form video editing",
  "Professional export settings",
  "Practical editing assignments",
  "Real-world editing workflow",
];

const editingRoadmap = [
  { number: "01", title: "Editing Fundamentals", text: "Understand the editing interface, timeline, footage organization, cuts, pacing and basic workflow." },
  { number: "02", title: "Professional Editing", text: "Learn professional cuts, transitions, music synchronization, subtitles, effects and storytelling." },
  { number: "03", title: "Advanced Skills", text: "Learn color correction, color grading, motion graphics, sound design and advanced editing techniques." },
  { number: "04", title: "Real Projects", text: "Work on practical projects instead of only watching tutorials." },
];

const freelanceFeatures = [
  "How to find potential clients",
  "Where to find international clients",
  "How to approach clients",
  "Cold outreach strategy",
  "Instagram outreach",
  "LinkedIn outreach",
  "Email outreach",
  "WhatsApp outreach",
  "Building an effective portfolio",
  "Creating a professional offer",
  "How to talk to clients",
  "How to understand client requirements",
  "How to quote your price",
  "How to negotiate",
  "How to receive raw footage",
  "How to manage a complete editing project",
  "How to handle revisions",
  "How to deliver final videos",
  "How to retain clients",
  "How to turn one client into monthly work",
  "Freelancing workflow",
  "Building a long-term video editing business",
];

const learningSteps = [
  { number: "01", title: "Learn", text: "Understand the tools, techniques and professional editing workflow." },
  { number: "02", title: "Practice", text: "Work on practical projects and develop real editing skills." },
  { number: "03", title: "Build", text: "Create a portfolio that can actually be shown to potential clients." },
  { number: "04", title: "Get Clients", text: "Learn how to approach clients, close projects and start earning from your skills." },
];

const audiences = [
  { number: "01", title: "Beginners", text: "Starting video editing from zero." },
  { number: "02", title: "Aspiring Freelancers", text: "Want to turn editing into a freelance income source." },
  { number: "03", title: "Existing Editors", text: "Want to improve their editing and professional workflow." },
  { number: "04", title: "Content Creators", text: "Want to edit their own YouTube, TikTok, Instagram or other social media content." },
];

const credibility = [
  { value: "3+", title: "Years Experience", text: "Professional video editing experience." },
  { value: "◆", title: "Real Client Work", text: "Learn through practical, real-world editing workflows." },
  { value: "↗", title: "Portfolio Focused", text: "Build skills that can actually be demonstrated to clients." },
  { value: "⌘", title: "Freelancing Focused", text: "Learn not only editing, but also how to turn the skill into client work." },
];

export default function LearnEditingPage() {
  return (
    <main className="learn-page">
      <div className="ambient-3d" aria-hidden="true">
        <span className="ambient-orb ambient-orb-a" />
        <span className="ambient-orb ambient-orb-b" />
        <span className="wire-cube cube-a"><i /><i /><i /><i /></span>
        <span className="ambient-ring ring-a" />
      </div>

      <header className="site-header learn-header">
        <TransitionLink className="brand" href="/" aria-label="Thoughts home">Thoughts<span>.</span></TransitionLink>
        <nav aria-label="Learning page navigation">
          <TransitionLink href="/">Home</TransitionLink>
          <TransitionLink href="/reels">Reels</TransitionLink>
          <TransitionLink className="active-nav" href="/learn-editing" aria-current="page">Learn Editing</TransitionLink>
          <TransitionLink href="/about">About Us</TransitionLink>
          <a href="#courses">Courses</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#why-us">Why Us</a>
          <a href="#learn-contact">Contact</a>
        </nav>
        <div className="header-actions">
          <TransitionLink className="reels-nav-cta" href="/reels"><span aria-hidden="true">▶</span> Reels</TransitionLink>
          <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </header>

      <section className="learn-hero section" id="top">
        <div className="learn-hero-copy">
          <p className="hero-kicker"><span>●</span> Thoughts professional training</p>
          <h1>Learn Video<br /> <span>Editing.</span></h1>
          <h2>Turn your editing skills into a real freelance career.</h2>
          <p>Learn professional video editing from the basics to client-ready work — including how to edit videos, build a portfolio, find clients, communicate with clients, and deliver complete projects professionally.</p>
          <div className="learn-actions">
            <a className="button hero-primary" href="#courses">Start Learning →</a>
            <a className="button learn-ghost-button" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp Us ↗</a>
          </div>
        </div>

        <div className="learn-hero-visual" aria-label="Learning journey overview">
          <div className="learn-editor-panel">
            <div className="learn-panel-top"><span>TRAINING SYSTEM</span><strong>02 PROGRAMS</strong></div>
            <div className="learn-panel-screen">
              <p>From first cut to<br /><strong>client-ready delivery.</strong></p>
              <div className="learn-track"><span>EDIT</span><i /></div>
              <div className="learn-track"><span>PRACTICE</span><i /></div>
              <div className="learn-track"><span>PORTFOLIO</span><i /></div>
              <div className="learn-track"><span>CLIENTS</span><i /></div>
              <b className="learn-playhead" aria-hidden="true" />
            </div>
            <div className="learn-panel-bottom"><span>LEARN</span><i>→</i><span>BUILD</span><i>→</i><span>GET PAID</span></div>
            <span className="crystal-edge" aria-hidden="true" />
          </div>
          <div className="learn-float-card learn-float-one" aria-hidden="true"><span>01</span><strong>SKILL</strong><i /></div>
          <div className="learn-float-card learn-float-two" aria-hidden="true"><span>02</span><strong>CLIENTS</strong><i /></div>
          <div className="hero-orbit learn-orbit" aria-hidden="true"><i /><i /><i /></div>
        </div>
      </section>

      <div className="learn-marquee" aria-hidden="true"><div>LEARN <span>✦</span> PRACTICE <span>✦</span> BUILD PORTFOLIO <span>✦</span> FIND CLIENTS <span>✦</span> DELIVER <span>✦</span> GET PAID <span>✦</span> LEARN <span>✦</span> PRACTICE <span>✦</span></div></div>

      <section className="learn-courses section" id="courses">
        <div className="learn-section-heading learn-reveal">
          <div><p className="eyebrow">Professional training programs</p><h2>Choose the skill set<br />your career needs.</h2></div>
          <p>Begin with complete editing or go further with client acquisition and professional freelancing workflows.</p>
        </div>

        <article className="learn-course-card course-editing learn-reveal" id="complete-editing">
          <div className="course-card-head">
            <div className="course-intro">
              <p className="course-index">Course 01 · Complete Video Editing</p>
              <h2>Complete Video Editing</h2>
              <p className="course-meta">1 Month · One-Time Payment · PKR 20,000</p>
              <p className="course-description">Learn complete video editing from beginner level to professional workflow. This course is designed for people who want to develop practical editing skills and start producing professional-quality videos.</p>
            </div>
            <div className="course-price">
              <span>ONE-TIME PAYMENT</span>
              <strong>PKR 20,000</strong>
              <small>Complete editing program</small>
            </div>
          </div>

          <div className="course-content-grid">
            <div>
              <h3>What’s included</h3>
              <ul className="course-feature-list">
                {editingFeatures.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
          </div>

          <div className="course-roadmap">
            <div className="course-subheading"><p className="eyebrow">What you will learn</p><h3>A practical learning roadmap.</h3></div>
            <div className="course-roadmap-grid">
              {editingRoadmap.map((item) => (
                <div className="roadmap-card" key={item.number}>
                  <span>{item.number}</span><h4>{item.title}</h4><p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <a className="button course-button" href={whatsapp} target="_blank" rel="noreferrer">Start Learning — PKR 20,000 →</a>
          <span className="crystal-edge" aria-hidden="true" />
        </article>

        <article className="learn-course-card course-freelance learn-reveal" id="freelancing">
          <div className="course-card-head">
            <div className="course-intro">
              <p className="course-index">Course 02 · Advanced Program</p>
              <h2>Get Clients &amp;<br />Start Freelancing</h2>
              <p className="course-meta">Client Acquisition + Complete Project Workflow</p>
              <p className="course-description">This program is for editors who want to go beyond editing and learn how to actually get clients, approach businesses and creators, close projects, and handle complete video editing work professionally.</p>
            </div>
            <div className="course-price">
              <span>ONE-TIME PAYMENT</span>
              <strong>PKR 30,000</strong>
              <small>Client acquisition program</small>
            </div>
          </div>

          <div className="course-content-grid">
            <div>
              <h3>Build your client workflow</h3>
              <ul className="course-feature-list freelance-feature-list">
                {freelanceFeatures.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
          </div>

          <a className="button course-button" href={whatsapp} target="_blank" rel="noreferrer">Learn Client Acquisition — PKR 30,000 →</a>
          <span className="crystal-edge" aria-hidden="true" />
        </article>
      </section>

      <section className="combined-program section learn-reveal" aria-labelledby="combined-title">
        <div className="combined-copy">
          <p className="eyebrow">The complete roadmap</p>
          <h2 id="combined-title">Want the Complete<br />Roadmap?</h2>
          <h3>Learn Editing + Learn How to Get Clients</h3>
          <p>Combine both programs and learn the complete journey.</p>
        </div>
        <div className="combined-path" aria-label="Complete learning journey">
          {['Learn', 'Practice', 'Build Portfolio', 'Find Clients', 'Close Projects', 'Deliver', 'Get Paid'].map((step, index) => (
            <span key={step}>{step}{index < 6 && <i aria-hidden="true">→</i>}</span>
          ))}
        </div>
        <div className="combined-bottom">
          <div className="combined-includes">
            <p><span>✓</span> Complete Video Editing <strong>PKR 20,000</strong></p>
            <p><span>✓</span> Client Acquisition &amp; Freelancing <strong>PKR 30,000</strong></p>
          </div>
          <div className="combined-total"><span>TOTAL</span><strong>PKR 50,000</strong><small>One-time payment</small></div>
          <a className="button hero-primary" href={whatsapp} target="_blank" rel="noreferrer">Start the Complete Journey →</a>
        </div>
        <span className="crystal-edge" aria-hidden="true" />
      </section>

      <section className="learn-process section" id="how-it-works">
        <div className="learn-section-heading learn-reveal">
          <div><p className="eyebrow">How the learning works</p><h2>From learning<br />to earning.</h2></div>
          <p>A focused path designed to turn knowledge into practical work that can be shown and sold professionally.</p>
        </div>
        <div className="learning-timeline">
          {learningSteps.map((step) => (
            <article className="learning-step learn-reveal" key={step.number}>
              <span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="learn-audience section">
        <div className="learn-section-heading learn-reveal">
          <div><p className="eyebrow">Who is this for?</p><h2>Built for your<br />next creative step.</h2></div>
          <p>Whether you are opening an editor for the first time or ready to turn existing skills into paid client work.</p>
        </div>
        <div className="audience-grid">
          {audiences.map((item) => (
            <article className="audience-card learn-reveal" key={item.number}>
              <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><i aria-hidden="true">↗</i>
              <span className="crystal-edge" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="learn-credibility section" id="why-us">
        <div className="learn-section-heading learn-reveal">
          <div><p className="eyebrow">Why learn from us?</p><h2>Studio experience.<br />Practical direction.</h2></div>
          <p>Training grounded in the same real editing workflows, portfolio focus and client experience presented across the Thoughts website.</p>
        </div>
        <div className="credibility-grid">
          {credibility.map((item) => (
            <article className="credibility-card learn-reveal" key={item.title}>
              <strong>{item.value}</strong><h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="learn-final-cta section learn-reveal" id="learn-contact">
        <p className="eyebrow">Ready to begin?</p>
        <h2>Ready to turn video editing<br />into a skill you can sell?</h2>
        <p>Whether you want to learn editing from scratch or learn how to start getting clients, choose the program that matches your goal.</p>
        <div className="learn-actions">
          <a className="button hero-primary" href="#complete-editing">Learn Video Editing →</a>
          <a className="button learn-ghost-button" href="#freelancing">Get Clients &amp; Start Freelancing →</a>
        </div>
        <a className="learn-whatsapp-link" href={whatsapp} target="_blank" rel="noreferrer">Have questions? Talk to us on WhatsApp ↗</a>
        <span className="crystal-edge" aria-hidden="true" />
      </section>

      <footer className="learn-footer">
        <TransitionLink className="brand" href="/">Thoughts<span>.</span></TransitionLink>
        <p>Professional video editing and freelance training by Salman</p>
        <div><TransitionLink href="/">Home</TransitionLink><TransitionLink href="/reels">Reels</TransitionLink><TransitionLink href="/about">About Us</TransitionLink><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div>
      </footer>
      <a className="mobile-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Ask about video editing training on WhatsApp"><span>●</span> Ask About Training</a>
    </main>
  );
}

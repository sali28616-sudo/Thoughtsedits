const portfolio = [
  { title: "Top Premium Campaign", category: "Premium Edit", id: "1rWQrPCYfH4nUAzBgqAJ7cX4bJTNM0Xgb" },
  { title: "Latest Premium Story", category: "Premium Edit", id: "1HtAUNnkHoUWmJmstpgmMPpl5PbhlvWYp" },
  { title: "Social Media Success Story", category: "Storytelling", id: "1xcX7hB16txJibAdVlu0hwT8foxisxgJJ" },
  { title: "Premium Motion Edit", category: "Motion Graphics", id: "16aluH0shttIm7gEvrqPZhECUOM6NRFd2" },
  { title: "Serbia Work Permit Update", category: "Social Media", id: "1HL0RERWvffPBGqw9dJlxgGHsEE2ztHmB" },
  { title: "Schengen Village — Luxembourg", category: "Travel Content", id: "15Ot1b5FDD9e326f-_MlTo10DdQgDf6fO" },
];

const services = [
  { icon: "◆", name: "Premium Edit", description: "Cinematic storytelling with advanced transitions, sound design, color grading and motion graphics.", meta: "5–7 days · Up to 10 min · Unlimited revisions" },
  { icon: "⌘", name: "Standard Edit", description: "Polished, engaging edits with smooth cuts, music sync, subtitles and balanced color correction.", meta: "3–4 days · Up to 5 min · 2 revisions" },
  { icon: "✂", name: "Basic Edit", description: "Clean, focused edits with precise cuts, text overlays, music and essential color correction.", meta: "1–2 days · Up to 2 min · 1 revision" },
];

const team = [
  { name: "Salman", role: "Founder & Lead Video Editor", image: "1Oz-z1VJZhbZxLiBOT2GEbNOUh2wYtSjL" },
  { name: "Anas Ali", role: "Video Editor", image: "1OrpkC9Aedh_rvIXfTwlDybK5tpbY8ybM" },
  { name: "Shaher Yar Khan", role: "Video Editor", image: "1iyKH4UthTuGisgd-sCEECSxtfx-jSMWH" },
];

const pricing = [
  { name: "Basic", price: "30K", featured: false, features: ["Up to 8 short videos", "Maximum 60 seconds each", "Basic cuts & transitions", "Background music", "Simple captions", "1 revision per video", "3–4 days delivery"] },
  { name: "Standard", price: "50K", featured: true, features: ["Up to 15 short videos", "Up to 4 long videos", "No monthly fees", "Professional transitions", "Colour grading", "Animated captions", "Sound effects & music", "Basic motion graphics", "3 revisions per video", "48–72 hours delivery"] },
  { name: "Premium", price: "70K", featured: false, features: ["Up to 25 short videos", "Up to 6 long videos", "Advanced video editing", "Professional colour grading", "Advanced motion graphics", "Premium captions & effects", "Thumbnail design included", "Unlimited revisions", "Priority 24–48 hours delivery"] },
];

const certificates = [
  {
    title: "Certificate of Appreciation",
    organization: "Pardesi Vibe · July 2026",
    image: "/certificates/pardesi-vibe-appreciation.png",
    alt: "Certificate of Appreciation presented to Salman Ali for video editing",
  },
  {
    title: "Certificate of Employment",
    organization: "PVG (Pardesi Vibe Germany) · July 2026",
    image: "/certificates/pvg-employment.png",
    alt: "Certificate of Employment presented to Salman Ali as a video editor",
  },
];

const whatsapp = "https://wa.me/923086969047";

export default function Home() {
  return (
    <main>
      <div className="ambient-3d" aria-hidden="true">
        <span className="ambient-orb ambient-orb-a" /><span className="ambient-orb ambient-orb-b" />
        <span className="wire-cube cube-a"><i /><i /><i /><i /></span>
        <span className="wire-cube cube-b"><i /><i /><i /><i /></span>
        <span className="ambient-ring ring-a" /><span className="ambient-ring ring-b" />
        <span className="film-ribbon"><i /><i /><i /><i /><i /><i /></span>
      </div>

      <div className="hero-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Thoughts home">Thoughts<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#certificates">Certificates</a><a href="#services">Services</a><a href="#team">Team</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <span>0308 6969047</span></a>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="hero-kicker"><span>●</span> Thoughts creative studio</p>
          <h1><span className="hero-solid">We edit</span><br /><span className="hero-outline">attention.</span></h1>
          <p className="lead">Cinematic video editing, motion graphics and stories designed to make people pause, watch and remember.</p>
          <div className="actions">
            <a className="button hero-primary" href="#work"><span>▶</span> Explore the work</a>
            <a className="hero-link" href={whatsapp} target="_blank" rel="noreferrer">Start a project ↗</a>
          </div>
          <div className="hero-proof"><div><strong>1M+</strong><span>Social views</span></div><div><strong>3+</strong><span>Years creating</span></div><div><strong>3</strong><span>Editors in team</span></div></div>
        </div>
        <div className="hero-art-stage">
          <div className="hero-art-shadow" aria-hidden="true" />
          <div className="hero-art-card"><img src="/salman-portfolio-hero.png" alt="Salman — Thoughts creative video editing portfolio" /><span className="crystal-edge" aria-hidden="true" /></div>
          <div className="motion-chip chip-top" aria-hidden="true"><span>01</span><strong>MOTION</strong><i /></div>
          <div className="motion-chip chip-side" aria-hidden="true"><span>02</span><strong>STORY</strong><i /></div>
          <div className="motion-chip chip-bottom" aria-hidden="true"><span>03</span><strong>COLOUR</strong><i /></div>
          <div className="hero-timeline" aria-hidden="true"><b>00:12:24</b><span /><span /><span /><span /><i /></div>
          <div className="hero-loop" aria-hidden="true"><span /><span /><span /></div>
        </div>
      </section>
      <div className="hero-marquee" aria-hidden="true"><div>VIDEO EDITING <span>✦</span> MOTION GRAPHICS <span>✦</span> COLOUR GRADING <span>✦</span> STORYTELLING <span>✦</span> VIDEO EDITING <span>✦</span> MOTION GRAPHICS <span>✦</span></div></div>
      </div>

      <section className="certificates section" id="certificates">
        <div className="section-heading certificate-heading"><div><p className="eyebrow">Verified experience</p><h2>Work recognized.<br />Details protected.</h2></div><p>Professional certificates supporting Salman’s video editing experience. Issuer contact details are hidden for privacy.</p></div>
        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <article className="certificate-card" key={certificate.title}>
              <div className="certificate-index"><span>0{index + 1}</span><i aria-hidden="true" /></div>
              <div className="certificate-image"><img src={certificate.image} alt={certificate.alt} loading="eager" /></div>
              <div className="certificate-info"><div><p>{certificate.organization}</p><h3>{certificate.title}</h3></div><span>Verified</span></div>
              <span className="crystal-edge" aria-hidden="true" />
            </article>
          ))}
        </div>
        <p className="privacy-note"><span>◉</span> Issuer email, phone number and office address have been removed from the public copies.</p>
      </section>

      <section className="showreel-breakout section" aria-label="Featured showreel">
        <div className="showreel-copy"><p className="eyebrow">Press play</p><h2>See the edit.<br />Feel the difference.</h2><p>A featured premium project from the Thoughts portfolio.</p></div>
        <div className="showreel-stage">
          <div className="floating-frame frame-back-one" aria-hidden="true"><span>COLOR</span><b>01</b></div>
          <div className="floating-frame frame-back-two" aria-hidden="true"><span>MOTION</span><b>02</b></div>
          <div className="showreel-card"><iframe src="https://drive.google.com/file/d/1rWQrPCYfH4nUAzBgqAJ7cX4bJTNM0Xgb/preview" title="Thoughts featured premium showreel" allow="autoplay; fullscreen" allowFullScreen /><div className="showreel-label"><span>Featured work</span><strong>Million+ social views</strong></div><span className="crystal-edge" aria-hidden="true" /></div>
          <div className="timeline-float" aria-hidden="true"><span /><span /><span /><span /><i /></div>
        </div>
      </section>

      <section className="services section" id="services" aria-label="Editing packages">
        <p className="mobile-swipe-hint"><span aria-hidden="true">↔</span> Swipe to explore packages</p>
        <div className="service-strip mobile-slider" role="region" aria-label="Swipe through editing packages" tabIndex={0}>
          {services.map((service, index) => (
            <article className={`service-card card-depth-${index + 1}`} key={service.name}>
              <div className="service-top"><span className="service-icon">{service.icon}</span><span className="service-number">0{index + 1}</span></div>
              <h2>{service.name}</h2><p>{service.description}</p><div className="service-meta">{service.meta}</div>
              <span className="crystal-edge" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="team section" id="team">
        <div className="section-heading"><div><p className="eyebrow">Meet the team</p><h2>Three editors.<br />One creative standard.</h2></div><p>Thoughts brings together a focused editing team built for reliable delivery, consistent quality and content that earns attention.</p></div>
        <p className="mobile-swipe-hint"><span aria-hidden="true">↔</span> Swipe to meet the team</p>
        <div className="team-grid mobile-slider" role="region" aria-label="Swipe through team members" tabIndex={0}>
          {team.map((member, index) => (
            <article className="team-card" key={member.name}>
              <div className="team-photo"><img src={`https://drive.google.com/thumbnail?id=${member.image}&sz=w1400`} alt={`${member.name}, ${member.role} at Thoughts`} /></div>
              <div className="team-info"><div><span>0{index + 1}</span><h3>{member.name}</h3><p>{member.role}</p></div><i aria-hidden="true">↗</i></div>
              <span className="crystal-edge" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="pricing section" id="pricing">
        <div className="pricing-heading"><p className="eyebrow">Monthly packages</p><h2>Choose the editing pace<br />your content needs.</h2><p>Clear monthly options taken directly from the Thoughts portfolio. Contact us to confirm scope and availability.</p></div>
        <p className="mobile-swipe-hint"><span aria-hidden="true">↔</span> Swipe to compare packages</p>
        <div className="pricing-grid mobile-slider" role="region" aria-label="Swipe through monthly pricing packages" tabIndex={0}>
          {pricing.map((plan) => (
            <article className={`price-card ${plan.featured ? "price-featured" : ""}`} key={plan.name}>
              {plan.featured && <span className="popular">Most popular</span>}
              <div className="price-top"><span>{plan.name}</span><strong>{plan.price}</strong><small>/ month</small></div>
              <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <a className={`button ${plan.featured ? "primary" : "outline-price"}`} href={whatsapp} target="_blank" rel="noreferrer">Choose {plan.name} ↗</a>
              <span className="crystal-edge" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading"><div><p className="eyebrow">Million-view portfolio</p><h2>Videos that crossed<br />a million views.</h2></div><p>Social-first edits built for strong hooks, clear storytelling and audience retention—now with more than one million views across social media.</p></div>
        <p className="mobile-swipe-hint"><span aria-hidden="true">↔</span> Swipe through featured videos</p>
        <div className="work-grid mobile-slider" role="region" aria-label="Swipe through million-view portfolio videos" tabIndex={0}>
          {portfolio.map((item, index) => (
            <article className={`work-card ${index === 0 ? "featured" : ""}`} key={item.id}>
              <div className="video-wrap"><iframe src={`https://drive.google.com/file/d/${item.id}/preview`} title={item.title} loading="lazy" allow="autoplay; fullscreen" allowFullScreen /></div>
              <div className="work-info"><div><span>{item.category}</span><h3>{item.title}</h3><p>1M+ views on social media</p></div><a href={`https://drive.google.com/file/d/${item.id}/view`} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`}>↗</a></div>
              <span className="crystal-edge" aria-hidden="true" />
            </article>
          ))}
        </div>
        <a className="button outline" href="https://drive.google.com/drive/folders/1WAj9hLkyR-BXEmiNJF8SelvfgScrgxlk" target="_blank" rel="noreferrer">Explore Full Portfolio ↗</a>
      </section>

      <section className="about section" id="about">
        <div className="portrait"><img src="https://drive.google.com/thumbnail?id=1Oz-z1VJZhbZxLiBOT2GEbNOUh2wYtSjL&sz=w1200" alt="Salman, video editor at Thoughts" /><span className="crystal-edge" aria-hidden="true" /></div>
        <div className="about-copy"><p className="eyebrow">About Thoughts</p><h2>Editing with intent,<br />not just effects.</h2><p>I’m Salman, a video editor with three years of professional experience. I help creators, consultants and businesses turn ideas and raw footage into polished videos that feel clear, current and memorable.</p>
          <div className="stats"><div><strong>3+</strong><span>Years of experience</span></div><div><strong>3</strong><span>Editors in the team</span></div><div><strong>1M+</strong><span>Social media views</span></div></div>
          <div className="proof-links"><a href="#certificates">View certificates ↓</a><a href="https://drive.google.com/drive/folders/1cE0hSxOoECfe1jn7WBMeyVidv0DDhhOi" target="_blank" rel="noreferrer">Proof of work ↗</a></div>
        </div>
      </section>

      <section className="testimonial section">
        <p className="eyebrow">Client feedback</p><blockquote>“The final edit did more than look good—it made the message easier to follow and the content much more engaging.”</blockquote><a className="text-link" href="https://drive.google.com/file/d/1uG_Ok4kAIzCP8Pr0fWIHWf3it56So8JD/view" target="_blank" rel="noreferrer">Watch client feedback ↗</a>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-sphere sphere-one" aria-hidden="true" />
        <div className="contact-sphere sphere-two" aria-hidden="true" />
        <p className="eyebrow">Have footage ready?</p><h2>Let’s turn your next idea<br />into something worth watching.</h2><div className="actions"><a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">Start on WhatsApp ↗</a><a className="button light" href="mailto:ext.salman786@gmail.com">ext.salman786@gmail.com</a></div>
        <span className="crystal-edge" aria-hidden="true" />
      </section>

      <footer><a className="brand" href="#top">Thoughts<span>.</span></a><p>Video editing by Salman · 3 years of experience</p><div><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:ext.salman786@gmail.com">Email</a></div></footer>
      <a className="mobile-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Start a project with Salman on WhatsApp"><span>●</span> WhatsApp Salman</a>
    </main>
  );
}

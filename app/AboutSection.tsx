export default function AboutSection({ certificateHref = "#certificates" }: { certificateHref?: string }) {
  return (
    <section className="about section" id="about">
      <div className="portrait"><img src="https://drive.google.com/thumbnail?id=1Oz-z1VJZhbZxLiBOT2GEbNOUh2wYtSjL&sz=w900" width="900" height="1125" loading="lazy" decoding="async" fetchPriority="low" alt="Salman, video editor at Thoughts" /><span className="crystal-edge" aria-hidden="true" /></div>
      <div className="about-copy"><p className="eyebrow">About Thoughts</p><h2>Editing with intent,<br />not just effects.</h2><p>I’m Salman, a video editor with three years of professional experience. I help creators, consultants and businesses turn ideas and raw footage into polished videos that feel clear, current and memorable.</p>
        <div className="stats"><div><strong>3+</strong><span>Years of experience</span></div><div><strong>3</strong><span>Editors in the team</span></div><div><strong>1M+</strong><span>Social media views</span></div></div>
        <div className="proof-links"><a href={certificateHref}>View certificates ↓</a><a href="https://drive.google.com/drive/folders/1cE0hSxOoECfe1jn7WBMeyVidv0DDhhOi" target="_blank" rel="noreferrer">Proof of work ↗</a></div>
      </div>
    </section>
  );
}

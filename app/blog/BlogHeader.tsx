import TransitionLink from "../TransitionLink";

const whatsapp = "https://wa.me/923086969047";

export function BlogHeader() {
  return (
    <header className="site-header reels-header blog-header">
      <TransitionLink className="brand" href="/" aria-label="Thoughts home">Thoughts<span>.</span></TransitionLink>
      <nav aria-label="Blog navigation">
        <TransitionLink href="/">Home</TransitionLink>
        <TransitionLink href="/reels">Reels</TransitionLink>
        <TransitionLink href="/learn-editing">Learn Editing</TransitionLink>
        <TransitionLink href="/about">About Us</TransitionLink>
        <TransitionLink className="active-nav" href="/blog" aria-current="page">Blog</TransitionLink>
      </nav>
      <div className="header-actions">
        <TransitionLink className="reels-nav-cta" href="/reels"><span aria-hidden="true">▶</span> Reels</TransitionLink>
        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Start a project</a>
      </div>
    </header>
  );
}

export function BlogFooter() {
  return (
    <footer className="reels-footer blog-footer">
      <TransitionLink className="brand" href="/">Thoughts<span>.</span></TransitionLink>
      <p>Video editing by Salman · 3+ Years of Professional Experience</p>
      <div>
        <TransitionLink href="/">Home</TransitionLink>
        <TransitionLink href="/reels">Reels</TransitionLink>
        <TransitionLink href="/learn-editing">Learn Editing</TransitionLink>
        <TransitionLink href="/about">About Us</TransitionLink>
        <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </footer>
  );
}

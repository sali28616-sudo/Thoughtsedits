import type { Metadata } from "next";
import MobileWhatsAppCTA from "../MobileWhatsAppCTA";
import TransitionLink from "../TransitionLink";
import { BlogFooter, BlogHeader } from "./BlogHeader";
import { blogPosts } from "./posts";

const canonical = "https://thoughtsedits.com/blog";
const whatsapp = "https://wa.me/923086969047";

export const metadata: Metadata = {
  title: "Video Editing Guides & Resources | Thoughts",
  description: "Practical video editing guides for Reels, YouTube, social media, motion graphics, professional workflows and freelance client work from Thoughts.",
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    title: "Video Editing Guides & Resources | Thoughts",
    description: "Practical guides on video editing, social content, YouTube, Reels, motion graphics and professional workflows.",
    images: [{ url: "/salman-portfolio-hero.png", width: 2048, height: 1152, alt: "Thoughts professional video editing studio" }],
  },
};

export default function BlogPage() {
  const featured = blogPosts[0];
  return (
    <main className="reels-page blog-page">
      <div className="ambient-3d" aria-hidden="true">
        <span className="ambient-orb ambient-orb-a" />
        <span className="ambient-orb ambient-orb-b" />
        <span className="wire-cube cube-a"><i /><i /><i /><i /></span>
        <span className="ambient-ring ring-a" />
      </div>
      <BlogHeader />

      <section className="blog-hero section">
        <div>
          <p className="hero-kicker"><span>●</span> Thoughts editorial</p>
          <h1>Video Editing<br /><span>Resources.</span></h1>
        </div>
        <p>Practical guides on video editing, social media content, YouTube, Reels, motion graphics and building a professional editing workflow.</p>
      </section>

      <section className="blog-feature section" aria-labelledby="featured-article-title">
        <div className="blog-feature-image">
          <img src={featured.featuredImage} width="1200" height="675" alt={featured.featuredAlt} loading="eager" decoding="async" fetchPriority="high" />
        </div>
        <div className="blog-feature-copy">
          <p className="eyebrow">Featured guide · {featured.category}</p>
          <h2 id="featured-article-title">{featured.title}</h2>
          <p>{featured.excerpt}</p>
          <div className="blog-meta"><time dateTime={featured.date}>{new Date(`${featured.date}T00:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}</time><span>{featured.readingTime}</span></div>
          <TransitionLink className="button hero-primary" href={`/blog/${featured.slug}`}>Read the guide →</TransitionLink>
        </div>
        <span className="crystal-edge" aria-hidden="true" />
      </section>

      <section className="blog-library section" aria-labelledby="all-guides-title">
        <div className="section-heading">
          <div><p className="eyebrow">Field notes</p><h2 id="all-guides-title">Useful ideas.<br />Clear application.</h2></div>
          <p>Written for creators and businesses who want better videos—and for editors building a more professional workflow.</p>
        </div>
        <div className="blog-grid">
          {blogPosts.slice(1).map((post, index) => (
            <article className="blog-card" key={post.slug}>
              <TransitionLink className="blog-card-image" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                <img src={post.featuredImage} width="800" height="450" alt={post.featuredAlt} loading="lazy" decoding="async" fetchPriority="low" />
                <span>0{index + 2}</span>
              </TransitionLink>
              <div className="blog-card-copy">
                <p>{post.category}</p>
                <h2><TransitionLink href={`/blog/${post.slug}`}>{post.title}</TransitionLink></h2>
                <p>{post.excerpt}</p>
                <div className="blog-meta"><time dateTime={post.date}>{post.date}</time><span>{post.readingTime}</span></div>
                <TransitionLink className="blog-read-link" href={`/blog/${post.slug}`}>Read article ↗</TransitionLink>
              </div>
              <span className="crystal-edge" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="blog-cta section">
        <p className="eyebrow">Need the work done?</p>
        <h2>Turn practical ideas<br />into polished video.</h2>
        <p>Explore the portfolio, compare editing options or start a project conversation with Thoughts.</p>
        <div className="actions"><TransitionLink className="button primary" href="/reels">Explore Reels ↗</TransitionLink><a className="button light" href={whatsapp} target="_blank" rel="noreferrer">Start on WhatsApp ↗</a></div>
        <span className="crystal-edge" aria-hidden="true" />
      </section>

      <BlogFooter />
      <MobileWhatsAppCTA href={whatsapp} />
    </main>
  );
}

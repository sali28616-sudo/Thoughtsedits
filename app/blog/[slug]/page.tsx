import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MobileWhatsAppCTA from "../../MobileWhatsAppCTA";
import TransitionLink from "../../TransitionLink";
import { BlogFooter, BlogHeader } from "../BlogHeader";
import { blogPosts, getBlogPost } from "../posts";

const domain = "https://thoughtsedits.com";
const whatsapp = "https://wa.me/923086969047";

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const canonical = `${domain}/blog/${post.slug}`;
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    authors: [{ name: post.author }],
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.seoTitle,
      description: post.seoDescription,
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      images: [{ url: post.featuredImage, width: 1200, height: 675, alt: post.featuredAlt }],
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const canonical = `${domain}/blog/${post.slug}`;
  const imageUrl = post.featuredImage.startsWith("http") ? post.featuredImage : `${domain}${post.featuredImage}`;
  const formattedDate = new Date(`${post.date}T00:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    image: [imageUrl],
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author, url: `${domain}/about` },
    publisher: { "@type": "Organization", name: "Thoughts", url: domain },
    mainEntityOfPage: canonical,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${domain}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical },
    ],
  };

  return (
    <main className="reels-page blog-page article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="ambient-3d" aria-hidden="true"><span className="ambient-orb ambient-orb-a" /><span className="ambient-ring ring-a" /></div>
      <BlogHeader />

      <article className="article-shell section">
        <nav className="article-breadcrumbs" aria-label="Breadcrumb"><TransitionLink href="/">Home</TransitionLink><span>/</span><TransitionLink href="/blog">Blog</TransitionLink><span>/</span><span>{post.category}</span></nav>
        <header className="article-header">
          <p className="hero-kicker"><span>●</span> {post.category}</p>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="article-byline"><span>By {post.author}</span><time dateTime={post.date}>{formattedDate}</time><span>{post.readingTime}</span></div>
        </header>
        <figure className="article-featured-image">
          <img src={post.featuredImage} width="1200" height="675" alt={post.featuredAlt} loading="eager" decoding="async" fetchPriority="high" />
        </figure>
        <div className="article-layout">
          <aside className="article-aside" aria-label="Article actions"><span>Thoughts field guide</span><p>Practical editing insight for creators, brands and editors.</p><TransitionLink href="/reels">View the portfolio ↗</TransitionLink></aside>
          <div className="article-content">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.subheading && <h3>{section.subheading}</h3>}
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            <section className="article-next-step">
              <h2>Put the workflow into practice</h2>
              <p>See the editing approach in the <TransitionLink href="/reels">Reels portfolio</TransitionLink>, compare the <TransitionLink href="/#pricing">monthly pricing options</TransitionLink>, or <a href={whatsapp} target="_blank" rel="noreferrer">start a project conversation</a>. Editors who want to build these skills can explore the <TransitionLink href="/learn-editing">Learn Video Editing program</TransitionLink>.</p>
            </section>
          </div>
        </div>
      </article>

      <section className="article-more section">
        <p className="eyebrow">Continue reading</p>
        <h2>More from the<br />editing desk.</h2>
        <div>
          {blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2).map((item) => (
            <TransitionLink href={`/blog/${item.slug}`} key={item.slug}><span>{item.category}</span><strong>{item.title}</strong><i>↗</i></TransitionLink>
          ))}
        </div>
      </section>
      <BlogFooter />
      <MobileWhatsAppCTA href={whatsapp} />
    </main>
  );
}

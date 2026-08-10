import type { Metadata } from "next";
import "./globals.css";
import MobileBottomNav from "./MobileBottomNav";
import MotionController from "./MotionController";
import PageTransitionProvider from "./PageTransitionProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://thoughtsedits.com"),
  title: {
    default: "Thoughts — Professional Video Editing Services",
    template: "%s",
  },
  description:
    "Professional video editing for creators and businesses, including Reels, YouTube videos, social media content, motion graphics and storytelling.",
  applicationName: "Thoughts",
  authors: [{ name: "Salman Ali", url: "https://thoughtsedits.com/about" }],
  creator: "Thoughts",
  publisher: "Thoughts",
  alternates: { canonical: "https://thoughtsedits.com/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thoughtsedits.com/",
    siteName: "Thoughts",
    title: "Thoughts — Professional Video Editing Services",
    description: "Professional editing for Reels, YouTube, social media and brand content—built for clear stories and attention.",
    images: [{ url: "/salman-portfolio-hero.png", width: 2048, height: 1152, alt: "Thoughts professional video editing studio portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thoughts — Professional Video Editing Services",
    description: "Professional editing for Reels, YouTube, social media and brand content.",
    images: ["/salman-portfolio-hero.png"],
  },
  robots: { index: true, follow: true },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://drive.google.com" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//drive.google.com" />
      </head>
      <body className="antialiased">
        <PageTransitionProvider>
          <MotionController />
          {children}
          <MobileBottomNav />
        </PageTransitionProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import MobileBottomNav from "./MobileBottomNav";
import MotionController from "./MotionController";
import PageTransitionProvider from "./PageTransitionProvider";

export const metadata: Metadata = {
  title: "Thoughts — Video Editing by Salman",
  description:
    "Professional video editing portfolio by Salman. Cinematic, social media, real estate and marketing edits backed by 3+ Years of Professional Experience.",
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

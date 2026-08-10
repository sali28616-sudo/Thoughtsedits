"use client";

import { useEffect, useId, useRef } from "react";

type VideoPreviewProps = {
  id: string;
  title: string;
  category: string;
  orientation?: "landscape" | "portrait";
};

type RegisteredVideo = {
  element: HTMLVideoElement;
  pauseAutomatically: () => void;
};

const registeredVideos = new Map<string, RegisteredVideo>();

function claimPlayback(id: string) {
  for (const [otherId, player] of registeredVideos) {
    if (otherId !== id && !player.element.paused) player.pauseAutomatically();
  }
}

export default function VideoPreview({ id, title, category, orientation = "landscape" }: VideoPreviewProps) {
  const instanceId = useId();
  const shellRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const manuallyPaused = useRef(false);
  const automaticPause = useRef(false);
  const autoplayAttempted = useRef(false);
  const thumbnailWidth = orientation === "portrait" ? 720 : 1200;
  const thumbnail = `https://drive.google.com/thumbnail?id=${id}&sz=w${thumbnailWidth}`;
  const mediaSource = `/media/${id}.mp4`;

  useEffect(() => {
    const shell = shellRef.current;
    const video = videoRef.current;
    if (!shell || !video) return;

    const ensureSource = () => {
      if (video.currentSrc || video.getAttribute("src")) return;
      video.preload = "metadata";
      video.src = mediaSource;
      video.load();
    };

    const pauseAutomatically = () => {
      if (video.paused) return;
      automaticPause.current = true;
      video.autoplay = false;
      video.pause();
    };

    registeredVideos.set(instanceId, { element: video, pauseAutomatically });

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ensureSource();
      },
      { rootMargin: "420px 0px", threshold: 0.01 },
    );

    const playbackObserver = new IntersectionObserver(
      ([entry]) => {
        const mobileViewport = window.matchMedia("(max-width: 1024px)").matches;

        if (mobileViewport && entry.isIntersecting && entry.intersectionRatio >= 0.68) {
          ensureSource();
          if (manuallyPaused.current || autoplayAttempted.current) return;

          autoplayAttempted.current = true;
          video.autoplay = true;
          video.defaultMuted = true;
          video.muted = true;
          claimPlayback(instanceId);
          void video.play().catch(() => {
            video.autoplay = false;
          });
          return;
        }

        if (entry.intersectionRatio < 0.25) {
          pauseAutomatically();
          manuallyPaused.current = false;
          autoplayAttempted.current = false;
        }
      },
      { rootMargin: "-5% 0px -5%", threshold: [0, 0.25, 0.68, 0.85] },
    );

    preloadObserver.observe(shell);
    playbackObserver.observe(shell);

    return () => {
      preloadObserver.disconnect();
      playbackObserver.disconnect();
      registeredVideos.delete(instanceId);
      pauseAutomatically();
      video.removeAttribute("src");
      video.load();
    };
  }, [instanceId, mediaSource]);

  return (
    <div ref={shellRef} className={`video-player-shell video-player-${orientation}`} data-video-category={category}>
      <video
        ref={videoRef}
        className="native-video"
        poster={thumbnail}
        preload="none"
        muted
        playsInline
        controls
        controlsList="nodownload noremoteplayback"
        aria-label={title}
        onPlay={(event) => {
          manuallyPaused.current = false;
          autoplayAttempted.current = true;
          claimPlayback(instanceId);
          event.currentTarget.autoplay = true;
        }}
        onPause={() => {
          if (automaticPause.current) {
            automaticPause.current = false;
            return;
          }
          manuallyPaused.current = true;
        }}
        onEnded={() => {
          manuallyPaused.current = true;
          autoplayAttempted.current = true;
        }}
      />
    </div>
  );
}

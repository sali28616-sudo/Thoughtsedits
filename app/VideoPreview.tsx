"use client";

import { useEffect, useRef, useState } from "react";

type VideoPreviewProps = {
  id: string;
  title: string;
  category: string;
  orientation?: "landscape" | "portrait";
};

type PlayerMode = "poster" | "drive" | "inline";

const CONTROL_HIDE_DELAY = 2400;
const playbackRates = [1, 1.25, 1.5, 2] as const;

function formatTime(value: number) {
  if (!Number.isFinite(value) || value < 0) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function VideoPreview({ id, title, category, orientation = "landscape" }: VideoPreviewProps) {
  const [mode, setMode] = useState<PlayerMode>("poster");
  const [isPlaying, setIsPlaying] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const playerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideTimer = useRef<number | null>(null);
  const keyboardFocusWithin = useRef(false);
  const lastPointerActivity = useRef(0);
  const thumbnailWidth = orientation === "portrait" ? 720 : 1200;
  const thumbnailHeight = orientation === "portrait" ? 1280 : 675;
  const thumbnail = `https://drive.google.com/thumbnail?id=${id}&sz=w${thumbnailWidth}`;
  const mediaSource = `/media/${id}.mp4`;

  function clearHideTimer() {
    if (hideTimer.current !== null) {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  }

  function revealControls(autoHide = true) {
    setControlsVisible(true);
    clearHideTimer();
    if (autoHide && videoRef.current && !videoRef.current.paused) {
      hideTimer.current = window.setTimeout(() => {
        if (!keyboardFocusWithin.current) setControlsVisible(false);
      }, CONTROL_HIDE_DELAY);
    }
  }

  useEffect(() => {
    const pauseWhenAnotherVideoStarts = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== id) videoRef.current?.pause();
    };
    window.addEventListener("thoughts:video-playing", pauseWhenAnotherVideoStarts);
    return () => {
      clearHideTimer();
      window.removeEventListener("thoughts:video-playing", pauseWhenAnotherVideoStarts);
    };
  }, [id]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause();
        }
      },
      { rootMargin: "80px 0px", threshold: 0.01 },
    );

    observer.observe(player);
    return () => observer.disconnect();
  }, []);

  function playVideo(video: HTMLVideoElement) {
    void video.play().catch(() => {
      setIsPlaying(false);
      setControlsVisible(true);
    });
  }

  function startPlayback() {
    if (!window.matchMedia("(max-width: 1024px)").matches) {
      setMode("drive");
      return;
    }

    setMode("inline");
    setControlsVisible(true);
    const video = videoRef.current;
    if (video) playVideo(video);
  }

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      playVideo(video);
    } else {
      video.pause();
    }
  }

  function seekBy(seconds: number) {
    const video = videoRef.current;
    if (!video) return;
    const nextTime = Math.min(Math.max(video.currentTime + seconds, 0), Number.isFinite(video.duration) ? video.duration : video.currentTime + seconds);
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
    revealControls(true);
  }

  function seekTo(value: string) {
    const video = videoRef.current;
    if (!video) return;
    const nextTime = Number(value);
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  }

  function cyclePlaybackRate() {
    const video = videoRef.current;
    if (!video) return;
    const currentIndex = playbackRates.findIndex((rate) => rate === playbackRate);
    const nextRate = playbackRates[(currentIndex + 1) % playbackRates.length];
    video.playbackRate = nextRate;
    setPlaybackRate(nextRate);
    revealControls(true);
  }

  function cycleVolume() {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted || video.volume === 0) {
      video.muted = false;
      try { video.volume = 1; } catch { /* Mobile Safari uses the device volume. */ }
    } else if (video.volume > 0.55) {
      try { video.volume = 0.5; } catch { video.muted = true; }
      if (video.volume > 0.55) video.muted = true;
    } else {
      video.muted = true;
    }

    setMuted(video.muted);
    setVolume(video.volume);
    revealControls(true);
  }

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (playerRef.current?.requestFullscreen) {
        await playerRef.current.requestFullscreen({ navigationUI: "hide" });
      }
    } catch {
      // Keep playback inline when fullscreen is not supported by the browser.
    }
    revealControls(true);
  }

  function handleVideoTap() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      playVideo(video);
    } else {
      revealControls(true);
    }
  }

  function handlePointerActivity() {
    if (mode !== "inline" || !isPlaying) return;
    const now = performance.now();
    if (now - lastPointerActivity.current < 240) return;
    lastPointerActivity.current = now;
    revealControls(true);
  }

  return (
    <div
      ref={playerRef}
      className={`video-player-shell video-player-${orientation} is-${mode}${controlsVisible || !isPlaying ? " controls-visible" : ""}`}
      onPointerMove={handlePointerActivity}
      onTouchStart={() => mode === "inline" && isPlaying && revealControls(true)}
    >
      <video
        ref={videoRef}
        className="inline-video"
        src={mediaSource}
        poster={thumbnail}
        preload="none"
        playsInline
        controls={false}
        controlsList="nodownload noplaybackrate noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        aria-label={title}
        onClick={handleVideoTap}
        onPlay={() => {
          window.dispatchEvent(new CustomEvent("thoughts:video-playing", { detail: id }));
          setIsPlaying(true);
          revealControls(true);
        }}
        onPause={() => {
          setIsPlaying(false);
          setControlsVisible(true);
          clearHideTimer();
        }}
        onEnded={() => {
          setIsPlaying(false);
          setControlsVisible(true);
          clearHideTimer();
        }}
        onLoadedMetadata={(event) => setDuration(Number.isFinite(event.currentTarget.duration) ? event.currentTarget.duration : 0)}
        onDurationChange={(event) => setDuration(Number.isFinite(event.currentTarget.duration) ? event.currentTarget.duration : 0)}
        onTimeUpdate={(event) => {
          if (controlsVisible) setCurrentTime(event.currentTarget.currentTime);
        }}
        onRateChange={(event) => setPlaybackRate(event.currentTarget.playbackRate)}
        onVolumeChange={(event) => {
          setMuted(event.currentTarget.muted);
          setVolume(event.currentTarget.volume);
        }}
      />

      {mode === "poster" && (
        <button className="video-poster" type="button" onClick={startPlayback} aria-label={`Play ${title}`}>
          <img
            src={thumbnail}
            alt={`${title} video thumbnail`}
            width={thumbnailWidth}
            height={thumbnailHeight}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
          <span className="video-poster-shade" aria-hidden="true" />
          <span className="video-poster-category">{category}</span>
          <span className="video-play"><i aria-hidden="true">▶</i><strong>Play project</strong></span>
        </button>
      )}

      {mode === "drive" && (
        <iframe
          src={`https://drive.google.com/file/d/${id}/preview?autoplay=1`}
          title={title}
          loading="eager"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      )}

      {mode === "inline" && (
        <div
          className="video-custom-controls"
          aria-label={`${title} video controls`}
          onClick={(event) => event.stopPropagation()}
          onPointerDown={clearHideTimer}
          onPointerUp={(event) => {
            (event.target as HTMLElement).blur?.();
            keyboardFocusWithin.current = false;
            revealControls(true);
          }}
          onFocusCapture={() => {
            keyboardFocusWithin.current = true;
            clearHideTimer();
            setControlsVisible(true);
          }}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              keyboardFocusWithin.current = false;
              revealControls(true);
            }
          }}
        >
          <div className="video-seek-row">
            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={Math.min(currentTime, duration || 0)}
              onChange={(event) => seekTo(event.currentTarget.value)}
              aria-label={`Seek through ${title}`}
            />
            <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
          </div>
          <div className="video-control-actions">
            <button type="button" onClick={togglePlayback} aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}>
              <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
            </button>
            <button type="button" onClick={() => seekBy(-10)} aria-label="Go back 10 seconds">
              <span aria-hidden="true">↶</span><small>10</small>
            </button>
            <button type="button" onClick={() => seekBy(10)} aria-label="Go forward 10 seconds">
              <span aria-hidden="true">↷</span><small>10</small>
            </button>
            <button type="button" onClick={cycleVolume} aria-label={muted ? "Unmute video" : `Change video volume, currently ${Math.round(volume * 100)} percent`}>
              <span aria-hidden="true">{muted ? "×" : "VOL"}</span><small>{muted ? "OFF" : Math.round(volume * 100)}</small>
            </button>
            <button type="button" onClick={cyclePlaybackRate} aria-label={`Change playback speed, currently ${playbackRate} times`}>
              <span aria-hidden="true">{playbackRate}×</span>
            </button>
            <button type="button" onClick={() => void toggleFullscreen()} aria-label="View video fullscreen when supported">
              <span aria-hidden="true">⛶</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

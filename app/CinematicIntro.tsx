"use client";

type CinematicIntroProps = {
  variant?: "initial" | "navigation";
  onSkip?: () => void;
};

export default function CinematicIntro({ variant = "initial", onSkip }: CinematicIntroProps) {
  const isNavigation = variant === "navigation";
  return (
    <div
      className={`cinematic-intro${isNavigation ? " page-transition" : ""}`}
      aria-label={isNavigation ? "Opening the selected Thoughts page" : "Thoughts creative studio introduction"}
      aria-live={isNavigation ? "polite" : undefined}
      role={isNavigation ? "status" : undefined}
    >
      {!isNavigation && onSkip && <button type="button" onClick={onSkip}>Skip intro</button>}
      <div className="intro-center">
        <p><span>●</span> Thoughts creative studio</p>
        <h2>Thoughts<span>.</span></h2>
        <div className="intro-process" aria-hidden="true"><i>Raw</i><b>→</b><i>Story</i><b>→</b><i>Motion</i><b>→</b><i>Final</i></div>
        <div className="intro-timeline" aria-hidden="true"><small>00:00:00</small><span /><span /><span /><em /></div>
      </div>
      <div className="intro-shutter" aria-hidden="true" />
    </div>
  );
}

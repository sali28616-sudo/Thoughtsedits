"use client";

import { useState } from "react";
import VideoPreview from "../VideoPreview";

const reels = [
  {
    title: "Top Premium Campaign",
    client: "Pardesi Vibe",
    category: "Promotional",
    views: "Part of 1M+ social views",
    id: "1rWQrPCYfH4nUAzBgqAJ7cX4bJTNM0Xgb",
  },
  {
    title: "Latest Premium Story",
    client: "Pardesi Vibe",
    category: "Storytelling",
    views: "High-retention edit",
    id: "1HtAUNnkHoUWmJmstpgmMPpl5PbhlvWYp",
  },
  {
    title: "Social Media Success Story",
    client: "PVG Germany",
    category: "Educational",
    views: "Part of 1M+ social views",
    id: "1xcX7hB16txJibAdVlu0hwT8foxisxgJJ",
  },
  {
    title: "Premium Motion Edit",
    client: "Sayed Yaman",
    category: "Motion Graphics",
    views: "Motion-led campaign",
    id: "16aluH0shttIm7gEvrqPZhECUOM6NRFd2",
  },
  {
    title: "Serbia Work Permit Update",
    client: "ICS Global",
    category: "Educational",
    views: "Social-first edit",
    id: "1HL0RERWvffPBGqw9dJlxgGHsEE2ztHmB",
  },
  {
    title: "Schengen Village — Luxembourg",
    client: "Pardesi Vibe",
    category: "Travel",
    views: "Travel storytelling",
    id: "15Ot1b5FDD9e326f-_MlTo10DdQgDf6fO",
  },
] as const;

const filters = ["All", "Educational", "Promotional", "Storytelling", "Motion Graphics", "Travel"] as const;

export default function ReelsExplorer() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const visibleReels = reels.filter((reel) => activeFilter === "All" || reel.category === activeFilter);

  return (
    <>
      <div className="reels-filters" role="group" aria-label="Filter reels by category">
        {filters.map((filter) => (
          <button
            type="button"
            className={filter === activeFilter ? "active" : ""}
            aria-pressed={filter === activeFilter}
            onClick={() => setActiveFilter(filter)}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className="reels-result-count" aria-live="polite">
        Showing {visibleReels.length} {visibleReels.length === 1 ? "video" : "videos"}
      </p>

      <div className="reels-grid">
        {visibleReels.map((reel, index) => (
          <article className="reel-card" key={reel.id}>
            <div className="reel-video">
              <VideoPreview id={reel.id} title={`${reel.title} — ${reel.client}`} category={reel.category} orientation="portrait" />
              <div className="reel-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
            </div>
            <div className="reel-details">
              <div className="reel-meta"><span>{reel.category}</span><span>{reel.views}</span></div>
              <h2>{reel.title}</h2>
              <p>Client — {reel.client}</p>
              <a href={`https://drive.google.com/file/d/${reel.id}/view`} target="_blank" rel="noreferrer">
                Open full video <span aria-hidden="true">↗</span>
              </a>
            </div>
            <span className="crystal-edge" aria-hidden="true" />
          </article>
        ))}
      </div>
    </>
  );
}

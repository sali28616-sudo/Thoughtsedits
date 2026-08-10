"use client";

import { useEffect, useState } from "react";

const team = [
  { name: "Salman", role: "Founder & Lead Video Editor", image: "https://drive.google.com/thumbnail?id=1Oz-z1VJZhbZxLiBOT2GEbNOUh2wYtSjL&sz=w900" },
  { name: "Anas Ali", role: "Video Editor", image: "https://drive.google.com/thumbnail?id=1OrpkC9Aedh_rvIXfTwlDybK5tpbY8ybM&sz=w900" },
  { name: "Shaher Yar Khan", role: "Video Editor", image: "https://drive.google.com/thumbnail?id=1iyKH4UthTuGisgd-sCEECSxtfx-jSMWH&sz=w900" },
  { name: "Ali Hasnain", role: "", image: "/team/ali-hasnain.png" },
];

export default function TeamSection() {
  const [activeMember, setActiveMember] = useState<(typeof team)[number] | null>(null);

  useEffect(() => {
    if (!activeMember) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveMember(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeMember]);

  return (
    <section className="team section" id="team">
      <div className="section-heading"><div><p className="eyebrow">Meet the team</p><h2>Four editors.<br />One creative standard.</h2></div><p>Thoughts brings together a focused editing team built for reliable delivery, consistent quality and content that earns attention.</p></div>
      <p className="mobile-swipe-hint"><span aria-hidden="true">↔</span> Swipe to meet the team</p>
      <div className="team-grid mobile-slider" role="region" aria-label="Swipe through team members" tabIndex={0}>
        {team.map((member, index) => (
          <article className="team-card" key={member.name}>
            <button className="team-photo" type="button" onClick={() => setActiveMember(member)} aria-label={`View full profile for ${member.name}`}>
              <img src={member.image} width="900" height="1125" loading="lazy" decoding="async" fetchPriority="low" alt={member.role ? `${member.name}, ${member.role} at Thoughts` : `${member.name} at Thoughts`} />
              <span className="team-photo-action">View profile <i aria-hidden="true">↗</i></span>
            </button>
            <div className="team-info"><div><span>0{index + 1}</span><h3>{member.name}</h3>{member.role && <p>{member.role}</p>}</div><i aria-hidden="true">↗</i></div>
            <span className="crystal-edge" aria-hidden="true" />
          </article>
        ))}
      </div>
      {activeMember && (
        <div className="team-profile-modal" role="dialog" aria-modal="true" aria-label={`${activeMember.name} profile`} onClick={() => setActiveMember(null)}>
          <div className="team-profile-panel" onClick={(event) => event.stopPropagation()}>
            <button className="team-profile-close" type="button" onClick={() => setActiveMember(null)} aria-label="Close profile" autoFocus>×</button>
            <div className="team-profile-image">
              <img src={activeMember.image.replace("&sz=w900", "&sz=w1600")} alt={`${activeMember.name} profile details`} width="1600" height="2000" decoding="async" />
            </div>
            <div className="team-profile-caption"><span>Team profile</span><h3>{activeMember.name}</h3>{activeMember.role && <p>{activeMember.role}</p>}</div>
          </div>
        </div>
      )}
    </section>
  );
}

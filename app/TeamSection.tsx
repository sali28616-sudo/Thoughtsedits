const team = [
  { name: "Salman", role: "Founder & Lead Video Editor", image: "1Oz-z1VJZhbZxLiBOT2GEbNOUh2wYtSjL" },
  { name: "Anas Ali", role: "Video Editor", image: "1OrpkC9Aedh_rvIXfTwlDybK5tpbY8ybM" },
  { name: "Shaher Yar Khan", role: "Video Editor", image: "1iyKH4UthTuGisgd-sCEECSxtfx-jSMWH" },
];

export default function TeamSection() {
  return (
    <section className="team section" id="team">
      <div className="section-heading"><div><p className="eyebrow">Meet the team</p><h2>Three editors.<br />One creative standard.</h2></div><p>Thoughts brings together a focused editing team built for reliable delivery, consistent quality and content that earns attention.</p></div>
      <p className="mobile-swipe-hint"><span aria-hidden="true">↔</span> Swipe to meet the team</p>
      <div className="team-grid mobile-slider" role="region" aria-label="Swipe through team members" tabIndex={0}>
        {team.map((member, index) => (
          <article className="team-card" key={member.name}>
            <div className="team-photo"><img src={`https://drive.google.com/thumbnail?id=${member.image}&sz=w900`} width="900" height="1125" loading="lazy" decoding="async" fetchPriority="low" alt={`${member.name}, ${member.role} at Thoughts`} /></div>
            <div className="team-info"><div><span>0{index + 1}</span><h3>{member.name}</h3><p>{member.role}</p></div><i aria-hidden="true">↗</i></div>
            <span className="crystal-edge" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}

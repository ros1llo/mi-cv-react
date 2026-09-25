function Experience({ items }) {
  return (
    <section id="experiencia" className="section">
      <p className="section-label">// 02 — experiencia</p>
      <h2 className="section-title">Experiencia <em>profesional.</em></h2>

      <div className="timeline">
        {items.map((job) => (
          <article key={job.id} className="timeline-item">
            <span className="timeline-date">{job.start} — {job.end}</span>
            <h3>{job.position}</h3>
            <p className="timeline-place">{job.company}</p>
            <p>{job.description}</p>
          </article>
        ))}
      </div>

      
    </section>
  );
}

export default Experience;
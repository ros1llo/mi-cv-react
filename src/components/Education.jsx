function Education({ items }) {
  return (
    <section id="formacion" className="section">
      <p className="section-label">// 03 — formación</p>
      <h2 className="section-title">Formación <em>académica.</em></h2>

      <div className="timeline">
        {items.map((study) => (
          <article key={study.id} className="timeline-item">
            <span className="timeline-date">{study.start} — {study.end}</span>
            <h3>{study.title}</h3>
            <p className="timeline-place">{study.center}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
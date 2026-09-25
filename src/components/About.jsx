function About({ text }) {
  return (
    <section id="sobre" className="section">
      <p className="section-label">// 01 — sobre mí</p>
      <h2 className="section-title">Sobre <em>mí.</em></h2>
      <p className="about-text">{text}</p>
    </section>
  );
}

export default About;
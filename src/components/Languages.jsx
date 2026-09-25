function Languages({ items }) {
  return (
    <section id="idiomas" className="section">
      <p className="section-label">// 05 — idiomas</p>
      <h2 className="section-title">Idiomas<em>.</em></h2>

      <ul className="languages">
        {items.map((lang) => (
          <li key={lang.language}>
            <span>{lang.language}</span>
            <span className="languages-level">{lang.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Languages;
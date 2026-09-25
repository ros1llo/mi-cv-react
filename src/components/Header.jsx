function Header({ personal }) {
  const phoneLink = `tel:+34${personal.phone.replaceAll(" ", "")}`;

  return (
    <header className="header">
      <img
        className="header-photo"
        src={personal.photo}
        alt={`Foto de ${personal.name}`}
      />
      <div className="header-info">
        <h1>{personal.name}</h1>
        <h2>{personal.role}</h2>
        <ul className="header-contact">
          <li>📍 {personal.city}</li>
          <li>✉ <a href={`mailto:${personal.email}`}>{personal.email}</a></li>
          <li>☎ <a href={phoneLink}>{personal.phone}</a></li>
        </ul>
        <div className="header-links">
          <a href={personal.github} target="_blank" rel="noreferrer">GitHub →</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn →</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
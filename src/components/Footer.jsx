function Footer({ name }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
  <div className="container footer-inner">
    <span>© {year} <span className="accent">{name}</span></span>
    <span>Hecho con React + Vite · Valencia</span>
  </div>
</footer>
  );
}

export default Footer;
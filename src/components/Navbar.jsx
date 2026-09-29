import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "sobre", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "formacion", label: "Formación" },
  { id: "skills", label: "Skills" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

function Navbar({ darkMode, onToggle }) {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-logo">AR.DEV</a>

        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>

        <ThemeToggle darkMode={darkMode} onToggle={onToggle} />
      </div>
    </nav>
  );
}

export default Navbar;
import { useState, useEffect } from "react";
import { flushSync } from "react-dom";

function Projects({ items }) {
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const showForPrint = () => {
      flushSync(() => setShowProjects(true));
    };

    window.addEventListener("beforeprint", showForPrint);
    return () => window.removeEventListener("beforeprint", showForPrint);
  }, []);

  return (
    <section id="proyectos" className="section">
      <p className="section-label">// 06 — proyectos</p>
      <h2 className="section-title">Proyectos <em>destacados.</em></h2>

      <button className="btn" onClick={() => setShowProjects(!showProjects)}>
        {showProjects ? "Ocultar proyectos" : "Mostrar proyectos"}
      </button>

      {showProjects && (
        <div className="projects">
          {items.map((project) => (
            <article key={project.id} className="project-card">
              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="project-footer">
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a href={project.url} target="_blank" rel="noreferrer">Ver →</a>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
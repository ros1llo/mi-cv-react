import Skill from "./Skill";

function Skills({ items }) {
  return (
    <section id="skills" className="section">
      <p className="section-label">// 04 — skills</p>
      <h2 className="section-title">Habilidades<em>.</em></h2>

      <div className="skills">
        {items.map((skill) => (
          <Skill
            key={skill.name}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
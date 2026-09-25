function Skill({ name, level }) {
  return (
    <div className="skill">
      <div className="skill-header">
        <span>{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Skill;
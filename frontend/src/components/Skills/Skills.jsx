import './Skills.css';

const skills = [
  { no: '01', title: 'Programming', items: 'Core JavaScript' },
  { no: '02', title: 'Frontend', items: 'HTML \u2022 CSS \u2022 React.js \u2022 Bootstrap' },
  { no: '03', title: 'Backend', items: 'Node.js \u2022 Express.js' },
  { no: '04', title: 'Database', items: 'MongoDB \u2022 MySQL' },
  { no: '05', title: 'Development Tools', items: 'Git \u2022 GitHub \u2022 VS Code \u2022 Figma' },
  { no: '06', title: 'Professional Skills', items: 'Adaptability \u2022 Teamwork \u2022 Time Management' },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-dark skills">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Technical Skills</p>
          <h2>Tools I use to build and solve.</h2>
        </div>
        <div className="skills__grid">
          {skills.map((s, i) => (
            <div
              key={s.title}
              className={`skills__card reveal reveal-delay-${i + 1}`}
            >
              <span className="skills__no">{s.no}</span>
              <h3 className="skills__title">{s.title}</h3>
              <p className="skills__items">{s.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

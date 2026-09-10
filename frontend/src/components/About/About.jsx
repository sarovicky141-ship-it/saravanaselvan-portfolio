import './About.css';

const stats = [
  { value: '2025', label: 'Bsc Cs Graduate' },
  { value: 'Familiar with ', label: 'AI Agents' },
  { value: 'React', label: 'Frontend Focus' },
  { value: 'MangoDb/SQL', label: 'Database Dountation' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about_tag">
        <p className="eyebrow">About Me</p>
      </div>
      <div className="about_headline">
        <h2>Technical curiosity with a problem-solving mindset.</h2>
      </div>
      <div className="container about__inner">

        <div className="about__text reveal">


          <p className="about__para">
            I am a MERN Stack Developer with a solid foundation in HTML, CSS, JavaScript,
            and React. I enjoy building responsive, accessible web interfaces and practical
            full-stack applications using Node.js, Express, and MongoDB.
          </p>
          <p className="about__para">
            My internship experience provided hands-on exposure to web development and UI/UX design,
            allowing me to work on real-world projects, build user-friendly interfaces, understand development
            workflows, and collaborate in a professional environment.

          </p>
          <p className="about__para">
            I enjoy learning new technologies, building useful applications, and turning
            problems into simple, maintainable solutions.
          </p>
        </div>

        <div className="about__stats">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`about__stat reveal reveal-delay-${i + 1}`}
            >
              <span className="about__stat-value">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import './Projects.css';

const projects = [
  {
    no: '01',
    category: 'WEB DEVELOPMENT',
    title: 'PROGOVA',
    desc: 'A student process tracking system that helps manage and monitor student progress, submissions, and status updates through a clean dashboard interface.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    dark: true,
  },
  {
    no: '02',
    category: 'FRONTEND',
    title: 'SUITLAB',
    desc: 'A suit designer frontend project that lets users browse, customize, and visualize suit options with an interactive, responsive interface.',
    tags: ['React.js', 'JavaScript', 'CSS'],
    dark: false,
  },
  {
    no: '03',
    category: 'WEB DEVELOPMENT',
    title: 'STARTUP HUB',
    desc: 'A responsive blog website for startup-related content, built with a mobile-first approach and a clean, readable layout.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    dark: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Selected Projects</p>
          <h2>Projects that show what I can build.</h2>
        </div>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`projects__card ${p.dark ? 'projects__card--dark' : ''} reveal reveal-delay-${i + 1}`}
            >
              <div className="projects__card-top">
                <span className="projects__no">{p.no}</span>
                <span className="projects__category">{p.category}</span>
              </div>
              <h3 className="projects__title">{p.title}</h3>
              <p className="projects__desc">{p.desc}</p>
              <div className="projects__tags">
                {p.tags.map((t) => (
                  <span key={t} className="projects__tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import './Experience.css';

const experiences = [
  {
    period: 'Jun 2026 - Jul 2026',
    title: 'Web Developer Intern',
    org: 'Cogent Innovation',
    location: 'Chennai',
    points: [
      'Contributed to the development of responsive and interactive web application interfaces.',
      'Implemented frontend components based on project requirements and design specifications.',
      'Worked closely with team members to enhance website functionality, usability, and visual consistency.',
      'Gained practical experience in web development workflows, debugging, testing, and design implementation.'
    ],
  },
  {
    period: 'Aug 2025 - Present',
    title: 'MERN Stack Developer Trainee',
    org: 'Softlogic Systems',
    location: 'Chennai',
    points: [
      'Completed practical training in MERN Stack Development with hands-on experience in MongoDB, Express.js, React.js, and Node.js.',
      'Developed full-stack web applications through practical projects and real-world development exercises.',
      'Built responsive and user-friendly web interfaces using HTML, CSS, JavaScript, Bootstrap, and React.js.',
      'Gained experience in frontend and backend development, REST APIs, database integration, and application workflows.'
    ],
  },
  {
    period: 'May 2024 - Jul 2024',
    title: 'Data Annotator Intern',
    org: 'MulticoreWare',
    location: 'On-site, Chennai',
    points: [
      'Worked on data annotation and labeling tasks involving images, videos, and text to prepare high-quality datasets for machine-learning applications.',
      'Reviewed and classified data according to predefined annotation guidelines, ensuring accurate and consistent labeling across different datasets.',
      'Performed data validation and quality checks to identify incorrect, incomplete, or inconsistent annotations and improve overall dataset reliability.',
      'Collaborated with the team to understand project requirements, resolve annotation-related issues, and maintain accuracy throughout the data-processing workflow.',
      'Gained practical experience in data processing, data validation, quality assurance, and machine-learning dataset preparation.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Experience</p>
          <h2>From internships to full-stack development.</h2>
        </div>
        <div className="experience__timeline">
          {experiences.map((e, i) => (
            <div
              key={e.org}
              className={`experience__item reveal reveal-delay-${i + 1}`}
            >
              <div className="experience__marker" />
              <div className="experience__content">
                <span className="experience__period">{e.period}</span>
                <h3 className="experience__title">{e.title}</h3>
                <p className="experience__org">
                  {e.org} <span className="experience__loc">&mdash; {e.location}</span>
                </p>
                <ul className="experience__points">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

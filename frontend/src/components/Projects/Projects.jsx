import './Projects.css';
import { useState } from 'react';

const projects = [
  {
    no: '01',
    category: 'WEB DEVELOPMENT',
    title: 'PROGOVA',
    url: 'https://progova-eight.vercel.app/',
    desc: 'A student process tracking system with separate student and admin dashboards for managing progress, submissions, and status updates. Integrates Gemini AI for AI-powered assistance, Firebase Authentication for secure login, and Cloud Firestore for data management.',
    tags: ['React.js', 'Node.js', 'Express.js', 'Firebase Authentication', 'Cloud Firestore', 'Gemini AI'],
  },
  {
    no: '02',
    category: 'WEB DEVELOPMENT',
    title: 'DP BATTERIES',
    url: 'https://dp-batteries.vercel.app/',
    desc: 'A modern, responsive business website showcasing products and services through dedicated service pages, interactive UI elements, and WhatsApp-based customer enquiries, with a seamless experience across devices.',
    tags: ['React.js', 'JavaScript', 'CSS', 'Vite', 'Supabase'],
  },
  {
    no: '03',
    category: 'WEB DEVELOPMENT',
    title: 'FOODCOOKER',
    url: 'https://foodcooker-761fb.web.app/',
    desc: 'A responsive startup blog website featuring a clean, readable interface, structured content layouts, and mobile-friendly design for a smooth browsing experience across devices.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MongoDB', 'Vercel'],
  },
  {
    no: '04',
    category: 'FRONTEND',
    title: 'SUITLAB',
    url: 'https://suitlab.vercel.app/',
    desc: 'An interactive suit designer frontend that lets users explore suit styles, customize design options, and visualize their preferred looks through a modern, responsive interface with smooth interactions.',
    tags: ['React.js', 'JavaScript', 'CSS', 'Vercel'],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section
      id="projects"
      className="section projects"
      onPointerLeave={() => setActiveProject(0)}
    >
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Selected Projects</p>
          <h2>Projects that show what I can build.</h2>
        </div>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${p.title} live website (opens in a new tab)`}
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse' || event.pointerType === 'pen') {
                  setActiveProject(i);
                }
              }}
              key={p.title}
              className={`projects__card projects__card-link ${activeProject === i ? 'projects__card--active' : ''} reveal reveal-delay-${i + 1}`}
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

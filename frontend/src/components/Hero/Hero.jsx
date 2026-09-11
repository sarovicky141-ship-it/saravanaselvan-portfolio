import profileImage from '../../assets/Portfolio profile.png';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content reveal">
          <p className="hero__eyebrow">MERN STACK DEVELOPER &bull; FULLSTACK DEVELOPER</p>
          <h1 className="hero__title">
            Hi, I&apos;m <span className="hero__accent">Saravana</span> <span className="hero__accent">Selvan</span>
          </h1>
          <h2 className="hero__subtitle">
            Building clean, practical software with the MERN stack.
          </h2>
          <p className="hero__desc">
            A Computer Science graduate with hands-on React, Node.js, and full-stack
            development experience, focused on building responsive, user-friendly web
            applications.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">View My Work</a>
            <a href="#contact" className="btn btn--ghost">Let&apos;s Connect</a>
          </div>
          <div className="hero__socials">
            <a href="mailto:saravanaselvan.java@gmail.com" className="hero__social">Email</a>
            <a
              href="https://www.linkedin.com/in/saravana-selvan-p/"
              target="_blank"
              rel="noreferrer"
              className="hero__social"
            >
              LinkedIn &#8599;
            </a>
          </div>
        </div>

        <div className="hero__media reveal reveal-delay-2">
          <div className="hero__photo-wrap">
            <img src={profileImage} alt="Portrait of Saravana Selvan" className="hero__photo" />
            <div className="hero__photo-ring"></div>

            <div className="hero__badge">
              <span className="hero__badge-dot" />
              <div>
                <strong>Open to Opportunities</strong>
                <span>Entry-Level IT/ Developer Roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

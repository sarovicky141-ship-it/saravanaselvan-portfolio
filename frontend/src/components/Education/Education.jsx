import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section section-dark education">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Education</p>
          <h2>Academic foundation.</h2>
        </div>
        <div className="education__card reveal">
          <div className="education__years">
            <span className="education__year">2022</span>
            <span className="education__dash">&mdash;</span>
            <span className="education__year">2025</span>
          </div>
          <div className="education__body">
            <h3 className="education__degree">Bachelor of Computer Science</h3>
            <p className="education__field">Computer Sciences </p>
            <p className="education__school">
              Kalasalingam Academy of Research and Education, Krishnankovil.
            </p>
            <span className="education__cgpa">CGPA: 8.04</span>
          </div>
        </div>
      </div>
    </section>
  );
}

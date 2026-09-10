import './Certifications.css';

const certs = [
  { no: '01', title: 'Full Stack MERN', issuer: 'Softlogic System' },
  { no: '02', title: 'UI/UX Design', issuer: 'Kalasalingam University' },
  { no: '03', title: 'PHP & MySQL', issuer: 'Spoken Tutorial' },
  { no: '04', title: 'Artificial Intelligence for Real-World Application', issuer: 'TCSION' },
  { no: '05', title: 'Machine Learning for Real World Applications', issuer: 'TCSION' },

];

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Certifications</p>
          <h2>Continuous learning.</h2>
        </div>
        <div className="certs__grid">
          {certs.map((c, i) => (
            <div
              key={c.title}
              className={`certs__card reveal reveal-delay-${i + 1}`}
            >
              <span className="certs__no">{c.no}</span>
              <h3 className="certs__title">{c.title}</h3>
              <p className="certs__issuer">{c.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

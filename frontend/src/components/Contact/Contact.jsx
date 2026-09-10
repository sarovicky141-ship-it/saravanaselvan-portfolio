import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__panel reveal">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="contact__title">Let&apos;s build something useful.</h2>
          <p className="contact__desc">
            I&apos;m looking for an entry-level developer opportunity where I can apply my
            technical foundation, learn from experienced teams, and grow as a developer.
          </p>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className="contact__input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
                className="contact__input"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="contact__input contact__textarea"
            />
            <button
              type="submit"
              className="contact__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="contact__status contact__status--ok">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === 'error' && (
              <p className="contact__status contact__status--err">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>

          <div className="contact__info">
            <span>Chennai, Tamil Nadu</span>
            <span>+91 6385500984</span>
            <a href="mailto:saravana.selvan@example.com">Saravanaselvan.java@gmail.com</a>
            <a
              href="https://www.linkedin.com/in/saravana-selvan-p/"
              target="_blank"
              rel="noreferrer"
              className="hero__social"
            >Linkedin</a>
          </div>
        </div>
      </div>
    </section>
  );
}

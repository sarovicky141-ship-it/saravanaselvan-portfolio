import { useEffect, useState } from 'react';
import './Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={close}>
          SARAVANA SELVAN.<span className="navbar__logo-accent"> P</span>
        </a>

        <nav className="navbar__links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navbar__link">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="navbar__cta">Contact</a>
        </nav>



        <button
          type="button"
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile ${open ? 'is-open' : ''}`}>
        <nav className="navbar__mobile-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navbar__mobile-link" onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="navbar__mobile-cta" onClick={close}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

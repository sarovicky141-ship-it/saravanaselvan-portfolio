import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__copy">
          &copy; {new Date().getFullYear()} Saravana Selvan. Built with the MERN Stack.
        </span>
        <a href="#home" className="footer__top">Back to top &uarr;</a>
      </div>
    </footer>
  );
}

import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Experience from './components/Experience/Experience.jsx';
import Education from './components/Education/Education.jsx';
import Certifications from './components/Certifications/Certifications.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import useReveal from './hooks/useReveal.js';
import './App.css';

function App() {
  useReveal();

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

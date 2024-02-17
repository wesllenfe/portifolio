import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='menu'>
          <h1>Wesllen.</h1>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/projects">Projetos</NavLink></li>
              <li><NavLink to="/education">Formação</NavLink></li>
              <li><NavLink to="/technologies">Tecnologias</NavLink></li>
              <li><NavLink to="/contact">Contato</NavLink></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <div className="footer-container">
            <ul className="social-links">
              <li><a href="https://github.com/wesllenfe" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a href="https://www.linkedin.com/in/wesllen-felipe-langaro-raiser-da-cruz-31b9ab210/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="https://api.whatsapp.com/send?phone=5549992014663" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

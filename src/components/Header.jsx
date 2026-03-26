// Header.jsx
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-bracket">&lt;</span>
          Mike<span className="logo-dot">.</span>dev
          <span className="logo-bracket">/&gt;</span>
        </div>

        <nav className={`menu ${open ? 'open' : ''}`}>
          {links.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="nav-number">0{index + 1}.</span>
              {link}
            </a>
          ))}
          <button className="theme-toggle-mobile" onClick={toggleTheme}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="hamburger" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
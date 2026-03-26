// components/Hero.jsx
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for work
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Mike Sukwala</span>
            </h1>
            <div className="hero-typed">
              <span className="typed-text">Full Stack Developer</span>
            </div>
            <p className="hero-description">
              I craft beautiful, responsive, and high-performance web applications 
              that solve real-world problems. Let's bring your ideas to life!
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                Hire Me
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="/resume.pdf" className="btn-secondary" download>
                <FaDownload />
                Resume
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/mike" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com/in/mike" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://twitter.com/mike" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="mailto:mike@gmail.com"><FaEnvelope /></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-window">
              <div className="code-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
                <span className="code-title">developer.js</span>
              </div>
              <div className="code-body">
                <pre>
                  <code>
{`const mike = {
  name: "Mike Sukwala",
  title: "Full Stack Developer",
  location: "Malawi 🇲🇼",
  skills: ["React", "Node.js", "Laravel"],
  passion: "Building amazing things",
  status: "Available for work 🚀"
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
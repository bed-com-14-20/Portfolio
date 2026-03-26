import { FaCode, FaPalette, FaRocket, FaHeart } from 'react-icons/fa';

export default function About() {
  const highlights = [
    { icon: <FaCode />, title: "Clean Code", description: "Writing maintainable and scalable solutions" },
    { icon: <FaPalette />, title: "Creative Design", description: "Crafting beautiful user experiences" },
    { icon: <FaRocket />, title: "Fast Performance", description: "Optimizing for speed and efficiency" },
    { icon: <FaHeart />, title: "Passionate", description: "Loving every line of code I write" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-badge">Who am I?</div>
            <h2 className="about-title">
              Crafting Digital <span className="gradient-text">Experiences</span><br />That Matter
            </h2>
            <p className="about-text">
              I'm a passionate web developer from Malawi with a keen eye for design and a love for building 
              beautiful, functional web applications. I believe in writing clean, maintainable code and 
              creating experiences that solve real problems.
            </p>
            <p className="about-text">
              With modern technologies like React, NestJS, and Laravel, I transform ideas into interactive 
              digital solutions that users love.
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>

            <div className="about-buttons">
              <a href="#contact" className="btn-primary">Let's Connect</a>
              <a href="#projects" className="btn-secondary">View My Work</a>
            </div>
          </div>

          <div className="about-visual">
            <div className="code-preview">
              <div className="code-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
                <span className="code-title">developer.js</span>
              </div>
              <div className="code-content">
                <pre><code>{`const mike = {
  name: "Mike Sukwala",
  location: "Mulanje, Malawi",
  passion: "Building amazing web apps",
  skills: ["Website Development", "Mobile App Development", "ICT Teacher", "Data Entry" "Network Admnistrator", "Database Admnistrator",]
};`}</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
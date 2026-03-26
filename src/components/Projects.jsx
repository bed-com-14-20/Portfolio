// Projects.jsx
import { useState } from 'react';
import { 
  FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, 
  FaDatabase, FaMobile, FaChartLine, FaCode 
} from 'react-icons/fa';
import { SiTailwindcss, SiNestjs, SiLaravel } from 'react-icons/si';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Portfolio ",
      description: "A modern, responsive portfolio website showcasing my work and skills. Features smooth animations, dark mode, and interactive components.",
      technologies: ["React", "TailwindCSS", "Framer Motion"],
      icons: [<FaReact />, <SiTailwindcss />, <FaCode />],
      github: "https://github.com/mike/portfolio",
      demo: "https://mike.dev",
      category: "web",
      image: "🎨",
      featured: true
    },
    {
      id: 2,
      title: "TaskFlow - Todo App",
      description: "A full-featured task management application with drag-and-drop functionality, due dates, categories, and real-time updates.",
      technologies: ["React", "NestJS", "PostgreSQL"],
      icons: [<FaReact />, <SiNestjs />, <FaDatabase />],
      github: "https://github.com/mike/taskflow",
      demo: "https://taskflow.dev",
      category: "web",
      image: "✅",
      featured: true
    },
    {
      id: 3,
      title: "Essay Grade Mobile app",
      description: "AN AI powered Mobile application for grading Essays.",
      technologies: ["React", "Node.js", "Chart.js"],
      icons: [<FaReact />, <FaNodeJs />, <FaChartLine />],
      github: "https://github.com/mike/weatherwise",
      demo: "https://weatherwise.dev",
      category: "web",
      image: "🌤️",
      featured: false
    },
    {
      id: 4,
      title: "Chikanda Accomodation finder",
      description: " its a group project for finding accomodation mainly for university of malawi students",
      technologies: ["Laravel", "MySQL", "React js"],
      icons: [<SiLaravel />, <FaDatabase />, <SiTailwindcss />],
      github: "https://github.com/mike/ecommerce",
      demo: "https://shop.dev",
      category: "fullstack",
      image: "🛒",
      featured: true
    },
    {
      id: 5,
      title: "HealthTrack System",
      description: "DHIS2-based health information management system for tracking patient data and generating analytics reports.",
      technologies: ["DHIS2", "JavaScript", "PostgreSQL"],
      icons: [<FaCode />, <FaDatabase />, <FaChartLine />],
      github: "https://github.com/mike/healthtrack",
      demo: "https://healthtrack.dev",
      category: "enterprise",
      image: "🏥",
      featured: false
    },
    {
      id: 6,
      title: "TestMate Mobile App",
      description: "Cross-platform mobile app for tracking expenses, setting budgets, and visualizing spending habits with charts.",
      technologies: ["Flutter", "Firebase"],
      icons: [<FaMobile />, <FaNodeJs />, <FaDatabase />],
      github: "https://github.com/mike/expense-tracker",
      demo: "https://expense-tracker.dev",
      category: "mobile",
      image: "💰",
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'enterprise', name: 'Enterprise', count: projects.filter(p => p.category === 'enterprise').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">
            A collection of my best work, showcasing my skills and passion for development
          </p>
        </div>

        <div className="project-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              <span>{cat.name}</span>
              <span className="category-count">{cat.count}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
                {project.featured && (
                  <div className="featured-badge">
                    <span className="featured-star">⭐</span>
                    Featured
                  </div>
                )}
              </div>
              <div className="project-content">
                <div className="project-tech-icons">
                  {project.icons.map((icon, i) => (
                    <span key={i} className="tech-icon">
                      {icon}
                    </span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    Code
                  </a>
                  <a href={project.demo} className="project-link primary" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a href="https://github.com/mike" className="btn-primary" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;




import { FaReact, FaNodeJs, FaDatabase, FaMobile } from 'react-icons/fa';
import { SiNestjs, SiLaravel, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact />,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 88 },
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      skills: [
        { name: "NestJS", level: 80 },
        { name: "Laravel", level: 75 },
        { name: "Node.js", level: 82 },
        { name: "Spring Boot", level: 82 },
        
      ]
    },
    {
      title: "Database & Tools",
      icon: <FaDatabase />,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 70 },
        { name: "Oracle", level: 70 },
        { name: "Firebase", level: 100},
        { name: "Supabase", level: 50 }
      ]
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">My Skills</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
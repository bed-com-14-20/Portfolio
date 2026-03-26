// Education.jsx
import { FaGraduationCap, FaCertificate, FaSchool } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "Computer Science Education Degree",
      institution: "University of Malawi",
      year: "2021 - Present",
      icon: <FaGraduationCap />,
      description: "Focusing on software development, algorithms, and educational technology"
    },
    {
      id: 2,
      title: "Information Communication Technology Certificate",
      institution: "Aida Chilembwe Technical College",
      year: "2019 - 2020",
      icon: <FaCertificate />,
      description: "Comprehensive training in networking, hardware, and software applications"
    },
    {
      id: 3,
      title: "MSCE - Malawi School Certificate of Education",
      institution: "Malawi School Certificate",
      year: "2018",
      icon: <FaSchool />,
      description: "Distinction in Mathematics, Physics, and Computer Studies"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="section-header">
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">The foundation that built my skills and passion for technology</p>
        </div>

        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-icon">
                {item.icon}
              </div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-institution">{item.institution}</div>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
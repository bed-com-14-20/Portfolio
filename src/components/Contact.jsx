// Contact.jsx
import { useState } from 'react';
import { 
  FaEnvelope, FaPhone, FaMapMarker, FaGithub, 
  FaLinkedin, FaTwitter, FaPaperPlane, FaCheckCircle,
  FaSpinner,
  FaFacebook
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "squamike@gmail.com",
      link: "squamike@gmail.com",
      color: "#6366f1"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      info: "+265 6383294",
      link: "tel:+265 990185236",
      color: "#f97316"
    },
    {
      icon: <FaMapMarker />,
      title: "Location",
      info: "Mulanje, Malawi",
      link: null,
      color: "#10b981"
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, name: "GitHub", url: "https://github.com/mike", color: "#333" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "https://linkedin.com/in/mike", color: "#0077b5" },
    { icon: <FaTwitter />, name: "Twitter", url: "https://twitter.com/mike", color: "#1da1f2" },
    { icon: <FaFacebook />, name: "Twitter", url: "https://twitter.com/mike", color: "#1da1f2" }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Let's Work <span className="gradient-text">Together</span></h2>
          <p className="section-subtitle">
            Have a project in mind? I'd love to hear about it. Let's create something amazing!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-text">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Whether you have a question or just want to say hi, I'll get back to you as soon as possible.
            </p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-detail-item">
                  <div className="detail-icon" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="detail-content">
                    <h4>{item.title}</h4>
                    {item.link ? (
                      <a href={item.link}>{item.info}</a>
                    ) : (
                      <p>{item.info}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Connect with me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{ backgroundColor: `${social.color}15`, color: social.color }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              {isSubmitted && (
                <div className="form-success">
                  <FaCheckCircle />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Richard well"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                  <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="availability-badge">
          <span className="status-dot"></span>
          Currently available for freelance work
        </div>
      </div>
    </section>
  );
}
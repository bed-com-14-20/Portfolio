const Projects = () => (
  <section className="projects p-8 rounded-lg shadow-xl">
    <h2 className="text-3xl font-semibold mb-6">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="card">
        <h3 className="font-semibold text-xl mb-2">Essay Grader</h3>
        <video className="project-media" autoPlay loop muted playsInline>
          <source src="https://cdn.pixabay.com/video/2023/06/16/167671-833210047_tiny.mp4" type="video/mp4" />
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" alt="Essay Grader Fallback" />
        </video>
        <p className="text-gray-300 mt-3">AI-powered grading app for essays.</p>
      </div>
      <div className="card">
        <h3 className="font-semibold text-xl mb-2">Testmate Mobile App</h3>
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
          alt="Testmate App"
          className="project-media w-full h-48 object-cover"
        />
        <p className="text-gray-300 mt-3">Tool for student assessments.</p>
      </div>
      <div className="card">
        <h3 className="font-semibold text-xl mb-2">Malawi Scholarship Spot</h3>
        <img
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
          alt="Malawi Scholarship Spot"
          className="project-media w-full h-48 object-cover"
        />
        <p className="text-gray-300 mt-3">Backend for scholarship platform.</p>
      </div>
      <div className="card">
        <h3 className="font-semibold text-xl mb-2">Accommodation Finder Website</h3>
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80"
          alt="Accommodation Finder"
          className="project-media w-full h-48 object-cover"
        />
        <p className="text-gray-300 mt-3">Website for finding accommodations.</p>
      </div>
      <div className="card">
        <h3 className="font-semibold text-xl mb-2">CMS Mentorship Backend</h3>
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          alt="CMS Mentorship"
          className="project-media w-full h-48 object-cover"
        />
        <p className="text-gray-300 mt-3">Backend for mentorship platform.</p>
      </div>
    </div>
  </section>
);

export default Projects;
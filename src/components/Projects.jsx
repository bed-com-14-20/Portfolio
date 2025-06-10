 const Projects = () => (
  <section className="projects p-8 rounded-lg shadow-xl">
    <h2 className="text-3xl font-semibold mb-6">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="card">
        <h3 className="font-semibold text-xl mb-2">1. Essay Grader</h3>

        <p className="text-gray-300 mt-3">AI-powered grading app for essays.</p>

        <img
          src="essay grader.jpg"
          alt="Essay Grader Login"
          className="project-media w-full h-48 object-cover mb-2"
        />
        <img
          src="essay grader 2.jpg"
          alt="Essay Grader Dashboard"
          className="project-media w-full h-48 object-cover"
        />
        
      </div>
      <div className="card">
        <h3 className="font-semibold text-xl mb-2">2. Testmate Mobile App</h3>

        <p className="text-gray-300 mt-3">Tool for student assessments.</p>

        <img
          src="testmate.png"
          alt="Testmate Login"
          className="project-media w-full h-48 object-cover mb-2"
        />
        
        <img
          src="testmate 2.png"
          alt="Testmate Exams"
          className="project-media w-full h-48 object-cover"
        />
        
      </div>
      <div className="card">
        <h3 className="font-semibold text-xl mb-2">3. Malawi Scholarship Spot</h3>
        <img
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
          alt="Malawi Scholarship Spot"
          className="project-media w-full h-48 object-cover"
        />
        <p className="text-gray-300 mt-3">Backend for scholarship platform.</p>
      </div>
      <div className="card">
        <h3 className="font-semibold text-xl mb-2">4. Accommodation Finder Website</h3>
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80"
          alt="Accommodation Finder"
          className="project-media w-full h-48 object-cover"
        />
        <p className="text-gray-300 mt-3">Website for finding accommodations.</p>
      </div>
      <div className="card">
        <h3 className="font-semibold text-xl mb-2">5. CMS Mentorship Backend</h3>
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
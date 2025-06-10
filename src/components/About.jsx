 const About = () => (
  <section className="about p-8 rounded-lg shadow-xl">
    <h2 className="text-3xl font-semibold mb-6">About Me</h2>
    <div className="flex flex-col md:flex-row items-center gap-8">
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"
        alt="Tech Setup"
        className="project-media w-full md:w-1/3 h-64 object-cover"
      />
      <p className="text-lg text-gray-300 leading-relaxed">
        I'm a Computer Science graduate with expertise in full-stack development, system administration, mobile development, and data management. Passionate about building innovative solutions, I thrive on tackling complex challenges and delivering user-focused applications.
      </p>
    </div>
  </section>
);

export default About;
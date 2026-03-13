const projects = [
  {
    title: "Full-Stack Web Application",
    description:
      "Built a full-stack web app with Node.js, Express, MongoDB, authentication, session management, and RESTful APIs.",
    link: "https://github.com/nickkogut/CS546-Group24-Project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="rounded-2xl border border-neutral-200 p-6">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-neutral-600">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="mt-4 inline-block text-sm font-medium underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
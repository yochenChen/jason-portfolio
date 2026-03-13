export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 text-sm font-medium text-neutral-500">
        Software Engineer | Full-Stack | Cloud
      </p>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
        Yu-Chien (Jason) Chen
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-neutral-600">
        I build scalable enterprise systems with ASP.NET Core, Angular, SQL Server, and Azure DevOps.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-xl bg-black px-5 py-3 text-white"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="rounded-xl border border-neutral-300 px-5 py-3"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[88vh] max-w-6xl items-center px-6 py-20">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Software Engineer · Full-Stack · Cloud
        </p>

        <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
          Yu-Chien (Jason) Chen
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-300 sm:text-xl">
          I build scalable enterprise systems with ASP.NET Core, Angular, SQL Server,
          and Azure DevOps. My focus is backend engineering, cloud delivery, and
          practical software solutions that improve business operations.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:bg-neutral-200"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-neutral-700 px-6 py-3 font-medium text-white transition hover:border-neutral-400"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 text-sm text-neutral-400">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            ASP.NET Core
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            Angular
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            Azure DevOps
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            SQL Server
          </span>
        </div>
      </div>
    </section>
  );
}
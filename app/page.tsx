import { officialProjects, labProjects, certifications, skills, publications, profile } from "@/lib/data";

function Tag({ label }: { label: string }) {
  return (
    <span className="px-2 py-0.5 rounded text-xs font-medium bg-cyan-950 text-cyan-300 border border-cyan-900">
      {label}
    </span>
  );
}

function Stat({ label }: { label: string }) {
  return (
    <span className="px-2 py-0.5 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
      {label}
    </span>
  );
}

function OfficialCard({ project }: { project: (typeof officialProjects)[0] }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 flex flex-col gap-4 hover:border-cyan-700 transition-colors">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="text-xs font-mono text-cyan-400 mb-1">{project.org}</div>
          <h3 className="text-xl font-bold text-white">{project.name}</h3>
          <div className="text-sm text-slate-400 mt-0.5">{project.role}</div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          {"live" in project && project.live && (
            <a
              href={(project as { live: string }).live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
            >
              Live Demo
            </a>
          )}
          {"doi" in project && project.doi && (
            <a
              href={(project as { doi: string }).doi}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-700 text-white hover:bg-indigo-600 transition-colors"
            >
              DOI
            </a>
          )}
        </div>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
      {"stats" in project && project.stats && (
        <div className="flex flex-wrap gap-2">
          {project.stats.map((s) => (
            <Stat key={s} label={s} />
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {project.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </div>
  );
}

function LabCard({ project }: { project: (typeof labProjects)[0] }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-5 flex flex-col gap-3 hover:border-slate-600 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-slate-100 leading-snug">{project.name}</h3>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-2.5 py-1 rounded text-xs font-medium border border-slate-700 text-slate-400 hover:border-cyan-600 hover:text-cyan-400 transition-colors"
        >
          GitHub
        </a>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
      {"stats" in project && project.stats && (
        <div className="flex flex-wrap gap-1.5">
          {(project.stats as string[]).map((s) => (
            <Stat key={s} label={s} />
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ background: "#0a0e1a", minHeight: "100vh", color: "#f1f5f9" }}>
      {/* Nav */}
      <nav
        style={{ background: "rgba(10,14,26,0.92)", borderBottom: "1px solid #1e293b" }}
        className="sticky top-0 z-50 backdrop-blur-md"
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-white tracking-tight text-lg">TF</span>
          <div className="flex gap-6 text-sm text-slate-400">
            {["Projects", "Labs", "Skills", "Certifications"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-24 pb-20">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-8"
            style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.3)", color: "#22d3ee" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#22d3ee" }}
            />
            Available for security engineering roles · London, UK
          </div>
          <h1 className="text-5xl font-bold text-white mb-3 leading-tight">{profile.name}</h1>
          <p className="text-xl font-medium mb-5" style={{ color: "#22d3ee" }}>
            {profile.title}
          </p>
          <p className="text-slate-400 text-lg max-w-2xl mb-10 leading-relaxed">{profile.bio}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
              style={{ background: "#fff", color: "#000" }}
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg font-medium text-sm border border-slate-600 text-slate-300 hover:text-cyan-400 transition-colors"
              style={{ borderColor: "#334155" }}
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="px-5 py-2.5 rounded-lg font-medium text-sm border text-slate-300 hover:text-cyan-400 transition-colors"
              style={{ borderColor: "#334155" }}
            >
              Contact
            </a>
          </div>
        </section>

        {/* Official Projects */}
        <section id="projects" className="pb-20">
          <div className="mb-10">
            <div className="text-xs font-mono mb-1" style={{ color: "#22d3ee" }}>01</div>
            <h2 className="text-3xl font-bold text-white">Official Projects</h2>
            <p className="text-slate-400 mt-2">
              Production systems, open-source organisations, and published work.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {officialProjects.map((p) => (
              <OfficialCard key={p.name} project={p} />
            ))}
          </div>
        </section>

        {/* Lab Projects */}
        <section id="labs" className="pb-20">
          <div className="mb-10">
            <div className="text-xs font-mono mb-1" style={{ color: "#22d3ee" }}>02</div>
            <h2 className="text-3xl font-bold text-white">Cybersecurity &amp; Networking Labs</h2>
            <p className="text-slate-400 mt-2">
              Hands-on detection, forensics, SIEM, and network security research.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {labProjects.map((p) => (
              <LabCard key={p.name} project={p} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="pb-20">
          <div className="mb-10">
            <div className="text-xs font-mono mb-1" style={{ color: "#22d3ee" }}>03</div>
            <h2 className="text-3xl font-bold text-white">Skills</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-lg p-5"
                style={{ background: "rgba(15,23,42,0.8)", border: "1px solid #1e293b" }}
              >
                <h3 className="text-sm font-semibold text-slate-200 mb-3">{category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <Tag key={item} label={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="pb-20">
          <div className="mb-10">
            <div className="text-xs font-mono mb-1" style={{ color: "#22d3ee" }}>04</div>
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center justify-between rounded-lg px-5 py-4 transition-colors"
                style={{ background: "rgba(15,23,42,0.8)", border: "1px solid #1e293b" }}
              >
                <div>
                  <div className="text-sm font-medium text-slate-100">{cert.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {cert.issuer} · {cert.year}
                  </div>
                </div>
                {"file" in cert && cert.file && (
                  <a
                    href={(cert as { file: string }).file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded text-xs font-medium ml-4 transition-colors"
                    style={{ border: "1px solid rgba(6,182,212,0.4)", color: "#22d3ee" }}
                  >
                    View
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="pb-20">
          <div className="mb-8">
            <div className="text-xs font-mono mb-1" style={{ color: "#22d3ee" }}>05</div>
            <h2 className="text-3xl font-bold text-white">Publications</h2>
          </div>
          {publications.map((pub) => (
            <div
              key={pub.doi}
              className="rounded-lg p-5"
              style={{ background: "rgba(15,23,42,0.8)", border: "1px solid #1e293b" }}
            >
              <div className="text-sm font-medium text-slate-100 mb-1">{pub.title}</div>
              <div className="text-xs text-slate-500 mb-3">
                {pub.author} · {pub.publisher} · {pub.year}
              </div>
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono hover:underline"
                style={{ color: "#22d3ee" }}
              >
                {pub.doi}
              </a>
            </div>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1e293b" }} className="py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <span>Tanvir Farhad · London, UK</span>
          <div className="flex gap-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href={`mailto:${profile.email}`} className="hover:text-cyan-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

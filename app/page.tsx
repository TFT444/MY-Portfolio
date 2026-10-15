"use client";
import { useState, useEffect } from "react";
import { officialProjects, labProjects, certifications, skills, publications, profile } from "@/lib/data";

/* ── helpers ── */
function Tag({ label }: { label: string }) {
  return (
    <span className="px-2 py-0.5 rounded text-xs font-mono border"
      style={{ background: "rgba(34,197,94,0.08)", color: "#86efac", borderColor: "rgba(34,197,94,0.2)" }}>
      {label}
    </span>
  );
}
function Stat({ label }: { label: string }) {
  return (
    <span className="px-2 py-0.5 rounded text-xs font-mono"
      style={{ background: "#111", color: "#9ca3af", border: "1px solid #222" }}>
      {label}
    </span>
  );
}

/* ── flip card ── */
function FlipCard({ project }: { project: (typeof officialProjects)[0] }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(f => !f);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flip-card glow-card cursor-pointer`}
      style={{ height: "340px", border: "1px solid #1a1a1a", borderRadius: "16px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`} style={{ height: "100%" }}>
        {/* FRONT */}
        <div className="flip-card-front p-7 flex flex-col justify-between"
          style={{ background: "#0a0a0a", border: "1px solid #1a1a1a" }}>
          <div>
            <div className="text-xs font-mono mb-2" style={{ color: "#22c55e" }}>{project.org}</div>
            <h3 className="text-3xl font-bold text-white mb-1">{project.name}</h3>
            <div className="text-sm mb-4" style={{ color: "#6b7280" }}>{project.role}</div>
          </div>
          <div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.slice(0, 4).map(t => <Tag key={t} label={t} />)}
            </div>
            <div className="text-xs font-mono" style={{ color: "#374151" }}>hover to explore →</div>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-5"
            style={{ background: "radial-gradient(circle, #22c55e, transparent)" }} />
        </div>

        {/* BACK */}
        <div className="flip-card-back p-7 flex flex-col justify-between"
          style={{ background: "#050505", border: "1px solid rgba(34,197,94,0.2)" }}>
          <div>
            <div className="text-xs font-mono mb-2" style={{ color: "#22c55e" }}>{project.org}</div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#9ca3af" }}>{project.description}</p>
            {"stats" in project && project.stats && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.stats.map(s => <Stat key={s} label={s} />)}
              </div>
            )}
          </div>
          <div className="flex gap-2 flex-wrap">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="px-3 py-1.5 rounded text-xs font-medium transition-colors"
              style={{ border: "1px solid #333", color: "#d1d5db" }}>
              GitHub
            </a>
            {"live" in project && (project as { live?: string }).live && (
              <a href={(project as { live: string }).live} target="_blank" rel="noopener noreferrer"
                className="px-3 py-1.5 rounded text-xs font-medium"
                style={{ background: "#22c55e", color: "#000" }}>
                Live Demo
              </a>
            )}
            {"doi" in project && (project as { doi?: string }).doi && (
              <a href={(project as { doi: string }).doi} target="_blank" rel="noopener noreferrer"
                className="px-3 py-1.5 rounded text-xs font-medium"
                style={{ background: "#4f46e5", color: "#fff" }}>
                DOI
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── lab card ── */
function LabCard({ project }: { project: (typeof labProjects)[0] }) {
  return (
    <div className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-300 cursor-default"
      style={{ background: "#080808", border: "1px solid #1a1a1a" }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(34,197,94,0.25)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#1a1a1a";
      }}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold leading-snug" style={{ color: "#e5e7eb" }}>{project.name}</h3>
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="shrink-0 px-2.5 py-1 rounded text-xs font-mono transition-colors"
          style={{ border: "1px solid #222", color: "#6b7280" }}>
          ↗
        </a>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "#4b5563" }}>{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map(t => <Tag key={t} label={t} />)}
      </div>
    </div>
  );
}

/* ── main ── */
export default function Home() {
  const tickerItems = [
    "CLOUD SECURITY", "OWASP OPENSHIELD", "DETECTION ENGINEERING",
    "AZURE CSPM", "AI THREAT TOOLS", "MITRE ATT&CK", "PYTHON",
    "MICROSOFT SENTINEL", "OPEN SOURCE", "LONDON UK",
  ];

  return (
    <main style={{ background: "#000", minHeight: "100vh", color: "#e5e7eb" }}>

      {/* NAV */}
      <nav className="fixed top-5 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-1 px-5 py-2.5 rounded-full text-sm"
          style={{ background: "rgba(10,10,10,0.9)", border: "1px solid #1f1f1f", backdropFilter: "blur(12px)" }}>
          {["Projects", "Labs", "Skills", "Certifications", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="px-3 py-1.5 rounded-full transition-colors hover:text-white"
              style={{ color: "#6b7280" }}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-8 pt-20 max-w-7xl mx-auto">
        <div className="mb-6 flex items-center gap-2">
          <span className="pulse-dot w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
          <span className="text-xs font-mono" style={{ color: "#22c55e" }}>
            AVAILABLE FOR SECURITY ENGINEERING ROLES · LONDON, UK
          </span>
        </div>

        <h1 className="font-black leading-none tracking-tighter mb-2"
          style={{ fontSize: "clamp(4rem, 12vw, 11rem)", color: "#fff" }}>
          TANVIR
        </h1>
        <h1 className="font-black leading-none tracking-tighter mb-8"
          style={{ fontSize: "clamp(4rem, 12vw, 11rem)", WebkitTextStroke: "2px #22c55e", color: "transparent" }}>
          FARHAD
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl">
          <p className="text-lg max-w-xl" style={{ color: "#6b7280" }}>
            Security Engineer building cloud posture, detection engineering, and AI threat tools.
            #2 contributor on OWASP OpenShield. Founder of RetailShield.
          </p>
          <div className="flex gap-3 shrink-0">
            <a href={profile.github} target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              style={{ background: "#fff", color: "#000" }}>
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              style={{ border: "1px solid #222", color: "#9ca3af" }}>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden py-5 border-y" style={{ borderColor: "#111" }}>
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="mx-8 text-sm font-mono whitespace-nowrap" style={{ color: "#1f1f1f" }}>
              {item} <span style={{ color: "#22c55e" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* BENTO GRID */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Photo card */}
          <div className="rounded-2xl overflow-hidden md:row-span-2"
            style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", minHeight: "400px" }}>
            <div className="w-full h-full flex flex-col items-center justify-center p-8 gap-4">
              <div className="w-40 h-40 rounded-full flex items-center justify-center text-5xl font-black"
                style={{ background: "#111", border: "2px solid #1f1f1f", color: "#22c55e" }}>
                TF
              </div>
              <div className="text-center">
                <div className="font-bold text-xl text-white">Tanvir Farhad</div>
                <div className="text-sm font-mono mt-1" style={{ color: "#22c55e" }}>SECURITY ENGINEER</div>
                <div className="text-xs mt-2" style={{ color: "#4b5563" }}>BSc Computing Systems<br />Ulster University London</div>
              </div>
            </div>
          </div>

          {/* Stats card */}
          <div className="rounded-2xl p-7 flex flex-col justify-between"
            style={{ background: "#0a0a0a", border: "1px solid #1a1a1a" }}>
            <div className="text-xs font-mono mb-4" style={{ color: "#374151" }}>CONTRIBUTIONS</div>
            <div className="grid grid-cols-2 gap-4">
              {[["53", "Commits"], ["25+", "Merged PRs"], ["51", "Scanner Rules"], ["144", "Total Rules"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-3xl font-black" style={{ color: "#22c55e" }}>{n}</div>
                  <div className="text-xs" style={{ color: "#4b5563" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* OWASP badge card */}
          <div className="rounded-2xl p-7 flex flex-col justify-between"
            style={{ background: "#0a0a0a", border: "1px solid #1a1a1a" }}>
            <div className="text-xs font-mono mb-3" style={{ color: "#374151" }}>ORG MEMBERSHIP</div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">OWASP</div>
              <div className="text-sm" style={{ color: "#6b7280" }}>OpenShield Maintainer</div>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="px-2 py-1 rounded text-xs font-mono" style={{ background: "#111", color: "#22c55e", border: "1px solid rgba(34,197,94,0.2)" }}>ShieldTech-Ltd</span>
              <span className="px-2 py-1 rounded text-xs font-mono" style={{ background: "#111", color: "#22c55e", border: "1px solid rgba(34,197,94,0.2)" }}>OWASP</span>
            </div>
          </div>

          {/* Skills card */}
          <div className="rounded-2xl p-7 md:col-span-2"
            style={{ background: "#0a0a0a", border: "1px solid #1a1a1a" }}>
            <div className="text-xs font-mono mb-4" style={{ color: "#374151" }}>CORE EXPERTISE</div>
            <div className="flex flex-wrap gap-2">
              {["Azure CSPM", "Microsoft Sentinel", "KQL", "Python", "MITRE ATT&CK",
                "CodeQL", "Splunk", "Wireshark", "Kali Linux", "ISO 27001", "NIST CSF", "OWASP"].map(s => (
                <Tag key={s} label={s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL PROJECTS */}
      <section id="projects" className="px-8 pb-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-mono mb-2" style={{ color: "#22c55e" }}>01 / OFFICIAL PROJECTS</div>
          <h2 className="text-5xl font-black text-white">Production work.</h2>
          <p className="mt-2 text-sm" style={{ color: "#4b5563" }}>Hover or wait to reveal details.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {officialProjects.map(p => <FlipCard key={p.name} project={p} />)}
        </div>
      </section>

      {/* LABS */}
      <section id="labs" className="px-8 pb-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-mono mb-2" style={{ color: "#22c55e" }}>02 / CYBERSECURITY LABS</div>
          <h2 className="text-5xl font-black text-white">Hands-on research.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {labProjects.map(p => <LabCard key={p.name} project={p} />)}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-8 pb-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-mono mb-2" style={{ color: "#22c55e" }}>03 / SKILLS</div>
          <h2 className="text-5xl font-black text-white">Technical stack.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="rounded-xl p-5" style={{ background: "#080808", border: "1px solid #1a1a1a" }}>
              <div className="text-xs font-mono mb-3" style={{ color: "#374151" }}>{cat.toUpperCase()}</div>
              <div className="flex flex-wrap gap-1.5">
                {items.map(item => <Tag key={item} label={item} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="px-8 pb-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-mono mb-2" style={{ color: "#22c55e" }}>04 / CERTIFICATIONS</div>
          <h2 className="text-5xl font-black text-white">Credentials.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.map(cert => (
            <div key={cert.name} className="flex items-center justify-between rounded-xl px-5 py-4"
              style={{ background: "#080808", border: "1px solid #1a1a1a" }}>
              <div>
                <div className="text-sm font-medium text-white">{cert.name}</div>
                <div className="text-xs font-mono mt-0.5" style={{ color: "#374151" }}>
                  {cert.issuer} · {cert.year}
                </div>
              </div>
              {"file" in cert && (cert as { file?: string }).file && (
                <a href={(cert as { file: string }).file} target="_blank" rel="noopener noreferrer"
                  className="px-3 py-1 rounded text-xs font-mono ml-4 transition-colors"
                  style={{ border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e" }}>
                  View
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="px-8 pb-20 max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="text-xs font-mono mb-2" style={{ color: "#22c55e" }}>05 / PUBLICATIONS</div>
          <h2 className="text-5xl font-black text-white">Published work.</h2>
        </div>
        {publications.map(pub => (
          <div key={pub.doi} className="rounded-xl p-6" style={{ background: "#080808", border: "1px solid #1a1a1a" }}>
            <div className="text-sm font-medium text-white mb-1">{pub.title}</div>
            <div className="text-xs font-mono mb-3" style={{ color: "#374151" }}>
              {pub.author} · {pub.publisher} · {pub.year}
            </div>
            <a href={pub.doi} target="_blank" rel="noopener noreferrer"
              className="text-xs font-mono hover:underline" style={{ color: "#22c55e" }}>
              {pub.doi}
            </a>
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 pb-32 max-w-7xl mx-auto">
        <div className="rounded-2xl p-12 text-center" style={{ background: "#080808", border: "1px solid #1a1a1a" }}>
          <div className="text-xs font-mono mb-4" style={{ color: "#22c55e" }}>06 / CONTACT</div>
          <h2 className="text-5xl font-black text-white mb-3">
            Let&apos;s <span style={{ WebkitTextStroke: "2px #22c55e", color: "transparent" }}>work</span> together.
          </h2>
          <p className="mb-8 text-sm" style={{ color: "#4b5563" }}>
            Open to security engineering internships and entry-level roles.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`mailto:${profile.email}`}
              className="px-6 py-3 rounded-full font-medium text-sm"
              style={{ background: "#22c55e", color: "#000" }}>
              Send Email
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-medium text-sm"
              style={{ border: "1px solid #222", color: "#9ca3af" }}>
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-medium text-sm"
              style={{ border: "1px solid #222", color: "#9ca3af" }}>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t px-8 py-6" style={{ borderColor: "#111" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono" style={{ color: "#1f2937" }}>
          <span>TANVIR FARHAD · LONDON, UK</span>
          <span style={{ color: "#374151" }}>SECURITY ENGINEER · 2026</span>
        </div>
      </footer>
    </main>
  );
}

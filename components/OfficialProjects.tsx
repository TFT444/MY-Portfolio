"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { officialProjects } from "@/lib/data";

function Tag({ label }: { label: string }) {
  return (
    <span className="px-2 py-0.5 rounded text-xs font-mono"
      style={{ background: "rgba(34,197,94,0.06)", color: "#86efac", border: "1px solid rgba(34,197,94,0.15)" }}>
      {label}
    </span>
  );
}

function FlipCard({ project, index }: { project: (typeof officialProjects)[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const interval = setInterval(() => setFlipped(f => !f), 4500 + index * 500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="flip-card"
      style={{ height: "360px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`} style={{ height: "100%" }}>

        {/* FRONT */}
        <div className="flip-card-front p-8 flex flex-col justify-between relative overflow-hidden"
          style={{
            background: "#080808",
            border: "1px solid #1a1a1a",
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(34,197,94,0.4)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 40px rgba(34,197,94,0.12), 0 0 80px rgba(34,197,94,0.06)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "#1a1a1a";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          }}
        >
          <div>
            <div className="text-xs font-mono tracking-widest mb-2" style={{ color: "#22c55e" }}>
              {project.org}
            </div>
            <h3 className="text-4xl font-black text-white mb-1">{project.name}</h3>
            <div className="text-sm" style={{ color: "#4b5563" }}>{project.role}</div>
          </div>
          <div>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.slice(0, 4).map(t => <Tag key={t} label={t} />)}
            </div>
            <div className="flex items-center gap-2 text-xs font-mono" style={{ color: "#2d2d2d" }}>
              <span>hover to explore</span>
              <span style={{ color: "#22c55e" }}>→</span>
            </div>
          </div>
          {/* Corner glow */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(34,197,94,0.08), transparent 70%)" }} />
        </div>

        {/* BACK */}
        <div className="flip-card-back p-8 flex flex-col justify-between"
          style={{ background: "#050505", border: "1px solid rgba(34,197,94,0.25)", boxShadow: "0 0 50px rgba(34,197,94,0.08)" }}>
          <div>
            <div className="text-xs font-mono tracking-widest mb-3" style={{ color: "#22c55e" }}>
              {project.org}
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
              {project.description}
            </p>
            {"stats" in project && project.stats && (
              <div className="flex flex-wrap gap-1.5">
                {project.stats.map(s => (
                  <span key={s} className="px-2 py-0.5 rounded text-xs font-mono"
                    style={{ background: "#111", color: "#4b5563", border: "1px solid #1f1f1f" }}>
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-2 flex-wrap">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-medium transition-colors"
              style={{ border: "1px solid #222", color: "#9ca3af" }}>
              GitHub ↗
            </a>
            {"live" in project && (project as { live?: string }).live && (
              <a href={(project as { live: string }).live} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-medium"
                style={{ background: "#22c55e", color: "#000" }}>
                Live Demo ↗
              </a>
            )}
            {"doi" in project && (project as { doi?: string }).doi && (
              <a href={(project as { doi: string }).doi} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-medium"
                style={{ background: "#4f46e5", color: "#fff" }}>
                DOI ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function OfficialProjects() {
  return (
    <section id="projects" className="px-8 pb-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="text-xs font-mono tracking-widest mb-3" style={{ color: "#22c55e" }}>
          01 / OFFICIAL PROJECTS
        </div>
        <h2 className="text-6xl font-black text-white">Production work.</h2>
        <p className="mt-2 text-sm font-mono" style={{ color: "#2d2d2d" }}>
          Hover or wait to reveal details.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {officialProjects.map((p, i) => (
          <FlipCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

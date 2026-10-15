"use client";
import { motion } from "framer-motion";
import { labProjects } from "@/lib/data";

function LabCard({ project, index }: { project: (typeof labProjects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ borderColor: "rgba(34,197,94,0.3)", y: -2 }}
      className="rounded-xl p-5 flex flex-col gap-3 cursor-default"
      style={{ background: "#080808", border: "1px solid #141414", transition: "border-color 0.2s, transform 0.2s" }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold leading-snug text-white">{project.name}</h3>
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="shrink-0 w-7 h-7 flex items-center justify-center rounded text-xs font-mono transition-colors"
          style={{ border: "1px solid #1f1f1f", color: "#4b5563" }}>
          ↗
        </a>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "#374151" }}>{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map(t => (
          <span key={t} className="px-2 py-0.5 rounded text-xs font-mono"
            style={{ background: "rgba(34,197,94,0.04)", color: "#4b7c5c", border: "1px solid rgba(34,197,94,0.08)" }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Labs() {
  return (
    <section id="labs" className="px-8 pb-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="text-xs font-mono tracking-widest mb-3" style={{ color: "#22c55e" }}>
          02 / CYBERSECURITY LABS
        </div>
        <h2 className="text-6xl font-black text-white">Hands-on research.</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {labProjects.map((p, i) => <LabCard key={p.name} project={p} index={i} />)}
      </div>
    </section>
  );
}

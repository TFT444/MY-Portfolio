"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="px-8 pb-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="text-xs font-mono tracking-widest mb-3" style={{ color: "#22c55e" }}>
          03 / SKILLS
        </div>
        <h2 className="text-6xl font-black text-white">Technical stack.</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skills).map(([cat, items], i) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl p-5"
            style={{ background: "#080808", border: "1px solid #141414" }}
          >
            <div className="text-xs font-mono tracking-widest mb-4" style={{ color: "#2d2d2d" }}>
              {cat.toUpperCase()}
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map(item => (
                <span key={item} className="px-2.5 py-1 rounded text-xs font-mono"
                  style={{ background: "rgba(34,197,94,0.05)", color: "#86efac", border: "1px solid rgba(34,197,94,0.12)" }}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

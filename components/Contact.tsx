"use client";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="px-8 pb-32 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
        style={{ background: "#080808", border: "1px solid #141414" }}
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(34,197,94,0.05), transparent 70%)" }} />

        <div className="text-xs font-mono tracking-widest mb-6" style={{ color: "#22c55e" }}>
          06 / CONTACT
        </div>
        <h2 className="font-black leading-none tracking-tighter mb-4"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
          <span className="text-white">Let&apos;s </span>
          <span style={{ WebkitTextStroke: "2px #22c55e", color: "transparent" }}>work</span>
          <br />
          <span className="text-white">together.</span>
        </h2>
        <p className="mb-10 text-sm max-w-md mx-auto" style={{ color: "#374151" }}>
          Open to security engineering internships and entry-level roles. Always happy to connect.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="px-7 py-3 rounded-full font-semibold text-sm"
            style={{ background: "#22c55e", color: "#000" }}
          >
            Send Email
          </motion.a>
          <motion.a
            href={profile.linkedin} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="px-7 py-3 rounded-full font-semibold text-sm"
            style={{ border: "1px solid #222", color: "#9ca3af" }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href={profile.github} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="px-7 py-3 rounded-full font-semibold text-sm"
            style={{ border: "1px solid #222", color: "#9ca3af" }}
          >
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

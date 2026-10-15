"use client";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 pt-24 pb-12 max-w-7xl mx-auto overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Green glow blob */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)" }}
      />

      {/* Available badge */}
      <motion.div {...fadeUp(0.1)} className="flex items-center gap-2 mb-8">
        <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e", animation: "pulse 2s infinite" }} />
        <span className="text-xs font-mono tracking-widest" style={{ color: "#22c55e" }}>
          AVAILABLE FOR SECURITY ENGINEERING ROLES · LONDON, UK
        </span>
      </motion.div>

      {/* Big name */}
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-black leading-none tracking-tighter"
          style={{ fontSize: "clamp(5rem, 14vw, 13rem)", color: "#ffffff" }}
        >
          TANVIR
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-black leading-none tracking-tighter"
          style={{
            fontSize: "clamp(5rem, 14vw, 13rem)",
            WebkitTextStroke: "2px #22c55e",
            color: "transparent",
          }}
        >
          FARHAD
        </motion.h1>
      </div>

      {/* Role label */}
      <motion.div {...fadeUp(0.6)} className="mt-6 mb-8">
        <span className="text-sm font-mono tracking-widest px-3 py-1.5 rounded-full"
          style={{ border: "1px solid #1f1f1f", color: "#4b5563" }}>
          SECURITY ENGINEER · OWASP MAINTAINER · OPEN SOURCE
        </span>
      </motion.div>

      {/* Bio + buttons */}
      <motion.div {...fadeUp(0.75)} className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl">
        <p className="text-base max-w-lg leading-relaxed" style={{ color: "#6b7280" }}>
          Building cloud posture, detection engineering, and AI threat tools.
          #2 contributor on OWASP OpenShield. Founder of RetailShield (DOI-published).
        </p>
        <div className="flex gap-3 shrink-0">
          <motion.a
            href={profile.github} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
            style={{ background: "#fff", color: "#000" }}
          >
            GitHub
          </motion.a>
          <motion.a
            href={profile.linkedin} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="px-6 py-2.5 rounded-full text-sm font-semibold"
            style={{ border: "1px solid #222", color: "#9ca3af" }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="px-6 py-2.5 rounded-full text-sm font-semibold"
            style={{ border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e" }}
          >
            Contact
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div {...fadeUp(1.2)} className="absolute bottom-8 left-8 flex items-center gap-2">
        <div className="w-px h-12 rounded-full" style={{ background: "linear-gradient(to bottom, #22c55e, transparent)" }} />
        <span className="text-xs font-mono" style={{ color: "#2d2d2d" }}>SCROLL</span>
      </motion.div>
    </section>
  );
}

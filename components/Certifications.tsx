"use client";
import { motion } from "framer-motion";
import { certifications, publications } from "@/lib/data";

export default function Certifications() {
  return (
    <>
      <section id="certifications" className="px-8 pb-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-xs font-mono tracking-widest mb-3" style={{ color: "#22c55e" }}>
            04 / CERTIFICATIONS
          </div>
          <h2 className="text-6xl font-black text-white">Credentials.</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex items-center justify-between rounded-xl px-5 py-4"
              style={{ background: "#080808", border: "1px solid #141414" }}
            >
              <div>
                <div className="text-sm font-medium text-white">{cert.name}</div>
                <div className="text-xs font-mono mt-0.5" style={{ color: "#2d2d2d" }}>
                  {cert.issuer} · {cert.year}
                </div>
              </div>
              {"file" in cert && (cert as { file?: string }).file && (
                <a href={(cert as { file: string }).file} target="_blank" rel="noopener noreferrer"
                  className="px-3 py-1 rounded text-xs font-mono ml-4 shrink-0"
                  style={{ border: "1px solid rgba(34,197,94,0.25)", color: "#22c55e" }}>
                  View ↗
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-xs font-mono tracking-widest mb-3" style={{ color: "#22c55e" }}>
            05 / PUBLICATIONS
          </div>
          <h2 className="text-6xl font-black text-white">Published work.</h2>
        </motion.div>
        {publications.map(pub => (
          <motion.div
            key={pub.doi}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl p-6"
            style={{ background: "#080808", border: "1px solid #141414" }}
          >
            <div className="text-base font-semibold text-white mb-1">{pub.title}</div>
            <div className="text-xs font-mono mb-3" style={{ color: "#2d2d2d" }}>
              {pub.author} · {pub.publisher} · {pub.year}
            </div>
            <a href={pub.doi} target="_blank" rel="noopener noreferrer"
              className="text-xs font-mono hover:underline" style={{ color: "#22c55e" }}>
              {pub.doi} ↗
            </a>
          </motion.div>
        ))}
      </section>
    </>
  );
}

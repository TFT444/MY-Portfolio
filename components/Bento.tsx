"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ to }: { to: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}</span>;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Bento() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-8 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Photo / identity card */}
        <motion.div
          custom={0} variants={cardVariants}
          initial="hidden" animate={inView ? "visible" : "hidden"}
          className="rounded-2xl overflow-hidden md:row-span-2 flex flex-col items-center justify-center p-10 gap-5"
          style={{ background: "#080808", border: "1px solid #141414", minHeight: "420px" }}
        >
          <div className="w-36 h-36 rounded-full flex items-center justify-center text-4xl font-black relative"
            style={{ background: "#0f0f0f", border: "1.5px solid #1f1f1f" }}>
            <span style={{ color: "#22c55e" }}>TF</span>
            <div className="absolute inset-0 rounded-full"
              style={{ boxShadow: "0 0 40px rgba(34,197,94,0.12)" }} />
          </div>
          <div className="text-center">
            <div className="font-bold text-xl text-white">Tanvir Farhad</div>
            <div className="text-xs font-mono tracking-widest mt-1" style={{ color: "#22c55e" }}>
              SECURITY ENGINEER
            </div>
            <div className="text-xs mt-3 leading-relaxed" style={{ color: "#374151" }}>
              BSc Computing Systems<br />Ulster University London
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            {["OWASP", "ShieldTech"].map(o => (
              <span key={o} className="text-xs font-mono px-2 py-1 rounded"
                style={{ background: "#0f0f0f", border: "1px solid rgba(34,197,94,0.15)", color: "#22c55e" }}>
                {o}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats card */}
        <motion.div
          custom={1} variants={cardVariants}
          initial="hidden" animate={inView ? "visible" : "hidden"}
          className="rounded-2xl p-7"
          style={{ background: "#080808", border: "1px solid #141414" }}
        >
          <div className="text-xs font-mono tracking-widest mb-5" style={{ color: "#2d2d2d" }}>
            CONTRIBUTIONS
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[["53", "Commits"], ["25+", "Merged PRs"], ["51", "Scanner Rules"], ["144", "Total Rules"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-4xl font-black" style={{ color: "#22c55e" }}>
                  {n.endsWith("+") ? <><Counter to={parseInt(n)} />+</> : <Counter to={parseInt(n)} />}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#374151" }}>{l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Org card */}
        <motion.div
          custom={2} variants={cardVariants}
          initial="hidden" animate={inView ? "visible" : "hidden"}
          className="rounded-2xl p-7 flex flex-col justify-between"
          style={{ background: "#080808", border: "1px solid #141414" }}
        >
          <div className="text-xs font-mono tracking-widest mb-3" style={{ color: "#2d2d2d" }}>
            ORGANISATIONS
          </div>
          <div>
            <div className="text-2xl font-bold text-white">OWASP</div>
            <div className="text-sm mt-1" style={{ color: "#374151" }}>OpenShield Maintainer</div>
            <div className="text-2xl font-bold text-white mt-3">ShieldTech-Ltd</div>
            <div className="text-sm mt-1" style={{ color: "#374151" }}>Founder</div>
          </div>
        </motion.div>

        {/* Skills card */}
        <motion.div
          custom={3} variants={cardVariants}
          initial="hidden" animate={inView ? "visible" : "hidden"}
          className="rounded-2xl p-7 md:col-span-2"
          style={{ background: "#080808", border: "1px solid #141414" }}
        >
          <div className="text-xs font-mono tracking-widest mb-4" style={{ color: "#2d2d2d" }}>
            CORE EXPERTISE
          </div>
          <div className="flex flex-wrap gap-2">
            {["Azure CSPM", "Microsoft Sentinel", "KQL", "Python", "MITRE ATT&CK",
              "CodeQL", "Splunk", "Wireshark", "Kali Linux", "ISO 27001", "NIST CSF", "OWASP", "Active Directory"].map(s => (
              <span key={s} className="px-2.5 py-1 rounded text-xs font-mono"
                style={{ background: "rgba(34,197,94,0.06)", color: "#86efac", border: "1px solid rgba(34,197,94,0.15)" }}>
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

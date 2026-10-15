"use client";

const items = [
  "CLOUD SECURITY", "OWASP OPENSHIELD", "DETECTION ENGINEERING",
  "AZURE CSPM", "AI THREAT TOOLS", "MITRE ATT&CK", "PYTHON",
  "MICROSOFT SENTINEL", "OPEN SOURCE", "LONDON UK", "RETAILSHIELD",
  "DUSK", "KQL", "SPLUNK", "WIRESHARK",
];

export default function Ticker() {
  return (
    <div className="overflow-hidden py-4 border-y" style={{ borderColor: "#0f0f0f" }}>
      <div style={{ display: "flex", animation: "ticker 25s linear infinite", width: "max-content" }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-xs font-mono whitespace-nowrap tracking-widest"
            style={{ color: "#1f1f1f" }}>
            {item}
            <span className="mx-4" style={{ color: "#22c55e" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

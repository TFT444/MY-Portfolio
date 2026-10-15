import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Bento from "@/components/Bento";
import OfficialProjects from "@/components/OfficialProjects";
import Labs from "@/components/Labs";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ background: "#000", minHeight: "100vh", color: "#e5e7eb" }}>

      {/* Floating nav */}
      <nav className="fixed top-5 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-1 px-4 py-2 rounded-full text-sm"
          style={{ background: "rgba(8,8,8,0.95)", border: "1px solid #1a1a1a", backdropFilter: "blur(12px)" }}>
          {[
            { label: "Projects", href: "#projects" },
            { label: "Labs", href: "#labs" },
            { label: "Skills", href: "#skills" },
            { label: "Certs", href: "#certifications" },
            { label: "Contact", href: "#contact" },
          ].map(item => (
            <a key={item.label} href={item.href}
              className="px-3 py-1.5 rounded-full text-xs font-mono tracking-wide transition-colors hover:text-white"
              style={{ color: "#4b5563" }}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <Hero />
      <Ticker />
      <Bento />
      <OfficialProjects />
      <Labs />
      <Skills />
      <Certifications />
      <Contact />

      {/* Footer */}
      <footer className="border-t px-8 py-6" style={{ borderColor: "#0f0f0f" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono"
          style={{ color: "#1a1a1a" }}>
          <span>TANVIR FARHAD · LONDON, UK</span>
          <span>SECURITY ENGINEER · 2026</span>
        </div>
      </footer>
    </main>
  );
}

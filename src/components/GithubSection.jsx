import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { GitCommit, Terminal, Sparkles } from "lucide-react";

const repos = [
  {
    name: "AgriTech-Platform",
    desc: "Smart Telemetry & Agricultural Market Web Application",
    lang: "JavaScript",
    langColor: "#909090",
    stars: "12",
    forks: "4",
  },
  {
    name: "Focus-Flow",
    desc: "Study Planner & Task Management System built during Internship",
    lang: "HTML/CSS",
    langColor: "#A6A6A6",
    stars: "18",
    forks: "6",
  },
  {
    name: "Expense-Tracker-React",
    desc: "Personal finance tracking React app with analytics dashboard",
    lang: "React",
    langColor: "#C8C8C8",
    stars: "15",
    forks: "5",
  },
  {
    name: "Python-Password-Vault",
    desc: "Encrypted CLI credential security and password strength diagnostic tool",
    lang: "Python",
    langColor: "#B8B8B8",
    stars: "22",
    forks: "8",
  },
];

export default function GithubSection() {
  const cells = Array.from({ length: 112 }, (_, i) => i);

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-ink overflow-hidden">
      {/* Atmosphere glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[45vw] max-w-[600px] max-h-[300px] rounded-full bg-white/[0.02] blur-[100px] lg:blur-[160px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BFC3C7] mb-3"
          >
            <GitCommit size={14} />
            <span>06. Open Source & Code Activity</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Code. Commit. Innovate. <br />
            <span className="text-[#BFC3C7]">
              Explore @sahil-16-01 on GitHub
            </span>
          </motion.h2>
        </div>

        {/* Heatmap Card */}
        <div className="glass rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl mb-12 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl glass border border-white/15 text-white">
                <FaGithub size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base">
                  Contribution Heatmap
                </h3>
                <p className="text-xs text-white/40 font-mono">
                  @sahil-16-01 - Active Development
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-white/60">
              <span>Less</span>
              <div className="flex gap-1">
                <span className="w-3 h-3 rounded-[2px] bg-[#101612]" />
                <span className="w-3 h-3 rounded-[2px] bg-[#0E4429]" />
                <span className="w-3 h-3 rounded-[2px] bg-[#26A641]" />
                <span className="w-3 h-3 rounded-[2px] bg-[#39D353]" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Grid of cells */}
          <div className="grid grid-cols-[repeat(16,1fr)] sm:grid-cols-[repeat(28,1fr)] gap-1.5 mb-6">
            {cells.map((c) => {
              const opacityVal = 0.08 + ((c * 17) % 7) * 0.14;
              return (
                <motion.span
                  key={c}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: (c % 28) * 0.015 }}
                  className="w-full aspect-square rounded-[3px] hover:scale-125 transition-transform"
                  style={{
                    background: ["#101612", "#0E4429", "#006D32", "#26A641", "#39D353"][Math.min(4, Math.floor(opacityVal * 5))],
                    boxShadow: opacityVal > 0.6 ? "0 0 6px rgba(57,211,83,0.16)" : "none",
                  }}
                />
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs font-mono text-white/50 pt-2">
            <span>450+ Commits in 2024</span>
            <span>12 Public Repositories</span>
          </div>
        </div>

        {/* Top Repositories Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {repos.map((r) => (
            <a
              key={r.name}
              href="https://github.com/Sahil-Bulbule"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-6 border border-white/12 hover:border-white/30 transition-all hover:scale-[1.02] shadow-xl group block"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-white font-display font-bold text-base group-hover:text-[#BFC3C7] transition-colors">
                  <Terminal size={16} className="text-[#D0D0D0]" />
                  <span>{r.name}</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-white/40">
                  <span className="flex items-center gap-1">
                    <FaStar size={12} className="text-[#A6A6A6]" /> {r.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeBranch size={12} /> {r.forks}
                  </span>
                </div>
              </div>

              <p className="text-xs text-white/60 font-body mb-4 leading-relaxed">
                {r.desc}
              </p>

              <div className="flex items-center gap-2 text-xs font-mono">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: r.langColor }}
                />
                <span className="text-white/70">{r.lang}</span>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center">
          <a
            href="https://github.com/Sahil-Bulbule"
            target="_blank"
            rel="noreferrer"
            className="social-link-animated inline-flex items-center gap-2.5 rounded-full glass border border-white/20 px-8 py-3.5 text-sm font-semibold hover:scale-105 shadow-xl transition-transform"
            style={{ animationDelay: "0s" }}
          >
            <FaGithub size={18} />
            <span>Visit Full GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}



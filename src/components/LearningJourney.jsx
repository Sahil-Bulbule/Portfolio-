import { motion } from "framer-motion";
import { Sparkles, Brain, Bot, Network, Cpu, ArrowRight } from "lucide-react";

const roadmapNodes = [
  { step: "01", title: "HTML, CSS & JS Fundamentals", desc: "DOM manipulation, async JS, responsive layout systems.", status: "Mastered", accent: "#BFC3C7" },
  { step: "02", title: "React & Component Architecture", desc: "Hooks, Framer Motion, Tailwind, State Management.", status: "Mastered", accent: "#BFC3C7" },
  { step: "03", title: "Python & Backend Systems", desc: "Flask, Django, REST API architecture, database design.", status: "Proficient", accent: "#BFC3C7" },
  { step: "04", title: "Machine Learning Concepts", desc: "Supervised/unsupervised models, scikit-learn, data prep.", status: "Practicing", accent: "#BFC3C7" },
  { step: "05", title: "Generative AI & LLM Engineering", desc: "Prompt engineering, Open AI APIs, LangChain, LlamaIndex.", status: "Active Focus", accent: "#BFC3C7" },
  { step: "06", title: "RAG & Agentic AI Architectures", desc: "Vector DBs, retrieval pipelines, tool-calling autonomous AI agents.", status: "Next Horizon", accent: "#BFC3C7" },
];

const focusAreas = [
  {
    title: "Generative AI & LLMs",
    desc: "Building intelligent applications powered by Large Language Models, prompt design, and fine-tuning techniques.",
    icon: Sparkles,
    color: "#BFC3C7",
  },
  {
    title: "RAG Architectures",
    desc: "Retrieval-Augmented Generation for grounding AI outputs with custom knowledge bases and vector search.",
    icon: Network,
    color: "#BFC3C7",
  },
  {
    title: "Agentic AI & Tool-Calling",
    desc: "Autonomous AI agents capable of reasoning, planning, executing shell commands, and utilizing external APIs.",
    icon: Bot,
    color: "#BFC3C7",
  },
];

export default function LearningJourney() {
  return (
    <section id="learning" className="relative py-28 bg-ink overflow-hidden">
      {/* Background glowing atmospheres */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-[#1C1C1C] blur-[160px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BFC3C7] mb-3"
          >
            <Brain size={14} />
            <span>05. Continuous Evolution & AI Horizon</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Always Learning. <br />
            <span className="text-[#BFC3C7]">
              Building the Future with AI.
            </span>
          </motion.h2>
          <p className="mt-4 text-white/50 text-base font-body max-w-xl mx-auto">
            My developer trajectory from core web engineering to frontier Artificial Intelligence.
          </p>
        </div>

        {/* Roadmap Nodes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {roadmapNodes.map((node, i) => (
            <motion.div
              key={node.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 border border-white/12 relative overflow-hidden group hover:border-white/25 transition-all shadow-xl"
            >
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ background: node.accent }}
              />

              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-mono text-xs font-bold px-2.5 py-1 rounded-full glass border border-white/10"
                  style={{ color: node.accent }}
                >
                  STEP {node.step}
                </span>
                <span className="text-[11px] font-mono text-white/50">
                  {node.status}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-2">
                {node.title}
              </h3>

              <p className="text-xs text-white/60 font-body leading-relaxed">
                {node.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Focus Areas Showcase */}
        <div className="glass rounded-3xl p-8 lg:p-10 border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BFC3C7] mb-4">
            <Cpu size={14} />
            <span>Active AI Specializations</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
            Pioneering Intelligent Workflows
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map((f) => {
              const IconComp = f.icon;
              return (
                <div
                  key={f.title}
                  className="glass rounded-2xl p-6 border border-white/10 hover:border-white/25 transition-all group"
                >
                  <div
                    className="w-12 h-12 rounded-2xl glass border border-white/15 flex items-center justify-center mb-4 shadow-lg"
                    style={{ color: f.color }}
                  >
                    <IconComp size={24} />
                  </div>
                  <h4 className="font-display text-lg font-bold text-white mb-2">
                    {f.title}
                  </h4>
                  <p className="text-xs text-white/60 font-body leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}



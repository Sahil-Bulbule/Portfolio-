import { useState } from "react";
import { Trophy, Award, CheckCircle2, Sparkles, ExternalLink, ShieldCheck, X } from "lucide-react";
import { FaReact, FaPython, FaDatabase, FaBrain, FaCertificate, FaLaptopCode, FaRobot, FaBahai, FaSafari} from "react-icons/fa";
import AnimatedBorderCard from "./AnimatedBorderCard";
import ScrollReveal from "./ScrollReveal";

const achievementsList = [
  {
    id: "polytechnic-rank",
    title: "Final-Year Project Achievement",
    organization: "Priyadarshini Polytechnic, Nagpur",
    date: "2025",
    badge: "Aggregate (86.23%)",
    description:
      "Achieved **2nd Rank for the Final-Year Project** during the Diploma in Computer Engineering, recognizing the project's practical implementation and technical work.",
    highlights: [
      "Aggregate Score: 86.23% across all semesters",
      "Honored with 2nd Rank in Final-Year Project",
      "Project Presentation & Technical Demonstration",
    ],
  },
  {
    id: "academic-ycce",
    title: "B.Tech Computer Technology Milestone",
    organization: "YCCE, Nagpur",
    date: "2025 - Present",
    badge: "B.Tech C - Tech",
    description:
      "Currently pursuing a B.Tech in Computer Science & Engineering at YCCE, Nagpur, with a growing focus on AI/ML, software development, and problem solving. in the prestigious Computer Science and Engineering program at YCCE Nagpur, maintaining deep academic excellence across advanced DSA, systems, and AI.",
    highlights: [
      "Data Structures & Algorithms",
      "Machine Learning & Deep Learning",
      "Web Development & Software Engineering",
      "Building practical academic and personal projects",
    ],
  },
  {
    id: "github-contributions",
    title: "Active Developer 2026 – Present",
    organization: "Personal Projects & Problem Solving",
    date: "2026",
    badge: "GitHub & Development Journey",
    description:
      "Maintaining an active development journey through programming practice, personal projects, DSA problem solving, and continuous learning.",
    highlights: [
      "DSA and problem-solving practice",
      "Python, React & Full-Stack projects",
      "AI/ML learning and experimentation",
      "Regular project development and code documentation",
    ],
  },
  {
    id: "ai-deployment",
    title: "AI/ML Focus 2025 – Present",
    organization: "Artificial Intelligence & Machine Learning",
    date: "CURRENT FOCUS",
    badge: "Applied AI",
    description:
      "Building knowledge across Machine Learning, Deep Learning, NLP, Generative AI, RAG, and Agentic AI while developing practical AI-focused projects.",
    highlights: [
      "Machine Learning & Deep Learning fundamentals",
      "NLP and Generative AI",
      "RAG with Python and LangChain",
      "Exploring Agentic AI and LangGraph",
    ],
  },
];

const certificationsList = [
  {
    id: "cert-react",
    title: "Data Analytics & Technology Virtual Experience",
    issuer: "Deloitte • Forage",
    date: "Completed",
    icon: FaBrain,
    skills: ["COMPUTER NETWORKING", "DATA ANALYSIS", "DATA MODELING", "WEB SECURITY"],
    credentialUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_69b9aad95e26c409f8c0e045_1780418880775_completion_certificate.pdf",
  },
  {
    id: "cert-sql",
    title: "Generative AI Virtual Experience",
    issuer: "BCG X • Forage",
    date: "Completed",
    icon: FaDatabase,
    skills: ["AI DEVELOPMENT / DATA EXTRACTION", "FINANCIAL ANALYSIS", "NATURAL LANGUAGE PROCESSING", "DATA SCIENCE TOOLS"],
    credentialUrl: "https://www.theforage.com/simulations/bcg/gen-ai-anlo/completed",
  },
  {
    id: "cert-ml",
    title: "Partnering with AI in the workplace Job Simulation",
    issuer: "DataCom • Forage",
    date: "Completed",
    icon: FaLaptopCode,
    skills: ["AI COLLABORATION", "AI-ASSISTED RESEARCH", "PROMPT ENGINEERING", "Model AI-GUIDED PROBLEM SOLVING"],
    credentialUrl: "https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/YKTiJKCwxeXG3diLY_gCW7Xki5Y3vNpBmnn_69b9aad95e26c409f8c0e045_1780421323978_completion_certificate.pdf",
  },
  {
    id: "cert-python",
    title: "Full-Stack AI Engineer 2026 (Phase - I) - Machine Learning",
    issuer: "Udemy",
    date: "Completed",
    icon:  FaRobot,
    skills: ["Python 3", "Machine Learning", "Models", "Training / Testing"],
    credentialUrl: "https://www.udemy.com/certificate/UC-b8689d2a-b576-4003-8ff6-6308bd390aa6/",
  },
  {
    id: "cert-internship",
    title: "Full-Stack AI Engineer 2026 (Phase - II) - Deep Learning",
    issuer: "Udemy",
    date: "Completed",
    icon: FaBrain,
    skills: ["Neural Networks", "ANN", "CNN", "RNN", "LSTM", "GRU"],
    credentialUrl: "https://www.udemy.com/certificate/UC-abc6ed28-721f-4a61-8035-33127921e685/",
  },
  {
    id: "cert-genai",
    title: "Full-Stack AI Engineer 2026 (Phase - III) - Generative AI & RAG",
    issuer: "Udemy",
    date: "Completed",
    icon: Sparkles,
    skills: ["LLMs", "RAG", "LangChain", "RAG Pipelines", "Embeddings"],
    credentialUrl: "https://www.udemy.com/certificate/UC-e8e8cbdf-8fc7-490f-892e-75fb688f5b65/",
  },
  {
    id: "cert-web-development",
    title: "Web Development Masterclass 2026",
    issuer: "Udemy",
    date: "Completed",
    icon: FaBahai,
    skills: ["HTML", "CSS", "JavaScript", "NodeJS", "ExpressJS", "MongoDB", "ReactJS"],
    credentialUrl: "https://www.udemy.com/certificate/UC-7aa18598-a2a1-49b9-9c37-ab4cc79b845b/",
  },
  {
    id: "cert-nextjs",
    title: "NextJS Ultimate Masterclass 2026",
    issuer: "Udemy",
    date: "Completed",
    icon: FaSafari,
    skills: ["NextJS"],
    credentialUrl: "https://www.udemy.com/certificate/UC-cb5afd65-7500-415b-aea6-ba009d5fd98a/",
  },
  {
    id: "cert-python-full-stack",
    title: "Python Full Stack Development",
    issuer: "Udemy",
    date: "Completed",
    icon: FaPython,
    skills: ["Python", "Flask", "Django", "MongoDB", "SQLAlchemy", "REST APIs"],
    credentialUrl: "https://www.udemy.com/certificate/UC-7bd0f92e-139d-476d-9f2e-b88d5baf4d97/",
  },
  
];

export default function Achievements() {
  const [activeCertModal, setActiveCertModal] = useState(null);

  return (
    <section id="achievements" className="relative py-14 sm:py-18 overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BFC3C7] mb-3 bg-white/5 border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <span>Recognition &amp; Validations</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#F2F2F2] tracking-tight leading-snug">
              Achievements &amp; <br />
              <span className="text-[#BFC3C7]">Professional Certifications.</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#888888] max-w-lg mx-auto">
              Demonstrated institutional rankings, engineering milestones, and verified certifications.
            </p>
          </div>
        </ScrollReveal>

        {/* ONE LARGE MAIN CARD */}
        <ScrollReveal direction="up" delay={100}>
          <div className="card-outer p-6 sm:p-8 lg:p-10 space-y-10">

            {/* PART A: ACHIEVEMENTS */}
            <div>
              <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-white/15 gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#BFC3C7] shadow-[0_0_8px_rgba(191,195,199,0.5)]" />
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#F2F2F2]">
                    Engineering &amp; Academic Achievements
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#252525] border border-white/15 text-[#B8BEC5] drop-shadow-[0_0_6px_rgba(184,190,197,1)]  text-xs font-mono">
                  Verified Milestones
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {achievementsList.map((item) => (
                  <AnimatedBorderCard
                    key={item.id}
                    className="p-5 sm:p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-[#BFC3C7] text-[#000000] font-semibold">
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono border-white/15 text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)]">{item.date}</span>
                      </div>

                      <h4 className="font-display font-bold text-base sm:text-lg text-[#F2F2F2] mb-1">
                        {item.title}
                      </h4>

                      <p className="text-xs font-mono text-[#BFC3C7] mb-3">
                        {item.organization}
                      </p>

                      <p className="text-xs text-[#B8B8B8] leading-relaxed font-body mb-4">
                        {item.description}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-white/10">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs font-mono text-[#B8B8B8]">
                            <CheckCircle2 size={12} className="text-[#BFC3C7] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#888888]">
                      <span>STATUS</span>
                      <span className="text-[#BFC3C7] font-semibold">VERIFIED RECORD</span>
                    </div>
                  </AnimatedBorderCard>
                ))}
              </div>
            </div>

            {/* PART B: CERTIFICATIONS */}
            <div>
              <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-white/15 gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#BFC3C7] shadow-[0_0_8px_rgba(191,195,199,0.5)]" />
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#F2F2F2]">
                    Technical Certifications &amp; Credentials
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#252525] border border-white/15 text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)] text-xs font-mono">
                  {certificationsList.length} Credentials
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {certificationsList.map((cert) => {
                  const Icon = cert.icon;
                  return (
                    <AnimatedBorderCard
                      key={cert.id}
                      className="p-5 flex flex-col justify-between"
                    >
                      <div>
                        {/* Top Bar */}
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="p-2 rounded-xl bg-white/5 border border-white/15 text-[#BFC3C7] inner-icon">
                            <Icon size={18} />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#252525] border border-white/15 text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)]">
                            {cert.date}
                          </span>
                        </div>

                        <h4 className="font-display font-bold text-sm sm:text-base mb-1 leading-snug">
                          {cert.title}
                        </h4>

                        <p className="text-xs font-mono text-[#888888] mb-3.5">
                          {cert.issuer}
                        </p>

                        {/* Skills badges */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {cert.skills.map((s) => (
                            <span
                              key={s}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#000000] border border-white/10 "
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="flex items-center gap-1 text-[11px] font-mono text-[#888888]">
                          <ShieldCheck size={13} className="text-[#BFC3C7]" /> Verified
                        </span>

                        {cert.image ? (
                          <button
                            onClick={() => setActiveCertModal(cert)}
                            className="text-xs font-mono text-[#BFC3C7] hover:text-white flex items-center gap-1 font-semibold transition-colors duration-180 ease-out cursor-pointer"
                          >
                            <span>View Certificate</span>
                            <ExternalLink size={12} />
                          </button>
                        ) : (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-mono text-[#BFC3C7] hover:text-white flex items-center gap-1 font-semibold transition-colors duration-180 ease-out cursor-pointer"
                          >
                            <span>View Certificate</span>
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </AnimatedBorderCard>
                  );
                })}
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>

      {/* Certificate Preview Modal */}
      {activeCertModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveCertModal(null)}
        >
          <div
            className="card-outer max-w-2xl w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/15">
              <h4 className="font-display font-bold text-[#F2F2F2] text-base flex items-center gap-2">
                <Award size={17} className="text-[#BFC3C7]" />
                <span>{activeCertModal.title}</span>
              </h4>
              <button
                onClick={() => setActiveCertModal(null)}
                className="p-1 rounded-lg text-[#888888] hover:text-white transition-colors duration-180 ease-out cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <img
              src={activeCertModal.image}
              alt={activeCertModal.title}
              className="w-full rounded-xl border border-white/15 shadow-xl"
            />

            <p className="text-xs text-[#888888] mt-3 text-center font-mono">
              Issued by {activeCertModal.issuer}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}



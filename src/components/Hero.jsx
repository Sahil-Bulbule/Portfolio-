import { useEffect, useState } from "react";
import { Mail, ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import AnimatedBorderCard from "./AnimatedBorderCard";

const leetcodeUrl = "https://leetcode.com/u/9oGFyBqJcq/";

const socialLinks = [
  { label: "GitHub", icon: FaGithub, href: "https://github.com/Sahil-Bulbule" },
  { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/Sahil-Bulbule" },
  { label: "LeetCode", icon: SiLeetcode, href: leetcodeUrl },
  { label: "Email", icon: Mail, href: "mailto:sahilbulbule@gmail.com" },
];

const profileFocus = [
  { label: "AI/ML", detail: "Intelligent systems" },
  { label: "Python Full Stack", detail: "Web applications" },
  { label: "DSA & LeetCode", detail: "Problem solving" },
];

const progressionTags = [
  "Frontend",
  "Python Backend",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Generative AI",
  "RAG",
  "Agentic AI",
  "LLMs",
];

export default function Hero() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () =>
      setCurrentTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="ambient-surface relative pt-24 pb-10 sm:pt-28 sm:pb-14 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Main Hero Bento Card Grid */}
        <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch">

          {/* LEFT: Profile Identity Card (5 cols) */}
          <AnimatedBorderCard
            as="article"
            className="lg:col-span-5 p-5 sm:p-7 flex flex-col min-w-0"
          >
            {/* Top Bar: Status + City */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BFC3C7] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C8C8C8]" />
                </span>
                <span className="text-[#f8f5f5] font-medium">Available for Opportunities</span>
              </div>
              <span className="max-w-full truncate text-[#00f92a] text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full bg-[#111111] border border-[#333333] shadow-[0_0_10px_rgba(200,200,200,0.08)]">
                Nagpur, MH, IN {currentTime || "IST"}
              </span>
            </div>

            {/* Profile Avatar & Primary Title */}
            <div className="my-5 sm:my-6 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="relative mx-auto sm:mx-0 shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-white/25 shadow-[0_0_22px_rgba(178,31,61,0.16)]">
                <img
                  src="/images/My.jpeg"
                  alt="Sahil Bulbule"
                  className="w-full h-full object-cover object-[center_30%] grayscale-[15%] contrast-110 group-hover:grayscale-0 transition-all duration-300 ease-out"
                />
              </div>
              <div className="min-w-0 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#BFC3C7] mb-1">
                  <span className="text-[#D8D8D8]">AI/ML</span><span>&amp;</span><span>Python Full-Stack Developer</span>
                </div>
                <h1
                  className="font-display text-2xl sm:text-2.5xl font-bold tracking-tight"
                  style={{
                    color: "#F0F0F0",
                    textShadow: "0 0 6px rgba(255,255,255,0.22)"
                  }}
                >
                  Sahil Bulbule
                </h1>
                <p className="text-xs font-mono text-[#B8B8B8] mt-1 leading-relaxed">
                  B.Tech In C-Tech @ YCCE Nagpur <br />
                  Diploma - <span className="text-[#D8D8D8]">86.23%</span> | Final Year Project - <span className="text-[#D8D8D8]">2nd Ranker</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-5">
              {profileFocus.map((item) => (
                <div key={item.label} className="rounded-xl bg-[#1E1E1E] border border-[#333333] px-3 py-2.5 min-w-0">
                  <div className="text-[11px] font-mono font-semibold text-[#F5F5F5]">{item.label}</div>
                  <div className="text-[10px] text-[#CFCFCF] mt-0.5">{item.detail}</div>
                </div>
              ))}
            </div>

            {/* Bio Synopsis */}
            <div className="space-y-2 mb-5">
              <p className="text-xs sm:text-sm text-[#CFCFCF] leading-relaxed font-body">
                Building intelligent and scalable software solutions across <span className="text-[#E8E8E8] font-semibold">AI/ML</span>, <span className="text-[#E8E8E8] font-semibold">Deep Learning</span>, <span className="text-[#E8E8E8] font-semibold">NLP</span>, <span className="text-[#E8E8E8] font-semibold">Generative AI</span>, <span className="text-[#E8E8E8] font-semibold">LLMs</span> and <span className="text-[#E8E8E8] font-semibold">RAG</span>, while developing modern full-stack applications with <span className="text-[#E8E8E8] font-semibold">Python</span>, Flask, Django and React.
              </p>
              <p className="text-[11px] text-[#CFCFCF] leading-relaxed font-body">
                Focused on turning technical concepts into practical, user-centric applications through continuous learning and problem solving.
              </p>
            </div>

            <div className="mb-5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#CFCFCF] block mb-2">Core Focus</span>
              <div className="flex flex-wrap gap-1.5">
                {["AI/ML", "Deep Learning", "NLP", "GenAI", "LLMs", "RAG", "Agentic AI", "Python Full Stack", "DSA"].map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded-lg bg-[#1E1E1E] border border-[#333333] text-[10px] font-mono text-[#F5F5F5]">{tag}</span>
                ))}
              </div>
            </div>

            {/* CTAs & Socials */}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3 sm:mt-auto">
              <div className="flex items-center gap-2.5">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      title={item.label}
                      className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#202020] border border-[#383838] text-[#909090] hover:text-white hover:border-[#5A5A5A] hover:scale-105 transition-all duration-180 ease-out"
                    >
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="#contact"
                  className="btn-primary flex-1 px-4 py-2 rounded-xl text-sm font-mono flex items-center justify-center gap-1.5 min-h-10"
                >
                  <span>Connect</span>
                  <ArrowRight size={13} />
                </a>
                <a
                  href="/images/Resume/resume.pdf"
                  download
                  className="btn-secondary px-4 py-2 rounded-xl text-sm font-mono flex items-center justify-center gap-1 min-h-10"
                >
                  <Download size={13} />
                  <span>CV</span>
                </a>
              </div>
            </div>
          </AnimatedBorderCard>

          {/* RIGHT: High-Impact Technical Progression & Stats (7 cols) */}
          <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">

            {/* Stat Card 1: Polytechnic Rank #2 */}
            <AnimatedBorderCard className="p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#808080] mb-2">
                  <span>ACADEMIC HONORS</span>
                  <span className="text-[#B8BDC3] drop-shadow-[0_0_8px_rgba(184,189,195,0.7)] text-sm">DIPLOMA</span>
                </div>
                <div
                  className="font-display text-2xl sm:text-2.5xl font-bold tracking-tight"
                  style={{
                    color: "#F0F0F0",
                    textShadow: "0 0 6px rgba(255,255,255,0.22)"
                  }}
                >
                  86.23 %
                </div>
                <div className="text-xs font-display font-semibold text-[#8A8F94] mt-1">
                  Diploma Graduate
                </div>
                <p className="text-[11px] text-[#B8B8B8] mt-2 leading-relaxed">
                  Priyadarshini Polytechnic, Nagpur. Awarded for academic excellence &amp; best final year project.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-[#888888] mt-3">
                Diploma in Computer Engineering
              </div>
            </AnimatedBorderCard>

            {/* Stat Card 2: Industry Internship */}
            <AnimatedBorderCard className="p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#888888] mb-2">
                  <span>INDUSTRY EXPERIENCE</span>
                  <span className="text-[#B8BDC3] drop-shadow-[0_0_8px_rgba(184,189,195,0.7)] text-xs font-bold">2 MONTHS</span>
                </div>
                <div
                  className="font-display text-2xl sm:text-2.5xl font-bold tracking-tight"
                  style={{
                    color: "#F0F0F0",
                    textShadow: "0 0 6px rgba(255,255,255,0.22)"
                  }}
                >
                  FrontEnd Developer Internship
                </div>
                <div className="text-xs font-display font-semibold text-[#BFC3C7] mt-1">
                  Advanced Infotech, Nagpur
                </div>
                <p className="text-[11px] text-[#B8B8B8] mt-2 leading-relaxed">
                  Architected production-ready study planners, Kanban boards &amp; Pomodoro workflow engines.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-[#888888] mt-3">
                HTML - CSS - JS - Responsive UI
              </div>
            </AnimatedBorderCard>

            {/* Stat Card 3: 1,200+ Contributions */}
            <AnimatedBorderCard className="p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#888888] mb-2">
                  <span>GITHUB DISCIPLINE</span>
                  <span className="text-[#B8BDC3] drop-shadow-[0_0_8px_rgba(184,189,195,0.7)]">ACTIVE</span>
                </div>
                <div
                  className="font-display text-2xl sm:text-2.5xl font-bold tracking-tight"
                  style={{
                    color: "#F0F0F0",
                    textShadow: "0 0 6px rgba(255,255,255,0.22)"
                  }}
                >
                  Consistancy Growth
                </div>
                <div className="text-xs font-display font-semibold text-[#8A8F94] mt-1">
                  DSA • Python • AI/ML • Full Stack
                </div>
                <p className="text-[11px] text-[#B8B8B8] mt-2 leading-relaxed">
                  Building and documenting projects, problem-solving practice, and development work on GitHub.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-[#888888] mt-3">
                github.com/Sahil-Bulbule
              </div>
            </AnimatedBorderCard>

            {/* Stat Card 4: Architecture Focus */}
            <AnimatedBorderCard className="p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#888888] mb-2">
                  <span>CORE TARGET</span>
                  <span className="text-[#B8BDC3] drop-shadow-[0_0_8px_rgba(184,189,195,0.7)] text-[12px] font-mono">B.TECH In C-Tech</span>
                </div>
                <div
                  className="font-display text-2xl sm:text-2.5xl font-bold tracking-tight"
                  style={{
                    color: "#F0F0F0",
                    textShadow: "0 0 6px rgba(255,255,255,0.22)"
                  }}
                >
                  B-Tech In C-Tech
                </div>
                <div className="text-xs font-display font-semibold text-[#F2F2F2] mt-1">
                  YCCE Nagpur (Pursuing)
                </div>
                <p className="text-[11px] text-[#B8B8B8] mt-2 leading-relaxed">
                  Deep Focused on Machine Learning, Deep Learning, NLP, Generative AI, RAG & Agentic AI.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-[#888888] mt-3">
                Graduation: Class of 2027
              </div>
            </AnimatedBorderCard>

            {/* Spanning Full-Width Strip: Technical Evolution Roadmap */}
            <div className="sm:col-span-2 card-inner p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#BFC3C7] flex items-center gap-1.5 font-bold">
                  <span></span> Technical Evolution Roadmap
                </span>
                <span className="text-[10px] font-mono text-[#888888]">
                  Foundational UI - Python Systems - Agentic AI
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {progressionTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-[#252525] border border-white/10 text-[#F2F2F2] text-[11px] font-mono hover:border-white/30 hover:text-[#BFC3C7] transition-colors duration-180 ease-out"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}



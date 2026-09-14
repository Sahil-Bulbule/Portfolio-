import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ArrowUp } from "lucide-react";

const leetcodeUrl = "https://leetcode.com/u/9oGFyBqJcq/";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "AI Assistant", href: "#ai-assistant" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Internship", href: "#internship" },
  { label: "Achievements", href: "#achievements" },
  { label: "Developer Hub", href: "#developer-hub" },
  { label: "Get In Touch", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080808] border-t border-[rgba(191,195,199,0.12)] py-10 overflow-hidden">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-[#303030]">

          {/* Identity */}
          <div className="text-center lg:text-left">
            <a
              href="#home"
              className="font-display text-lg font-bold tracking-tight text-white hover:text-[#BFC3C7] transition-colors duration-180 ease-out"
            >
              Sahil Bulbule<span className="text-[#BFC3C7] font-mono text-xs ml-1">.ai</span>
            </a>
            <p className="text-xs text-[#858585] mt-1 font-mono">
              AI/ML Engineer - Python Full Stack Developer - YCCE Nagpur
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-mono text-[#858585]">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="hover:text-[#BFC3C7] transition-colors duration-180 ease-out"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials & Top Scroll Button */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/Sahil-Bulbule"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl bg-[#121212] border border-[rgba(191,195,199,0.12)] text-[#858585] hover:text-[#BFC3C7] hover:border-[#666666] hover:scale-105 transition-all duration-180 ease-out"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/Sahil-Bulbule"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-xl bg-[#121212] border border-[rgba(191,195,199,0.12)] text-[#858585] hover:text-[#BFC3C7] hover:border-[#666666] hover:scale-105 transition-all duration-180 ease-out"
            >
              <FaLinkedin size={15} />
            </a>
            <a
              href={leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              title="LeetCode"
              className="p-2 rounded-xl bg-[#121212] border border-[rgba(191,195,199,0.12)] text-[#858585] hover:text-[#BFC3C7] hover:border-[#666666] hover:scale-105 transition-all duration-180 ease-out"
            >
              <SiLeetcode size={15} />
            </a>
            <a
              href="mailto:sahilbulbule@gmail.com"
              aria-label="Email"
              className="p-2 rounded-xl bg-[#121212] border border-[rgba(191,195,199,0.12)] text-[#858585] hover:text-[#BFC3C7] hover:border-[#666666] hover:scale-105 transition-all duration-180 ease-out"
            >
              <FaEnvelope size={15} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-xl bg-[#D8D8D8] text-[#111111] hover:bg-white hover:scale-105 transition-all duration-180 ease-out shadow-sm cursor-pointer"
            >
              <ArrowUp size={15} />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Milestones */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#858585] gap-3">
          <p>Copyright 2026 Sahil Bulbule. Engineered with React &amp; Tailwind CSS.</p>
          <p className="text-[#D0D0D0]">
            Institutional Rank #2 (86.23%) - B.Tech CSE @ YCCE Nagpur
          </p>
        </div>
      </div>
    </footer>
  );
}



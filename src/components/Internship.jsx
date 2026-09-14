import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Briefcase, Calendar, CheckCircle2, Sparkles, Award, X, ExternalLink, ZoomIn } from "lucide-react";
import AnimatedBorderCard from "./AnimatedBorderCard";
import ScrollReveal from "./ScrollReveal";

const stack = ["HTML", "CSS", "JavaScript", "Responsive UI", "Task Management", "LocalStorage"];
const certificateImage = "/images/Intern.jpeg";

const responsibilities = [
  "Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript.",
  "Built Focus Flow, a study planner with task management and Pomodoro functionality.",
  "Implemented interactive task management features with dynamic UI updates.",
  "Used **LocalStorage** for maintaining user data and application state across sessions.",
  "Improved responsive layouts and cross-browser UI consistency.",
  "Gained practical experience in frontend development, debugging, and project-based software development."
];

export default function Internship() {
  const [showCertModal, setShowCertModal] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowCertModal(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!showCertModal) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showCertModal]);

  return (
    <section id="internship" className="ambient-surface relative py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BFC3C7] mb-3 bg-white/5 border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <span>Industrial Experience</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#F2F2F2] tracking-tight leading-snug">
              Internship Experience &amp; <br />
              <span className="text-[#BFC3C7]">Industry Practice.</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#888888] max-w-lg mx-auto">
              Practical hands-on software development experience building production user interfaces and productivity software.
            </p>
          </div>
        </ScrollReveal>

        {/* ONE LARGE "INTERNSHIP EXPERIENCE" CARD */}
        <ScrollReveal direction="up" delay={100}>
          <div className="card-outer p-4 sm:p-6 lg:p-7">

            {/* Module Header */}
            <div className="flex flex-wrap items-center justify-between pb-5 mb-6 border-b border-white/15 gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#BFC3C7] shadow-[0_0_8px_rgba(191,195,199,0.5)]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#F2F2F2]">
                  Internship Experience Module
                </h3>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#888888]">
                <span className="px-3 py-1 rounded-full bg-[#252525] border border-white/15 text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)]">
                  Advanced Infotech, Nagpur
                </span>
              </div>
            </div>

            {/* Inner Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-stretch">

              {/* LEFT: Experience Details Inner Card (7 cols) */}
              <AnimatedBorderCard className="lg:col-span-8 p-5 sm:p-6 flex flex-col justify-between min-w-0">
                <div>
                  {/* Company & Role Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-[#252525] border border-white/15 text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)] font-semibold inline-block mb-2">
                        FRONTEND DEVELOPER INTERN
                      </span>
                      <h4 className="font-display font-bold text-xl sm:text-2xl text-[#F2F2F2]">
                        Advanced Infotech
                      </h4>
                      <p className="text-xs font-mono text-[#888888] mt-0.5">Nagpur, Maharashtra, India</p>
                    </div>

                    <div className="bg-[#252525] border border-white/15 px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono text-[#F5F5F5] font-semibold flex items-center gap-2">
                      <Calendar size={13} className="text-[#888888]" />
                      <span>Duration: 2 Months</span>
                    </div>
                  </div>

                  {/* Focus Flow Spotlight Callout */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/15 mb-5 flex items-start gap-3">
                    <Sparkles size={18} className="text-[#BFC3C7] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-display font-bold text-sm text-[#BFC3C7]">
                        Key Project:
                        <span className="ml-2 text-[#A7ADB3] drop-shadow-[0_0_8px_rgba(167,173,179,0.7)]">
                          FOCUS FLOW
                        </span>
                        <span className="mx-2 text-[#A7ADB3]">
                          &amp;
                        </span>
                        <span className="text-[#A7ADB3] drop-shadow-[0_0_8px_rgba(167,173,179,0.7)]">
                          Expense Tracker
                        </span>
                      </h5>
                      <p className="text-xs text-[#B8B8B8] mt-1 leading-relaxed">
                        Developed a responsive web-based productivity application combining study planning,
                        task management, Pomodoro sessions, and expense tracking to help users organize
                        their daily activities efficiently.                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mb-5">
                    <span className="text-[10px] font-mono text-[#888888] uppercase tracking-wider block mb-2">
                      Technologies &amp; Core Competencies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {stack.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#252525] border border-white/15 text-[#BFC3C7]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <span className="text-[10px] font-mono text-[#888888] uppercase tracking-wider block mb-2.5">
                      Responsibilities &amp; Learning Outcomes:
                    </span>
                    <div className="space-y-2">
                      {responsibilities.map((r, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#B8B8B8] font-body">
                          <CheckCircle2 size={13} className="text-[#BFC3C7] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Status */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#888888]">
                    Role Status: <strong className="text-[#BFC3C7]">Completed &amp; Verified</strong>
                  </span>
                </div>

              </AnimatedBorderCard>

              {/* RIGHT: Verified Certificate Inner Card (5 cols) */}
              <AnimatedBorderCard className="lg:col-span-4 p-4 sm:p-5 flex flex-col justify-between min-w-0">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono text-[#888888]">Internship Credential</span>
                    <span className="text-[11px] font-mono text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)] font-semibold flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BFC3C7]" />
                      Verified Completion
                    </span>
                  </div>

                  {/* Thumbnail: Simple black screen with text "Intern Certificate" */}
                  <div
                    onClick={() => setShowCertModal(true)}
                    className="relative w-full max-w-[240px] h-[130px] mx-auto my-3 rounded-xl overflow-hidden border border-white/15 group/cert bg-[#000000] shadow-[0_12px_30px_rgba(0,0,0,0.35)] cursor-pointer flex flex-col items-center justify-center p-4 text-center transition-all duration-200 hover:border-white/30"
                    title="Click to view full certificate"
                  >
                    <Award size={26} className="text-[#BFC3C7] mb-2 group-hover/cert:scale-110 transition-transform duration-200" />
                    <span className="font-mono text-xs font-bold text-[#F2F2F2] tracking-wide">
                      Intern Certificate
                    </span>
                    <span className="text-[10px] font-mono text-[#A3A3A3] mt-1">
                      Click to view full certificate
                    </span>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-xs text-white font-mono backdrop-blur-[2px]">
                      <ZoomIn size={16} className="text-[#BFC3C7]" />
                      <span>View Full Certificate</span>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 text-[11px] font-mono text-[#A0A0A0] text-center leading-relaxed">
                    <p>
                      Certificate of completion awarded for successfully completing the{" "}
                      <span className="text-[#D8D8D8]">Frontend Developer Internship</span>{" "}
                      at <span className="text-[#D8D8D8]">Advanced Infotech</span>, Nagpur,
                      gaining practical experience in frontend development and responsive web projects.
                    </p>

                    <p className="text-[10px] text-[#888888] pt-1">
                      Awarded by <span className="text-[#D8D8D8]">Jayant Pohane</span> (Founder) • Mentored by{" "}
                      <span className="text-[#D8D8D8]">Amol Patelpaik</span>
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setShowCertModal(true)}
                    className="btn-primary w-full py-2.5 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(191,195,199,0.3)] transition-all !text-black"
                  >
                    <Award size={16} className="!text-black !stroke-black stroke-[2.4]" />
                    <span className="!text-black font-bold">View Full Certificate</span>
                  </button>
                </div>
              </AnimatedBorderCard>

            </div>

          </div>
        </ScrollReveal>

      </div>

      {/* Certificate Modal rendered via createPortal so it escapes any transform/overflow restrictions */}
      {showCertModal && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5"
          onClick={() => setShowCertModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Internship certificate"
        >
          <div
            className="card-outer max-w-4xl w-full max-h-[92vh] p-4 sm:p-6 relative shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/15 shrink-0 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <Award size={18} className="text-[#BFC3C7] shrink-0" />
                <h4 className="font-display font-bold text-[#F2F2F2] text-sm sm:text-base truncate">
                  Frontend Developer Internship Certificate
                </h4>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={certificateImage}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1.5 rounded-lg text-[#888888] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-180 flex items-center gap-1.5 text-xs font-mono"
                  title="Open full resolution in new tab"
                >
                  <ExternalLink size={14} />
                  <span className="hidden sm:inline">Open in Tab</span>
                </a>
                <button
                  onClick={() => setShowCertModal(false)}
                  className="p-1.5 rounded-lg text-[#888888] hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-colors duration-180 cursor-pointer"
                  aria-label="Close certificate modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Certificate Readable Display Container */}
            <div className="flex-1 min-h-0 overflow-auto flex items-center justify-center bg-[#0a0a0a] rounded-xl border border-white/10 p-2 sm:p-4">
              <img
                src={certificateImage}
                alt="Internship Certificate - Advanced Infotech"
                className="max-w-full max-h-[72vh] w-auto h-auto object-contain rounded-lg border border-white/10 shadow-2xl"
              />
            </div>

            {/* Modal Footer Caption */}
            <div className="pt-3 mt-1 flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-[#888888] font-mono shrink-0 gap-2">
              <span className="text-[#A0A0A0]">
                Advanced Computer Infotech • Duration: 2 Months • Nagpur, Maharashtra
              </span>
              <span className="text-[#777777]">
                Click backdrop or press Esc to close
              </span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}



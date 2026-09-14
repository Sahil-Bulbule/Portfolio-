import { GraduationCap, Award, Calendar, CheckCircle2, MapPin, Trophy } from "lucide-react";
import AnimatedBorderCard from "./AnimatedBorderCard";
import ScrollReveal from "./ScrollReveal";

const educationMilestones = [
  {
    id: "01",
    qualification: "B.Tech in Computer Technology",
    institution: "Yeshwantrao Chavan College of Engineering (YCCE)",
    location: "Nagpur, MH, India",
    year: "2025 - Present",
    status: "Currently Pursuing",
    badge: "Undergraduate Degree",
    achievement: "Currently pursuing B.Tech in Computer Technology with a focus on AI/ML, software development, and modern web technologies.",
    highlights: [
      "Advanced Data Structures & Algorithmic Problem Solving",
      "Database Management Systems & Distributed Architectures",
      "AI/ML Engineering, Neural Networks & Generative AI",
    ],
  },
  {
    id: "02",
    qualification: "Diploma in Computer Engineering",
    institution: "Priyadarshini Polytechnic",
    location: "Nagpur, MH, India",
    year: "2022 - 2025",
    status: "Completed (86.23%)",
    badge: "Diploma Holder",
    achievement:
      "Graduated with an 86.23% aggregate and secured 2nd Rank in theinstitution. Also recognized for the Best Final-Year Project.",
    highlights: [
      "Overall Diploma :- 86.23% Aggregate",
      "Best Final Year Engineering Project Achievement - Institutional 2nd Rank",
      "Strong Foundation in C, C++, Java & Web Development",
    ],
  },
  {
    id: "03",
    qualification: "Secondary School Certificate (10th)",
    institution: "CSI High School",
    location: "Wardha, MH, India",
    year: "2022",
    status: "Completed (79.80%)",
    badge: "First Class Distinction",
    achievement:
      "Completed secondary education with a strong foundation in mathematics, science, communication, and analytical problem-solving.",
    highlights: [
      "79.80% Final Aggregate Score",
      "Strong foundation in Analytical Mathematics and Physical Sciences",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-14 sm:py-18 overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BFC3C7] mb-3 bg-white/5 border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <span>Academic Journey</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#F2F2F2] tracking-tight leading-snug">
              Academic Background &amp; <br />
              <span className="text-[#BFC3C7]">Engineering Milestones.</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#888888] max-w-lg mx-auto">
              From securing top institutional rank in Polytechnic to pursuing B.Tech CSE at YCCE Nagpur.
            </p>
          </div>
        </ScrollReveal>

        {/* ONE LARGE MAIN EDUCATION CARD */}
        <ScrollReveal direction="up" delay={100}>
          <div className="card-outer p-6 sm:p-8 lg:p-10">

            {/* Large Card Top Bar */}
            <div className="flex flex-wrap items-center justify-between pb-5 mb-8 border-b border-white/15 gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#BFC3C7] shadow-[0_0_8px_rgba(191,195,199,0.5)]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#F2F2F2]">
                  Academic Background &amp; Engineering Milestones
                </h3>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#888888]">
                <span className="px-3 py-1 rounded-full bg-[#252525] border border-white/15 text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)]">
                  Verified Milestones
                </span>
              </div>
            </div>

            {/* Vertical Timeline Layout */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-white/20 space-y-8 my-4 ml-2 sm:ml-4">
              {educationMilestones.map((edu, idx) => (
                <div key={edu.id} className="relative group">

                  {/* White/Grey Timeline Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#000000] border-2 border-white/40 group-hover:border-[#BFC3C7] group-hover:shadow-[0_0_12px_rgba(191,195,199,0.5)] transition-all duration-180 ease-out flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BFC3C7]" />
                  </div>

                  {/* Inner Milestone Card */}
                  <AnimatedBorderCard className="p-5 sm:p-6">
                    {/* Top Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
                        <span className="text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)] font-bold">MILESTONE 0{idx + 1}</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} className="text-[#888888]" />
                          {edu.year}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-[#252525] border border-white/15 text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)] font-semibold">
                        {edu.badge}
                      </span>
                    </div>

                    {/* Qualification & Institution */}
                    <h4 className="font-display text-lg sm:text-xl font-bold text-[#F2F2F2] group-hover:text-[#BFC3C7] transition-colors duration-180 ease-out">
                      {edu.qualification}
                    </h4>
                    <p className="text-xs sm:text-sm font-mono text-[#B8B8B8] mt-1 flex items-center gap-2">
                      <span className="text-[#BFC3C7]">{edu.institution}</span>
                      <span className="text-[#444444]">|</span>
                      <span className="flex items-center gap-1 text-[#888888] text-xs">
                        <MapPin size={12} className="text-[#888888]" />
                        {edu.location}
                      </span>
                    </p>

                    {/* Achievement Highlight Banner */}
                    {edu.achievement && (
                      <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/15 flex items-start gap-2.5 text-xs text-[#B8B8B8]">
                        <Trophy size={16} className="text-[#BFC3C7] shrink-0 mt-0.5" />
                        <p className="leading-relaxed">
                          <strong className="text-[#BFC3C7] font-semibold">Achievement:</strong>{" "}
                          {edu.achievement}
                        </p>
                      </div>
                    )}

                    {/* Highlights */}
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <span className="text-[10px] font-mono text-[#BFC3C7] uppercase tracking-wider block mb-2">
                        Academic Highlights &amp; Core Curriculum:
                      </span>
                      <div className="space-y-1.5">
                        {edu.highlights.map((h) => (
                          <div
                            key={h}
                            className="flex items-center gap-2 text-xs font-mono text-[#B8B8B8]"
                          >
                            <CheckCircle2 size={12} className="text-[#BFC3C7] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Status Footer */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-[#888888] text-[11px]">CREDENTIAL STATUS</span>
                      <span className="text-[#BFC3C7] font-semibold">{edu.status}</span>
                    </div>

                  </AnimatedBorderCard>

                </div>
              ))}
            </div>

            {/* Quick Metrics Bar at Bottom */}
            <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AnimatedBorderCard className="p-4 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/15 text-[#BFC3C7]">
                  <Trophy size={20} />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-[#BFC3C7]">2nd Rank Holder</p>
                  <p className="text-[11px] font-mono text-[#888888]">Final Year Major Project</p>
                </div>
              </AnimatedBorderCard>

              <AnimatedBorderCard className="p-4 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/15 text-[#BFC3C7]">
                  <Award size={20} />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-[#BFC3C7]">86.23% Score</p>
                  <p className="text-[11px] font-mono text-[#888888]">Diploma in C-Tech</p>
                </div>
              </AnimatedBorderCard>

              <AnimatedBorderCard className="p-4 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/15 text-[#BFC3C7]">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-[#BFC3C7]">B.Tech C-Tech</p>
                  <p className="text-[11px] font-mono text-[#888888]">YCCE Nagpur (Pursuing)</p>
                </div>
              </AnimatedBorderCard>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}



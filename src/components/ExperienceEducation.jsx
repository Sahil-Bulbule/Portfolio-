import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";

const experienceData = [
  {
    id: "internship-01",
    type: "Work Experience",
    role: "Frontend Developer Intern",
    company: "Advanced Computer Infotech",
    location: "Nagpur, MH, India",
    period: "2024",
    highlights: [
      "Designed and developed responsive UI web interfaces using HTML, CSS, and JavaScript.",
      "Engineered 'Focus Flow' - a study planning and task management web application.",
      "Optimized cross-browser rendering and performance across mobile and desktop devices.",
      "Collaborated with dev teams on frontend feature implementation and layout fixes.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "UI UX Design", "Task Management"],
    certificateImage: "/images/internship-cert.png",
    accent: "#BFC3C7",
  },
];

const educationData = [
  {
    id: "edu-01",
    degree: "B.Tech in Computer Engineering",
    institution: "Yeshwantrao Chavan College of Engineering (YCCE)",
    location: "Nagpur, MH",
    period: "Present",
    status: "Pursuing",
    details: "Focusing on Software Engineering, Data Structures, Web Architectures, and AI/ML.",
    accent: "#BFC3C7",
  },
  {
    id: "edu-02",
    degree: "Diploma in Computer Engineering",
    institution: "Priyadarshini Polytechnic",
    location: "Nagpur, MH",
    period: "Completed",
    achievement: "2nd Rank Holder - Final Year (86.23%)",
    status: "86.23%",
    details: "Specialized in Computer Engineering fundamentals, C++, Java, Database Management, and Web Development.",
    accent: "#BFC3C7",
  },
  {
    id: "edu-03",
    degree: "High School (10th)",
    institution: "Secondary State Board",
    location: "Nagpur, MH",
    period: "Completed",
    status: "79.80%",
    details: "Solid foundation in Mathematics, Science, and Logical Problem Solving.",
    accent: "#BFC3C7",
  },
];

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState("all");
  const [showCertModal, setShowCertModal] = useState(false);

  return (
    <section id="experience" className="relative py-16 sm:py-20 lg:py-28 bg-ink overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] rounded-full bg-[#1C1C1C] blur-[100px] lg:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[75vw] h-[75vw] max-w-[450px] max-h-[450px] rounded-full bg-electric/10 blur-[100px] lg:blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BFC3C7] mb-3"
          >
            <Briefcase size={14} />
            <span>04. Experience & Academics</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Real-World Impact & <br />
            <span className="bg-gradient-to-r from-[#BFC3C7] via-[#BFC3C7] to-[#F2F2F2] bg-clip-text text-transparent">
              Academic Milestones.
            </span>
          </motion.h2>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="glass w-full sm:w-auto p-1.5 rounded-2xl sm:rounded-full border border-white/12 flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex-1 sm:flex-none px-3 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs font-medium transition-all ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-[#BFC3C7] to-[#BFC3C7] text-ink font-semibold shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex-1 sm:flex-none justify-center px-3 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === "experience"
                  ? "bg-gradient-to-r from-[#BFC3C7] to-[#BFC3C7] text-ink font-semibold shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Briefcase size={14} /> Work Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex-1 sm:flex-none justify-center px-3 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === "education"
                  ? "bg-gradient-to-r from-[#BFC3C7] to-[#BFC3C7] text-ink font-semibold shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <GraduationCap size={14} /> Education
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Timeline List Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Work Internship Section */}
            {(activeTab === "all" || activeTab === "experience") && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#BFC3C7] uppercase tracking-wider">
                  <Briefcase size={14} />
                  <span>Work Experience & Internship</span>
                </div>

                {experienceData.map((exp) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-3xl p-6 sm:p-8 border border-white/15 relative overflow-hidden shadow-xl hover:border-white/40 transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="text-xs font-mono text-[#BFC3C7] font-semibold uppercase tracking-wide">
                          {exp.company}
                        </span>
                        <h3 className="font-display text-2xl font-bold text-white mt-0.5">
                          {exp.role}
                        </h3>
                        <span className="text-xs text-white/40">{exp.location}</span>
                      </div>

                      <span className="glass border border-white/30 text-[#BFC3C7] px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold flex items-center gap-1.5">
                        <Calendar size={12} /> {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-white/75 font-body mb-6">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#BFC3C7] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full glass border border-white/10 text-white/70">
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setShowCertModal(true)}
                        className="text-xs font-mono text-[#BFC3C7] hover:underline flex items-center gap-1 font-semibold"
                      >
                        <Sparkles size={13} /> View Certificate
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Academic Education Section */}
            {(activeTab === "all" || activeTab === "education") && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#BFC3C7] uppercase tracking-wider">
                  <GraduationCap size={14} />
                  <span>Academic Journey</span>
                </div>

                <div className="space-y-6">
                  {educationData.map((edu) => (
                    <motion.div
                      key={edu.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="glass rounded-3xl p-6 border border-white/15 relative overflow-hidden shadow-xl hover:border-white/40 transition-all"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <div>
                          <h4 className="font-display text-xl font-bold text-white">
                            {edu.degree}
                          </h4>
                          <p className="text-xs text-white/60 font-medium">
                            {edu.institution} - {edu.location}
                          </p>
                        </div>

                        <span className="glass border border-white/15 px-3 py-1 rounded-full text-xs font-mono text-[#BFC3C7] font-semibold">
                          {edu.status}
                        </span>
                      </div>

                      {edu.achievement && (
                        <div className="my-3 glass border border-white/40 p-3 rounded-xl bg-[#1C1C1C] text-[#BFC3C7] text-xs font-bold font-mono flex items-center gap-2">
                          <Award size={16} />
                          <span>{edu.achievement}</span>
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-white/60 font-body">
                        {edu.details}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Experience Graphic Card Column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl border border-white/15 p-6 shadow-2xl relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-white/50">Internship Showcase</span>
                <span className="text-xs font-mono text-[#BFC3C7] font-bold">Advanced Computer Infotech</span>
              </div>

              <div
                className="relative rounded-2xl overflow-hidden cursor-pointer border border-white/15 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                onClick={() => setShowCertModal(true)}
              >
                <img
                  src="/images/internship-cert.png"
                  alt="Internship Achievement Certificate Showcase"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-mono text-white gap-2 font-bold">
                  <Sparkles size={16} className="text-[#BFC3C7]" />
                  <span>Click to Expand Certificate</span>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-xs text-white/70">
                <div className="flex items-center justify-between p-3 rounded-xl glass border border-white/10 font-mono">
                  <span>Featured Internship Project</span>
                  <span className="text-[#BFC3C7] font-bold">Focus Flow</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl glass border border-white/10 font-mono">
                  <span>Polytechnic Rank</span>
                  <span className="text-[#BFC3C7] font-bold">2nd Rank (86.23%)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCertModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowCertModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass border border-white/20 rounded-3xl p-6 max-w-2xl w-full relative shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-white text-lg flex items-center gap-2">
                  <Award className="text-[#BFC3C7]" size={20} /> Frontend Developer Internship Certificate
                </h3>
                <button
                  onClick={() => setShowCertModal(false)}
                  className="text-white/40 hover:text-white p-1 rounded-full glass"
                >
                  Close
                </button>
              </div>

              <img
                src="/images/internship-cert.png"
                alt="Internship Certificate"
                className="w-full rounded-2xl border border-white/15 shadow-2xl"
              />

              <p className="text-xs text-white/60 mt-4 text-center font-mono">
                Issued by Advanced Computer Infotech - Frontend Developer Intern Role
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}



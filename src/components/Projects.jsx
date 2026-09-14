import { useState, useEffect } from "react";
import { ExternalLink, Layers, Sparkles, X, CheckCircle2, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";
import AnimatedBorderCard from "./AnimatedBorderCard";
import ScrollReveal from "./ScrollReveal";

const categories = ["All", "Machine Learning", "Deep Learning", "Full Stack & Web"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
        (p) =>
          p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
          p.tech.some((t) => t.toLowerCase().includes(activeCategory.toLowerCase()))
      );

  return (
    <section id="projects" className="relative py-14 sm:py-18 overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BFC3C7] mb-3 bg-white/5 border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)]">Production Work &amp; Creations</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#F2F2F2] tracking-tight leading-snug">
              Featured Projects &amp; <br />
              <span className="text-[#BFC3C7]">Engineering Showcases.</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#888888] max-w-lg mx-auto">
              Practical full-stack web platforms, machine learning engines, and developer utilities.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal direction="up" delay={80}>
          <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-180 ease-out cursor-pointer ${isActive
                      ? "bg-[#BFC3C7] text-[#000000] border border-[#BFC3C7] font-semibold shadow-[0_2px_12px_rgba(191,195,199,0.25)]"
                      : "bg-[#202020] text-[#888888] hover:text-[#F2F2F2] border border-white/10 hover:border-white/30"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ONE LARGE "FEATURED PROJECTS" CARD */}
        <ScrollReveal direction="up" delay={160}>
          <div className="card-outer p-6 sm:p-8 lg:p-10">

            {/* Module Header */}
            <div className="flex flex-wrap items-center justify-between pb-5 mb-6 border-b border-white/15 gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#BFC3C7] shadow-[0_0_8px_rgba(191,195,199,0.5)]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#F2F2F2]">
                  Featured Projects Showcase
                </h3>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#888888]">
                <span className="px-3 py-1 rounded-full bg-[#252525] border border-white/15 text-[#BFC3C7]">
                  {filteredProjects.length} Projects Displayed
                </span>
              </div>
            </div>

            {/* Projects Inner Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((p) => (
                <AnimatedBorderCard
                  key={p.id}
                  className="flex flex-col justify-between group overflow-hidden"
                >
                  {/* Image Section */}
                  <div
                    className="relative overflow-hidden cursor-pointer aspect-[16/10] min-h-[210px] bg-[#111111]"
                    onClick={() => setSelectedProject(p)}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-contain object-center transition-transform duration-200 ease-out group-hover:scale-[1.03]"
                    />
                    {/* Dark hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-180 ease-out" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-[#BFC3C7] font-semibold">
                        {p.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-white/15 text-[#888888]">
                      ID #{p.id}
                    </div>

                    {/* Hover Inspect Prompt */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-180 ease-out pointer-events-none">
                      <div className="flex items-center gap-1.5 bg-[#BFC3C7] text-[#000000] text-xs font-mono px-3 py-1 rounded-full border border-white/40 shadow-lg font-semibold">
                        <Sparkles size={12} />
                        <span>Inspect Details</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-[#F2F2F2] group-hover:text-[#BFC3C7] transition-colors duration-180 ease-out mb-1">
                        {p.title}
                      </h4>

                      <p className="text-[11px] font-mono text-[#888888] mb-3 line-clamp-1">
                        {p.subtitle}
                      </p>

                      <p className="text-xs text-[#B8B8B8] font-body leading-relaxed mb-4 line-clamp-2">
                        {p.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.tech.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#000000] border border-white/10 text-[#B8B8B8] group-hover:border-white/25 transition-colors duration-180 ease-out"
                          >
                            {t}
                          </span>
                        ))}
                        {p.tech.length > 4 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-[#000000] text-[#BFC3C7]">
                            +{p.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedProject(p)}
                        className="text-[11px] font-mono text-[#BFC3C7] hover:text-[#FFFFFF] flex items-center gap-1 transition-colors duration-180 ease-out cursor-pointer"
                      >
                        <span>Breakdown</span>
                        <ArrowRight size={12} />
                      </button>

                      <div className="flex items-center gap-2">
                        {p.links.github && (
                          <a
                            href={p.links.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View GitHub Repository"
                            className="p-1.5 rounded-lg bg-[#1A1A1A] border border-white/15 text-[#888888] hover:text-[#FFFFFF] hover:border-white/40 hover:scale-105 transition-all duration-180 ease-out"
                          >
                            <FaGithub size={14} />
                          </a>
                        )}
                        {p.links.live && (
                          <a
                            href={p.links.live}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold flex items-center gap-1"
                          >
                            <span>Demo</span>
                            <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>

                </AnimatedBorderCard>
              ))}
            </div>

          </div>
        </ScrollReveal>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="card-outer max-w-2xl w-full p-6 sm:p-7 relative my-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-[#252525] border border-white/20 text-[#888888] hover:text-white transition-colors duration-180 ease-out z-20 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            {/* Modal Image */}
            <div className="rounded-xl overflow-hidden mb-4 border border-white/15 max-h-[260px]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain bg-[#111111]"
              />
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-[#BFC3C7] text-[#000000] text-[11px] font-semibold">
                  {selectedProject.category}
                </span>
                <span className="text-[#888888]">Project #{selectedProject.id}</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F2F2F2]">
                {selectedProject.title}
              </h3>

              <p className="text-[#B8B8B8] text-xs sm:text-sm font-body leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              <div>
                <h4 className="text-[11px] uppercase font-mono tracking-wider text-[#BFC3C7] mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#252525] border border-white/15 text-[#BFC3C7]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-[11px] uppercase font-mono tracking-wider text-[#BFC3C7] mb-2">
                  Key Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((f) => (
                    <div
                      key={f}
                      className="bg-[#252525] p-2.5 rounded-xl flex items-start gap-2 border border-white/10 text-xs text-[#B8B8B8]"
                    >
                      <CheckCircle2 size={13} className="text-[#BFC3C7] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-white/15 flex justify-end gap-2.5">
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary px-4 py-2 rounded-xl text-xs font-mono font-medium flex items-center gap-2"
                  >
                    <FaGithub size={14} /> Repository
                  </a>
                )}
                {selectedProject.links.live && (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary px-4 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2"
                  >
                    Live Demo <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}



import {
  Layout,
  Server,
  Database,
  Cpu,
  Network,
  MessageSquare,
  Sparkles,
  Bot,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { skillCategories } from "../data/skills";
import AnimatedBorderCard from "./AnimatedBorderCard";
import ScrollReveal from "./ScrollReveal";

const iconMap = {
  Layout,
  Server,
  Database,
  Cpu,
  Network,
  MessageSquare,
  Sparkles,
  Bot,
  Code2,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-14 sm:py-18 overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BFC3C7] mb-3 bg-white/5 border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="text-[#A7ADB3] drop-shadow-[0_0_7px_rgba(167,173,179,0.6)]">Core Technical Competencies</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#F2F2F2] tracking-tight leading-snug">
              Technical Skills &amp; <br />
              <span className="text-[#BFC3C7]">Engineering Stack.</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#888888] max-w-lg mx-auto">
              From modern responsive user interfaces to advanced machine learning and multi-agent AI architectures.
            </p>
          </div>
        </ScrollReveal>

        {/* ONE LARGE "TECHNICAL SKILLS" CARD */}
        <ScrollReveal direction="up" delay={100}>
          <div className="card-outer p-6 sm:p-8 lg:p-10">

            {/* Large Card Top Bar */}
            <div className="flex flex-wrap items-center justify-between pb-5 mb-6 border-b border-white/15 gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#BFC3C7] shadow-[0_0_8px_rgba(191,195,199,0.5)]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#F2F2F2]">
                  Technical Skills Module
                </h3>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#888888]">
                <span className="px-3 py-1 rounded-full bg-[#252525] border border-white/15 text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)]">
                  9 Specialized Disciplines
                </span>
              </div>
            </div>

            {/* 9 Inner Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {skillCategories.map((group, idx) => {
                const Icon = iconMap[group.icon] || Code2;
                return (
                  <AnimatedBorderCard
                    key={group.id}
                    className="p-5 flex flex-col justify-between"
                  >
                    <div>
                      {/* Header */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-xl bg-white/5 border border-white/15 text-[#BFC3C7] inner-icon">
                            <Icon size={16} />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-sm text-[#BFC3C7]">
                              {group.title}
                            </h4>
                            <span className="text-[10px] font-mono text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)]">
                              Category 0{idx + 1}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#252525] border border-white/15 text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)] font-semibold">
                          {group.skills.length} skills
                        </span>
                      </div>

                      <p className="text-[11px] text-[#888888] font-body mb-3.5 leading-relaxed">
                        {group.subtitle}
                      </p>

                      {/* Skills Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="group/skill flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#000000] border border-white/10 hover:border-white/30 hover:bg-[#252525] transition-all duration-180 ease-out cursor-default"
                          >
                            <CheckCircle2
                              size={11}
                              className="text-[#888888] group-hover/skill:text-[#BFC3C7] transition-colors shrink-0"
                            />
                            <span className="text-[11px] font-mono text-[#B8B8B8] group-hover/skill:text-[#BFC3C7] transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#888888]">
                      <span>STATUS</span>
                      <span className="text-[#BFC3C7]">PRODUCTION READY</span>
                    </div>
                  </AnimatedBorderCard>
                );
              })}
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}



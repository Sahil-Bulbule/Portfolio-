import { User, Compass, Layers, Target, Flag, Brain } from "lucide-react";
import AnimatedBorderCard from "./AnimatedBorderCard";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const cards = [
    {
      id: "who-i-am",
      title: "Who I Am",
      icon: User,
      badge: <span className="text-[#A7ADB3] drop-shadow-[0_0_7px_rgba(167,173,179,0.6)]">Identity</span>,
      content: (
        <>
          I am <span className="text-[#BFC3C7] font-semibold">Sahil Bulbule</span>, a Computer Technology student at{" "}
<span className="text-[#BFC3C7] font-medium">Yashwantrao Chavan College of Engineering (YCCE), Nagpur</span>.
Passionate about <span className="text-[#BFC3C7] font-semibold">AI/ML, Generative AI, and Python Full Stack Development</span>,
I enjoy building practical software solutions and exploring intelligent technologies.
        </>
      ),
    },
    {
      id: "engineering-journey",
      title: "My Engineering Journey",
      icon: Compass,
      badge: <span className="text-[#A7ADB3] drop-shadow-[0_0_7px_rgba(167,173,179,0.6)]">Progression</span>,
      content: (
        <>
        My journey started with a <span className="text-[#BFC3C7] font-semibold">Diploma in Computer Technology</span> at{" "} <span className="text-[#BFC3C7] font-medium">Priyadarshini Polytechnic, Nagpur</span>, where I secured{" "} <span className="text-[#BFC3C7] font-semibold">86.23% and 2nd Rank in my final-year project</span>. I then gained industry exposure through a <span className="text-[#BFC3C7] font-semibold">2-month Frontend Developer Internship</span>, and now continue expanding my skills across Python, AI/ML, and software development.
        </>
      ),
    },
    {
      id: "what-i-build",
      title: "What I Build",
      icon: Layers,
      badge: <span className="text-[#A7ADB3] drop-shadow-[0_0_7px_rgba(167,173,179,0.6)]">Craft</span>,
      content: (
        <>
          I build responsive applications using <span className="text-[#BFC3C7] font-semibold">React.js, HTML, CSS, and JavaScript</span>, along with backend applications using <span className="text-[#BFC3C7] font-semibold">Python, Flask, and Django</span>. I also work with <span className="text-[#BFC3C7] font-semibold">MongoDB, SQL, and Firebase</span>, focusing on clean code, practical functionality, and smooth user experiences.
        </>
      ),
    },
    {
      id: "current-focus",
      title: "My Current Focus",
      icon: Target,
      badge: <span className="text-[#A7ADB3] drop-shadow-[0_0_7px_rgba(167,173,179,0.6)]">Active</span>,
      content: (
        <>
          My current focus is on <span className="text-[#BFC3C7] font-semibold">Machine Learning, Deep Learning, NLP, Generative AI, RAG, and Agentic AI</span>. I am exploring tools and frameworks such as <span className="text-[#BFC3C7] font-semibold">LangChain and LangGraph</span>, while continuously strengthening my <span className="text-[#BFC3C7] font-semibold">Data Structures & Algorithms</span> and problem-solving skills.
        </>
      ),
    },
    {
      id: "future-goals",
      title: "Future Goals",
      icon: Flag,
      badge: <span className="text-[#A7ADB3] drop-shadow-[0_0_7px_rgba(167,173,179,0.6)]">Vision</span>,
      content: (
        <>
         My goal is to grow into an <span className="text-[#BFC3C7] font-semibold">AI/ML Engineer</span> with strong full-stack development skills. I want to combine <span className="text-[#BFC3C7] font-semibold">AI engineering and software development</span> to create intelligent, reliable, and practical applications that solve real-world problems.
        </>
      ),
    },
    {
      id: "problem-solving",
      title: "Problem Solving",
      icon: Brain,
      badge: <span className="text-[#A7ADB3]">Active</span>,
      content: (
        <>
          I continuously strengthen my <span className="text-[#D8D8D8] font-semibold">Data Structures &amp; Algorithms</span>, problem-solving, and coding skills through regular practice and <span className="text-[#D8D8D8] font-semibold">LeetCode</span> challenges, with a focus on writing efficient and scalable solutions.
        </>
      ),
    },
  ];

  return (
    <section id="about" className="relative py-14 sm:py-18 overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BFC3C7] mb-3 bg-white/5 border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="text-[#A7ADB3] drop-shadow-[0_0_7px_rgba(167,173,179,0.6)]">About Us &amp; Engineering Philosophy</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#F2F2F2] tracking-tight leading-snug">
              Driven by Curiosity. <br />
              <span className="text-[#BFC3C7]">Engineered with Precision.</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#888888] max-w-lg mx-auto">
              A comprehensive perspective on my technical ethos, background, and technological roadmap.
            </p>
          </div>
        </ScrollReveal>

        {/* ONE LARGE MAIN ABOUT CARD */}
        <ScrollReveal direction="up" delay={100}>
          <div className="card-outer p-6 sm:p-8 lg:p-10">
            {/* Card Module Header */}
            <div className="flex flex-wrap items-center justify-between pb-5 mb-6 border-b border-white/15 gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#BFC3C7] shadow-[0_0_8px_rgba(191,195,199,0.5)]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#F2F2F2]">
                  Comprehensive Engineering Profile
                </h3>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#888888]">
                <span className="px-2.5 py-1 rounded-full bg-[#252525] border border-white/15 text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)]">
                  6 Core Dimensions
                </span>
              </div>
            </div>

            {/* Nested Inner Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <AnimatedBorderCard
                    key={card.id}
                    className="p-5 sm:p-6 flex flex-col justify-between"
                    style={{ transitionDelay: `${idx * 90}ms` }}
                  >
                    <div>
                      {/* Inner Card Top Row */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/15 text-[#BFC3C7] inner-icon">
                          <Icon size={18} />
                        </div>
                        <span className="text-[10px] font-mono font-medium uppercase px-2.5 py-0.5 rounded-full bg-[#252525] border border-white/15 text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)]">
                          {card.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h4
  className="font-display font-bold text-base mb-2.5 tracking-tight"
  style={{
  color: "#F0F0F0",
  textShadow: "0 0 6px rgba(255,255,255,0.22)"
}}
>
  {card.title}
</h4>

                      {/* Body Content */}
                      <p className="text-xs sm:text-[13px] leading-relaxed text-[#B8B8B8] font-body">
                        {card.content}
                      </p>
                    </div>

                    {/* Inner Card Footer Indicator */}
                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#888888]">
                      <span>DIMENSION 0{idx + 1}</span>
                      <span className="text-[#D0D0D0]">{idx === 5 ? "ACTIVE" : "VERIFIED"}</span>
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



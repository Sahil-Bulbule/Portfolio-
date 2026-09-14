import { useEffect, useRef, useState } from "react";
import {
  Terminal,
  Play,
  Pause,
  ExternalLink,
  Code2,
  Flame,
  Music2,
  Volume2,
  VolumeX,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const track = {
  title: "Focus & Coding Lofi",
  artist: "Study Session",
  source: "/images/Songs/Study.mp3",
};

const openSourceRepos = [
  {
    name: "AI / ML SYSTEMS",
    lang: "Python",
    stars: "ML",
    forks: "AI",
    desc: "Machine learning and deep learning systems built for real-world prediction, analytics, and intelligent automation.",
  },
  {
    name: "FULL STACK LAB",
    lang: "Web",
    stars: "WEB",
    forks: "APP",
    desc: "Modern web applications combining responsive interfaces, Python backends, databases, and scalable architecture.",
  },
  {
    name: "PROBLEM SOLVING",
    lang: "DSA",
    stars: "DSA",
    forks: "JAVA",
    desc: "Continuous practice in data structures, algorithms, logical problem solving, and efficient coding solutions.",
  },
];

const codeSnippets = {
  llm: {
    title: "llm_rag_pipeline.py",
    code: `from langchain_openai import ChatOpenAI
from langchain.chains import RetrievalQA

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
qa_chain = RetrievalQA.from_chain_type(llm=llm)
response = qa_chain.invoke({"query": user_question})`,
  },
  rag: {
    title: "rag_pipeline.py",
    code: `from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain.chains import RetrievalQA

def initialize_rag():
    embeddings = OpenAIEmbeddings()
    vector_db = Chroma(persist_directory="./db", embedding_function=embeddings)
    retriever = vector_db.as_retriever(search_kwargs={"k": 3})
    return RetrievalQA.from_chain_type(llm, retriever=retriever)`,
  },
};

const dsaTopics = [
  { topic: "Data Structures", details: "Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Graphs, Hashing" },
  { topic: "Algorithms", details: "Binary Search, Two Pointers, Sliding Window, DFS/BFS, Dynamic Programming" },
  { topic: "LeetCode & Problem Solving", details: "Solving Easy, Medium & Hard problems with a focus on logic and optimization" },
  { topic: "Interview Preparation", details: "System design basics, time-space complexity, problem-solving and technical interview preparation" },
];

/* Heatmap intensity 0-4 */
function makeHeatmap() {
  return Array.from({ length: 28 * 4 }, (_, i) => {
    const v = (i * 37 + 11) % 10;
    if (v < 3) return 0;
    if (v < 5) return 1;
    if (v < 7) return 2;
    if (v < 9) return 3;
    return 4;
  });
}
const heatData = makeHeatmap();
const heatClass = ["heat-0", "heat-1", "heat-2", "heat-3", "heat-4"];

function runCommand(cmd) {
  switch (cmd.trim().toLowerCase()) {
    case "help":
      return {
        type: "output",
        text: `Available Commands

about        -> Professional overview
skills       -> Technical skills & expertise
projects     -> Featured projects
education    -> Academic background
experience   -> Internship experience
dsa          -> DSA & problem-solving journey
contact      -> Connect with me
resume       -> View resume information
clear        -> Clear terminal`,
      };
    case "about":
      return {
        type: "output",
        text: `Sahil Bulbule

AI/ML Engineer and Python Full Stack Developer focused on
building intelligent, scalable and user-centric applications.

Areas of Expertise:
AI/ML | Deep Learning | NLP | Generative AI | LLMs | RAG
Agentic AI | Python | Flask | Django | React.js`,
      };
    case "skills":
      return {
        type: "output",
        text: `Skills

AI/ML        : Machine Learning, Deep Learning, NLP
GenAI        : LLMs, RAG, LangChain, LangGraph
Backend      : Python, Flask, Django
Frontend     : HTML, CSS, JavaScript, React.js
Database     : MongoDB, Firebase, SQL
Languages    : Python, Java, C++, JavaScript`,
      };
    case "dsa":
      return {
        type: "output",
        text: `DSA & Problem Solving

      Currently strengthening problem-solving skills through
      Data Structures, Algorithms and LeetCode practice.

      Focus Areas:
      Arrays | Strings | Hashing | Two Pointers | Sliding Window
      Binary Search | Stack & Queue | Linked List | Trees | Graphs | Dynamic Programming

      Goal: Strong problem-solving & interview preparation`,
      };
    case "projects":
      return {
        type: "output",
        text: `Featured Projects

    01. RetainIQ
      Employee Attrition & Retention Analytics Platform

    02. Neo-Inspect
      CNN-Based Industrial Surface Defect Detection

    03. Intrusion X
      AI-Based Network Intrusion Detection System

    04. Cancer Risk Prediction
      Machine Learning Healthcare Analytics

    05. Heart Disease Risk Predictor
      ML-Based Cardiovascular Risk Assessment

    06. Expense Tracker
      React + Firebase Financial Management Application

    07. Study Planner
      Study Scheduling & Productivity Application`,
      };
    case "education":
      return {
        type: "output",
        text: `Education

B.Tech - YCCE, Nagpur
Computer Technology
Second Year | 8 CGPA

Diploma - Priyadarshini Polytechnic, Nagpur
Computer Engineering
86.23% | Final Year Project - 2nd Rank

SSC - CSI, Wardha
79.80%`,
      };
    case "experience":
      return {
        type: "output",
        text: `Frontend Developer Intern
Advanced Infotech, Nagpur

Duration: 2 Months

Worked on responsive web interfaces and interactive
frontend applications using HTML, CSS and JavaScript.

Developed features for Study Planner and Expense Tracker
applications with a focus on usability and responsive design.`,
      };
    case "contact":
      return {
        type: "output",
        text: `Let's Connect

GitHub    : Sahil-Bulbule
LinkedIn  : Sahil Bulbule
Email     : sahilbulbule16@gmail.com
Portfolio : Personal Website`,
      };
    case "resume":
      return {
        type: "output",
        text: `Resume

AI/ML Engineer and Python Full Stack Developer

Specialized in:
AI/ML | Deep Learning | NLP | Generative AI
LLMs | RAG | Agentic AI | Python Full Stack

Use the Resume button to view the complete profile.`,
      };
    case "clear":
      return { type: "sys", text: "Terminal cleared successfully.\n\nType 'help' to explore the available commands." };
    default:
      return { type: "error", text: `Command not found: '${cmd}'. Type 'help' for options.` };
  }
}

export default function BentoDeveloperHub() {
  const [termInput, setTermInput] = useState("");
  const [termHistory, setTermHistory] = useState([
    { type: "sys", text: "Welcome to Sahil's Developer Terminal" },
    { type: "sys", text: "AI/ML Engineer | Python Full Stack Developer" },
    { type: "sys", text: "Type 'help' to explore my skills, projects, experience and DSA journey." },
  ]);
  const termContainerRef = useRef(null);

  const [activeSnippetTab, setActiveSnippetTab] = useState("rag");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioStatus, setAudioStatus] = useState("idle");
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (termContainerRef.current) {
      termContainerRef.current.scrollTop = termContainerRef.current.scrollHeight;
    }
  }, [termHistory]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.75;
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const togglePlayback = async () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      setAudioStatus("loading");
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setAudioStatus("ready");
      } catch {
        setIsPlaying(false);
        setAudioStatus("unavailable");
      }
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) return "00:00";
    return `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
  };

  const submitCommand = (e) => {
    e.preventDefault();
    const raw = termInput.trim();
    if (!raw) return;
    const entry = { type: "cmd", text: `sahil@dev:~$ ${termInput}` };
    const result = runCommand(raw);
    if (raw.toLowerCase() === "clear") {
      setTermHistory([runCommand(raw)]);
    } else {
      setTermHistory((h) => [...h, entry, result]);
    }
    setTermInput("");
  };

  return (
    <section id="developer-hub" className="relative py-14 sm:py-18 overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BFC3C7] mb-3 bg-transparent border-transparent px-0 py-0 shadow-none">
            <span>Personal Workspace</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-snug">
            Developer Hub &amp; <br />
            <span className="text-[#BFC3C7]">Engineering Playground.</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#858585] max-w-lg mx-auto">
            An interactive developer command center featuring terminal commands, DSA journey, GitHub telemetry, and AI experiments.
          </p>
        </div>

        {/* ONE LARGE MAIN CARD */}
        <div className="card-outer p-6 sm:p-8 lg:p-10 space-y-6">

          {/* Module Header */}
          <div className="flex flex-wrap items-center justify-between bg-transparent pb-4 border-b border-[#303030] gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8C8C8] shadow-[0_0_8px_rgba(200,200,200,0.16)]" />
              <h3 className="font-display font-bold text-base sm:text-lg text-white hover:text-[#BFC3C7] transition-colors duration-180 ease-out">
                Developer Workspace &amp; Lab
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#1C1C1C] border border-white/15 text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)] text-xs font-mono">
              Interactive Environment
            </span>
          </div>

          {/* ROW 1: Terminal CLI + DSA Journey */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

            {/* Interactive Terminal */}
            <div className="card-inner flex flex-col overflow-hidden min-w-0">
              {/* Terminal Window Header */}
              <div className="px-4 py-2.5 bg-[#1A1A1A] border-b border-[#303030] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#C8C8C8] opacity-80" />
                  <span className="w-3 h-3 rounded-full bg-[#909090] opacity-70" />
                  <span className="w-3 h-3 rounded-full bg-[#686868] opacity-70" />
                  <span className="ml-2 font-mono text-xs text-[#A3A3A3]">
                    sahil_terminal - bash
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)] bg-[#222222] border border-white/15 px-2 py-0.5 rounded-full">
                  ONLINE
                </span>
              </div>

              {/* Terminal Output */}
              <div
                ref={termContainerRef}
                className="flex-1 p-4 font-mono text-xs text-[#D0D0D0] min-h-[220px] max-h-[260px] overflow-y-auto space-y-1.5 leading-relaxed bg-[#141414]"
              >
                {termHistory.map((item, idx) => (
                  <div
                    key={idx}
                    className={
                      item.type === "cmd"
                        ? "text-[#BFC3C7] font-bold"
                        : item.type === "sys"
                          ? "text-[#A3A3A3]"
                          : item.type === "error"
                            ? "text-[#BFC3C7] whitespace-pre-wrap"
                            : "text-[#D0D0D0] whitespace-pre-wrap"
                    }
                  >
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Terminal Input */}
              <form onSubmit={submitCommand} className="relative border-t border-[#303030] bg-[#1A1A1A]">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-[#BFC3C7] font-bold select-none">
                  sahil@hub:~$
                </span>
                <input
                  type="text"
                  value={termInput}
                  onChange={(e) => setTermInput(e.target.value)}
                  placeholder="Type 'help' to explore..."
                  className="w-full bg-transparent pl-[116px] pr-4 py-3 text-xs font-mono text-white outline-none placeholder-[#858585]"
                />
              </form>
            </div>

            {/* DSA & LeetCode Journey Card */}
            <div className="card-inner p-5 sm:p-6 flex flex-col justify-between min-w-0">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#303030] mb-4">
                  <div className="flex items-center gap-2">
                    <Flame size={18} className="text-[#D0D0D0]" />
                    <h4 className="font-display font-bold text-sm sm:text-base text-white">
                      DSA &amp; LeetCode Journey
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1C1C1C] border border-white/15 text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)]">
                    ACTIVE GRIND
                  </span>
                </div>

                <p className="text-xs text-[#D0D0D0] font-body leading-relaxed mb-4">
                  Focused daily practice on <span className="text-[#BFC3C7] font-semibold">Data Structures &amp; Algorithms</span>,
                  algorithmic efficiency, and technical interview preparation.
                </p>

                <div className="space-y-2.5 mb-4">
                  {dsaTopics.map((item) => (
                    <div
                      key={item.topic}
                      className="developer-sub-card p-2.5 rounded-xl"
                    >
                      <div className="flex items-center justify-between text-xs font-mono mb-1">
                        <span className="text-[#BFC3C7] font-semibold">{item.topic}</span>
                        <span className="text-[10px] text-[#858585]">Core</span>
                      </div>
                      <p className="text-[11px] text-[#858585] leading-snug">
                        {item.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#303030] flex items-center justify-between text-xs font-mono text-[#858585]">
                <span>Target: <span className="text-[#D0D0D0] font-semibold">Technical Mastery</span></span>
                <span className="text-[#BFC3C7] font-semibold">Problem Solving</span>
              </div>
            </div>

          </div>

          {/* ROW 2: GitHub Heatmap + Python/AI Code Snippets */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

            {/* GitHub Telemetry & Heatmap (7 cols) */}
            <div className="card-inner p-5 sm:p-6 flex flex-col justify-between min-w-0">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#303030] mb-4">
                  <div className="flex items-center gap-2">
                    <FaGithub size={18} className="text-white" />
                    <h4 className="font-display font-bold text-sm sm:text-base text-white">
                      GitHub Contribution Activity
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-[#BFC3C7]">@Sahil-Bulbule</span>
                </div>

                {/* Heatmap Grid */}
                <div className="heatmap-scroll mb-4 py-1">
                  <div className="grid grid-cols-[repeat(28,minmax(10px,1fr))] gap-1 min-w-[360px]">
                  {heatData.map((val, i) => (
                    <div
                      key={i}
                      className={`w-full aspect-square rounded-sm ${heatClass[val]}`}
                      title={`Activity Level: ${val}`}
                    />
                  ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-1.5 mb-5 text-[10px] font-mono text-[#858585]">
                  <span>Less</span>
                  {[0, 1, 2, 3, 4].map((v) => (
                    <span key={v} className={`w-2.5 h-2.5 rounded-sm ${heatClass[v]}`} />
                  ))}
                  <span>More Active</span>
                </div>

                {/* Repositories */}
                <div className="grid sm:grid-cols-3 gap-2.5 mb-4 items-stretch">
                  {openSourceRepos.map((r) => (
                    <a
                      key={r.name}
                      href="https://github.com/Sahil-Bulbule"
                      target="_blank"
                      rel="noreferrer"
                      className="developer-sub-card p-3 rounded-xl group block"
                    >
                      <div className="font-mono text-xs font-bold text-white group-hover:text-[#BFC3C7] transition-colors duration-180 ease-out min-h-[2rem] line-clamp-2">
                        {r.name}
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-[10px] font-mono text-[#858585]">
                        <span className="text-[#BFC3C7]">Stars {r.stars}</span>
                        <span>Forks {r.forks}</span>
                        <span className="ml-auto text-[#858585]">{r.lang}</span>
                      </div>
                      <p className="text-[10px] text-[#858585] line-clamp-2 mt-1.5">
                        {r.desc}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#B21F3D]/20 flex items-center justify-between text-xs font-mono text-[#858585]">
                <span>
                  <strong className="text-[#D0D0D0]">GitHub Activity</strong>
                </span>
                <a
                  href="https://github.com/Sahil-Bulbule"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#BFC3C7] hover:text-white flex items-center gap-1 transition-colors duration-180 ease-out font-semibold cursor-pointer"
                >
                  <span>Full GitHub Profile</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Python Playground & AI Experiments (5 cols) */}
            <div className="card-inner p-5 sm:p-6 flex flex-col justify-between min-w-0">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#303030] mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 size={18} className="text-[#D0D0D0]" />
                    <h4 className="font-display font-bold text-sm sm:text-base text-white">
                      Python Playground &amp; AI
                    </h4>
                  </div>
                  <div className="flex items-center gap-1 bg-[#101010] p-0.5 rounded-lg border border-white/15">
                    <button
                      onClick={() => setActiveSnippetTab("llm")}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded cursor-pointer ${activeSnippetTab === "llm"
                          ? "bg-[#BFC3C7] text-[#000000] font-bold"
                          : "text-[#858585] hover:text-white"
                        }`}
                    >
                      LLM
                    </button>
                    <button
                      onClick={() => setActiveSnippetTab("rag")}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded cursor-pointer ${activeSnippetTab === "rag"
                          ? "bg-[#BFC3C7] text-[#000000] font-bold"
                          : "text-[#858585] hover:text-white"
                        }`}
                    >
                      RAG
                    </button>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-[#858585] mb-2">
                  Snippet: <span className="text-[#BFC3C7] font-semibold">{codeSnippets[activeSnippetTab].title}</span>
                </div>

                <pre className="developer-sub-card p-3.5 rounded-xl font-mono text-[11px] text-[#BFC3C7] overflow-x-auto leading-relaxed max-h-[220px]">
                  <code>{codeSnippets[activeSnippetTab].code}</code>
                </pre>
              </div>

              {/* Motivational music player */}
              <div className="developer-sub-card mt-4 p-3.5 rounded-xl border border-white/10">
                <audio
                  ref={audioRef}
                  src={track.source}
                  preload="auto"
                  onLoadedMetadata={(event) => {
                    setDuration(event.currentTarget.duration);
                    setAudioStatus("ready");
                  }}
                  onTimeUpdate={(event) => setProgress(event.currentTarget.currentTime)}
                  onPlay={() => {
                    setIsPlaying(true);
                    setAudioStatus("ready");
                  }}
                  onPause={() => setIsPlaying(false)}
                  onCanPlay={() => setAudioStatus("ready")}
                  onError={(e) => {
                    console.error("Audio error:", e);
                    setIsPlaying(false);
                    setAudioStatus("unavailable");
                  }}
                  onEnded={() => {
                    setIsPlaying(false);
                    setProgress(0);
                  }}
                />

                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`p-2 rounded-lg ${isPlaying ? "bg-[#BFC3C7] text-black shadow-[0_0_12px_rgba(191,195,199,0.4)]" : "bg-white/5 text-[#D0D0D0]"} transition-colors shrink-0`}>
                      <Music2 size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#F0F0F0] truncate flex items-center gap-2">
                        <span>{track.title}</span>
                        {isPlaying && (
                          <span className="flex items-end gap-0.5 h-3 shrink-0">
                            <span className="w-1 bg-[#BFC3C7] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
                            <span className="w-1 bg-[#BFC3C7] rounded-full animate-[pulse_0.5s_ease-in-out_infinite] h-2" />
                            <span className="w-1 bg-[#BFC3C7] rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-3.5" />
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] font-mono text-[#888888] truncate">
                        {track.artist} • Study &amp; Coding Beats
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (audioRef.current) {
                        audioRef.current.muted = !isMuted;
                        setIsMuted(!isMuted);
                      }
                    }}
                    className="p-1.5 rounded-lg text-[#858585] hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                    title={isMuted ? "Unmute" : "Mute"}
                    aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                  >
                    {isMuted ? <VolumeX size={14} className="text-red-400" /> : <Volume2 size={14} />}
                  </button>
                </div>

                {audioStatus === "unavailable" && (
                  <div className="mb-2 text-[10px] font-mono text-amber-400/90">
                    Audio stream unavailable. Ensure audio file is accessible.
                  </div>
                )}

                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={togglePlayback}
                    className="music-play-btn w-9 h-9 rounded-xl bg-white text-black hover:bg-[#E5E5E5] transition-all duration-180 ease-out cursor-pointer shrink-0 shadow-md hover:scale-105 active:scale-95 flex items-center justify-center !text-black !bg-white"
                    aria-label={isPlaying ? "Pause track" : "Play track"}
                    disabled={audioStatus === "loading"}
                  >
                    {isPlaying ? (
                      <Pause size={15} className="!fill-black !stroke-black !text-black" />
                    ) : (
                      <Play size={15} className="!fill-black !stroke-black !text-black ml-0.5" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    step="0.1"
                    value={Math.min(progress, duration || 0)}
                    onChange={(event) => {
                      const nextTime = Number(event.target.value);
                      if (audioRef.current) audioRef.current.currentTime = nextTime;
                      setProgress(nextTime);
                    }}
                    className="music-progress flex-1 cursor-pointer accent-[#BFC3C7]"
                    aria-label="Music progress"
                  />
                  <span className="text-[10px] font-mono text-[#858585] tabular-nums whitespace-nowrap">
                    {formatTime(progress)} / {formatTime(duration)}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}



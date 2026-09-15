import { useEffect, useRef, useState } from "react";
import { Bot, Send, Trash2 } from "lucide-react";
import AnimatedBorderCard from "./AnimatedBorderCard";

const quickQueries = [
  "What are Sahil's core skills?",
  "Tell me about his AI/ML projects",
  "Where does Sahil study?",
  "What is Sahil's DSA journey?",
  "Tell me about his internship",
  "What technologies does he work with?",
  "Show Sahil's featured projects",
  "Tell me about his GenAI experience",
];

const knowledgeResponses = [
  {
    terms: ["skill", "stack", "technology", "technologies", "tech"],
    text: "Sahil's core expertise spans AI/ML, Deep Learning, NLP, Generative AI, LLMs, RAG and Agentic AI, alongside Python Full Stack Development. His stack includes HTML, CSS, JavaScript, React.js and React Native on the frontend; Python, Flask and Django on the backend; and MongoDB, Firebase and SQL for data.",
  },
  {
    terms: ["genai", "generative", "llm", "rag", "agentic", "langchain", "langgraph"],
    text: "Sahil's GenAI work focuses on LLM applications, RAG pipelines, LangChain, LangGraph and Agentic AI concepts. His AI/ML foundation also includes Machine Learning, Deep Learning, ANN, CNN, RNN, LSTM, GRU and NLP.",
  },
  {
    terms: ["project", "projects", "portfolio"],
    text: "Sahil's featured projects include RetainIQ, an employee attrition and retention analytics platform; Neo-Inspect, a CNN-based industrial surface defect detector; Intrusion X, a network intrusion detection system using RNN, LSTM and GRU; Cancer Risk Prediction System; Heart Disease Risk Predictor; Expense Tracker with React and Firebase; and Study Planner with HTML, CSS and JavaScript.",
  },
  {
    terms: ["education", "study", "college", "university", "school", "cgpa"],
    text: "Sahil is pursuing a B.Tech in Computer Technology at YCCE, Nagpur, where he is in his second year with an 8 CGPA. He completed a Diploma in Computer Engineering at Priyadarshini Polytechnic, Nagpur, with 86.23% and a 2nd Rank Final Year Project. His SSC was completed at CSI, Wardha, with 79.80%.",
  },
  {
    terms: ["intern", "internship", "experience", "work"],
    text: "Sahil worked as a Frontend Developer Intern at Advanced Infotech, Nagpur, for 2 months. He worked with HTML, CSS, JavaScript and responsive UI, developing features for the Study Planner and Expense Tracker applications.",
  },
  {
    terms: ["dsa", "leetcode", "algorithm", "data structure", "problem solving", "problem-solving"],
    text: "Sahil is currently practicing Data Structures and Algorithms through LeetCode and problem-solving work. His focus areas include Arrays, Strings, Hashing, Two Pointers, Sliding Window, Binary Search, Stack, Queue, Linked List, Trees, Graphs and Dynamic Programming.",
  },
  {
    terms: ["contact", "email", "hire", "github", "linkedin"],
    text: "You can connect with Sahil by email at sahilbulbule@gmail.com or through GitHub at github.com/Sahil-Bulbule. His portfolio also includes links to his professional profiles.",
  },
];

const fallbackResponse = "I can help you explore Sahil's skills, projects, education, internship experience, DSA journey and AI/ML work. Try asking about one of these areas.";
const highlightTerms = ["AI/ML", "Deep Learning", "NLP", "Generative AI", "LLMs", "RAG", "Agentic AI", "Python", "React.js", "Flask", "Django", "MongoDB", "Firebase", "DSA", "LeetCode", "GitHub"];
const initialMessages = [
  { id: "welcome", sender: "ai", text: "Welcome. I'm Sahil's AI Assistant." },
  { id: "intro", sender: "ai", text: "I can help you explore Sahil's skills, projects, education, experience and technical journey." },
];

function getResponse(query) {
  const lowerQuery = query.toLowerCase();
  const match = knowledgeResponses.find(({ terms }) => terms.some((term) => lowerQuery.includes(term)));
  return match?.text || fallbackResponse;
}

function RichText({ text }) {
  const pattern = new RegExp(`(${highlightTerms.join("|")})`, "gi");
  return text.split(pattern).map((part, index) => {
    const isHighlight = highlightTerms.some((term) => term.toLowerCase() === part.toLowerCase());
    return isHighlight ? <span key={`${part}-${index}`} className="text-[#E8E8E8] font-semibold">{part}</span> : <span key={`${part}-${index}`}>{part}</span>;
  });
}

export default function AIAssistant() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const typingTimerRef = useRef(null);
  const messageSequenceRef = useRef(0);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => () => clearInterval(typingTimerRef.current), []);

  const clearChat = () => {
    clearInterval(typingTimerRef.current);
    setMessages(initialMessages);
    setInput("");
    setIsTyping(false);
    requestAnimationFrame(() => messagesContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" }));
  };

  const handleSend = (textToSend = input) => {
    const query = textToSend.trim();
    if (!query || isTyping) return;

    const response = getResponse(query);
    messageSequenceRef.current += 1;
    const responseId = `ai-${messageSequenceRef.current}`;
    setMessages((current) => [...current, { id: `user-${messageSequenceRef.current}`, sender: "user", text: query }, { id: responseId, sender: "ai", text: "" }]);
    setInput("");
    setIsTyping(true);

    let characterIndex = 0;
    typingTimerRef.current = setInterval(() => {
      characterIndex += 3;
      setMessages((current) => current.map((message) => message.id === responseId ? { ...message, text: response.slice(0, characterIndex) } : message));
      if (characterIndex >= response.length) {
        clearInterval(typingTimerRef.current);
        setIsTyping(false);
      }
    }, 14);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-assistant" className="relative py-10 sm:py-14 overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
        <div className="w-full max-w-full lg:w-[86%] xl:w-[82%] card-outer p-3 sm:p-6">
          <AnimatedBorderCard className="p-3 sm:p-6 flex flex-col h-[calc(100svh-3rem)] min-h-[560px] sm:h-[600px] sm:max-h-[calc(100vh-3rem)] sm:min-h-[500px]">
            <div className="flex flex-col items-stretch justify-between pb-4 mb-4 border-b border-[#2A2A2A] gap-4 sm:flex-row sm:items-center sm:gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-[#202020] border border-[#383838] text-[#D0D0D0] shrink-0"><Bot size={18} /></div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-sm sm:text-base text-[#F5F5F5] flex items-center gap-2 flex-wrap"><span>SAHIL&apos;S AI Assistant</span><span className="text-[10px] font-mono text-[#CFCFCF] bg-white/5 border border-[#2A2A2A] px-2 py-0.5 rounded-full">v2.0</span></h3>
                  <p className="text-[11px] font-mono text-[#CFCFCF] break-words sm:truncate">Instant Q&amp;A on skills, projects &amp; engineering milestones</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 shrink-0 sm:justify-end">
                <button type="button" onClick={clearChat} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#111111] border border-[#303030] text-[10px] font-mono text-[#A6A6A6] hover:text-white hover:border-[#888888] transition-colors cursor-pointer" aria-label="Clear chat">
                  <Trash2 size={12} />
                  <span>Clear Chat</span>
                </button>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#080808] border border-[#2A2A2A] text-[11px] font-mono text-[#F5F5F5]"><span className="h-1.5 w-1.5 rounded-full bg-white" /><span>Online</span></div>
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-2 mb-4 min-w-0 sm:flex-row sm:items-center">
              <span className="text-[10px] font-mono text-[#CFCFCF] uppercase tracking-wider shrink-0">Quick Questions</span>
              <div className="flex flex-col gap-1 overflow-y-auto max-h-32 pb-1 sm:flex-row sm:gap-2 sm:overflow-x-auto sm:overflow-y-hidden scrollbar-thin">
                {quickQueries.map((query) => <button key={query} type="button" onClick={() => handleSend(query)} className="w-full max-w-full text-left text-[10px] font-mono px-2 py-1 rounded-lg bg-[#202020] border border-[#383838] text-[#B8B8B8] hover:text-[#E8E8E8] hover:border-[#5A5A5A] whitespace-nowrap transition-colors cursor-pointer sm:w-auto sm:px-3 sm:py-1.5 sm:text-[11px]">{query}</button>)}
              </div>
            </div>

            <div ref={messagesContainerRef} className="flex-1 min-h-0 overflow-y-auto space-y-4 pr-1 sm:pr-2 font-body text-xs leading-relaxed bg-[#181818] p-3 sm:p-5 rounded-xl border border-[#2A2A2A] break-words">
              {messages.map((message) => {
                const isAI = message.sender === "ai";
                return <div key={message.id} className={`flex items-start gap-2.5 ${isAI ? "justify-start" : "justify-end"}`}>
                  {isAI && <div className="shrink-0 w-6 h-6 rounded-full bg-[#202020] border border-[#383838] flex items-center justify-center text-[#D0D0D0] text-[9px] font-mono">AI</div>}
                  <div className={`max-w-[92%] sm:max-w-[76%] min-w-0 px-3.5 py-2.5 rounded-2xl whitespace-pre-wrap break-words ${isAI ? "bg-[#1C1C1C] text-[#F5F5F5] border border-[#2A2A2A] rounded-tl-sm" : "bg-[#252525] text-[#F5F5F5] border border-white/10 rounded-tr-sm"}`}>{isAI ? <RichText text={message.text} /> : message.text}</div>
                </div>;
              })}
              {isTyping && <div className="flex items-center gap-2.5 text-[10px] font-mono text-[#CFCFCF]"><div className="shrink-0 w-6 h-6 rounded-full bg-[#202020] border border-[#383838] flex items-center justify-center text-[#D0D0D0]">AI</div><span>Typing...</span></div>}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={(event) => { event.preventDefault(); handleSend(); }} className="mt-4 flex w-full max-w-full items-end gap-1 rounded-xl border border-[#2A2A2A] bg-[#181818] p-1.5 focus-within:border-[#666666] transition-colors sm:gap-2 sm:p-2">
              <textarea value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={handleInputKeyDown} placeholder="Ask about Sahil's skills, projects, education, AI journey..." rows={1} className="min-w-0 max-w-full flex-1 resize-none overflow-hidden whitespace-nowrap bg-transparent px-1 py-1 text-[11px] font-mono text-[#F5F5F5] outline-none placeholder-[#CFCFCF]/60 sm:max-h-24 sm:overflow-auto sm:px-2 sm:py-1.5 sm:text-xs" aria-label="Ask Sahil's AI Assistant" />
              <button type="submit" aria-label="Send message" disabled={isTyping || !input.trim()} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#D0D0D0] p-0 text-[#111111] hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer sm:h-auto sm:w-auto sm:p-2.5"><Send size={15} /></button>
            </form>
          </AnimatedBorderCard>
        </div>
      </div>
    </section>
  );
}

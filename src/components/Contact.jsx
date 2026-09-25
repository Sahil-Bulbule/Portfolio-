import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  MapPin,
  Check,
  Loader2,
  Download,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import AnimatedBorderCard from "./AnimatedBorderCard";
import ScrollReveal from "./ScrollReveal";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_of2avsp";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_a32biuj";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "EBQSYDk6p943yAROU";

const quickPrompts = [
  "Frontend Developer Role",
  "Python Backend Engineering",
  "AI / ML Collaboration",
  "GenAI & RAG Project",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Direct Gmail flow modal state
  const [showGmailModal, setShowGmailModal] = useState(false);
  const [gmailUserEmail, setGmailUserEmail] = useState("");
  const [gmailUserMessage, setGmailUserMessage] = useState("");
  const [modalSubmitting, setModalSubmitting] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  useEffect(() => {
    if (PUBLIC_KEY) {
      try {
        emailjs.init({ publicKey: PUBLIC_KEY });
      } catch (err) {
        console.warn("EmailJS init warning:", err);
      }
    }
  }, []);

  const openGmailModal = () => {
    setGmailUserEmail(form.email || "");
    setGmailUserMessage(form.message || "");
    setModalSuccess(false);
    setShowGmailModal(true);
  };

  const handleGmailModalSubmit = async (e) => {
    e.preventDefault();
    const emailToUse = gmailUserEmail.trim();
    if (!emailToUse) return;

    setModalSubmitting(true);
    const messageToUse = gmailUserMessage.trim() || `Inquiry from ${emailToUse}`;

    // Background transmission to EmailJS so Sahil receives the notification
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: emailToUse.split("@")[0] || "Gmail Visitor",
          from_name: emailToUse.split("@")[0] || "Gmail Visitor",
          email: emailToUse,
          from_email: emailToUse,
          reply_to: emailToUse,
          message: messageToUse,
          time: new Date().toLocaleString(),
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );
    } catch (err) {
      console.warn("EmailJS modal background notification:", err);
    }

    setModalSuccess(true);
    setModalSubmitting(false);

    // Open Gmail compose with recipient, subject, and pre-filled message
    const subject = encodeURIComponent(`Portfolio Inquiry from ${emailToUse}`);
    const body = encodeURIComponent(messageToUse);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sahilbulbule16@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setShowGmailModal(false);
      setModalSuccess(false);
    }, 2200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sahilbulbule16@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const templateParams = {
      name: form.name,
      from_name: form.name,
      email: form.email,
      from_email: form.email,
      reply_to: form.email,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setLoading(false);
      setSent(true);
      setErrorMsg("");

      setTimeout(() => {
        setSent(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setLoading(false);
      const detail = error?.text || error?.message || (typeof error === "string" ? error : "Transmission error");
      setErrorMsg(detail);
    }
  };

  return (
    <section id="contact" className="relative py-14 sm:py-18 overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BFC3C7] mb-3 bg-white/5 border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <span>Get In Touch</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#F2F2F2] tracking-tight leading-snug">
              Let&apos;s Build Something <br />
              <span className="text-[#BFC3C7]">Extraordinary Together.</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#888888] max-w-lg mx-auto">
              Available for full-time engineering roles, high-impact freelance projects, and AI research collaborations.
            </p>
          </div>
        </ScrollReveal>

        {/* ONE LARGE CONTACT CARD */}
        <ScrollReveal direction="up" delay={100}>
          <div className="card-outer p-6 sm:p-8 lg:p-10">

            {/* Module Header */}
            <div className="flex flex-wrap items-center justify-between pb-5 mb-6 border-b border-white/15 gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#BFC3C7] shadow-[0_0_8px_rgba(191,195,199,0.5)]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#F2F2F2]">
                  Contact &amp; Collaboration Gateway
                </h3>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#888888]">
                <span className="px-3 py-1 rounded-full bg-[#252525] border border-white/15 text-[#C4C9CE] drop-shadow-[0_0_5px_rgba(196,201,206,0.9)]">
                  Direct Channels
                </span>
              </div>
            </div>

            {/* Inner Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

              {/* LEFT: Channels & Direct Reach (5 cols) */}
              <div className="lg:col-span-5 space-y-4">

                {/* Email Card */}
                <AnimatedBorderCard className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/15 text-[#BFC3C7] shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-[#888888] uppercase tracking-wider block">
                        Direct Email / Gmail
                      </span>
                      <a
                        href="mailto:sahilbulbule16@gmail.com"
                        className="text-xs sm:text-sm font-mono font-semibold text-[#F2F2F2] hover:text-[#BFC3C7] transition-colors duration-180 ease-out truncate block"
                      >
                        sahilbulbule16@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
                    <button
                      type="button"
                      onClick={openGmailModal}
                      className="px-2.5 py-1.5 rounded-lg bg-[#252525] border border-white/15 text-[11px] font-mono text-[#F2F2F2] hover:text-white hover:border-white/30 transition-all flex items-center gap-1.5 cursor-pointer"
                      title="Open in Gmail Web"
                    >
                      <span>Gmail</span>
                      <ExternalLink size={11} />
                    </button>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-[#252525] border border-white/15 text-[#888888] hover:text-[#BFC3C7] hover:border-white/30 hover:scale-105 transition-all duration-180 ease-out cursor-pointer"
                      aria-label="Copy email address"
                      title={copied ? "Copied to clipboard!" : "Copy email address"}
                    >
                      {copied ? <Check size={14} className="text-[#BFC3C7]" /> : <Copy size={14} />}
                    </button>
                  </div>
                </AnimatedBorderCard>

                {/* Location Card */}
                <AnimatedBorderCard className="p-4 sm:p-5 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/15 text-[#BFC3C7]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#888888] uppercase tracking-wider block">
                      Location &amp; Base
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-semibold text-[#F2F2F2]">
                      Nagpur, Maharashtra, India
                    </span>
                  </div>
                </AnimatedBorderCard>

                {/* LinkedIn & GitHub Mini Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <AnimatedBorderCard
                    as="a"
                    href="https://www.linkedin.com/in/Sahil-Bulbule"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <FaLinkedin size={18} className="text-[#BFC3C7] group-hover:scale-105 transition-transform duration-180" />
                      <ExternalLink size={12} className="text-[#888888] group-hover:text-[#BFC3C7]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#888888] uppercase block">Profile</span>
                      <span className="text-xs font-mono font-bold text-[#F2F2F2] group-hover:text-[#BFC3C7] transition-colors">LinkedIn</span>
                    </div>
                  </AnimatedBorderCard>

                  <AnimatedBorderCard
                    as="a"
                    href="https://leetcode.com/u/9oGFyBqJcq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <SiLeetcode size={18} className="text-[#BFC3C7] group-hover:scale-105 transition-transform duration-180" />
                      <ExternalLink size={12} className="text-[#888888] group-hover:text-[#BFC3C7]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#888888] uppercase block">Practice</span>
                      <span className="text-xs font-mono font-bold text-[#F2F2F2] group-hover:text-[#BFC3C7] transition-colors">LeetCode</span>
                    </div>
                  </AnimatedBorderCard>

                  <AnimatedBorderCard
                    as="a"
                    href="https://github.com/Sahil-Bulbule"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <FaGithub size={18} className="text-[#BFC3C7] group-hover:scale-105 transition-transform duration-180" />
                      <ExternalLink size={12} className="text-[#888888] group-hover:text-[#BFC3C7]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#888888] uppercase block">Codebase</span>
                      <span className="text-xs font-mono font-bold text-[#F2F2F2] group-hover:text-[#BFC3C7] transition-colors">GitHub</span>
                    </div>
                  </AnimatedBorderCard>
                </div>

                {/* Resume Card */}
                <AnimatedBorderCard className="p-4 sm:p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/15 text-[#BFC3C7]">
                      <Download size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#888888] uppercase tracking-wider block">
                        Curriculum Vitae
                      </span>
                      <span className="text-xs font-mono font-semibold text-[#F2F2F2]">
                        Sahil Bulbule Resume
                      </span>
                    </div>
                  </div>

                  <a
                    href="/images/Resume/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary px-3 py-1.5 rounded-lg text-xs font-mono font-semibold inline-flex items-center gap-1"
                  >
                    <span>Download</span>
                    <Download size={11} />
                  </a>
                </AnimatedBorderCard>

              </div>

              {/* RIGHT: Clean Contact Form (7 cols) */}
              <AnimatedBorderCard className="lg:col-span-7 p-6 sm:p-7">
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/10">
                  <MessageSquare size={17} className="text-[#BFC3C7]" />
                  <h4 className="font-display font-bold text-base sm:text-lg text-[#F2F2F2]">
                    Send a Direct Message
                  </h4>
                </div>

                {/* Quick Topic Chips */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono text-[#888888] uppercase tracking-wider block mb-2">
                    Quick Inquiries:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {quickPrompts.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() =>
                          setForm({
                            ...form,
                            message: `Hi Sahil, I am reaching out regarding: ${p}. `,
                          })
                        }
                        className="text-[11px] font-mono px-3 py-1 rounded-lg bg-[#000000] border border-white/10 text-[#B8B8B8] hover:border-white/30 hover:text-[#BFC3C7] transition-all duration-180 ease-out cursor-pointer"
                      >
                        + {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-[#888888] mb-1.5">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5 text-xs font-mono text-[#F2F2F2] outline-none focus:border-white/35 focus:shadow-[0_0_12px_rgba(255,255,255,0.08)] transition-all duration-180 ease-out placeholder-[#777777]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#888888] mb-1.5">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5 text-xs font-mono text-[#F2F2F2] outline-none focus:border-white/35 focus:shadow-[0_0_12px_rgba(255,255,255,0.08)] transition-all duration-180 ease-out placeholder-[#777777]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#888888] mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your role or project vision..."
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5 text-xs font-mono text-[#F2F2F2] outline-none focus:border-white/35 focus:shadow-[0_0_12px_rgba(255,255,255,0.08)] transition-all duration-180 ease-out resize-none placeholder-[#777777]"
                    />
                  </div>

                  {/* Error Notification with Direct Gmail Fallback */}
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-500/30 text-xs font-mono text-red-200 space-y-1.5 animate-in fade-in duration-200">
                      <div className="flex items-center gap-2 font-bold text-red-300">
                        <AlertCircle size={15} className="shrink-0 text-red-400" />
                        <span>Form transmission issue: {errorMsg}</span>
                      </div>
                      <p className="text-[11px] text-[#D0D0D0]">
                        Koi dikkat nahi! Aap direct Gmail se message send kar sakte hain:
                      </p>
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=sahilbulbule16@gmail.com&su=${encodeURIComponent("Portfolio Inquiry from " + (form.name || "Visitor"))}&body=${encodeURIComponent(form.message || "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#BFC3C7] hover:text-white underline font-semibold pt-1"
                      >
                        <Mail size={13} />
                        <span>Click here to open Gmail with this message pre-filled</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  )}

                  {/* Send Message Button */}
                  <button
                    type="submit"
                    disabled={loading || sent}
                    className="btn-primary w-full py-3 rounded-xl font-mono font-bold text-xs flex items-center justify-center gap-2 disabled:opacity-80 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(191,195,199,0.3)] transition-all !text-black"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={15} className="animate-spin !text-black" />
                        <span className="!text-black font-bold">Transmitting Message...</span>
                      </>
                    ) : sent ? (
                      <>
                        <CheckCircle2 size={15} className="!text-black" />
                        <span className="!text-black font-bold">Message Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} className="!text-black" />
                        <span className="!text-black font-bold">Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Direct Gmail Shortcut */}
                  <div className="text-center pt-1">
                    <button
                      type="button"
                      onClick={openGmailModal}
                      className="text-[11px] font-mono text-[#A3A3A3] hover:text-[#F2F2F2] transition-colors inline-flex items-center gap-1 cursor-pointer bg-transparent border-none"
                    >
                      <span>Prefer sending directly via Gmail? Click here</span>
                      <ExternalLink size={11} />
                    </button>
                  </div>
                </form>
              </AnimatedBorderCard>

            </div>

          </div>
        </ScrollReveal>

      </div>

      {/* Direct Gmail Inquiry Modal */}
      {showGmailModal && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowGmailModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Connect via Gmail"
        >
          <div
            className="card-outer max-w-md w-full p-5 sm:p-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200 border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/15">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-white/5 border border-white/15 text-[#BFC3C7]">
                  <Mail size={17} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#F2F2F2] text-sm sm:text-base">
                    Reach Out via Gmail
                  </h4>
                  <p className="text-[10px] font-mono text-[#A3A3A3]">
                    To: sahilbulbule16@gmail.com
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowGmailModal(false)}
                className="p-1.5 rounded-lg text-[#888888] hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleGmailModalSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5">
                  Your Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  required
                  type="email"
                  value={gmailUserEmail}
                  onChange={(e) => setGmailUserEmail(e.target.value)}
                  placeholder="e.g. rahul@gmail.com"
                  autoFocus
                  className="w-full bg-[#181818] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs font-mono text-[#F2F2F2] outline-none focus:border-white/40 focus:shadow-[0_0_12px_rgba(255,255,255,0.08)] transition-all placeholder-[#777777]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5">
                  Your Message / Inquiry <span className="text-[#777777] text-[10px]">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={gmailUserMessage}
                  onChange={(e) => setGmailUserMessage(e.target.value)}
                  placeholder="Hi Sahil, I want to discuss a project or opportunity..."
                  className="w-full bg-[#181818] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs font-mono text-[#F2F2F2] outline-none focus:border-white/40 focus:shadow-[0_0_12px_rgba(255,255,255,0.08)] transition-all resize-none placeholder-[#777777]"
                />
              </div>

              {modalSuccess && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Success! Opening Gmail compose window...</span>
                </div>
              )}

              <button
                type="submit"
                disabled={modalSubmitting}
                className="btn-primary w-full py-2.5 rounded-xl font-mono font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(191,195,199,0.3)] transition-all !text-black"
              >
                {modalSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin !text-black" />
                    <span className="!text-black font-bold">Submitting &amp; Opening...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} className="!text-black" />
                    <span className="!text-black font-bold">Submit &amp; Open in Gmail</span>
                  </>
                )}
              </button>

              <p className="text-[10px] font-mono text-[#777777] text-center">
                Submits your details to Sahil and prepares your Gmail draft.
              </p>
            </form>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}



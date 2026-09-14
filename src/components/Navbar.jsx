import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "AI Assistant", href: "#ai-assistant" },
  { label: "About Us", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Internship", href: "#internship" },
  { label: "Achievements", href: "#achievements" },
  { label: "Developer Hub", href: "#developer-hub" },
  { label: "Get In Touch", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section detection via IntersectionObserver */
  useEffect(() => {
    const sectionElements = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(`#${e.target.id}`);
          }
        });
      },
      { rootMargin: "-25% 0px -45% 0px" }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out ${
          scrolled
            ? "py-2.5 bg-[#000000]/95 backdrop-blur-md border-b border-white/15 shadow-lg shadow-black/80"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2.5 group transition-transform duration-180 ease-out hover:scale-[1.02]"
              aria-label="Sahil Bulbule Home"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BFC3C7] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#BFC3C7]" />
              </span>
              <span className="font-display font-semibold text-xs sm:text-sm tracking-wider uppercase text-[#F2F2F2] group-hover:text-[#BFC3C7] transition-colors duration-180 ease-out">
                SAHIL BULBULE
                <span className="text-[#BFC3C7] font-mono text-[11px] ml-1.5 lowercase font-normal">
                  .me
                </span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 bg-[#050505] border border-white/15 rounded-full px-3 py-1.5 shadow-inner">
              {links.map((l) => {
                const isActive = active === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`text-[12px] font-medium px-3 py-1 rounded-full transition-all duration-180 ease-out ${
                      isActive
                        ? "bg-[#202020] text-[#BFC3C7] border border-white/20 shadow-sm font-semibold"
                        : "text-[#888888] hover:text-[#FFFFFF] hover:bg-white/[0.04]"
                    }`}
                  >
                    {l.label}
                  </a>
                );
              })}
            </nav>

            {/* Compressed Desktop Nav for 1024 - 1279px */}
            <nav className="hidden md:flex xl:hidden items-center gap-1 bg-[#050505] border border-white/15 rounded-full px-2 py-1 shadow-inner">
              {links.slice(0, 7).map((l) => {
                const isActive = active === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-180 ease-out ${
                      isActive
                        ? "bg-[#202020] text-[#BFC3C7] font-semibold border border-white/20"
                        : "text-[#888888] hover:text-[#FFFFFF]"
                    }`}
                  >
                    {l.label}
                  </a>
                );
              })}
            </nav>

            {/* Resume / Hire Button */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-mono font-medium text-[#BFC3C7] bg-[#000000] hover:bg-[#FFFFFF] hover:text-[#000000] border border-white/25 hover:border-white px-4 py-1.5 rounded-full transition-all duration-180 ease-out group shadow-sm hover:shadow-[0_2px_12px_rgba(255,255,255,0.25)] hover:-translate-y-0.5"
              >
                <span>Resume / Hire</span>
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-180 ease-out"
                />
              </a>

              {/* Hamburger Button */}
              <button
                className="md:hidden text-[#888888] hover:text-[#FFFFFF] p-2 rounded-lg bg-[#050505] border border-white/15 transition-colors duration-180 ease-out"
                onClick={() => setOpen(!open)}
                aria-label="Toggle navigation menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden pt-20 px-6 flex flex-col justify-between pb-10">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-base font-mono py-2.5 px-4 rounded-xl transition-all duration-180 ${
                  active === l.href
                    ? "bg-[#202020] text-[#BFC3C7] border border-white/20 font-semibold"
                    : "text-[#888888] hover:text-[#FFFFFF]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="pt-6 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-mono"
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}



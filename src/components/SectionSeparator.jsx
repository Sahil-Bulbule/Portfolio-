import { useEffect, useRef, useState } from "react";

/**
 * SectionSeparator
 * Displays an animated horizontal separator line with center red dot:
 * ---------------------------------------------
 * When it scrolls into view, it expands from the CENTER outward (width: 0 -> ~65%)
 * with opacity 0 -> 1 over 700-900ms ease-out every time it enters the viewport.
 */
export default function SectionSeparator() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center py-6 sm:py-8 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <div
        className={`flex items-center justify-center w-[72%] sm:w-[65%] max-w-[900px] origin-center transition-[opacity,transform] duration-700 sm:duration-900 ease-out ${
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
      >
        {/* Left expanding line */}
        <div className="section-separator-line flex-1 h-[1px]" />

        {/* Center dot (#BFC3C7) */}
        <div className="mx-3.5 flex items-center justify-center shrink-0">
          <span className="section-separator-dot w-1.5 h-1.5 rounded-full" />
        </div>

        {/* Right expanding line */}
        <div className="section-separator-line flex-1 h-[1px]" />
      </div>
    </div>
  );
}



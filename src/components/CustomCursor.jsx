import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touch);
    if (touch) return;

    const pos = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${pos.x}px`;
        dotRef.current.style.top = `${pos.y}px`;
      }
    };

    let raf;
    const animate = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.x}px`;
        ringRef.current.style.top = `${ring.y}px`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnter = (e) => {
      const t = e.target.closest("[data-cursor]");
      if (t) setLabel(t.getAttribute("data-cursor") || "");
    };
    const onLeave = (e) => {
      if (e.target.closest("[data-cursor]")) setLabel("");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#BFC3C7] shadow-[0_0_6px_rgba(191,195,199,0.8)]"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 flex items-center justify-center transition-[width,height,border-color,background-color] duration-180"
        style={{
          width: label ? "64px" : "32px",
          height: label ? "64px" : "32px",
          backgroundColor: label ? "rgba(255, 198, 168, 0.12)" : "transparent",
          borderColor: label ? "#BFC3C7" : "rgba(255, 255, 255, 0.35)",
        }}
      >
        {label && (
          <span className="font-display text-[10px] tracking-wide text-[#BFC3C7]">
            {label}
          </span>
        )}
      </div>
    </>
  );
}



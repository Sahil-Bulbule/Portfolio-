import { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal
 * Triggers a smooth viewport reveal when scrolled into view:
 * - Parent: opacity 0 -> 1, translateY(35px) -> 0 over 600ms ease-out
 * - direction option: "up" | "left" | "right" | "none"
 * - delay: in milliseconds
 */
export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  staggerChildren = false,
}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setRevealed(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (revealed) return "translate3d(0, 0, 0)";
    switch (direction) {
      case "left":
        return "translate3d(-35px, 0, 0)";
      case "right":
        return "translate3d(35px, 0, 0)";
      case "up":
      default:
        return "translate3d(0, 35px, 0)";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transform: getTransform(),
        opacity: revealed ? 1 : 0,
        transition: `opacity 650ms ease-out ${delay}ms, transform 650ms ease-out ${delay}ms`,
      }}
      className={`${className} ${revealed && staggerChildren ? "is-revealed" : ""}`}
    >
      {children}
    </div>
  );
}



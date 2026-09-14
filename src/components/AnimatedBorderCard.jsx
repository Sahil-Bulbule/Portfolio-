import { useEffect, useRef, useState } from "react";

/**
 * AnimatedBorderCard
 * Wraps any card (square, horizontal, vertical, wide) with a fast travelling white/grey perimeter glow line on hover.
 *
 * Requirements:
 * - Starts from ONE fixed point on the card border (top-left).
 * - Travels: START -> top -> right -> bottom -> left -> BACK TO EXACT START POINT.
 * - Loops continuously while cursor is hovered.
 * - Duration: 0.95s (between 0.8s - 1.2s fast loop).
 * - Color: White (#FFFFFF) -> Silver (#BFC3C7) -> White (#FFFFFF).
 * - Adapts automatically to any card dimension via dynamic SVG rect pathLength="100".
 * - Subtle card lift translateY(-2px) scale(1.01) on hover.
 */
export default function AnimatedBorderCard({
  children,
  className = "",
  style = {},
  onClick,
  as = "div",
  ...props
}) {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = () => {
      const rect = el.getBoundingClientRect();
      setDimensions({
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      });
    };

    updateSize();

    const ro = new ResizeObserver(updateSize);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const Component = as;

  // We set radius = 14 to match card-inner border-radius
  const rx = 14;

  return (
    <Component
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={style}
      className={`relative group card-inner ${className}`}
      {...props}
    >
      {/* Dynamic SVG Travelling Perimeter Border Animation */}
      {dimensions.width > 0 && dimensions.height > 0 && (
        <svg
          className={`pointer-events-none absolute inset-0 w-full h-full z-20 transition-opacity duration-150 ease-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          width={dimensions.width}
          height={dimensions.height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="travellingLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="50%" stopColor="#BFC3C7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
            <filter id="subtleLineGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated perimeter line: pathLength 100, stroke-dasharray 22 78, loops 0 -> -100 */}
          <rect
            x="0.75"
            y="0.75"
            width={Math.max(0, dimensions.width - 1.5)}
            height={Math.max(0, dimensions.height - 1.5)}
            rx={rx}
            ry={rx}
            fill="none"
            stroke="url(#travellingLineGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            pathLength="100"
            filter="url(#subtleLineGlow)"
            className={isHovered ? "perimeter-travel-active" : ""}
          />
        </svg>
      )}

      {/* Card Body */}
      {children}
    </Component>
  );
}



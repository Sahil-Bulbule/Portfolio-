import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Trophy, Code2, Briefcase, Award } from "lucide-react";

const stats = [
  { value: 86.23, suffix: "%", label: "Polytechnic Final Score", decimals: 2, icon: Award, color: "#BFC3C7" },
  { display: "2nd Rank", label: "Polytechnic Final Year Rank", icon: Trophy, color: "#BFC3C7" },
  { value: 4, suffix: "+", label: "Full Projects Built", decimals: 0, icon: Code2, color: "#BFC3C7" },
  { display: "Frontend Intern", label: "Advanced Computer Infotech", icon: Briefcase, color: "#BFC3C7" },
];

function Counter({ to, decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 bg-ink overflow-hidden border-y border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-[#F2F2F2]/5 via-[#BFC3C7]/5 to-[#F2F2F2]/5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => {
          const IconComp = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div
                className="w-10 h-10 rounded-xl glass border border-white/15 flex items-center justify-center mx-auto mb-3 shadow-inner"
                style={{ color: s.color }}
              >
                <IconComp size={20} />
              </div>

              <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {s.display ? (
                  <span style={{ color: s.color }}>{s.display}</span>
                ) : (
                  <Counter to={s.value} decimals={s.decimals} suffix={s.suffix} />
                )}
              </div>

              <p className="mt-1.5 text-xs text-white/50 font-body font-medium">
                {s.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}



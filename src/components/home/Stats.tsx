import { motion, useInView, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 150, suffix: "K+", label: "Designs created" },
  { value: 10, suffix: "K+", label: "Clients served" },
  { value: 3, suffix: "×", label: "Faster delivery" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: (v) => setN(v) });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{Math.round(n)}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center md:text-left"
            >
              <div className="font-display text-[clamp(4rem,10vw,9rem)] leading-none text-gradient-neon">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 h-px w-16 bg-primary/60 mx-auto md:mx-0 shadow-[0_0_10px_rgba(214,255,0,.6)]" />
              <div className="mt-4 text-sm uppercase tracking-widest text-white/70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

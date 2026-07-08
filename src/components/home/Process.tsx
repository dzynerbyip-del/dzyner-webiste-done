import { motion } from "motion/react";

const STEPS = [
  { n: "01", t: "Discover", d: "Deep-dive briefing" },
  { n: "02", t: "Research", d: "Audience & positioning" },
  { n: "03", t: "Strategy", d: "Direction & narrative" },
  { n: "04", t: "Design", d: "Craft & iterate" },
  { n: "05", t: "Prototype", d: "Test & refine" },
  { n: "06", t: "Deliver", d: "Launch & grow" },
];

export function Process() {
  return (
    <section className="relative py-24 md:py-32 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our process</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
            Six steps. <span className="text-gradient-neon">Zero surprises.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-14 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent shadow-[0_0_16px_rgba(214,255,0,.5)]" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full glass-strong border border-primary/40 font-mono text-xs text-primary animate-pulse-glow">
                  {s.n}
                </div>
                <div className="mt-6 font-display text-2xl tracking-tight">{s.t}</div>
                <div className="mt-1 text-xs text-white/50">{s.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";

const POINTS = [
  { title: "No hiring stress", body: "Skip the endless resumes, interviews and probation cycles. Our on-demand teams plug into your workflow from day one." },
  { title: "No salary burden", body: "Pay only for the work you need — never for empty seats, benefits, insurance, or seasonal slow periods." },
  { title: "No training time", body: "Every specialist we assign already knows the craft. Zero onboarding, zero learning curve." },
  { title: "Single point of contact", body: "Your relationship manager coordinates every team, every deliverable — one thread, no chaos." },
  { title: "No back-and-forths", body: "Structured briefing, milestone-based reviews and clear ownership eliminate 90% of clarification loops." },
  { title: "Consistent high quality", body: "Every deliverable passes senior review, brand-alignment checks and QC before it lands in your inbox." },
];

export function WhyUs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 md:py-32 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why us</div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
              Different <span className="text-serif-italic text-gradient-neon">models.</span><br />
              Same operational <span className="text-gradient-neon">wins.</span>
            </h2>
            <p className="mt-6 text-white/60 max-w-md">
              Click any reason to expand. We built DZYNER to remove every friction that agencies and freelancers usually introduce.
            </p>
          </div>

          <div className="space-y-3">
            {POINTS.map((p, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={p.title}
                  layout
                  className={`glass rounded-2xl overflow-hidden border transition-colors ${isOpen ? "border-primary/40" : "border-white/8 hover:border-white/20"}`}
                >
                  <motion.button
                    layout
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-primary tabular-nums">0{i + 1}</span>
                      <span className="font-sans text-lg md:text-xl font-medium">{p.title}</span>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className="text-primary">
                      <Plus size={20} />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 pl-14 text-white/70 leading-relaxed max-w-2xl">
                          {p.body}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Cpu, Layers, Zap, type LucideIcon } from "lucide-react";

const CARDS: { title: string; icon: LucideIcon; desc: string; gradient: string }[] = [
  {
    title: "One Partner",
    icon: Cpu,
    desc: "A single relationship manager owns every project so you never juggle vendors, invoices or timelines.",
    gradient: "linear-gradient(137deg, #D6FF00 0%, #6bff56 45%, #00E5FF 100%)",
  },
  {
    title: "Multiple Teams",
    icon: Layers,
    desc: "Branding, motion, presentation, web — specialized creative teams plug in exactly when you need them.",
    gradient: "linear-gradient(137deg, #FFFFFF 0%, #7DD3FC 45%, #06B6D4 100%)",
  },
  {
    title: "Endless Possibilities",
    icon: Zap,
    desc: "Scale volume up or down every month with zero hiring stress. Consistent quality every single time.",
    gradient: "linear-gradient(137deg, #8A2EFF 0%, #E0AEFF 45%, #F72585 100%)",
  },
];

export function FeatureTrio() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">The DZYNER model</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
            Purposefully <span className="text-serif-italic text-gradient-neon">built</span> to keep up with you.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 max-w-5xl mx-auto">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 + i * 0.1 }}
              className="relative flex flex-col justify-start items-start w-full max-w-[320px] group mx-auto"
            >
              <div
                className="absolute w-full h-[300px] opacity-60 rounded-[40px] pointer-events-none"
                style={{ background: c.gradient, filter: "blur(45px)" }}
              />
              <div
                className="relative self-stretch h-[300px] rounded-[40px] z-10 overflow-hidden"
                style={{ border: "8px solid transparent", background: `linear-gradient(#141416, #141416) padding-box, ${c.gradient} border-box` }}
              >
                <div className="w-full h-full p-7 flex flex-col justify-between">
                  <div className="text-white/90"><c.icon size={32} strokeWidth={2.5} /></div>
                  <div>
                    <div className="text-white font-medium text-xl mb-3 tracking-tight">{c.title}</div>
                    <p className="text-white/60 text-[14px] leading-[1.6] font-normal">{c.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

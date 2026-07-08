import { motion } from "motion/react";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  { q: "DZYNER delivered a full brand refresh + 60 social creatives in three weeks. Zero back-and-forth.", n: "Priya Nair", r: "Head of Marketing, FinAxis" },
  { q: "One relationship manager, an entire creative studio behind them. Feels like an extension of my in-house team.", n: "Rahul K.", r: "Founder, Verta Health" },
  { q: "Consistency is what sold us. Every deck, every ad, every report — same premium feel.", n: "Anita Roy", r: "VP Brand, Zenex Retail" },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Testimonials</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
            Loved by <span className="text-gradient-neon">modern</span> teams.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3" style={{ perspective: "1200px" }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: -20, y: 30 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ rotateY: 4, rotateX: -3, translateZ: 20 }}
              className="glass rounded-3xl p-8 relative border border-white/10 hover:border-primary/40 transition-colors"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Quote className="text-primary" size={28} />
              <p className="mt-4 text-white/85 leading-relaxed">"{t.q}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-cyan-glow" />
                <div>
                  <div className="text-sm font-medium">{t.n}</div>
                  <div className="text-xs text-white/50">{t.r}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Check, Star } from "lucide-react";
import { MagneticButton } from "@/components/site/MagneticButton";

const PLANS = [
  {
    n: "01",
    title: "Pay per project",
    tag: "Flexible",
    price: "One-time",
    features: ["No commitment", "Perfect for one-time need", "Fixed scope pricing", "Dedicated PM"],
    popular: false,
  },
  {
    n: "02",
    title: "Subscription / Retainer",
    tag: "Most popular",
    price: "Monthly",
    features: ["Consistent creativity", "Dedicated team", "Priority queue", "Rollover of unused budget", "Unlimited revisions"],
    popular: true,
  },
  {
    n: "03",
    title: "Hourly hire",
    tag: "On-demand",
    price: "Per hour",
    features: ["Flexible & task-specific", "Ideal for ad-hoc needs", "No minimum", "Same senior talent"],
    popular: false,
  },
];

export function PricingPreview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Easy to access. Flexible by design.</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
            Choose the <span className="text-serif-italic text-gradient-neon">model</span> that fits.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col gap-6 ${p.popular ? "glass-strong border-2 border-primary neon-glow" : "glass border border-white/8"}`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  <Star size={10} /> Most Popular
                </div>
              )}
              <div>
                <div className="font-mono text-xs text-primary">{p.n}</div>
                <div className="mt-2 font-display text-3xl tracking-tight">{p.title}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/50">{p.tag} · {p.price}</div>
              </div>
              <ul className="space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                    <span className={`mt-0.5 grid h-5 w-5 place-items-center rounded-full ${p.popular ? "bg-primary text-primary-foreground" : "bg-white/10 text-primary"}`}>
                      <Check size={12} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <MagneticButton href="/contact" variant={p.popular ? "neon" : "outline"}>
                Get started
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Phone } from "lucide-react";
import { motion } from "motion/react";

const MANAGERS = [
  { name: "Nikhil Sharma", phone: "+91 80774 39014", tel: "+918077439014", role: "Relationship Manager" },
  { name: "Rahul Sinha", phone: "+91 77395 00297", tel: "+917739500297", role: "Relationship Manager" },
  { name: "Akanshit Bhatnagar", phone: "+91 73517 12217", tel: "+917351712217", role: "Relationship Manager" },
];

export function ContactStrip() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Talk to a human</div>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95]">
            Contact our <span className="text-serif-italic text-gradient-neon">relationship managers</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {MANAGERS.map((m, i) => (
            <motion.a
              key={m.tel}
              href={`tel:${m.tel}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-3xl p-8 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-colors group flex flex-col gap-4"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/50">{m.role}</div>
                <div className="mt-1 font-display text-2xl">{m.name}</div>
                <div className="mt-2 font-mono text-primary">{m.phone}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

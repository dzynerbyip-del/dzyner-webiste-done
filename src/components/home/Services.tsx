import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown, Palette, LayoutTemplate, PieChart, Sparkles, Film } from "lucide-react";

const GROUPS = [
  {
    key: "basic",
    title: "Basic Design",
    icon: Palette,
    color: "from-lime-300 to-lime-500",
    items: ["Social Media Creatives", "Web Banners & Ads", "Icon Design", "AI Generated Images", "Animated GIFs", "Google Web Stories", "Emailer Design"],
  },
  {
    key: "standard",
    title: "Standard Design",
    icon: LayoutTemplate,
    color: "from-cyan-300 to-blue-500",
    items: ["Presentation Design", "Infographics (Web/Social)", "Print Infographics", "Brochure Design", "eBook Design", "Whitepaper Design", "Report Design", "Illustration", "Comic Strip Design"],
  },
  {
    key: "advanced",
    title: "Advanced Design",
    icon: PieChart,
    color: "from-purple-400 to-fuchsia-600",
    items: ["Data Visualization Infographics", "Presentation Infographics", "Infographic Reports", "Storyboarding", "Vector Illustrations", "Technical Illustrations", "Book & Magazine Illustrations", "Cover Design", "Employee Welcome Kit"],
  },
  {
    key: "branding",
    title: "Branding & Strategy",
    icon: Sparkles,
    color: "from-orange-400 to-pink-600",
    items: ["Logo Design", "Mascot Design", "Brand Identity Design", "Brand Design", "Marketing Campaign Design", "Marketing Collateral", "B2B Graphic Design"],
  },
  {
    key: "motion",
    title: "Premium & Motion",
    icon: Film,
    color: "from-emerald-300 to-teal-600",
    items: ["Animated Infographics", "Infographic Videos", "Portrait Illustrations", "Book & Magazine Layout"],
  },
];

export function Services() {
  const [open, setOpen] = useState<string | null>("basic");
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Services</div>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]">
            Move fast with <span className="text-serif-italic text-gradient-neon">40+ scalable</span> creative services
          </h2>
          <p className="mt-6 text-white/60">Click a category to reveal every deliverable inside it.</p>
        </div>

        <div className="mt-16 space-y-4">
          {GROUPS.map((g) => {
            const isOpen = open === g.key;
            const Icon = g.icon;
            return (
              <motion.div
                key={g.key}
                layout
                transition={{ layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
                className={`glass rounded-3xl overflow-hidden border ${isOpen ? "border-primary/40 shadow-[0_0_40px_rgba(214,255,0,.15)]" : "border-white/8"}`}
              >
                <motion.button
                  layout
                  onClick={() => setOpen(isOpen ? null : g.key)}
                  className="w-full flex items-center justify-between gap-6 p-6 md:p-8 text-left"
                >
                  <div className="flex items-center gap-5">
                    <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${g.color} text-black`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <div className="font-display text-3xl md:text-4xl tracking-tight">{g.title}</div>
                      <div className="text-xs text-white/50 mt-1">{g.items.length} services</div>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-primary">
                    <ChevronDown size={28} />
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {g.items.map((item, i) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.04 }}
                            className="group flex items-center gap-3 rounded-xl border border-white/8 bg-black/40 px-4 py-3 hover:border-primary/50 hover:bg-primary/5 transition-colors"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(214,255,0,.9)]" />
                            <span className="text-sm text-white/85 group-hover:text-white">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

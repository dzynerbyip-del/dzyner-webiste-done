import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MagneticButton } from "./MagneticButton";
import { Menu, X, ChevronDown } from "lucide-react";

const SERVICE_GROUPS = [
  {
    tag: "Creative design services",
    items: [
      "Ad creative", "Social media creative", "Presentation design",
      "Illustration design", "Branding services", "eBooks & report design",
      "Concept creation", "Print design", "Packaging & merchandise design",
    ],
  },
  {
    tag: "Specialized production services",
    items: [
      "Video production", "Motion design", "Email creation",
      "Web design", "Design Systems", "Product Design", "Copywriting",
    ],
  },
  {
    tag: "AI services",
    items: ["AI-powered creative", "AI consulting", "Automation"],
  },
  {
    tag: "Marketing services",
    items: ["Campaign strategy"],
  },
];

const WHY_ITEMS = [
  ["Our creative talent", "AI excellence"],
  ["Our technology", "Relationship manager"],
  ["Dedicated creative teams", "Fast delivery"],
  ["Consistent quality", ""],
];

const nav = [
  { to: "/services", label: "Services", mega: "services" as const },
  { to: "/why-us", label: "Why us", mega: "why" as const },
  { to: "/work", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<"services" | "why" | null>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseLeave={() => setMega(null)}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className={`flex items-center justify-between rounded-full px-4 py-2 md:px-6 md:py-3 transition-all ${scrolled || mega ? "glass-strong" : "bg-transparent"}`}>
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/favicon.png"
              alt="DZYNER"
              className="h-9 w-9"
              width={36}
              height={36}
            />
            <span className="font-display text-xl tracking-widest">DZYNER</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <div
                key={n.to}
                onMouseEnter={() => setMega(n.mega ?? null)}
                className="relative"
              >
                <Link
                  to={n.to}
                  className="relative flex items-center gap-1 px-4 py-2 text-sm text-white/70 hover:text-white transition-colors group"
                  activeProps={{ className: "text-primary" }}
                >
                  {n.label}
                  {n.mega && <ChevronDown size={12} className="opacity-60" />}
                  <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-primary transition-transform origin-left group-hover:scale-x-100" />
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton href="/contact" variant="neon">
              Book a call →
            </MagneticButton>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mega dropdowns */}
        <AnimatePresence>
          {mega === "services" && (
            <motion.div
              key="services-mega"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-[min(920px,95vw)] glass-strong rounded-3xl p-8 border border-primary/20 shadow-[0_20px_80px_-20px_rgba(214,255,0,.25)]"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                {SERVICE_GROUPS.map((g) => (
                  <div key={g.tag}>
                    <div className="inline-block rounded-full bg-primary/15 text-primary text-[11px] px-3 py-1 mb-3 border border-primary/30">
                      {g.tag}
                    </div>
                    <ul className="space-y-2">
                      {g.items.map((it) => (
                        <li key={it}>
                          <Link
                            to="/services"
                            onClick={() => setMega(null)}
                            className="text-sm text-white/75 hover:text-primary transition-colors block"
                          >
                            {it}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {mega === "why" && (
            <motion.div
              key="why-mega"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-[min(560px,95vw)] glass-strong rounded-3xl p-6 border border-primary/20 shadow-[0_20px_80px_-20px_rgba(214,255,0,.25)]"
            >
              <div className="grid grid-cols-2 gap-3">
                {WHY_ITEMS.flat().filter(Boolean).map((label) => (
                  <Link
                    key={label}
                    to="/why-us"
                    onClick={() => setMega(null)}
                    className="rounded-full border border-white/10 hover:border-primary bg-white/5 hover:bg-primary/10 hover:text-primary transition-colors text-sm text-white/85 px-4 py-2.5 text-left"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1"
          >
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-white/80 hover:text-primary rounded-lg hover:bg-white/5"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-foreground">
              Book a call
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

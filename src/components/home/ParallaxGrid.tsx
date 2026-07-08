import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { MagneticButton } from "@/components/site/MagneticButton";

// Placeholder gradients acting as design work tiles (no external image trademarks)
const TILES = [
  { hue: "from-orange-500 to-red-600", label: "GRUBHUB" },
  { hue: "from-blue-500 to-indigo-700", label: "Colgate" },
  { hue: "from-amber-700 to-orange-900", label: "Bar" },
  { hue: "from-neutral-800 to-neutral-950", label: "Roland" },
  { hue: "from-emerald-400 to-teal-600", label: "otto" },
  { hue: "from-neutral-700 to-neutral-900", label: "Collabera" },
  { hue: "from-pink-500 to-rose-700", label: "SUZANNE" },
  { hue: "from-cyan-500 to-blue-700", label: "Antler" },
  { hue: "from-lime-400 to-green-700", label: "MSFT" },
];

export function ParallaxGrid() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!wrap.current) return;
      const r = wrap.current.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <section ref={wrap} className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <div className="mb-6 inline-flex rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/80">
            Your creative team's{" "}
            <span className="text-serif-italic text-primary ml-1">creative team™</span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight">
            Scale your <span className="text-gradient-neon">in-house</span> team with top global talent.
          </h2>
          <p className="mt-6 max-w-md text-white/70 leading-relaxed">
            Powered by industry-leading AI workflows, delivering anything you can imagine — fast and affordably.
          </p>
          <div className="mt-8 flex gap-3">
            <MagneticButton href="/contact" variant="neon">Book a demo</MagneticButton>
            <MagneticButton href="/work" variant="outline">Explore work</MagneticButton>
          </div>
        </div>

        <div className="relative h-[520px] md:h-[620px]" style={{ perspective: "1200px" }}>
          <div className="grid grid-cols-3 gap-3 h-full">
            {[0, 1, 2].map((col) => (
              <ColumnStack key={col} col={col} mx={smx} my={smy} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ColumnStack({ col, mx, my }: any) {
  const yShift = useTransform(my, [-1, 1], col === 1 ? [40, -40] : col === 0 ? [-30, 30] : [30, -30]);
  const rot = useTransform(mx, [-1, 1], [-3, 3]);
  const slice = TILES.slice(col * 3, col * 3 + 3);
  return (
    <motion.div style={{ y: yShift, rotateY: rot }} className="flex flex-col gap-3 will-change-transform">
      {slice.map((t, i) => (
        <div
          key={i}
          className={`relative flex-1 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${t.hue}`}
          style={{ minHeight: 140 }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-display text-3xl text-white/95 drop-shadow-lg tracking-wider">{t.label}</div>
          </div>
          <div className="absolute inset-0 opacity-40 mix-blend-overlay"
            style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,.5), transparent 40%)" }}
          />
        </div>
      ))}
    </motion.div>
  );
}

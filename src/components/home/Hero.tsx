import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { MagneticButton } from "@/components/site/MagneticButton";
import { ArrowRight, Sparkles } from "lucide-react";

const HEADLINE = ["DESIGN.", "CREATE.", "INSPIRE."];

export function Hero() {
  const mouse = useRef({ x: 0, y: 0 });
  const wrap = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) => {
      const w = window.innerWidth, h = window.innerHeight;
      mouse.current.x = (e.clientX - w / 2) / w;
      mouse.current.y = (e.clientY - h / 2) / h;
      if (wrap.current) {
        wrap.current.style.setProperty("--mx", `${mouse.current.x * 20}px`);
        wrap.current.style.setProperty("--my", `${mouse.current.y * 20}px`);
        wrap.current.style.setProperty("--rx", `${-mouse.current.y * 4}deg`);
        wrap.current.style.setProperty("--ry", `${mouse.current.x * 4}deg`);
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background pt-32 pb-20 noise">
      {/* Animated grid floor */}
      <div className="pointer-events-none absolute inset-0 bg-grid-neon opacity-40 animate-grid-pan" />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

      {/* Floating glow blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] animate-float-slow" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-glow/15 blur-[120px] animate-float-slow" style={{ animationDelay: "-3s" }} />
      <div className="pointer-events-none absolute top-1/3 right-10 h-[300px] w-[300px] rounded-full bg-purple-glow/15 blur-[100px] animate-float-slow" style={{ animationDelay: "-1.5s" }} />

      {/* Floating 3D wireframe cubes */}
      <FloatingShape className="left-[6%] top-[22%]" delay={0} />
      <FloatingShape className="right-[8%] top-[30%]" delay={1.2} rotate={45} />
      <FloatingShape className="left-[10%] bottom-[15%]" delay={0.6} rotate={30} />

      <div
        ref={wrap}
        className="relative z-10 mx-auto max-w-7xl px-6"
        style={{
          transform: "perspective(1200px) rotateX(var(--rx,0)) rotateY(var(--ry,0)) translate3d(var(--mx,0), var(--my,0), 0)",
          transition: "transform .15s ease-out",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/80"
        >
          <Sparkles size={12} className="text-primary" />
          A Creative Design Studio for Modern Businesses
        </motion.div>

        <h1 className="font-display text-[clamp(2.75rem,13vw,12rem)] leading-[0.85] tracking-tight">
          {HEADLINE.map((word, wi) => (
            <div key={wi} className="block overflow-hidden">
              <div className="flex flex-wrap">
                {word.split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={mounted ? { y: "0%", opacity: 1 } : {}}
                    transition={{ duration: 0.9, delay: wi * 0.3 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className={`inline-block ${wi === 1 ? "text-gradient-neon" : "text-white"}`}
                  >
                    {ch}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr] items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="max-w-lg text-lg text-white/70 leading-relaxed"
          >
            One partner. Multiple creative teams. Endless possibilities. Scale your creative output with a dedicated relationship manager and specialized teams — no hiring, no salary burden, no back-and-forths.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 md:justify-end"
          >
            <MagneticButton href="/contact" variant="neon">
              Book a call <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href="/work" variant="ghost">
              See our work
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingShape({ className = "", delay = 0, rotate = 0 }) {
  return (
    <div
      className={`pointer-events-none absolute hidden md:block animate-float-slow ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className="relative h-24 w-24"
        style={{ transformStyle: "preserve-3d", transform: `rotateX(${rotate}deg) rotateY(${rotate * 1.5}deg)` }}
      >
        {[0, 1, 2, 3, 4, 5].map((f) => {
          const t = [
            "translateZ(48px)", "translateZ(-48px) rotateY(180deg)",
            "rotateY(90deg) translateZ(48px)", "rotateY(-90deg) translateZ(48px)",
            "rotateX(90deg) translateZ(48px)", "rotateX(-90deg) translateZ(48px)",
          ][f];
          return (
            <div
              key={f}
              className="absolute inset-0 border border-primary/50"
              style={{ transform: t, boxShadow: "0 0 20px rgba(214,255,0,.2), inset 0 0 20px rgba(214,255,0,.05)" }}
            />
          );
        })}
      </div>
    </div>
  );
}

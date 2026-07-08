import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const COPY = "With more than a decade shaping brands, we focus on branding, web design, motion and user experience. We truly enjoy working with businesses that aim to stand out. Let's build something incredible together.";

export function AboutIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });

  const chars = COPY.split("");
  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 md:py-32" style={{ fontFamily: "var(--font-kanit)" }}>
      {/* Decorative floating orbs (replacing external image URLs) */}
      <Orb className="top-[6%] left-[3%] md:left-[6%]" size={180} color="from-primary/40 to-transparent" delay={0.1} from="left" />
      <Orb className="bottom-[10%] left-[5%] md:left-[10%]" size={150} color="from-cyan-glow/40 to-transparent" delay={0.25} from="left" />
      <Orb className="top-[6%] right-[3%] md:right-[6%]" size={180} color="from-purple-glow/40 to-transparent" delay={0.15} from="right" />
      <Orb className="bottom-[10%] right-[5%] md:right-[10%]" size={190} color="from-pink-500/40 to-transparent" delay={0.3} from="right" />

      <div className="relative z-10 max-w-4xl flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-gradient-silver font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)", fontFamily: "var(--font-kanit)" }}
          >
            About us
          </motion.h2>

          <p className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[620px]" style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}>
            {chars.map((ch, i) => {
              const total = chars.length;
              const cp = i / total;
              const start = Math.max(0, cp - 0.1);
              const end = Math.min(1, cp + 0.05);
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
              return (
                <span key={i} style={{ position: "relative", display: "inline-block" }}>
                  <span style={{ visibility: "hidden" }}>{ch === " " ? "\u00A0" : ch}</span>
                  <motion.span style={{ position: "absolute", left: 0, top: 0, opacity }}>{ch === " " ? "\u00A0" : ch}</motion.span>
                </span>
              );
            })}
          </p>
        </div>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-opacity hover:opacity-90 active:opacity-75"
          style={{
            background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
            boxShadow: "0 4px 4px rgba(181,1,167,.25), 4px 4px 12px #7721B1 inset",
            outline: "2px solid #E3E3E3",
            outlineOffset: -3,
          }}
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  );
}

function Orb({ className, size, color, delay, from }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from === "left" ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay }}
      className={`pointer-events-none absolute z-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <div className={`w-full h-full rounded-full bg-gradient-radial bg-gradient-to-br ${color} blur-2xl animate-float-slow`} />
    </motion.div>
  );
}

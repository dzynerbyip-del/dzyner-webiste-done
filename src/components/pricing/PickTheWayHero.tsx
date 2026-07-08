import { motion } from "motion/react";

const CARDS = [
  {
    tag: "Plan 01",
    title: "PROJECT",
    chips: ["Scope", "Timeline", "Team"],
    tilt: -4,
    y: 0,
    highlight: false,
  },
  {
    tag: "Plan 02",
    title: "MONTHLY",
    chips: ["Scope", "Timeline", "Team"],
    tilt: 3,
    y: 60,
    highlight: true,
  },
  {
    tag: "Plan 03",
    title: "HOURLY",
    chips: ["Scope", "Timeline", "Team"],
    tilt: -2,
    y: 40,
    highlight: false,
  },
];

export function PickTheWayHero() {
  return (
    <section className="relative overflow-hidden bg-diagonal-stripes-lg pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-48 md:pb-40">
      <div className="absolute inset-0 pricing-glow pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 grid gap-12 lg:gap-16 lg:grid-cols-[1.15fr_1fr] items-center">
        {/* LEFT — Massive kanit headline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.35em] text-cyan-glow uppercase mb-5 sm:mb-6 font-mono"
          >
            Pricing
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ fontFamily: "var(--font-kanit)" }}
            className="text-white font-medium leading-[0.92] tracking-tight text-[clamp(2.75rem,9vw,8.5rem)]"
          >
            Pick the<br />way you<br />want to<br />move<span className="text-cyan-glow">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 sm:mt-8 max-w-md text-white/60 text-base sm:text-lg leading-relaxed"
          >
            Project bursts, monthly creative capacity, or specialist hours — without confusing agency math.
          </motion.p>
        </div>

        {/* RIGHT — Stacked cards: static on mobile, absolute-tilted on lg */}
        <div className="relative flex flex-col gap-5 lg:block lg:min-h-[560px]">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, x: 40, rotate: c.tilt * 3 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              style={{
                // desktop-only tilt + absolute stacking, injected via inline style so mobile stays clean
                ["--tilt" as string]: `${c.tilt}deg`,
                ["--top" as string]: `${i * 180 + c.y}px`,
              }}
              className="rounded-3xl border border-cyan-glow/30 bg-[#03211f]/90 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_80px_-20px_rgba(0,229,255,.35)]
                         lg:absolute lg:left-0 lg:right-0 lg:top-[var(--top)] lg:rotate-[var(--tilt)] lg:hover:rotate-0 transition-transform duration-500"
            >
              <div className="flex items-start justify-between gap-3 mb-6 sm:mb-10">
                <div
                  style={{ fontFamily: "var(--font-kanit)" }}
                  className="text-white text-[clamp(1.6rem,6vw,3.25rem)] font-semibold tracking-tight leading-none min-w-0 break-words"
                >
                  {c.highlight ? (
                    <span className="inline-block bg-cyan-glow text-black px-2.5 py-1 rounded-md">{c.title}</span>
                  ) : (
                    c.title
                  )}
                </div>
                <span className="shrink-0 rounded-full bg-cyan-glow text-black text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 tracking-wide">
                  {c.tag}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/5 text-white/80 text-xs px-3 sm:px-4 py-1 sm:py-1.5"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { MagneticButton } from "@/components/site/MagneticButton";

const BADGES = ["Branding", "Web · UI", "Motion", "Presentations", "Print", "Illustration", "AI Creative", "Campaigns", "Reports", "Video Edits"];

export function CTABanner() {
  const row = [...BADGES, ...BADGES];
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative rounded-[36px] overflow-hidden p-10 md:p-16 border border-primary/30 bg-gradient-to-br from-primary/10 via-black to-cyan-glow/10">
          <div className="absolute inset-0 bg-grid-neon opacity-30" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple-glow/25 blur-[100px]" />

          <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Start your project</div>
              <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9]">
                Your brand deserves <span className="text-gradient-neon">better creative</span> execution.
              </h2>
              <p className="mt-6 text-white/70 max-w-xl">
                Talk to a DZYNER relationship manager today. Get a scoped proposal in under 24 hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton href="/contact" variant="neon">Book a call →</MagneticButton>
                <MagneticButton href="tel:+918077439014" variant="outline">Call +91 80774 39014</MagneticButton>
              </div>
            </div>

            {/* Floating stack of "payment-like" cards */}
            <div className="relative h-72" style={{ perspective: "1000px" }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute inset-x-4 rounded-2xl border border-white/15 p-5 flex flex-col justify-between animate-float-slow"
                  style={{
                    top: `${i * 40}px`,
                    height: 170,
                    background: ["linear-gradient(135deg,#D6FF00,#6bff56)","linear-gradient(135deg,#00E5FF,#5c6dff)","linear-gradient(135deg,#8A2EFF,#ff5c8a)"][i],
                    transform: `translateZ(${(2 - i) * 30}px) rotateY(-8deg) rotateX(6deg)`,
                    animationDelay: `${i * -1.5}s`,
                    boxShadow: "0 30px 60px -20px rgba(0,0,0,.6)",
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="font-mono text-[10px] text-black/70">DZYNER · 0{i + 1}</div>
                    <div className="h-6 w-8 rounded bg-black/30" />
                  </div>
                  <div className="font-display text-2xl text-black tracking-wider">CREATE MORE</div>
                </div>
              ))}
            </div>
          </div>

          {/* right-to-left badge marquee */}
          <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-3">
              {row.map((b, i) => (
                <span key={i} className="shrink-0 rounded-full border border-white/15 bg-black/40 px-5 py-2 text-sm text-white/85">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

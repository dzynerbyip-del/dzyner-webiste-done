import { useMemo, useState } from "react";
import { motion } from "motion/react";

type Service = "design" | "dev" | "both";
type Speed = "7" | "14" | "regular";

export function ProjectEstimator() {
  const [service, setService] = useState<Service>("both");
  const [pages, setPages] = useState(5);
  const [content, setContent] = useState(false);
  const [seo, setSeo] = useState(false);
  const [speed, setSpeed] = useState<Speed>("regular");

  const { agency, freelancer, dzyner } = useMemo(() => {
    const base = service === "both" ? 1400 : service === "dev" ? 900 : 700;
    const addonPer = (content ? 50 : 0) + (seo ? 50 : 0);
    const speedPer = speed === "7" ? 100 : speed === "14" ? 25 : 0;
    const perPage = base + addonPer + speedPer;
    const dz = Math.max(499, perPage * pages * 0.18 + 299);
    const fl = Math.max(1500, perPage * pages * 0.55);
    const ag = Math.max(4000, perPage * pages * 1.15);
    return {
      agency: Math.round(ag / 500) * 500,
      freelancer: Math.round(fl / 250) * 250,
      dzyner: Math.round(dz / 50) * 50,
    };
  }, [service, pages, content, seo, speed]);

  return (
    <section className="relative py-24 md:py-32 bg-[#040604]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <div className="text-[11px] tracking-[0.35em] text-white/50 uppercase font-mono mb-4">
            Try project estimation calculator
          </div>
          <h2
            style={{ fontFamily: "var(--font-kanit)" }}
            className="text-white font-medium leading-[0.95] text-[clamp(2.25rem,5.5vw,4.5rem)]"
          >
            Get premium website within your <span className="text-serif-italic text-cyan-glow">budget</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 rounded-3xl border border-white/8 bg-[#0a0d0a]/80 p-6 md:p-10">
          {/* Controls */}
          <div className="space-y-8">
            <div>
              <div className="text-white font-semibold mb-4">What kind of service do you need?</div>
              <div className="space-y-2">
                {([
                  ["design", "Only Design"],
                  ["dev", "Only Development"],
                  ["both", "Design + Development"],
                ] as [Service, string][]).map(([v, l]) => (
                  <label key={v} className="flex items-center gap-3 cursor-pointer group">
                    <span className="relative grid place-items-center h-4 w-4 rounded-full border border-white/40 group-hover:border-primary transition-colors">
                      {service === v && <span className="absolute inset-[3px] rounded-full bg-primary shadow-[0_0_10px_rgba(214,255,0,.8)]" />}
                    </span>
                    <input
                      type="radio"
                      checked={service === v}
                      onChange={() => setService(v)}
                      className="hidden"
                    />
                    <span className="text-white/85">{l}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/8">
              <div className="text-white font-semibold mb-4">Number of Pages: <span className="text-primary">{pages}</span></div>
              <input
                type="range"
                min={1}
                max={30}
                value={pages}
                onChange={(e) => setPages(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-white/40 mt-2">
                <span>1</span><span>30</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/8">
              <div className="text-white font-semibold mb-4">Add-ons</div>
              <div className="space-y-3">
                {[
                  { label: "I will need help with content", value: content, set: setContent, price: "+$50/pages" },
                  { label: "I want to optimize my website for SEO", value: seo, set: setSeo, price: "+$50/pages" },
                ].map((a) => (
                  <label key={a.label} className="flex items-center justify-between gap-3 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className={`grid place-items-center h-4 w-4 rounded border ${a.value ? "bg-primary border-primary" : "border-white/40"}`}>
                        {a.value && <span className="text-[10px] text-black font-bold">✓</span>}
                      </span>
                      <input type="checkbox" checked={a.value} onChange={() => a.set(!a.value)} className="hidden" />
                      <span className="text-white/85 text-sm">{a.label}</span>
                    </div>
                    <span className="text-destructive text-xs">{a.price}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/8">
              <div className="text-white font-semibold mb-4">How fast do you need this?</div>
              <div className="space-y-2">
                {([
                  ["7", "Within 7 Days", "+$100/pages"],
                  ["14", "Within 14 Days", "+$25/pages"],
                  ["regular", "Regular Speed (Based on discussion)", "No extra cost"],
                ] as [Speed, string, string][]).map(([v, l, p]) => (
                  <label key={v} className="flex items-center justify-between gap-3 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <span className="relative grid place-items-center h-4 w-4 rounded-full border border-white/40 group-hover:border-primary transition-colors">
                        {speed === v && <span className="absolute inset-[3px] rounded-full bg-primary shadow-[0_0_10px_rgba(214,255,0,.8)]" />}
                      </span>
                      <input type="radio" checked={speed === v} onChange={() => setSpeed(v)} className="hidden" />
                      <span className="text-white/85 text-sm">{l}</span>
                    </div>
                    <span className={v === "regular" ? "text-cyan-glow text-xs" : "text-destructive text-xs"}>{p}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:pl-6 lg:border-l border-white/8 space-y-5">
            <div>
              <div className="text-2xl font-semibold text-white">Estimated Cost</div>
              <p className="text-white/60 text-sm mt-2">
                Compare what a typical agency or freelancer may charge against a DZYNER creative production plan.
              </p>
            </div>

            <motion.div
              layout
              className="rounded-2xl border border-white/8 bg-black/40 p-6"
            >
              <div className="text-xs text-white/60 mb-1">Typical Agency charges minimum</div>
              <div className="font-display text-5xl tracking-wide">${agency.toLocaleString()}</div>
              <div className="text-xs text-white/40 mt-3">+ Too much extra time & additional cost</div>
            </motion.div>

            <motion.div
              layout
              className="rounded-2xl border border-white/8 bg-black/40 p-6"
            >
              <div className="text-xs text-white/60 mb-1">Regular Freelancer charges minimum</div>
              <div className="font-display text-5xl tracking-wide">${freelancer.toLocaleString()}</div>
              <div className="text-xs text-white/40 mt-3">+ Too much headache & back-and-forth</div>
            </motion.div>

            <motion.div
              layout
              key={dzyner}
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              className="rounded-2xl p-6 relative overflow-hidden shadow-[0_10px_40px_-10px_rgba(232,69,131,.5)]"
              style={{ background: "linear-gradient(120deg,#ec4899 0%,#f97316 100%)" }}
            >
              <div className="text-xs text-white/90 mb-1 font-medium">With DZYNER Studio</div>
              <div className="font-display text-5xl tracking-wide text-white">${dzyner.toLocaleString()}</div>
              <div className="text-xs text-white/90 mt-3">Save your money, time & headache</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

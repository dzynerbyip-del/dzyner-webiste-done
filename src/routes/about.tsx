import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { AboutIntro } from "@/components/home/AboutIntro";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { Process } from "@/components/home/Process";
import { CTABanner } from "@/components/home/CTABanner";
import aboutImg from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DZYNER" },
      { name: "description", content: "A creative design studio for modern businesses. Multiple teams, one relationship." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: "/og-about.jpg" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-black">
      {/* HERO — editorial split */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-end">
          <div>
            <div className="font-mono text-[11px] tracking-[0.4em] uppercase text-primary mb-8">
              — Est. 2020 · A design studio
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-[clamp(2.5rem,10vw,9rem)] leading-[0.9] font-normal italic tracking-tight"
            >
              We make brands<br />
              <span style={{ fontFamily: "var(--font-kanit)" }} className="not-italic font-semibold text-gradient-neon">unforgettable.</span>
            </motion.h1>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { n: "150+", l: "brands" },
                { n: "10K+", l: "deliverables" },
                { n: "6 yrs", l: "shipping" },
              ].map((s) => (
                <div key={s.l}>
                  <div style={{ fontFamily: "var(--font-kanit)" }} className="text-4xl font-semibold text-primary">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img src={aboutImg} alt="DZYNER designer at work" width={1280} height={1440} className="rounded-3xl border border-white/8 aspect-[4/5] object-cover" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/70 backdrop-blur border border-primary/30 p-5">
              <div className="text-xs uppercase tracking-widest text-primary font-mono">Our craft</div>
              <div className="mt-1 text-lg" style={{ fontFamily: "var(--font-kanit)" }}>Senior creatives. Every project. No exceptions.</div>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutIntro />
      <Stats />
      <Process />
      <Testimonials />
      <CTABanner />
    </div>
  );
}

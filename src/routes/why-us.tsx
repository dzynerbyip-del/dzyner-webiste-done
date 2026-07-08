import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { WhyUs } from "@/components/home/WhyUs";
import { Stats } from "@/components/home/Stats";
import { Process } from "@/components/home/Process";
import { CTABanner } from "@/components/home/CTABanner";
import whyImg from "@/assets/why-hero.jpg";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why DZYNER — One partner. Multiple creative teams." },
      { name: "description", content: "No hiring stress. No salary burden. Single point of contact. Consistent high quality." },
      { property: "og:url", content: "/why-us" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
  component: WhyPage,
});

function WhyPage() {
  return (
    <div className="bg-blueprint">
      {/* HERO — cinematic image behind large outlined type */}
      <section className="relative overflow-hidden pt-36 pb-32 md:pt-44">
        <div className="absolute inset-0">
          <img src={whyImg} alt="Team collaboration" width={1280} height={960} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full border border-cyan-glow/40 bg-cyan-glow/10 text-cyan-glow text-[11px] font-mono uppercase tracking-[0.35em] px-4 py-2 mb-8"
          >
            Why teams choose us
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            style={{ fontFamily: "var(--font-kanit)" }}
            className="text-[clamp(2.5rem,11vw,10rem)] leading-[0.85] font-medium tracking-tight"
          >
            One partner.
            <br />
            <span className="text-outline text-white">Zero</span>{" "}
            <span className="text-serif-italic text-gradient-neon">friction.</span>
          </motion.h1>
          <p className="mt-10 max-w-xl mx-auto text-white/70 text-lg">
            Skip the hiring, the training, the endless clarifications. Plug into a senior creative bench that ships from day one.
          </p>
        </div>
      </section>

      <div className="bg-black"><Stats /></div>

      {/* Why with side image */}
      <section className="relative py-20 bg-blueprint">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1fr_1.3fr] items-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-cyan-glow/15 blur-3xl rounded-full" />
            <img src={whyImg} alt="Creative studio" loading="lazy" width={1280} height={960} className="relative rounded-3xl border border-cyan-glow/30" />
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-primary/40 bg-black/80 backdrop-blur px-6 py-4">
              <div className="font-mono text-xs text-primary uppercase tracking-widest">Live now</div>
              <div className="text-2xl font-display">24 senior creatives</div>
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--font-kanit)" }} className="text-[clamp(2rem,5vw,4rem)] leading-[0.95] font-medium">
              Different models.<br />
              Same operational <span className="text-serif-italic text-gradient-neon">wins.</span>
            </h2>
            <p className="mt-6 text-white/60">Click any reason to expand.</p>
          </div>
        </div>
      </section>

      <WhyUs />
      <Process />
      <CTABanner />
    </div>
  );
}

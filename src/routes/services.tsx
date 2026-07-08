import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Services } from "@/components/home/Services";
import { CTABanner } from "@/components/home/CTABanner";
import { FeatureTrio } from "@/components/home/FeatureTrio";
import heroImg from "@/assets/services-hero.jpg";
import bentoImg from "@/assets/services-bento.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DZYNER" },
      { name: "description", content: "40+ scalable creative services across branding, web, motion, presentation, print and AI." },
      { property: "og:title", content: "Services — DZYNER" },
      { property: "og:description", content: "40+ scalable creative services under one roof." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="bg-cyber-halftone">
      {/* HERO — split screen with 3D neon image */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] tracking-[0.4em] text-primary uppercase font-mono mb-6"
            >
              ⟶ Our Services
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ fontFamily: "var(--font-kanit)" }}
              className="font-medium leading-[0.9] tracking-tight text-[clamp(2.5rem,8vw,7.5rem)]"
            >
              Everything<br />
              <span className="text-outline text-primary">creative</span>,<br />
              under one <span className="text-serif-italic text-gradient-neon">roof.</span>
            </motion.h1>
            <p className="mt-8 max-w-md text-white/60 text-lg">
              Five categories. Forty-plus deliverables. From a single social post to a full brand system — swap talent in and out as your needs shift.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Branding", "Web", "Motion", "Presentation", "Print", "AI"].map((t) => (
                <span key={t} className="rounded-full border border-primary/40 bg-primary/10 text-primary text-xs px-4 py-1.5 font-mono uppercase tracking-widest">{t}</span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full" />
            <img
              src={heroImg}
              alt="3D neon creative artifacts"
              width={1280}
              height={960}
              className="relative rounded-3xl border border-primary/30 shadow-[0_30px_120px_-20px_rgba(214,255,0,.4)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Services accordion in a slightly different backdrop */}
      <div className="bg-black">
        <Services />
      </div>

      {/* Visual bento strip */}
      <section className="relative py-24 bg-cyber-halftone">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 items-center">
          <img
            src={bentoImg}
            alt="Bento grid of creative artifacts"
            loading="lazy"
            width={1280}
            height={960}
            className="rounded-3xl border border-white/8"
          />
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-cyan-glow mb-4 font-mono">Not a template shop</div>
            <h2 style={{ fontFamily: "var(--font-kanit)" }} className="text-[clamp(2rem,4.5vw,3.75rem)] leading-[1] font-medium">
              Every deliverable is <span className="text-serif-italic text-gradient-neon">hand-crafted</span> by a senior specialist.
            </h2>
            <p className="mt-6 text-white/60">No cookie-cutter output. No overseas farms. Just senior creatives that already know your industry.</p>
          </div>
        </div>
      </section>

      <FeatureTrio />
      <CTABanner />
    </div>
  );
}

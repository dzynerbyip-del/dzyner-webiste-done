import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PortfolioMarquee } from "@/components/home/PortfolioMarquee";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { CTABanner } from "@/components/home/CTABanner";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";

const PROJECTS = [
  { img: w1, title: "Iridescent Identity", client: "Neon Labs", tag: "Branding", year: "2026" },
  { img: w2, title: "Yell Loud", client: "Riot Records", tag: "Typography", year: "2025" },
  { img: w3, title: "Paper & Ink", client: "Studio Mono", tag: "Print System", year: "2025" },
  { img: w1, title: "Chrome Dreams", client: "Aurora Tech", tag: "3D & Motion", year: "2026" },
  { img: w3, title: "Editorial Reset", client: "Broadsheet", tag: "Web Design", year: "2024" },
  { img: w2, title: "Loud & Legible", client: "Ampere", tag: "Campaign", year: "2025" },
];

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — DZYNER" },
      { name: "description", content: "Recent creative work across branding, web, motion, and presentations." },
      { property: "og:url", content: "/work" },
      { property: "og:image", content: "/og-work.jpg" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="bg-black">
      {/* HERO — brutalist paper aesthetic */}
      <section className="relative bg-paper-brut text-black pt-40 pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="font-mono text-[11px] tracking-[0.4em] uppercase mb-8">Selected Work · 2020—2026</div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: "var(--font-kanit)" }}
            className="text-[clamp(3rem,15vw,14rem)] leading-[0.82] font-semibold tracking-tighter break-words"
          >
            RECENT<br />
            <span className="italic font-serif font-normal">creatives.</span>
          </motion.h1>
          <div className="mt-12 flex flex-wrap justify-between items-end gap-6">
            <p className="max-w-md text-black/70">Six years of shipped work — brand systems, editorial rebuilds, motion, and packaging. Every piece hand-crafted, senior-led.</p>
            <div className="font-mono text-xs uppercase tracking-widest border-b border-black pb-1">Scroll ↓</div>
          </div>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/8 ${i % 3 === 1 ? "md:translate-y-16" : ""}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={960}
                height={1280}
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <span className="rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1">{p.tag}</span>
                  <span className="font-mono text-xs text-white/60">{p.year}</span>
                </div>
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-widest">{p.client}</div>
                  <div style={{ fontFamily: "var(--font-kanit)" }} className="text-3xl mt-1 font-medium">{p.title}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link to="/contact" className="inline-block rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs px-8 py-4 hover:scale-105 transition-transform">
            Start your project →
          </Link>
        </div>
      </section>

      <PortfolioMarquee />
      <BrandMarquee />
      <CTABanner />
    </div>
  );
}

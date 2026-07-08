import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { ContactStrip } from "@/components/home/ContactStrip";
import contactImg from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DZYNER" },
      { name: "description", content: "Talk to a DZYNER relationship manager. Scoped proposal in under 24 hours." },
      { property: "og:title", content: "Contact DZYNER" },
      { property: "og:description", content: "Book a call with a relationship manager today." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const CHANNELS = [
  { icon: Mail, label: "Email", value: "hello@dzyner.studio", href: "mailto:hello@dzyner.studio" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MessageCircle, label: "WhatsApp", value: "Message us", href: "https://wa.me/919876543210" },
  { icon: MapPin, label: "Studio", value: "Bengaluru · Remote", href: "#" },
];

function ContactPage() {
  return (
    <div className="bg-warm-mesh">
      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] tracking-[0.4em] text-pink-400 uppercase font-mono mb-6"
            >
              ✳ Get in touch
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ fontFamily: "var(--font-kanit)" }}
              className="text-[clamp(2.5rem,10vw,9rem)] leading-[0.88] font-medium tracking-tight"
            >
              Let's <span className="text-serif-italic bg-gradient-to-r from-pink-400 via-fuchsia-400 to-orange-300 bg-clip-text text-transparent">create</span> something<br />
              worth remembering.
            </motion.h1>
            <p className="mt-8 max-w-md text-white/70 text-lg">
              Pick the channel you prefer. We reply within a business day with a scoped proposal.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-pink-500/30 blur-3xl rounded-full" />
            <img src={contactImg} alt="Neon envelopes" width={1280} height={960} className="relative rounded-3xl border border-pink-400/30" />
          </motion.div>
        </div>
      </section>

      {/* Channels grid */}
      <section className="relative py-16 bg-black">
        <div className="mx-auto max-w-7xl px-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-white/8 bg-gradient-to-br from-white/[.04] to-transparent p-6 hover:border-pink-400/50 transition-colors"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 text-black mb-6">
                  <Icon size={20} />
                </div>
                <div className="text-xs uppercase tracking-widest text-white/50">{c.label}</div>
                <div className="mt-2 text-lg font-medium group-hover:text-pink-400 transition-colors">{c.value}</div>
              </motion.a>
            );
          })}
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}

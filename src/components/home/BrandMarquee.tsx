const BRANDS = [
  "Coinbase", "Colgate", "Databricks", "Dropbox", "DoorDash", "Figma", "Grammarly",
  "Thomson Reuters", "Vimeo", "INTUIT", "Lyft", "MasterClass", "Reddit", "Rakuten",
  "Zenex", "BCG",
];

export function BrandMarquee() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <section className="relative py-16 md:py-24 border-y border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm text-muted-foreground">
          Creative support for <span className="text-primary font-semibold">400+</span> top global brands
        </p>
      </div>
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 px-6">
          {row.map((b, i) => (
            <div key={i} className="shrink-0 font-display text-3xl md:text-4xl text-white/40 hover:text-primary hover:[text-shadow:0_0_20px_rgba(214,255,0,.6)] transition-all tracking-widest whitespace-nowrap">
              {b}
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee-reverse gap-16 px-6">
          {row.slice().reverse().map((b, i) => (
            <div key={i} className="shrink-0 font-sans text-2xl md:text-3xl text-white/30 hover:text-cyan-glow transition-all whitespace-nowrap">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

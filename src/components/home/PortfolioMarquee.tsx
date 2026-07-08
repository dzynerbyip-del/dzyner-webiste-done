const PROJECTS = [
  { title: "Zenex Retail", g: "from-fuchsia-500 to-purple-700" },
  { title: "Neural Brand", g: "from-cyan-500 to-blue-700" },
  { title: "Kinetic Motion", g: "from-orange-400 to-rose-600" },
  { title: "Aegis Reports", g: "from-emerald-400 to-teal-700" },
  { title: "Nova Deck", g: "from-lime-300 to-green-600" },
  { title: "Prism Systems", g: "from-yellow-400 to-orange-600" },
  { title: "Vertex Studio", g: "from-sky-400 to-indigo-700" },
  { title: "Halo Campaign", g: "from-pink-400 to-fuchsia-700" },
];

export function PortfolioMarquee() {
  const row = [...PROJECTS, ...PROJECTS];
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Recent work</div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
              Creatives that <span className="text-gradient-neon">move markets.</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee-slow gap-6 px-6">
          {row.map((p, i) => (
            <a key={i} href="/work" className="group relative shrink-0 w-[340px] md:w-[440px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.g} transition-transform duration-700 group-hover:scale-110`} />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 opacity-40 mix-blend-overlay"
                style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,.5), transparent 45%)" }} />
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/70">Case Study</div>
                  <div className="font-display text-3xl text-white">{p.title}</div>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-black group-hover:bg-primary transition-colors">→</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

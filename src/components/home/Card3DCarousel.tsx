import { useEffect, useRef, useState } from "react";

// Volumetric 3D bank-card carousel adapted for DZYNER — signature cards representing service tiers.
const CARDS = [
  { title: "Branding", gradient: "linear-gradient(135deg, #D6FF00 0%, #6bff56 100%)", tag: "01", label: "IDENTITY" },
  { title: "Web & UI", gradient: "linear-gradient(135deg, #00E5FF 0%, #6d5cff 100%)", tag: "02", label: "DIGITAL" },
  { title: "Motion", gradient: "linear-gradient(135deg, #ff5c8a 0%, #8A2EFF 100%)", tag: "03", label: "MOTION" },
  { title: "Presentation", gradient: "linear-gradient(135deg, #ffb347 0%, #ff5c5c 100%)", tag: "04", label: "SLIDES" },
  { title: "Print & Pack", gradient: "linear-gradient(135deg, #a0ffbe 0%, #00E5FF 100%)", tag: "05", label: "PHYSICAL" },
];

export function Card3DCarousel() {
  const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frameId = useRef(0);
  const progress = useRef(0);
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const [metrics, setMetrics] = useState({ cardW: 340, cardH: 214 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.tx = Math.max(-1, Math.min(1, (e.clientX - innerWidth / 2) / (innerWidth / 2)));
      mouse.current.ty = Math.max(-1, Math.min(1, (e.clientY - innerHeight / 2) / (innerHeight / 2)));
    };
    const leave = () => { mouse.current.tx = 0; mouse.current.ty = 0; };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseleave", leave); };
  }, []);

  useEffect(() => {
    const resize = () => {
      const w = innerWidth, h = innerHeight;
      let cardW = Math.round(w * 0.16 + 130);
      const hf = Math.min(1, Math.max(0.65, h / 850));
      cardW = Math.min(360, Math.max(180, Math.round(cardW * hf)));
      setMetrics({ cardW, cardH: Math.round(cardW / 1.5925) });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const D = 1350;
    const loop = () => {
      progress.current += 0.0016;
      mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.08;
      mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.08;
      const { cardH } = metrics;
      const h = innerHeight;
      const cont = progress.current;
      const round = Math.round(cont);
      const d = cont - round;
      const eased = Math.sign(d) * Math.pow(Math.abs(d) * 2, 4.2) / 2;
      const va = round + eased;
      for (let i = 0; i < CARDS.length; i++) {
        const c = cardsRefs.current[i];
        if (!c) continue;
        let off = i - va;
        const hc = CARDS.length / 2;
        while (off > hc) off -= CARDS.length;
        while (off < -hc) off += CARDS.length;
        const abs = Math.abs(off);
        const sign = Math.sign(off);
        if (abs > 3.0) { c.style.visibility = "hidden"; continue; }
        c.style.visibility = "visible";
        const gap = 36, peek = -55;
        let y = 0, z = 0, rot = 0;
        if (abs <= 1) {
          const t = abs, et = t * t * (3 - 2 * t);
          y = -sign * (et * (cardH + gap));
          z = 400 + et * (220 - 400);
          rot = et * 132;
        } else if (abs <= 2) {
          const t = abs - 1, et = t * t * (3 - 2 * t);
          const yS = cardH + gap, zS = 220, rS = 132, zE = -60, rE = 175;
          const sE = D / (D - zE);
          const yE = (h / 2 - peek) / sE - cardH / 2;
          y = -sign * (yS + et * (yE - yS));
          z = zS + et * (zE - zS);
          rot = rS + et * (rE - rS);
        } else {
          const t = Math.min(abs - 2, 1), et = t * t * (3 - 2 * t);
          const zS = -60, rS = 175, zE3 = -250, rE3 = 195;
          const sE2 = D / (D - zS);
          const yE2 = (h / 2 - peek) / sE2 - cardH / 2;
          const sE3 = D / (D - zE3);
          const yE3 = (h / 2 + 100) / sE3 + cardH / 2;
          y = -sign * (yE2 + et * (yE3 - yE2));
          z = zS + et * (zE3 - zS);
          rot = rS + et * (rE3 - rS);
        }
        const lrot = -sign * rot;
        const cf = Math.max(0, 1 - abs);
        const tx = -mouse.current.y * 12 * cf;
        const ty = mouse.current.x * 15 * cf;
        c.style.zIndex = String(Math.round(z));
        c.style.opacity = "1";
        c.style.transform = `translateY(${y.toFixed(2)}px) translateZ(${z.toFixed(2)}px) rotateX(${(lrot + tx).toFixed(2)}deg) rotateY(${ty.toFixed(2)}deg) rotateZ(-3deg)`;
      }
      frameId.current = requestAnimationFrame(loop);
    };
    frameId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId.current);
  }, [metrics]);

  const thicknessLayers = [-1.47, -0.73, 0, 0.73, 1.47];

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center mb-8 relative z-10">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">One studio · Multiple teams</div>
        <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]">
          The <span className="text-gradient-neon">DZYNER</span> stack
        </h2>
        <p className="mt-4 text-white/60 max-w-lg mx-auto">A dedicated team for every creative surface — scroll or hover the deck to explore.</p>
      </div>

      <div className="relative h-[640px] w-full overflow-hidden" style={{ perspective: "1350px" }}>
        <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
          {CARDS.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardsRefs.current[i] = el; }}
              className="absolute"
              style={{
                width: metrics.cardW,
                height: metrics.cardH,
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
              }}
            >
              {thicknessLayers.map((zOff, li) => {
                const isFront = li === thicknessLayers.length - 1;
                const isBack = li === 0;
                if (!isFront && !isBack) {
                  return (
                    <div key={li} className="absolute inset-0 rounded-2xl bg-neutral-900"
                      style={{ transform: `translateZ(${zOff}px)`, backfaceVisibility: "hidden" }} />
                  );
                }
                if (isFront) {
                  return (
                    <div key={li}
                      className="absolute inset-0 rounded-2xl overflow-hidden border border-white/15 p-5 flex flex-col justify-between"
                      style={{ transform: `translateZ(${zOff}px)`, backfaceVisibility: "hidden", background: card.gradient }}>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-mono text-[10px] text-black/70 tracking-widest">{card.tag}</div>
                          <div className="mt-1 font-display text-2xl md:text-3xl text-black tracking-tight">{card.title}</div>
                        </div>
                        <div className="h-10 w-12 rounded-md bg-gradient-to-br from-yellow-300 to-yellow-600 opacity-80" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] text-black/60 tracking-widest">DZYNER · STUDIO</div>
                        <div className="mt-1 font-display text-4xl text-black tracking-wider">{card.label}</div>
                      </div>
                      <div className="absolute bottom-4 right-4 flex gap-1">
                        <div className="h-5 w-5 rounded-full bg-black/40" />
                        <div className="h-5 w-5 rounded-full bg-white/40 -ml-2" />
                      </div>
                    </div>
                  );
                }
                // back
                return (
                  <div key={li}
                    className="absolute inset-0 rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 flex flex-col justify-between p-5"
                    style={{ transform: `translateZ(${zOff}px)`, backfaceVisibility: "hidden" }}>
                    <div className="absolute inset-0 opacity-30" style={{ background: card.gradient, filter: "blur(28px)" }} />
                    <div className="relative h-8 bg-black -mx-5 mt-1" />
                    <div className="relative">
                      <div className="font-mono text-xs text-white/80 tracking-widest">{card.tag} · {card.label}</div>
                      <div className="font-display text-2xl text-white mt-1">{card.title}</div>
                      <div className="text-[11px] text-white/50 mt-2">DZYNER · SIGNATURE SERIES</div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

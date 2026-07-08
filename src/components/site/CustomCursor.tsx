import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      pos.current.tx = e.clientX;
      pos.current.ty = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [role='button'], [data-magnetic]"));
    };

    let raf = 0;
    const loop = () => {
      pos.current.x += (pos.current.tx - pos.current.x) * 0.15;
      pos.current.y += (pos.current.ty - pos.current.y) * 0.15;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${pos.current.x - 20}px, ${pos.current.y - 20}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-primary mix-blend-difference"
        style={{ boxShadow: "0 0 10px rgba(214,255,0,.9)" }}
      />
      <div
        ref={ring}
        className={`cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border transition-[width,height,opacity,border-color] duration-200 ${
          hover ? "h-16 w-16 border-primary/80 opacity-100" : "border-white/40 opacity-70"
        }`}
        style={{ borderColor: hover ? "rgba(214,255,0,.8)" : undefined }}
      />
    </>
  );
}

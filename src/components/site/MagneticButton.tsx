import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  strength?: number;
  variant?: "neon" | "outline" | "ghost";
}

export function MagneticButton({ children, className = "", onClick, href, strength = 0.35, variant = "neon" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  const variants: Record<string, string> = {
    neon: "bg-primary text-primary-foreground neon-glow hover:brightness-110",
    outline: "border border-primary/60 text-primary hover:bg-primary/10",
    ghost: "border border-white/15 text-white hover:bg-white/5",
  };

  const inner = (
    <motion.div
      ref={ref}
      data-magnetic
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-sm tracking-wide transition-[filter,background] ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
  if (href) return <a href={href} className="inline-block">{inner}</a>;
  return inner;
}

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      className="fixed left-0 top-0 z-[9997] h-[2px] w-full origin-left bg-gradient-to-r from-primary via-cyan-glow to-purple-glow"
      style={{ scaleX, boxShadow: "0 0 12px rgba(214,255,0,.6)" }}
    />
  );
}

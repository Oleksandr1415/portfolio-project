// src/partials/scroll-reveal.tsx
import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

  return (
    <motion.div ref={ref} style={{ opacity, scale }} className={`snap-center ${className ?? ''}`}>
      {children}
    </motion.div>
  );
}

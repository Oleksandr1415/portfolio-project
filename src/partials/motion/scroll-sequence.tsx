// src/partials/scroll-sequence.tsx
import { useRef, Children, type ReactNode } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';

interface ScrollSequenceProps {
  children: ReactNode;
  className?: string;
  /** how many viewport-heights of scroll to allocate per item */
  heightPerItemVh?: number;
}

function SequenceItem({
  index,
  count,
  progress,
  children,
}: {
  index: number;
  count: number;
  progress: MotionValue<number>;
  children: ReactNode;
}) {
  const start = index / count;
  const mid = (index + 0.5) / count;
  const end = (index + 1) / count;

  const isFirst = index === 0;
  const isLast = index === count - 1;

  const opacity = useTransform(
    progress,
    isFirst ? [mid, end] : isLast ? [start, mid] : [start, mid, end],
    isFirst ? [1, 0] : isLast ? [0, 1] : [0, 1, 0],
  );
  const scale = useTransform(
    progress,
    isFirst ? [mid, end] : isLast ? [start, mid] : [start, mid, end],
    isFirst ? [1, 0.85] : isLast ? [0.85, 1] : [0.85, 1, 0.85],
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}

export default function ScrollSequence({
  children,
  className,
  heightPerItemVh = 100,
}: ScrollSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = Children.toArray(children);
  const count = items.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      ref={containerRef}
      style={{ height: `${count * heightPerItemVh}vh` }}
      className={`relative ${className ?? ''}`}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {items.map((child, index) => (
          <SequenceItem key={index} index={index} count={count} progress={scrollYProgress}>
            {child}
          </SequenceItem>
        ))}
      </div>
    </div>
  );
}

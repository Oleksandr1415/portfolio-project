import type { SkillPlanet } from '@/mock/skills';
import PlanetWithMoons from '@/partials/space-orbits-tools/planet-with-moons';
import { motion, useMotionTemplate, useScroll, useTransform } from 'motion/react';
import { forwardRef, useEffect, useRef, useState } from 'react';

interface SkillsMobilePlanetProps {
  planet: SkillPlanet;
  index: number;
}

const STICKY_TOP = '52%';

function PlanetContent({ planet, index }: SkillsMobilePlanetProps) {
  return (
    <PlanetWithMoons
      disableHoverEffect={true}
      label={planet.headline}
      moons={planet.moons}
      planetIndex={index}
      planetVariant={planet.variant}
      speed={0.03}
    />
  );
}

const SkillsMobilePlanetScroll = forwardRef<HTMLDivElement, SkillsMobilePlanetProps>(
  function SkillsMobilePlanetScroll({ planet, index }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start end', 'end start'],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.65, 0.8], [0.4, 1, 1, 1, 0.4]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.65, 0.8], [0.65, 1, 1, 1, 0.65]);
    const translate = -20;
    const transform = useMotionTemplate`translateY(${translate}%) scale(${scale})`;

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        data-slot="mobile-planet-container"
        className="relative h-[200svh] w-full py-8 last:pb-0"
      >
        <motion.div
          className="sticky aspect-square w-full"
          style={{ top: STICKY_TOP, opacity, transform }}
        >
          <PlanetContent planet={planet} index={index} />
        </motion.div>
      </div>
    );
  },
);

const SkillsMobilePlanet = forwardRef<HTMLDivElement, SkillsMobilePlanetProps>(
  function SkillsMobilePlanet(props, ref) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return (
        <div
          ref={ref}
          data-slot="mobile-planet-container"
          className="relative h-svh w-full py-8 last:pb-0"
        >
          <div
            className="sticky aspect-square w-full -translate-y-1/2"
            style={{ top: STICKY_TOP }}
          >
            <PlanetContent {...props} />
          </div>
        </div>
      );
    }

    return <SkillsMobilePlanetScroll ref={ref} {...props} />;
  },
);

export default SkillsMobilePlanet;

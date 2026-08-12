import type { SkillPlanet } from '@/mock/skills';
import PlanetWithMoons from '@/partials/space-orbits-tools/planet-with-moons';
import { motion, useMotionTemplate, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface SkillsMobilePlanetProps {
  planet: SkillPlanet;
  index: number;
}

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

function SkillsMobilePlanetScroll({ planet, index }: SkillsMobilePlanetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.65, 0.8], [0.4, 1, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.65, 0.8], [0.65, 1, 1, 1, 0.65]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.7], [0, 1, 1, 0]);
  const translate =
    -20; /* useTransform(scrollYProgress, [0, 0.4, 0.5, 0.5, 0.7], [0, -25, -25, -25, 0]); */

  const transform = useMotionTemplate`translateY(${translate}%) scale(${scale})`;

  return (
    <div
      ref={containerRef}
      data-slot="mobile-planet-container"
      className="relative h-[200svh] w-full py-8 last:pb-0"
    >
      <motion.div
        className="sticky top-[40%] flex w-full justify-center"
        style={{ opacity: headerOpacity }}
      >
        <h4>{planet.headline}</h4>
      </motion.div>
      <motion.div className="sticky top-[40%] aspect-square w-full" style={{ opacity, transform }}>
        <PlanetContent planet={planet} index={index} />
      </motion.div>
    </div>
  );
}

export default function SkillsMobilePlanet(props: SkillsMobilePlanetProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div data-slot="mobile-planet-container" className="relative h-svh w-full py-8 last:pb-0">
        <div className="sticky top-1/2 aspect-square w-full -translate-y-1/2">
          <PlanetContent {...props} />
        </div>
      </div>
    );
  }

  return <SkillsMobilePlanetScroll {...props} />;
}

import type { PlanetVariant, SkillPlanet } from '@/mock/skills';
import { cn } from '@/utils/helpers';
import { AnimatePresence, motion } from 'motion/react';

const dotVariantClass: Record<PlanetVariant, string> = {
  core: 'planet-core',
  default: 'planet-markup',
  design: 'planet-design',
  framework: 'planet-framework',
  markup: 'planet-markup',
  tools: 'planet-tools',
};

interface SkillsMobileProgressProps {
  skillPlanets: SkillPlanet[];
  activeIndex: number;
  visible: boolean;
}

export default function SkillsMobileProgress({
  skillPlanets,
  activeIndex,
  visible,
}: SkillsMobileProgressProps) {
  const activePlanet = skillPlanets[activeIndex];
  const progress =
    skillPlanets.length > 1 ? activeIndex / (skillPlanets.length - 1) : 0;

  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -6 }}
      transition={{ duration: 0.25 }}
      className={cn(['pointer-events-none fixed top-15 right-0 left-0 z-1000 px-3', !visible && 'invisible'])}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-lg flex-col items-center gap-2.5 rounded-b-xl border border-white/5 bg-gray-900/55 px-4 py-3 backdrop-blur-md">
        <AnimatePresence mode="wait">
          <motion.p
            key={activePlanet.headline}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-sm font-semibold tracking-[0.12em] text-white/90 uppercase"
          >
            {activePlanet.headline}
          </motion.p>
        </AnimatePresence>

        <div className="relative flex w-full max-w-xs items-center justify-between px-1">
          <div className="absolute top-1/2 right-3 left-3 h-px -translate-y-1/2 bg-white/15" />
          <div
            className="absolute top-1/2 left-3 h-px -translate-y-1/2 bg-white/45 transition-[width] duration-300 ease-out"
            style={{ width: `calc((100% - 1.5rem) * ${progress})` }}
          />

          {skillPlanets.map((planet, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={planet.headline}
                className={cn([
                  'relative shrink-0 rounded-full transition-all duration-300',
                  dotVariantClass[planet.variant],
                  isActive ? 'size-4 ring-2 ring-white/30' : 'size-2.5 opacity-45',
                ])}
                aria-current={isActive ? 'step' : undefined}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

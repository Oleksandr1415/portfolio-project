import { useRef } from 'react';
import OrbitingBody, { type OrbitingBodyHandle } from '@/partials/space-orbits-tools/orbiting-body';
import OrbitPath from '@/partials/space-orbits-tools/orbiting-path';
import PlanetWithMoons from '@/partials/space-orbits-tools/planet-with-moons';
import { useOrbitAnimation } from '@/partials/space-orbits-tools/use-orbit-animation';
import { type SkillPlanet } from '@/mock/skills';
import Badges from '@/partials/badges/badges';
import { cn } from '@/utils/helpers';

export interface SkillsSolarSystemProps {
  className?: string;
  coreSkills: string[];
  skillPlanets: SkillPlanet[];
}

export default function SkillsSolarSystem({
  className,
  coreSkills,
  skillPlanets,
}: SkillsSolarSystemProps) {
  const speed = 0.02;
  const planetRefs = useRef<(OrbitingBodyHandle | null)[]>([]);

  useOrbitAnimation(speed, (angle) => {
    planetRefs.current.forEach((planet) => planet?.updateAngle(angle));
  });

  return (
    <div
      className={cn([
        'relative z-1 hidden w-screen items-center justify-center lg:flex',
        className,
      ])}
    >
      <div className="relative z-2 aspect-square w-[90vmin]">
        {/* Sun */}
        <div className="planet-core-desktop bg-gradient-planet absolute top-1/2 left-1/2 flex h-[25%] w-[25%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full p-4">
          <span className="pb-4 text-center text-4xl font-bold text-purple-200 select-none">
            Core Skills
          </span>
          <Badges
            badgeList={coreSkills}
            badgeClass="bg-primary-dark border border-primary-light text-white"
            className="overflow-hidden"
          />
        </div>

        {/* Planets (each with its own moons) */}
        <div className="group/planets absolute inset-0">
          {skillPlanets?.map((planet, index) => {
            const orbitSize = 50 + index * 14;
            return (
              <div key={planet.headline}>
                <OrbitPath size={orbitSize} />
                <OrbitingBody
                  ref={(el) => {
                    planetRefs.current[index] = el;
                  }}
                  orbitRadius={orbitSize / 2}
                  phaseShift={index * 5}
                  speed={0.15}
                  className="z-2 size-[16%] has-[.planet-node:hover]:z-100"
                >
                  <PlanetWithMoons
                    label={planet.headline}
                    moons={planet.moons}
                    planetVariant={planet.variant}
                  />
                </OrbitingBody>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

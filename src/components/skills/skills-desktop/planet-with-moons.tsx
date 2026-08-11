import { useEffect, useRef } from 'react';
import OrbitingBody, { type OrbitingBodyHandle } from './orbiting-body';
import OrbitPath from './orbiting-path';
import { cn } from '@/utils/helpers';
import { planetStyleVariants, type PlanetVariant } from '@/mock/skills';

export interface PlanetWithMoonsProps {
  className?: string;
  planetIndex?: number; // want to add shifting to the moons depending on the parent order to avoid all moons to be placed the same
  label: string;
  moons: string[];
  speed?: number; // moon orbit speed
  planetVariant?: PlanetVariant;
}

export default function PlanetWithMoons({
  className,
  label,
  moons,
  speed = 0.03,
  planetIndex,
  planetVariant = 'core',
}: PlanetWithMoonsProps) {
  const moonRefs = useRef<(OrbitingBodyHandle | null)[]>([]);

  useEffect(() => {
    let angle = 0;
    let frameId: number;
    const animate = () => {
      angle += speed;
      moonRefs.current.forEach((moon) => moon?.updateAngle(angle));
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [speed]);

  return (
    <div
      className={cn([
        'hover:bg-blur-sm relative aspect-square transition-transform duration-300 ease-out will-change-transform hover:z-100 hover:scale-125',
        className,
      ])}
    >
      <div
        data-slot="planet-node"
        className={cn([
          'planet-node relative z-10 aspect-square',
          'transition-[transform,filter,opacity] duration-300 ease-out will-change-transform',
          'hover:z-50! hover:scale-115! hover:opacity-100! hover:blur-none!',
          'group group-has-[.planet-node:hover]/planets:scale-95 group-has-[.planet-node:hover]/planets:opacity-50 group-has-[.planet-node:hover]/planets:blur-[2px]',
          className,
        ])}
      >
        {/* Planet body */}
        <div
          className={cn([
            'planet-core-desktop absolute top-1/2 left-1/2 flex h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full',
            planetStyleVariants[planetVariant],
          ])}
        >
          <span className="text-[10px] font-bold select-none">{label.toUpperCase()}</span>
        </div>

        {/* Moons */}
        {moons.map((moon, index) => {
          const orbitSize = 70 + index * 14;
          return (
            <div key={moon}>
              <OrbitPath size={orbitSize} />
              <OrbitingBody
                ref={(el) => {
                  moonRefs.current[index] = el;
                }}
                orbitRadius={orbitSize / 2}
                phaseShift={index * 2.4 + (planetIndex || 0)}
                speed={0.3 - index * 0.02}
                className={cn([
                  'pointer-events-none flex size-[16%] items-center justify-center rounded-full text-white',
                  planetStyleVariants[planetVariant],
                ])}
              >
                <span className="text-[8px] text-white select-none">{moon}</span>
              </OrbitingBody>
            </div>
          );
        })}
      </div>
    </div>
  );
}

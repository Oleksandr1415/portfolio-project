import { useState, useEffect } from 'react';
import SkillsMoonDesktop from './skillsMoonDesktop';
import { type SkillPlanets } from '@/mock/skill-planets';
import Badges from '../partials/badges';
import { cn } from '@/utils/helpers';

export interface SkillsPlanetDestopProps {
  skillPlanets: SkillPlanets[];
  coreSkills: string[];
}

export default function skillsPlanetDestop({ skillPlanets, coreSkills }: SkillsPlanetDestopProps) {
  const [angle, setAngle] = useState(0);

  // Speed of the orbit
  const speed = 0.02;

  useEffect(() => {
    let frameId: any;
    const animate = () => {
      setAngle((prev) => prev + speed);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="relative hidden aspect-square h-[90vh] lg:block">
      {/* Central Star */}
      <div
        className={cn([
          'planet-core-desktop bg-gradient-planet absolute top-1/2 left-1/2 flex aspect-square h-[30%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[50%] p-4',
          'hover:shadow-[0_0_20px_8px_var(--color-primary),0_0_40px_0_var(--color-primary),-4px_-3px_10px_0_rgba(0,0,0,0.50)_inset]',
        ])}
      >
        <Badges badgeList={coreSkills} badgeClass="bg-primary-light" />
      </div>
      {/* Moons */}
      {skillPlanets?.map((planet, index) => {
        return (
          <SkillsMoonDesktop
            key={planet.headline}
            planet={planet}
            angle={angle}
            speed={0.4 - index * 0.1}
            phaseShift={index * 2.7}
            index={index}
          />
        );
      })}
    </div>
  );
}

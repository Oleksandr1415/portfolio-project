import { useEffect, useRef } from 'react';
import SkillsMoonDesktop, { type SkillsMoonHandle } from './skills-desktop-moon';
import SkillsDesktopBackground from './skills-desktop-background';
import { type SkillPlanets } from '@/mock/skills';
import Badges from '@/partials/badges/badges';
import { cn } from '@/utils/helpers';
import { TooltipProvider } from '@/components/ui/tooltip';

export interface SkillsPlanetDestopProps {
  className?: string;
  coreSkills: string[];
  skillPlanets: SkillPlanets[];
}

export default function skillsDesktop({
  className,
  coreSkills,
  skillPlanets,
}: SkillsPlanetDestopProps) {
  const speed = 0.02;
  const moonRefs = useRef<(SkillsMoonHandle | null)[]>([]);

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
  }, []);

  return (
    <div className={cn(['relative z-1 hidden w-screen items-center justify-center lg:flex'])}>
      <div className="relative z-2 aspect-square h-[90vh] overflow-hidden">
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
        <TooltipProvider closeDelay={2000}>
          {skillPlanets?.map((planet, index) => {
            return (
              <SkillsMoonDesktop
                ref={(el) => {
                  moonRefs.current[index] = el;
                }}
                key={planet.headline}
                planet={planet}
                speed={0.4 - index * 0.1}
                phaseShift={index * 2.7}
                index={index}
              />
            );
          })}
        </TooltipProvider>
      </div>
      <SkillsDesktopBackground />
    </div>
  );
}

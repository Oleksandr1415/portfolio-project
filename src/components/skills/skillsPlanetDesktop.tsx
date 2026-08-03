import { useState, useEffect } from 'react';
import SkillsMoonDesktop from './skillsMoonDesktop';
import { type PlanetDesign, type SkillPlanets } from '@/mock/skill-planets';
import Badges from '../partials/badges';
import { cn } from '@/utils/helpers';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

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
    <div className="relative z-1 flex w-screen items-center justify-center">
      <div className="relative z-2 hidden aspect-square h-[90vh] overflow-hidden lg:block">
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
            <Tooltip>
              <TooltipTrigger>
                <SkillsMoonDesktop
                  key={planet.headline}
                  planet={planet}
                  angle={angle}
                  speed={0.4 - index * 0.1}
                  phaseShift={index * 2.7}
                  index={index}
                />
              </TooltipTrigger>
              <TooltipContent>
                <Badges
                  badgeList={planet.badgesList}
                  variant={planet.headline.toLowerCase() as PlanetDesign}
                />
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>

      <div className="absolute inset-0">
        <div
          data-slot="skills-diagram-desktop"
          className="relative z-1 hidden aspect-square size-full h-[90vh] flex-col items-center overflow-hidden md:flex"
        >
          {/* <!--  SPACE BACKGROUND --> */}

          <div
            data-slot="spaceBackground"
            className="-p-20 absolute top-1/2 left-1/2 z-1 size-[300%] w-screen -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0f]"
          >
            {/* Fog-Layer */}
            <div
              className="bg-animate-pulse animation-duration-[4s] absolute inset-0 opacity-70 blur-3xl"
              style={{
                background: `
        radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.25), transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.20), transparent 50%),
        radial-gradient(circle at 50% 85%, rgba(139, 92, 246, 0.18), transparent 50%)
        `,
              }}
            ></div>
            {/* Stars-Layer */}
            <div
              className="animate-slow-spin absolute inset-0 opacity-50"
              style={{
                backgroundImage: `
    radial-gradient(1.5px 1.5px at 20px 30px, white, transparent),
    radial-gradient(1px 1px at 60px 70px, white, transparent),
    radial-gradient(1px 1px at 90px 40px, white, transparent),
    radial-gradient(1.5px 1.5px at 130px 110px, white, transparent),
    radial-gradient(1px 1px at 160px 20px, white, transparent),
    radial-gradient(1px 1px at 30px 150px, white, transparent)
    `,
                backgroundRepeat: 'repeat',
                backgroundSize: '180px 180px',
              }}
            ></div>
            <div
              className="animate-slow-spin absolute inset-0 opacity-50 [animation-direction:reverse]"
              style={{
                backgroundImage: `
    radial-gradient(1.5px 1.5px at 20px 30px, white, transparent),
    radial-gradient(1px 1px at 60px 70px, white, transparent),
    radial-gradient(1px 1px at 90px 40px, white, transparent),
    radial-gradient(1.5px 1.5px at 130px 110px, white, transparent),
    radial-gradient(1px 1px at 160px 20px, white, transparent),
    radial-gradient(1px 1px at 30px 150px, white, transparent)
    `,
                backgroundRepeat: 'repeat',
                backgroundSize: '180px 180px',
              }}
            ></div>
            <div
              className="animate-slow-spin absolute inset-0 opacity-50 [animation-direction:reverse]"
              style={{
                backgroundImage: `
    radial-gradient(1.5px 1.5px at 20px 30px, white, transparent),
    radial-gradient(1px 1px at 60px 70px, white, transparent),
    radial-gradient(1px 1px at 90px 40px, white, transparent),
    radial-gradient(1.5px 1.5px at 130px 110px, white, transparent),
    radial-gradient(1px 1px at 160px 20px, white, transparent),
    radial-gradient(1px 1px at 30px 150px, white, transparent)
    `,
                backgroundRepeat: 'repeat',
                backgroundSize: '100px 100px',
              }}
            ></div>
          </div>
          <div
            data-slot="spaceBackgroundVignette"
            className="pointer-events-none absolute inset-0 z-2 size-full shadow-[inset_0_0_60px_30px_#000000]"
          ></div>
        </div>
      </div>
    </div>
  );
}

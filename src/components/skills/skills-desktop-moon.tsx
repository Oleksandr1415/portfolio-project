import { type SkillPlanets, type PlanetDesign } from '@/mock/skills';
import { cn } from '@/utils/helpers';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import Badges from '@/partials/badges/badges';

export interface SkillsMoonHandle {
  updateAngle: (angle: number) => void;
}

export interface SkillsDesktopMoonProps {
  className?: string;
  planet: SkillPlanets;
  phaseShift?: number;
  speed?: number;
  index: number;
}

const planetsVariants: Record<PlanetDesign, string> = {
  core: 'planet-core-desktop hover:planet-core-desktop-hover',
  default: '',
  design: 'planet-design-desktop hover:planet-design-desktop-hover',
  framework: 'planet-framework-desktop hover:planet-framework-desktop-hover',
  markup: 'planet-markup-desktop hover:planet-markup-desktop-hover',
  tools: 'planet-tools-desktop hover:planet-tools-desktop-hover',
};

const tooltipVariants: Record<PlanetDesign, string> = {
  core: '',
  default: 'bg-skill-markup/10 border-skill-markup/33',
  design: 'bg-skill-design/10 border-skill-design/33',
  framework: 'bg-skill-framework/10 border-skill-framework/33',
  markup: 'bg-skill-markup/10 border-skill-markup/33',
  tools: 'bg-skill-tools/10 border-skill-tools/33',
};

const SkillsDesktopMoon = forwardRef<SkillsMoonHandle, SkillsDesktopMoonProps>(
  ({ className = '', planet, phaseShift = 0, speed, index }: SkillsDesktopMoonProps, ref) => {
    const modeRef = useRef<'playing' | 'paused'>('playing'); // Modes [playing | paused]
    const pauseStartAngleRef = useRef(0); // agnle at the moment of start of hover
    const offsetRef = useRef(0); // current difference between the angle that should be and the hovered moon

    const orbitSize = 54 + 12 * index;
    const effectiveSpeed = speed ?? 1 / Math.sqrt(orbitSize / 80 || 1);

    const elRef = useRef<HTMLDivElement>(null);
    const lastLiveAngleRef = useRef(0);

    const tooltipClass = tooltipVariants[planet.headline.toLowerCase() as PlanetDesign] ?? '';

    useImperativeHandle(ref, () => ({
      updateAngle(angle: number) {
        const liveAngle = angle * effectiveSpeed + phaseShift;
        lastLiveAngleRef.current = liveAngle;

        if (modeRef.current === 'paused') return; // frozen while hovered

        const effectiveAngle = liveAngle - offsetRef.current;
        const x = 50 + (27 + index * 6) * Math.cos(effectiveAngle);
        const y = 50 + (27 + index * 6) * Math.sin(effectiveAngle);

        if (elRef.current) {
          elRef.current.style.left = `${x}%`;
          elRef.current.style.top = `${y}%`;
        }
      },
    }));

    const handleOpenChange = (open: boolean) => {
      if (open) {
        pauseStartAngleRef.current = lastLiveAngleRef.current;
        modeRef.current = 'paused';
      } else {
        offsetRef.current += lastLiveAngleRef.current - pauseStartAngleRef.current;
        modeRef.current = 'playing';
      }
    };

    return (
      <>
        {/* Orbit Path Guide */}
        <div
          style={{
            height: `${orbitSize}%`,
            width: `${orbitSize}%`,
          }}
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20"
        />

        {/* Orbiting Planet */}
        <Tooltip onOpenChange={handleOpenChange}>
          <TooltipTrigger
            render={
              <div
                ref={elRef}
                className={cn([
                  planetsVariants[planet.headline.toLowerCase() as PlanetDesign],
                  'absolute flex size-[6%] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-end justify-center rounded-full',
                  className,
                ])}
              >
                <span className="translate-y-full text-xs select-none">
                  {planet.headline.toUpperCase()}
                </span>
              </div>
            }
          />
          <TooltipContent
            side="top"
            align="center"
            sideOffset={8}
            className={cn(['m-0 rounded-xl bg-black p-0'])}
          >
            <Badges
              badgeList={planet.badgesList}
              className={cn([tooltipClass], 'rounded-xl border border-white/15 p-3')}
              variant={planet.headline.toLowerCase() as PlanetDesign}
            />
          </TooltipContent>
        </Tooltip>
      </>
    );
  },
);

export default SkillsDesktopMoon;

import { type SkillPlanets, type PlanetDesign } from '@/mock/skill-planets';
import { cn } from '@/utils/helpers';
import { useRef } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import Badges from '../partials/badges';

export interface SkillsMoonDesktopProps {
  className?: string;
  planet: SkillPlanets;
  angle: number;
  phaseShift?: number;
  radius?: number;
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
  default: '',
  design: '',
  framework: '',
  markup: '',
  tools: '',
};

export default function skillsMoonDesktop({
  className = '',
  planet,
  angle = 0,
  phaseShift = 0,
  speed,
  index,
}: SkillsMoonDesktopProps) {
  // catch-up system variables
  const modeRef = useRef<'playing' | 'paused'>('playing'); // Modes [playing | paused]
  const pauseStartAngleRef = useRef(0); // agnle at the moment of start of hover
  const offsetRef = useRef(0); // current difference between the angle that should be and the hovered moon
  // const modeRef = useRef<'playing' | 'paused' | 'catchingUp'>('playing'); // Modes [playing | paused | catchingUp]
  // const pauseStartAngleRef = useRef(0); // agnle at the moment of start of hover
  // const offsetRef = useRef(0); // current difference between the angle that should be and the hovered moon
  // const catchUpStartTimeRef = useRef(0); // time of the beginning of catchUp process
  // const catchUpStartOffsetRef = useRef(0); // extra variable for calculations
  // const CATCH_UP_DURATION = 900; // ms

  const orbitSize = 54 + 12 * index;
  const effectiveSpeed = speed ?? 1 / Math.sqrt(orbitSize / 80 || 1);
  const liveAngle = angle * effectiveSpeed + phaseShift;

  // catch-up system for hovered moons
  // if (modeRef.current === 'paused') {
  //   offsetRef.current = liveAngle - pauseStartAngleRef.current;
  // } else if (modeRef.current === 'catchingUp') {

  // const elapsedTime = performance.now() - catchUpStartTimeRef.current;
  // const time = Math.min(elapsedTime / CATCH_UP_DURATION, 1);
  // const eased = 1 - Math.pow(1 - time, 3); // easeOutCubic
  // offsetRef.current = catchUpStartOffsetRef.current * (1 - eased);
  // if (time >= 1) {
  //   modeRef.current = 'playing';
  //   offsetRef.current = 0;
  // }
  // }

  const effectiveAngle = liveAngle - offsetRef.current;

  //x & y = center + (default offset + gap between planets) * ([ -1 : +1 ])
  const x = 50 + (27 + index * 6) * Math.cos(effectiveAngle);
  const y = 50 + (27 + index * 6) * Math.sin(effectiveAngle);

  const handleEnter = () => {
    pauseStartAngleRef.current = liveAngle;
    modeRef.current = 'paused';
  };

  const handleLeave = () => {
    // catchUpStartTimeRef.current = performance.now();
    // catchUpStartOffsetRef.current = offsetRef.current;
    // modeRef.current = 'catchingUp';
    offsetRef.current = offsetRef.current + liveAngle - pauseStartAngleRef.current;
    modeRef.current = 'playing';
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
      <Tooltip>
        <TooltipTrigger
          render={
            <div
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              className={cn([
                planetsVariants[planet.headline.toLowerCase() as PlanetDesign],
                'absolute size-[6%] -translate-x-1/2 -translate-y-1/2 rounded-full',
                'hover:cursor-pointer',
                className,
              ])}
            />
          }
        />
        <TooltipContent side="top" align="center" sideOffset={8} className="">
          <Badges
            badgeList={planet.badgesList}
            variant={planet.headline.toLowerCase() as PlanetDesign}
          />
        </TooltipContent>
      </Tooltip>
    </>
  );
}

import { forwardRef, useImperativeHandle, useRef, type ReactNode } from 'react';
import { cn } from '@/utils/helpers';

export interface OrbitingBodyHandle {
  updateAngle: (angle: number) => void;
}

export interface OrbitingBodyProps {
  className?: string;
  orbitRadius: number; // distance from center, in % of parent container
  phaseShift?: number;
  speed?: number;
  children: ReactNode;
}

const OrbitingBody = forwardRef<OrbitingBodyHandle, OrbitingBodyProps>(
  ({ className, orbitRadius, phaseShift = 0, speed = 1, children }, ref) => {
    const elRef = useRef<HTMLDivElement>(null);
    const modeRef = useRef<'playing' | 'paused'>('playing'); // Modes [playing | paused]
    const pauseStartAngleRef = useRef(0); // agnle at the moment of start of hover
    const offsetRef = useRef(0); // current difference between the angle that should be and the hovered moon
    const currentLiveAngleRef = useRef(0);

    useImperativeHandle(ref, () => ({
      updateAngle(angle: number) {
        const liveAngle = angle * speed + phaseShift;
        currentLiveAngleRef.current = liveAngle;

        if (modeRef.current === 'paused') return; // frozen while hovered

        const effectiveAngle = liveAngle - offsetRef.current;
        const x = 50 + orbitRadius * Math.cos(effectiveAngle);
        const y = 50 + orbitRadius * Math.sin(effectiveAngle);
        if (elRef.current) {
          elRef.current.style.left = `${x}%`;
          elRef.current.style.top = `${y}%`;
        }
      },
    }));

    const handleMouseEnter = () => {
      pauseStartAngleRef.current = currentLiveAngleRef.current;
      modeRef.current = 'paused';
    };

    const handleMouseLeave = () => {
      offsetRef.current += currentLiveAngleRef.current - pauseStartAngleRef.current;
      modeRef.current = 'playing';
    };

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={elRef}
        className={cn(['absolute -translate-x-1/2 -translate-y-1/2', className])}
      >
        {children}
      </div>
    );
  },
);
OrbitingBody.displayName = 'OrbitingBody';

export default OrbitingBody;
